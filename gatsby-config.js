module.exports = {
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `cms`,
        url: `https://api-euwest.graphcms.com/v1/cjjr1at6d0xb801c3scjrm0l0/master`,
        typeName: `GraphCMS`,
        refetchInterval: 60,
      },
    },
      {
          resolve: `gatsby-source-graphql`,
          options: {
              fieldName: `oneGraph`,
              url: `https://serve.onegraph.com/dynamic?app_id=0b33e830-7cde-4b90-ad7e-2a39c57c0e11`,
              typeName: `oneGraph`,
              refetchInterval: 60,
          },
      }
  ],
}
