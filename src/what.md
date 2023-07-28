# What is GigaWallet?

<p><img src="images/GigaWallet.gif" alt="The GigaWallet Logo" width="60%" style="margin-left: 20%;"/></p>

Dogecoin GigaWallet is a backend service which provides a convenient integration API 
for platforms such as online shops, exchanges, social media platforms etc, to accept 
and transact Dogecoin on behalf of their users.

The purpose of the GigaWallet is to promote the rapid uptake of Dogecoin as a payment 
option, by taking the complexity and risk out of integrating Dogecoin payments into 
business.

![Static Badge](https://img.shields.io/badge/0.1.0_alpha1-test?style=flat&logo=github&logoColor=white&label=GigaWallet&labelColor=black&color=white)

## It's dangerous to go alone, take this? Maybe! 

> ⚠️ Note: GigaWallet is a software-engineering component for anyone looking to 
> integrate Dogecoin into their product, this is not a user-facing Dogecoin wallet.
> If you are a user looking for a dogecoin wallet you can search the [wallet index](https://dogecoin.com/wallets/) 
> on the [dogecoin.com](https://dogecoin.com) website. 

<p><img src="images/dangerous.png" alt="dangerous to go alone" width="60%" style="margin-left: 20%;"/></p>

It is expected that you are a comfortable with managing server infrastructure and 
integrating with REST APIs. GigaWallet is a service that _must_ be deployed behind a 
firewall that protects it's sensitive APIs from the public internet, to which you 
will integrate your public-facing systems.  

Effort has been taken to create a system which integrates with _your platform_, and
so the APIs for Accounts all require a _foreignID_ which represents the account from
your system. 

GigaWallet manages it's own database to track HD wallets, Invoices, 
UTXOs and other data it needs, however it is not a general-purpose shopping cart 
or user management system, it is expected that you will provide what you need on 
your side to create the magic ✨ you have in mind, good luck adventurer!


