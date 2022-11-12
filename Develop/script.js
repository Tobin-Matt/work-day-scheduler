//All of the code inside the following function will run when the page is loaded. 
$(function () {
  // Gets the current date and adds it to the header.
  var today = dayjs().format('dddd, MMMM DD, YYYY');
  $('#currentDay').text(today);

  // Click event for the save button to save our calendar events.  
  var saveButton = $('.saveBtn');
  saveButton.on('click', function () {
    var eventText = $(this).siblings('.description').get(0).value;
    localStorage.setItem($(this).parent().attr('id'), eventText);
  });
  
  // Set an array to be able to call on the keys created in our setItem function
  var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  
  // This for loop will loop through each key used to save the calendar events and keep them on the calendar
  for (var i = 0; i < workHours.length; i ++) {
    var eventFromStorage = localStorage.getItem("hour-" + workHours[i]);
    var hourTextContent = document.querySelector('#hour-' + workHours[i] + ' > .description');
    hourTextContent.textContent = eventFromStorage;
  }

  // Sets a variable that gets the current hour of the day using DayJS.
  var realTimeHour = dayjs().hour();
  console.log(realTimeHour);
  
  // This for loop compares the time block hour of the calendar event vs the real time hour.
  // If time block hour is less than current hour then the time block will be gray.
  // If time block hour matches the current hour then the time block gets the style of present with a red background.
  // If time block hour is greater than current hour then it will be styled for future with a green background.
  for (var i = 0; i < workHours.length; i ++) {
    if (workHours[i] < realTimeHour) {
      $('#hour-' + workHours[i]).addClass('past');
    } else if (workHours[i] == realTimeHour) {
      $('#hour-' + workHours[i]).removeClass('past');
      $('#hour-' + workHours[i]).addClass('present');
    } else {
      $('#hour-' + workHours[i]).removeClass('past');
      $('#hour-' + workHours[i]).removeClass('present');
      $('#hour-' + workHours[i]).addClass('future');
    }
  }
});
