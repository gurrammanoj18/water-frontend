import axios from "axios";
import { WaterCan } from "../types/WaterCan";

const API_URL = "http://localhost:8080/api/cans";

export const getAllCans = async (): Promise<WaterCan[]> => {
  const response = await axios.get<WaterCan[]>(API_URL);
  return response.data;
};

export const addCan = async (can: WaterCan): Promise<WaterCan> => {
  const response = await axios.post<WaterCan>(API_URL, can);
  return response.data;
};
