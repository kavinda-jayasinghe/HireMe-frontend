import React from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import Dialog from "@mui/material/Dialog";
import { Button, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from 'react';
const lableStyle = { mt: 1, mb: 1 };


function CustomerForm() {

const [inputs,setInputs]=useState({
name:"",city:"",mobile:"",password:""
});    
const [isSignUp,setIsSignUp]=useState(false)

//change inputs handle
const handleChange=(e)=>{
    setInputs((prevState)=>({...prevState,
        [e.target.name]:e.target.value,
    }))
}

//form submit handle
const handleSubmit=(e)=>{
e.preventDefault();
console.log(inputs);

};

  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
      <Box sx={{ ml: "auto", padding: 1 }}>
        <IconButton>
          {" "}
          <CloseRoundedIcon />{" "}
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign={"center"}>
        {isSignUp ? "Signup" : "Login"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          padding={6}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          width={400}
          margin="auto"
          alignContent={"center"}
        >
          {isSignUp && (
            <>
              {" "}
              <FormLabel sx={lableStyle}>Name</FormLabel>
              <TextField
                value={inputs.name}
                onChange={handleChange}
                variant="standard"
                type={"text"}
                name="name"
              />
            </>
          )}
          {isSignUp && (
            <>
              {" "}
              <FormLabel sx={lableStyle}>City</FormLabel>
              <TextField
                value={inputs.city}
                onChange={handleChange}
                variant="standard"
                type={"text"}
                name="city"
              />
            </>
          )}
          <FormLabel sx={lableStyle}>Mobile number</FormLabel>
          <TextField
            value={inputs.mobile}
            onChange={handleChange}
            variant="standard"
            type={"text"}
            name="mobile"
          />

          <FormLabel sx={lableStyle}>Password</FormLabel>
          <TextField
            value={inputs.password}
            onChange={handleChange}
            variant="standard"
            type={"password"}
            name="password"
          />

          <Button
            onClick={() => setIsSignUp(!isSignUp)}
            sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
            type="submit"
            fullWidth
            variant="contained"
          >
            {isSignUp ? "Signup" : "Login"}
          </Button>
          <Button
            onClick={() => setIsSignUp(!isSignUp)}
            sx={{ mt: 2, borderRadius: 10 }}
            fullWidth
          >
            Switch To {isSignUp ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </Dialog>
  );
}

export default CustomerForm
