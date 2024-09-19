"use client";

import { FC, useEffect, useState } from "react";
import PostCard from "./PostCard";
import { TAG } from "@/lib";
import { Post } from "@/types";
import PageHeader from "./PageHeader";
import { dummy } from "@/lib/dummy";

const RecentPosts: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const postsMap = posts.map((post, i) => {
    return <PostCard key={`${i}-${post.id}`} post={post} />;
  });

  const getPosts = async () => {
    setPosts(dummy);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-col">
      <PageHeader title="Recent" />
      <ul className="grid grid-cols-3 gap-6">{postsMap}</ul>
    </div>
  );
};

export default RecentPosts;
