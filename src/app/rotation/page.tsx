"use client";
import ChampionCard from "@/components/ChampionCard";
import { ChampionListItem } from "@/types/Champion";
import { ChampionRotationIds } from "@/types/ChampionRotation";
import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi";

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

      const championListData = await fetchChampionList();
      setChampions(championListData);
    };
    fetchRoation();
  }, []);

  const rotationChampions = champions.filter((champion) =>
    rotationData?.freeChampionIds.includes(Number(champion.key))
  );

  return (
    <div>
      <ul className="flex flex-wrap gap-8 justify-center items-center">
        {rotationChampions?.map((champion) => (
          <li key={champion.key}>
            <ChampionCard champion={champion} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rotationpage;
