import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Router} from "@mui/icons-material";
import {Route} from "react-router-dom";
import CreateContactUs from "../CreateContactUs/CreateContactUs";
import ListStudents from "../ListStudents/ListStudents";

function Classes() {
    return (
        <>
            <div className="bg-img">
                <div className="align">
                    <div className="card">
                        <Card sx={{maxWidth: 300}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="data:image/jpeg;base64,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"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="card2">
                        <Card sx={{maxWidth: 300}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="data:image/jpeg;base64,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"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="card2">
                        <Card sx={{maxWidth: 300}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://reciprocity.com/wp-content/uploads/2021/06/resource_advanced-persistent-threat-cybersecurity_featured-img_730x270.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Cyber Security
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                    Cybersecurity is the practice of protecting systems, networks, and programs from
                                    digital attacks.
                                    These cyberattacks are usually aimed at accessing, changing, or destroying sensitive
                                    information;
                                    extorting money from users; or interrupting normal business processes.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="register">
                <div className="topnav">
                    <a href="/">Home</a>

                    <a href="/CreateContactUs">Contact Us</a>
                    <a href="/SignIn">SignIn</a>
                    <a href="/create">Register</a>
                </div>
            </div>

            <Router>
                <switch>

                    <Route path="/CreateContactUs">
                        <CreateContactUs/>
                    </Route>
                    <Route path="/ListStudents">

                        <ListStudents/>

                    </Route>

                </switch>

            </Router>
        </>
    );
}

export default Classes;
