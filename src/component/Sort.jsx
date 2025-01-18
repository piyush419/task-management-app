import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Sort = ({ setSortOrder, sortOrder }) => {
  return (
    <div>
      <FormControl variant="outlined" margin="normal">
        <InputLabel>Sort by</InputLabel>
        <Select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          label="Sort by"
        >
          <MenuItem value="desc">Creation Date (Newest)</MenuItem>
          <MenuItem value="asc">Creation Date (Oldest)</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sort;
