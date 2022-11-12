// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//All of the code inside the following function will run when the page is loaded. 
$(function () {
  // Gets the current date and adds it to the header.
  var today = dayjs().format('dddd, MMMM DD');
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

  // Sets a variable that gets the current hour of the day.
  var realTimeHour = dayjs().hour();
  console.log(realTimeHour);
  
  for (var i = 0; i < workHours.length; i ++) {
    if (workHours[i] < realTimeHour) {
      $('.time-block').addClass('past');
    } else if (workHours[i] == realTimeHour) {
      $('.time-block').addClass('present');
    } else {
      $('.time-block').addClass('future');
    }
  }

  // This code should use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
