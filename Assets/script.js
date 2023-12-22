    //wrapped all code that interacts with the DOM in a call to jQuery
$(function () {

    //this is the code that allows for the time slots to change colors depending on the current time
    $(".time-block").each(function(){
        const timeSlot = $(this).attr("id");
        const currentTime = dayjs().format("HH");
        if (timeSlot < currentTime){
            $(this).addClass("past");
        } else if (timeSlot === currentTime){
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });

    //this is the code that displays the current date and time in the header section
    const currentDay = dayjs().format("dddd, MMMM D YYYY, h:mm a");
    $("#currentDay").text(currentDay);


    //this is the code that saves info to local storage and allows it to be called 
    $(function toDos() {
        $(".saveBtn").on("click", function() {
        const key = $(this).parent().attr("id");
        const value = $(this).siblings(".description").val();
        localStorage.setItem(key, value);
        });
        $(".time-block").each(function() {
        const key = $(this).attr("id");
        const value = localStorage.getItem(key);
        $(this).children(".description").val(value);
        })
    });
    
});
