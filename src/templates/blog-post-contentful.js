import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Announcement from "../components/announcement"
import logo from "../../content/assets/logo.png"
import "./single-blog.css"
import Store from "../components/store"
import TopBrands from "../components/top-brands"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const BlogPostContentfulTemplate = ({ data, location }) => {
  const post = data.contentfulPost
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const date = data.contentfulAsset
  //const { previous, next } = this.props.pageContext
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.title}
        description={post.subtitle}
      />
      <Announcement />
      <Menu />
      <div class="carousel-container"></div>      
      <div className="global-wrapper">
        <header>
          <h1 className="post-title" itemProp="headline">{post.title}</h1>
        </header>
        <div className="detail-wrapper mb-4">
          <div className="detail-image">
            <a href="https://www.fitslash.com" target="_blank" rel="noreferrer" >
              <img className="publisher-logo" src={logo} alt="logo"></img>
            </a>
          </div>
          <div className="detail-date">
            {/* <span>Published on </span> */}
            <small>{date.createdAt}</small>
            <div className="detail-social">
              <a href="https://www.instagram.com/fitslash"
                className="instagram social" target="_blank" rel="noreferrer" >
                <FontAwesomeIcon icon={faInstagram} size="2x" style={{marginRight:"5px"}} />
                <span style={{ fontSize: "1.25rem", textDecoration:"underline" }}>You can follow us here.</span>
              </a>
            </div>
          </div>       
        </div>
        
          <Img fluid={post.image.fluid} />
        
        <section className="post-content mt-4"
          dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }}
          itemProp="articleBody"
        />
        <Link to="/" style={{textAlign:"center"}}>
          <h3>View all posts from FitSlash.</h3>
        </Link>
        <hr></hr>
        <Store />
        <hr></hr>
        <TopBrands />
      </div>
    </Layout>
  )
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug(
    $slug: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost(slug: {eq: $slug}) {
      title
      subtitle
      author
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content {
        childContentfulRichText {
          html
        }
      }
    }
    contentfulAsset {
        createdAt( formatString: "DD/MM/YYYY")
    }
    
  }
`
