import React, { useCallback, useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import Page from "../../components/common/Page";
import Modal from "../../components/common/Modal";
import CreateJob from "../../components/jobs/CreateJob";
import JobList from "../../components/jobs/JobList";
import { type CreateJobData, type Job } from "../../types/job";
import JobService from "../../services/JobService";
import Button, { ButtonSize, ButtonVariant } from "../../components/common/Button";
import FlexContainer from "../../components/common/cards/FlexContainer";

const JobListing = (): React.ReactElement => {
	const [isCreateJobModalOpen, setIsCreateJobModalOpen] = useState<boolean>(false);
	const [jobs, setJobs] = useState<Job[]>([]);
	const [editingJob, setEditingJob] = useState<Job | undefined>();
	const [shouldRefreshListAPI, setShouldRefreshListAPI] = useState<boolean>(true);
	const [isJobCreateLoading, setIsJobCreateLoading] = useState<boolean>(false);
	const [isJobDeleteLoading, setIsJobDeleteLoading] = useState<boolean>(false);

	const closeModal = (): void => {
		setIsCreateJobModalOpen(false);
	};

	const openModal = (): void => {
		setIsCreateJobModalOpen(true);
	};

	useEffect(() => {
		if (shouldRefreshListAPI) {
			void JobService.getAll().then((response) => {
				if (response.status === 200) {
					setJobs(response.data ?? []);
					setShouldRefreshListAPI(false);
				}
			});
		}
	}, [shouldRefreshListAPI]);

	const onCreateModalSave = useCallback(
		async (data: CreateJobData) => {
			setIsJobCreateLoading(true);
			if (editingJob?.id != null) {
				const response = await JobService.update(
					{
						id: editingJob.id,
						...data,
					},
					editingJob.id,
				);

				if (response.data !== null) {
					closeModal();
					setEditingJob(undefined);
				}
			} else {
				const response = await JobService.create(data);
				if (response.data !== null) {
					closeModal();
				}
			}
			setShouldRefreshListAPI(true);
			setIsJobCreateLoading(false);
		},
		[editingJob],
	);

	const onJobCreate = useCallback(() => {
		setEditingJob(undefined);
		openModal();
	}, []);

	const onJobEdit = useCallback((job: Job) => {
		setEditingJob(job);
		openModal();
	}, []);

	const onJobDelete = useCallback(async (jobId: Job["id"]) => {
		setIsJobDeleteLoading(true);
		const response = await JobService.delete(jobId);

		if (response.data !== null) {
			setShouldRefreshListAPI(true);
		}

		setIsJobDeleteLoading(false);
	}, []);

	return (
		<Page>
			<div className="px-4 py-4 w-full h-full">
				<FlexContainer itemsStart>
					<Button
						variant={ButtonVariant.PRIMARY}
						size={ButtonSize.LARGE}
						onClick={onJobCreate}
					>
						<PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
						Create Job
					</Button>
				</FlexContainer>
				<div className="pt-7.5 pb-12 pl-21.25 pr-11.23">
					<h2 className="sr-only">Job Listing</h2>
					<JobList
						jobs={jobs}
						hasError={false}
						isLoading={false}
						onEdit={onJobEdit}
						onDelete={onJobDelete}
						isJobDeleteLoading={isJobDeleteLoading}
					/>
				</div>
				<Modal onClose={closeModal} isOpen={isCreateJobModalOpen}>
					<CreateJob
						job={editingJob}
						onSave={onCreateModalSave}
						isLoading={isJobCreateLoading}
					/>
				</Modal>
			</div>
		</Page>
	);
};

export default JobListing;
