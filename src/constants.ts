export const MOCK_ORDER = {
  orderId: '123456',
  totalPrice: 200.0,
  items: [
    { 
      productId: 'A1', 
      productName: 'Product A', 
      quantity: 2, 
      price: 50.0 
    },
    { 
      productId: 'B2', 
      productName: 'Product B', 
      quantity: 1, 
      price: 100.0 
    }
  ]
} as const;

export const PRODUCT_QUANTITIES = {
  PRODUCT_A: 2,
  PRODUCT_B: 1
} as const; 