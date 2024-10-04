import { ChampionRotation } from "@/types/ChampionRotation";

export const getChampionRotation = async (): Promise<ChampionRotation> => {
  const response = await fetch("/api/rotation");

  const data: ChampionRotation = await response.json();
  return data;
};
