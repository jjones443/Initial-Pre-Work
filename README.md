# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When we hit https://www.techtonic.com/ in a client (web browser), the request is sent from the client and the web page is received from the server.

## From start to finish, how does data reach you to be rendered in the browser?

When we search a url in the web browser, the request is sent from the client and received by the server. The server then reads or interprets the request and sends the requested information back. In the case of https://www.techtonic.com/ it would start by sending the HTML document for the web page. After that it would send over the CSS file and Javascript file for the page.

## What code is rendered in the browser?

The browser renders the files received from the server. It starts with HTML and then reads and connected files needed such as CSS and Javascript

## What is the server-side code’s main function?

The main function of the server-side code is to hold specific responses based on the request from the client side.

## What is the client-side code’s main function?

The main function of the client-side code is to display the information received from the server side.

## What is runtime?

runtime is the time it takes for the files to be requested from the client and sent back to the client

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

Any time a request is sent to the server for the webpage(such as during a refresh), a new instance is created.

## How many instances of the server-side code are available at any given time?

As many instances as needed as long as the server is available.

## How many instances of the databases connected to the server application are created?

It has only one instance when connected to the server application.
