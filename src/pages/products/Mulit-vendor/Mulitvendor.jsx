import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

import "./Mulitvendor.css";
import One from "./../MulitVendoeImage/One.jpg";
import Two from "./../MulitVendoeImage/Two.jpg"
import Flag from "./../MulitVendoeImage/Flag.jpg"
import Three from "./../MulitVendoeImage/Three.jpg"
import Four from "./../MulitVendoeImage/Four.jpg"
import Five from "./../MulitVendoeImage/Five.jpg"
import Six from "./../MulitVendoeImage/Six.jpg"
import Seveen from "./../MulitVendoeImage/Seveen.jpg"
import Eight from "./../MulitVendoeImage/purchase.jpg"

function Mulitivendor() {

    const [showBox, setShowBox] = useState(false);

    function Vediohide() {
        setShowBox(!showBox);
    }

    //  let index=0;
    //  const Man=document.querySelectorAll(".Man")
    //  const Boxes = document.querySelectorAll(".Box")
    //  const nextBtn=document.getElementById("next")
    //  const prevBtn =document.getElementById("prev")


    //  nextBtn.onclick=function(){
    //     if(index<Boxes.length-2){
    //         index++;
    //         Man.style.transfrom=`translateX(-${index*220}px)`;

    //     }
    //  };
    //  prevBtn.onclick=function(){
    //     if(index>0){
    //         index.style.transfrom`translateX(-${index*220}px)`
    //     }
    //  }
    return (
        <>
            <div className="multivendor-main">
                <div className="multivendor-one">
                    <h1 id="platfrom">
                        Multi vendor<br />Marketplace Platform
                    </h1>

                    <p id="build">
                        Build a fully self-hosted multi vendor ecommerce marketplace
                        with complete ownership.
                    </p>

                    <div className="btn-main">
                        <button id="btn-one"><b>Buy Now</b></button>
                        <button id="btn-two"><b>Live Demo</b></button>
                        <b id="guide">User Guide</b>
                    </div>
                </div>

                <div className="multivendor-two" onClick={Vediohide}>
                    <img src={One} alt="vendor" />
                </div>

                {showBox && (
                    <div className="vedioBox">

                    </div>
                )}

            </div>

            <div className="silderBox"><img src={Two} alt="" /></div>
            <div className="textOne">
                <h1 id="Success">Success Stories</h1>
                <b id="veiw">View all Success Stories</b>
                <MdArrowOutward id="line" />
            </div>
            <div className="BoxSilderMan">
                <div id="BoxOne">
                    <h2 id="packaging">The Pretty Packaging</h2>
                    <div id="united"><img src={Flag} alt="" /></div>
                    <b id="kingdom">United Kingdom</b>
                    <div id="BoxIamge">
                        <h2 id="UK">UK Brand Launches<br /> Online Store with<br /> Bagisto</h2>
                        <img src={Three} alt="" />
                        <p id="Cus">Custom <b>Printing</b></p>
                        <p id="Cus">Custom <b>Packing</b></p>
                    </div>
                </div>
                <div id="BoxOne">
                    <h2 id="packaging">Spainery</h2>
                    <div id="united"><img src={Four} alt="" /></div>
                    <b id="kingdom">Span</b>
                    <div id="BoxIamge">
                        <h2 id="UK">B2B Online Marketlace <br />Fro spanish Gourmet <br />Foods</h2>
                        <img src={Five} alt="" />
                        <b id="Per"> 1000 +</b>
                        <p id="listed">Products Listed</p>
                        <p id="Cus">Secure<b> Payment </b><p id="System">System</p></p>
                    </div>
                </div>
            </div>

            <div className="SecondImageBox">
                <div id="BoxThree">
                    <h2 id="packaging">Onyx</h2>
                    <div id="united"><img src={Six} alt="" /></div>
                    <b id="kingdom">United State</b>
                    <div id="BoxIamge">
                        <h2 id="UK">U.S Based B2B <br /> Distributor Launches<br />  Online Mosaic</h2>
                        <img src={Seveen} alt="" />
                        <b id="Per"> 1200 +</b>
                        <p id="listed">SKU Managed</p>
                        <b id="Per"> 900 +</b>
                        <p id="listed">Monthly Visitors</p>
                    </div>
                </div>
            </div>

            {/* <div className="SilderContainer">
                <button id="prev">prev</button>
                <div className="silde">
                    <div className="Man">
                    <div className="BoxOne"></div>
                    <div className="BoxOne"></div> 
                    </div>
                </div>
                <button id="next"></button>
            </div> */}


            <div className="Platefrom">
                <b id="B2B">B2B eCommerce Platform</b>
                <h1 id="your">Features to Grow Your Business</h1>
                <p id="Source">Bagisto Open Source B2B eCommerce Platform has
                    simple features to make your<br /> business easier.
                    You can set custom prices, manage large orders,
                    give tiered discounts, <br /> handle company accounts,
                    and track quotes clearly to keep everything organized.

                </p>
            </div>

            <div className="QuestionBox">
                <div className="QuestionOne">

                    <b id="tion">Quotation </b>
                    <h2 id="management"> Management</h2>
                    <p id="and">Create and manage quotes quickly. Approve them faster<br />
                        and keep prices correct and simple for all buyers.</p>
                    <div className="PurchaseBox"><img src={Eight} alt="" /></div>

                </div>
                <div className="QuestionOne">
                    <b id="tion">Purchase Order</b>
                    <h2 id="manage"> Management</h2>
                    <p id="and">Create and manage quotes quickly. Approve them faster<br />
                        and keep prices correct and simple for all buyers.</p>
                    <div className="PurchaseBox"><img src={Eight} alt="" /></div>
                </div>

            </div>
        </>
    );
}

export default Mulitivendor;
