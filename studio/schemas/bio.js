export default {
  title: "Biography",
  name: 'biography',
  type: 'document',
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: 'Main title to appear under "About Me."',
    },
    {
      title: 'Biography',
      name: 'biography',
      type: 'array',
      of: [{type: 'block'}]
    }
  ]
};