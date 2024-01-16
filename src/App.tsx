import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { RiSearch2Line } from "react-icons/ri";
import { CgOptions } from "react-icons/cg";

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <div className="flex justify-center items-center h-screen">
      <SearchInput
        placeholder="Search..."
        parentClassName="w-72"
        startIcon={<RiSearch2Line />}
        endIcon={<CgOptions />}
        rounded
        value={searchKeyword}
        handleChange={(e: any) => setSearchKeyword(e.target.value)}
        border="sm"
      />
    </div>
  );
};

export default App;
