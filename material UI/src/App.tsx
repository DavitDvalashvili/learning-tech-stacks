import "./App.css";
//import MuiLoadingButton from "./components/MuiLoadingButton";
//import MuiSkeleton from "./components/MuiSkeleton";
//import MuiProgress from "./components/MuiProgress";
//import MuiDialog from "./components/MuiDialog";
//import MuiSnackBar from "./components/MuiSnackbar";
//import MuiAlert from "./components/MuiAlert";
//import MuiTable from "./components/MuiTable";
// import MuiTypography from "./components/MuiTypography";
//import MuiButton from "./components/MuiButton";
//import MiuTextField from "./components/MiuTextField";
// import MuiSelect from "./components/MuiSelect";
//import MiuRadioButton from "./components/MiuRadioButton";
//import MiuCheckBox from "./components/MiuCheckBox";
//import MiuSwitch from "./components/MiuSwitch";
//import MiuRating from "./components/MiuRating";
//import MiuAutoComplete from "./components/MiuAutoComplete";
//import MiuLayout from "./components/MiuLayout";
//import MiuCard from "./components/MiuCard";
//import MuiAccordion from "./components/MuiAccordion";
//import MuiImageList from "./components/MuiImageList";
// import MuiLink from "./components/MuiLink";
// import MuiNavbar from "./components/MuiNavbar";
// import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
// import MuiDrawer from "./components/MuiDrawer";
//import MuiSpeedDial from "./components/MuiSpeedDial";
//import MuiBottomNavigation from "./components/MuiBottomNavigation";
//import MuiAvatar from "./components/MuiAvatar";
//import MuiBadge from "./components/MuiBadge";
//import MuiList from "./components/MuiList";
//import MuiChip from "./components/MuiChip";
//import MuiTooltip from "./components/MuiTooltip";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MuiResponsiveness from "./components/MuiResponsiveness";
//import MuiMasonry from "./components/MuiMasonry";
//import MuiTimeline from "./components/MuiTimeline";
//import MuiTabs from "./components/MuiTabs";
//import MuiDateTimePIcker from "./components/MuiDateTimePIcker";
import { createTheme, colors, ThemeProvider } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#e5333e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          {/* <MuiTypography /> */}
          {/* <MuiButton /> */}
          {/* <MiuTextField /> */}
          {/* <MuiSelect /> */}
          {/* <MiuRadioButton /> */}
          {/* <MiuCheckBox /> */}
          {/* <MiuRating /> */}
          {/* <MiuAutoComplete /> */}
          {/* <MiuLayout /> */}
          {/* <MiuCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiLink /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiBreadcrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiBottomNavigation /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackBar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiProgress /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiDateTimePIcker /> */}
          {/* <MuiTabs /> */}
          {/* <MuiTimeline /> */}
          {/* <MuiMasonry /> */}
          <MuiResponsiveness />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
