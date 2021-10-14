import React from 'react';
import '../css/Asset.css';
import {Router} from "@mui/icons-material";
import {Route} from "react-router-dom";
import ListStudents from "../ListStudents/ListStudents";
import Classes from "../Classes/Classes";
import ListTeachers from "../ListTeachers/ListTeachers";


const Dashboard = () => {


    return (
        <>

            <Router>
                <switch>


                    <Route path="/ListStudents">

                        <ListStudents/>

                    </Route>

                    <Route path="/ListTeachers">

                        <ListTeachers/>

                    </Route>
                    <Route path="/Classes">

                        <Classes/>

                    </Route>

                </switch>

            </Router>
            <div className="bg-img">
                <h1 className="register2"> Wellcome Admin</h1>
                <div className="register1">
                    <div className="nav">
                        <a href="/ListStudents"> Students </a>
                    </div>
                    <div className="nav">
                        <a href="/ListTeachers"> Teachers </a>
                    </div>
                    <div className="nav">
                        <a href="/Classes"> Classes </a>
                    </div>
                </div>
            </div>
        </>
    );


}
export default Dashboard;