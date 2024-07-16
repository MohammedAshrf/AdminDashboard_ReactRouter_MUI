import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "./Dashboard.css";
import { useTheme } from "@emotion/react";
import LineChartComponent from "./ChartsCoponents/LineChartComponent";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { IconButton } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const transactionsData = [
  {
    id: "0315dsaaef",
    name: "Mohamed Ali",
    date: "2024-05-01",
    price: "$$133.45",
  },
  {
    id: "123432fadf",
    name: "Zinab Hosny",
    date: "2024-03-01",
    price: "$43.91",
  },
  {
    id: "0315dsaa",
    name: "Ahmed Mohamed",
    date: "2023-07-01",
    price: "$150.49",
  },
  {
    id: "01e4dsaef",
    name: "Ashraf Hassan",
    date: "2023-04-01",
    price: "$43.95",
  },
  {
    id: "51034szvfew",
    name: "Mahmoud Atia",
    date: "2021-11-05",
    price: "$200.95",
  },
  {
    id: "0a123sb",
    name: "Ali Abd-Elhady",
    date: "2021-6-02",
    price: "$13.55",
  },
  {
    id: "01e4dsa",
    name: "Abd Elphattah Elkhatieb",
    date: "2020-09-01",
    price: "$43.95",
  },
  {
    id: "120s51a",
    name: "Noor Dirgham",
    date: "2020-04-15",
    price: "$24.20",
  },
];

export default function Row2() {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      spacing={1}
      sx={{
        marginBottom: "10px",
        justifyContent: "space-between",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      <Item
        sx={{
          height: "380px",
          // maxWidth: "600px",
          minWidth: "500px",
          flexGrow: 1,
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{ justifyContent: "space-between" }}
        >
          <div style={{ flexGrow: 1 }}>
            <h2
              style={{
                margin: 0,
                fontSize: "26px",
                color: theme.palette.secondary.dark,
                width: "fit-content",
              }}
            >
              Revenue Generated
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: "bold",
                width: "fit-content",
                color: theme.palette.text.primary,
              }}
            >
              $59,342.32
            </p>
          </div>
          <div style={{ padding: "10px 4px" }}>
            <IconButton aria-label="delete" size="small">
              <DownloadOutlinedIcon />
            </IconButton>
          </div>
        </Stack>
        <LineChartComponent />
      </Item>
      <Stack
        direction="column"
        spacing={1}
        sx={{
          height: "380px",
          maxWidth: "500px",
          minWidth: "220px",
          flexGrow: 1,
          padding: "0px 5px 0px 0px",
          alignItems: "center",
          overflow: "hidden auto",
        }}
      >
        <Item sx={{ maxHeight: "80px", width: "100%", padding: "6px 48px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "24px",
              color: theme.palette.secondary.dark,
              width: "fit-content",
            }}
          >
            Recent Transactions
          </h2>
        </Item>
        {transactionsData.map((transaction) => (
          <Item
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              maxHeight: "80px",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              flexGrow: 1,
            }}
            key={transaction.id}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div>
                <h3
                  style={{
                    width: "fit-content",
                    color: theme.palette.text.primary,
                    margin: 0,
                  }}
                >
                  {transaction.id}
                </h3>
                <p
                  style={{
                    width: "fit-content",
                    color: theme.palette.text.primary,
                    fontSize: "14px",
                    fontWeight: "bold",
                    margin: "3px",
                  }}
                >
                  {transaction.name}
                </p>
              </div>
              <p
                style={{
                  width: "fit-content",
                  color: theme.palette.text.primary,
                  fontSize: "16px",
                }}
              >
                {transaction.date}
              </p>
              <p
                style={{
                  backgroundColor: "rgb(211, 47, 47)",
                  color: "white",
                  padding: "5px",
                  borderRadius: "6px",
                  fontSize: "16px",
                }}
              >
                {transaction.price}
              </p>
            </Stack>
          </Item>
        ))}
      </Stack>
    </Stack>
  );
}
