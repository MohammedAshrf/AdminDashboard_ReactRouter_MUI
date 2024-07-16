import { Box } from "@mui/material";
import Header from "../team/Header";
import GeographyComponent from "./GeographyComponent";

export default function GeographyChart() {
  return (
    <Box>
      <Header title={"Geography"} desc={"Simple Geography Chart"} />
      <div style={{ height: "620px" }}>
        <GeographyComponent />
      </div>
    </Box>
  );
}
