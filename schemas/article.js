import { BsViewList } from "react-icons/bs";

export default {
  name: "article",
  title: "Article",
  type: "document",
  icon: BsViewList,
  fields: [
    { name: "category", type: "reference", title: "Category", to:[{type:'category'}]},
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "creators",
      title: "Creators",
      type: "array",
      of: [{ type: "reference", to: { type: "creator" } }],
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: "Alt Text",
          name: "altText",
          type: "string",
        },
      ],
    },
    {
      title: "Main Content",
      name: "content",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      creator: "creators.0.name",
      subtitle: "meta.number",
      description: "publishDate",
    },
    prepare: ({ title, creator, media, subtitle, description }) => {
      return {
        title: creator ? `${title} - ${creator}` : title,
        media,
        subtitle,
        description,
      };
    },
  },
};
