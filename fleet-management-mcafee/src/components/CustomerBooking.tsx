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
  FormControlLabel,
  Modal
} from "@mui/material";
import {  alpha } from '@mui/material/styles';
import moment from "moment";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { addBookingDetails } from "../service/apiservice";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Type = styled(Typography)`
  margin-right: 40px;
  margin-left: 60px;
`;

const Cards = styled(Card)`
  margin-top: 5px;
  margin-left: 50px;
  margin-right: 50px;
`;

const Container = styled(FormGroup)`
width :50%;
margin:1% auto 0 auto;
 & > div {
    margin-top :20px;
 }
 `;

const theme = createTheme({
  typography: {
    h4: {
      fontStyle: "italic",
      fontFamily: "Monospace",
    },
  },
});

const initialValue ={
  phoneNo:'',
  AadharNo:'',
  date:"",
  pickup:"",
  pickupAddress:'',
  destinationAddress:'',
  duration : 0
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function CustomerBooking() {
  const [customerUser, setcustomerUser] = useState(initialValue);
  const navigate = useNavigate();   

    const onChangeValue = (e:any) => {
      setcustomerUser({ ...customerUser, [e.target.name]: e.target.value });
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const addCustomerDetails =async ()=>{
      console.log(customerUser.date)
      await addBookingDetails(customerUser);
      navigate('/getBookingDetails')
      
    } 

    const [value, setValue] = useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <Cards sx={{  backgroundColor: "#ffccbc" }}>
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
          Book your Cab!!
        </Type>
      </ThemeProvider>

      <Container>
        <div>
        <a href='/' style={{marginTop : 12, float :'left'}}> Go Back</a> 
           <ThemeProvider theme = {theme}>   
          <Type variant="h4" sx={{backgroundColor: "#bdbdbd", textAlign :'center'}}>  Enter your Details</Type>
      </ThemeProvider>

      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      </div>

      <FormControl>
            <label htmlFor="phn">Mobile Number</label>
            <Input
              name="phoneNo" id="phn"
              onChange={(event) => onChangeValue(event)}
            />
          </FormControl>
         
          <FormControl>
               <label htmlFor="gov">{value=== 'a' ? 'Aadhar Number':'Passport Number'}</label>
              <div>
                <Radio  checked={value === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }}/>
                <Radio checked={value === 'b'}  onChange={handleChange} value="b" name="radio-buttons" inputProps={{ 'aria-label': 'B' }}/>
               </div>
             <Input id="gov" name={value === 'a' ?  'AadharNo' :'passportNo'} onChange={(event) => onChangeValue(event)}/>          
          </FormControl>


          <FormControl>
          <label htmlFor ="date">Date</label>
            <Input type="date" name="date" id ="date"onChange={(event) => onChangeValue(event)} />
          </FormControl>
  
          <FormControl>
            <label htmlFor ="pickuptime">pick up Time</label>
            <Input type ="time" name="pickup" id="pickuptime" onChange={(event) => onChangeValue(event)} />
          </FormControl>
          <FormControl>
            <label htmlFor="picadd">Pickup Address</label>
            <Input name="pickupAddress"  id= "picadd" onChange={(event) => onChangeValue(event)} />
          </FormControl>
          <FormControl variant="outlined">
            <label htmlFor='destadd'>Destination Address</label>
            <Input
              name="destinationAddress" id='destadd'
              onChange={(event) => onChangeValue(event)}
            />
          </FormControl>
        
          <FormControl>
            <label htmlFor="duration">No of Days</label>
            <Input name="duration"  id="duration" onChange={(event) => onChangeValue(event)}
             />
          </FormControl>
          <FormControl>
          </FormControl>
          <FormControl>
            <Button
              variant="contained"
              onClick={() => addCustomerDetails()} >
              Submit
            </Button>
          </FormControl>
      </Container>
    </Cards>
  )
}

export default CustomerBooking;