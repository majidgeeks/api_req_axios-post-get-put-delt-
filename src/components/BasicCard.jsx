import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

export default function BasicCard({ apiData }) {
  console.log("apiData in basic card", apiData);

  // const myMap = () => {
  //   const setData = apiData.map((item) => item )
  //   console.log("setData",setData);
  // }

  React.useEffect(() => {}, []);

  return (
    
    <Card  sx={{display:'flex', width:'100%', flexWrap:"wrap" }}>
    {apiData?.map((item) => {
      return (
      
      <CardContent key={item.id} style={{width:'100%',  }}>
        <div style={{backgroundColor:'red', width: 309, padding: 20}}>
            <Typography  gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {item.id}
        </Typography>
        <Typography variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2">
          {item.body}
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
        </div>
        </CardContent>
        
          )
        })}
        
        </Card>
      
  );
}
