import axios from 'axios';

const URL ="http://localhost:5000";
export const addCabUser = async(data)=>{
    try {
        console.log('jlhguy')
        return await axios.post(`${URL}/inductcars`,data)
        
    } catch (error) {
        console.log(error)
        
    }
}


export const addBookingDetails = async(data)=>{
    try {
        return await axios.post(`${URL}/addBooking`,data)
        
    } catch (error) {
        console.log(error)
        
    }
}



export const getBookingDetails = async () =>{
    try {
       return await axios.get(`${URL}/getBookingDetails`);
    } catch (error) {
        console.log(error)
    }
}

export const getUserById = async () =>{
    try {
       return await axios.get(`${URL}/get`);
    } catch (error) {
        console.log(error)
    }
}


export const deleteBookings = async (id) => {
    return await axios.delete(`${URL}/cancelBooking/${id}`);
}