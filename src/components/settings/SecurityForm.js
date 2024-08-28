import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

export default function SecurityForm() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log({ currentPassword, newPassword });
    // TODO: Implement password change logic
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <Typography
        variant="h6"
        gutterBottom
      >
        Change Password
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        name="currentPassword"
        label="Current Password"
        type="password"
        id="currentPassword"
        autoComplete="current-password"
        value={currentPassword}
        onChange={e => setCurrentPassword(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="newPassword"
        label="New Password"
        type="password"
        id="newPassword"
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirm New Password"
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Change Password
      </Button>
    </Box>
  );
}
