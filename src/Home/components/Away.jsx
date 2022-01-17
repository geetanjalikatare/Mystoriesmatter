import { Box, Typography, Paper, Grid } from "@mui/material";
import React from "react"

const Away = () => {
    return (
        <Box style={{marginBottom:"10%"}}>
            <Paper style={{ width: "90%", color: "white", borderRadius: "7px", backgroundImage: "url(https://mystoriesmatter.com/sites/mystoriesmatter.com/default/files//instance_files/while_u_were_away_bg/external-cue-logo-12824.png)",padding:"1%" }}>
                <Typography style={{fontSize:"0.9rem",fontWeight:"bold",padding:"4%"}}>
                    While you were away
                </Typography>
                <Grid container style={{textAlign:"center"}}>
                    <Grid item style={{padding:"1%"}}>
                        <h2>0</h2>
                        <Typography style={{ fontSize: "0.7rem" ,paddingRight:"1%"  }}>New posts</Typography>
                    </Grid>
                    <Grid item style={{padding:"1%"}}>
                        <h2>0</h2>
                        <Typography style={{ fontSize: "0.7rem" ,paddingRight:"1%"  }}>New comments</Typography>
                    </Grid>
                    <Grid item style={{padding:"1%"}}>
                        <h2>0</h2>
                        <Typography style={{ fontSize: "0.7rem" ,paddingRight:"1%"  }}>New likes</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}
export default Away;