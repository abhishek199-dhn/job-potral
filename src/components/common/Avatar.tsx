import React from "react";
import { type BaseComponentProps } from "../../types/job";
import classNames from "classnames";

export enum AvatarSize {
	MEDIUM,
	SMALL,
}

const SIZE_MAPS: Record<AvatarSize, string> = {
	[AvatarSize.MEDIUM]: "w-12 w-12 rounded-md",
	[AvatarSize.SMALL]: "w-9 w-9 rounded-sm",
};

interface AvatarProps extends BaseComponentProps, React.ComponentProps<"img"> {
	size?: AvatarSize;
	containerClassName?: string;
}

const Avatar = ({
	className,
	containerClassName,
	size = AvatarSize.MEDIUM,
	src,
	alt,
	...rest
}: AvatarProps): React.ReactElement => {
	const layoutClasses: string = "overflow-hidden";
	const finalClasses = `${layoutClasses} ${SIZE_MAPS[size]} ${containerClassName}`;

	return (
		<div className={finalClasses}>
			<img
				src={src}
				alt={alt}
				className={classNames(
					className,
					"h-full w-full object-cover object-center",
				)}
				{...rest}
			/>
		</div>
	);
};

export default Avatar;
