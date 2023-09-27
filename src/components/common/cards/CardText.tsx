import React from "react";
import Typography, {
	TypographyColor,
	type TypographyProps,
	TypographyVariant,
} from "../typography/Typography";

const CardText = (props: TypographyProps): React.ReactElement => {
	return (
		<Typography
			variant={TypographyVariant.PARAGRAPH}
			color={TypographyColor.CARD_DESC}
			{...props}
		/>
	);
};

export default CardText;
