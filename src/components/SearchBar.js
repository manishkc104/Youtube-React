import React from "react";
import { styled } from "styletron-react";

const SearchBarContainer = styled("div", () => ({
  margin: "20px",
  textAlign: "center"
}));

const SearchBarInput = styled("input", () => ({
  width: "75%",
  padding: "1.2rem 3rem",
  fontSize: "1.6rem",
  borderStyle: "solid",
  borderColor: "#EEEEEE",
  borderWidth: "2px",
  borderRadius: "6px",
  lineHeight: "normal",
  transition: "300ms border ease-in-out",
  ":focus": {
    borderColor: "#1F1F7C"
  },
  "::placeholder": {
    color: "#9E9E9E"
  }
}));

const SearchBar = ({ onSearchTermChange }) => {
  const [searchValue, setSearchValue] = React.useState("");

  const onInputChange = e => {
    setSearchValue(e.target.value);
    onSearchTermChange(searchValue);
  };
  return (
    <SearchBarContainer>
      <SearchBarInput
        onChange={onInputChange}
        value={searchValue}
        placeholder="Search Results"
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
