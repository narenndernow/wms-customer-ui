
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import type { Product } from "../types/Product";
import { useCart } from "../context/CartContext";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        height="180"
        image={product.imageUrl}
        alt={product.name}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{product.name}</Typography>

        <Typography color="text.secondary">
          {product.category}
        </Typography>

        <Typography variant="h6" color="primary">
          ${product.price.toFixed(2)}
        </Typography>

        <Typography variant="body2">
          {product.quantity > 0
            ? `${product.quantity} in stock`
            : "Out of stock"}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          fullWidth
          disabled={product.quantity === 0}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
