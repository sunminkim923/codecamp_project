export function getDate(date: string) {
  const yyyy = new Date(date).getFullYear();
  const mm = String(new Date(date).getMonth() + 1).padStart(2, "0");
  const dd = new Date(date).getDate();
  return `${yyyy}-${mm}-${dd}`;
}

export const NumberWithCommas = (ViewPoint: number) => {
  return ViewPoint?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
