import { useStaticQuery, graphql } from "gatsby"

export const getAllPerformances = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {allSanityPerformance: { edges }} = useStaticQuery(
    graphql`
      query getAllPerformances {
        allSanityPerformance {
          edges {
            node {
              id
              title
              role
              theatre
              director
            }
          }
        }
      }
    `
  )
  console.log(edges.map(show => show.node));
}