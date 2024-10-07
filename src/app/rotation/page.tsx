"use client";
import { ChampionListItem } from "@/types/Champion";
import { ChampionRotationIds } from "@/types/ChampionRotation";
import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList, getLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Rotationpage = () => {
  const [rotationData, setRotationData] = useState<ChampionRotationIds | null>(
    null
  );
  const [champions, setChampions] = useState<ChampionListItem[]>([]);
  const [version, setVersion] = useState<string>("");

  useEffect(() => {
    const fetchRoation = async () => {
      const data = await getChampionRotation();
      setRotationData(data);

      const version = await getLatestVersion();
      setVersion(version);

      const championListData = await fetchChampionList(version);
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
            <Link href={`/champions/${champion.key}`}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
                alt={champion.name}
                width={100}
                height={100}
              />
              <p className="text-center break-all">{champion.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rotationpage;
