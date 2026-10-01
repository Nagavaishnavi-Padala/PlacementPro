import { Container, Typography, TextField, Button, Stack } from "@mui/material";

function Signup() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Create Account
      </Typography>

      <Stack spacing={2}>
        <TextField label="Name" fullWidth />
        <TextField label="Email" type="email" fullWidth />
        <TextField label="Password" type="password" fullWidth />
        <Button variant="contained">
          Sign Up
        </Button>
      </Stack>
    </Container>
  );
}

export default Signup;
