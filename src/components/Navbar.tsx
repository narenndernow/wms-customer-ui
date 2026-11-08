
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  IconButton,
  Box,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            color: "white",
            textDecoration: "none",
          }}
        >
          WMS Shop
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button color="inherit" component={RouterLink} to="/">
            Products
          </Button>

          <IconButton
            color="inherit"
            component={RouterLink}
            to="/cart"
            aria-label="Shopping cart"
          >
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
