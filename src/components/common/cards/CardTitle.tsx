import React from "react";
import Typography, { TypographyColor, TypographyVariant } from "../typography/Typography";

interface CardTitleProps {
	children?: React.ReactNode;
	className?: string;
	styles?: React.CSSProperties;
}

const CardTitle = ({ children, ...rest }: CardTitleProps): React.ReactElement => {
	return (
		<Typography
			color={TypographyColor.BLACK}
			variant={TypographyVariant.TITLE}
			{...rest}
		>
			{children}
		</Typography>
	);
};

export default CardTitle;
