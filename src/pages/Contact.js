import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, TableBody, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
        <Box sx ={{ my: 5, ml: 5, "& h4":{ fontWeight: "bold", mb: 2}}}>
          <Typography variant='h4'>
            Contact My Resturant
          </Typography>
          <p>
          When visitors go to your website, the first place they go is your landing page. If they have an interest past your landing page, they will probably go to your “About Us” page to learn more.

When a website visitor decides to go to the “About Us” page for your Restaurant business, he or she is on a fact-finding mission, as well as looking for the “story” of your Restaurant business. It’s crucial that your “About Us” page says what goods or services your Restaurant business provides.
          </p>

        </Box>
        <Box sx={{ m: 3, width: "600px", ml: 10, 
        "@media (max-width:600px)": {
          width: "300px",
        },
        }}>
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                sx={{bgcolor: "black", color: "white"}}
                align='center'
                >
                  Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                 <SupportAgentIcon sx={{ color: "red", pt: 1}}/> 1800-00-0000 (tollfree)     
                </TableCell>
              </TableRow>
            <TableRow>
            <TableCell>
              <EmailIcon sx={{ color: "skyblue", pt: 1}}/> help@myrest.com
            </TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
              <CallIcon sx={{ color: "green", pt: 1}}/> 1234567890
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