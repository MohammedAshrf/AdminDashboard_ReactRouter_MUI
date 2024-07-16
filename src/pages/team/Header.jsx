/* eslint-disable react/prop-types */
import { useTheme } from "@emotion/react";
import { Stack } from "@mui/material";

export default function Header({ title, desc }) {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ justifyContent: "space-between", margin: "0px 0px 16px" }}
    >
      <div style={{ flexGrow: 1 }}>
        <h1
          style={{
            margin: 0,
            fontSize: "26px",
            color: theme.palette.primary.dark,
          }}
        >
          {title}
        </h1>
        <p style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
          {desc}
        </p>
      </div>
    </Stack>
  );
}
