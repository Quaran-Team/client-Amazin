import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

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

    if (this.props.params < 6) {
      axios.get("http://localhost:8080/products/microwave").then((response) => {
        if (this._isMounted) {
          this.setState({
            items: response.data,
          });
        }
      });
    } else if (this.props.params > 5 && this.props.params < 11) {
      axios.get("http://localhost:8080/products/blender").then((response) => {
        if (this._isMounted) {
          this.setState({
            items: response.data,
          });
        }
      });
    } else if (this.props.params > 10 && this.props.params < 16) {
      axios.get("http://localhost:8080/products/mixer").then((response) => {
        if (this._isMounted) {
          this.setState({
            items: response.data,
          });
        }
      });
    } else if (this.props.params > 15 && this.props.params < 21) {
      axios.get("http://localhost:8080/products/toaster").then((response) => {
        if (this._isMounted) {
          this.setState({
            items: response.data,
          });
        }
      });
    } else {
      return;
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    console.log(this.state.items);
    const picsum = "https://picsum.photos/120";
    return (
      <div className="comparisonGrid.root">
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center"></TableCell>
                {this.state.items.map((item) => (
                  <TableCell key={item.itemId} align="center">
                    <img src={picsum}></img>
                    <br />
                    {item.itemName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center" sortDirection="asc">
                  Price (USD$)
                </TableCell>
                {this.state.items.map((item) => {
                  return (
                    <TableCell
                      key={item.itemId}
                      align="center"
                      component="th"
                      scope="row"
                    >
                      {item.itemPrice}
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableCell align="center">Rating</TableCell>
                {this.state.items.map((item) => {
                  return (
                    <TableCell key={item.itemId} align="center">
                      {item.itemRating}
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableCell align="center">Colors</TableCell>
                {this.state.items.map((item) => {
                  return (
                    <TableCell key={item.itemId} align="center">
                      {item.itemColor}
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableCell align="center">Modes</TableCell>
                {this.state.items.map((item) => {
                  return (
                    <TableCell key={item.itemId} align="center">
                      {item.itemMode}
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableCell align="center">Sounds</TableCell>
                {this.state.items.map((item) => {
                  console.log(item.itemSound);
                  if (item.itemSound == "true") {
                    return (
                      <TableCell key={item.itemId} align="center">
                        <p>&#10004;</p>
                      </TableCell>
                    );
                  } else if (item.itemSound == "false") {
                    return (
                      <TableCell key={item.itemId} align="center">
                        <p>&#10008;</p>
                      </TableCell>
                    );
                  } else {
                    <TableCell key={item.itemId} align="center">
                      {item.itemSound}
                    </TableCell>;
                  }
                })}
              </TableRow>
              <TableRow>
                <TableCell align="center">Capacity</TableCell>
                {this.state.items.map((item) => {
                  return (
                    <TableCell key={item.itemId} align="center">
                      {item.itemCapacity}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default ComparisonGrid;
