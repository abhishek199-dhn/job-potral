import React, { Suspense } from "react";
import JobCard, { type JobCardProps } from "./JobCard";
import type { Job } from "../../types/job";
import Grid from "../common/Grid";

interface JobListProps {
	jobs: Job[];
	hasError: boolean;
	isLoading: boolean;
	onEdit: JobCardProps["onEdit"];
	onDelete: JobCardProps["onDelete"];
	isJobDeleteLoading: boolean;
}

const JobList = ({
	jobs = [],
	hasError,
	isLoading,
	onEdit,
	onDelete,
	isJobDeleteLoading,
}: JobListProps): React.ReactElement => {
	return (
		<Suspense fallback={<h2>Loading</h2>}>
			<Grid className="gap-x-20.78 gap-y-19.75 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
				{jobs.map((job) => {
					return (
						<JobCard
							job={job}
							key={job.id}
							onEdit={onEdit}
							onDelete={onDelete}
							isJobDeleteLoading={isJobDeleteLoading}
						/>
					);
				})}
			</Grid>
		</Suspense>
	);
};

export default JobList;
