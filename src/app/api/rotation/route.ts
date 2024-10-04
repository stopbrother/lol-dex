import { ChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.RIOT_API_KEY as string;

  if (!apiKey) throw new Error("API키가 없습니다.");

  try {
    const response = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        method: "GET",
        headers: {
          "X-Riot-Token": apiKey,
        },
      }
    );

    const data: ChampionRotation = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("챔피언 로테이션 데이터를 가져오는데 실패했습니다.", error);
    return NextResponse.error();
  }
}
