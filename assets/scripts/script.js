let now = moment();

const workDayTime = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"];

// Functionality to create and display schedule time blocks.
function createSchedule () {
    for (i = 0; i < workDayTime.length; i++) {
        console.log(workDayTime[i]);
    }
}

createSchedule ();