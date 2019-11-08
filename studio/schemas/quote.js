import { MdFormatQuote } from "react-icons/md";

export default {
  title: "Quotes",
  name: 'quotes',
  type: 'document',
  icon: MdFormatQuote,
  fields: [
    {
      title: "Quote",
      name: "quote",
      type: "string",
    },
    {
      title: "Referrer",
      name: "referrer",
      type: "string",
    },
  ]
};