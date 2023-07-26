import { memo } from 'react';

import MaterialTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const Table = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <MaterialTable aria-label="simple table">
        <TableHead>
          <TableRow>
            {Object.keys(data[0]).filter((key) => key !== 'id').map((key) => (
              <TableCell key={key} style={{ textTransform: 'capitalize' }}>{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => {
            const values = Object.entries(row);
            return (
              <TableRow
                key={`${row.id}-${index}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {values.filter((entry) => entry[0] !== 'id').map((entry, index) => (
                  <TableCell key={`${entry[1]}-${index}`}>
                    {entry[1].toString()}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
};

export default memo(Table);
