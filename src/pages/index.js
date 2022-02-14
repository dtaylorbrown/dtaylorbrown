import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "Karla",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  maxWidth: 320,
}
const paragraphStyles = {
  marginBottom: 48,
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>👋 Hello, I'm Daniella</h1>
      <p style={paragraphStyles}>
        I'm a full-stack javascript developer who specialises in front-end!
      </p>
    </main>
  )
}

export default IndexPage
