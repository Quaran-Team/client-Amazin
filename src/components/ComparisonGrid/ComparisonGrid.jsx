import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ComparisonItem from "./ComparisonItem.jsx";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, power, autoPrograms, manPrograms, crushing) {
  return { name, power, autoPrograms, manPrograms, crushing };
}

const rows = [
  createData("Power", 1100, 1000, 1200, 1300),
  createData("Automatic Modes", 0, 4, 4, 0),
  createData("Manual Modes", 4, 1, 0, 4),
  createData("Price ($USD)", 305, 307, 607, 403),
  createData("Rating", 2, 3, 5, 3),
  createData("Hello", 2, 3, 5, 3),
];

export default function ComparisonGrid() {
  const classes = useStyles();

  return (
    <div>
      <ComparisonItem />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell align="right">Product #1</TableCell>
              <TableCell align="right">Product #2</TableCell>
              <TableCell align="right">Product #3</TableCell>
              <TableCell align="right">Product #4</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.power}</TableCell>
                <TableCell align="right">{row.autoPrograms}</TableCell>
                <TableCell align="right">{row.manPrograms}</TableCell>
                <TableCell align="right">{row.crushing}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
