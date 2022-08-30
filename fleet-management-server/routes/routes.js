import express from 'express'
import { addBookingUser, addCabUser,getBookingDetails ,searchCabs,getDetailsMonth,cancelBooking} from '../controller/server-controller.js';
const router = express.Router();
console.log("In route")
router.post('/inductcars',addCabUser);

router.post('/addBooking',addBookingUser);

router.get('/getBookingDetails',getBookingDetails);

router.get('/get',getDetailsMonth);

router.get('/search/:key',searchCabs)
router.delete('/cancelBooking/:id', cancelBooking);

export default router;