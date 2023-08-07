import React from 'react'
import Layout from '../components/Layout/Layout'
import {Box,Typography} from '@mui/material';

const About = () => {
  return (
<Layout>
   <Box sx={{my:15, 
   textAlign: "center",
   p:2,
   "& h4":{
    fontWeight: 'bold',
    my:2,
    fontSize: "2rem",
   },
   "& p":{
    textAlign: "justify",
   },
   "@media (max-width:600px)":{
    mt:0,
   }
   }}>
   <Typography variant='h4'>
    Welcome to my Restaurant
   </Typography>
   <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni similique impedit molestias dolore repudiandae illum quas cum voluptatum nesciunt nisi.lorem
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni similique impedit molestias dolore repudiandae illum quas cum voluptatum nesciunt nisi.lorem
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni similique impedit molestias dolore repudiandae illum quas cum voluptatum nesciunt nisi.lorem
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni similique impedit molestias dolore repudiandae illum quas cum voluptatum nesciunt nisi.lorem
   </p>
   <br />
   <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab distinctio temporibus molestias, tenetur sapiente autem at molestiae ullam! Asperiores, exercitationem rerum eligendi a quo ducimus libero consequatur nemo quibusdam, hic explicabo maxime veniam totam nihil. Maxime veritatis aperiam tempora tenetur. Expedita non molestiae nobis culpa doloribus voluptatibus saepe aperiam nulla ipsa optio, ipsam nam corporis fuga, nihil eius excepturi facere vero earum, sit commodi? Odit beatae cum, eum nulla ullam, minima ad sequi quam perspiciatis cumque dolor iusto voluptatum iure voluptatem itaque tenetur, natus iste doloremque pariatur blanditiis rerum ab. Tenetur optio quasi maiores fuga quo voluptatem eum enim quidem.
   </p>

   </Box>
    </Layout>
  )
}

export default About