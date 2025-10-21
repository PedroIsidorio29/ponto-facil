import { List, ListItem, Chip, Box } from "@mui/material";

export default function ListaDatas({ datas }: { datas: any[] }) {
  return (
    <Box
      sx={{
        maxHeight: "80%",
        overflowY: "auto",
        border: "1px solid #595959ff",
        borderRadius: 1,
        paddingX: 1,
        marginY: 2,
      }}
    >
      <List sx={{ width: "100%" }}>
        {datas.map((date, i) => (
          <ListItem
            key={i}
            sx={{
              marginY: "0.3rem",
              height: "3.5rem",
              bgcolor: "background.paper",
            }}
          >
            <Chip label={date.data.format("DD/MM/YYYY")} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
