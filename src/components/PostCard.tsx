import { Post } from "@/types";
import dayjs from "dayjs";
import Image from "next/image";
import { FC } from "react";
import Tag from "./Tag";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const tagsMap = post.tags.map((t, i) => {
    return (
      <li key={`${post.id}-tag-${i}`}>
        <Tag label={t} />
      </li>
    );
  });

  return (
    <li className="flex flex-col hover:opacity-60 active:scale-95 transition-all cursor-pointer ease-in-out">
      <Link href={`posts/detail/${post.id}`}>
        <div className="relative overflow-hidden rounded-md">
          <Image src="" alt={post.id} className="bg-gray-200 h-48" />
        </div>

        <div className="flex flex-col gap-1 p-2">
          <ul className="flex flex-row gap-2">{tagsMap}</ul>
          <span className="text-gray-700 dark:text-gray-200 text-lg font-semibold">
            {post.title}
          </span>
          <span className="text-gray-500">{post.description}</span>
          <span className="self-end font-sm text-gray-300 dark:text-gray-700">
            {dayjs(post.created_at).format("YYYY. M. D.")}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
