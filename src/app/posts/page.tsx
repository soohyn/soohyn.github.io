"use client";
import { NextPage } from "next";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Posts: NextPage = () => {
  const [search, setSearch] = useState<string | null>("");
  const params = useSearchParams();

  const getSearch = (params: ReadonlyURLSearchParams) => {
    setSearch(params.get("search"));
  };

  useEffect(() => {
    getSearch(params);
  }, [params]);

  return <div>posts {search}</div>;
};
export default Posts;
