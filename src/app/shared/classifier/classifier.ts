export interface Classifier {
  value: any;
  label: string;
}

export const roomAmount: Classifier[] = [
  { value: 1, label: '1-kohaline' },
  { value: 2, label: '2-kohaline' },
  { value: 3, label: '3-kohaline' },
];

export const priceRange: Classifier[] = [
  { value: '0_100', label: '€ 0-100' },
  { value: '100_200', label: '€ 100-200' },
  { value: '200_300', label: '€ 200-300' },
];
