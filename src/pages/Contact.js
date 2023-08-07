import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Typography} from '@mui/material';
import {Paper} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Contact = () => {
  return (
    <Layout>
    
    <Box sx={{ my:5, ml:10, "& h4": {fontWeight: "bold", mb: 2}}}>
      <Typography>Contact my restaurant</Typography>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias consequatur illo in adipisci aspernatur vitae magnam, neque laudantium quae.</p>
    </Box>
    <Box sx={{m:3, width: "600px", ml:10, "@media (max-width:600px)":{
      width: '300px'
    }}}>
      <TableContainer component={Paper}>
      <Table aria-label='contact table'>
      <TableHead>
        <TableRow>
          <TableCell sx={{bgcolor:"black", color:"white"}} align='center'>Contact Details</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            <SupportAgentIcon sx={{color: "red", pt:"1"}}/>123456789(toll free)
          </TableCell>
          

        </TableRow>
        <TableRow>
        <TableCell>
            <EmailIcon sx={{color: "skyblue", pt:"1"}}/>helpDesk@gmail.com
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <AddIcCallIcon sx={{color: "skyblue", pt:"1"}}/>helpDesk@gmail.com
          </TableCell>
        </TableRow>
      </TableBody>

      </Table>

      </TableContainer>
    </Box>
    </Layout>
  )
}

export default Contact