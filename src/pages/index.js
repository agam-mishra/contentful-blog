import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Announcement from "../components/announcement"
import Footer from "../components/footer"

const BlogIndex= ({data, location}) => {
  
    // const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulPost.edges

  return (
      
    <Layout location={location} title={siteTitle}>
      <Announcement />
      <Menu />
      <header className="blog-main-title" style={{ textAlign: "center" }}>
        <h1>
          {siteTitle}
        </h1>
      </header>
      <SEO title="All Posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <ol class="global-wrapper" style={{ listStyle: `none` }}>
        {
          posts.map(({ node }) => {
            const title = node.title || node.slug
              return (
                <li key={node.slug} className="pl-2">
                  <div>
                    <h3 className="blog-title">
                      <Link to={node.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h3>
                  </div>
                  <p className="blog-subtitle">{node.subtitle}</p>
                </li>
              )
            })
        }
      </ol>
      <h3 className="mostRead">
        <Link to="/top-blog">FitSlash most read blogs</Link>
      </h3>
      
      <Footer></Footer>
      </Layout>
      

    )

  }


export default BlogIndex
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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