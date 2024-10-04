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
    <div>
      <ul>
        {Items.map(([id, item]: [string, Item]) => (
          <li key={id}>
            <Link href={`/items/${id}`}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
                alt={item.name}
                width={100}
                height={100}
              />
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Itemspage;
