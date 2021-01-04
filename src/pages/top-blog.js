import React from 'react'
import { Link, graphql } from "gatsby"
import Menu from "../components/menu"
import Store from "../components/store"
import TopBrands from "../components/top-brands"
import Layout from '../components/layout'
import Announcement from "../components/announcement"
import Footer from "../components/footer"
import "./topBlog.css"
const topBlog = ({ data }) => {
    const state = {
        topPostSlug: [
            {
                slugForPost: "first"
            },
            {
                slugForPost: "second"
            },
            {
                slugForPost: "third"
            }


        ]
    }


    const posts = data.allContentfulPost.edges
    //const siteTitle = data.site.siteMetadata.title
    //const slugs = state.topPostSlug.slugForPost
    return (
        <Layout title="Top Blogs">
            <Announcement />
            <Menu />
            <div className="mt-2">
                <h1 style={{textAlign:"center"}}>Most Read blogs</h1>
            </div>
            <div>
                {
                    state.topPostSlug.map(top => {
                        return (
                            <ol class="global-wrapper" style={{ listStyle: `none` }}>
                                {
                                    posts.map(({ node }) => {
                                        const title = node.title || node.slug
                                        if (node.slug === top.slugForPost) {
                                            return (
                                                <li key={node.slug} className="pl-2">
                                                    <div>
                                                        <h3 className="blog-title">
                                                            
                                                            <Link to={`/${node.slug}`} >
                                                                <span itemProp="headline">{title}</span>
                                                            </Link>
                                                        </h3>
                                                        
                                                    </div>
                                                    <p className="blog-subtitle">{node.subtitle}</p>
                                                </li>
                                            )
                                        } 
                                    })
                                }
                            </ol>
                        )
                    })
                }
            </div>
            <div className="mt-3 mb-3" style={{textAlign:"center"}}>
                <Link to="/">
                    <h3>View all blogs from FitSlash</h3>
                </Link>
            </div>
                    
                
            
            <div className="global-wrapper mb-4">
                <hr></hr>
                <Store />
                <hr></hr>
                <TopBrands />
            </div>
            <Footer />
        </Layout>
    )


}

export default topBlog;
export const blogQuery = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          slug
          title
          subtitle
          author
        }
      }
    }
  }
`