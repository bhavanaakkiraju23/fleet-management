import mongoose from "mongoose"



const Connection =async (dbusername,dbpassword) =>{
    const URL =`mongodb+srv://${dbusername}:${dbpassword}@fleetmanagementui.cr0hpsh.mongodb.net/?retryWrites=true&w=majority`
    

try {
  await   mongoose.connect(URL,{useunifiedTopology :true, useNewUrlParser:true})
  console.log('Database is connected sucessfully');
} catch (error) {
    console.log('Error:'  +error)
}
}

export default Connection;