import cabusers from "../Schema/cabScheme.js";
import customerusers from '../Schema/customerSchema.js'
import  Dates from 'date-and-time';
import moment from 'moment'

export const addCabUser =async(req,res)=>{
    const user= req.body;
    const newUser = new cabusers(user);
    console.log(user)

    try {
        console.log(newUser)
        await newUser.save();
        res.status(201).json(newUser);
        
    } catch (error) {
        res.status(409).json({message : error.message})
        
    }
}


export const addBookingUser =async(req,res)=>{
    const user= req.body;
    const newUser = new customerusers(user);

    try {
        newUser.duration =(newUser.duration)*24
        let newdate=new Date(newUser.date)
        newUser.date =Dates.format(newdate,'YYYY/MM/DD')
        console.log(moment(newdate).format('L'))
        await newUser.save();
        res.status(201).json(newUser);
        
    } catch (error) {
        res.status(409).json({message : error.message})
        
    }
}

export const getBookingDetails = async (req,res) =>{

    try {
      const users =await  customerusers.find({});

      res.status(200).json(users)
        
    } catch (error) {
        res.status(404).json({message : error.message})
        
    }
}
 export const getDetailsMonth =async(req,res)=>{
    const end = moment().startOf('day').toDate(); 
    const start = moment().startOf('day').subtract(30, 'day').toDate();
    // console.log(moment(newdate).format('L'))
    try{

        console.log(start)
        console.log(end)
            const users= await customerusers.find({
                date: {
                  $gte: start,
                  $lte: end,
                }})
            res.status(200).json(users)

    }
    catch(err){
        res.status(404).json({message :err.message})

    }
 }



export const cancelBooking = async (request, response) => {
    try{
        await customerusers.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}


export const searchCabs =async(req,res)=>{
    console.log(req.params.key)
    const query = { $text: { $search: "\"star trek\"" } };
    try{let user = await cabusers.find({
        "$or":[
            {noSeats :req.params.key},
            {Type :req.params.key},
            {bootCapacity :req.params.key},
            {luggageHolder : req.params.key},
        ]
    })
    //res.send(user)
    res.status(200).json(user)
}
catch(err){
    res.status(404).json(err.message)}
}