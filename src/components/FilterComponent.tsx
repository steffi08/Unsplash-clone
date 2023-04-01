import React, { useState } from "react";
import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { usePostSave } from "../services";
const FilterComponent = (props: any) => {
  const { borderRadius } = props;
  const [query, setQuery] = useState("");
  const { setPostsList } = usePostSave();
  const handleOnChange = (event: any) => {
    setQuery(event.target.value);
  };
  const getPostList = () => {
    setPostsList(query);
  };

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        borderRadius: borderRadius,
        alignItems: "center",
        width: { md: 700 },
        mt: { md: 2 },
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search high-resolution Images"
        inputProps={{ "aria-label": "search high-resolution image" }}
        onChange={handleOnChange}
      />
      <IconButton
        sx={{ p: "10px" }}
        aria-label="menu"
        onClick={() => getPostList()}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default FilterComponent;
