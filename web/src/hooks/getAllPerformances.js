import { useStaticQuery, graphql } from "gatsby"

export const getAllPerformances = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {allSanityShow: { edges }} = useStaticQuery(
    graphql`
      query getAllPerformances {
        allSanityShow {
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