  import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSanitySettings {
        edges {
          node {
            featureImage {
              asset {
                fluid(maxWidth: 1000) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
          }
        }
      }
    }
  `)

  return <Img fluid={data.allSanitySettings.edges[0].node.featureImage.asset.fluid} imgStyle={{top: '-25%'}} />
}

export default Image
