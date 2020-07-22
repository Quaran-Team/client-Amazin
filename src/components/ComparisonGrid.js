import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, power, autoPrograms, manPrograms, crushing) {
  return { name, power, autoPrograms, manPrograms, crushing };
}

const rows = [
  createData('Ninja Professional with Cups', 1100, 0, 4, 0),
  createData('Ninja Professional', 1000, 4, 4, 0),
  createData('Nutri Ninja DUo with Auto-iQ', 1200, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Power&nbsp;(Watts)</TableCell>
            <TableCell align="right">Automatic Programs</TableCell>
            <TableCell align="right">Manual Programs</TableCell>
            <TableCell align="right">Total Crushing Blades</TableCell>
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
  );
}
