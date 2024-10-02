import { getChampion, getLatestVersion } from "@/utils/serverApi";
import Image from "next/image";

interface ChampionDetailPageProps {
  params: {
    id: string;
  };
}

const ChampionDetailPage = async ({ params }: ChampionDetailPageProps) => {
  const id = params.id;

  const version = await getLatestVersion();
  const champion = await getChampion(id, version);

  if (!champion) return <div>로딩중</div>;

  return (
    <main>
      <div>
        <h1>{champion.name}</h1>
        <h3>{champion.title}</h3>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
          alt={champion.name}
          width={200}
          height={200}
        />
        <div>{champion.lore}</div>
      </div>
    </main>
  );
};

export default ChampionDetailPage;
