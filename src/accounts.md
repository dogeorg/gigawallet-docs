# Working with Accounts

Gigawallet is designed as a backend component that sits within your infrastructure, and 
as such is not supposed to be your system's user-database. It is designed with a fairly 
generic `Account` model which can be used as you see fit to match your business needs. 

Each `Account` within Gigawallet represents a Dogecoin HD Wallet, which is used to derive
child-addresses per `Invoice`. Accounts can list invoices, refund payments and have a 
`Balance` of their own. 

Accounts are created with a `Foreign ID` which is provided by you and links the account 
to your system. Most Admin APIs use this Foreign ID to reference internal accounts so
that you can easily integrate Gigawallet with your own systems.

## Different ways to use Accounts with your system

### Scenario 1 - Wholesale Store

You are a wholesale business selling dog-collars, dog-leads and accessories to pet stores.
You have a `customers database` with a `Customer ID` number for each pet store. You create a 
Gigawallet `Account` per customer using your `Customer ID` as the `Foreign ID`. 

You can:
- Issue invoices to your customers, including shipping fees and taxes.
- List invoices per customer.
- Manage refunds with a 'wallet' per customer to ensure funds are accessible.
- Check total balances received and pay those out to your central wallet when ready.


### Scenario 2 - Online Dogecoin Payments SaaS

You are a payment provider like PayPal, Square, etc. And are looking for a method to 
manage Dogecoin payments. You have a `users database` with a snowflake ID per user. You
create a Gigawallet `Account` per user using your snowflake ID as the `Foreign ID`. 

You can:
- Issue invoices on behalf of your users.
- Automatically pay-out to your user's cold wallet based on various thresholds.
- Provide a realtime balance of user's funds.
- Provide reports on payments in and out over time.


### Scenario 3 - Traditional Crypto Exchange

You are a traditional Crypto Exchange managing trades on behalf of your users. Gigawallet
is configured with an account per user, consistent with your existing user databases.

You can:
- Recieve payment in Dogecoin from your users into their Dogecoin wallet for trading. 
- Pay Dogecoin to your users wallet once trading is complete.
- Provide balance and reports on payments to and from their wallets.
- Configure auto-payouts to your users cold-wallet so they don't leave their Dogecoin on exchanges.

### Scenario 4 - Global Scale platform ie: X.com, Twitch TV, EBay, etc.

You are a large scale unicorn with hundreds of millions of users. Your infrastructure teams
can deploy Gigawallet in multiple configurations on your kubernetes clusters with appropriate auto-scaling 
and user sharding (in development). Gigawallet integrates directly into your existing stack 
with simple REST calls.

You can:
- Give each user the ability to recieve tips, accept and make payments, pay for products and subscriptions.
- Query balances and issue payouts to users personal wallets.
- Integrate Gigawallet directly into your messaging system (via MQTT) to trigger events when payments are confirmed.
- Help Dogecoin gain real utility as a global currency for all humanity.

## Account Administration APIs

TODO

### POST /account/:foreignID  
_Create or update an Account_

`:foreignID` is a gobal, (or shard)-unique identifier from your system which you will use
to address this `account` in subsequent requests.

***REQUEST BODY:***

Expected POST Body, an empty `{}` is fine to touch an account into existence. 
```js
{
  "payout_address" : "<P2PKH Dogecoin Address>",  // optional for auto-payout
  "payout_threshold" : "<decimal amount of dogecoin before auto-payout>" //optional 
  "payout_frequency" : "<duration in seconds for time-based auto-payouts>" //optional 
}
```

***RESPONSE BODY:***

Example response from `POST {} /account/123456789`
```js
{
    "foreign_id": "12345789",
    "id": "DRQu6WR6bpU9N4rm87PvpWZLQSqmGgphFD",
    "payout_address": "",
    "payout_frequency": "",
    "payout_threshold": "0"
}
```

Your account is now created with an HD wallet managed by Gigawallet.

### GET /account/:foreignID
_Get an Account_

***RESPONSE BODY:***

Example response from `GET /account/123456789`
```js
{
    "foreign_id": "12345789",
    "id": "DRQu6WR6bpU9N4rm87PvpWZLQSqmGgphFD",
    "payout_address": "",
    "payout_frequency": "",
    "payout_threshold": "0"
}
```

### GET /account/:foreignID/balance
_Get an Account's AccountBalance_

```js
{
    "CurrentBalance": "1000",       // Current balance available for spending 
    "IncomingBalance": "24.89774",  // Incoming payments which have not met the confirmation threshold
    "OutgoingBalance": "0"          // Outgoing payments which have not met the confirmation threshold
}
```


### POST /account/:foreignID/pay
_Send a payment from this account to an Address_

***REQUEST BODY:***

```js
{ "amount": "420.69, "to": "DPeTgZm7LabnmFTJkAPfADkwiKreEMmzio" } 
```


## Account Events 

Events are available either via http callbacks or MQTT messages.

TODO

### ACC_CREATED "CREATED"

### ACC_UPDATED "UPDATED"

### ACC_PAYMENT "PAYMENT"

### ACC_CHAIN_ACTIVITY "CHAIN_ACTIVITY"

### ACC_BALANCE_CHANGE "BALANCE_CHANGE"
