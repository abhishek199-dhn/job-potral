import React from "react";

interface PageProps {
	children?: React.ReactNode;
	styles?: React.CSSProperties;
}

const Page = ({ children, styles }: PageProps): React.ReactElement => {
	return (
		<div className="w-screen h-full" style={styles}>
			{children}
		</div>
	);
};

export default Page;
