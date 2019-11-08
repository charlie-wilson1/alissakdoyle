import { MdMovieCreation } from "react-icons/md";

export default {
  title: "Directing & Teaching",
  name: 'directing',
  type: 'document',
  icon: MdMovieCreation,
  fields: [
    {
      title: "Show Title",
      name: "title",
      type: "string",
    },
    {
      title: 'Start date',
      name: 'startDate',
      type: 'date'
    },
    {
      title: "Role",
      name: "role",
      type: "string",
    },
    {
      title: "Theatre",
      name: "theatre",
      type: "string",
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