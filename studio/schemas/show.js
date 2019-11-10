import { MdRecordVoiceOver } from "react-icons/md";

export default {
  title: "Performances",
  name: 'Performance',
  type: 'document',
  icon: MdRecordVoiceOver,
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
      title: 'Start date',
      name: 'startDate',
      type: 'date'
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
      type: 'array',
      of: [{type: 'string'}],
      description: "Name of director(s)."
    },
  ],
  orderings: [
    {
      title: 'Start Date, New',
      name: 'startDateDesc',
      by: [
        {field: 'startDate.utc', direction: 'desc'}
      ]
    },
    {
      title: 'Start Date, Old',
      name: 'startDateAsc',
      by: [
        {field: 'startDate.utc', direction: 'asc'}
      ]
    },
  ],
};