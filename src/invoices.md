# Working with Invoices

Once you have [Accounts](/accounts/) established it's time to start issuing Invoices. Invoices are
simply a list of items, services, taxes, fees, discounts etc. which a seller is offering for payment
in Dogecoin.

> 📚 Wikipedia: 
> An invoice, bill or tab is a commercial document issued by a seller to a buyer relating to a sale 
> transaction and indicating the products, quantities, and agreed-upon prices for products or services
> the seller had provided the buyer.

As mentioned previously Gigawallet is not your general-purpose user database, just so it is not
your general purpose shopping-cart either. For this reason `Invoices` are specifically
designed to encourage you to have finalised all purchase decisions before issuing an Invoice as the 
final step when your user wants to pay in Dogecoin. Once created an invoice cannot be directly updated
(this is a design decision!) Gigawallet is a payment system for Dogecoin. 


### Parts of an Invoice

An invoice is created via the `POST /account/:foreignID/invoice` endpoint and consists of a list of
items along with metadata about the status of the payment. Here is an example invoice:

```json
{
  "id": "DNBVSoHLhX4gQiGLdZJhXMe7XZWuD7orVo",
  "items": [
    {
      "type": "item",
      "name": "A segment of Toblerone",
      "sku": "TOB001",
      "description": "You can share my Toblerone, for 1 Dogecoin!",
      "value": "1",
      "quantity": 1,
      "image_link": ""
    }
  ],
  "created": "2023-08-17T15:40:13.935244+10:00",
  "total": "1",
  "pay_to_address": "DNBVSoHLhX4gQiGLdZJhXMe7XZWuD7orVo",
  "part_payment_detected": false,
  "total_payment_detected": false,
  "total_payment_confirmed": false,
  "payment_unconfirmed": false,
  "estimate_seconds_to_confirm": 0
}
```

### id

This is a unique ID, it also happens to be the public child address generated from the account 
HD wallet for this invoice. You'll notice it's identical to `pay_to_address` for that reason, you
can use this to reference the invoice in future API calls or as a unique identifier for the 
invoice in your own system.

### items

Items is an array of line items that get passed in when the invoice is created, Items have a
`value` which is a decimal amount of Dogecoin, as a string, per item. This is multiplied by
`quantity` and summed across all items to derrive the invoice `total`. 

Items also have a `type` which must be one of:

* item
* tax
* fee
* shipping
* discount

These types are primarily used to distinguish line-items in UI, so that taxes, shipping and fees
can be grouped separately. We do validate that all item `values` are a positve amount, except for 
items of type `discount` which must be a negative amount.

### total

This is the total calculated amount owing for the invoice to be considered paid, and is calculated
as the sum of all item values * quantity. This is a decimal value as a string. 

### pay_to_address

This is the dogecoin address for recieving invoice payment.

### part_payment_detected

This is a boolean flag that will be set when GigaWallet first detects any kind of payment in 
a block. This may or may not be the total amount owing. 

### total_payment_detected

This is a boolean flag that will be set when GigaWallet first detects a payment in a block that
would complete the total amount owing.

### total_payment_confirmed

This is a boolean flag that will be set when GigaWallet detects that `required_confirmations` have
been met on the network, this is the best means of determining payment has been made.

### payment_unconfirmed

This boolean will only be set in the event that `required_confirmations` has been met and confirmed,
however the blockchain has forked and eliminated your payment. This should only occur in the event that
you are using a very low `required_confirmations` count. 

> ⚠️ Note: What should you do in this event? Did I just lose my Dogecoin?
>
> GigaWallet cannot hide you from the reality of the blockchain and the potential for soft-forks,
> in day to day running we see these tip-reorgs happening semi regularly and removing 1 or at most 2
> blocks of confirmation. In the event that a tip-reorg happens and that decrements the required number
> of confirmations or even eliminates your payment, it is highly likely that the transaction will 
> be included in a new block shortly. GigaWallet will then re-issue and re-set the appropriate events / flags
> on the new tip. 
>
> It is possible that the payer has intentionally issued a double-spend transaction hoping
> to fake payment, we recommend that you set a `required_confirmations` value commensurate with
> the amount of Dogecoin in your invoice and the appropriate level of risk. If you are selling 
> someone a Coffee for 30 Dogecoin perhaps a 1 block confirmation is fine, if you are selling 
> a million dollar house, there is no reason not to wait for 20-30 confirmations, the ink will 
> still be wet on the page anyway. 

### estimate_seconds_to_confirm

Once an intial payment has been seen, this value will be an estimate of the remaining seconds 
before confirmation based on the `required_confirmations` set for this Invoice. This is useful
for anyone using a poll-method to query payment as you can roughly predict the wait-time. If 
no payment has been seen or the invoice is already paid this value will be 0.

## Admin API

### POST /account/:foreignID/invoice  
_Create an Invoice

`:foreignID` is the unique identifier from your system which you used to create an `account`.


***REQUEST BODY:***

Expected POST Body:
```json
{
  "items": [
    {
      "name": "Dogecoin Sticker",
      "value": "100.00",
      "quantity": 1,
      "type": "item"
    }
  ],
  "required_confirmations": 3
}
```

***RESPONSE BODY:***
```json
{
  "id": "DMcUQWwMdpdXqiYNiYgCzrM5Wn85dYerQH",
  "items": [
    {
      "type": "item",
      "name": "Dogecoin Sticker",
      "sku": "",
      "description": "",
      "value": "100",
      "quantity": 1,
      "image_link": ""
    }
  ],
  "created": "2023-08-30T16:49:51.705419+10:00",
  "total": "100",
  "pay_to_address": "DMcUQWwMdpdXqiYNiYgCzrM5Wn85dYerQH",
  "part_payment_detected": false,
  "total_payment_detected": false,
  "total_payment_confirmed": false,
  "payment_unconfirmed": false,
  "estimate_seconds_to_confirm": 0
}
```

## Public API
### Fetching 
