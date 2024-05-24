const DateFromTZ = () => {
  return new Date(
    new Date().toLocaleString("en-US", { timeZone: config.timezone })
  );
};
const refreshCalendar = () => {
  const calendar = document.getElementById("calendar").children[1];
  Array.from(calendar.children).forEach((child, index) => {
    if (index >= 7) calendar.removeChild(child);
  });
  let now = DateFromTZ();
  let numberOfDays = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();
  let firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  for (i = 1; i < firstDay; i++) {
    calendar.innerHTML += `<p></p>`;
  }
  for (i = 1; i <= numberOfDays; i++) {
    calendar.innerHTML += `<p${
      i == now.toDateString().split(" ")[2] ? " class='today'" : ""
    }>${i}</p>`;
  }
};

refreshCalendar();
