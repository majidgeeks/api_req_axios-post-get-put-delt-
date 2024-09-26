import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { updateApiPost } from "../api/PostApi";

const Form = ({
  getPostAdded,
  updatePost,
  apiData,
  setApiData,
  setUpdatePost,
}) => {
  const [title, setTitle] = useState("");
  const [descsript, setDescript] = useState("");

  const handleSubmit = () => {
    const postAddedData = {
      title: title,
      body: descsript,
    };
    getPostAdded(postAddedData);
    // console.log("postAddedData in form",postAddedData)
    setTitle("");
    setDescript("");
  };

  const updateExcistingPost = async () => {
    try {
      const newUpdatePost = {
        title: title,
        body: descsript,
      };
      console.log("newUpdatePost", newUpdatePost);
      console.log("updatePost.id", updatePost.id);
      const res = await updateApiPost(updatePost.id, newUpdatePost);
      console.log("res in form after update", res);
      if (res.status === 200) {
        setApiData((previous) => {
          return previous.map((currElm) => {
            return currElm.id === res.data.id ? res.data : currElm;
          });
        });
      }
      setTitle("");
      setDescript("");
      setUpdatePost({});
    } catch (error) {
      console.log("error in catch after update api post", error);
    }
  };
  // console.log("updatePost elem in form",updatePost.body);

  useEffect(() => {
    if (updatePost) {
      setTitle(updatePost.title);
      setDescript(updatePost.body);
    } else {
      setTitle("");
      setDescript("");
    }
  }, [updatePost]);

  // console.log("newUpdate",newUpdate);

  return (
    <div className=" flex w-full ">
      <div className="flex mb-2 w-full justify-center items-center ">
        <TextField
          sx={{ marginRight: 2 }}
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
        <Button
          onClick={updatePost.body ? updateExcistingPost : handleSubmit}
          sx={{ marginLeft: 2, backgroundColor: "#1976d2", color: "white" }}
        >
          {updatePost.body ? <p>Edit</p> : <p>Add</p>}{" "}
        </Button>
      </div>
    </div>
  );
};

export default Form;
