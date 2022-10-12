export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of:[{type: 'reference', to:{type:'skill'}}],
    },
    
    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'IsCurrentlyWorkingHere',
      type: 'boolean',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of:[{ type:" reference", to:{ type: "skill" } }]
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of:[{type: 'string' }],
    },
  ],
}
