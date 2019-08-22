## The Problem

We have a set of tasks, each running at least daily, which are scheduled with a simplified cron. We want to find when each of them will next run.

The scheduler configuration looks like this:

```
30 1 /bin/run_me_daily
45 * /bin/run_me_hourly
* * /bin/run_me_every_minute
* 19 /bin/run_me_sixty_times
```

The first field is the minutes past the hour, the second field is the hour of the day and the third is the command to run. For both cases * means that it should run for all values of that field. In the above example run_me_daily has been set to run at 1:30am every day and run_me_hourly at 45 minutes past the hour every hour. The fields are whitespace separated and each entry is on a separate line.

We would like you to write a command line program that outputs the soonest time at which each of the commands will run and whether this will be today or tomorrow.

The config input will be via STDIN, and the output should be via STDOUT. The 'current time' will be the single command line argument to the program in the format HH:MM.

For example given the above examples as input and the simulated 'current time' command-line argument 16:10 the output should be

```
1:30 tomorrow - /bin/run_me_daily
16:45 today - /bin/run_me_hourly
16:10 today - /bin/run_me_every_minute
19:00 today - /bin/run_me_sixty_times
```

You may use any programming language you are comfortable in to solve this problem, and you may use source code snippets found elsewhere as long as you can comprehensively explain them.

## Setup / Install

Setup was done on Mint 18.3 but should work on any Linux OS.

Install NodeJs >8 - https://github.com/nodesource/distributions#debinstall, developed with:
 - `node --version` = v12.8.1
 - `npm --version` = 6.10.2
 
Building with Babel to enable use of ES6 features.

### Changing source code
1. run `npm install`
2. run `npm run watch`
3. you can execute any command using `node dist/cli.js [options]`

### Run Tests

`npm run test`

### Run Application

To run first `npm install` then `npm run build` and either:
 - `npm link` within this project will allow you to run `task-runner [options]` anywhere
 - `node dist/cli.js [options]`

If running different version of node (12) update the target node version in the `.babelrc` file.




 

  
  