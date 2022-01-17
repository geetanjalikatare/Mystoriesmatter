import { Box, Typography, Paper, Grid, Button } from "@mui/material";
import React, { useState } from "react"

const PromptOfDay = () => {
    const [hover, setHover] = useState(false)
    return (
        <Box><Paper style={{ width: "90%", borderRadius: "7px", paddingBottom: "1%" }}>
            <Typography style={{ borderBottom: "1px solid lightgrey", fontSize: "0.9rem", fontWeight: "bold", padding: "4%",marginBottom:"4%" }}>
                Prompt of the Day
            </Typography>
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
                    marginBottom: "2%"
                }}
            >
                <Typography
                    style={{
                        color: hover ? "black" : "white",
                        fontSize: "0.9rem"
                    }}
                >

                    What do you want people to remember about you?
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
        </Paper></Box>

    );
}
export default PromptOfDay;