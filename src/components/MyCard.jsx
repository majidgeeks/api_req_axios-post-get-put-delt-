import * as React from "react";
import { Button } from "@mui/material";

const MyCard = ({ apiData }) => {
  return (
    <div
    //   className="bg-black"
      style={{
        width: "100%",
        backgroundColor: 'GrayText',
        display: "flex",
        flexWrap: "wrap",
    
      }}
    >
      {apiData?.map((item) => {
        return (
          <div
            className="sm:w-80"
            key={item.id}
            style={{
              backgroundColor: "white",
              width: "30%",
              height:278,
              borderWidth: 2,
              borderColor:'black',
              justifyContent: "space-around",
              alignItems: 'center',
              margin:5,
            //   objectFit:'cover',
              padding:5,
              borderRadius:20,

            }}
          >
            <p className="font-bold">{item.id}</p>
            <h3>{item.title}</h3>
            <h6>{item.body}</h6>
            <div style={{display:'flex', justifyContent:'space-evenly',  }}>
            <Button variant="outlined" style={{}}>Post</Button>
            <Button variant="outlined">Edit</Button>
            <Button variant="outlined">Delete</Button>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default MyCard;
