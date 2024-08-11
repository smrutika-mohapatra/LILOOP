import React from "react";
// import Navbar from "../Component/Header/index"
import DrawerAppBar from "../Components/Header/index"
import DrawernavBar from "../Components/Footer/index"
// import Header from "../../Screen/Component/Header/index";
import style from "./style.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Grid } from "@mui/material";
//image
import Img1 from "../../Assets/Images/spic1.jpg";
import Img2 from "../../Assets/Images/spic2.jpg";
import Img3 from "../../Assets/Images/spic3.jpg";
import man1 from "../../Assets/Images/man1.jpg"
import man2 from "../../Assets/Images/man2.jpg"
import man3 from "../../Assets/Images/man3.jpg"



// import picturelogo from "../../Assets/Image/Screenshot 2024-01-12 122914.png";
export default function Mainpage() {
    return (
        <>
            
            <Grid>


                <Grid container direction="row" justifyContent="center" textAlign="center">
                    <Grid style={{marginTop:"7%"}}>
                        <h1>WELCOME TO LILOOP</h1>
                        <p>BRINGING BATTERIES BACK TO LIFE</p>
                    </Grid>
                    <Grid container lg={12} direction="row" style={{ paddingLeft: "10%", marginTop: "8%" }}>
                        <Grid item lg={6} textAlign={"left"}>
                            <h3>About us</h3>
                            <p>Incepted from IIT Bhubaneswar, Liloop focussed on the commercialization of cutting-edge energy storage technology and complement the fight against climate change. Thus, making the Earth a better place to live in and flourish.</p>


                            <h3 style={{ marginTop: "8%" }}>Our history</h3>
                            <p>Liloop is a result of several years of research work carried out at the Green Energy laboratory at IIT Bhubaneswar
                                Most businesses know what and how, but we founded Liloop based on WHY?
                                Our why is ensuring that our future generation gets the environmental resources they deserve. And the most important one is a clean and sustainable atmosphere.
                                We are a technology-driven company striving for the transition of fossil fuel to clean energy, using more reliable and affordable tools based on our advanced and state of art energy storage solutions.</p>
                        </Grid>
                        <Grid item lg={6}></Grid>


                    </Grid >
                    <Carousel>
                        <Grid style={{ display: "flex",marginLeft:"10%" }}>
                            <Grid>
                                <img src={man1} alt="" />

                            </Grid>
                            <Grid style={{ marginTop: "10%" }}>
                                <p>" 5 years experience in the field of the solar industry.Mechanical engineer cum batteryinnovator.visionary and expert in commercializing ideas."</p>
                                <h2> ASWINI PANDEY</h2>
                                <h5 style={{ color: "orange" }}>CEO, Co-founder</h5>


                            </Grid>
                        </Grid>
                        <Grid style={{ display: "flex",marginLeft:"10%" }}>
                           
                            <Grid>
                                <img src={man2} alt="" />

                            </Grid>
                            <Grid style={{ marginTop: "10%",marginLeft:"23px" }}>
                            <p>"Seasoned entrepreneur with more than 10 years of businesses experience ."</p>
                             <h2> ANUBHAV JAIN</h2>
                                <h5 style={{ color: "orange" }}>Director, Strategy and growth</h5>


                            </Grid>
                        </Grid>
                        <Grid style={{ display: "flex",marginLeft:"10%" }}>
                            <p></p>
                            <Grid>
                                <img src={man3} alt="" />

                            </Grid>
                            <Grid style={{ marginTop: "10%" }}>
                                <p>"Currently Dr.Pati is working as Assistant professor at IIT Bhubaneswar . He is responsible for the development of new and advanced materials for lithium batteries and fuel cell technology . He holds free patents and several research publications in the field of electrochemistry and energy storage . "</p>
                                 <h2>SOOBHAMKAR PATI,PH.D</h2>
                                <h5 style={{ color: "orange" }}> Co-founder,Director,Research and Development</h5>


                            </Grid>
                        </Grid>
                    </Carousel>


                    <Grid container direction="row" lg={12} style={{ marginLeft: "13%" ,marginBottom:"5%"}} >
                        <Grid item lg={12} style={{ fontSize: "2rem", fontWeight: "500", marginTop: "5%", marginLeft: "-6%", color: "green" }}>
                            Our Partners
                        </Grid>

                        <Grid item lg={3} style={{ marginLeft: "2%", marginRight: "2%" }} >
                            <img src={Img1} alt="" />
                        </Grid>
                        <Grid item lg={3} style={{ marginLeft: "2%", marginRight: "2%" }}>
                            <img src={Img2} alt=""/>
                        </Grid>
                        <Grid item lg={3} style={{ marginLeft: "2%", marginRight: "2%" }}>
                            <img src={Img3}alt="" />
                        </Grid>

                    </Grid >

                </Grid>

                <Grid className={style.get} >
                    <Grid>
                        <h1 style={{ marginTop: "20px" }}>GET UPTO <span style={{ color: "red" }}>30%</span>MONEY BACK</h1>
                        <h3 style={{ color: "blue", marginTop: "20px" }}>On placement of your any electric vehicle battery</h3>
                    </Grid>
                    <Grid style={{marginBottom:"20px"}}>
                        <button type="button" >KNOW MORE</button>

                    </Grid>
                </Grid>

    
            </Grid >



            
            {/* <Navbar/> */}
            {/* <Footer /> */}
            <DrawerAppBar/>
            <DrawernavBar/>
        </>
    );
}