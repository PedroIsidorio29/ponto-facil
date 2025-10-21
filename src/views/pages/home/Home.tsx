import MonthYearPickerComp from "@/components/inputs/MonthYearPicker-comp/MonthYearPicker.component";
import TextComp from "@/components/inputs/text-comp/text.component";
import ListaDatas from "@/components/ListaDatas.component";
import CardFloat from "@/components/layout/cardFloat";
import { TDateList } from "@/features/listDate/types";
import "@/views/pages/home/Home.scss";
import { Grid } from "@mui/material";
import { useState } from "react";
import "@/style/index.scss";

function Home() {
  const [name, setName] = useState("");
  const [datas, setDatas] = useState<TDateList[]>([]);

  return (
    <>
      <CardFloat>
        <Grid container spacing={2}>
          <Grid className="flex" size={8}>
            <TextComp
              className="w-full"
              label="Nome"
              value={name}
              setValue={setName}
            />
          </Grid>
          <Grid size={4}>
            <TextComp
              className="w-full"
              label="MASP"
              value={name}
              setValue={setName}
            />
          </Grid>
          <Grid size={4}>
            <MonthYearPickerComp
              label="Selecione as datas disponíveis"
              setValues={setDatas}
            />
          </Grid>
          <Grid size={8}>
            <TextComp
              className="w-full"
              label="Rubrica"
              value={name}
              setValue={setName}
            />
          </Grid>
        </Grid>
        <ListaDatas datas={datas} />
      </CardFloat>
    </>
  );
}

export default Home;
