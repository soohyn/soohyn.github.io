import { FC } from "react";

interface PageHeaderProps {
  title: string;
}

const PageHeader: FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="flex">
      <span className="text-xl font-bold text-gray-700 dark:text-gray-200 pt-10 pb-8 max-w-full">
        {title}
      </span>
    </div>
  );
};

export default PageHeader;
