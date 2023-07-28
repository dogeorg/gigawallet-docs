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
interface, and with the RPC APIs. 

If you would like to build this yourself or download binaries you 
can grab these at 
[Github.com/dogecoin/dogecoin](https://github.com/dogecoin/dogecoin),
alternatively if you're using the [NixOS](#running-with-nixos) or 
[Docker](#running-with-docker) deployment method then these are 
configured as containers.

> ⚠️ Note: Running a full core node requires a significant amount
> of disk to contain the entire Dogecoin blockchain (85Gb as at 2023), 
> as well as a moderate amound of bandwidth. 

## Building from source

Check out the project from Github and run `make`

```sh
> git clone git@github.com:dogecoinfoundation/gigawallet.git
...

> cd gigawallet
> make
```

This will create a `/build/gigawallet` binary. 

## Configuration 

## Running with NixOS

## Running with Docker
