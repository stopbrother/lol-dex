import { getChampions, getLatestVersion } from "@/utils/serverApi";

const Championspage = async () => {
  const version = await getLatestVersion();
  const champions = await getChampions(version);
  if (!champions) return <div>오류 발생</div>;

  return (
    <main>
      <ul>
        {champions.map((champion) => (
          <li key={champion.key}>
            <p>{champion.name}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Championspage;
