export interface SalesMetric {
  id: string;
  date: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  paymentMethod: 'credit_card' | 'pix' | 'boleto';
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
}

export interface CheckoutConfig {
  id: string;
  name: string;
  theme: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
  paymentMethods: string[];
  currencies: string[];
  languages: string[];
}