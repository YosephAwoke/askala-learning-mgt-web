import React, {useEffect, useState} from 'react';
import '../css/Asset.css';

import TextField from "@mui/material/TextField";
import axios from "axios";
import {Router} from "@mui/icons-material";
import {Route} from "react-router-dom";
import ListStudents from "../ListStudents/ListStudents";
import {Box} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useHistory} from "react-router";

const useStyles = makeStyles(
    () => ({
        textField: {
            margin: 40

        },
        button: {
            padding: 10,
            color: "#5B0A36",
            margin: 200,
            marginLeft: 950,
            backgroundColor: "5B0A36",
            marginTop: 60


        },

    }));

function ClassList() {
    return null;
}

const CreateContactUs = () => {

    const classes = useStyles();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);


    useEffect(() => {
            if (isSubmitClicked === true) {


                axios.post(
                    "https://askuala-lms-web-app.herokuapp.com/api/contactUs/create",
                    {

                        "fullName": fullName,
                        "email": email,
                        "message": message,
                    }
                )

                    .then((response) => console.log(response.data))
                    .catch((error) => {
                        console.log(error);
                        alert("not submitted correctly: " + error.error);
                    })

            }
        }
        , [fullName, email, message, isSubmitClicked]);


    return (
        <>
            <form>
                <div className="bg-img3">


                    <div className="register">
                        <div className="topnav">
                            <a href="/">Home</a>
                            <a href="/ClassList">Classes</a>
                            <a href="/CreateContactUs">Contact Us</a>
                            <a href="/SignIn">SignIn</a>
                            <a href="/create">Register</a></div>
                    </div>

                    <div className="connect">
                        <h3> Get Connected</h3>
                        <h6>Send us your Feedback!!</h6>
                    </div>

                    <div className="formdecoration">

                        <TextField
                            className={classes.textField}
                            type={"text"}
                            autoFocus={true}
                            label={"Full Name"}

                            value={fullName}
                            placeholder={"your name"}
                            onChange={(event) => setFullName(event.target.value)}
                            variant="outlined"/>

                    </div>
                    <div className="formdecoration">
                        <TextField

                            type={"email"}
                            autoFocus={true}
                            label={"Email"}
                            value={email}
                            placeholder={"your email"}
                            onChange={(event) => setEmail(event.target.value)}
                            variant="outlined"/>
                    </div>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {m: 0, width: '50ch'},
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <div className="formdecoration2">
                            <TextField
                                type={"text"}
                                label={"Message"}
                                placeholder={"your Message"}
                                multiline
                                value={message}
                                rows={8}
                                onChange={(event) => setMessage(event.target.value)}
                                variant="outlined"/>

                        </div>
                    </Box>


                    <div className="nav">
                        <button
                            className={classes.button}
                            variant={"contained"}
                            color={"primary"}
                            onClick={() => setIsSubmitClicked(true)}

                        >
                            send us comment
                        </button>

                    </div>


                </div>

            </form>
            <Router>
                <switch>

                    <Route path="/CreateContactUs">
                        <CreateContactUs/>
                    </Route>
                    <Route path="/ListStudents">

                        <ListStudents/>

                    </Route>
                    <Route path="/thanks">

                        <thanks/>

                    </Route>
                    <Route path="/ClassList">

                        <ClassList/>

                    </Route>

                </switch>

            </Router>
        </>
    );


}
export default CreateContactUs;

