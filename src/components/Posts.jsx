import React, { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";
import BasicCard from "./BasicCard";
import MyCard from "./MyCard";

const Posts = () => {
  const [apiData, setApiData] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    console.log("res", res.data);
    setApiData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  console.log("apidata in posts", apiData);
  return( 
    <div >
        {/* <BasicCard apiData={apiData} /> */}
        <MyCard apiData={apiData}/>

    </div>
  )
};

export default Posts;
