import { Container, Typography } from "@mui/material";

function NotFound() {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h3">
        404
      </Typography>

      <Typography variant="h6">
        Page not found
      </Typography>
    </Container>
  );
}

export default NotFound;
