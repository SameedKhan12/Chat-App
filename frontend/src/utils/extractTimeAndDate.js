import { useState } from "react";

function extractTimeAndDate(createdAt) {
    // Check if the createdAt field is provided
    const [date,setDate] = useState(Date)
    const [time,setTime] = useState()
    if (createdAt) {
       // Convert the createdAt field to a JavaScript Date object
       const dateObject = new Date(createdAt);
   
       // Format the date and time
       const formattedDate = dateObject.toLocaleDateString();
       const formattedTime = dateObject.toLocaleTimeString();
   
       return {
         date: formattedDate,
         time: formattedTime
       };
    } else {
       throw new Error('No createdAt field provided');
    }
   }
   
   // Export the function for use in other modules
export default extractTimeAndDate