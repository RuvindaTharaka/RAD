import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import { styleSheet } from "./style";
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../../src/components/common/Button";
import GDSESnackBar from "../../../src/components/common/SnackBar";

class LogIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: 'admin',
            pw: 'admin',
            formData: {
                user_name: '',
                password: ''
            },
            //for snackbar props
            open: false,
            message: '',
            severity: ''
        }
    }

    checkValidity() {
        console.log("Login button clicked!")

        console.log(this.state.formData)

        let formData = this.state.formData

        if (formData.user_name === this.state.userName && formData.password === this.state.pw) {
            console.log('credential matched!')
            this.setState({
                open: true,
                message: 'Verified!',
                severity: 'success'
            })
        } else {
            this.setState({
                open: true,
                message: 'Invalid!',
                severity: 'error'
            })
        }
    }

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.container}>
            <div className={classes.logIn__cover}>
                <div className={classes.title__container}>
                    <Typography variant="h4">Login</Typography>
                </div>
                <div className={classes.form__container}>
                    <TextField
                        id="outlined-basic"
                        label="User name"
                        variant="outlined"
                        onChange={(e) => {
                            console.log(e.target.value)
                            let formData = this.state.formData
                            formData.user_name = e.target.value
                            this.setState({ formData })
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        type="password"
                        label="Password"
                        variant="outlined"
                        onChange={(e) => {
                            console.log(e.target.value)
                            let formData = this.state.formData
                            formData.password = e.target.value
                            this.setState({ formData })
                        }}
                    />
                </div>
                <div className={classes.btn__container}>
                    <GDSEButton
                            variant="contained"
                            label="Login"
                            onClick={() => {
                                this.checkValidity()
                            }}
                    /> 
                </div>
            </div>
            <GDSESnackBar
                    open={this.state.open}
                    onClose={() => {
                        this.setState({ open: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
           
        </div>
        )
    }
}
export default withStyles(styleSheet)(LogIn)