import { Box, Typography, Paper } from "@mui/material";
import React from "react"

const Invite = () => {
    return (
        <Box>
            <Paper style={{ width: "90%", borderRadius: "5px" }}>
                <h5 style={{ padding: "4%", borderBottom: "1px solid lightgrey", fontSize: "0.8rem" }}>Invite Family & Friends</h5>
                <Typography style={{ padding: "4%", borderBottom: "1px solid lightgrey", fontSize: "0.7rem", color: "black" }}>Invite your family and friends to join My Stories Matter so that you can share and enjoy memories together.</Typography>
                <a href="##" style={{ padding: "4%", color: "#3e7e9f", fontSize: "0.6rem", fontWeight: "bold" }}>Invite family & friends now</a></Paper>
        </Box>
    );
}
export default Invite;