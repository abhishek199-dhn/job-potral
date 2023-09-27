import React from "react";
import classNames from "classnames";
import { type BaseComponentProps } from "../../../types/job";

// we can add more colors here or mapped with theme
export enum TypographyColor {
	INHERIT,
	CURRENT,
	BLACK,
	FORM_LABEL,
	WHITE,
	ERROR,
	PLACEHOLDER,
	CARD_DESC,
}

export enum TypographyVariant {
	TITLE,
	PARAGRAPH,
	SMALL,
}

const COLOR_MAPS: Record<TypographyColor, string> = {
	[TypographyColor.INHERIT]: "text-inherit",
	[TypographyColor.CURRENT]: "text-current",
	[TypographyColor.FORM_LABEL]: "text-font-dark",
	[TypographyColor.BLACK]: "text-dark",
	[TypographyColor.WHITE]: "text-font-white",
	[TypographyColor.ERROR]: "text-font-error",
	[TypographyColor.PLACEHOLDER]: "text-font-placeholder",
	[TypographyColor.CARD_DESC]: "text-card-desc",
};

const VARIANT_MAPS: Record<TypographyVariant, string> = {
	[TypographyVariant.TITLE]: "text-2xl font-normal",
	[TypographyVariant.PARAGRAPH]: "text-base font-normal",
	[TypographyVariant.SMALL]: "text-sm font-medium",
};

export interface TypographyProps extends BaseComponentProps {
	children?: React.ReactNode;
	as?: React.ElementType;
	htmlFor?: string | undefined;
	color?: TypographyColor;
	variant?: TypographyVariant;
}

const Typography = ({
	children,
	className: classNameProp,
	as,
	color = TypographyColor.INHERIT,
	variant = TypographyVariant.PARAGRAPH,
	...rest
}: TypographyProps): React.ReactElement => {
	const Component = as ?? "span";

	const layoutClasses: string = "sm:truncate break-all";
	const finalClasses = `${layoutClasses} ${COLOR_MAPS[color]} ${VARIANT_MAPS[variant]}`;

	return (
		<Component className={classNames(classNameProp, finalClasses)} {...rest}>
			{children}
		</Component>
	);
};

export default Typography;
