import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSanitySettings {
        edges {
          node {
            id
            featureImage {
              asset {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `)

  return <GatsbyImage image={data.allSanitySettings?.edges[0].node.featureImage.asset.gatsbyImageData} imgStyle={{ top: '-25%' }} />
}

export default Image
