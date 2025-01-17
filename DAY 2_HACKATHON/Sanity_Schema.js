export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
      validation: (Rule) =>
        Rule.required()
          .max(100)
          .error('Product name is required and cannot exceed 100 characters.'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'URL-friendly identifier for the product.',
      options: {
        source: 'name',
        maxLength: 200,
      },
      validation: (Rule) =>
        Rule.required().error('Slug is required for product identification.'),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Detailed description of the product.',
      validation: (Rule) =>
        Rule.required()
          .min(20)
          .max(500)
          .error('Description must be between 20 and 500 characters.'),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .error('Price must be a positive value.'),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Sofa', value: 'sofa' },
          { title: 'Chair', value: 'chair' },
        ],
      },
      validation: (Rule) =>
        Rule.required().error('Category is required (sofa or chair).'),
    },
    {
      name: 'material',
      type: 'string',
      title: 'Material',
      description: 'Material used for the product (e.g., leather, fabric, wood).',
      validation: (Rule) =>
        Rule.required().error('Material is required for the product.'),
    },
    {
      name: 'dimensions',
      type: 'object',
      title: 'Dimensions',
      fields: [
        { name: 'length', type: 'number', title: 'Length (in cm)' },
        { name: 'width', type: 'number', title: 'Width (in cm)' },
        { name: 'height', type: 'number', title: 'Height (in cm)' },
      ],
      validation: (Rule) =>
        Rule.required().error('Dimensions are required for the product.'),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      description: 'High-quality image of the product.',
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required().error('Product image is required.'),
    },
    {
      name: 'colors',
      type: 'array',
      title: 'Available Colors',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Available color options for the product.',
    },
    {
      name: 'stock',
      type: 'number',
      title: 'Stock Quantity',
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .error('Stock quantity must be a non-negative number.'),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      description: 'Average customer rating (0 to 5).',
      validation: (Rule) =>
        Rule.min(0)
          .max(5)
          .precision(1)
          .error('Rating must be between 0 and 5.'),
    },
    
  ],
};
