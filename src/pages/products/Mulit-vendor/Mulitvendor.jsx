import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
// import { useState } from "react";

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
import Nine from "../MulitVendoeImage/Nine.jpg"
import { RiHomeGearLine } from "react-icons/ri";
import { FaHandHoldingHand } from "react-icons/fa6";
import { GrBucket } from "react-icons/gr";
import { SiBitbucket } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";
import Ten from "../MulitVendoeImage/mobileApp.jpg"
import Eleven from "../MulitVendoeImage/Addons.jpg"
import Twevel from "./../MulitVendoeImage/customer.jpg"
import { GoPasskeyFill } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import Thirty from "../MulitVendoeImage/gradient.jpg"
import Foutytin from "../MulitVendoeImage/BOx.jpg"
import { CiCirclePlus } from "react-icons/ci";


function Mulitivendor() {

    const [showBox, setShowBox] = useState(false);
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);
    const [showFive, setShowfive] = useState(false);
    const [showSix, setshowSix] = useState(false);


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
                     <iframe width="600"
                     height="350"
                     src="https://youtu.be/DfGVKS1YdD4"
                     frameBorder="0"
                     allowFullScreen
                     ></iframe>
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


            <div className="CompanyBox">

                <div className="companyBoxOne">
                    <h1 id="commerce">Multi Vendor eCommerce Platform</h1>
                    <b id="Admin">Admin Features</b>
                    <p id="Orders">Admin features let you manage vendors, products, orders, payments, and commissions<br /></p>
                    <p id="Dash"> from one centralized dashboard.</p>
                </div>
            </div>

            <div className="ImageMarketPlace"><img src={Nine} alt="" /></div>

            <div className="InventoryMan">
                <div id="InventorOne">
                    <RiHomeGearLine id="HomeIcon" />
                    <b id="TextInventory">Inventory Management</b>
                    <p id="ThemSelves">Configure inventory management system by
                        uploading items manually or letting vendors
                        add products themselves</p>
                </div>
                <div id="InventorOne">
                    <FaHandHoldingHand id="HomeIcon" />

                    <b id="TextInventory">Commission Management</b>
                    <p id="ThemSelves">Set percent-based global or seller-specifi
                        c commissions to attract vendors using Marketplace
                        Advanced  Commission.</p>
                </div>
                <div id="InventorOne">
                    <GrBucket id="HomeIcon" />

                    <b id="TextInventory">Auto Approval of Products</b>
                    <p id="ThemSelves">Review vendor uploads and choose
                        manual or auto approval to streamline product
                        listings.</p>
                </div>
            </div>

            <div className="Assignment">
                <div id="AssignmentOne">
                    <SiBitbucket id="HomeIcon" />
                    <b id="TextInventory">Product Assignment to Sellers</b>
                    <p id="ThemSelves">View and assign products to sellers,
                        enabling customers to compare same items across vendors.
                    </p>
                </div>
                <div id="AssignmentOne">
                    <MdDashboard id="HomeIcon" />
                    <b id="TextInventory">Seller Central Page</b>
                    <p id="ThemSelves">Build a merchant landing page
                        to highlight offerings and encourage seller registrations.
                    </p>
                </div>
                <div id="AssignmentOne">
                    <LuMessageSquare id="HomeIcon" />

                    <b id="TextInventory">Review Management</b>
                    <p id="ThemSelves">Oversee vendor reviews systematically
                        to balance feedback and influence purchase decisions.
                    </p>
                </div>
            </div>

            <div className="Bagisto">
                <div id="BagistoOne">
                    <h1 id="Seller">Bagisto Multi Seller Platform</h1>
                    <b id="Ons">Add-Ons</b>
                    <p id="Easily">Easily integrate various add-ons and enhance
                        functionality of multi vendor eCommerce marketplace.</p>
                    <b id="All">Explore all Marketplace Extensions</b>
                    <MdArrowOutward id="james" />
                    <div id="Shipping"><img src={Eleven} alt="" /></div>
                </div>
                <div id="BagistoOne">
                    <h1 id="Seller">Multi Vendor Marketplace</h1>
                    <b id="Ons">Mobile App</b>
                    <p id="Easily">Bagisto Marketplace Mobile App turns the Bagisto eCommerce Marketplace
                        platform website into Android and iOS mobile apps.</p>
                    <b id="All">Check Marketplace Mobile Apps</b>
                    <MdArrowOutward id="james" />
                    <div id="Shipping"><img src={Ten} alt="" /></div>
                </div>
            </div>
            <div className="Platform">
                <h1 id="Place">eCommerce Marketplace Platform</h1>
                <b id="fea">Seller Features</b>
                <p id="huge">Seller Features A huge feature for
                    sellers on an eCommerce marketplace platform,<br />
                    allowing customers to check out items one by one.</p>
            </div>

            <div className="Deliver">
                <div id="DeliverOne">
                    <img src={Twevel} alt="" />
                </div>
                <div id="DeliverOne">
                    <b id="Tomer">Customer</b>
                    <b id="Ience"> Experience</b>
                    <p id="Choice">Deliver a smooth shopping experience with choice, convenience, and security.</p>
                    <GoPasskeyFill id="key" />
                    <b id="In">Shop from multiple sellers in one place</b>
                    <p id="Many">Customers explore diverse products from many sellers, enjoy variety,
                        and purchase everything conveniently from one marketplace.</p>
                    <MdDashboard id="khus" />
                    <b id="In">Seller price comparison for the best deals</b>
                    <p id="Choice">Buyers compare seller prices instantly, find better offers, save money, and enjoy maximum value on every purchase.</p>
                    <IoHome id="key" />
                    <b id="In">Rate and review products & sellers</b>
                    <p id="Choice">Customers share feedback by rating products and reviewing sellers, helping others make informed and trusted shopping decisions.</p>
                </div>

            </div>
            <div className="Million">
                <div id="MillionOne">
                    <img src={Thirty} alt="" />
                </div>
                <div id="MillionTwo">
                    <b id="Bulid">Bulid Gigashops</b>
                    <h1 id="AddMillion">10 Million +</h1>
                    <h2 id="Cata">Product Catalogs</h2>
                    <div id="IconBox"><img src={Foutytin} alt="" /></div>
                </div>
                <div id="MillionThree">
                    <img src={Thirty} alt="" />
                </div>
            </div>
            <div className="QuestionMain">
                <div id="QuestionOne" onClick={() => setShowBox(!showBox)}>
                    <h3 id="Benefit"><b>What is the benefit of using this platform?</b></h3>
                   <CiCirclePlus id="plues"/>

                </div>
                {showBox && <div id="QuestionHideBox">
                    <p id="Lets">It lets vendors sell products on on one website. The platfrom is built with the Laravel PHP framework.</p>
                </div>}
                <div id="QuestionOne" onClick={() => setShowTwo(!showTwo)}>
                    <h3 id="Benefit"><b>How does the mlti seller eature work in Bagisto ?</b></h3>
                     <CiCirclePlus id="plues"/>
                </div>
                {showTwo && <div id="QuestionHideBox">
                    <p id="Lets">It enabls seller to register, manage thier products,track orders,and process payments. It iss done all within a centralized marketplace managed by admin.</p>
                </div>}
                <div id="QuestionOne" onClick={() => setShowThree(!showThree)}>
                    <h3 id="Benefit"><b>What are the key benefits of using multi-vendor marketplace platform?</b></h3>
                     <CiCirclePlus id="plues"/>
                </div>
                {showThree && <div id="QuestionHideBox" >
                    <p id="Lets">It scales easily as buniness grows and provides strong security for data and transactions. Its Flexible architecture adapts to custom needs.</p>
                    </div>}
                <div id="QuestionOne" onClick={() => setShowFour(!showFour)}>
                    <h3 id="Benefit"><b>Can I customize the Multi-vendor Marketplace platfrom to suit my business needs??</b></h3>
                     <CiCirclePlus id="plues"/>
                </div>
                {showFour && <div id="QuestionHideBox">
                    <p id="Lets">Yes, Bagisto supports customizable commission models for multi-vendor marketplaces, allowing admins to define and manage seller commissions based on their preferences.</p>
                </div>}
                <div id="QuestionOne" onClick={() => setShowfive(!showFive)}>
                    <h3 id="Benefit"><b>Does Bagisto suport commission based models for multi-vendor marketplaces?</b></h3>
                     <CiCirclePlus id="plues"/>
                </div>
                {showFive && <div id="QuestionHideBox">
                    <p id="Lets">Yes,Bagisto alloes admin to set up a commission structure. They can earn a percentage or fixed fee on sales made by vendors.</p>
                </div>}
                <div id="QuestionOne" onClick={() => setshowSix(!showSix)}>
                    <h3 id="Benefit"><b>How mnay vendors are supported by the Bagisto Multi-vendor Marketplace platfrom?</b></h3>
                     <CiCirclePlus id="plues"/>
                </div>
                {showSix && <div id="QuestionHideBox">
                    <p id="Lets">Bagisto supports a large number of vendors, and the exact limit depends on your server configuration and performance requirements.</p>
                </div>}
            </div>
        </>
    );
}

export default Mulitivendor;




