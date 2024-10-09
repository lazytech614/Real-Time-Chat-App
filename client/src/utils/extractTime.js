export function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = padZero(date.getMinutes());

  // Determine AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  const formattedHours = padZero(hours % 12 || 12); // Converts 0 hours to 12

  return `${formattedHours}:${minutes} ${ampm}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}
