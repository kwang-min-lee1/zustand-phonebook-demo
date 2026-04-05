import React from 'react'
import { TextField, Box, Button } from '@mui/material'
import { useState } from 'react'

const ContactForm = () => {
    const {name, setName} = useState('')
    const {phoneNumber, setPhoneNumber} = useState('')
    const handleAddContact=()=>{
        // 연락처 저장 장소 배열 phoneBook=[]
        // 연락처를 추가
    }

  return (
    <Box display='flex' flexDirection="column" alignItems="center" gap={2}>
        <TextField id="name" label="이름" variant="outlined"  value={name} onChange={(e)=>setName(e.target.value)}/>
        <TextField id="phone-number" label="전화번호" variant="outlined" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
        <Button variant="contained" size="large" onClick={handleAddContact}>추가</Button>
    </Box>
  )
}

export default ContactForm