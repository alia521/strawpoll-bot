# Strawpoll.me bypass (automatic voting)
Script for automatically vote multiple times in the website "strawpoll.me". Easy to use (maybe not for dummies).
If you have no idea whats a script, npm, github or dependencies you should look at the end of the page.

## Features
- Automatically vote multiple times;
- Auto proxy scrapper;
- Friendly interface;
- Works with IP check;
- It's fast;
- Do *NOT* work with _CAPTCHA_;

### I plan to add:
- [] Voting in multiple options poll;
- [] Voting in strawpoll.com (only works for strawpoll.me for now);
- [] If you wan't anything you can request it :)


## How to use it:
- Download or clone this repository;
- Open it's folder;
- Write node index in your terminal/git
- It will ask you some options:

![Options](https://raw.githubusercontent.com/HRPsomenumbers/images/master/options.PNG?token=AKD35ONDFG3K6A7LYILYR2K6W2ZT4)

![Proof that it works](https://raw.githubusercontent.com/HRPsomenumbers/images/master/proof.PNG?token=AKD35ON6H3XSVKCZPAVHEV26W2ZEI)



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   


For dummies:

1. Download the program GIT if you don't have it. (https://en.wikipedia.org/wiki/Git, https://git-scm.com/downloads)
2. Download node.js if you don't have it. (https://en.wikipedia.org/wiki/Node.js, https://nodejs.org/en/)
3. Download the script https://github.com/HRPsomenumbers/strawpoll-bot/archive/master.zip
4. Place the files (which you have downloaded in the step 3) in a folder.
5. Right click IN THE FOLDER THE SCRIPT IS IN, then press "GIT Bash here".
6. Write "npm i cheerio". Wait for it download, then write "npm i request". Same history again but now "npm i longjohn" ¹
7. Get a list of HTTP proxies (you can find them here: https://proxyscrape.com/free-proxy-list)
8. Place them at socks.json ²
9. Edit the lines 15, 16 and 17 in the script to configurate it and then save the file.
10. Write "node index" in GIT (notice you must open git in folder where your script is in).
11. Profit !


¹ The script has 3 dependencies: https://www.npmjs.com/package/cheerio, https://www.npmjs.com/package/request and https://github.com/mattinsler/longjohn

² In the following format: "[ [ip here], [another one here], [also here], [here too] ]". You can add more if you want (you really should add at least 4000). Also you may want use https://shancarter.github.io/mr-data-converter/ to make things faster.



