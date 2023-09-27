import React from "react";
import Typography, {
	TypographyColor,
	type TypographyProps,
	TypographyVariant,
} from "./Typography";

const FormLabel = (props: TypographyProps): React.ReactElement => {
	return (
		<Typography
			as="label"
			variant={TypographyVariant.SMALL}
			color={TypographyColor.FORM_LABEL}
			{...props}
		/>
	);
};

export default FormLabel;
