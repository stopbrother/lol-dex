import { ChampionListItem } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ChampionCardProps {
  champion: ChampionListItem;
}

const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <Link href={`/champions/${champion.id}`}>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.image.full}`}
        alt={champion.name}
        width={100}
        height={100}
      />
      <p className="text-center break-all">{champion.name}</p>
    </Link>
  );
};

export default ChampionCard;
