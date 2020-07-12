import {BsPerson} from 'react-icons/bs'

export default {
  name: "creator",
  title: "Creator",
  type: "document",
  icon:BsPerson,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
  ],
};
