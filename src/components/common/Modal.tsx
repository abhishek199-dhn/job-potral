import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

export interface ModalProps {
	isOpen?: boolean;
	onClose: (value: boolean) => void;
	title?: string;
	children: React.ReactNode;
	isFullWidth?: boolean;
	maxWidth?: string;
}

const Modal = ({
	isOpen,
	onClose,
	title,
	children,
	isFullWidth = false,
	maxWidth = "max-w-lg",
}: ModalProps): React.ReactElement => {
	const modalPanelClassNames = `w-full ${
		isFullWidth ? "" : maxWidth
	} transform overflow-hidden rounded-md-lg bg-white p-8 flex flex-col items-center shadow-xl transition-all border-card-border`;
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={onClose}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className={modalPanelClassNames}>
									{title != null ? (
										<Dialog.Title>{title}</Dialog.Title>
									) : null}

									{children}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default Modal;
