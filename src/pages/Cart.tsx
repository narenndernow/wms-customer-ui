
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  IconButton,
  Divider,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Box>
          <Typography sx={{ mb: 2 }}>
            Your cart is empty.
          </Typography>

          <Button component={RouterLink} to="/" variant="contained">
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <Paper sx={{ p: 3 }}>
          {cartItems.map(({ product, quantity }) => (
            <Box key={product.id} sx={{ mb: 2 }}>
              <Typography variant="h6">
                {product.name}
              </Typography>

              <Typography>
                ${product.price.toFixed(2)} each
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Button
                  variant="outlined"
                  disabled={quantity <= 1}
                  onClick={() =>
                    updateQuantity(product.id, quantity - 1)
                  }
                >
                  -
                </Button>

                <Typography>{quantity}</Typography>

                <Button
                  variant="outlined"
                  disabled={quantity >= product.quantity}
                  onClick={() =>
                    updateQuantity(product.id, quantity + 1)
                  }
                >
                  +
                </Button>

                <IconButton
                  color="error"
                  aria-label={`Remove ${product.name}`}
                  onClick={() => removeFromCart(product.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>

              <Typography sx={{ mt: 1 }}>
                Subtotal: ${(product.price * quantity).toFixed(2)}
              </Typography>

              <Divider sx={{ mt: 2 }} />
            </Box>
          ))}

          <Typography variant="h5" sx={{ mt: 3 }}>
            Total: ${cartTotal.toFixed(2)}
          </Typography>

          <Button variant="contained" sx={{ mt: 2 }} disabled>
            Proceed to Checkout (Coming Soon)
          </Button>
        </Paper>
      )}
    </Container>
  );
}
