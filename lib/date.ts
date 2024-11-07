export function formatDate(dateString: string) {
  const locales = "en-US";
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  const date = new Date(dateString);

  return date.toLocaleDateString(locales, options);
}
