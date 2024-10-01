"use client";
import React, { useEffect } from "react";

const Rotationpage = () => {
  // const [rotationChampion, setRotationChampion] = useState<any>(null);

  useEffect(() => {
    const fetchRoation = async () => {
      const response = await fetch("/api/rotation");

      const data = await response.json();
      console.table("data", data);
    };
    fetchRoation();
  }, []);

  return <div>page</div>;
};

export default Rotationpage;
