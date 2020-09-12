import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// import { Container } from './styles';

const Profile = () => {
  const {
    site: {
      siteMetadata: { author, position, description },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          author
          position
          description
          title
        }
      }
    }
  `)
  return (
    <div>
      <h1>{author}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Profile
