import { ChampionListItem } from "@/types/Champion";
import { fetchChampionList, getLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400;

const ChampionsPage = async () => {
  const champions: ChampionListItem[] = await fetchChampionList();

  const version = await getLatestVersion();

  return (
    <main>
      <ul className="flex flex-wrap gap-8 justify-center items-center">
        {champions?.map((champion) => (
          <li key={champion.key}>
            <Link href={`/champions/${champion.id}`}>
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
    </main>
  );
};

export default ChampionsPage;
