export interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  image: { full: string; sprite: string; group: string };
}

export interface ChampionResponse {
  type: string;
  fomat: string;
  version: string;
  data: {
    [key: string]: Champion;
  };
}
