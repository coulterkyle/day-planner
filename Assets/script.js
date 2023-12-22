const currentDay = dayjs().format('dddd, MMMM D YYYY, h:mm a');
$('#currentDay').text(currentDay);

$(function () {
    $('.time-block').each(function(){
        const timeSlot = $(this).attr('id');
        const currentTime = dayjs().format('HH');
        if (timeSlot < currentTime){
            $(this).addClass("past");
        } else if (timeSlot === currentTime){
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });

    function toDos() {
        $('.saveBtn').on('click', function() {
          const key = $(this).parent().attr('id');
          const value = $(this).siblings('.description').val();
          localStorage.setItem(key, value);
        });
        $('.time-block').each(function() {
        const key = $(this).attr('id');
        const value = localStorage.getItem(key);
        $(this).children('.description').val(value);
        })
        };
    
    toDos();
});
