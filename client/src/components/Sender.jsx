import {Box, Button, Grid, TextField, Autocomplete} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import {AuthContext} from "../context/AuthContext.js";
import axios from "../axios.js";

export const Sender = ({form, setForm, name}) => {

    const {exit} = React.useContext(AuthContext)

    const handlerChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }

    const handlerSendClick = async () => {
        try {
            await axios
                .patch('/api/main/send', {...form, from: name}, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
        } catch (e) {
            console.log(e)
        }
    }

    const names = [
        {label: 'Aleksandr'},
        {label: 'Bogdan'},
        {label: 'Ekaterina'},
        {label: 'Elizabeth'},
        {label: 'Jack'},
        {label: 'John'},
        {label: 'Michael'},
        {label: 'Pavel'},
        {label: 'Sergey'},
        {label: 'Rustam'},
    ]

    return(
        <Box
            component="form"
            onSubmit={(e) => e.preventDefault()}
            noValidate
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1
            }}
        >
            <Button
                variant="contained"
                onClick={exit}
            >Exit the messenger</Button>
            <Grid container spacing={1} justifyContent='center' mb={1}>
                <Grid item xs={8} sm={4}>
                    <Autocomplete
                        id="combo-box-demo"
                        name="recipient"
                        onChange={handlerChange}
                        options={names}
                        sx={{
                            width: '100%'
                        }}
                        renderInput={(params) => <TextField{...params} label="Recipient" variant="standard"/>}
                    />
                </Grid>
                <Grid item xs={8} sm={4}>
                    <TextField
                        id="standard-basic"
                        label="Title"
                        name="title"
                        variant="standard"
                        onChange={handlerChange}
                        sx={{
                            width: '100%'
                        }}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        id="standard-multiline-static"
                        name="message"
                        label="Your message"
                        multiline
                        rows={4}
                        variant="standard"
                        onChange={handlerChange}
                        placeholder="Input your message..."
                        sx={{
                            mt: 2,
                            width: '100%'
                        }}
                    />
                </Grid>
            </Grid>
            <Button
                variant="contained"
                endIcon={<SendIcon/>}
                onClick={handlerSendClick}
            >
                Send
            </Button>
        </Box>
    )

}