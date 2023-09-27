import React, { useCallback, useState } from "react";
import FlexContainer from "../common/cards/FlexContainer";
import Typography, {
	TypographyColor,
	TypographyVariant,
} from "../common/typography/Typography";
import type { Job, JobForm2Data } from "../../types/job";
import { JobApplyType } from "../../types/job";
import Loader from "../common/icons/Loader";
import Button, { ButtonSize, ButtonType, ButtonVariant } from "../common/Button";
import FormLabel from "../common/typography/FormLabel";
import FormInput from "../common/FormInput";

interface CreateJobStep2Props {
	onSave: (data: JobForm2Data) => void;
	job?: Job;
	isLoading: boolean;
}

const parseInputValue = (value: string): string | number => {
	return value !== null && value !== undefined && value !== "" ? Number(value) : "";
};

const CreateJobStep2 = ({
	onSave,
	job,
	isLoading,
}: CreateJobStep2Props): React.ReactElement => {
	let applyTypeProp;
	// isEditMode
	if (job != null) {
		applyTypeProp = job.applyType ?? JobApplyType.externalApply;
	}

	const [minExperience, setMinExperience] = useState<number | string | undefined>(
		job?.minExperience ?? "",
	);
	const [maxExperience, setMaxExperience] = useState<number | string | undefined>(
		job?.maxExperience ?? "",
	);
	const [minSalary, setMinSalary] = useState<number | string | undefined>(
		job?.minSalary ?? "",
	);
	const [maxSalary, setMaxSalary] = useState<number | string | undefined>(
		job?.maxSalary ?? "",
	);
	const [totalEmployees, setTotalEmployees] = useState<string | undefined>(
		job?.totalEmployees ?? "",
	);
	const [applyType, setApplyType] = useState<JobApplyType | undefined>(applyTypeProp);

	const onMinExperienceChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event?.currentTarget?.value;
			setMinExperience(parseInputValue(value));
		},
		[],
	);

	const onMaxExperienceChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event?.currentTarget?.value;
			setMaxExperience(parseInputValue(value));
		},
		[],
	);

	const onMinSalaryChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event?.currentTarget?.value;
			setMinSalary(parseInputValue(value));
		},
		[],
	);

	const onMaxSalaryChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event?.currentTarget?.value;
			setMaxSalary(parseInputValue(value));
		},
		[],
	);

	const onTotalEmployeesChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setTotalEmployees(event?.currentTarget?.value);
		},
		[],
	);

	const onApplyTypeChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setApplyType(
				event?.currentTarget?.value === JobApplyType.quickApply
					? JobApplyType.quickApply
					: JobApplyType.externalApply,
			);
		},
		[],
	);

	const onFormSubmit = useCallback(
		(event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			onSave({
				minExperience: Number(minExperience) ?? null,
				maxExperience: Number(maxExperience) ?? null,
				minSalary: Number(minSalary) ?? null,
				maxSalary: Number(maxSalary) ?? null,
				totalEmployees,
				applyType,
			});
		},
		[
			maxExperience,
			maxSalary,
			minExperience,
			minSalary,
			onSave,
			applyType,
			totalEmployees,
		],
	);

	return (
		<form className="w-full" onSubmit={onFormSubmit}>
			<FlexContainer flexCol className="gap-y-24">
				<FlexContainer flexCol className="gap-y-6">
					<FlexContainer itemCenter justifyBetween>
						<Typography
							color={TypographyColor.FORM_LABEL}
							variant={TypographyVariant.PARAGRAPH}
							className="text-xl"
						>
							{`${job != null ? "Edit" : "Create"}`} a job
						</Typography>
						<Typography
							color={TypographyColor.FORM_LABEL}
							variant={TypographyVariant.PARAGRAPH}
						>
							Step 2
						</Typography>
					</FlexContainer>

					<FlexContainer flexRow className="gap-x-6">
						<FlexContainer flexCol className="gap-y-1" fullWidth>
							<FormLabel htmlFor="form-job-title">Experience</FormLabel>
							<FormInput
								type="number"
								placeholder="Minumum"
								min={0}
								value={minExperience}
								onChange={onMinExperienceChange}
								fullWidth
							/>
						</FlexContainer>
						<FlexContainer
							flexCol
							selfEnd
							className="gap-y-1"
							selfStretch={false}
							fullWidth
						>
							<FormInput
								type="number"
								placeholder="Maximum"
								min={1}
								value={maxExperience}
								onChange={onMaxExperienceChange}
								fullWidth
							/>
						</FlexContainer>
					</FlexContainer>

					<FlexContainer flexRow className="gap-x-6">
						<FlexContainer flexCol className="gap-y-1" fullWidth>
							<FormLabel htmlFor="form-job-title">Salary</FormLabel>
							<FormInput
								type="number"
								placeholder="Minumum"
								min={0}
								value={minSalary}
								onChange={onMinSalaryChange}
							/>
						</FlexContainer>
						<FlexContainer
							flexCol
							selfEnd
							className="gap-y-1"
							selfStretch={false}
							fullWidth
						>
							<FormInput
								type="number"
								placeholder="Maximum"
								min={1}
								value={maxSalary}
								onChange={onMaxSalaryChange}
							/>
						</FlexContainer>
					</FlexContainer>

					<FlexContainer flexCol className="gap-y-1">
						<FormLabel htmlFor="form-job-title">Total employee</FormLabel>
						<FormInput
							type="text"
							required
							placeholder="ex. 100"
							value={totalEmployees}
							onChange={onTotalEmployeesChange}
						/>
					</FlexContainer>

					<FlexContainer flexCol className="gap-y-1">
						<FormLabel htmlFor="form-job-title">Apply type</FormLabel>
						<FlexContainer
							flexRow
							itemCenter
							className="gap-x-5 py-2"
							fullWidth
						>
							<FlexContainer
								flexRow
								itemCenter
								className="gap-x-1"
								fitWidth
							>
								<FormInput
									name="radio-apply-type"
									type="radio"
									title="Quick apply"
									value={JobApplyType.quickApply}
									checked={applyType === JobApplyType.quickApply}
									onChange={onApplyTypeChange}
									fullWidth={false}
									className="w-5 h-5 bg-unselected text-unselected border-unselected focus:ring-primary"
								/>
								<FormLabel htmlFor="form-job-title" className="w-fit">
									Quick apply
								</FormLabel>
							</FlexContainer>
							<FlexContainer
								flexRow
								itemCenter
								className="gap-x-1"
								fitWidth
							>
								<FormInput
									name="radio-apply-type"
									type="radio"
									title="External apply"
									value={JobApplyType.externalApply}
									checked={applyType === JobApplyType.externalApply}
									onChange={onApplyTypeChange}
									fullWidth={false}
									className="w-5 h-5 bg-unselected text-unselected border-unselected focus:ring-primary"
								/>
								<FormLabel htmlFor="form-job-title" className="w-fit">
									External apply
								</FormLabel>
							</FlexContainer>
						</FlexContainer>
					</FlexContainer>
				</FlexContainer>
				<FlexContainer
					flexRow
					itemsStart={false}
					selfStretch={false}
					justifyBetween
					selfEnd
					itemsEnd
				>
					<Button
						type={ButtonType.SUBMIT}
						variant={ButtonVariant.PRIMARY}
						size={ButtonSize.LARGE}
					>
						{isLoading ? <Loader height={5} width={5} animateSpin /> : null}
						Save
					</Button>
				</FlexContainer>
			</FlexContainer>
		</form>
	);
};

export default CreateJobStep2;
