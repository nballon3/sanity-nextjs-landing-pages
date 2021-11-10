export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '618c190236895311afc52747',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3wf1b5nw',
                  apiId: '022d0fae-bd1d-4643-be02-4fc0c137a2c4'
                },
                {
                  buildHookId: '618c1902c85a0c14bf31703b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3conn71w',
                  apiId: '10712311-bd42-4635-a506-6feee7cd5ad4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nballon3/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3conn71w.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
