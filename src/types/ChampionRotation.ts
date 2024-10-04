export interface ChampionRotation {
  freeChampionIds: number[];
  freeChampionIdsForNewPlayers: number[];
  maxNewPlayerLevel: number;
}

export type ChampionRotationIds = Pick<ChampionRotation, "freeChampionIds">;
