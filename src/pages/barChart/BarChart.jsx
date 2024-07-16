import { Box } from "@mui/material";
import BarComponent from "./BarComponent";
import Header from "../team/Header";

export default function BarChart() {
  return (
    <Box sx={{ height: "75vh" }}>
      <Header
        title={"BAR CHART"}
        desc={"The minimum wage in Germany, France and Spain (EUR/month)"}
      />
      <BarComponent />
    </Box>
  );
}
