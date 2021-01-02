import React, { Component } from 'react';
import logo from "../../content/assets/logo.png"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import "./Navbar.css"


export default class Menu extends Component {
    state  = {
        navbaropen: false,
        css: 'collapse navbar-collapse',
        links: [
            {
                id: 1,
                path:'https://fitslash.com/pages/importer-certifications-and-dealerships',
                text: 'why fitslash',
                subitems: null
                
            },
            {
                id: 2,
                path: 'https://fitslash.com/',
                text: 'brands',
                subitems: [
                    {
                        text: 'Optium Nutrition',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },

                    {
                        text: 'Ultimate Nutrition',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },

                    {
                        text: 'Dymatize',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },

                    {
                        text: 'MuscleTech',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },

                    {
                        text: 'BSN',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },

                    {
                        text: "ISOPURE(Nature's BEst)",
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },
                    {
                        text: 'MusclePharm',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },

                    {
                        text: 'Gaspari Nutrition',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },

                    {
                        text: 'Grenade',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },

                    {
                        text: 'All Brands',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    }
                    
                ]
            },
            {
                id: 3,
                path: 'https://fitslash.com/',
                text: 'build muscle',
                subitems: [
                    {
                        text: 'Whey Protein',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: [
                            {
                                text: 'Whey Blends',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },

                            {
                                text: 'Whey Isolate',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },

                            {
                                text: 'Whey Hydrolysed',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            }

                        ]
                    },

                    {
                        text: 'Other Proteins',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: [
                            {
                                text: 'MultiProtein Blends',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },

                            {
                                text: 'Casein Protein',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },
                        ]
                    },

                    {
                        text: 'Gainers',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: [
                            {
                                text: 'Mass Gainers',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },

                            {
                                text: 'Complex Carbs',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },
                        ]
                    }
                ]
            },
            {
                id: 4,
                path: 'https://fitslash.com/',
                text: 'weight loss',
                subitems: [
                    {
                        text: 'Metabolic Care',
                        link: '',
                        innerlink: [
                            {
                                text: 'Slimming Support',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },

                            {
                                text: 'Fat Burners',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },

                            {
                                text: 'L-Carnitine',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },
                        ]
                    },

                    {
                        text: 'Weight Loss Herbs',
                        link: '',
                        innerlink: [
                            {
                                text: 'CLA',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },

                            {
                                text: 'Garcinia Cambogia',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },
                        ]
                    }
                ]
            },
            {
                id: 5,
                path: 'https://fitslash.com/',
                text: 'protein',
                subitems: [
                    {
                        text: 'Whey Protein',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: [
                            {
                                text: 'Whey Blends',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },

                            {
                                text: 'Whey Isolate',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },

                            {
                                text: 'Whey Hydrolysed',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            }

                        ]
                    },
                    {
                        text: 'Other Proteins',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: [
                            {
                                text: 'MultiProtein Blends',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },

                            {
                                text: 'Casein Protein',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },
                        ]
                    },
                ]
            },
            {
                id: 6,
                path: 'https://fitslash.com/',
                text: 'essentials',
                subitems: [
                    {
                        text: 'Vitamins & Minerals',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },

                    {
                        text: 'Sleep Aid',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: [
                            {
                                text: 'ZMA',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },

                            {
                                text: 'Melotin',
                                link: 'https://fitslash.com/collections/optimum-nutrition'
                            },
                        ]
                    },
                    {
                        text: 'Creatine',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },
                    {
                        text: 'Fish Oil',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },

                    {
                        text: 'Glutamine',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },

                    {
                        text: 'Aminos & BCAAs',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },
                    {
                        text: 'Intra Workout',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },
                    {
                        text: 'Rehydration',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },
                ]
            },

            {
                id: 7,
                path: 'https://fitslash.com/',
                text: '#pump',
                subitems: [
                    {
                        text: 'Citrulline Malate',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },

                    {
                        text: 'L-Arginine',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    },
                    {
                        text: 'Nitric Oxide',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    }
                ]
            },
            {
                id: 8,
                path: 'https://fitslash.com/',
                text: 'energy and endurance',
                subitems: [
                    {
                        text: 'Pre Workouts',
                        link: 'https://fitslash.com/collections/optimum-nutrition',
                        innerlink: null
                    }
                ]
            },
            
        ]
    }

    render() {
        return (
            <div className="main-menu-wrapper">
                <div className="logo pt-3 pb-2" style={{display:"flex", justifyContent:"center"}}>
                    <a className="navbar-logo" href="https://fitslash.com/">
                            <img src={logo} alt="logo"></img>
                        </a>
                </div>
                <div className="test">
                    <h1>hello testing</h1>
                    </div>
                </div>
            )
    }

}

