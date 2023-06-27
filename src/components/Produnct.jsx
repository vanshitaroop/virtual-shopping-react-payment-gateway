import React from 'react'
import p1 from "../images/p1.png"
import p2 from "../images/p2.png"
import p3 from "../images/p3.png"
import p4 from "../images/p4.png"
import p5 from "../images/p5.png"
import p6 from "../images/p6.png"
import p7 from "../images/p7.png"
import p8 from "../images/p8.png"
import p9 from "../images/p9.png"
import p10 from "../images/p10.png"
import p11 from "../images/p11.png"
import p12 from "../images/p12.png"
import client from "../images/client.jpg"
import logo from "../images/logo.png"
const Produnct = () => {
    // const testcall = async (txt, id) => {
    //     try {
    //         const response = await fetch(`http://localhost:3001/razorpay`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
               
    //         });
    //         const data = await response.json();
    //         console.log(data);
    //         displayRazorPay(data)
       
    //     } catch (error) {
    //         console.log('Some error occurred');
    //     }
    // };
    function displayRazorPay() {
        const options = {
            key: "rzp_test_VjTvES0gFi3uVE",
            currency: "INR",
            amount: 10*100,
            name: "Vanshita",
            description: "Orignal",
            image: logo,
            theme: {
                color: "#9452A4", // Specify your desired hexadecimal color code here
              },
            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
            },
            prefill: {
                name: "Vanshita Roopchandani",
                email: "vanshitaroopchandani7@gmail.com",
                contact: "6353655251",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      

    }
    return (
        <>

            <section class="product_section layout_padding">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2>
                            Our <span>products</span>
                        </h2>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1">
                                            Cotton Shirt Regular fit
                                        </a>
                                     <button className='btn option2' onClick={displayRazorPay}>
                                            Buy Now
                                     </button>
                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src={p1} alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Cotton Shirt Regular fit
                                    </h5>
                                    <h6>
                                        999/-
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1">
                                            Cosmic Vibes Men's Shirt
                                        </a>
                                        <button className='btn option2' onClick={displayRazorPay}>
                                            Buy Now
                                     </button>
                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src={p2} alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Cosmic Vibes Men's Shirt
                                    </h5>

                                    <h6>
                                        1199/-
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1">
                                            Whispering Willow
                                        </a>
                                        <button className='btn option2' onClick={displayRazorPay}>
                                            Buy Now
                                     </button>
                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src={p3} alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Whispering Willow
                                    </h5>
                                    <h6>
                                        2199/-
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1">
                                            Dazzling Aurora
                                        </a>
                                        <button className='btn option2' onClick={displayRazorPay}>
                                            Buy Now
                                     </button>
                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src={p4} alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Dazzling Aurora
                                    </h5>
                                    <h6>
                                        1999/-
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1">
                                            Jewel Jive
                                        </a>
                                        <button className='btn option2' onClick={displayRazorPay}>
                                            Buy Now
                                     </button>
                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src={p5} alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Jewel Jive
                                    </h5>
                                    <h6>
                                        1499/-
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1">
                                            Enchanting EleganceDress
                                        </a>
                                        <button className='btn option2' onClick={displayRazorPay}>
                                            Buy Now
                                     </button>
                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src={p6} alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Enchanting Elegance Dress
                                    </h5>
                                    <h6>
                                        2199/-
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1">
                                            Mystical Meadows
                                        </a>
                                        <button className='btn option2' onClick={displayRazorPay}>
                                            Buy Now
                                     </button>
                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src={p7} alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Mystical Meadows
                                    </h5>
                                    <h6>
                                        1699/-
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1">
                                            Men's Shirt
                                        </a>
                                        <button className='btn option2' onClick={displayRazorPay}>
                                            Buy Now
                                     </button>
                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src={p8} alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Men's Shirt
                                    </h5>
                                    <h6>
                                        999/-
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1">
                                            Men's Shirt
                                        </a>
                                        <button className='btn option2' onClick={displayRazorPay}>
                                            Buy Now
                                     </button>
                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src={p9} alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Men's Shirt
                                    </h5>
                                    <h6>
                                        999/-
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1">
                                            Men's Shirt
                                        </a>
                                        <button className='btn option2' onClick={displayRazorPay}>
                                            Buy Now
                                     </button>
                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src={p10} alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Men's Shirt
                                    </h5>
                                    <h6>
                                        1100/-
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1">
                                            Men's Shirt
                                        </a>
                                        <button className='btn option2' onClick={displayRazorPay}>
                                            Buy Now
                                     </button>
                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src={p11} alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Men's Shirt
                                    </h5>
                                    <h6>
                                        999/-
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1">
                                            Fairy Tale Fantasy
                                        </a>
                                        <button className='btn option2' onClick={displayRazorPay}>
                                            Buy Now
                                     </button>
                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src={p12} alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Fairy Tale Fantasy
                                    </h5>
                                    <h6>
                                        2200/-
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </section>
        </>
    )
}

export default Produnct