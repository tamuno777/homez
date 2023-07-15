import React from 'react'
import map from '../assets/map.png'
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {AiOutlineSearch} from 'react-icons/ai'
import { easeIn, motion } from "framer-motion";


export default function Intro() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <motion.div className='intro-container'
    
    >
      <div className="intro-content  justify-content-between">
        <div className="intro-text">
          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 4 }}
          whileInView={{ opacity: 4 }}
          transition={{
            duration:2,
                    }}
          >
          The most affortable place to stay in the san franciso bay area
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 4 }}
          whileInView={{ opacity: 4 }}
          transition={{
            duration:2,
                    }}>
            <div className="intro-img pe-4">
                <img src={map} alt="" />
            </div>
            <div className=" ">
            <div className='text-dark  py-2 px-4 intro-inpute '>
              <div className='lala'>
              <FormControl variant="filled" sx={{boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, m: 0, minWidth: 130 }} className=' intro-field' >
              <InputLabel id="demo-simple-select-standard-label"
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
              }}>All types</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="type"
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            
            <FormControl variant="filled" sx={{ m: 0, minWidth: 150 ,boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }}} className=' intro-field'>
              <InputLabel id="demo-simple-select-filled-label">Neighborhood</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
          </FormControl>
          <Button variant="contained" style={{height:'56px', width:'10px'}} className='intro-btn' > <AiOutlineSearch/>

          </Button>
              </div>
            
          </div>
            </div>
        </motion.div>
      </div>

    </motion.div>
  )
}
