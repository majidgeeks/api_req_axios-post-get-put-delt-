import React, {useState} from "react";
import { Button } from "@mui/material";
import { deletePost } from "../api/PostApi";

const MyCard = ({ apiData, getCurrentPosts, getUpdateElem }) => {
   
   const handleDelete = async(id) => {
    try{

        const res = await deletePost(id);
        if(res.status === 200){
           const updatedPosts = apiData.filter((curPost) => curPost.id !== id);
        //    console.log("updatedPosts",updatedPosts)
           getCurrentPosts(updatedPosts)
        }else{
          console.log("failed to delete the Post", res.status)
        }
    }catch(error){
        console.log("error catch in deletePost",error);
    }
   };

   const handleUpdatePost = (curElm) => 
    getUpdateElem(curElm)
   }

   React.useEffect(() => {

   },[])

//    console.log('apiData in my card',apiData)
  return (
    <div
      className="flex flex-wrap justify-center gap-1"
      style={{
        backgroundColor: 'GrayText',      
      }}
    >
      {apiData?.map((item) => {
        return (
          <div
           className="bg-white border-2 border-black rounded-lg p-3 flex flex-col justify-between w-full sm:w-[48%] md:w-[31%] lg:w-[23%]"
            key={item.id}
          >
            <div className="flex-grow">
            <p className="font-bold">{item.id}</p>
            <h3 className="text-xs sm:text-base">{item.title}</h3>
            <h6 className="text-xs sm:text-base">{item.body}</h6>
            </div>
            <div className="flex justify-evenly mt-3">
            {/* <Button variant="outlined" style={{}}>Post</Button> */}
            <Button variant="outlined"
             onClick={() => handleUpdatePost(item)}>Edit</Button>
            <Button variant="outlined" onClick={() => handleDelete(item.id)}>Delete</Button>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default MyCard;
