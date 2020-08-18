import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import socialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: {eq: "hero-img.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const { 
    file: { 
      childImageSharp: { fluid },
    }, 
  } = useStaticQuery(query);
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <h1>Matthew Ao</h1>
          <h4>UofT ECE & web developer.</h4>
          <br />
          <p>Hello buddy!</p>
          <Link to='/contact' className='btn'>
            Contact me
          </Link>
          <SocialLinks />
        </div>
      </article>
      <Image fluid={fluid} className="hero-img" />
    </div>
  </header>
}

export default Hero