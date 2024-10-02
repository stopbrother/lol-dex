"use server";

import { ChampionResponse } from "@/types/Champion";

export const getLatestVersion = async () => {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    const versions = await response.json();
    return versions[0];
  } catch (error) {
    console.error("fetch version:", error);
  }
};

export const getChampions = async (version: string) => {
  try {
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
    );

    const data: ChampionResponse = await response.json();
    return Object.values(data.data);
  } catch (error) {
    console.error("fetch champions:", error);
  }
};
