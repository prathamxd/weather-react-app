import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { BACKEND_SERVER_URL } from "../../env";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleSearchChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(`${BACKEND_SERVER_URL}/api/location?inputValue=${inputValue}`)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  };

  return (
    <div className="md:w-[50%] w-[80%] mx-auto rounded-md md:ml-[43%]">
      <AsyncPaginate
        placeholder="Search for City"
        debounceTimeout={600}
        value={search}
        onChange={handleSearchChange}
        loadOptions={loadOptions}
        className="bg-slate-500"
      />
    </div>
  );
};

export default Search;
