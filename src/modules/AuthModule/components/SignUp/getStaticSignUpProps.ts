import { gql } from "@apollo/client"
import apolloCustomClient from "@core/consts/apolloCustomClient"

const getStaticProps = async () => {
  const { data } = await apolloCustomClient.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 10) {
          id
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            mission_patch
          }
          rocket {
            rocket_name
          }
        }
      }
    `
  });

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      launches: []
    }
  }
}

export default getStaticProps