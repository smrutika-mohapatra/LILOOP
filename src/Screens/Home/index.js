import React from "react";
import { Grid } from "@mui/material";
import DrawerAppBar from "../Components/Header/index"
import DrawernavBar from "../Components/Footer/index"
//css
import style from "./style.module.css"
//image
// import mainpage from "../../Assets/Images/car...jpg"
import secpage from "../../Assets/icon/box.jpg"
import battery from "../../Assets/icon/battery.png"
import cell from "../../Assets/icon/sell.png"
import packs from "../../Assets/icon/packs.png"
import motor from "../../Assets/Images/motor.png"
import batery from "../../Assets/Images/btry.png"
import footer from "../../Assets/Images/footer.png"




export default function MainPage() {
    return (
        <>

            <Grid>
                {/* part1 */}
                <div className={style.bgImage}></div>
                <Grid className={style.mainhome}>


                    <h1> <span className={style.welcome}>WELCOME</span><br /> TO <br />  <span className={style.liloop}>Li-LOOP</span></h1>

                    <button type="button">GET STARTED</button>
                </Grid>

                {/* Part2 */}
                {/* <Grid className={style.sec}>
                    <Grid className={style.sec1}>
                        <h3>WORRIED ABOUT UP-FRONT COST LITHIUM BATTERIES FOR YOUR VEHICLE?</h3>
                        <p>Get started with us to explore the esiting</p>

                        <h4><span>1</span>Long Battery life.</h4>
                        <h4><span>2</span>Reduce total ownership cost your vehicle.</h4>
                        <h4><span>3</span>Use lithium batteries at 1.5 times price of lead-acid battery with 3 times the life.</h4>
                    </Grid>
                    <Grid style={{marginTop:"10%"}}>
                        <img src={secpage} alt=""/>
                    </Grid>
                    
                </Grid> */}


                <Grid container direction="row" alignItems="center" className={style.sec} lg={12}>
                    <Grid item lg={6} className={style.sec1}>
                        <h3>WORRIED ABOUT UP-FRONT COST LITHIUM BATTERIES FOR YOUR <br /> VEHICLE?</h3>
                        <p><i>Get started with us to explore the esiting</i></p>
                        <Grid>
                            <Grid style={{ display: "flex", alignItems: "center", paddingBottom: 10 }}>
                                <Grid
                                    style={{
                                        backgroundColor: "orange", borderRadius: "30px", width: "30px", height: "30px",
                                        display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px"
                                    }}>
                                    <p>1</p>
                                </Grid>
                                <Grid>
                                    <p>Long Battery life.</p>
                                </Grid>
                            </Grid>
                            <Grid style={{ display: "flex", alignItems: "center", paddingBottom: 10 }}>
                                <Grid
                                    style={{
                                        backgroundColor: "orange", borderRadius: "30px", width: "30px", height: "30px",
                                        display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px"
                                    }}>
                                    <p>2</p>
                                </Grid>
                                <Grid>
                                    <p>Reduce total owenership cost your vehicle.</p>
                                </Grid>
                            </Grid>
                            <Grid style={{ display: "flex", alignItems: "center", }}>
                                <Grid
                                    style={{
                                        backgroundColor: "orange", borderRadius: "30px", width: "30px", height: "30px",
                                        display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px"
                                    }}>
                                    <p>3</p>
                                </Grid>
                                <Grid>
                                    <p>Use lithium batteries at 1.5 times price of lead-acid battery with 3 times the life.</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <img src={secpage} alt="" />
                    </Grid>
                </Grid>




                {/* Part3 */}

                <h1 style={{ marginTop: "5%", marginBottom: "1.5%", color: "rgb(95, 207, 128)", fontSize: "30px", fontFamily: " 'Roboto', sans-serif" }}>OUR SERVICES AND PRODUCTS</h1>
                <Grid className={style.colhead}>



                    <Grid className={style.column}>
                        <img src={packs} alt="" style={{ marginTop: "30px" }} />
                        <h4 style={{ marginTop: "30px" }}>Battery Packs which are superior and smarter along with having a longer battery life.</h4>
                        <button type="button" style={{ marginTop: "30px" }}>KNOW MORE</button>


                    </Grid>
                    <Grid className={style.column}>
                        <img src={battery} alt="" style={{ marginTop: "30px" }} />
                        <h4 style={{ marginTop: "30px" }}>AI driven cell sorting for suitable second use</h4>
                        <button type="button" style={{ marginTop: "30px" }}>KNOW MORE</button>

                    </Grid>
                    <Grid className={style.column}>
                        <img src={cell} alt="" style={{ marginTop: "30px" }} />
                        <h4 style={{ marginTop: "30px" }}>Advanced lithium Pouch cell with our patented Silicon Technology</h4>
                        <button type="button" style={{ marginTop: "30px" }}>KNOW MORE</button>

                    </Grid>
                </Grid>

                {/* Part4 */}


                <Grid container direction="row" alignItems="center" className={style.chose} lg={12}>
                    <Grid item lg={6} className={style.sec1}>
                        <h3>WHY CHOOSE US ?</h3>
                        <p><i>Get started with us to explore the exciting</i></p>
                        <Grid style={{ paddingLeft: 20, marginTop: "40px" }}>
                            <Grid style={{ display: "flex", alignItems: "center", paddingBottom: 10 }}>
                                <Grid
                                    style={{
                                        backgroundColor: "orange", borderRadius: "30px", width: "30px", height: "30px",
                                        display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px"
                                    }}>
                                    <p>1</p>
                                </Grid>
                                <Grid>
                                    <p>More Affordable and Reliable</p>
                                </Grid>
                            </Grid>
                            <Grid style={{ display: "flex", alignItems: "center", paddingBottom: 10 }}>
                                <Grid
                                    style={{
                                        backgroundColor: "orange", borderRadius: "30px", width: "30px", height: "30px",
                                        display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px"
                                    }}>
                                    <p>2</p>
                                </Grid>
                                <Grid>
                                    <p>Long Battery cycle Life</p>
                                </Grid>
                            </Grid>
                            <Grid style={{ display: "flex", alignItems: "center", paddingBottom: 10 }}>
                                <Grid
                                    style={{
                                        backgroundColor: "orange", borderRadius: "30px", width: "30px", height: "30px",
                                        display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px"
                                    }}>
                                    <p>3</p>
                                </Grid>
                                <Grid>
                                    <p>End of life Buyback Value.</p>
                                </Grid>
                            </Grid>
                            <Grid style={{ display: "flex", alignItems: "center", paddingBottom: 10 }}>
                                <Grid
                                    style={{
                                        backgroundColor: "orange", borderRadius: "30px", width: "30px", height: "30px",
                                        display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px"
                                    }}>
                                    <p>4</p>
                                </Grid>
                                <Grid>
                                    <p>Customisation as per your Product Needs</p>
                                </Grid>
                            </Grid>
                            <Grid style={{ display: "flex", alignItems: "center", paddingBottom: 10 }}>
                                <Grid
                                    style={{
                                        backgroundColor: "orange", borderRadius: "30px", width: "30px", height: "30px",
                                        display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px"
                                    }}>
                                    <p>5</p>
                                </Grid>
                                <Grid>
                                    <p>Strong Grip on R&D</p>
                                </Grid>
                            </Grid>
                            <Grid style={{ display: "flex", alignItems: "center", paddingBottom: 10 }}>
                                <Grid
                                    style={{
                                        backgroundColor: "orange", borderRadius: "30px", width: "30px", height: "30px",
                                        display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px"
                                    }}>
                                    <p>6</p>
                                </Grid>
                                <Grid>
                                    <p>Leading the way in terms of Technology</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <img src={motor} alt="" />
                    </Grid>
                </Grid>


                {/* part5 */}
                <Grid className={style.product}>
                    <h2 style={{ marginTop: "40px", color: "rgb(95, 207, 128)", marginBottom: "20px" }}>PRODUCTS</h2>
                    {/* <img src={line} alt="" /> */}
                    <p style={{ marginBottom: "30px" }}>Building a better world, one course at a time</p>


                </Grid>

                {/* part6 */}
                <Grid className={style.mobat}>
                    <Grid style={{ marginLeft: "100px" }}>
                        <img src={motor} alt="" />
                        <button type="button" >E-RICKSHAW/E-LOADER BATTERY</button>

                    </Grid>
                    <Grid style={{ marginLeft: "-100px", width: "51.5%" }}>
                        <img src={batery} alt="" />
                        <button type="button" >STATIONARY BATTERY</button>

                    </Grid>
                </Grid>
                {/* part7 */}


                <Grid className={style.foot}>
                    <img src={footer} alt="" />
                </Grid>
                <Grid className={style.get} >
                    <Grid>
                        <h1 style={{ marginTop: "20px" }}>GET UPTO <span style={{ color: "red" }}>30%</span>MONEY BACK</h1>
                        <h3 style={{ color: "blue", marginTop: "20px" }}>On placement of your any electric vehicle battery</h3>
                    </Grid>
                    <Grid>
                        <button type="button" >KNOW MORE</button>

                    </Grid>
                </Grid>





            </Grid>






            <DrawerAppBar />
            <DrawernavBar/>
        </>
    );

}
