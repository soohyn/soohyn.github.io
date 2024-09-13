"use client";
import { FC, useState } from "react";
import PostCard from "./PostCard";
import { TAG } from "@/lib";
import { Post } from "@/types";

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
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "<id>",
      created_at: +new Date(),
      title: "이것은 제목입니다 한 줄만 보여집니다. 한 줄 넘치는 테스트",
      description:
        "이것은 설명글입니다. 이 글에 대해서 짧게 적습니다. 한 줄에서 두 줄까지만 허용하도록 합니다.",
      contents: "<h1>테스트 컨텐츠</h1>",
      tags: [TAG.REACT, TAG.TYPESCRIPT],
    },
  ]);

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
