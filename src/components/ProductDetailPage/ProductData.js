const products = [
    {
      id: '1',
      name: 'Product 1',
      price: 100,
      description: 'Description for Product 1',
      image: 'path/to/image1.jpg',
    },
    {
      id: '2',
      name: 'Product 2',
      price: 200,
      description: 'Description for Product 2',
      image: 'path/to/image2.jpg',
    },
    // Add more products as needed
  ];
  
  export const getProductById = (id) => {
    return products.find(product => product.id === id);
  };
  
  export default products;
  