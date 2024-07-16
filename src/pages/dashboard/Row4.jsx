import { Paper, styled } from "@mui/material";
import GeographyComponent from "../GeographyChart/GeographyComponent";
import { useTheme } from "@emotion/react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Row4() {
  const theme = useTheme();

  return (
    <Item>
      <h2
        style={{
          margin: "0px 0px 15px",
          fontSize: "24px",
          color: theme.palette.secondary.dark,
          width: "fit-content",
        }}
      >
        Clints Countries
      </h2>
      <div style={{ height: "400px" }}>
        <GeographyComponent isDashboard={true} />
      </div>
    </Item>
  );
}
