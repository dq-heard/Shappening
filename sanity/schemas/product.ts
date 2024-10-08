export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Coasters", value: "coasters" },
          { title: "Trays", value: "trays" },
          { title: "Keychains", value: "keychains" },
          { title: "Miscellaneous", value: "misc" },
        ],
      },
    },
    {
      name: "new",
      title: "New",
      type: "boolean",
      description: "Toggle if this is a new product.",
    },
    {
      name: "best_seller",
      title: "Best Seller",
      type: "boolean",
      description: "Toggle if this is a best seller product.",
    },
  ],
};
