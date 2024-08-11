import React from "react";
import { Grid } from "@mui/material";
import DrawerAppBar from "../Components/Header/index"
import DrawernavBar from "../Components/Footer/index"
import style from "./style.module.css"

//image
import box from "../../Assets/icon/box.jpg"
import whbox from "../../Assets/Images/whbox.png"
import blbox from "../../Assets/Images/blbox.png"
import map from "../../Assets/Images/map.png"
import cal from "../../Assets/Images/cal.png"


function Productpage() {
    return (
        <>
            <Grid>
                <h1 style={{ color: "rgb(95, 207, 128)", marginTop: "5%", marginLeft: "0%", fontFamily: "sans-serif " }}>STANDARD</h1>
                <hr style={{color:"gray",width:"100%",marginTop: "1%"}}></hr>
                <Grid className={style.fpart}>
                    <Grid style={{ textAlign: "left", paddingLeft: "9%" }}>
                        <h2>E rickshaw 48V-100Ah</h2>

                        <ul>
                            <li>Compact Size And Less Weight</li>
                            <li>Fast Charging</li>
                            <li>Higher Backup</li>
                            <li>Longer Life</li>
                            <li>Maintainance Free</li>
                            <li style={{ fontWeight: "bold", color: "gray" }}>3 Years Full warranty 20% Value Buyback while returning the used Battery</li>
                        </ul>
                        <p style={{ color: "#4fa6d5", marginTop: "20px" }}>Download Specifications</p>
                        <button type="button" style={{ backgroundColor: "#dc3545", borderRadius: "10px", marginTop: "10px" }}>Contact Me</button>

                    </Grid>
                    <Grid style={{ width: "400px" }}>
                        <img src={box} alt="" />
                    </Grid>
                    <Grid style={{ textAlign: "left", }}>
                        <ul>
                            <li>Model name Li-Loop Chalte Raho E-Rickshaw Battery</li>
                            <li>Chemistry LFP</li>
                            <li>Capacity(Ah) 100Ah</li>
                            <li>Number of cells in series & parallel 15 : 1</li>
                            <li>Total Number of cell 15</li>
                            <li>Nominal Voltage 48v</li>
                            <li>KwH 4800 Wh</li>
                            <li>BMS Type Balancing Type (Passive)</li>
                        </ul>
                    </Grid>
                </Grid>
                {/* part2 */}
                <Grid className={style.fpart}>
                    <Grid style={{ textAlign: "left", paddingLeft: "9%" }}>
                        <h2>E rickshaw 60V-100Ah</h2>

                        <ul>
                            <li>Compact Size And Less Weight</li>
                            <li>Fast Charging</li>
                            <li>Higher Backup</li>
                            <li>Longer Life</li>
                            <li>Maintainance Free</li>
                            <li style={{ fontWeight: "bold", color: "gray" }}>3 Years Full warranty 20% Value Buyback while returning the used Battery</li>
                        </ul>
                        <p style={{ color: "#4fa6d5", marginTop: "20px" }}>Download Specifications</p>
                        <button type="button" style={{ backgroundColor: "#dc3545", borderRadius: "10px", marginTop: "10px" }}>Contact Me</button>

                    </Grid>
                    <Grid style={{ width: "400px" }}>
                        <img src={whbox} alt="" />
                    </Grid>
                    <Grid style={{ textAlign: "left", }}>
                        <ul>
                            <li>Model name Li-Loop Chalte Raho E-Rickshaw Battery</li>
                            <li>Chemistry LFP</li>
                            <li>Capacity(Ah) 100Ah</li>
                            <li>Number of cells in series & parallel 15 : 1</li>
                            <li>Total Number of cell 15</li>
                            <li>Nominal Voltage 48v</li>
                            <li>KwH 6000 Wh</li>
                            <li>BMS Type Balancing Type (Passive)</li>
                        </ul>
                    </Grid>
                </Grid>
                {/* part3 */}

                <Grid className={style.fpart}>
                    <Grid style={{ textAlign: "left", paddingLeft: "9%" }}>
                        <h2>E rickshaw 60V-130Ah</h2>

                        <ul>
                            <li>Compact Size And Less Weight</li>
                            <li>Fast Charging</li>
                            <li>Higher Backup</li>
                            <li>Longer Life</li>
                            <li>Maintainance Free</li>
                            <li style={{ fontWeight: "bold", color: "gray" }}>3 Years Full warranty 20% Value Buyback while returning the used Battery</li>
                        </ul>
                        <p style={{ color: "#4fa6d5", marginTop: "20px" }}>Download Specifications</p>
                        <button type="button" style={{ backgroundColor: "#dc3545", borderRadius: "10px", marginTop: "10px" }}>Contact Me</button>

                    </Grid>
                    <Grid style={{ width: "400px" }}>
                        <img src={box} alt="" />
                    </Grid>
                    <Grid style={{ textAlign: "left" }}>
                        <ul>
                            <li>Model name Li-Loop Chalte Raho E-Rickshaw Battery</li>
                            <li>Chemistry LFP</li>
                            <li>Capacity(Ah) 100Ah</li>
                            <li>Number of cells in series & parallel 15 : 1</li>
                            <li>Total Number of cell 15</li>
                            <li>Nominal Voltage 48v</li>
                            <li>KwH 7800 Wh</li>
                            <li>BMS Type Balancing Type (Passive)</li>
                        </ul>
                    </Grid>
                </Grid>
                {/* part4 */}

                <Grid className={style.fpart}>
                    <Grid style={{ textAlign: "left", paddingLeft: "9%" }}>
                        <h2>Liloop HOPE UPS ,12V 100Ah</h2>

                        <ul>
                            <li>Compact Size And Less Weight</li>
                            <li>Fast Charging</li>
                            <li>Higher Backup</li>
                            <li>Longer Life</li>
                            <li>Maintainance Free</li>
                            <li style={{ fontWeight: "bold", color: "gray" }}>3 Years Full warranty 20% Value Buyback while returning the used Battery</li>
                        </ul>
                        <p style={{ color: "#4fa6d5", marginTop: "20px" }}>Download Specifications</p>
                        <button type="button" style={{ backgroundColor: "#dc3545", borderRadius: "10px", marginTop: "10px" }}>Contact Me</button>

                    </Grid>
                    <Grid style={{ width: "400px" }}>
                        <img src={blbox} alt="" />
                    </Grid>
                    <Grid style={{ textAlign: "left", }}>
                        <ul>
                            <li>Model name Li-Loop Chalte Raho E-Rickshaw Battery</li>
                            <li>Chemistry LFP</li>
                            <li>Capacity(Ah) 100Ah</li>
                            <li>Number of cells in series & parallel 15 : 1</li>
                            <li>Total Number of cell 15</li>
                            <li>Nominal Voltage 48v</li>
                            <li>KwH 1200 Wh</li>
                            <li>BMS Type Balancing Type (Passive)</li>
                        </ul>
                    </Grid>
                </Grid>

                {/* part5 */}
                <Grid container direction="row" alignItems="center" className={style.sec} lg={12}>
                    <Grid item lg={6} className={style.sec1}>
                        <h3>PROTOTYPE & R&D</h3>
                        <p><i>We are in the process of Developing our own Lithium Pouch cell with our patented Si Anode technology</i></p>
                        <Grid>
                            <Grid style={{ display: "flex", alignItems: "center", paddingBottom: 10 }}>
                                <Grid
                                    style={{
                                        backgroundColor: "orange", borderRadius: "30px", width: "30px", height: "30px",
                                        display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px", marginTop: "7%"
                                    }}>
                                    <p>1</p>
                                </Grid>
                                <Grid style={{ marginTop: "7%" }}>
                                    <p>Using our patented nano-porous Silicon material.</p>
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
                                    <p>We ensure high energy density coupled with fast charge rate lithium battery.</p>
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
                                    <p>Making your fleet to reduce your dead charging hours.</p>
                                </Grid>
                            </Grid>
                            <Grid style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                                <Grid
                                    style={{
                                        backgroundColor: "orange", borderRadius: "30px", width: "30px", height: "30px",
                                        display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px"
                                    }}>
                                    <p>4</p>
                                </Grid>
                                <Grid>
                                    <p>We use advanced mathematical tools to optimise the Cell design parameters.</p>
                                </Grid>
                            </Grid>
                            <Grid style={{ display: "flex", alignItems: "center", marginTop: "2px" }}>
                                <Grid
                                    style={{
                                        backgroundColor: "orange", borderRadius: "30px", width: "30px", height: "30px",
                                        display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px"
                                    }}>
                                    <p>5</p>
                                </Grid>
                                <Grid style={{ marginTop: "20px", }}>
                                    <p>Parameters ensuring our cell to operate at maximum efficiency even at higher Indian temperatures.</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <img src={map} alt="" />
                    </Grid>
                </Grid>

                {/* part6 */}

                <h1 style={{ color: "rgb(95, 207, 128)", marginTop: "4%", fontFamily: "sans-serif " }}>CUSTOMIZATION</h1>
                <Grid className={style.third}> 
                    <Grid >
                        <Grid style={{ display: "flex", alignItems: "center", }}>
                            <Grid
                                style={{
                                    backgroundColor: "orange",color:"white", borderRadius: "30px", width: "30px", height: "30px",
                                    display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px",marginLeft:"10%",marginTop:"-40px"
                                }}>
                                <p>1</p>
                            </Grid>
                            <Grid>
                                <p>Every Fleet vehicle has its unique energy signature and thus the unique battery requirement. We understand your pain of finding out the battery pack specific to your fleet requirement.</p>
                            </Grid>
                        </Grid>
                        <Grid style={{ display: "flex", alignItems: "center", }}>
                            <Grid
                                style={{
                                    backgroundColor: "orange",color:"white", borderRadius: "30px", width: "30px", height: "30px",
                                    display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px",marginLeft:"10%",marginTop:"-40px"
                                }}>
                                <p>2</p>
                            </Grid>
                            <Grid>
                                <p>We work with your team to understand your fleet energy signature and design the pack to reduce the overall Battery ownership cost and maximize your profit by providing longer moving hours.</p>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid>
                        <img src={cal} alt="" />
                    </Grid>
                </Grid>

                {/* part7 */}

                <Grid className={style.get} >
                    <Grid>
                        <h1 style={{ marginTop: "20px" }}>GET UPTO <span style={{ color: "red" }}>30%</span>MONEY BACK</h1>
                        <h3 style={{ color: "blue", marginTop: "20px" }}>On placement of your any electric vehicle battery</h3>
                    </Grid>
                    <Grid>
                        <button type="button" >KNOW MORE</button>

                    </Grid>
                </Grid>










                <DrawerAppBar />
                <DrawernavBar />

            </Grid>
        </>
    )
}
export default Productpage;