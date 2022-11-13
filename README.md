# Work Day Scheduler
This web application can be used to easily schedule events within the hours of the work day. Events can be saved for the hour it is placed in to better keep track of your schedule.

## Project Description
To build this application a HTML, CSS, and JavaScript file was used. The HTML file holds the elements that structures the containers of the time blocks. Time blocks range from 9AM to 5PM for the typical business hours. The time blocks display the hour, has an input area that the user can input their event and a save button to keep the event on the schedule when the web app is refreshed. The CSS file holds the styling of the time blocks. If the hour on the schedule is in the past of the current hour of the day, the time block will be displayed in grey. If the hour of the time block matches the current hour of the day then the time block will be displayed in red. If the hour of the time block is in the future of the current hour of the day the time block will be displayed in green. The JavaScript file holds the functions and the conditions to dynamically change the schedule as the time changes. Below are functions that are included in the JavaScript file to make the schedule dynamic.
* Accesses the Day.js library to display the current day, month, date, and year in the header.
* Places a click event on the HTML save button element to store the user input of the scheduled event to the local storage.
* Loops through the stored events to get, and continue to display them in the respective time block when the user refreshes the page.
* Accesses Day.js library to get the current hour and compare to the hour of the time block.
* A for loop to dynamically style the time blocks to show which hour is in the past, which hour is present, and which hours are coming up in the future. 

## Demo of Deployed site
* Below is a demo of the schedule being used and a new event being added, saved and refreshing the page to demonstrate the event had been properly saved and stored.
![](./Assets/Demo%20of%20Work%20Day%20Schedule.gif)

## Project URLs
* Deployed site URL:
* GitHub Repo URL: