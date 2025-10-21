import { Dayjs } from "dayjs";

export type TDateList = {
  data: Dayjs;
  dayWeekend?: "S" | "D" | "O";
  startWork?: any
  startLunch?: any
  endLunch?: any
  endWork?: any
};
