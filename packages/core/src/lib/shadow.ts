const sd_1 = [
  ["0 1px 1px", "0", "rgba(0,0,0,0.14)"],
  ["0 2px 1px", "-1px", "rgba(0,0,0,0.12)"],
  ["0 1px 3px", "0", "rgba(0,0,0,0.20)"],
];
const sd_2 = [
  ["0 2px 2px", "0", "rgba(0,0,0,0.14)"],
  ["0 3px 1px", "-2px", "rgba(0,0,0,0.12)"],
  ["0 1px 5px", "0", "rgba(0,0,0,0.20)"],
];
const sd_3 = [
  ["0 3px 4px", "0", "rgba(0,0,0,0.14)"],
  ["0 3px 3px", "-2px", "rgba(0,0,0,0.12)"],
  ["0 1px 8px", "0", "rgba(0,0,0,0.20)"],
];
const sd_4 = [
  ["0 4px 5px 0", "0", "rgba(0,0,0,0.14)"],
  ["0 1px 10px", "0", "rgba(0,0,0,0.12)"],
  ["0 2px 4px", "-1px", "rgba(0,0,0,0.20)"],
];
const sd_6 = [
  ["0 6px 10px", "0", "rgba(0,0,0,0.14)"],
  ["0 1px 18px", "0", "rgba(0,0,0,0.12)"],
  ["0 3px 5px", "-1px", "rgba(0,0,0,0.20)"],
];
const sd_8 = [
  ["0 8px 10px", " 1px", "rgba(0,0,0,0.14)"],
  ["0 3px 14px", " 2px", "rgba(0,0,0,0.12)"],
  ["0 5px 5px", "-3px", "rgba(0,0,0,0.20)"],
];
const sd_9 = [
  ["0 9px 12px", "1px", "rgba(0,0,0,0.14)"],
  ["0 3px 16px", "2px", "rgba(0,0,0,0.12)"],
  ["0 5px 6px", "-3px", "rgba(0,0,0,0.20)"],
];
const sd_12 = [
  ["0 12px 17px", "2px", "rgba(0,0,0,0.14)"],
  ["0 5px 22px", "4px", "rgba(0,0,0,0.12)"],
  ["0 7px 8px", "-4px", "rgba(0,0,0,0.20)"],
];
const sd_16 = [
  ["0 16px 24px", "2px", "rgba(0,0,0,0.14)"],
  ["0 6px 30px", "5px", "rgba(0,0,0,0.12)"],
  ["0 8px 10px", "-5px", "rgba(0,0,0,0.20)"],
];
const sd_24 = [
  ["0 24px 38px", "3px", "rgba(0,0,0,0.14)"],
  ["0 9px 46px", "8px", "rgba(0,0,0,0.12)"],
  ["0 11px 15px", "-7px", "rgba(0,0,0,0.20)"],
];

const wrap = (bool?: boolean, value = "") =>
  bool ? `drop-shadow(${value})` : value;
const concat = (bool?: boolean, value = "") => (bool ? value : "");

const handler = (sd: string[][], inset?: boolean, drop?: boolean) =>
  sd
    .map(
      ([shadow, spread, color]) =>
        wrap(
          drop,
          [shadow, concat(!drop, spread), color, concat(inset, "inset")]
            .filter(Boolean)
            .join(" ")
        ),
      ""
    )
    .join(concat(!drop, ","));

export function handleShadow(value: number, inset?: boolean, drop?: boolean) {
  switch (value) {
    case 1:
      return handler(sd_1, inset, drop);
    case 2:
      return handler(sd_2, inset, drop);
    case 3:
      return handler(sd_3, inset, drop);
    case 4:
      return handler(sd_4, inset, drop);
    case 6:
      return handler(sd_6, inset, drop);
    case 8:
      return handler(sd_8, inset, drop);
    case 9:
      return handler(sd_9, inset, drop);
    case 12:
      return handler(sd_12, inset, drop);
    case 16:
      return handler(sd_16, inset, drop);
    case 24:
      return handler(sd_24, inset, drop);
    default:
      return "";
  }
}
