import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";


const Form = () => {
    const [addPost, setAddPost] = useState('');
    const [updatePost, setUpdatePost] = useState('');

//   const handleSubmit = () => {

//   }

    return(
        <div className="m-1">
            <TextField value={addPost} onChange={(e) => setAddPost(e.target.value)} id="outlined-basic" label="Add Post" variant="outlined" />
            <TextField value={updatePost} onChange={(e) => setUpdatePost(e.target.value)} id="outlined-basic" label="Update Post" variant="outlined" />
            <Button >Submit</Button>       
             </div>
    )
};

export default Form;