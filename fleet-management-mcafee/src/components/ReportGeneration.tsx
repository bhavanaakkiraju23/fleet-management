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
  RadioGroup,

} from "@mui/material";
import moment from 'moment'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserById } from "../service/apiservice";
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

const Buttons =styled ('div')`
margin-right: 40px;
margin-left: 60px;
display: flex;  
justify-content: center;  
align-items: center;  
`
function ReportGeneration() {
  let month =moment().format("MMMM"); 
  let [monthlyData,setMonthlyData] = useState([])

  useEffect(()=>{
    getMonthDetails();
  },[])

  const getMonthDetails=async ()=>{
    let res =await getUserById();
    setMonthlyData(res?.data);

    getTotalDuration();

  }
  let [count,setCount] =useState(0);

  const getTotalDuration =()=>{
    let c=0;
    monthlyData.forEach((e:any)=>{
       c=c+e.duration
    })

    setCount(c)

  }
  
  return (
    <Cards
        sx={{  backgroundColor: "#ffccbc",height:820 }}
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
         Booking Report
        </Type>

      </ThemeProvider>
      <div style={{display: 'grid', alignItems: 'center'  }}>
      <a href='/' style={{marginTop : 100 ,marginLeft:80}}> Go Back</a> 
      <Container>
          <div>
        
        <ThemeProvider theme = {theme}>
          <Type variant="h6" sx={{
            backgroundColor: "#bdbdbd",
            textAlign :'center'}}> Your Booking Report of the month :{month}</Type>
        </ThemeProvider>
        </div>
        <div>

        <ThemeProvider theme = {theme}>
          <Type variant="h6" sx={{
            backgroundColor: "#bdbdbd",
            textAlign :'center'}}> Total Number of Bookings made in the past month : {monthlyData.length}</Type>


        </ThemeProvider>
        </div>

                <div style={{marginBottom:10}}>
        <ThemeProvider theme = {theme} >
          <Type variant="h6" sx={{
            backgroundColor: "#bdbdbd",
            textAlign :'center'}}> Total Number of Hours you travelled in the {month} month  : {count}</Type>


        </ThemeProvider>
        </div>
        </Container>


        <Buttons style={{marginBottom :9,marginTop:10, position:'relative'}}>
        <Button  color="secondary" variant="contained"  component={Link} to={`/getBookingDetails`}>Go to Booking Details</Button> {/* change it to user.id to use JSON Server */}
        </Buttons>
        </div>
      </Cards>
  )
}

export default ReportGeneration