import { Box, Button, Grid, Typography } from "@mui/material";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";

const ServiceCardExcerpt = ({ img, heading, type = "medicines" }) => {
	const navigate = useNavigate();

	const toCapitalize = (str) => {
		if (typeof str !== "string") {
			return "";
		}

		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	return (
		<Box
			width="100%"
			component="article"
			height="180px"
			sx={{
				backgroundImage: `url(${img})`,
				backgroundSize: "cover",
			}}
			borderRadius="12px"
			padding={2}
		>
			<Grid container columnSpacing={2} height="100%">
				<Grid
					item
					xs={9}
					display="flex"
					flexDirection="column"
					justifyContent="space-between"
				>
					<Box>
						<Typography component="h5" variant="h5" fontWeight={500} color="#003f74">
							{heading}
						</Typography>
					</Box>
					<Typography component="p" variant="body1">
						<Link
							to={`/${type}`}
							style={{
								display: "flex",
								columnGap: "6px",
								alignItems: "center",
								color: "#46556c",
							}}
						>
							<span>View {toCapitalize(type)}</span>
							<IconArrowNarrowRight className="arrow-animation" />
						</Link>
					</Typography>
				</Grid>
				<Grid item xs={3} display="flex" justifyContent="end" alignItems="start">
					<Button
						color="primary"
						variant="contained"
						disableElevation
						size="small"
						sx={{ py: 2, color: "white" }}
						onClick={() => navigate(`/${type}`)}
					>
						{type === "medicines" ? "Apply" : type === "donate" ? "Donate" : "View"}
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ServiceCardExcerpt;
