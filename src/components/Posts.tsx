"use client";
import { FC, useState } from "react";
import PostCard from "./PostCard";
import { TAG } from "@/lib";
import { Post } from "@/types";
import { dummy } from "@/lib/dummy";

type PostsType = "normal" | "recent" | "recommended";

interface PostsProps {
  type: PostsType;
}

interface Contents {
  title: string;
}

const postsContents: Record<PostsType, Contents> = {
  normal: {
    title: "Posts",
  },
  recent: {
    title: "Recent",
  },
  recommended: {
    title: "Recommend",
  },
};

const Posts: FC<PostsProps> = ({ type }) => {
  const [posts, setPosts] = useState<Post[]>(dummy);

  const content = postsContents[type];

  const postsMap = posts.map((post, i) => {
    return <PostCard key={`${i}-${post.id}`} post={post} />;
  });

  return (
    <div className="flex flex-col">
      <div className="flex">
        <span className="text-xl font-bold text-gray-700 dark:text-gray-200 pt-10 pb-8 max-w-full">
          {content.title}
        </span>
      </div>
      <ul className="grid grid-cols-3 gap-6">{postsMap}</ul>
    </div>
  );
};

export default Posts;
