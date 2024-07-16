import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import "./Dashboard.css";
import { useTheme } from "@emotion/react";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

const data1 = [
  {
    id: "javaScript",
    label: "javaScript",
    value: 40,
    color: "hsl(328, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 60,
    color: "hsl(260, 70%, 50%)",
  },
];
const data2 = [
  {
    id: "javaScript",
    label: "javaScript",
    value: 70,
    color: "hsl(309, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 30,
    color: "hsl(42, 70%, 50%)",
  },
];
const data3 = [
  {
    id: "javaScript",
    label: "javaScript",
    value: 44,
    color: "hsl(328, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 66,
    color: "hsl(260, 70%, 50%)",
  },
];
const data4 = [
  {
    id: "javaScript",
    label: "javaScript",
    value: 33,
    color: "hsl(328, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 77,
    color: "hsl(260, 70%, 50%)",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Row1() {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      gap={1}
      flexWrap={"wrap"}
      mb={1}
      justifyContent={"space-between"}
    >
      <Item
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          height: "130px",
          maxWidth: "400px",
          minWidth: "200px",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* === Left Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            gap: "10px",
          }}
        >
          <EmailIcon
            sx={{
              color: theme.palette.mode === "light" ? "#6d1b7b" : "#ab47bc",
            }}
          />
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "bold",
              width: "fit-content",
              color: theme.palette.text.primary,
            }}
          >
            12,361
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              width: "fit-content",
              color: theme.palette.text.primary,
            }}
          >
            Emails Sent
          </Typography>
        </div>
        {/* === Right Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "right",
            // gap: "5px",
          }}
        >
          {/* === pie Chart === */}
          <div style={{ height: "70px", width: "70px", cursor: "pointer" }}>
            <ResponsivePie
              data={data1}
              margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
              innerRadius={0.7}
              padAngle={6}
              cornerRadius={2}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", "0.2"]],
              }}
              enableArcLinkLabels={false}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              enableArcLabels={false}
              arcLabelsRadiusOffset={0.4}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", "1.6"]],
              }}
              theme={{
                text: {
                  fontSize: 15,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
                axis: {
                  domain: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                  },
                  legend: {
                    text: {
                      fontSize: 12,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  ticks: {
                    line: {
                      stroke: theme.palette.text.primary,
                      strokeWidth: 1,
                    },
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                grid: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                  },
                },
                legends: {
                  title: {
                    text: {
                      fontSize: 11,
                      fill: "#333333",
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                  ticks: {
                    line: {},
                    text: {
                      fontSize: 10,
                      fill: "#333333",
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                annotations: {
                  text: {
                    fontSize: 13,
                    fill: "#333333",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  link: {
                    stroke: "#000000",
                    strokeWidth: 1,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  outline: {
                    stroke: "#000000",
                    strokeWidth: 2,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  symbol: {
                    fill: "#000000",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                },
                tooltip: {
                  wrapper: {},
                  container: {
                    background: "#ffffff",
                    color: "#333333",
                    fontSize: 13,
                  },
                  basic: {},
                  chip: {},
                  table: {},
                  tableCell: {},
                  tableCellValue: {},
                },
              }}
            />
          </div>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              width: "fit-content",
              margin: "auto",
              color: theme.palette.text.primary,
            }}
          >
            +14%
          </Typography>
        </div>
      </Item>
      <Item
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          height: "130px",
          maxWidth: "400px",
          minWidth: "200px",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* === Left Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            gap: "10px",
          }}
        >
          <PointOfSaleIcon
            sx={{
              color: theme.palette.mode === "light" ? "#6d1b7b" : "#ab47bc",
            }}
          />
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "bold",
              width: "fit-content",
              color: theme.palette.text.primary,
            }}
          >
            431,225
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              width: "fit-content",
              color: theme.palette.text.primary,
            }}
          >
            Sales obtained
          </Typography>
        </div>
        {/* === Right Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "right",
            // gap: "5px",
          }}
        >
          {/* === pie Chart === */}
          <div style={{ height: "70px", width: "70px", cursor: "pointer" }}>
            <ResponsivePie
              data={data2}
              margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
              innerRadius={0.7}
              padAngle={6}
              cornerRadius={2}
              activeOuterRadiusOffset={8}
              colors={{ scheme: "category10" }}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", "0.2"]],
              }}
              enableArcLinkLabels={false}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor={theme.palette.primary}
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              enableArcLabels={false}
              arcLabelsRadiusOffset={0.4}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", "1.6"]],
              }}
              theme={{
                text: {
                  fontSize: 15,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
                axis: {
                  domain: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                  },
                  legend: {
                    text: {
                      fontSize: 12,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  ticks: {
                    line: {
                      stroke: theme.palette.text.primary,
                      strokeWidth: 1,
                    },
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                grid: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                  },
                },
                legends: {
                  title: {
                    text: {
                      fontSize: 11,
                      fill: "#333333",
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                  ticks: {
                    line: {},
                    text: {
                      fontSize: 10,
                      fill: "#333333",
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                annotations: {
                  text: {
                    fontSize: 13,
                    fill: "#333333",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  link: {
                    stroke: "#000000",
                    strokeWidth: 1,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  outline: {
                    stroke: "#000000",
                    strokeWidth: 2,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  symbol: {
                    fill: "#000000",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                },
                tooltip: {
                  wrapper: {},
                  container: {
                    background: "#ffffff",
                    color: "#333333",
                    fontSize: 13,
                  },
                  basic: {},
                  chip: {},
                  table: {},
                  tableCell: {},
                  tableCellValue: {},
                },
              }}
            />
          </div>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              width: "fit-content",
              margin: "auto",
              color: theme.palette.text.primary,
            }}
          >
            +21%
          </Typography>
        </div>
      </Item>
      <Item
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          height: "130px",
          maxWidth: "400px",
          minWidth: "200px",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* === Left Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            gap: "10px",
          }}
        >
          <PersonAddIcon
            sx={{
              color: theme.palette.mode === "light" ? "#6d1b7b" : "#ab47bc",
            }}
          />
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "bold",
              width: "fit-content",
              color: theme.palette.text.primary,
            }}
          >
            32,441
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              width: "fit-content",
              color: theme.palette.text.primary,
            }}
          >
            New Clients
          </Typography>
        </div>
        {/* === Right Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "right",
            // gap: "5px",
          }}
        >
          {/* === pie Chart === */}
          <div style={{ height: "70px", width: "70px", cursor: "pointer" }}>
            <ResponsivePie
              data={data3}
              margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
              innerRadius={0.7}
              padAngle={6}
              cornerRadius={2}
              activeOuterRadiusOffset={8}
              colors={{ scheme: "paired" }}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", "0.2"]],
              }}
              enableArcLinkLabels={false}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              enableArcLabels={false}
              arcLabelsRadiusOffset={0.4}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", "1.6"]],
              }}
              theme={{
                text: {
                  fontSize: 15,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
                axis: {
                  domain: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                  },
                  legend: {
                    text: {
                      fontSize: 12,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  ticks: {
                    line: {
                      stroke: theme.palette.text.primary,
                      strokeWidth: 1,
                    },
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                grid: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                  },
                },
                legends: {
                  title: {
                    text: {
                      fontSize: 11,
                      fill: "#333333",
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                  ticks: {
                    line: {},
                    text: {
                      fontSize: 10,
                      fill: "#333333",
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                annotations: {
                  text: {
                    fontSize: 13,
                    fill: "#333333",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  link: {
                    stroke: "#000000",
                    strokeWidth: 1,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  outline: {
                    stroke: "#000000",
                    strokeWidth: 2,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  symbol: {
                    fill: "#000000",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                },
                tooltip: {
                  wrapper: {},
                  container: {
                    background: "#ffffff",
                    color: "#333333",
                    fontSize: 13,
                  },
                  basic: {},
                  chip: {},
                  table: {},
                  tableCell: {},
                  tableCellValue: {},
                },
              }}
            />
          </div>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              width: "fit-content",
              margin: "auto",
              color: theme.palette.text.primary,
            }}
          >
            +5%
          </Typography>
        </div>
      </Item>
      <Item
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          height: "130px",
          maxWidth: "400px",
          minWidth: "200px",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* === Left Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            gap: "10px",
          }}
        >
          <TrafficIcon
            sx={{
              color: theme.palette.mode === "light" ? "#6d1b7b" : "#ab47bc",
            }}
          />
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "bold",
              width: "fit-content",
              color: theme.palette.text.primary,
            }}
          >
            1,325,134
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              width: "fit-content",
              color: theme.palette.text.primary,
            }}
          >
            Traffic Received
          </Typography>
        </div>
        {/* === Right Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "right",
            // gap: "5px",
          }}
        >
          {/* === pie Chart === */}
          <div style={{ height: "70px", width: "70px", cursor: "pointer" }}>
            <ResponsivePie
              data={data4}
              margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
              innerRadius={0.7}
              padAngle={6}
              cornerRadius={2}
              activeOuterRadiusOffset={8}
              colors={{ scheme: "set1" }}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", "0.2"]],
              }}
              enableArcLinkLabels={false}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              enableArcLabels={false}
              arcLabelsRadiusOffset={0.4}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", "1.6"]],
              }}
              theme={{
                text: {
                  fontSize: 15,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
                axis: {
                  domain: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                  },
                  legend: {
                    text: {
                      fontSize: 12,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  ticks: {
                    line: {
                      stroke: theme.palette.text.primary,
                      strokeWidth: 1,
                    },
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                grid: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                  },
                },
                legends: {
                  title: {
                    text: {
                      fontSize: 11,
                      fill: "#333333",
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                  ticks: {
                    line: {},
                    text: {
                      fontSize: 10,
                      fill: "#333333",
                      outlineWidth: 0,
                      outlineColor: "transparent",
                    },
                  },
                },
                annotations: {
                  text: {
                    fontSize: 13,
                    fill: "#333333",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  link: {
                    stroke: "#000000",
                    strokeWidth: 1,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  outline: {
                    stroke: "#000000",
                    strokeWidth: 2,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  symbol: {
                    fill: "#000000",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                },
                tooltip: {
                  wrapper: {},
                  container: {
                    background: "#ffffff",
                    color: "#333333",
                    fontSize: 13,
                  },
                  basic: {},
                  chip: {},
                  table: {},
                  tableCell: {},
                  tableCellValue: {},
                },
              }}
            />
          </div>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              width: "fit-content",
              margin: "auto",
              color: theme.palette.text.primary,
            }}
          >
            +43%
          </Typography>
        </div>
      </Item>
    </Stack>
  );
}
