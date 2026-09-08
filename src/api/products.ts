import { Product } from '../types/Product';
import { ProductDetails } from '../types/ProductDetails';

export async function getProducts(): Promise<Product[]> {
  const response = await fetch('/api/products.json');

  if (!response.ok) {
    throw new Error('Failed to fetch products list');
  }

  return response.json();
}

export async function getProductDetails(
  productId: string,
): Promise<ProductDetails> {
  const response = await fetch(`/api/products/${productId}.json`);

  if (!response.ok) {
    throw new Error('Failed to fetch product details');
  }

  return response.json();
}
