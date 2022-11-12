console.log('Running');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//runs all the code inside of this function when the page is loaded. 
$(function () {
  var today = dayjs().format('dddd, MMMM DD');
  $('#currentDay').text(today);

    // TODO: Add a listener for click events on the save button. 
  var saveButton = $('.saveBtn');
  saveButton.on('click', function () {
    var eventText = $(this).siblings('.description').get(0).value;
    localStorage.setItem($(this).parent().attr('id'), eventText);
  })
  
  var workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  
  for (var i = 0; i < workHours.length; i ++) {
    var eventFromStorage = localStorage.getItem("hour-" + businessHours[i]);
    var hourContainerElm = document.querySelector('#hour-' + businessHours[i]);
    hourContainerElm.textContent = eventFromStorage;
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
