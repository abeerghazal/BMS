export interface IBill {
  id: number,
  flat_number: number;
  user_name: string;
  electricity: number;
  naturalWater: number;
  drinkingWater: number;
  generalServices: number;
  total_price: number;
  is_open: boolean;
}

export interface IBillsResponse {
  data: Data;
}

interface Data {
  result: IBill[];
  total: number;
}
