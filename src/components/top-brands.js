import React, { Component } from 'react'
import './top-brands.css'
import Prostar from "../../content/assets/prostar.jpg"
export default class topBrands extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Top Brands</h1>
                    </div>
                </div>
                <div className="row seven-cols">
                    <div className="col-md-1 col-sm-1">
                        <a href="https://fitslash.com/collections/xtend">
                            <img src={Prostar} alt="topBrand"></img>
                        </a>
                        </div>
                    <div className="col-md-1 col-sm-1">
                        <a href="https://fitslash.com/collections/ultimate-nutrition">
                            <img src={Prostar} alt="topBrand"></img>
                        </a>
                        </div>
                    <div className="col-md-1 col-sm-1">
                        <a href="https://fitslash.com/collections/gnc">
                            <img src={Prostar} alt="topBrand"></img>    
                        </a>
                        </div>
                    <div className="col-md-1 col-sm-1">
                        <a href="https://fitslash.com/collections/universal-nutrition">
                            <img src={Prostar} alt="topBrand"></img>
                        </a>
                        </div>
                    <div className="col-md-1 col-sm-1">
                        <a href="https://fitslash.com/collections/dymatize">
                            <img src={Prostar} alt="topBrand"></img>
                        </a>
                        </div>
                    <div className="col-md-1 col-sm-1">
                        <a href="https://fitslash.com/collections/dymatize">
                            <img src={Prostar} alt="topBrand"></img>
                        </a>
                        </div>
                    <div className="col-md-1 col-sm-1 d-none d-sm-block">
                        <a href="https://fitslash.com/collections/muscletech">
                            <img src={Prostar} alt="topBrand"></img>
                        </a>
                        </div>
                </div>
            </div>
            
        )
    }
}
