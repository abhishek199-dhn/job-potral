import React, { useCallback, useState } from "react";
import FlexContainer from "../common/cards/FlexContainer";
import Typography, {
	TypographyColor,
	TypographyVariant,
} from "../common/typography/Typography";
import type { Job, JobForm1Data } from "../../types/job";
import Button, { ButtonSize, ButtonType, ButtonVariant } from "../common/Button";
import FormLabel from "../common/typography/FormLabel";
import FormInput from "../common/FormInput";

interface CreateJobStep1Props {
	onNext: (data: JobForm1Data) => void;
	job?: Job;
}

const CreateJobStep1 = ({ onNext, job }: CreateJobStep1Props): React.ReactElement => {
	const [title, setTitle] = useState<string>(job?.title ?? "");
	const [companyName, setCompanyName] = useState<string>(job?.companyName ?? "");
	const [industry, setIndustry] = useState<string>(job?.industry ?? "");
	const [location, setLocation] = useState<string>(job?.location ?? "");
	const [remoteType, setRemoteType] = useState<string>(job?.remoteType ?? "");

	const onTitleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event?.currentTarget?.value ?? "");
	}, []);

	const onCompanyNameChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setCompanyName(event?.currentTarget?.value ?? "");
		},
		[],
	);

	const onIndustryChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setIndustry(event?.currentTarget?.value ?? "");
	}, []);

	const onLocationChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setLocation(event?.currentTarget?.value ?? "");
	}, []);

	const onRemoteTypeChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setRemoteType(event?.currentTarget?.value ?? "");
		},
		[],
	);

	const onFormSubmit = useCallback(
		(event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			onNext({
				title,
				companyName,
				industry,
				location,
				remoteType,
			});
		},
		[companyName, industry, location, onNext, remoteType, title],
	);

	return (
		<form className="w-full" onSubmit={onFormSubmit}>
			<FlexContainer flexCol className="gap-y-24">
				<FlexContainer flexCol className="gap-y-6">
					<FlexContainer flexRow justifyBetween itemCenter>
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
							Step 1
						</Typography>
					</FlexContainer>
					<FlexContainer flexCol className="gap-y-1">
						<FormLabel htmlFor="form-job-title">
							Job title
							<span className="text-font-error">*</span>
						</FormLabel>
						<FormInput
							type="text"
							required
							value={title}
							onChange={onTitleChange}
							placeholder="ex. UX UI Designer"
						/>
					</FlexContainer>
					<FlexContainer flexCol className="gap-y-1">
						<FormLabel htmlFor="form-job-title">
							Company name
							<span className="text-font-error">*</span>
						</FormLabel>
						<FormInput
							type="text"
							required
							value={companyName}
							onChange={onCompanyNameChange}
							placeholder="ex. Google"
						/>
					</FlexContainer>
					<FlexContainer flexCol className="gap-y-1">
						<FormLabel htmlFor="form-job-title">
							Industry
							<span className="text-font-error">*</span>
						</FormLabel>
						<FormInput
							type="text"
							required
							value={industry}
							onChange={onIndustryChange}
							placeholder="ex. Information Technology"
						/>
					</FlexContainer>
					<FlexContainer flexRow className="gap-x-6">
						<FlexContainer flexCol className="gap-y-1 w-full">
							<FormLabel htmlFor="form-job-title">Location</FormLabel>
							<FormInput
								type="text"
								value={location}
								onChange={onLocationChange}
								placeholder="ex. Chennai"
							/>
						</FlexContainer>
						<FlexContainer flexCol className="gap-y-1 w-full">
							<FormLabel htmlFor="form-job-title">Remote type</FormLabel>
							<FormInput
								type="text"
								value={remoteType}
								onChange={onRemoteTypeChange}
								placeholder="ex. In-office"
							/>
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
						size={ButtonSize.LARGE}
						variant={ButtonVariant.PRIMARY}
					>
						Next
					</Button>
				</FlexContainer>
			</FlexContainer>
		</form>
	);
};

export default CreateJobStep1;
