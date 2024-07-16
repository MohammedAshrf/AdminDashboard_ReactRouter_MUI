import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@emotion/react";

const data = [
  {
    country: "AD",
    "hot dog": 139,
    "hot dogColor": "hsl(5, 70%, 50%)",
    burger: 71,
    burgerColor: "hsl(328, 70%, 50%)",
    sandwich: 85,
    sandwichColor: "hsl(193, 70%, 50%)",
    kebab: 62,
    kebabColor: "hsl(226, 70%, 50%)",
    fries: 57,
    friesColor: "hsl(108, 70%, 50%)",
    donut: 57,
    donutColor: "hsl(22, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 25,
    "hot dogColor": "hsl(53, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(279, 70%, 50%)",
    sandwich: 199,
    sandwichColor: "hsl(12, 70%, 50%)",
    kebab: 16,
    kebabColor: "hsl(97, 70%, 50%)",
    fries: 107,
    friesColor: "hsl(106, 70%, 50%)",
    donut: 163,
    donutColor: "hsl(286, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 42,
    "hot dogColor": "hsl(232, 70%, 50%)",
    burger: 5,
    burgerColor: "hsl(276, 70%, 50%)",
    sandwich: 42,
    sandwichColor: "hsl(261, 70%, 50%)",
    kebab: 177,
    kebabColor: "hsl(162, 70%, 50%)",
    fries: 73,
    friesColor: "hsl(85, 70%, 50%)",
    donut: 41,
    donutColor: "hsl(244, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 8,
    "hot dogColor": "hsl(219, 70%, 50%)",
    burger: 98,
    burgerColor: "hsl(134, 70%, 50%)",
    sandwich: 51,
    sandwichColor: "hsl(135, 70%, 50%)",
    kebab: 128,
    kebabColor: "hsl(274, 70%, 50%)",
    fries: 86,
    friesColor: "hsl(240, 70%, 50%)",
    donut: 193,
    donutColor: "hsl(153, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 179,
    "hot dogColor": "hsl(305, 70%, 50%)",
    burger: 146,
    burgerColor: "hsl(279, 70%, 50%)",
    sandwich: 127,
    sandwichColor: "hsl(60, 70%, 50%)",
    kebab: 191,
    kebabColor: "hsl(174, 70%, 50%)",
    fries: 71,
    friesColor: "hsl(235, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(158, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 170,
    "hot dogColor": "hsl(250, 70%, 50%)",
    burger: 88,
    burgerColor: "hsl(307, 70%, 50%)",
    sandwich: 154,
    sandwichColor: "hsl(239, 70%, 50%)",
    kebab: 189,
    kebabColor: "hsl(290, 70%, 50%)",
    fries: 137,
    friesColor: "hsl(130, 70%, 50%)",
    donut: 131,
    donutColor: "hsl(187, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 138,
    "hot dogColor": "hsl(20, 70%, 50%)",
    burger: 16,
    burgerColor: "hsl(262, 70%, 50%)",
    sandwich: 59,
    sandwichColor: "hsl(19, 70%, 50%)",
    kebab: 181,
    kebabColor: "hsl(280, 70%, 50%)",
    fries: 81,
    friesColor: "hsl(312, 70%, 50%)",
    donut: 90,
    donutColor: "hsl(192, 70%, 50%)",
  },
];

export default function BarChartComponent() {
  const theme = useTheme();

  return (
    <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 30, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
      theme={{
        text: {
          fontSize: 11,
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
  );
}
