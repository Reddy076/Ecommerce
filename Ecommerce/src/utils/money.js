// Utility function to format money values in cents to dollar format
export function formatMoney(amountCents) {
  return `$${(amountCents / 100).toFixed(2)}`;
}