import { Container, Typography, TextField, Button, Stack } from "@mui/material";

function Login() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>

      <Stack spacing={2}>
        <TextField label="Email" type="email" fullWidth />
        <TextField label="Password" type="password" fullWidth />
        <Button variant="contained">
          Login
        </Button>
      </Stack>
    </Container>
  );
}

export default Login;
