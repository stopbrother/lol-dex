"use client";
import { ChampionListItem } from "@/types/Champion";
import { ChampionRotationIds } from "@/types/ChampionRotation";
import { getChampionRotation } from "@/utils/riotApi";
import { getChampionList, getLatestVersion } from "@/utils/serverApi";
import React, { useEffect, useState } from "react";

const Rotationpage = () => {
  const [rotationData, setRotationData] = useState<ChampionRotationIds | null>(
    null
  );
  const [champions, setChampions] = useState<ChampionListItem[]>([]);

  useEffect(() => {
    const fetchRoation = async () => {
      const data = await getChampionRotation();
      setRotationData(data);

      const version = await getLatestVersion();

      const championListData = await getChampionList(version);
      setChampions(championListData);
    };
    fetchRoation();
  }, []);

  const rotationChampions = champions.filter((champion) =>
    rotationData?.freeChampionIds.includes(Number(champion.key))
  );

  return (
    <div>
      <ul>
        {rotationChampions?.map((champion) => (
          <li key={champion.key}>
            <p>{champion.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rotationpage;
