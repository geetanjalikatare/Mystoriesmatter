export const dateConverter = (str) => {
  var timeInMiliseconds = new Date(str * 1000);

  const dateTime = timeInMiliseconds.toUTCString();
  const dateTimeArray = dateTime?.split(" ");
  const newTimeArray = timeInMiliseconds
    .toTimeString()
    .split(" ")[0]
    .split(":");
  const obj = {
    date: dateTimeArray[1],
    month: dateTimeArray[2],
    year: dateTimeArray[3],
    hours: newTimeArray[0],
    minutes: newTimeArray[1],
  };
  return obj;
};
