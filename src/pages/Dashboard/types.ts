/* eslint-disable camelcase */
export interface ICarDetails {
  id: number;
  color: string;
  icon_image: string;
  main_image: string;
}
export interface ICar {
  id: number;
  model: string;
  maker: string;
  price: number;
  image: string;
  logo: string;
  details: ICarDetails[];
}
