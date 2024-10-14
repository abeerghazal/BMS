export interface InferBillUserModel {
  [x: string]: any;
  total_price: number,
  is_open: boolean,
  services: Array<JSON>,
  FlatId: number
}
