import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from './FlexBetween';

type Props = {
	title: string;
	sideText: string;
	subtitle?: string;
	icon?: React.ReactNode;
};

const BoxHeader = ({ title, icon, subtitle, sideText }: Props) => {
	const { palette } = useTheme();

	return (
		<FlexBetween
			color={palette.grey[400]}
			margin="1.5rem 1rem 0"
		>
			<FlexBetween>
				{icon}
				<Box width="100%">
					<Typography
						variant="h5"
						mb="-0.1rem"
					>
						{title}
					</Typography>
					<Typography variant="h6">{subtitle}</Typography>
				</Box>
			</FlexBetween>
			<Typography
				variant="h5"
				fontWeight="700"
				color={palette.secondary[500]}
			>
				{sideText}
			</Typography>
		</FlexBetween>
	);
};

export default BoxHeader;
