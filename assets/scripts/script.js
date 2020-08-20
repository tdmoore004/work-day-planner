let now = moment();

const workDayTime = ["9 AM", "10 AM", "11 AM", "Noon", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
const timeValue = [09, 10, 11, 12, 13, 14, 15, 16, 17];
let timeBlock = $("<section>");
let hourBlock = $("<div>");
let taskBlock = $("<textarea>");
let saveButton = $("<button>");

// Create and display schedule time blocks.
function createSchedule() {
    $.each(workDayTime, function (index, time) {

        // Creating rows for hour time blocks.
        timeBlock = $("<section>");
        timeBlock.addClass("row");

        // Hour Section
        hourBlock = $("<div>");
        hourBlock.addClass("hour col-2 col-lg-1");
        hourBlock.css("text-align", "center");
        hourBlock.css("padding-top", "31.5px");
        hourBlock.text(time);
        timeBlock.append(hourBlock);

        // Task Section
        taskBlock = $("<textarea>");
        taskBlock.addClass("col-8 col-lg-10");
        taskBlock.attr("id", timeValue[index]);
        timeBlock.append(taskBlock);

        // Save Button
        saveButton = $("<button>");
        saveButton.addClass("saveBtn fa fa-save col-2 col-lg-1");
        saveButton.attr("id", timeValue[index]);
        saveButton.css("font-size", "24px");
        timeBlock.append(saveButton);

        $(".container").append(timeBlock);
    });
};

// Look at the time and format time blocks accordingly.
function stylePastPresentFuture() {

    // Initial styling of task blocks
    $.each(workDayTime, function (index, time) {
        taskBlock = $("#" + timeValue[index]);

        // Style for the past
        if ((parseInt(taskBlock[0].id) < now.hour())) {
            taskBlock.addClass("past");

            // Style for present
        } else if ((parseInt(taskBlock[0].id) === now.hour())) {
            taskBlock.addClass("present");

            // Style for future
        } else {
            taskBlock.addClass("future");
        };
    });

    // Restyle if time changes
    setInterval(function () {
        $.each(workDayTime, function (index, time) {
            taskBlock = $("#" + timeValue[index]);

            // Style for the past
            if ((parseInt(taskBlock[0].id) < now.hour())) {
                taskBlock.addClass("past");

                // Style for present
            } else if ((parseInt(taskBlock[0].id) === now.hour())) {
                taskBlock.addClass("present");

                // Style for future
            } else {
                taskBlock.addClass("future");
            };
        })
    }, 1000);
};

// Display saved tasks to task blocks.
function displayTasks() {
    $.each(workDayTime, function (index, time) {
        taskBlock = $("#" + timeValue[index]);
        taskBlock.text(localStorage.getItem("taskEntry" + timeValue[index]));
    })
};

// Save task entries to local storage.
function saveTasks(event) {
    localStorage.setItem("taskEntry" + event.currentTarget.id, event.currentTarget.previousSibling.value);
};

createSchedule();
stylePastPresentFuture();
displayTasks();
$(".saveBtn").click(saveTasks);
