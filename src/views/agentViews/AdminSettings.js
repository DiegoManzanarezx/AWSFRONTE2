import * as React from 'react';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import { Container,Switch, FormControlLabel, Typography, Box, TextField, ToggleButton, ToggleButtonGroup} from '@mui/material';

function AdminSettings() {

  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  return (
    <>
    <Typography variant="h3" gutterBottom>
      Recording settings
    </Typography>
    <Typography variant="h6">
      Version
    </Typography>
    <Typography variant="body2">
      2
    </Typography>
    <Typography variant="h6">
      ClientID
    </Typography>
    <Typography variant="body2">
      1200
    </Typography>
    <Typography variant="h6">
      Minimum call time
    </Typography>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <TextField label="Minutes" color="primary" focused />
    </Box>
    <Typography variant="h6">
      Survey for the agent
    </Typography>

    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="yes">Enabled</ToggleButton>
      <ToggleButton value="no">Disabled</ToggleButton>
    </ToggleButtonGroup>

    <Box>
      <FormControlLabel
        sx={{
          display: 'block',
        }}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="Loading"
      />
      <LoadingButton
        size="small"
        onClick={handleClick}
        endIcon={<SaveIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
      >
        Save
      </LoadingButton>
    </Box>
  </>
  );
}

export default AdminSettings;
