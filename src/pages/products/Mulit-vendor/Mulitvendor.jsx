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

function Mulitivendor() {

    const [showBox, setShowBox] = useState(false);

    function Vediohide() {
        setShowBox(!showBox);
    }

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
        </>
    );
}

export default Mulitivendor;
