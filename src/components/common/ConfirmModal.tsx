import React from "react";
import Modal from "./Modal";
import Button, { ButtonSize, ButtonType, type ButtonVariant } from "./Button";
import FlexContainer from "./cards/FlexContainer";
import Loader from "./icons/Loader";

export interface ConfirmModalProps {
	isOpen: boolean;
	closeModal: () => void;
	children: React.ReactNode;
	primaryButtonVariant: ButtonVariant;
	secondaryButtonVariant?: ButtonVariant;
	primaryButtonText: string;
	secondaryButtonText?: string;
	onPrimaryButtonClick?: () => void;
	onSecondaryButtonClick?: () => void;
	isLoading: boolean;
}

const ConfirmModal = ({
	closeModal,
	isOpen = false,
	children,
	primaryButtonText,
	primaryButtonVariant,
	secondaryButtonText,
	onSecondaryButtonClick,
	secondaryButtonVariant,
	onPrimaryButtonClick,
	isLoading,
}: ConfirmModalProps): React.ReactElement => {
	return (
		<Modal onClose={closeModal} isOpen={isOpen}>
			<div className="text-lg font-medium leading-6 text-gray-900 py-8">
				{children}
			</div>
			<FlexContainer
				selfEnd
				itemsStart={false}
				selfStretch={false}
				className="gap-x-3"
			>
				{secondaryButtonText != null ? (
					<Button
						type={ButtonType.BUTTON}
						size={ButtonSize.LARGE}
						variant={secondaryButtonVariant}
						onClick={onSecondaryButtonClick}
					>
						{secondaryButtonText}
					</Button>
				) : null}
				<Button
					type={ButtonType.BUTTON}
					size={ButtonSize.LARGE}
					variant={primaryButtonVariant}
					onClick={onPrimaryButtonClick}
				>
					{isLoading ? <Loader height={5} width={5} animateSpin /> : null}
					{primaryButtonText}
				</Button>
			</FlexContainer>
		</Modal>
	);
};

export default ConfirmModal;
