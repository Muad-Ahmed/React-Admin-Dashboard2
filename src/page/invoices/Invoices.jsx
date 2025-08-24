import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "./data";
import Header from "../../components/Header";

function Invoices() {
  return (
    <Box sx={{ height: 600, mx: "auto" }}>
      <Header title="INVOICES" subTitle="List of Invoice Balances" />
      <DataGrid
        checkboxSelection
        rows={rows}
        // @ts-ignore
        columns={columns}
        showToolbar
        slotProps={{
          toolbar: {
            sx: {
              display: "flex",
              justifyContent: "flex-end",
            },
          },
        }}
      />
    </Box>
  );
}

export default Invoices;
