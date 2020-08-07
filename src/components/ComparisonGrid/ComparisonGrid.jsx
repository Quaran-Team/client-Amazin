import React from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from 'axios';

class ComparisonGrid extends React.Component {  
  constructor(props) {  
    super(props)  
    this.state = {  
      items: [] 
    }  
  }  
  componentDidMount() {  
    axios.get("http://localhost:8080/all/products/").then(response => {   
      this.setState({  
        items: response.data  
      });  
    });  
  }  

  render() {  
    console.log(this.state.items);
    return (  
      <div>
       <TableContainer component={Paper}>  
        <Table stickyHeader  aria-label="sticky table">  
          <TableHead>  
            <TableRow> 
              <TableCell>Category</TableCell>
              {
                this.state.items.map(item => 
                  <TableCell align="right">{item.itemName}</TableCell>
                )
              }
            </TableRow> 
            </TableHead>  
          <TableBody>  
            {  
              this.state.items.map(item => {  
                return <TableRow>  
                  <TableCell component="th" scope="row">  
                    {item.itemId}  
                  </TableCell>   
                  <TableCell align="right">{item.itemAbout}</TableCell>   
                  <TableCell align="right">{item.itemPrice}</TableCell>    
                </TableRow>  
              })  
            }  
          </TableBody>  
        </Table>  
        </TableContainer>   
      </div>
    );  
  }  
}  
  
export default ComparisonGrid;