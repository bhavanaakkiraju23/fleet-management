import {
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow,
    Button,
    styled
  } from "@mui/material";
import { useEffect, useState } from "react";
import { deleteBookings, getBookingDetails } from "../service/apiservice.js";
import moment from 'moment';
  const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

function GetBookingDetails() {
    const [customerUser, setcustomerUser] = useState([]);
    useEffect(() => {
        getAllUsers();
        //buttons();
      }, []);

      const getAllUsers = async () => {
          let response = await getBookingDetails();
          setcustomerUser(response?.data)
      };
      const deleteBooking = async (id:any) => {
        await deleteBookings(id);
            getAllUsers();
      };
  return (
    <StyledTable>
    <TableHead>
    <THead>
            <TableCell>Id</TableCell>
            <TableCell>Phone NUmber</TableCell>
            <TableCell>Aadhar Number</TableCell>
            <TableCell>Passport Number</TableCell>
            <TableCell>Pickup  Time</TableCell>
            <TableCell>PickUp Address</TableCell>
            <TableCell>Destination Address</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Cancel Booking</TableCell>
        </THead>
    </TableHead>
    <TableBody>
    {customerUser.map((user:any) => (
            <TRow>
                <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
                <TableCell>{user.phoneNo}</TableCell>
                {user.AadharNo ?
                <TableCell>{user.AadharNo}</TableCell> : <TableCell>null</TableCell>}
                {user.passportNo ? <TableCell>{user.passportNo}</TableCell> :<TableCell>null</TableCell>}
                
                <TableCell>{user.pickup}</TableCell>
                <TableCell>{user.pickupAddress}</TableCell>
                <TableCell>{user.destinationAddress}</TableCell>
                <TableCell>{user.duration}</TableCell>
                    { moment(user.date).isSameOrAfter(moment())  ?  

                                    <TableCell>
                                    <Button color="secondary" variant="contained" onClick={() => deleteBooking(user._id)}>Cancel</Button> {/* change it to user.id to use JSON Server */}
                                    </TableCell> :
                                    <TableCell>
                                    <Button color="secondary" variant="contained" disabled>Delete</Button> {/* change it to user.id to use JSON Server */}
                                    </TableCell>
                        }
            </TRow>
        ))}
    </TableBody>
</StyledTable>
  )
}

export default GetBookingDetails