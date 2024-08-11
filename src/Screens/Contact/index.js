import React from "react";
import DrawerAppBar from "../Components/Header/index"
import DrawernavBar from "../Components/Footer/index"
import style from "./style.module.css"
import img from "../../Assets/Images/call-bg.jpg"

export default function Contactpage() {
    return (
        <>
            <div className={style.main}>


                <h2 className={style.contactus}>CONTACT US</h2>
                <p className={style.welcome}> Welcome to liloop</p>

                <div className={style.all}>
                    <div class={style.fg}>
                        <h1>Address</h1>
                        <p>Balasore College Of Engineering & Technology, Sergarh,756061</p>
                        <h1>Phone</h1>
                        <p1>(+91)9692143084</p1>
                        <h1>Email</h1>
                        <p>jenapuja855@gmail.com</p>
                        <h1>Working Time</h1>
                        <p>Monday To Friday 10AMto6pm</p>
                    </div>

                    <div className={style.googlemap}>


                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" width="1200" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" > </iframe>

                    </div>
                </div>
                <div className={style.getintouch1} >
                    <h3 className={style.getintouch}>GET IN TOUCH</h3>
                    <p1 className={style.deal}>Contact us for best deal and offer</p1>
                </div>
                <div class={style.container}>
                    <form >

                        <label class={style.fname}>First Name</label>
                        <input type="text" name="firstname" placeholder="Your name.." />



                        <label class={style.email}>Enter your email</label>
                        <input type="email" id="email" name="email" placeholder="Your mail"></input>

                        <label class={style.subject}>Subject </label>
                        <input type="text" placeholder="Subject"></input>

                        <label class={style.battery}>Battery Specification</label>
                        <textarea name="subject" placeholder="Battery Specification" rows="12"></textarea>

                        <button>SUBMIT</button>
                    </form>

                </div>


                <div className={style.mid_full}>

                    {/* <div className={style.img_b}>
                        <img src={img} alt="" className={style.img_b1}/>
                    </div> */}



                    <div className={style.mid_left}>
                        <h1 className={style.mid_left1}>
                            CAREERS
                        </h1>
                        <p>
                            <ul>
                                <li>Freedom, Innovation and Environmental consciousness is in the DNA of Liloop. If you feel coherent with these DNAs but is not  <br /><br />
                                </li>
                                <li>We believe in power of collaboration And the unique Skill set each individual brings on the table inside the room having this  <br /><br />
                                </li>
                                <li>We believe in power of collaboration And the unique Skill set each individual brings on the table inside the room having this  <br /><br />
                                </li>

                            </ul>
                        </p>

                    </div>

                    <div className={style.mid_right}>
                        <label class={style.fname}> Name</label>
                        <input type="text" name="firstname" placeholder="Your name.." />



                        <label class={style.email}>Enter your email</label>
                        <input type="email" id="email" name="email" placeholder="Your mail"></input>

                        <label class={style.subject}>Subject </label>
                        <input type="text" placeholder="Subject"></input>
                        <button>SUBMIT</button>

                    </div>

                </div>

                <div className={style.section3}>
                    <div className={style.in_sec3}>
                        <h1>
                            GET UPTO <span>30%</span> MONEY BACK
                        </h1>
                        <h4>
                            on replacement of your any electric vehicle battery
                        </h4>
                    </div>
                    <div className={style.butt_last}>
                        <button>KNOW MORE</button>
                    </div>
                </div>








            </div>






            <DrawerAppBar />
            <DrawernavBar />
        </>
    )
}