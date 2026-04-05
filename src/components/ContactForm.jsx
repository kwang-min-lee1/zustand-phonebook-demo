import React from "react";
import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import usePhoneBookStore from "../stores/usePhoneBookStore";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { addContact } = usePhoneBookStore();
  //  연락처 저장 장소, 배열 phoneBook=[]
  const handleAddContact = () => {
    if (!name.trim() || !phoneNumber.trim()) return;
    // 연락처를 추가
    addContact(name, phoneNumber);

    setName("");
    setPhoneNumber("");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <TextField
        id="name"
        label="이름"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="phone-number"
        label="전화번호"
        variant="outlined"
        fullWidth
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button variant="contained" size="large" onClick={handleAddContact}>
        추가
      </Button>
    </Box>
  );
};

export default ContactForm;
