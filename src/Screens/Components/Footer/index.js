import * as React from "react";
import { Grid } from "@mui/material"
import style from "./style.module.css"
import logo from "../../../Assets/icon/liloop logo.png"
// import {FacebookIcon} from '@mui/icons-material';
import FacebookIcon from "../../../Assets/Images/facebook.png";
import TwitterIcon from "../../../Assets/Images/twitterIcon.png";
import GoogleIcon from "../../../Assets/Images/google.png";
import LinkedinIcon from "../../../Assets/Images/linkedin.png";
import NetworkIcon from "../../../Assets/Images/network.png"



export default function DrawernavBar() {
  return (
    <>
<Grid className={style.footer}>
      <Grid className={style.foot}>
        <Grid>
          <img src={logo} alt="" />
          <p style={{ fontSize: "20px", color: "#b7b7b7", lineHeight: "1.6", marginTop: "-30px" }}>CELLARK POWERTECH PRIVATE LIMITED</p>
          <p style={{ color: "#b7b7b7", marginTop: "-40px" }}>MOST TRUSTED AND RELAIBLE WITH HIGHEST BATTERY LIFE CYCLE PROVIDING <br />IN BHUBANESWAR</p>
          <Grid className={style.socialMedia}>
            <img src={TwitterIcon} alt="" />
            <img src={FacebookIcon} alt="" />
            <img src={GoogleIcon} alt="" />
            <img src={LinkedinIcon } alt="" />
            <img src={NetworkIcon} alt="" />
          </Grid>

        </Grid>
        <Grid>
          <h5>NAV LINK</h5>
          <Grid className={style.connect}>
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/about">ABOUT</a></li>
              <li><a href="/product">PRODUCT</a></li>
              <li><a href="/contact">CONTACT</a></li>
            </ul>
          </Grid>
        </Grid>

        <Grid>
          <h5 style={{ color: "white", fontWeight: "20px" }}>CONTACT</h5>


          <Grid className={style.contact}>
            <h1 style={{ color: "white", marginBottom: "-50%", marginTop: "-20%", marginLeft: "-300%" }}>CONTACT</h1>

            <ul>
              <li>
                <p style={{ marginTop: "50%" }}>
                  {/* <i className={style.fa fa4-map-marker:true}></i> */}
                  SIKARIPUR, NIMPUR ,JAGATPUR,CUTTACK,754021
                </p>
              </li>
              <li>
                <p>
                  +91 9454169474
                </p>
              </li>
              <li>
                <p>
                  info@liloop.in
                </p>
              </li>
              <li>
                <p>
                  Monday - Friday, 10:00AM - 06:00 PM
                </p>
              </li>
            </ul>
          </Grid>
        </Grid>
     
      </Grid>
      <hr style={{color:"white",width:"100%",marginTop:"10px"}}></hr>
      <h4 style={{color:"white",marginTop:"10px"}}>Copyright ©All rights reserved | This is made with by TECHNOBOOT</h4>
      </Grid>
      

    </>

  );
}