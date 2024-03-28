# Installation

## Pre-requisites 

GigaWallet is intentionally easy to compile and run, weather you
are looking to build from source or via containers, we've got you 
covered.

### Golang compiler

To build from source you will need the Golang compiler installed.
Head on over to [go.dev and grab a 
copy for your local environment](https://go.dev/doc/install).

### Dogecoin Core Node

GigaWallet currently depends on a co-located instance of the Dogecoin
Core Node project, we recommend building this without the wallet / QT 
features, and with the RPC APIs. 

> ⚠️ **Important:** Gigawallet trusts the Core Node to provide accurate blockchain data; for this reason is **critically important** to use a Core Node that you fully trust. It's safest to host the Core Node yourself.

If you would like to build this yourself or download binaries you 
can grab these at 
[Github.com/dogecoin/dogecoin](https://github.com/dogecoin/dogecoin),

alternatively if you're happy with containers or packages try the
[NixOS](#running-with-nixos) or [Docker](#running-with-docker) deployment 
methods.

> ⚠️ Note: Running a full core node requires a significant amount
> of disk to contain the entire Dogecoin blockchain (140Gb as at March 2024), 
> as well as a moderate amound of bandwidth. 

## Building from source

Install some dependencies required to build Gigawallet:

* GCC compiler toolchain (for [cgo](https://go.dev/blog/cgo) i.e. Go-to-C linking; only GCC is supported!)
* zeroMQ version 4 – [docs](https://zeromq.org/download/) [wiki](http://wiki.zeromq.org/intro:get-the-software)
* SQLite 3 – [docs](https://www.sqlite.org/download.html)

```shell
sudo apt-get update
sudo apt-get install libzmq3-dev sqlite3 libsqlite3-dev build-essential pkg-config
```

**On Windows**: you can use [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) to install these tools, and build Gigawallet from inside the WSL environment (you can access windows drives via `/mnt/c` etc.) Alternatively there is [MSYS2](https://www.msys2.org/) which provides a GCC build environment without using WSL.

**On Mac**: you can use [Homebrew](https://brew.sh/): `brew install zmq pkg-config` – note that `sqlite3` is pre-installed on modern macs. You can brew install `git` if necessary.

### Building Gigawallet

Check out the project from Github and run `make`

```sh
> git clone git@github.com:dogecoinfoundation/gigawallet.git
...

> cd gigawallet
> make
```

This will create a `gigawallet` binary in `/build/`. 

`gigawallet` has several subcommands:

- `./gigawallet server` starts the server running.
- `./gigawallet printconf` will dump out the config structure and exit.
- `./gigawallet setsyncheight <height>` will rewind the entire db and begin re-indexing from core, you probably don't need this.. probably.


> ⚠️ Note: Developer Shortcut 
> If you are developing in the repository you can simply run `make dev` which will stand-up
> the server using the devconf.toml file. VS Code debugger also works.


## Configuration 


### Config file location

By default the `gigawallet` command will look for a `config.toml` file in one of:

```
. 
/etc/gigawallet/ 
$HOME/.gigawallet/
```

The name of the config file can be changed by providing the GIGA_ENV environment variable. 
This allows you to operate several different config files and switch between them, for instance 
if you have: 

```
/etc/gigawallet/production.toml
/etc/gigawallet/staging.toml
```

You could switch between them with `GIGA_ENV=production gigawallet <subcommands>`.  


### Eaxample config

There is an exmaple config file which is kept current with the software in the repo
[https://raw.githubusercontent.com/dogecoinfoundation/gigawallet/main/devconf.toml](https://raw.githubusercontent.com/dogecoinfoundation/gigawallet/main/devconf.toml)
which you can use as a starting point. 


### Configure API ports

Gigawallet exposes two REST APIs: 

- **Admin API** which provides sensitive, internal functionality which is called
from your own backend services, and must be **protected behind a firewall**. 

- **Public API** which provides web-facing routes for your front-end calls, for 
fetching Invoice data, QR codes for payments, and the Doge Connect protocol 
endpoints. We recommend this sit behind your load-balancer/proxy and be routed 
to as required for your needs.

`pubapirooturl` is used internally when generating Doge Connect payloads to
allow clients to submit payments back to Gigawallet for processing. 

```toml
[WebAPI]
  adminbind = "localhost"
  adminport = "8081"
  pubbind = "localhost"
  pubport = "8082"
  pubapirooturl = "https://example.com/gigawallet"
```

## Configure the data store

Gigawallet currently operates using SQLite or PostgreSQL databases. We recommend
using sqlite for development / local testing, and PostgreSQL for production. Also
note that you can easily extend Gigawallet for different databases, see [Extending](extending).

### Running with sqlite (default)
```toml
[Store]
  DBFile = "gigawallet.db"
```

### Running with PostgreSQL

```toml
[Store]
  DBFile = "postgres://username:password@localhost/gigawallet?sslmode=disable"
```

Currently Gigawallet PostgreSQL requires full permissions to create tables / indexes 
which is an unfortunate side-effect of our sqlite-first development, this will be 
changed in the future, however for now here is a quick-start for setting up a new
DB:

```sql
-- create a database, you can call it whatever you like.
CREATE DATABASE gigawallet;

-- create a user, pick a better password than this!
CREATE USER gigawallet WITH PASSWORD 'up-up-down-down-left-right-left-right-b-a-start';

-- set the database owner and grant permissions
ALTER DATABASE gigawallet OWNER TO gigawallet;
GRANT ALL ON DATABASE gigawallet TO gigawallet;
```

As mentioned above, Gigawallet will create all tables it needs on first run.

### Configuring Core access

As mentioned above, Gigawallet is currently designed to co-locate with a Core instance
for communicating with the Dogecoin L1 network. 

You can create as many `[dogecoind.nnnnn]` sections as you like to represent access
to various Core instances you may have, which gets used is determined by the `gigawallet.network`
value.

```toml

[gigawallet]
  network = "mainnet"  # which dogecoind to connect to

[dogecoind.testnet]
  host    = "127.0.0.1"
  zmqport = 28332
  rpcport = 44555
  rpcpass = "gigawallet"
  rpcuser = "gigawallet"

[dogecoind.mainnet]
  host    = "127.0.0.1"
  zmqport = 28332
  rpchost = "127.0.0.1"
  rpcport = 22555
  rpcpass = "gigawallet"
  rpcuser = "gigawallet"
```


### Configuring Loggers

Gigawallet can create as many loggers as you like, these log events that cross the 
[internal event-bus]. Events have a type which is one of:

- SYS  - System messages & errors. 
- ACC  - Account events. 
- INV  - Invoice events.
- NET  - Network (L1) events.
- ALL  - Synthetic type which catches all of the above.

Loggers are specified as a list of types and a path:

```toml
[loggers.events]
  path = "./events.log"
  types = ["ALL"]

[loggers.system]  
  path = "./system.log"
  types = ["SYS"]
  
```

### Configuring HTTP Callbacks

Callbacks or 'webhooks' are URLs which you can configure to recieve HTTP POST requests
containing JSON-encoded event bodies. This can be used by your system to respond to events
such as invoice paid etc.  

To configure callbacks, provide a path and a type of event you'd like (see Loggers for a list)
```toml
[callbacks.example1]
  path = "https://example.com/MyInvoiceEvents"
  types = ["INV"]
```

### Configuring MQTT topics

If http callbacks are not your thing, you can send events to an MQTT compatible message service.
Firstly use the `[mqtt]` block to configure the server you'd like to connect to, then set up one
or more `[mqtt.queues.*]` blocks with a topicfilter and types of events to send.
```toml
[mqtt]
  address = "test.mosquitto.org:1884"
  username = "rw"
  password = "readwrite"
  clientid = "gigawallet"

[mqtt.queues.accounts]
  topicfilter = "account"
  Types = ["ACC"]
```

## Running with NixOS

TODO

## Running with Docker

TODO
