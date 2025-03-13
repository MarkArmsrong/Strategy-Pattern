export interface Order {
    id: string;
    amount: number;
    items: Array<{ productId: string; quantity: number }>;
  }


