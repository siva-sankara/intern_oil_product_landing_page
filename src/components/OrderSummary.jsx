import React from 'react'
import { Link } from 'react-router-dom';

const OrderSummary = ({ orderItem }) => {
    console.log(orderItem);
    return (
        <div className='order-summary-container'>
            <div className="ordersummary-con1">
                <div className="git-options-con">
                    <p style={{ fontWeight: "500", fontSize: "16px" }}> <input type="checkbox" name="" id="" />    Order includes gift(s).The paking includes with your order will not display prices</p>
                </div>
                <div className="delivary-address-con">
                    <p>Delivery Address</p>
                    <div className="add-name-con">
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <p style={{ fontWeight: "500", fontSize: "16px" }}>Add Your Company Name</p>
                    <input type="text" placeholder='Street Address' /><br /><br />
                    <input type="text" placeholder='Apt/Suite/Floor(Optional)' /><br /><br />
                    <div className="add-city-state">
                        <input type="text" placeholder='City' />
                        <select className='select-state' name="" id="" >
                            <option value="Andhra Pradesh">State</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                        </select>
                        <input type="text" placeholder='Zip Code' />
                    </div><br />
                    <p style={{ fontWeight: "500", fontSize: "18px" }} > <input style={{ width: "30px", height: "20px" }} type="checkbox" name="" id="" /> Use as billing adress</p>
                </div>
                <div className="contact-info">
                    <p>Contact info</p>
                    <div className="add-name-con">
                        <input type="text" placeholder='Email for Order Tracking' /><br /><br />
                        <input type="text" placeholder='Phone for Delivery Contact' />
                    </div>
                </div>
                <br />
            </div>
            <div className="ordersummary-con2">
                <p style={{ margin: "0" }}>Order Summary</p>
                <hr style={{ margin: " 10px 0", border: "1px solid black" }} />
                <div className="cart-head">
                    <p style={{ margin: "0" }}>1 item(s) in Cart</p>
                    <Link>Details</Link>
                </div>
                <hr style={{ margin: "5px 0", border: "1px solid black" }} />
                <div className="cart-item-con">
                    <div className="item-desc">
                        <p style={{ fontSize: "16px", fontWeight: "400" }}>Order Subtotal</p>
                        <p style={{ fontSize: "16px", fontWeight: "400" }}>Save Discount</p>
                        <p style={{ fontSize: "16px" }}>Net Order Subtotal</p>
                        <p style={{ fontSize: "16px", fontWeight: "400" }}>shoping <u>Details</u></p>
                        <p style={{ fontSize: "16px" }}>Pre-Tax Total</p>
                    </div>
                    <div className="item-desc">
                        <p style={{ fontSize: "16px", fontWeight: "400" }}>${orderItem[0].val}</p>
                        <p style={{ fontSize: "16px", fontWeight: "700", color: "red" }}>-$10.50</p>
                        <p style={{ fontSize: "16px" }}>${orderItem[0].val - 10.50}</p>
                        <p style={{ fontSize: "16px", fontWeight: "400" }}>$8.99 </p>
                        <p style={{ fontSize: "16px" }}>${orderItem[0].val - 10.50 + 8.99}</p>
                    </div>
                </div>
                <hr style={{ margin: "5px 0", border: "1px solid black" }} />
                <p style={{ fontSize: "20px", fontWeight: "600", width: "100%", textAlign: "center" }}>Total Saving :<span style={{ fontWeight: "700", color: "red" }}>$10.50 </span></p>
            </div>
        </div>
    )
}

export default OrderSummary
