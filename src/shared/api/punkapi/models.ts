export type Beer = {
  abv: number;
  attenuation_level: number;
  boil_volume: any; //value: 25, unit: "litres"}
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: string[];
  ibu: number;
  id: number;
  image_url: string;
  ingredients: any; // {malt: [{name: "Maris Otter Extra Pale", amount: {value: 3.3, unit: "kilograms"}},…],…}
  method: any; // {mash_temp: [{temp: {value: 64, unit: "celsius"}, duration: 75}],…}
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: any; // {value: 20, unit: "litres"}
};

export type Beers = Record<Beer["id"], Beer>;
