import React from "react";
import { Grid, Card } from "@mui/material";
import DrawerAppBar from "../Components/Header/index"
import DrawernavBar from "../Components/Footer/index"

//css//
import style from "./style.module.css";
//image//
import BuyBack from "../../Assets/Images/Buyback.jpg";
import Why from "../../Assets/Images/why.jpg";
import Question from "../../Assets/Images/Buyback2.jpg";
import Liloop from "../../Assets/icon/liloop logo.png";
import How from "../../Assets/Images/Works.jpg";
import Contact from "../../Assets/Images/Contact.jpg";
import Mobile from "../../Assets/Images/mobile.jpg";
import Page from "../../Assets/Images/page.jpg";
import Pink from "../../Assets/Images/pink.jpg";
import Green from "../../Assets/Images/green.jpg";
import Note from "../../Assets/Images/note.jpg";
import Need from "../../Assets/Images/keep.jpg";

//icon//
import Hand from "../../Assets/Images/Hand_shake.jpg";
import Dollar from "../../Assets/Images/Dollar.jpg";
import Hourglass from "../../Assets/Images/Hourglass.jpg";

export default function Buybackpage() {
    return (
        <>
            <Grid>
                <Grid className={style.buy}>
                    <img src={BuyBack} alt="" />

                </Grid>
            </Grid>
            <Grid>
                <Grid className={style.why}>
                    <img src={Why} alt="" />

                </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center"
                paddingRight="10%" paddingLeft="10%" lg={12} >

                <Grid item lg={6} style={{ padding: "7%" }}>
                    <img src={Question} alt="" />
                </Grid>

                <Grid item lg={6} textAlign="left">
                    <ol style={{ fontSize: "1.2vw", fontStyle: "italic", color: "GrayText" }}>
                        <li>
                            Disposing lithium batteries in unorganised way will impact the environmental negatively and dumping these waste will create huge toxic chemicals in the environment.
                        </li>
                        <li>Your Dead battery can generate wealth for you. You think, there is no value in your dead battery.No you are wrong even your dead electric scooter battery is worth Rs.4000 to 6000.Let us figure out the true value of your dead battery.</li>
                        <li>Organised disposal will ensure smooth supply chain of lithium material for your new battery in future. be a responsible citizen and ensure the organised disposal of your dead battery.</li>
                    </ol>
                </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center"
                paddingRight="10%" paddingLeft="10%" lg={12} >
                <Grid item lg={6} textAlign="left">
                    <ol style={{ fontSize: "1.2vw", fontStyle: "italic", color: "GrayText" }}>
                        <li>We provide the true value of your dead battery after running some preliminary rapid tests at our centre.</li>
                        <li>Your Dead battery can generate wealth for you. You think, there is no value in your dead battery.No you are wrong even your dead electric scooter battery is worth Rs.4000 to 6000.Let us figure out the true value of your dead battery</li>
                        <li>Organised disposal will ensure smooth supply chain of lithium material for your new battery in future. be a responsible citizen and ensure the organised disposal of your dead battery</li>
                    </ol>
                </Grid>
                <Grid item lg={6} style={{ paddingLeft: "15%" }}>

                    <img src={Liloop} alt="" padding="15%" />
                </Grid>
            </Grid>
            <Grid alignItems="center" style={{ marginLeft: "42%", width: "25%" }}>
                <img src={How} alt="" width="15%" />
            </Grid>

            <Grid container direction="row" alignItems="center"
                paddingRight="10%" paddingLeft="10%" lg={12}>
                <Grid item lg={6} width="60%" >
                    <img src={Contact} alt="" width="50%" />
                </Grid>
                <Grid item lg={6} textAlign="left" >

                    <li style={{ listStyleType: "none", fontSize: "1.6vw", fontFamily: "monospace" }}>1:Contact us through email or WhatsApp</li>
                    <li style={{ listStyleType: "none", fontSize: "1.3vw", fontStyle: "italic", color: "GrayText" }}>Customer can contact us through email, whatsapp, facebook</li>

                </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center"
                paddingRight="10%" paddingLeft="10%" lg={12}>
                <Grid item lg={6} textAlign="left">
                    <li style={{ listStyleType: "none", fontSize: "1.7vw", fontFamily: "monospace" }}>2:Fill the form given</li>
                    <li style={{ listStyleType: "none", fontSize: "1.5vw", fontStyle: "italic", color: "rgb(53, 123, 215)" }}> <span>Click here to check the Form and Fill</span></li>
                </Grid>
                <Grid item lg={6} width="60%" >
                    <img src={Mobile} alt="" width="60%" />
                </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center"
                paddingRight="10%" paddingLeft="10%" lg={12}>
                <Grid item lg={6} paddingRight="10%" width="60%" >
                    <img src={Page} alt="" width="50%" />
                </Grid>
                <Grid item lg={6} textAlign="left">
                    <li style={{ listStyleType: "none", fontSize: "1.7vw", fontFamily: "monospace" }}>3: We will get back to you</li>
                    <li style={{ listStyleType: "none", fontSize: "1.3vw", fontStyle: "italic", color: "GrayText" }}>We will contact you through email, Phone and various way as per user Comfort
                        Or else if Customer need Personal talk you can always come to your nearest office for a chat.</li>
                </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center"
                paddingRight="10%" paddingLeft="10%" lg={12}>
                <Grid item lg={6} textAlign="left">
                    <li style={{ listStyleType: "none", fontSize: "1.5vw", fontFamily: "monospace" }}>4:As per your consent you can visit our centre or we will pick up the battery.</li>
                    <li style={{ listStyleType: "none", fontSize: "1.2vw", fontStyle: "italic", color: "GrayText" }}>As per user comfort we will give all kind of options to reach to us
                        and sell their old battery to us get the right amount.</li>
                </Grid>
                <Grid item lg={6} paddingRight="10%" paddingLeft="7%" >
                    <img src={Pink} alt="" width="70%" />
                </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center"
                paddingRight="10%" paddingLeft="10%" lg={12}>
                <Grid item lg={6} paddingRight="10%" width="70%" >
                    <img src={Green} alt="" width="70%" />
                </Grid>
                <Grid item lg={6} textAlign="left">
                    <li style={{ listStyleType: "none", fontSize: "1.5vw", fontFamily: "monospace" }}>5: Test data with estimated buy back value shared with you</li>
                    <li style={{ listStyleType: "none", fontSize: "1.2vw", fontStyle: "italic", color: "GrayText" }}>User will get every possible details about the buyback price.
                        So that Customer can decide easily</li>
                </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center"
                paddingRight="10%" paddingLeft="10%" lg={12}>
                <Grid item lg={6} textAlign="left">
                    <li style={{ listStyleType: "none", fontSize: "1.5vw", fontFamily: "monospace" }}>6:Amount transferred in your account.</li>
                    <li style={{ listStyleType: "none", fontSize: "1.2vw", fontStyle: "italic", color: "GrayText" }}>After getting the buyback deal decided amount will be transferred into your respective bank account
                        Or online bank transaction as per user comfort.</li>
                </Grid>
                <Grid item lg={6} paddingRight="20%" paddingLeft="10%" padding="9%">
                    <img src={Note} alt="" width="50%" />
                </Grid>
            </Grid>

            {/* Why choose us start */}
            <Grid container direction="column" justifyContent="center" textAlign="center" alignItems="center" p={10}>

                <Grid item>
                    <h3 style={{ color: "rgb(95, 207, 128)", fontSize: "2.5vw" }}>Why Choose Us?</h3>

                </Grid>
                <hr style={{ color: "gray", width: "90%", paddingTop: "10px" }}></hr>


                <Grid container lg={12} sm={12} direction="row" justifyContent="center" spacing={6} textAlign="center">
                    <Grid item lg={4} sm={6} textAlign="center">
                        <Card style={{ height: "110%", width: "90%", textAlign: "center" }}>
                            <Grid style={{ paddingLeft: "30%", paddingRight: "30%", height:"150px" }}>
                                <img src={Hand} alt="" style={{ justifyContent: "center", width: "100%" }} />
                            </Grid>
                            <li style={{ listStyleType: "none", fontSize: "1.5vw", textAlign: "center", fontStyle: "italic", color: "grey" }}>No risk. 100% satisfaction guaranteed</li>
                            <button type="button" style={{ marginTop: "30px", backgroundColor: "orange", borderRadius: "30px", outline: "none", padding: "15px", border: "none", marginTop: "15%" }}>KNOW MORE</button>
                        </Card>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                        <Card style={{ height: "110%", width: "90%" }}>
                            <Grid style={{ paddingLeft: "30%", paddingRight: "30%", height:"150px" }}>
                                <img src={Dollar} alt="" style={{ justifyContent: "center", width: "100%" }} />
                            </Grid>
                            <li style={{ listStyleType: "none", fontSize: "1.5vw", textAlign: "center", fontStyle: "italic", color: "grey" }}>We pay more then any other buy back service</li>
                            <button type="button" style={{ marginTop: "30px", backgroundColor: "orange", borderRadius: "30px", outline: "none", padding: "15px", border: "none" }}>KNOW MORE</button>
                        </Card>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                        <Card style={{ height: "110%", width: "90%" }}>
                            <Grid style={{ paddingLeft: "30%", paddingRight: "30%", height:"150px" }}>
                                <img src={Hourglass} alt="" style={{ justifyContent: "center", width: "100%" }} />
                            </Grid>
                            <li style={{ listStyleType: "none", fontSize: "1.5vw", textAlign: "center", fontStyle: "italic", color: "grey" }}>We pay in 24 hours after we got the parcel</li>
                            <button type="button" style={{ marginTop: "30px", backgroundColor: "orange", borderRadius: "30px", outline: "none", padding: "15px", border: "none" }}>KNOW MORE</button>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>







            <Grid container direction="row" alignItems="center"
                paddingRight="10%" paddingLeft="37%" lg={12} paddingTop="10%">
                <Grid item lg={6} paddingRight="10%" width="70%">
                    <img src={Need} alt="" width="60%" />
                </Grid>
            </Grid>
            <Grid className={style.backpage}>
                <li>I'll get back to you as quickly as possible</li>
            </Grid>
            <Grid className={style.form}>
                <Grid className={style.text}>
                    <input type="text" placeholder="your name"></input>
                    <input type="email" placeholder="Your email"></input>
                    <input type="number" placeholder="Phone number"></input>
                </Grid>
                <Grid className={style.area}>
                    <textarea name="" id="" rows="5" placeholder="Battery Specification & Years Of Use"></textarea>
                </Grid>
                <Grid><button type="button" style={{ marginTop: "30px", backgroundColor: "orange", borderRadius: "30px", outline: "none", padding: "15px", border: "none", fontSize: "1.2vw", fontStyle: "italic" }}>SUBMIT</button></Grid>
            </Grid>





            <DrawerAppBar />
            <DrawernavBar />
        </>
    )
}



