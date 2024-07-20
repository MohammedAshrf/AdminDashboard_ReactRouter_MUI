import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@emotion/react";
import MuiDrawer from "@mui/material/Drawer";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { HomeOutlined } from "@mui/icons-material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const array1 = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
    path: "/",
  },
  {
    text: "Manage Team",
    icon: <PeopleAltOutlinedIcon />,
    path: "/team",
  },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
];

const Array2 = [
  { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/profile" },
  { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlinedIcon />,
    path: "/faq",
  },
];

const Array3 = [
  { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
  { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
  { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
  { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
];

// eslint-disable-next-line react/prop-types
export default function SideBar({ handleDrawerClose, open }) {
  let location = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <List sx={{ transition: ".25s" }}>
        <Avatar
          sx={{
            mx: "auto",
            width: open ? 90 : 45,
            height: open ? 90 : 45,
            transition: ".25s",
          }}
          alt="Remy Sharp"
          src="https://www.creativefabrica.com/wp-content/uploads/2023/01/30/Bearded-Man-Avatar-Icon-Graphics-59392089-1-1-580x387.jpg"
        />
        <Typography
          align="center"
          variant="body1"
          sx={{
            fontSize: open ? "20px" : "0px",
            transition: ".25s",
          }}
        >
          Mohamed Ashraf
        </Typography>
        <Typography
          align="center"
          variant="body1"
          sx={{
            fontSize: open ? "16px" : "0px",
            transition: ".25s",
          }}
          color={"primary"}
        >
          Admin
        </Typography>
      </List>
      <Divider />
      <List sx={{ py: 0 }}>
        {array1.map((array) => (
          <ListItem
            key={array.text}
            disablePadding
            sx={{ display: "block", my: 0 }}
          >
            <Tooltip title={open ? "" : array.text} placement="right-end">
              <ListItemButton
                onClick={() => navigate(array.path)}
                sx={{
                  minHeight: 55,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === array.path
                      ? theme.palette.mode === "dark"
                        ? grey[500]
                        : grey[300]
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 2,
                    mr: "auto",
                    justifyContent: "center",
                    paddingRight: open ? "20px" : "0",
                  }}
                >
                  {array.icon}
                </ListItemIcon>
                <ListItemText
                  primary={array.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List sx={{ py: 0 }}>
        {Array2.map((array) => (
          <ListItem
            key={array.text}
            disablePadding
            sx={{ display: "block", my: 0 }}
          >
            <Tooltip title={open ? "" : array.text} placement="right-end">
              <ListItemButton
                onClick={() => navigate(array.path)}
                sx={{
                  minHeight: 55,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === array.path
                      ? theme.palette.mode === "dark"
                        ? grey[500]
                        : grey[300]
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 2,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {array.icon}
                </ListItemIcon>
                <ListItemText
                  primary={array.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List sx={{ py: 0 }}>
        {Array3.map((array) => (
          <ListItem
            key={array.text}
            disablePadding
            sx={{ display: "block", my: 0 }}
          >
            <Tooltip title={open ? "" : array.text} placement="right-end">
              <ListItemButton
                onClick={() => navigate(array.path)}
                sx={{
                  minHeight: 55,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === array.path
                      ? theme.palette.mode === "dark"
                        ? grey[500]
                        : grey[300]
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {array.icon}
                </ListItemIcon>
                <ListItemText
                  primary={array.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
