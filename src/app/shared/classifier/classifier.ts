export interface Classifier {
  value: any;
  label: string;
}

export const roomAmount: Classifier[] = [
  {value: 1, label: '1-kohaline'},
  {value: 2, label: '2-kohaline'},
  {value: 3, label: '3-kohaline'},
];

export const priceRange: Classifier[] = [
  {value: '0_100', label: '€ 0-100'},
  {value: '100_200', label: '€ 100-200'},
  {value: '200_300', label: '€ 200-300'},
];

export const facility: Classifier[] = [
  {value: 'FACILITY_SHOWER', label: 'Dušš'},
  {value: 'FACILITY_AIR_CONDITIONER', label: 'Konditsioneer'},
  {value: 'FACILITY_WIFI', label: 'WiFi'},
  {value: 'FACILITY_PHONE', label: 'Telefon'},
  {value: 'FACILITY_TV', label: 'Televiisor'},
  {value: 'FACILITY_BATHTUB', label: 'Vann'},
  {value: 'FACILITY_SMALL_KITCHEN', label: 'Väike köök'},
  {value: 'FACILITY_COFFEE_MAKER', label: 'Kohvimasin'},
  {value: 'FACILITY_SAUNA', label: 'Saun'},
  {value: 'FACILITY_REFRIGERATOR', label: 'Külmkapp'},
];
