import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Box, Typography, Checkbox, FormGroup } from '@mui/material';
import { Link } from 'react-router-dom';



export default function CallRating({ blobUrl }) {

  const ratingElements = [
    { name: 'solved', title: 'Was the issue solved?', type: 'radio', options: [
      { label: 'Solved', value: 'solved' },
      { label: 'Not solved', value: 'not_solved' },
    ]},
    { name: 'attended_service', title: 'Product ID / attended service', type: 'radio', options: [
      { label: 'Service - account error', value: 'account_error' },
      { label: 'Service - shipping problem', value: 'service_shipping' },
      { label: 'Product - arrived damaged', value: 'arrived_damaged' },
    ]},
    { name: 'call_user', title: 'Select the elements that apply with this call user', type: 'check', options: [
      { label: 'User - annoying', value: 'annoying' },
      { label: 'User - happy', value: 'happy' },
      { label: 'User - impatient', value: 'impatient' },
      { label: 'User - calm', value: 'calm' },
      { label: 'User - loyal', value: 'loyal' },
    ]},
    { name: 'strategies', title: 'Select the strategies used to help this user', type: 'check', options: [
      { label: 'Internet search', value: 'internet_search' },
      { label: 'Company documentation search', value: 'documentation_search' },
      { label: 'Search in previously solved problems', value: 'previous_problem_search' },
    ]},
    { name: 'call_quality', title: 'How was the call quality within Amazon RSH services?', type: 'radio', options: [
      { label: 'High', value: 'high' },
      { label: 'Medium', value: 'medium' },
      { label: 'Low', value: 'low' },
    ]},
    { name: 'problems', title: 'In case the quality was medium or low, select the problems that arose in the system', type: 'check', options: [
      { label: 'Quality issue bercause of element in the recording not working', value: 'element_not_working' },
      { label: 'Quality issue due to system hang during call', value: 'system_hang' },
    ]},
    { name: 'video_review', title: 'Should the video be sent for review', type: 'radio', options: [
      { label: 'To review', value: 'to_review' },
      { label: 'Not to review', value: 'not_to_review' },
    ]},
    { name: 'reasons', title: 'Reasons for review', type: 'check', options: [
      { label: 'Review beecause of personal information on the video', value: 'personal_information' },
      { label: 'Review to delete because it doesn\'t contain relevant information', value: 'no_revelant_info' },
    ]},
  ];
  
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Rate call
      </Typography>
      {
        ratingElements.map(element => {
          return (
            <Box component="div">
              <FormControl>
                <FormLabel>{element.title}</FormLabel>
                { element.type === 'radio' &&
                  <RadioGroup name={element.label} row>
                    {element.options.map(option => (
                      <FormControlLabel value={option.value} control={<Radio />} label={option.label} />
                    ))}
                  </RadioGroup>
                }
                { element.type === 'check' &&
                  <FormGroup name={element.label} row>
                    {element.options.map(option => (
                      <FormControlLabel value={option.value} control={<Checkbox />} label={option.label} />
                    ))}
                  </FormGroup>
                }                
              </FormControl>
            </Box>
          )
        })  
      }
      <Box component="div">
        <video src={ blobUrl } controls autoPlay loop />
      </Box>
      <Box component="div" mt={4}>
        <Link to="/">
          <Button variant="outlined">Close ticket</Button>
        </Link>
      </Box>
    </>
  );
}