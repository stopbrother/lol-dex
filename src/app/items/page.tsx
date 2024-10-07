import { Item } from "@/types/Item";
import { fetchItemList, getLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Itemspage = async () => {
  const version = await getLatestVersion();
  const ItemList = await fetchItemList(version);
  const Items = Object.entries(ItemList);

  return (
    <main>
      <ul className="flex flex-wrap gap-8 justify-center items-center">
        {Items.map(([id, item]: [string, Item]) => (
          <li
            key={id}
            className="w-40 h-36 flex flex-col justify-center items-center break-words"
          >
            <Link href={`/items/${id}`}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
                alt={item.name}
                width={100}
                height={100}
              />
              <p className="w-[100px] text-center">{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Itemspage;
