
export default {
  title: 'Image',
  name: 'img',
  type: 'image',
  options: {
    hotspot: true // <-- Defaults to false
  },
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true // <-- make this field easily accessible
      }
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      title: 'Attribution',
      name: 'attribution',
      type: 'string',
    }
  ]
}