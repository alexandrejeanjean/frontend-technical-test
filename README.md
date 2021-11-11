# Hello leboncoin team :) :

You will find on the dev branch the result of my test.

What I have done :
- First I have created components you can see in ``/design-system`` page.
- Then I have designed a simplistic interface wich is responsive. I have opt for a simple toggle display instead of a navigation. Maybe that could have been a better solution.
- I have tried to add accessibilities label, sr-only, and keyboard control as much as possible.
- I have used ``use-http`` npm package because it provides hooks support and at first glance I though it would be a pretty solution for caching datas (It was my first time using this library). But, I was not able to clear the cache of ``GET`` request when I needed it, like after a ``POST``. So, fetching messages is not as optimized as I want it to be.
- I wrote some unit tests, visual regression tests (snapshots), and end to end tests using cypress.
- I don't know why, but I receive a ``404 not found`` when I want to ``DELETE`` a message from database. I have test a lot of different params to be sure it is not from my work... But I did not find the answer. However, you will find that I have create all the process, from confirmation modal, to API call.

What I have not done :
- I did not provide robust safety guards. I don't understand what was needed to do. Maybe it was to had fake token in authorization header ? 
- I did not create ``GET`` request on ``users`` and so neither ``POST`` request to create a new conversation. 

I know I have not done everything you ask to, but after around 18 to 20 hours of work, I thought it will be enough for you to see how I code, structure and think front-end applications.

It was a good challenge for me, hope you will find some interesting pieces.

I wish you a good day :)

Alexandre
