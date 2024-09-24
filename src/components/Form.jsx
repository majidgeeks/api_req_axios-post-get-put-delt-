import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";


const Form = ({getPostAdded, updatePost}) => {
    
  const [title, setTitle] = useState("");
  const [descsript, setDescript] = useState("");

    const handleSubmit = () => {
        const postAddedData = {
            title : title,
            body : descsript
        };
        getPostAdded(postAddedData);
        // console.log("postAddedData in form",postAddedData)
        setTitle('');
        setDescript('');
    }

    console.log("updatePost elem in form",updatePost.body);

    useEffect(() => {
      if(updatePost){
        setTitle(updatePost.title);
        setDescript(updatePost.body);
      }else{
        setTitle('');
        setDescript('');
      }
    },[updatePost]);

  return (
    <div className=" flex w-full ">
      <div className="flex mb-2 w-full justify-center items-center ">
        <TextField
          sx={{marginRight:2}}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="outlined-basic"
          label="title"
          variant="outlined"
        />
        <TextField
          value={descsript}
          onChange={(e) => setDescript(e.target.value)}
          id="outlined-basic"
          label="Description"
          variant="outlined"
        />
        <Button onClick={handleSubmit} className="ml-2" sx={{marginLeft:2}}>Submit</Button>
      </div>
    </div>
  );
};

export default Form;
