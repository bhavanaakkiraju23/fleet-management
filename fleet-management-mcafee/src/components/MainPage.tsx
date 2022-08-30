import {
  createTheme,
  Paper,
  styled,
  ThemeProvider,
  Typography,
  Box,
  Button,
  Avatar,
  CardMedia,
} from "@mui/material";
import Image from "material-ui-image";
import { NavLink } from "react-router-dom";
import Car from '../assets/car1.jpeg'

const theme = createTheme({
  typography: {
    h4: {
      fontStyle: "italic",
      fontFamily: "Monospace",
    },
  },
});

const Type = styled(Typography)`
  margin-right: 40px;
  margin-left: 50px;
`;

const HBox = styled(Box)`
  margin-right: 70px;
  margin-left: 50px;
`;

function MainPage() {
  return (
    <Paper variant="outlined" sx={{ backgroundColor: "#ffebee" }}>
      
      <ThemeProvider theme={theme}>
        <Type
          variant="h4"
          sx={{
            backgroundColor: "#ffcdd2",
            alignItems: "center",
            boxShadow: 1,
            textAlign: "center",
          }}
        >
          Welcome to Smart Car Book !!!!
        </Type>
      </ThemeProvider>

      
      <HBox sx={{ "& button": { m: 1 } ,textAlign :'center'}}>
      <CardMedia component="img" 
        image={Car} sx={{marginTop:1,marginLeft :2,height :700}} />
        <div style={{ alignItems: "center" }}>
          <Button variant="contained" color="error" size="large" >
            <NavLink to ='/inductcars' style={{color :"inherit"}}> Register your Cab </NavLink>
          </Button>
          <Button variant="contained" color="error" size="large">
            <NavLink to='/addCustomers' style={{color :"inherit"}}> Book your Cab </NavLink>
          </Button>
          <Button variant="contained" color="error" size="large">
            <NavLink to='/getBookingDetails' style={{color :"inherit"}}> Your Previous Bookings</NavLink>
          </Button>

          <Button variant="contained" color="error" size="large">
            <NavLink to='/report' style={{color :"inherit"}}> Monthly Report</NavLink>
          </Button>
        </div>
      </HBox>
    </Paper>
  );
}

export default MainPage;
