export interface InferComplaintsModel {
  id: number;
  title: string;
  description: string;
  createdAt: string; // Assuming it's a date as a string
  updatedAt: string;
  deletedAt: string | null; // Since `deletedAt` can be null
  UserId: number;
  flat_number: number; // Include the flat_number
}
