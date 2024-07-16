import { useTheme } from "@emotion/react";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

export default function Row0() {
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
          DASHBOARD
        </h1>
        <p style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
          Welcome to your dashboard
        </p>
      </div>
      <div style={{ padding: "10px 4px" }}>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<DownloadOutlinedIcon />}
        >
          Download Reports
        </Button>
      </div>
    </Stack>
  );
}
