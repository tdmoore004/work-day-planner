let now = moment();

const workDayTime = ["9 AM", "10 AM", "11 AM", "Noon", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
const timeValue = [09, 10, 11, 12, 13, 14, 15, 16, 17];

console.log(now.hour());

// Functionality to create and display schedule time blocks.
function createSchedule () {
    $.each(workDayTime, function(index, time) {

        // Creating rows for hour time blocks.
        let timeBlock = $("<section>");
        timeBlock.addClass("row");
        
        // Hour Section
        let hourBlock = $("<div>");
        hourBlock.addClass("hour col-1");
        hourBlock.css("text-align", "center");
        hourBlock.css("padding-top", "31.5px");
        hourBlock.text(time);
        timeBlock.append(hourBlock);

        // Task Section
        let taskBlock = $("<textarea>");
        taskBlock.addClass("col-10");
        taskBlock.attr("id", timeValue[index]);
        console.log(parseInt(taskBlock[0].id));
        timeBlock.append(taskBlock);

        // Save Button
        let saveButton = $("<button>");
        saveButton.addClass("saveBtn fa fa-save col-1");
        saveButton.css("font-size", "24px");
        timeBlock.append(saveButton);

        $(".container").append(timeBlock);
    }
    )
}

createSchedule ();