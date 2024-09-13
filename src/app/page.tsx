import Contacts from "@/components/Contacts";
import Profile from "@/components/Profile";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="py-10 flex flex-col  gap-20">
      <section className="flex flex-col items-center gap-2 select-none">
        <Profile />

        <div className="p-4">
          <div className="h-0.5 w-4 bg-gray-100 rounded-full"></div>
        </div>
        <Contacts />
      </section>

      <section className="flex flex-col mt-10 "></section>
    </div>
  );
};

export default Home;
