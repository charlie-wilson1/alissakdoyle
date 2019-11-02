export default {
  title: "Performance",
  name: 'Performance',
  type: 'document',
  fields: [
    {
      title: "Show Title",
      name: "title",
      type: "string",
    },
    {
      title: "Role",
      name: "role",
      type: "string",
      description: "Role, or 'Various Roles'",
    },
    {
      title: "Theatre",
      name: "theatre",
      type: "string",
      description: "Theatre name, including city.  (B Street Theatre, Sacramento, CA)"
    },
    {
      title: "Director",
      name: "director",
      type: "string",
      description: "Name of director(s), followed by a comma and 'director' or 'directors'."
    },
  ]
};