import date from "date-and-time";
import cronParser from "cron-parser";

export default function outputNextCronRun(cronInput, plannedDate) {
    let options = {
        currentDate: plannedDate,
    };
    let cronExpression = '* ' + cronInput[0] + ' ' + cronInput[1] + ' * * *';
    try {
        let interval = cronParser.parseExpression(cronExpression, options);
        let cronRunDate = interval.next();
        let displayDate = date.format(cronRunDate.toDate(), 'H:mm');
        let isSameDay = date.isSameDay(plannedDate, cronRunDate.toDate());
        console.log(`${displayDate} ${isSameDay? "today":"tomorrow"} - ${cronInput[2]}`);
    } catch (err) {
        console.error('Error invalid cron value: ' + err.message);
        process.exit(1);
    }
}