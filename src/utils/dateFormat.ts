

export default function dateFormatStep(date: Date, step: string, monthDayDiff?: boolean): string {
  const year = date.getFullYear();
  const monthTemp = date.getMonth() + 1;
  let month: string = `${monthTemp}`;
  if (monthTemp < 10) {
    month = `0${monthTemp}`;
  }
  if (step === 'MONTH' && monthDayDiff) {
    return `${year}-${month}`;
  }
  const dayTemp = date.getDate();
  let day: string = `${dayTemp}`;
  if (dayTemp < 10) {
    day = `0${dayTemp}`;
  }
  if (step === 'DAY' || step === 'MONTH') {
    return `${year}-${month}-${day}`;
  }
  const hourTemp = date.getHours();
  let hour: string = `${hourTemp}`;
  if (hourTemp < 10) {
    hour = `0${hourTemp}`;
  }
  if (step === 'HOUR') {
    return `${year}-${month}-${day} ${hour}`;
  }
  const minuteTemp = date.getMinutes();
  let minute: string = `${minuteTemp}`;
  if (minuteTemp < 10) {
    minute = `0${minuteTemp}`;
  }
  if (step === 'MINUTE') {
    return `${year}-${month}-${day} ${hour}${minute}`;
  }
  const secondTemp = date.getSeconds();
  let second: string = `${secondTemp}`;
  if (secondTemp < 10) {
    second = `0${secondTemp}`;
  }
  if (step === 'SECOND') {
    return `${year}-${month}-${day} ${hour}${minute}${second}`;
  }
  return '';
}

export const dateFormatTime = (date: Date, step: string): string => {
  const year = date.getFullYear();
  const monthTemp = date.getMonth() + 1;
  let month: string = `${monthTemp}`;
  if (monthTemp < 10) {
    month = `0${monthTemp}`;
  }
  if (step === 'MONTH') {
    return `${year}-${month}`;
  }
  const dayTemp = date.getDate();
  let day: string = `${dayTemp}`;
  if (dayTemp < 10) {
    day = `0${dayTemp}`;
  }
  if (step === 'DAY') {
    return `${month}-${day}`;
  }
  const hourTemp = date.getHours();
  let hour: string = `${hourTemp}`;
  if (hourTemp < 10) {
    hour = `0${hourTemp}`;
  }
  if (step === 'HOUR') {
    return `${month}-${day} ${hour}`;
  }
  const minuteTemp = date.getMinutes();
  let minute: string = `${minuteTemp}`;
  if (minuteTemp < 10) {
    minute = `0${minuteTemp}`;
  }
  if (step === 'MINUTE') {
    return `${hour}:${minute}\n${month}-${day}`;
  }
  return '';
};
