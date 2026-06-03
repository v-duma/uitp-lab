export function calculateDiscount(price, discountPercent) {
  if (price < 0 || discountPercent < 0) return 0;
  if (discountPercent > 100) return price;
  return price - price * (discountPercent / 100);
}
