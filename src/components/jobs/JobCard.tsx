import React, { useCallback, useState } from "react";
import Card from "../common/cards/Card";
import FlexContainer from "../common/cards/FlexContainer";
import CardTitle from "../common/cards/CardTitle";
import { TypographyColor } from "../common/typography/Typography";
import { type Job, JobApplyType } from "../../types/job";
import Constants from "../../utils/constants";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Avatar, { AvatarSize } from "../common/Avatar";
import ConfirmModal from "../common/ConfirmModal";
import Button, { ButtonSize, ButtonVariant } from "../common/Button";
import CardText from "../common/cards/CardText";

export interface JobCardProps {
	job: Job;
	onEdit: (job: Job) => void;
	onDelete: (jobId: Job["id"]) => void;
	isJobDeleteLoading: boolean;
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
});

const JobCard = ({
	job,
	onEdit,
	onDelete,
	isJobDeleteLoading,
}: JobCardProps): React.ReactElement => {
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

	const closeModal = useCallback(() => {
		setIsDeleteModalOpen(false);
	}, []);

	const openModal = useCallback(() => {
		setIsDeleteModalOpen(true);
	}, []);

	let experience = `Experience (${job.minExperience ?? 0} - ${
		job.maxExperience
	} years)`;
	if (job?.maxExperience == null || job.maxExperience <= 0) {
		experience = "";
	}

	let salary = `${Constants.currencyTextPrefix} ${currencyFormatter.format(
		job.minSalary ?? 0,
	)} - ${currencyFormatter.format(job.maxSalary ?? 0)} / Month`;
	if (job.maxSalary == null || job.maxSalary <= 0) {
		salary = "";
	}

	const onEditBtnClick = useCallback(() => {
		onEdit(job);
	}, [job, onEdit]);

	const onDeleteBtnClick = useCallback(() => {
		onDelete(job.id);
	}, [job.id, onDelete]);

	return (
		<>
			<Card
				className="flex items-start flex-col self-stretch gap-y-2.5"
				key={job.id}
			>
				<FlexContainer flexRow justifyBetween selfStretch>
					<FlexContainer flexRow className=" gap-x-2">
						<FlexContainer className="flex-shrink-0">
							<Avatar
								size={AvatarSize.MEDIUM}
								src={Constants.defaultJobImage}
								alt={"Job Image"}
							/>
						</FlexContainer>
						<FlexContainer flexCol className="gap-y-6">
							<FlexContainer flexCol>
								<CardTitle>{job.title}</CardTitle>
								<CardText color={TypographyColor.BLACK}>
									{`${job.companyName} - ${job.industry}`}
								</CardText>
								<CardText color={TypographyColor.PLACEHOLDER}>
									{`${job.location} (${job.remoteType})`}
								</CardText>
							</FlexContainer>
							<FlexContainer flexCol className="gap-y-2">
								<CardText>Part-Time (9.00 am - 5.00 pm IST)</CardText>
								{experience !== "" ? (
									<CardText>{experience}</CardText>
								) : null}
								{salary !== "" ? <CardText>{salary}</CardText> : null}
								<CardText>{`${
									job.totalEmployees ?? 0
								} employees`}</CardText>
							</FlexContainer>
							<FlexContainer flexRow>
								{job.applyType === JobApplyType.quickApply ? (
									<Button
										variant={ButtonVariant.PRIMARY}
										size={ButtonSize.LARGE}
									>
										Apply Now
									</Button>
								) : (
									<Button
										variant={ButtonVariant.OUTLINE}
										size={ButtonSize.LARGE}
									>
										External Apply
									</Button>
								)}
							</FlexContainer>
						</FlexContainer>
					</FlexContainer>
					<FlexContainer flexCol itemsEnd className="gap-y-2 h-14">
						<FlexContainer flexRow className="gap-y-2">
							<Button
								variant={ButtonVariant.DEFAULT}
								size={ButtonSize.SMALL}
								onClick={onEditBtnClick}
								buttonShadow={false}
								className="hover:rounded-md hover:bg-gray-100 hover:shadow-sm shadow-none"
							>
								<PencilSquareIcon
									className="h-5 w-5"
									aria-hidden="true"
								/>
							</Button>
							<Button
								variant={ButtonVariant.DEFAULT}
								size={ButtonSize.SMALL}
								onClick={openModal}
								buttonShadow={false}
								className="hover:rounded-md hover:bg-gray-100 hover:shadow-sm shadow-none"
							>
								<TrashIcon className="h-5 w-5" aria-hidden="true" />
							</Button>
						</FlexContainer>
					</FlexContainer>
				</FlexContainer>
			</Card>
			<ConfirmModal
				isOpen={isDeleteModalOpen}
				closeModal={closeModal}
				primaryButtonText="Delete"
				primaryButtonVariant={ButtonVariant.DANGER}
				onPrimaryButtonClick={onDeleteBtnClick}
				secondaryButtonText="Cancel"
				secondaryButtonVariant={ButtonVariant.DEFAULT}
				onSecondaryButtonClick={closeModal}
				isLoading={isJobDeleteLoading}
			>
				Are you sure you want to delete?
			</ConfirmModal>
		</>
	);
};

export default JobCard;
