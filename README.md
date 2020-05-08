# Strawpoll.me bypass (automatic voting)
Script for automatically vote multiple times in the website "strawpoll.me". Easy to use (maybe not for dummies).
If you have no idea whats a script, npm, github or dependencies you should look at the end of the page.

Features:
- Automatically vote multiple times;
- Works with IP check;
- Faster than you ejaculating;
- It doesn't work with CAPTCHA

*You may get the error "read ECONNRESET" sometimes. Just ignore it and use the script again.

How to use it on Windows:
 1. Install dependencies; (request, longjohn and cheerio)
  https://www.npmjs.com/package/request                                                                                         
  https://www.npmjs.com/package/longjohn                                                                                       
  https://www.npmjs.com/package/cheerio                                                                                         
  
 2. Place the socks you got at 'socks.json' in the following format: [ [IP HERE], [ANOTHER IP], [AND SO ON] ]
 3. Edit the lines 15, 16 and 17
 4. Profit

https://www.strawpoll.me/19987846/r


Status: Currently working; 08/05/2020
proof https://www.strawpoll.me/19987846/r






                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   


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



