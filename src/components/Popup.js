import React, { useState } from 'react'
import {Box, Button, Stack} from '@mui/materialS'
import { FaTimes } from 'react-icons/fa'

const Popup = () => {
    const[closeModal, setCloseModal] = useState(false)
    const handleCloseModal = () => {
        setCloseModal(true)
    }

  return (
    <Stack sx={{position:'absolute'}}>
      <Box sx={{textAlign:'center'}}>
       <Typography variant='h4'></Typography>
       <FaTimes/>
      </Box>
    </Stack>
  )
}

export default Popup