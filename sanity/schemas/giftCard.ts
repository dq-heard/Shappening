export default {
  name: "giftCard",
  title: "Gift Card",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "asset",
          type: "reference",
          to: [{ type: "sanity.imageAsset" }], // Ensure this matches your setup
        },
      ],
    },
  ],
};
