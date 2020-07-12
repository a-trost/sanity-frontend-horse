import { BsNewspaper } from "react-icons/bs";

export default {
  name: "issue",
  title: "Issue",
  type: "document",
  icon: BsNewspaper,
  fields: [
    {
      name: "meta",
      title: "Meta",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "number",
          title: "Issue number",
          type: "number",
        },
        {
          title: "Publish date",
          name: "publishDate",
          type: "date",
        },
        {
          title: "Published",
          name: "published",
          type: "boolean",
        },
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      title: "Intro",
      name: "intro",
      type: "object",
      fields: [
        {
          title: "Text",
          name: "text",
          type: "markdown",
        },
      ],
      collapsible: true,
      collapsed: false,
    },
    {
      title: "Articles",
      name: "articles",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "article" }],
        },
      ],
    },
    {
      title: "Outro",
      name: "outro",
      type: "object",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Text",
          name: "text",
          type: "markdown",
        },
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    },

    {
      name: "seo",
      title: "SEO",
      type: "seo-tools", // use seo-tools type
      options: {
        baseUrl: "https://frontend.horse/", // (REQUIRED) This is the baseUrl for your site
        baseUrl(doc) {
          return `https://frontend.horse/issues/${doc.number}`; // for dynamic baseUrls
        },
        slug(doc) {
          // (REQUIRED) a function to return the sug of the current page, which will be appended to the baseUrl
          return doc.number;
        },
        fetchRemote: true, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
        contentSelector: "body",
      },
    },
  ],
  initialValue: {
    meta: { _type: "object", published: false },
    outro: {
      _type: "object",
      text: "Your Neigh-bor, Alex",
      title: "So Long, Partner",
    },
  },
  preview: {
    select: {
      title: "meta.title",
      number: "meta.number",
      subtitle: "meta.publishDate",
    },
    prepare: ({ title, number,  subtitle }) => {
    const fullTitle = number ? `${number} - ${title}` : title
      return { title: fullTitle,  subtitle };
    },
  },
};
