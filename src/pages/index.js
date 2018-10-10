import { graphql } from "gatsby"
import React from "react"

export default ({ data }) => (
  <div>
    <h1>My Gatsby Blog</h1>
    <p>
      <a href="https://www.gatsbyjs.org/plugins/gatsby-source-graphql">
        Using gatsby-source-graphql
      </a>
    </p>
    {data.oneGraph.rss.rss2Feed.items.map((item, i) => (
      <div>
        <h2>{item.title}</h2>
        <audio
          id={"podcast-player"}
          controls
          src={item.enclosure.url}
          style={{ maxWidth: "400px" }}
        >
          Your browser does not support the <code>audio</code> element.
        </audio>{" "}
      </div>
    ))}
  </div>
)

export const query = graphql`
  query {
    cms {
      blogPosts(where: { status: PUBLISHED }, orderBy: createdAt_DESC) {
        title
        createdAt
        slug
      }
    }
    oneGraph {
      rss {
        rss2Feed(url: "http://podcasts.files.bbci.co.uk/p02pc9pj.rss") {
          items {
            guid {
              data
              permalink
            }
            source {
              data
              url
            }
            enclosure {
              url
              length
              mime
            }
            content
            pubDate
            contentUri
            comments
            link
            author
            title
          }
          title
          image {
            description
            link
            uri
          }
          description
        }
      }
    }
  }
`
