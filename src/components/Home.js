import { Box, Button, ButtonGroup, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useRef, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';

export default function Home() {
  const [text, settext] = useState('');
  const [copied, setcopied] = useState(false)
  const valueref = useRef();
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const notify = () => {
    console.log("toast called")
    toast("Wow so easy!");}
  const format = () => {

    settext(JSON.stringify(JSON.parse(text), null, '\t'))

  }
  const cleartext = () => {

    settext('')

  }
  const copytext = () => {
    settext(JSON.stringify(JSON.parse(text), null, '\t'))
  }
  return (
    <div>
      <Stack> 
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button
            onClick={() => {
              format()
            }}
          >
            format
          </Button>
          <ToastContainer />
         
          <CopyToClipboard text={text}
       onCopy={()=>{notify()}}>
          <Button>copy</Button>
        </CopyToClipboard>
          <Button
           onClick={() => {
            cleartext()
          }}>clear</Button>
        </ButtonGroup>
       
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          value={text}
          // sx={{width:1,height:1}}
          variant="filled"
          rowsmax={4} rows={4}
          //</Stack>style = {{width: 1}}
          inputProps={{
            style: {
              height: window.innerHeight,
            },
          }}
          onChange={(text) => settext(text.target.value)}
          ref={valueref}
          multiline={true}
        >

        </TextField>


      </Stack>
    </div>
  )
}
