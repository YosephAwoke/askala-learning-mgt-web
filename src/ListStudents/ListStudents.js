import React from 'react';
import {
    Box,
    Checkbox,
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import useAxios from "axios-hooks";
import {convertPinToStars} from '../helpers/helpers';

const ListStudents = () => {


    const [{data, error, loading}] = useAxios("https://askuala-lms-web-app.herokuapp.com/api/studentAccount/list")
    if (loading) {
        return (
            <Box sx={{width: '100%'}}>
                <LinearProgress/>
            </Box>
        );
    }

    if (error) return <p>
        This error happened: {error.message}
    </p>
    return (
        <>
            <div className="register">
                <div className="topnav">
                    <a href="/">Home</a>
                    <a href="/ClassList">Classes</a>
                    <a href="/CreateContactUs">Contact Us</a>
                    <a href="/ListTeachers">Teachers</a></div>
            </div>
            <div className="createAcc">
                <p> List of Student </p>
            </div>
            <form>
                <div className="register">
                    <div className="reg">
                        <input type="text"
                               name="Search"
                               placeholder="Search Here"
                        />
                        <button name="Search">Search</button>
                    </div>
                </div>

            </form>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Full Name</TableCell>

                            <TableCell>Email</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>PhoneNumber</TableCell>
                            <TableCell>DateOfBirth</TableCell>
                            <TableCell>Password</TableCell>
                            <TableCell>Is Verified</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {data.map((row) => {
                            return (
                                <TableRow>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.firstName}{row.middleName}{row.lastName}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.department}</TableCell>
                                    <TableCell>{row.phoneNumber}</TableCell>
                                    <TableCell>{row.dateOfBirth}</TableCell>
                                    <TableCell>{convertPinToStars(row.password)}</TableCell>
                                    <TableCell>{row.isVerified.toString()}<Checkbox
                                        checked={row.isVerified}/></TableCell>
                                </TableRow>
                            )
                        })}


                    </TableBody>


                </Table>


            </TableContainer>
        </>
    );


}
export default ListStudents;