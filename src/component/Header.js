import { AppBar, Toolbar ,Autocomplete, TextField, Tab, Tabs} from '@mui/material'
import React, { useState } from 'react'
import { Box } from '@mui/system'; 
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import { Link } from 'react-router-dom';
const dummyArray=['mason','cctv','mechanic'];
export default function Header() {
  const [search,setSearch]=useState('');
    const [value,setValue]=useState(0);
 const [isLoggedIn, setIsLoggedIn] = useState(false);


           
 function searcJob(ev){
  ev.preventDefault();

 }
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#2b2d41" }}>
      <Toolbar>
        <Box width={"20%"}>
          <AssuredWorkloadIcon />
        </Box>

        <Tab LinkComponent={Link} to="/" label="home" />

        <Box width={"30%"} margin={"auto"}>
          <Autocomplete
            id="free-solo-demo"
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
            freeSolo
            options={dummyArray.map((option) => option)}
            renderInput={(params) => (
              <TextField
                sx={{ input: { color: "white" } }}
                variant="standard"
                {...params}
                placeholder="What service are you looking for today?"
              />
            )}
          />
        </Box>

        <Box display={"flex"}>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/services" label="All Services" />
            <Tab
              LinkComponent={Link}
              to="/customer-login"
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              label={isLoggedIn ? "Log out" : "Log in"}
            />

            <Tab
              LinkComponent={Link}
              to="/seller-login"
              label="Become a Seller"
            />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
