import { useState, useEffect } from "react";

const localCache = {};

export default function useProductList(business) {
  const [productList, setProductList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if(!business) {
      setProductList([]);
    } else if (localCache[business]) {
    setProductList(localCache[business])
  } else {
    requestProductList();
  }

  async function requestProductList() {
    setProductList([]);
    setStatus("loading");

    const res = await fetch(`http://localhost:3000/api/v1/women/products?business=${business}`);

    const json = await res.json();
    localCache[business] = json.products || [];
    setProductList(localCache[business]);
    setStatus("loaded");
  }
  }, [business]);
  return [productList, status];
}
