import { getChampionList, getLatestVersion } from "@/utils/serverApi";

export const revalidate = 86400;

const Championspage = async () => {
  const version = await getLatestVersion();
  const champions = await getChampionList(version);

  return (
    <main>
      <ul>
        {champions?.map((champion) => (
          <li key={champion.key}>
            <p>{champion.name}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Championspage;
