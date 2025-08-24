import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "./data";
import Header from "../../components/Header";

function Contacts() {
  return (
    <Box sx={{ height: 600, mx: "auto" }}>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        showToolbar
      />
    </Box>
  );
}

export default Contacts;
