export default {
  title: "Gallery Media",
  name: 'gallery',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string'
    },
    {
      title: 'Gallery Image',
      name: 'galleryImage',
      type: 'photo',
    },
  ]
};