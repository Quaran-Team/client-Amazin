import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    backgroundColor: "red"
  }
});

class ComparisonGrid extends React.Component {

  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {

    this._isMounted = true;

    axios.get("http://localhost:8080/all/products/").then((response) => {
    if (this._isMounted)  {
      this.setState({
        items: response.data,
        });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    console.log(this.state.items);
    const { comparisonGrid } = this.props;
    return (
      <div className="comparisonGrid.root">
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {this.state.items.map((item) => (
                  <TableCell key={item.itemId} align="right">{item.itemName}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {this.state.items.map((item) => {
                  return <TableCell key={item.itemId} align="right" component="th" scope="row">{item.itemPrice}</TableCell>
                })}
              </TableRow>
              <TableRow>
                {this.state.items.map((item) => {
                  return <TableCell key={item.itemId} align="right">{item.itemRating}</TableCell>
                })}
              </TableRow>
              <TableRow>
                {this.state.items.map((item) => {
                  return <TableCell key={item.itemId} align="right">{item.itemColor}</TableCell>
                })}
              </TableRow>
              <TableRow>
              {this.state.items.map((item) => {
                return <TableCell key={item.itemId} align="right">{item.itemMode}</TableCell>
              })}
            </TableRow>
            <TableRow>
            {this.state.items.map((item) => {
              return <TableCell key={item.itemId} align="right">{item.itemSound}</TableCell>
            })}
          </TableRow>
          <TableRow>
          {this.state.items.map((item) => {
            return <TableCell key={item.itemId} align="right">{item.itemCapacity}</TableCell>
          })}
        </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ComparisonGrid);
