# Strawpoll.me bypass (automatic voting)
Script for automatically vote multiple times in the website "strawpoll.me". Easy to use. 
I think I have spent more sundays than I should working on this. I feel like the most recent version of this code has more ifs than it should (don't worry, its not this one) so before I upload it I find a way to compact it :(

https://www.strawpoll.me/20083588/r                https://www.strawpoll.me/20083356/r

## Features
- Automatically vote multiple times (about 1500 times);
- Auto proxy scrapper;
- Friendly interface;
- Works with IP check;
- You can use your own proxies if you wan't to.
- Does *NOT* work with _CAPTCHA_;

### I plan to add:
- Voting in multiple options polls;
- Voting in non-protected by ip check polls
- Voting in strawpoll.com (only works for strawpoll.me for now);
- If you wan't anything you can request it :)



## How to use it:
- Download or clone this repository;
- Open a terminal/command prompt *inside* its the folder;
- Run ```npm install```;
- Run ```node index.js```;
- Enter poll url/option when asked.

## Q & A:





#### Hey dude, I have no idea how to use this, and your guide didn't help me. Pls I just wan't to bot some polls !
Okay, i'll explain it better:

1. Download the program GIT if you don't have it. (https://en.wikipedia.org/wiki/Git, https://git-scm.com/downloads)
2. Download node.js if you don't have it. (https://en.wikipedia.org/wiki/Node.js, https://nodejs.org/en/)
3. Download the script https://github.com/666hrp/strawpoll-bot/archive/master.zip
4. Place the files (which you have downloaded in the step 3) in a folder.
5. Open the folder; right click _INSIDE_ it. Click on "Git Bash Here"
6. Write ```npm install``` and press enter
7. Write ```node index.js``` and press enter
8. Do as asked.
9. Done.


#### I d-don't know anything about coding. How I can be sure you it works ?!
Just check this out: https://www.strawpoll.me/20073567/r https://www.strawpoll.me/20081004/r

#### Your script doesn't end itself. Is it in an infinite loop ?
No, it isn't. When it run out of proxies, it'll close the loop but keep the process open to get all the responses :)
Although it will eventually end itself.

#### How does it work ?
It send votes from multiple proxies. Check details here: https://github.com/666hrp/strawpoll-bot/blob/master/index.js

#### Is it still working ?
Last time I tested it: 17/05/2020. Not sure when you're reading this, but if it stops working, you can contact me.

#### Does it have any dependencies ? Do I need to install them ?
Yes, it does. You must install it as asked here https://github.com/666hrp/strawpoll-bot/blob/master/README.md#how-to-use-it
