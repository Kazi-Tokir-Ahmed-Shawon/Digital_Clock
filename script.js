// This function gets the current date and returns it as a string
function getDate(){
    const weekdays = [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ];
    const months = [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "June",
                    "July",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                ];
  
// Create a new Date object to get the current date and time
    const currentDate = new Date();
  
// Extract the day of the week, date, month, and year from the Date object
    const dayOfWeek = weekdays[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
  
// Format the date as a string and return it
    return `${dayOfWeek}, ${date} ${month} ${year}`;
  }
  
// This function gets the current time and updates the time display on the webpage
  function updateTime(){
// Create a new Date object to get the current time
    const currentTime = new Date();
  
// Extract the hours, minutes, and seconds from the Date object
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
  
// Set ampm variable to either "AM" or "PM" based on whether the current time is in the morning or afternoon
    const ampm  = hours >= 12 ? "PM" : "AM";
    
// Convert hours from 24-hour to 12-hour format
    hours = hours % 12 || 12;
  
// Pad minutes and seconds with a leading zero if they are less than 10
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
// Format the time as a string and update the time display on the webpage
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.querySelector(".time").innerHTML = timeString;
  }
  
// Call the getDate() function once to initialize the date display on the webpage
  document.querySelector(".date").innerHTML = getDate();
  
// Call the updateTime() function every second to update the time display in real-time
  setInterval(updateTime, 1000);
  