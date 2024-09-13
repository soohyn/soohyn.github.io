import Image from "next/image";
import { FC } from "react";
import IconSearch from "../assets/search.svg";
import { useRouter } from "next/navigation";

const SearchInput: FC = () => {
  const router = useRouter();

  const onClickSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search");

    if (!search) return;
    router.push(`/posts?search=${search}`);
  };

  return (
    <form
      className="flex flex-row items-center bg-gray-100 dark:bg-gray-800 py-1 pl-4 pr-3 rounded-full w-60 gap-2"
      onSubmit={onClickSearch}
    >
      <input
        type="text"
        className="bg-transparent outline-none w-full"
        placeholder="Search..."
        name="search"
      />
      <button type="submit">
        <Image src={IconSearch} alt={"search.svg"} width={20} height={20} />
      </button>
    </form>
  );
};

export default SearchInput;
