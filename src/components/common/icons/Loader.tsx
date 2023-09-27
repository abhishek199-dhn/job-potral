import React from "react";
import { type BaseComponentProps } from "../../../types/job";
import classNames from "classnames";

export interface LoaderProps extends BaseComponentProps, React.ComponentProps<"svg"> {
	width: number;
	height: number;
	animateSpin: boolean;
}

const Loader = ({
	width,
	className,
	height,
	animateSpin,
	styles,
	...rest
}: LoaderProps): React.ReactElement => {
	const finalClassName = classNames(
		`-ml-1 mr-2 mt-0.5 text-white h-${height} w-${width}`,
		{
			"animate-spin": animateSpin,
		},
		className,
	);
	return (
		<svg
			className={finalClassName}
			style={styles}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			{...rest}
		>
			<circle
				className="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="4"
			></circle>
			<path
				className="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
	);
};

export default Loader;
