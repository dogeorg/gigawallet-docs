# Basic Concepts


GigaWallet has been designed as a drop-in solution for anyone who needs 
to accept Dogecoin and respond in a timely manner when payment arrives. 

From individual stores who need a Dogecoin checkout solution to global 
social media networks with millions of users recieving and sending each-other
tips or payments, GigaWallet aims to be adaptable to each scenario. To
achieve this aim we have some simple abstractions for managing payment:



# Accounts 

An Account manages a Dogecoin HD wallet, which is used to sign transactions
for outgoing payments, and create child-addresses for each Invoice issued.

Accounts are created using the `POST /account` [Admin API](#admin-api), and require a 
foreignID from your system which will be used to address the account on 
further API calls. 

Accounts have many [Invoices](#invoices) which represent requests for payment, 
as well as a Balance which tracks current available Dogecoin and current 
pending incoming and outgoing transactions.

How you map Accounts to your system depends on your objective, you may 
have an account per user in the case of a Social Media platform, or if 
you are an entity with a number of clients you could choose to 
manage each with their own pay-to account. 

[You can read more about Accounts here.](/accounts.md)

# Invoices 

Accounts are used to issue Invoices, which are a collection of Items with 
quantities and values. Items represent a line on the invoice and come in 
a number of types: item, tax, fee, shipping, discount, donation, etc.

An invoice is created using the `POST /account/:foreignID/invoice` [Admin API](#admin-api)
and once created cannot be modified, GigaWallet is not a shopping-cart system
and if you want users to be able to add/remove items that should happen on
your side _before_ an Invoice is issued. 

Invoices provide payment URLs, QRCodes and DogeConnect JSON Payloads via the [Public API](#public-api) 
which can be used by your front-end to provide convenience payment options 
for your users. 

[You can read more about Invoices here.](/invoices.md)

# Dogecoin Connect 

# Public API

# Admin API
