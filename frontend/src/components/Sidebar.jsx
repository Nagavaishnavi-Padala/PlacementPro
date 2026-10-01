import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Box
      sx={{
        width: 220,
        minHeight: "calc(100vh - 64px)",
        p: 2,
        borderRight: "1px solid #ddd",
      }}
    >
      <Button fullWidth component={Link} to="/">
        Home
      </Button>

      <Button fullWidth component={Link} to="/dashboard">
        Dashboard
      </Button>
    </Box>
  );
}

export default Sidebar;
