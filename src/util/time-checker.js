import date from "date-and-time";

export default function convertTimeToDate(time) {
    let inputTime = date.parse(time, 'HH:mm');
    if (isNaN(inputTime)) {
        console.error("Invalid time passed, format should be HH:mm");
        process.exit(1);
    }
    let timeArray = time.split(":");
    let plannedDate = new Date(Date.now());
    plannedDate.setHours(Number(timeArray[0]), Number(timeArray[1]));
    return plannedDate;
}