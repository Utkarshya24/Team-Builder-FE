export const getInitials = (string) =>
  string.split(/\s/).reduce((response, word) => (response += word.slice(0, 2)), '')