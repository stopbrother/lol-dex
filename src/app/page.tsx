import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <div>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</div>
      <Link href="/champions">챔피언 목록</Link>
      <Link href="/items">아이템 목록</Link>
      <Link href="/rotations">로테이션 목록</Link>
    </main>
  );
};

export default Homepage;
