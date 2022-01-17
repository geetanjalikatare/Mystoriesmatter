import { Box, Grid } from "@mui/material";
import React from "react"
import Away from "./Away";
import Cue from "./Cue";
import Invite from "./Invite";
import MemoryDraft from "./MemoryDraft";
import PromptOfDay from "./PromptOfDay";


const Index = () => {
    return (
        <Grid container style={{ width: "100%", marginTop: "8%" }} spacing={3}>
            <Grid item xs={12} md={4} style={{paddingBottom:"5%"}}><Away />
                <PromptOfDay />
            </Grid>
            <Grid item xs={12} md={4}><Cue /></Grid>
            <Grid item xs={12} md={4}><MemoryDraft /><Invite /></Grid>

        </Grid>

    )
}
export default Index;