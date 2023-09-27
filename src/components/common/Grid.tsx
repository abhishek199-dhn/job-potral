import React from "react";
import { type BaseComponentProps } from "../../types/job";
import classNames from "classnames";

interface GridProps extends BaseComponentProps {
	children?: React.ReactNode;
}

const Grid = ({ children, styles, className }: GridProps): React.ReactElement => {
	return (
		<div className={classNames(className, "grid")} style={styles}>
			{children}
		</div>
	);
};

export default Grid;
