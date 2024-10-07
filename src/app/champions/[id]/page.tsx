import { fetchChampionDetail, getLatestVersion } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";

interface ChampionDetailPageProps {
  params: { id: string };
}

export const generateMetadata = async ({
  params,
}: ChampionDetailPageProps): Promise<Metadata> => {
  const id = params.id;

  const version = await getLatestVersion();
  const champion = await fetchChampionDetail(id, version);

  return {
    title: `${champion.name} - 상세정보`,
  };
};

const ChampionDetailPage = async ({ params }: ChampionDetailPageProps) => {
  const id = params.id;

  const version = await getLatestVersion();
  const champion = await fetchChampionDetail(id, version);

  if (!champion) return <div>로딩중</div>;

  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-start w-full px-11">
          <h1 className="text-5xl">{champion.name}</h1>
        </div>
        <h3>{champion.title}</h3>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
          alt={champion.name}
          width={200}
          height={200}
        />
        <div className="p-11">{champion.lore}</div>
      </div>
    </main>
  );
};

export default ChampionDetailPage;
