import { Box, Typography, Paper, Grid,Button } from "@mui/material";
import React,{useState} from "react"

const MemoryDraft = () => {
    const [hover, setHover] = useState(false)

    return (
        <Box style={{width:"100%",marginBottom:"10%"}}>
            <Paper style={{ width: "90%", color: "white", borderRadius: "7px", backgroundImage: "url(https://mystoriesmatter.com/sites/mystoriesmatter.com/default/files//instance_files/home_page_memory_draft_block_bg/external-cue-logo-12825.png)",padding:"5%" }}>
                <Typography style={{fontSize:"0.9rem",fontWeight:"bold"}}>
                Memory Drafts
                </Typography>
                <Grid container style={{textAlign:"center"}}>
                    <Grid item style={{padding:"1%"}} xs={4}>
                        <h2>148</h2>
                        <Typography style={{ fontSize: "0.65rem" ,fontWeight:"bold",paddingRight:"1%"  }}>My Drafts</Typography>
                    </Grid>
                    <Grid item style={{padding:"1%"}} xs={4}>
                        <h2>20</h2>
                        <Typography style={{ fontSize: "0.65rem" ,fontWeight:"bold",paddingRight:"1%"  }}>Collabration Invites(9 New)</Typography>
                    </Grid>
                    <Grid item style={{padding:"1%"}} xs={4}>
                        <h2>4</h2>
                        <Typography style={{ fontSize: "0.65rem" ,fontWeight:"bold"  }}>New Activities</Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper style={{width:"90%",textAlign:"center"}}>
            <Button
                        onMouseEnter={() => setHover(true)}
                        onMouseOut={() => setHover(false)}
                        variant="contained"
                        style={{
                            backgroundColor:hover?"white":" RGB(168, 185, 220)",
                            borderRadius: "20px",
                            border: "2px solid  RGB(168, 185, 220)",
                            color: hover?"RGB(168, 185, 220)": "white",
                            fontSize: "0.7rem",
                            marginTop: "5%",
                            marginBottom: "8%",
                            padding:"1% 20% 1% 20%"
                        }}
                    >
                        Add a Memory
                    </Button>
            </Paper>
        </Box>
    );
}
export default MemoryDraft;