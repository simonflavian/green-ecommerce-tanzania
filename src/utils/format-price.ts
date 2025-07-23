export function formatPrice(price: number): string {
  return `TSH ${price.toLocaleString('en-US')}`;
}

export function formatPriceShort(price: number): string {
  if (price >= 1000000) {
    return `TSH ${(price / 1000000).toFixed(1)}M`;
  } else if (price >= 1000) {
    return `TSH ${(price / 1000).toFixed(0)}K`;
  }
  return `TSH ${price.toLocaleString('en-US')}`;
}