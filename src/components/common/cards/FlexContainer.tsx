import React from "react";
import classNames from "classnames";

interface FlexContainerProps {
	children?: React.ReactNode;
	className?: string;
	styles?: React.CSSProperties;
	itemsStart?: boolean;
	itemsEnd?: boolean;
	itemCenter?: boolean;
	selfEnd?: boolean;
	selfStretch?: boolean;
	flexCol?: boolean;
	flexRow?: boolean;
	justifyBetween?: boolean;
	justifyEnd?: boolean;
	fullWidth?: boolean;
	fitWidth?: boolean;
}

const FlexContainer = ({
	children,
	className: classNameProp,
	styles,
	selfStretch = true,
	itemsStart = true,
	selfEnd = false,
	flexRow = true,
	flexCol = false,
	itemCenter = false,
	justifyBetween = false,
	justifyEnd = false,
	itemsEnd = false,
	fullWidth = false,
	fitWidth = false,
}: FlexContainerProps): React.ReactElement => {
	return (
		<div
			className={classNames(classNameProp, "flex", {
				"items-start": itemsStart,
				"items-center": itemCenter,
				"items-end": itemsEnd,
				"justify-between": justifyBetween,
				"justify-end": justifyEnd,
				"self-end": selfEnd,
				"self-stretch": selfStretch,
				"flex-row": flexRow,
				"flex-col": flexCol,
				"w-full": fullWidth,
				"w-fit": fitWidth,
			})}
			style={styles}
		>
			{children}
		</div>
	);
};

export default FlexContainer;
