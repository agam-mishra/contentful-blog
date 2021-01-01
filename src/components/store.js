import './store.css'
import React, { Component } from 'react'
import Gnc from "../../content/assets/gnc.jpg"
import MyProtein from "../../content/assets/impact-whey.jpg"
import IsoSensation from "../../content/assets/iso-sensation.jpg"
import Prostar from "../../content/assets/prostar.jpg"
import Psychotic from "../../content/assets/psychotic.jpg"



export default class store extends Component {
    render() {
        return (
            <div>
                <h1>Explore our Store</h1>
                <div class="row five-cols">
                    <div class="col-md-1 col-sm-1">
                        <a href="https://fitslash.com/products/ultimate-nutrition-prostar?_pos=1&_sid=5adaa681f&_ss=r">
                            <img src={Prostar} alt="hot-brands"></img>
                        </a>
                    </div>
                    <div class="col-md-1 col-sm-1">
                        <a href="#">
                            <img src={MyProtein} alt="hot-brands"></img>
                        </a>
                    </div>
                    <div class="col-md-1 col-sm-1">
                        <a href="#">
                            <img src={Psychotic} alt="hot-brands"></img>
                        </a>
                    </div>
                    <div class="col-md-1 col-sm-1">
                        <a href="https://fitslash.com/products/ultimate-nutrition-iso-sensation?_pos=1&_sid=050175c36&_ss=r">
                            <img src={IsoSensation} alt="hot-brands"></img>
                        </a>
                    </div>
                    <div class="col-md-1 col-sm-1">
                        <a href="https://fitslash.com/collections/proteins/products/gnc-pro-performance-whey">
                            <img src={Gnc} alt="hot-brands"></img>
                        </a>
                    </div>
                </div>
                <div className="row mt-3" style={{textAlign:"center"}}>
                    <div className="col-12">
                        <a href="https://fitslash.com/">
                            <h4>View all products</h4>
                        </a>
                    </div>
                </div>
               
            </div>
            
        )
    }
}
