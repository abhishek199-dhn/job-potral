import React from "react";
import classNames from "classnames";

export interface FormInputProps extends React.ComponentProps<"input"> {
	fullWidth?: boolean;
}

const FormInput = ({
	type,
	required,
	value,
	onChange,
	placeholder,
	className,
	fullWidth = true,
	...rest
}: FormInputProps): React.ReactElement => {
	const layoutClass = `border border-card-border rounded-md py-2 px-3 placeholder:text-font-placeholder ${
		fullWidth ? "w-full" : ""
	}`;
	return (
		<input
			type={type}
			required={required}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className={classNames(className, layoutClass)}
			{...rest}
		/>
	);
};

export default FormInput;
