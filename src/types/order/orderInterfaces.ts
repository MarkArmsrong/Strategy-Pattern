/* export interface Order {
    id: string;
    amount: number;
    items: Array<{ productId: string; quantity: number }>;
  }
 */

// orderInterfaces.ts
export interface Order {
  orderId: string;
  totalPrice: number;
  items: {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
  }[];
}
export const order: Order = {
  orderId: '123456',
  totalPrice: 200.0,
  items: [
    { productId: 'A1', productName: 'Product A', quantity: 2, price: 50.0 },
    { productId: 'B2', productName: 'Product B', quantity: 1, price: 100.0 }
  ]
};
