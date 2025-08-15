import { Filter } from "../../Components/Filter/Filter";
import { Posters } from "../../Components/Posters/Posters";

export const Plakater = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-[1400px] mx-auto px-4">
      <div className="w-full md:w-[220px]">
        <Filter />
      </div>

      <div className="flex-1 overflow-y-scroll">
        <Posters />
      </div>
    </div>
  );
};
