import { MdCollections } from "react-icons/md";

export default {
  title: "Gallery",
  name: 'gallery',
  type: 'document',
  icon: MdCollections,
  fields: [
    { 
      title: 'Image List',
      name: 'galleryImage',
      type: 'array',
      of: [{type: 'img'}],
    },
  ]
};