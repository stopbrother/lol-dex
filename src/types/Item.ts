export interface ItemsData {
  type: string;
  version: string;
  data: {
    [key: string]: Item;
  };
}
export interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: ItemImage;
  gold: ItemGold;
  stats: { FlatMovementSpeedMod: number };
}

export interface ItemImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface ItemGold {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
}
