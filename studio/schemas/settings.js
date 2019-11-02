export default {
  title: "Site Settings",
  name: 'settings',
  type: 'document',
  fields: [
    {
      title: "Site Name",
      name: "name",
      type: "string",
    },
    {
      title: "Meta Tags",
      name: "tags",
      type: "string",
      description: "Tags that describe your website that you want injected into the metadata for SEO.",
    },
    {
      title: "Featured Image",
      name: "featureImage",
      type: "photo",
      description: "The image that will appear on the main page, above the resume."
    },
  ]
};