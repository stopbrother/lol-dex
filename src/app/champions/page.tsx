import { ChampionListItem } from "@/types/Champion";
import { getChampionList, getLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400;

const ChampionsPage = async () => {
  const version = await getLatestVersion();
  const champions: ChampionListItem[] = await getChampionList(version);

  return (
    <main>
      <ul>
        {champions?.map((champion) => (
          <li key={champion.key}>
            <Link href={`/champions/${champion.key}`}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
                alt={champion.name}
                width={100}
                height={100}
              />
              <p>{champion.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ChampionsPage;
