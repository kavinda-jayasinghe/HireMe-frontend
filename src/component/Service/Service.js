import React from 'react'
import { Box } from "@mui/system"; 
import Typography from '@mui/material/Typography'
import { useEffect, useState } from "react";
import ServiceItem from './ServiceItem';



function Service() {
const[worker,setWorker]=useState();
useEffect(() => {
  fetch("http://localhost:8080/api/v1/worker/getAllWorkers")
    .then((response) => response.json())
    .then((data) => {
      setWorker(data);
    });
}, []);
  return (
    <Box margin={"auto"} marginTop={4}>
      <Typography
        padding={2}
        margin={"auto"}
        width="40%"
        bgcolor={"#3A7C89"}
        color="white"
        textAlign={"center"}
        variant="h4"
      >
        All Services
      </Typography>
      <Box
        width={"100%"}
        margin="auto"
        marginTop={5}
        marginLeft={3}
        marginRight={3}
        display={"flex"}
        justifyContent={"flex-start"}
        flexWrap={"wrap"}
      >
        {worker &&
          worker.map((worker, index) => (
            <ServiceItem
              id={worker.id}
              name={worker.name}
              category={worker.category}
              city={worker.city}
              description={worker.description}
              key={index}
            />
          ))}
      </Box>
    </Box>
  );

  
}

export default Service