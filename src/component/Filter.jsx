import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const Filter = ({ setFilter, filter }) => {
  return (
    <div>
      <FormControl variant="outlined" margin="normal">
        <InputLabel>Filter</InputLabel>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          label="Filter"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="Incomplete">Incomplete</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
