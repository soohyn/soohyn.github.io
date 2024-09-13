import { FC } from "react";

interface TagProps {
  label: string;
}

const Tag: FC<TagProps> = ({ label }) => {
  return (
    <div className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-gray-600">
      <span className="text-sm line-clamp-1">{label}</span>
    </div>
  );
};

export default Tag;
