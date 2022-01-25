import { Box, Grid } from "@mui/material";
import React from "react";

export default function StandardImageList({ data }) {
  let xs="";
  let height="";
  if(data.length>=3){
xs=4;
height="200px"
  }
  else if(data.length===2){
    xs=6;
    height="250px"
  }
  else{
    xs=12;
  height="300px"  }
  return (
    <Grid container spacing={2} style={{position:"relative"}}>
      {
        data.map((item, index) => {
          if (index + 1 < 3) {
            return (
              <Grid item xs={xs} >
                <Box style={{ backgroundImage: `url(${item.thumbnail_large_url})`, height: height, width: "100%", display: "inline-block", overflow: "hidden", backgroundPosition: "center", backgroundSize: data.length===1?"contain":"cover",backgroundRepeat:"no-repeat", borderRadius: "6px",zIndex:"1",}}>
                </Box>
              </Grid>
            )
          }
          else if(index+1===3){
            return (
              <Grid item xs={xs}>
                <Box style={{backgroundColor:"black",borderRadius: "6px",height: height,}}>
              <Box style={{ backgroundImage: `url(${item.thumbnail_large_url})`, height: height, width: "100%", display: "inline-block", overflow: "hidden", backgroundPosition: "center", backgroundSize: "cover", borderRadius: "6px",opacity:"0.5" }}>
              </Box></Box>
              { data.length > 3 && <p style={{
              position: "absolute",
              right: "10%",
              bottom: "25%",
              color:"white"
            }}>+{data.length - 2} more</p>
          }
            </Grid>)
          }
        })
      }
    </Grid>
  )





}

// import React from "react";

// export default function StandardImageList({ data }) {
//   var width = "";
//   if (data.length === 1) width = "97%";
//   else if (data.length === 2) width = "45%";
//   else width = "30%";
//   return (
//     <div style={{ position: "relative" }}>
//       {data.map((item, index) => {
//         if (index + 1 < 3) {
//           return (
//             <>
//               <img
//                 height="auto"
//                 width="30%"
//                 key={index}
//                 src={item.url}
//                 alt={item.file_title}
//                 style={{
//                   borderRadius: "10px",
//                   marginLeft: "10px",
//                 }}
//               ></img>


//             </>
//           );
//         }
//         else if (index + 1 === 3) {
//           return(
//             <div style={{backgroundColor:"black",display:"inline"}}>
//              <img
//             height="auto"
//             width="30%"
//             key={index}
//             src={item.url}
//             alt={item.file_title}
//             style={{
//               //tintColor: "black",
//               opacity: "0.5",
//               borderRadius: "10px",
//               marginLeft: "10px",
//             }}
//           ></img>
//           {
//             data.length > 3 && <p style={{
//               position: "absolute",
//               right: "15%",
//               bottom: "25%"
//             }}>+{data.length - 2} more</p>
//           }
//         </div>
//           )}})}
//           <div style={{backgroundImage:"url(https://cueback-com.storage.googleapis.com/cueback/mystory/thumbs/thumb-%40700-14812.jpg?GoogleAccessId=298180869348-compute@developer.gserviceaccount.com&Expires=1643183284&Signature=fHfJjO8WPDk0cYzGVAVJmpfBdNwjJMrlx2xhtfWNRtqCnpTTSmVhYmjG2cn8quZrafsPnX%2FRy0WhSEEjYRN%2Bao6Nxu2QVOQjG30UVi0cljNHhbIKxRX4EMcTW0%2FnyFqkTGKfFqS0%2BtTuxxVquaONfiChIdNSZ%2B5D9K00b5iySLdgLlVlbEV90aRaxgnQ9aFxV7%2FI6u3p31WcEd8iyaARbjGa4%2FJKc6lUZIh36XvuM7f7LptW8qyHprU92OxHDW3E3ONk1rALg0bqGrH195LV5XkaFa7WKnmWd2aIP2W94FoAcx%2BmvKYm%2FRiRyRhkZxopBQmlBnCBTT1nkwqzyF1FqQ%3D%3D)",width:"500px",height:"800px",overflow:"hidden",opacity:"0.5",backgroundSize:"cover",backgroundPosition:"center center"}}>

//           </div>
//     </div>
//   );
// }