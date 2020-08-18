let now = moment();

const workDayTime = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"];

// Functionality to create and display schedule time blocks.
function createSchedule () {
    for (i = 0; i < workDayTime.length; i++) {
        console.log(workDayTime[i]);

        // Creating rows for hour time blocks.
        let timeBlock = document.createElement("section");
        timeBlock.classList.add("row");
        
        // Hour section.
        let hourBlock = document.createElement("div");
        hourBlock.classList.add("hour", "col-2", "pt-2");
        hourBlock.style.textAlign = "right";
        hourBlock.textContent = workDayTime[i];
        timeBlock.appendChild(hourBlock);
        console.log(hourBlock);

        document.querySelector(".container").appendChild(timeBlock);
        console.log(timeBlock);
    }
}

createSchedule ();