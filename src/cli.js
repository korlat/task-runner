#!/usr/bin/env node

import "core-js/stable";
import "regenerator-runtime/runtime";
import readline from "readline";

import convertTimeToDate from "./util/time-checker";
import outputNextCronRunForConfig from "./util/cron-parser";

let args = process.argv.slice(2);
if (args.length !== 1) {
    console.error("Invalid number of cmd line args passed");
    process.exit(1);
}
let plannedDate = convertTimeToDate(args[0]);

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let config = input.split(" ");
    if (config.length !== 3) {
        console.error("Invalid config input, example format '30 1 /bin/run_me_daily'");
        process.exit(1);
    }

    outputNextCronRunForConfig(config, plannedDate);
});