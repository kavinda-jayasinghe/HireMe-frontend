import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { margin } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';

const ServiceItem = ({name, category, city,imgURL,id }) => {
  
  return (
    <Card
      sx={{
        margin: 1.5,
        width: 250,
        height: 350,
        borderRadius: 5,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <img height={"150px"} width={"250px"} src={imgURL} alt="" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h3>{category}</h3>
          {city}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          LinkComponent={Link}
          to={`/view/${id}`}
          sx={{ margin: "auto" }}
          size="small"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceItem;