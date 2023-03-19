import { Box, Divider, Drawer, Typography } from "@mui/material";
import { IconShoppingCart, IconX } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { cartDrawerStatus, closeCart } from "../../features/drawer/drawerSlice";
import { cartItemStatus } from "../../features/cart/cartSlice";
import CartItem from "./CartItem";

export default function CartMedicineSidebar() {
	const dispatch = useDispatch();
	const drawerOpen = useSelector(cartDrawerStatus);
	const cartItems = useSelector(cartItemStatus);

	return (
		<Drawer
			sx={{ zIndex: 9999 }}
			anchor="right"
			open={drawerOpen}
			onClose={() => dispatch(closeCart())}
		>
			<Box sx={{ width: 300, p: "16px" }} role="presentation">
				<Typography
					color="#2c145c"
					display="flex"
					gap={1}
					alignItems="center"
					variant="h5"
					mb={2}
				>
					<IconShoppingCart /> Cart Information
					<IconX
						style={{ marginLeft: "auto", cursor: "pointer" }}
						onClick={() => dispatch(closeCart())}
					/>
				</Typography>
				<Divider />
				<Box>
					{cartItems.length === 0 ? (
						<Typography
							variant="body2"
							sx={{ textAlign: "center", my: 2.5, fontStyle: "italic" }}
						>
							No item available to show.
						</Typography>
					) : (
						cartItems.map((item, i) => <CartItem cartItem={item} key={i} />)
					)}
				</Box>
			</Box>
		</Drawer>
	);
}
