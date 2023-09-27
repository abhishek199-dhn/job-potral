import React from "react";
import classNames from "classnames";

interface CardProps {
	children?: React.ReactNode;
	className?: string;
	styles?: React.CSSProperties;
}

const Card = ({
	children,
	className: classNameProp,
	styles,
}: CardProps): React.ReactElement => {
	return (
		<div
			className={classNames(
				"py-4 px-6 border border-card-border rounded-md-lg bg-card-bg",
				classNameProp,
			)}
			style={styles}
		>
			{children}
		</div>
	);
};

export default Card;
