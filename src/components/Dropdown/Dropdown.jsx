import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown(props) {
  const [selected, setSelected] = React.useState('');
  const { onSelected, label, options } = props;

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
    onSelected(value)
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label="Age"
          onChange={handleChange}
        >
            {options.map((option, index) => {
                return (
                    <MenuItem value={option.value} key={`${options.label}-${index}`}>{option.label}</MenuItem>
                )
            })}
        </Select>
      </FormControl>
    </Box>
  );
}