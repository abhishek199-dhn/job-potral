import React, { useCallback, useState } from "react";
import CreateJobStep1 from "./CreateJobStep1";
import CreateJobStep2 from "./CreateJobStep2";
import type { CreateJobData, Job, JobForm1Data, JobForm2Data } from "../../types/job";

interface CreateJobProps {
	onSave: (data: CreateJobData) => void;
	job?: Job;
	isLoading: boolean;
}

const CreateJob = ({ onSave, job, isLoading }: CreateJobProps): React.ReactElement => {
	const [showSecondForm, setShowSecondForm] = useState<boolean>(false);
	const [step1FormData, setStep1FormData] = useState<JobForm1Data>();

	const onNextCallback = useCallback((data: JobForm1Data) => {
		setStep1FormData(data);
		setShowSecondForm(true);
	}, []);

	const onSaveCallback = useCallback(
		(data: JobForm2Data) => {
			if (step1FormData != null) {
				onSave({
					...step1FormData,
					...data,
				});
			}
		},
		[onSave, step1FormData],
	);

	return (
		<>
			{showSecondForm ? null : <CreateJobStep1 job={job} onNext={onNextCallback} />}
			{showSecondForm ? (
				<CreateJobStep2 job={job} onSave={onSaveCallback} isLoading={isLoading} />
			) : null}
		</>
	);
};

export default CreateJob;
