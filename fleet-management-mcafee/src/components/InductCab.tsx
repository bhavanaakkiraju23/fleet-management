import {
  createTheme,
  Paper,
  styled,
  ThemeProvider,
  Typography,
  Box,
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Card,
  Radio,
  RadioGroup
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCabUser } from "../service/apiservice";
const Body = styled(Paper)`
  margin-top: 10px;
  margin-left: 50px;
  margin-right: 50px;
`;
const theme = createTheme({
  typography: {
    h4: {
      fontStyle: "italic",
      fontFamily: "Monospace",
    },
  },
});

const Container = styled(FormGroup)`
width :50%;
margin:1% auto 0 auto;
 & > div {
    margin-top :20px;
 }
 `;

const Cards = styled(Card)`
margin-top: 5px;
margin-left: 50px;
margin-right: 50px;
`;


const Type = styled(Typography)`
margin-right: 40px;
margin-left: 60px;
`;

const initialValue = {
  carNumber: "",
  chasisNumber: "",
  model: "",
  make: "",
  Type: "",
  NoSeats: 6,
  bootCapacity: 450,
  luggageHolder: false,
};
function InductCab() {
  const [cabUser, setcabUser] = useState(initialValue);

  const navigate = useNavigate();
  const onChangeValue = (e:any) => {
    setcabUser({ ...cabUser, [e.target.name]: e.target.value });
  };

  const addCabDetails = async () => {
    cabUser.luggageHolder= true; 
    await addCabUser(cabUser);
    navigate("/getCabDetails");
  };
let luggage:boolean=false;
  const handleChange = (e:any) => {
    luggage= e.target.value;
  };


  return (
  
      <Cards
        sx={{  backgroundColor: "#ffccbc" }}
      >
        <ThemeProvider theme={theme}>
        <Type
          variant="h4"
          sx={{
            backgroundColor: "#bdbdbd",
            alignItems: "center",
            boxShadow: 1,
            textAlign: "center",
          }}
        >
          Register your cab
        </Type>
      </ThemeProvider>

        <Container>
          <div>
        <a href='/' style={{marginTop : 12, float :'left'}}> Go Back</a> 
        <ThemeProvider theme = {theme}>
          <Type variant="h4" sx={{
            backgroundColor: "#bdbdbd",
            textAlign :'center'}}> Enter Cab Details</Type>
        </ThemeProvider>
        </div>
          <FormControl>
            <InputLabel>Car Number</InputLabel>
            <Input
              name="carNumber"
              onChange={(event) => onChangeValue(event)}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Chasis Number</InputLabel>
            <Input
              name="chasisNumber"
              onChange={(event) => onChangeValue(event)}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Make</InputLabel>
            <Input name="make" onChange={(event) => onChangeValue(event)} />
          </FormControl>
  
          <FormControl>
            <InputLabel>Model</InputLabel>
            <Input name="model" onChange={(event) => onChangeValue(event)} />
          </FormControl>
          <FormControl>
            <InputLabel>Type</InputLabel>
            <Input name="Type" onChange={(event) => onChangeValue(event)} />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel>No of Seats</InputLabel>
            <Input
              name="NoSeats"
              fullWidth={true}
              onChange={(event) => onChangeValue(event)}
            />
          </FormControl>
        
          <FormControl>
            <InputLabel>Boot Capacity</InputLabel>
            <Input name="bootCapacity" />
          </FormControl>
          <FormControl>
          <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
          <Radio checked={cabUser.luggageHolder === true} value={luggage} onChange={(event)=>handleChange(event)} name="luggageHolder" inputProps={{ 'aria-label': 'True' }} />
          <Radio checked={cabUser.luggageHolder === false} value={luggage} onChange={(event)=>handleChange(event)}   name="luggageHolder" inputProps={{ 'aria-label': 'False' }} />
          </RadioGroup>
          </FormControl>
          <FormControl>
            <Button
              variant="contained"
              sx={{ ml: 2, mt: 1 }}
              onClick={() => addCabDetails()}
            >
              Submit
            </Button>
          </FormControl>
          </Container>
      </Cards>

  );
}

export default InductCab;
