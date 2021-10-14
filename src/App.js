import './css/Asset.css';
import './App.css';

import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CreateStudentAccount from "./CreateStudentAccount/CreateStudentAccount.js";
import CreateContactUs from "./CreateContactUs/CreateContactUs.js";
import ListStudents from "./ListStudents/ListStudents";

import CreateTeacherAccount from "./CreateTeacherAccount/CreateTeacherAccount";
import ListTeachers from "./ListTeachers/ListTeachers";


import SignIn from "./Login/SignIn";
import Create from "./create/Create";

import ClassList from "./Dashboard/ClassList";

function App() {

    return (

        <Router>
            <switch>
                <Route path="/CreateStudentAccount">
                    <CreateStudentAccount/>
                </Route>
                <Route path="/CreateTeacherAccount">
                    <CreateTeacherAccount/>
                </Route>
                <Route path="/CreateContactUs">
                    <CreateContactUs/>
                </Route>
                <Route path="/ListStudents">

                    <ListStudents/>

                </Route>


                <Route path="/ListTeachers">

                    <ListTeachers/>

                </Route>

                <Route path="/SignIn">

                    <SignIn/>

                </Route>
                <Route path="/ClassList">

                    <ClassList/>

                </Route>
                <Route path="/Create">

                    <Create/>

                </Route>

            </switch>
            <switch>
                <Route exact path="/">

                    <div className="bg-img">

                        <div className="register">
                            <div className="topnav">
                                <a href="/">Home</a>
                                <a href="/ClassList">Classes</a>
                                <a href="/CreateContactUs">Contact Us</a>
                                <a href="/SignIn">SignIn</a>
                                <a href="/Create">Register</a>



                            </div>
                        </div>


                        <div className="slogan1"><p>Askuala online </p></div>

                        <div className="slogan2"><p>learning platform</p></div>
                        <div className="slogan3"><p> Excel in computing</p></div>


                    </div>

                </Route>
            </switch>
        </Router>


    );
}

export default App;

