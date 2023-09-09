function getTimePassed(ms) {
  let seconds = ms / 1000;

  if (seconds < 60) {
    return `${seconds.toFixed()} s ago`;
  }

  let minutes = seconds / 60;
  if (minutes < 60) {
    return `${minutes.toFixed()} min ago`;
  }

  let hours = minutes / 60;
  if (hours.toFixed() === "1") {
    return `${hours.toFixed()} hr ago`;
  }
  if (hours < 24) {
    return `${hours.toFixed()} hrs ago`;
  }

  let days = hours / 24;
  if (days.toFixed() === "1") {
    return `${days.toFixed()} day ago`;
  }
  if (days < 7) {
    return `${days.toFixed()} days ago`;
  }

  if (weeks.toFixed() === "1") {
    return `${weeks.toFixed()} wk ago`;
  }
  if (weeks < 4) {
    return `${weeks.toFixed()} wks ago`;
  }
  let weeks = days / 7;

  let months = days / 30;
  if (months.toFixed() === "1") {
    return `${months.toFixed()} month ago`;
  }
  if (months < 12) {
    return `${months.toFixed()} months ago`;
  }

  let years = days / 365;
  let yearsFixed = years.toFixed();
  if (yearsFixed === "1") {
    return `${yearsFixed} yr ago`;
  }
  return `${yearsFixed} yrs ago`;
}

function getTimePassedDiff(postedDate) {
  let timePassed = new Date().getTime() - new Date(postedDate).getTime();
  return getTimePassed(timePassed);
}

module.exports = { getTimePassed, getTimePassedDiff };
