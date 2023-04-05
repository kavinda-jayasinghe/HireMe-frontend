import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ServiceItem from './Service/ServiceItem';

const HomePage = () => {
  const [worker,setWorker]=useState([]);
useEffect(()=>{
    fetch("http://localhost:8080/api/v1/worker/getAllWorkers")
      .then((response) => response.json())
      .then((data) => {
        setWorker(data);
      });
},[])
  return (
    <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
      <Box margin={"auto"} width={"60%"} height={"40vh"} padding={2}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/008/923/944/original/technicians-people-group-engineering-worker-and-construction-industrial-engineers-workers-builders-characters-isolated-cartoon-illustration-vector.jpg"
          alt="worker home image"
          width={"100%"}
          height={"100%"}
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
          worker.slice(0,4).map((worker, index) => (
            <ServiceItem
              id={worker.id}
              first_name={worker.first_name}
              last_name={worker.last_name}
              category={worker.category}
              city={worker.city}
              description={worker.description}
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
    </Box>
  );
}

export default HomePage