import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ServiceItem from './Service/ServiceItem';
import Footer from './footer/Footer';


const HomePage = () => {
  const [worker,setWorker]=useState([]);
useEffect(()=>{
    fetch("http://localhost:8080/api/v1/add/get-all-gigs")
      .then((response) => response.json())
      .then((data) => {
        setWorker(data);
      });
},[])
  return (
    <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
      {/* home page image */}

      <Box margin={"auto"} width={"60%"} height={"40vh"} padding={2}>
        <img
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*vh4vsuoZCWZhKJTnJy_jVg.jpeg"
          alt="worker home image"
          width={"100%"}
          height={"110%"}
        />
      </Box>

      <Box padding={5} margin="auto">
        <Typography variant="h4" textAlign={"center"}>
          Latest Services
        </Typography>
      </Box>
      <Box
        marginLeft={20}
        display="flex"
        width="80%"
        justifyContent={"center"}
        flexWrap="wrap"
      >
        {worker &&
          worker
            .slice(0, 4)
            .map((worker, index) => (
              <ServiceItem
                id={worker.advertisementId}
                name={worker.name}
                imgURL={worker.addedPhotos}
                category={worker.category}
                city={worker.city}
                title={worker.title}
                key={index}
              />
            ))}
      </Box>
      <Box display="flex" padding={5} margin="auto">
        <Button
          LinkComponent={Link}
          to="/services"
          variant="outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          view All Services
        </Button>
      </Box>
      <Footer />
    </Box>
  );
}

export default HomePage