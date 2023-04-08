import "./RemainingTimeComponent.css";
function RemainingTimeComponent() {
  //To find the remaining time, let's get the current time.
  //Then, for our the target time, we would have 11:59:00
  //For our current time as an example, let's say it would be 8:08
  //Then, the # of hours, # minutes, and # of seconds left is
  // is 3 hours and 51 minutes; leave out the seconds

  //Random Date Test Object
  const randomDate = new Date("July 1, 1999, 12:00:00");

  //Two new Date Objects
  const retrieveCurrentTime = new Date(Date.now());

  //Set the new Date to be the next day by 12:00 am
  const dueDateTime = new Date(Date.now());
  const currDay = dueDateTime.getDate();
  const nextDay = currDay + 1;
  dueDateTime.setDate(nextDay);
  dueDateTime.setTime(randomDate.getTime());

  //Gets the hours of the dueDate, currentTime
  const retrieveHoursDueDate = dueDateTime.getHours() * 2;
  console.log("Due Date Hours: " + retrieveHoursDueDate);
  const retrieveHoursCurrentTime = retrieveCurrentTime.getHours();
  console.log("Current Date Hours: " + retrieveHoursCurrentTime);
  //Convert those hours to the right number for the current date hours.
  const modifiedCurrentHours = correctHours(retrieveHoursCurrentTime);
  console.log("Modified Current Date Hours: " + modifiedCurrentHours);

  //Get the minutes of the dueDate, currentTime
  const retrieveMinutesDueDate = 60;
  const retrieveMinutesCurrentTime = retrieveCurrentTime.getMinutes();

  //Computes the hoursLeft by difference of dueDateHours and currentTimeHours
  const hoursLeft = retrieveHoursDueDate - modifiedCurrentHours;
  const minutesLeft = retrieveMinutesDueDate - retrieveMinutesCurrentTime;

  if (minutesLeft == 60) {
    hoursLeft += 1;
  }

  return (
    <div className="dueDateTime">
      {hoursLeft} hours and {minutesLeft} minutes left until due date.
    </div>
  );
}

function correctHours(hourStartTime) {
  if (hourStartTime == 12) {
    return 12;
  }
  if (hourStartTime == 1) {
    return 1;
  }
  if (hourStartTime == 2) {
    return 2;
  }
  if (hourStartTime == 3) {
    return 3;
  }
  if (hourStartTime == 4) {
    return 4;
  }
  if (hourStartTime == 5) {
    return 5;
  }
  if (hourStartTime == 6) {
    return 6;
  }
  if (hourStartTime == 7) {
    return 7;
  }
  if (hourStartTime == 8) {
    return 8;
  }
  if (hourStartTime == 9) {
    return 9;
  }
  if (hourStartTime == 10) {
    return 10;
  }
  if (hourStartTime == 11) {
    return 11;
  }
  if (hourStartTime == 12) {
    return 12;
  }
  if (hourStartTime == 13) {
    return 1;
  }
  if (hourStartTime == 14) {
    return 2;
  }
  if (hourStartTime == 15) {
    return 3;
  }
  if (hourStartTime == 16) {
    return 4;
  }
  if (hourStartTime == 17) {
    return 5;
  }
  if (hourStartTime == 18) {
    return 6;
  }
  if (hourStartTime == 19) {
    return 7;
  }
  if (hourStartTime == 20) {
    return 8;
  }
  if (hourStartTime == 21) {
    return 9;
  }
  if (hourStartTime == 22) {
    return 10;
  }
  if (hourStartTime == 23) {
    return 11;
  }
  if (hourStartTime == 12) {
    return 12;
  }
}

export default RemainingTimeComponent;
