export const classNames = (...classes: any[]): string =>
  classes.filter(Boolean).join(" ");
