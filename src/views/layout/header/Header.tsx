import "./Header.scss";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useState } from "react";

import DehazeIcon from "@mui/icons-material/Dehaze";
import Bedtime from "@mui/icons-material/Bedtime";
import Brightness from "@mui/icons-material/BrightnessHigh";
import { ENUM_ROUTER, TRouter, viewLink } from "../../../routes/enum";
import { useRedirect } from "../../../routes/utils";

function Header() {
  const redirectTo = useRedirect();
  const { mode, setMode } = useColorScheme();

  function handleUpdateTheme() {
    if (mode === "dark") {
      setMode("light");
      return;
    }
    setMode("dark");
  }

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {Object.keys(viewLink).map((key) => {
          const item = viewLink[key as ENUM_ROUTER];
          return (
            item.view && (
              <ListItem key={key}>
                <ListItemButton onClick={() => redirectTo(key as TRouter)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            )
          );
        })}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton aria-label="delete" onClick={toggleDrawer(true)}>
            <DehazeIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Controle de Ponto
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton aria-label="delete" onClick={handleUpdateTheme}>
            {mode === "dark" ? <Brightness /> : <Bedtime />}
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </AppBar>
  );
}

export default Header;
