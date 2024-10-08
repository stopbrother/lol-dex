import ChampionCard from "@/components/ChampionCard";
import { ChampionListItem } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";

export const revalidate = 86400;

const ChampionsPage = async () => {
  const champions: ChampionListItem[] = await fetchChampionList();

  return (
    <main>
      <ul className="flex flex-wrap gap-8 justify-center items-center">
        {champions?.map((champion) => (
          <li key={champion.key}>
            <ChampionCard champion={champion} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ChampionsPage;
