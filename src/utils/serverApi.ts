"use server";

import {
  ChampionDetail,
  ChampionDetailData,
  ChampionListItem,
  ChampionsData,
} from "@/types/Champion";
import { Item, ItemsData } from "@/types/Item";

export const getLatestVersion = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );

  if (!response.ok) throw new Error("버전정보를 가져오는데 실패했습니다.");

  const versions: string[] = await response.json();
  return versions[0];
};

export const fetchChampionList = async (): Promise<ChampionListItem[]> => {
  const latestVersion = await getLatestVersion();

  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`
  );

  if (!response.ok) throw new Error("챔피언 목록을 가져오는데 실패했습니다.");

  const data: ChampionsData = await response.json();
  return Object.values(data.data);
};

export const fetchChampionDetail = async (
  id: string
): Promise<ChampionDetail> => {
  const latestVersion = await getLatestVersion();

  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion/${id}.json`,
    { cache: "no-store" }
  );

  if (!response.ok) throw new Error("챔피언 정보를 가져오는데 실패했습니다.");

  const data: ChampionDetailData = await response.json();
  return data.data[id];
};

export const fetchItemList = async (): Promise<Item[]> => {
  const latestVersion = await getLatestVersion();

  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/item.json`
  );

  if (!response.ok) throw new Error("아이템 목록을 가져오는데 실패했습니다.");

  const data: ItemsData = await response.json();

  return Object.values(data.data);
};
