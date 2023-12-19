export function formatDateToLocalTime(dateString) {
  const dateObject = new Date(dateString);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
  };
  const localTime = dateObject.toLocaleTimeString(undefined, options);
  return `${localTime}`;
}
