import { Box, Button, Container, Typography } from "@mui/material";

function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", mt: 12 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          PlacementPro
        </Typography>

        <Typography variant="h5" color="text.secondary" gutterBottom>
          Smart Placement & Internship Management System
        </Typography>

        <Button variant="contained" sx={{ mt: 3 }}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
}

export default Home;