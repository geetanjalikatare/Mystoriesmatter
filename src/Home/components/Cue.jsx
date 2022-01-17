import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import React, { useState } from "react";

const Cue = () => {
    const [hover, setHover] = useState(false)
    return (
        <Box>
            <Paper style={{ width: "90%", borderRadius: "7px",paddingBottom:"1%" }}>
                <h5 style={{ padding: "4%", borderBottom: "1px solid lightgrey", fontSize: "0.8rem" }}>Cue of the Day</h5>
                <Grid container style={{ fontSize: "0.7rem", padding: "4%" }}>
                    <Grid item xs={6} >
                        <Typography style={{ color: "#3e7e9f", textDecoration: "underline", fontSize: "0.8rem", fontWeight: "bold" }}>Barack Obama Elected President</Typography>
                    </Grid>
                    <Grid item xs={6} style={{ paddingLeft: "15%" }}>
                        Nov 04, 2008
                    </Grid>
                </Grid>
                <img src="https://admin.cueback.com/sites/default/files/Obama_swearing_in.JPG?itok=8JTy3WzT" style={{ width: "100%", height: "200px", paddingTop: "4%", borderRadius: "25px", padding: "4%" }} />
                <Box
                    onMouseEnter={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    style={{
                        borderRadius: "8px",
                        border: "3px solid RGB(100, 156, 124)",
                        backgroundColor: hover ? "white" : "RGB(100, 156, 124)",
                        width: "93%",
                        textAlign: "center",
                        marginLeft: "3%",
                        marginBottom:"2%"
                    }}
                >
                    <Typography
                        style={{
                            color: hover ? "black" : "white",
                            fontSize: "0.9rem"
                        }}
                    >

                        How did you feel when Obama became President?
                    </Typography>
                    <Button
                        onMouseEnter={() => setHover(true)}
                        onMouseOut={() => setHover(false)}
                        variant="contained"
                        style={{
                            backgroundColor: "#6fa888",
                            borderRadius: "20px",
                            border: "2px solid white",
                            color: "white",
                            fontSize: "0.6rem",
                            marginTop: "10%",
                            marginBottom: "5%"
                        }}
                    >
                        Add Your Memory
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}
export default Cue;