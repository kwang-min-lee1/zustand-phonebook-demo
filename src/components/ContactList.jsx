import React, { useState } from "react";
import usePhoneBookStore from "../stores/usePhoneBookStore";
import {Box,Card, CardContent, TextField, Typography} from "@mui/material"

const ContactList = () => {
  const { phoneBook } = usePhoneBookStore();
  const [searchKeyword, setSearchKeyword] = useState("")

  const filteredList = phoneBook.filter((item)=>{
    const keyword = searchKeyword.toLowerCase()
    return(
        item.name.toLowerCase().includes(keyword) ||
        item.phoneNumber.includes(searchKeyword)
    )
  })

  return (
    <Box>
      <TextField
        label="이름 또는 전화번호 검색"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />

      <Box display="flex" flexDirection="column" gap={2} mt={2}>
        {filteredList.length > 0 ? (
          filteredList.map((item) => (
            <Card key={item.id} sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent sx={{padding: 0.5,"&:last-child": {paddingBottom: 0.5,},}}>
                <Typography variant="h6" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.phoneNumber}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1" color="text.secondary">
            검색 결과가 없습니다.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ContactList;
