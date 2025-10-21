import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TDateList } from "@/features/listDate/types";
import { Box } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";

type TMonthYearPickerComponent = {
  label?: string;
  setValues?: (dates: TDateList[]) => void;
};

export default function MonthYearPickerComponent({
  label = "Selecione mês e ano",
  setValues,
}: TMonthYearPickerComponent) {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleSelect = (date: Dayjs | null) => {
    if (!date) return;

    const startOfMonth = date.startOf("month");
    const daysInMonth = date.daysInMonth();

    const allDays = Array.from({ length: daysInMonth }, (_, i) => {
      const currentDay = startOfMonth.add(i, "day");
      const dayOfWeek = currentDay.day(); // 0 = domingo, 6 = sábado

      let dayWeekend = "O"; // padrão: dia útil
      if (dayOfWeek === 0) dayWeekend = "D";
      else if (dayOfWeek === 6) dayWeekend = "S";

      return {
        data: currentDay,
        dayWeekend,
      };
    });
    setValues?.(allDays as any);
    setSelectedDate(date);
  };

  return (
    <Box className="flex flex-col gap-2">
      <DatePicker
        label={label}
        views={["year", "month"]}
        value={selectedDate}
        onChange={handleSelect}
        slotProps={{
          textField: { fullWidth: true },
        }}
      />
    </Box>
  );
}
