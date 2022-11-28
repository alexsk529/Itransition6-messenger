import {Box, Paper} from "@mui/material";
import React from "react";

export const Reciever = ({name, msgs}) => {

    return (
        <Box
            sx ={{
                border: 1,
                borderRadius: 2,
                borderColor: 'grey.500',
                boxShadow: 1,
                height: 285,
                width: 400,
                bgcolor: '#fff',
                overflowX: 'hidden',
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                p: 1
            }}
        >
            <Box
                sx={{
                    color: '#bdbdbd',
                    width: '100%',
                    fontSize: 14
                }}
            >
                {`Your messages, ${name}:`}
            </Box>
            {msgs.data ? msgs.data.map( (msg, i) => <Paper
                onClick={(e)=> {
                    const div = document.getElementById(i);
                    const message = document.createElement('div')
                    message.id = i;
                    message.style.margin = "5px 0 0 0"
                    message.innerHTML = `<i>${msg.msg}</i>`
                    if (!div) e.target.append(message);
                    else div.remove()
                }}
                key={msg.date}
                sx={{fontSize: 10, p: 1, width: '95%'}}
                elevation={3}
            ><b>Date: </b>{msg.date} - <b>From: </b>{msg.from} - <b>Title: </b>{msg.title} </Paper>) : null }


        </Box>
    )

}