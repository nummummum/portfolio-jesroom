export type furnitureType = {
  filename: string;
  price: number;
  time: string;
  title: string;
  type: string;
};
export type furnitureCartType = {
  filename: string;
  price: number;
  title: string;
};
export type detailobjType = {
  objprice: number;
  filename: string;
  title: string;
};
export type roomType = {
  filename: string;
  content: string;
  detailobj: Array<detailobjType>;
  price: number;
  time: string;
  title: string;
};
export type roomCartType = {
  detailobj: Array<detailobjType>;
  title: string;
  price: number;
  filename: string;
};
