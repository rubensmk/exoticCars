/* eslint-disable camelcase */
export interface ICarDetails {
  logo: string;
  main_image: string;
  variant_1: string;
  variant_2: string;
  variant_3: string;
}
export interface ICar {
  id: number;
  model: string;
  maker: string;
  price: number;
  image: string;
  details: ICarDetails[];
}
