import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import { FaLinkedinIn, FaGithub, FaFileAlt } from "react-icons/fa"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
          social {
            github
            linkedin
            resume
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author.name}</strong>.
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://linkedin.com/in/${social.linkedin}`}
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          style={{
            marginLeft: 10,
          }}
          rel="noopener noreferrer"
          target="_blank"
          href={`https://github.com/${social.github}`}
        >
          <FaGithub size={20} />
        </a>
        <a
          style={{
            marginLeft: 10,
          }}
          rel="noopener noreferrer"
          target="_blank"
          href={`${social.resume}`}
        >
          <FaFileAlt size={20} />
        </a>
      </p>
    </div>
  )
}

export default Bio
