import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";

export default function NotFound() {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        align="center"
        color={theme.palette.error.main}
        variant="h5"
        m={6}
      >
        This is a NOT FOUND PAGE..
      </Typography>
    </Box>
  );
}
