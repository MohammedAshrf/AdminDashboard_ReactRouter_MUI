import { useTheme } from "@emotion/react";
import { Paper, Stack, styled } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import BarChartComponent from "./ChartsCoponents/BarChartComponent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const data = [
  {
    id: "javaScript",
    label: "javaScript",
    value: 602,
    color: "hsl(328, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 406,
    color: "hsl(260, 70%, 50%)",
  },
  {
    id: "React.js",
    label: "sass",
    value: 622,
    color: "hsl(260, 70%, 50%)",
  },
  {
    id: "Node.js",
    label: "sass",
    value: 662,
    color: "hsl(260, 70%, 50%)",
  },
  {
    id: "php",
    label: "sass",
    value: 560,
    color: "hsl(260, 70%, 50%)",
  },
];

export default function Row3() {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      spacing="1"
      sx={{
        marginBottom: "10px",
        justifyContent: "space-between",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      <Item
        sx={{
          height: "360px",
          maxWidth: "800px",
          minWidth: "450px",
          flexGrow: 1,
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: "24px",
              color: theme.palette.secondary.dark,
              width: "fit-content",
            }}
          >
            Campaigns
          </h2>
          {/* === pie Chart === */}
          <div style={{ height: "240px", cursor: "pointer" }}>
            <ResponsivePie
              data={data}
              margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
              innerRadius={0.8}
              padAngle={2}
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
          <div>
            <p
              style={{
                margin: "8px 0px",
                fontSize: "18px",
                fontWeight: "bold",
                color: theme.palette.text.primary,
              }}
            >
              $48,352 revenue generated
            </p>
            <p
              style={{
                margin: "0px",
                fontSize: "14px",
                fontWeight: "bold",
                // color: theme.palette.text.secondary,
              }}
            >
              Includes extra misc expenditures and costs
            </p>
          </div>
        </div>
      </Item>
      <Item
        sx={{
          height: "360px",
          maxWidth: "800px",
          minWidth: "450px",
          flexGrow: 1,
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: "24px",
              color: theme.palette.secondary.dark,
              width: "fit-content",
            }}
          >
            Sales Quantity
          </h2>
          {/* === pie Chart === */}
          <div style={{ height: "320px", cursor: "pointer" }}>
            <BarChartComponent />
          </div>
        </div>
      </Item>
    </Stack>
  );
}
