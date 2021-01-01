import React from "react"
import "./bootstrap.min.css"
import "./Navbar.css"

const Layout = ({ location, title, children }) => {
 

 

  return (
    
    <>
      {/* <header className="global-header">{header}</header> */}
      <main>{children}</main>
      
    </>
      
    
  )
}

export default Layout
