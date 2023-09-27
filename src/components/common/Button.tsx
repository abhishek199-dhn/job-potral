import React from "react";
import { type BaseComponentProps } from "../../types/job";
import classNames from "classnames";

export enum ButtonVariant {
	PRIMARY,
	DEFAULT,
	DANGER,
	OUTLINE,
}

export enum ButtonSize {
	LARGE,
	SMALL,
}

export enum ButtonType {
	BUTTON = "button",
	SUBMIT = "submit",
}

const SIZE_MAPS: Record<ButtonSize, string> = {
	[ButtonSize.LARGE]: "px-4 py-2 text-base font-medium rounded-md",
	[ButtonSize.SMALL]: "px-2 py-2 text-sm font-medium rounded-md",
};

const VARIANT_MAPS: Record<ButtonVariant, string> = {
	[ButtonVariant.PRIMARY]: "bg-primary text-white hover:bg-blue-500 focus:outline-none",
	[ButtonVariant.DEFAULT]: "text-base text-gray-800",
	[ButtonVariant.DANGER]: "bg-red-100 text-red-900 hover:bg-red-200",
	[ButtonVariant.OUTLINE]: "text-base border border-primary bg-font-white text-primary",
};

export interface ButtonProps extends BaseComponentProps {
	size?: ButtonSize;
	variant?: ButtonVariant;
	type?: ButtonType;
	onClick?: () => void;
	children?: React.ReactNode;
	buttonShadow?: boolean;
}

const Button = ({
	size = ButtonSize.SMALL,
	variant = ButtonVariant.PRIMARY,
	type = ButtonType.BUTTON,
	onClick,
	className,
	styles,
	children,
	buttonShadow = true,
}: ButtonProps): React.ReactElement => {
	const layoutClasses: string =
		"inline-flex items-center  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
	const finalBtnClasses = `${layoutClasses} ${VARIANT_MAPS[variant]} ${
		SIZE_MAPS[size]
	} ${buttonShadow ? "shadow-sm" : ""}`;
	return (
		<button
			type={type}
			className={classNames(className, finalBtnClasses)}
			style={styles}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
