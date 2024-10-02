"use server";

import { ChampionListItem, ChampionsData } from "@/types/Champion";

export const getLatestVersion = async () => {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    const versions: string[] = await response.json();
    return versions[0];
  } catch (error) {
    console.error("fetch version:", error);
    return "";
  }
};

export const getChampionList = async (
  version: string
): Promise<ChampionListItem[]> => {
  try {
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
    );

    const data: ChampionsData = await response.json();
    return Object.values(data.data);
  } catch (error) {
    console.error("fetch champions:", error);
    return [];
  }
};
