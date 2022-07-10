import React, {Component} from "react";
import { withStyles } from "@mui/styles";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
//import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

  function createData(customerId,customerName,customerNIC,customerGender,customerAddress,customerEmail) {
      return { customerId,customerName,customerNIC,customerGender,customerAddress,customerEmail };
  }
  
  const rows = [
    createData('C001','Amal Perera','19988301196V','Male','Colombo-07','amalperera@gmail.com'),
    createData('C002','Amal Perera','19988301196V','Male','Colombo-07','amalperera@gmail.com'),
    createData('C003','Amal Perera','19988301196V','Male','Colombo-07','amalperera@gmail.com'),
    createData('C004','Amal Perera','19988301196V','Male','Colombo-07','amalperera@gmail.com'),
    createData('C005','Amal Perera','19988301196V','Male','Colombo-07','amalperera@gmail.com'),
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 18,
    },
  }));
  
  

class CustomerMange extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {classes}=this.props;
        return(
            <div className={classes.container}>
                <div className={classes.nav__container}>
                    <div className={classes.title_container}>
                        <h2 >DashBoard</h2>
                    </div>
                    <div className={classes.link_container}>
                    <Tabs >
                        <Tab textColor="success" label="Customer" />
                        <Tab label="Item" />
                        <Tab label="Order" />
                    </Tabs>
                    </div>                  
                </div>
                <div className={classes.form__container}>
                    <div className={classes.feild_container}>
                        <div className={classes.column__one}>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 2, p:1, width: '50ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField  fullWidth label="Customer Id" id="custId" helperText=""/>
                                <TextField  fullWidth label="Customer Gender" id="custGender" helperText=""/>                 
                            </Box>
                        </div>
                        <div className={classes.column__two}>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 2, p:1, width: '50ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField  fullWidth label="Customer Name" id="custName" helperText=""/>
                                <TextField  fullWidth label="Customer Address" id="custAddress" helperText=""/>                   
                            </Box>
                        </div>
                        <div className={classes.column__three}>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 2, p:1, width: '50ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField  fullWidth label="Customer NIC" id="custNIC" helperText=""/>
                                <TextField  fullWidth label="Customer Email" id="custEmail" helperText=""/>                
                            </Box>
                        </div>
                    </div>
                    <div className={classes.btn_container}>
                       <div className={classes.btn_box}>
                            <Stack direction="row" spacing={3}>
                                <Button variant="contained" size="large" color="success">Save</Button>
                                <Button variant="contained" size="large" color="primary">Update</Button>
                                <Button variant="contained" size="large" color="error" startIcon={<DeleteIcon />} >Delete</Button>
                            </Stack>
                       </div>
                    </div>
                </div>


                
                <div className={classes.table__container}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">Customer Id</StyledTableCell>
                                    <StyledTableCell align="center">Customer Name</StyledTableCell>
                                    <StyledTableCell align="center">Customer NIC</StyledTableCell>
                                    <StyledTableCell align="center">Customer Gender</StyledTableCell>
                                    <StyledTableCell align="center">Customer Address</StyledTableCell>
                                    <StyledTableCell align="center">Customer Email</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                       <StyledTableCell align="center" component="th" scope="row">{row.customerId}</StyledTableCell>
                                        <StyledTableCell align="center">{row.customerName}</StyledTableCell>
                                        <StyledTableCell align="center">{row.customerNIC}</StyledTableCell>
                                        <StyledTableCell align="center">{row.customerGender}</StyledTableCell>
                                        <StyledTableCell align="center">{row.customerAddress}</StyledTableCell>
                                        <StyledTableCell align="center">{row.customerEmail}</StyledTableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div >
        )
    }
}
export default withStyles(styleSheet)(CustomerMange)


{/* <div className={classes.column__one}>
<Box
    component="form"
    sx={{
        '& .MuiTextField-root': { m: 2, p:1, width: '50ch' },
    }}
    noValidate
    autoComplete="off"
>
    <TextField  fullWidth label="Customer Id" id="custId" helperText=""/>
    <TextField  fullWidth label="Customer Gender" id="custGender" helperText=""/>                 
</Box>
</div>
<div className={classes.column__two}>
<Box
    component="form"
    sx={{
        '& .MuiTextField-root': { m: 2, p:1, width: '50ch' },
    }}
    noValidate
    autoComplete="off"
>
    <TextField  fullWidth label="Customer Name" id="custName" helperText=""/>
    <TextField  fullWidth label="Customer Address" id="custAddress" helperText=""/>                   
</Box>
</div>
<div className={classes.column__three}>
<Box
    component="form"
    sx={{
        '& .MuiTextField-root': { m: 2, p:1, width: '50ch' },
    }}
    noValidate
    autoComplete="off"
>
    <TextField  fullWidth label="Customer NIC" id="custNIC" helperText=""/>
    <TextField  fullWidth label="Customer Email" id="custEmail" helperText=""/>                
</Box>
</div> */}