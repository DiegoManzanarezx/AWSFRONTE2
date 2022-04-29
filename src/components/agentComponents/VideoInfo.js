import React from 'react'
import { Box, Chip, Typography } from '@mui/material'

export const VideoInfo = () => {

  const tags = ["Solved", "To review", "Annoying user", "Impatient user", "Internet search", "Medium quality", "Search in previously solved problems", "Account error service", "Personal information within the video", "Review because of element in the recording not working"];
  
  return (
    <>
      <Typography variant="h5" mb={3}>Video information</Typography>
      <Typography variant='button' style={{display: 'block'}}>Date</Typography>
      <Typography variant='body2' style={{display: 'block'}} gutterBottom>26/04/22</Typography>

      <Typography variant='button' style={{display: 'block'}}>Agent ID</Typography>
      <Typography variant='body2' style={{display: 'block'}} gutterBottom>21453</Typography>

      <Typography variant='button' style={{display: 'block'}}>Length</Typography>
      <Typography variant='body2' style={{display: 'block'}} mb={4}>20 minutes</Typography>

      <Typography variant='button' style={{display: 'block'}}>User ID</Typography>
      <Typography variant='body2' style={{display: 'block'}} gutterBottom>65433</Typography>

      <Typography variant='button' style={{display: 'block'}}>User Name</Typography>
      <Typography variant='body2' style={{display: 'block'}} gutterBottom>Karen Macías</Typography>

      <Typography variant='button' style={{display: 'block'}}>Requested service</Typography>
      <Typography variant='body2' style={{display: 'block'}} mb={4}>Account support</Typography>
        
      <Typography variant="h7" gutterBottom sx={{ fontWeight: 'bold' }}>Related Tags</Typography>
      <Box sx={{ lineHeight: '45px', marginTop: '10px'}}>
        {tags.map(tag => (
          <Box sx={{ display: 'inline'}} mr ={1}>
            <Chip label={tag} variant="outlined" sx={{backgroundColor:"#edf2fb" }} />
          </Box>   
        ))}
      </Box>
    </>
  )
}
