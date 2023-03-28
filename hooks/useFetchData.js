import React, { useEffect, useState } from "react";
import { db } from "../config";

const useFetchData = (table) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    db.collection(table).orderBy("Date").onSnapshot((SnapShot) => {
      setData(SnapShot.docs.map((doc) => doc.data()));
    });
  }, []);
  return data;
};
export default useFetchData;