import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
const data = [
  {
    id: "japan",
    color: "hsl(146, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 114,
      },
      {
        x: "helicopter",
        y: 179,
      },
      {
        x: "boat",
        y: 53,
      },
      {
        x: "train",
        y: 2,
      },
      {
        x: "subway",
        y: 82,
      },
      {
        x: "bus",
        y: 136,
      },
      {
        x: "car",
        y: 216,
      },
      {
        x: "moto",
        y: 245,
      },
      {
        x: "bicycle",
        y: 22,
      },
      {
        x: "horse",
        y: 80,
      },
      {
        x: "skateboard",
        y: 123,
      },
      {
        x: "others",
        y: 52,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(181, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 63,
      },
      {
        x: "helicopter",
        y: 199,
      },
      {
        x: "boat",
        y: 81,
      },
      {
        x: "train",
        y: 133,
      },
      {
        x: "subway",
        y: 244,
      },
      {
        x: "bus",
        y: 82,
      },
      {
        x: "car",
        y: 13,
      },
      {
        x: "moto",
        y: 31,
      },
      {
        x: "bicycle",
        y: 179,
      },
      {
        x: "horse",
        y: 267,
      },
      {
        x: "skateboard",
        y: 179,
      },
      {
        x: "others",
        y: 89,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(271, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 134,
      },
      {
        x: "helicopter",
        y: 1,
      },
      {
        x: "boat",
        y: 81,
      },
      {
        x: "train",
        y: 293,
      },
      {
        x: "subway",
        y: 64,
      },
      {
        x: "bus",
        y: 156,
      },
      {
        x: "car",
        y: 42,
      },
      {
        x: "moto",
        y: 267,
      },
      {
        x: "bicycle",
        y: 116,
      },
      {
        x: "horse",
        y: 75,
      },
      {
        x: "skateboard",
        y: 12,
      },
      {
        x: "others",
        y: 25,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(14, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 197,
      },
      {
        x: "helicopter",
        y: 0,
      },
      {
        x: "boat",
        y: 263,
      },
      {
        x: "train",
        y: 42,
      },
      {
        x: "subway",
        y: 183,
      },
      {
        x: "bus",
        y: 77,
      },
      {
        x: "car",
        y: 21,
      },
      {
        x: "moto",
        y: 8,
      },
      {
        x: "bicycle",
        y: 278,
      },
      {
        x: "horse",
        y: 4,
      },
      {
        x: "skateboard",
        y: 265,
      },
      {
        x: "others",
        y: 277,
      },
    ],
  },
];

export default function LineChartComponent() {
  const theme = useTheme();

  return (
    <Box sx={{ height: "300px" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 14,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        theme={{
          text: {
            fontSize: 14,
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
                fontSize: 14,
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
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
      />
    </Box>
  );
}
