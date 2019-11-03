export default {
  widgets: [
    {
      name: 'sanity-tutorials'
    },
    {
      name: 'project-info'
    },
    {
      name: 'project-users'
    },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          // {
          //   title: 'Sanity Studio',
          //   apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
          //   buildHookId: 'xxxyyyxxxyyyyxxxyyy',
          //   name: 'sanity-gatsby-blog-20-studio',
          // },
          {
            title: 'www.alissakdoyle.com',
            apiId: 'yyyyy-xxxxx-zzzz-xxxx-yyyyyyyy',
            buildHookId: 'yyyyxxxxxyyyxxdxxx',
            name: 'sanity-gatsby-blog-20-web'
          }
        ]
      }
    }
  ]
}