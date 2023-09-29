import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'


const About = () => {
  return (
    <Layout>
      
        <Box sx ={{
          my: 25,
          textAlign: "center",
          p: 2,
          "& h4":{
            fontWeight: "bold",
            my: 2,
          
            
            fontSize: "2rem",
          },
          "& p":{
            textAlign: "justify",
          },
          "media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
            fontSize: "1.5rem",
          },
          },
        }}>
          <Typography variant= "h4"> Welcome To My Resturant
          </Typography>
          <p>
          When visitors go to your website, the first place they go is your landing page. If they have an interest past your landing page, they will probably go to your “About Us” page to learn more.

When a website visitor decides to go to the “About Us” page for your Restaurant business, he or she is on a fact-finding mission, as well as looking for the “story” of your Restaurant business. It’s crucial that your “About Us” page says what goods or services your Restaurant business provides.

          </p>
          <br/>
          <p>
          When visitors go to your website, the first place they go is your landing page. If they have an interest past your landing page, they will probably go to your “About Us” page to learn more.

When a website visitor decides to go to the “About Us” page for your Restaurant business, he or she is on a fact-finding mission, as well as looking for the “story” of your Restaurant business. It’s crucial that your “About Us” page says what goods or services your Restaurant business provides.
          </p>
        </Box>
       
    </Layout>
  )
}

export default About