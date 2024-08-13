export function countSpecificDays(
  startDate: Date,
  endDate: Date,
  day: (0 | 1 | 2 | 3 | 4 | 5 | 6)[] | "all" /** SMTWTFS */
) {
  let count = 0;
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    if (
      day === "all" ||
      day.includes(currentDate.getDay() as 0 | 1 | 2 | 3 | 4 | 5 | 6)
    ) {
      count++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return count;
}
