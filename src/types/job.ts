import type React from "react";

export interface BaseComponentProps {
	styles?: React.CSSProperties;
	className?: string;
}

export enum JobApplyType {
	externalApply = "externalApply",
	quickApply = "quickApply",
}

export interface JobForm1Data {
	title: string;
	companyName: string;
	industry: string;
	location: string | null | undefined;
	remoteType: string | null | undefined;
}

export interface JobForm2Data {
	minExperience: number | null | undefined;
	maxExperience: number | null | undefined;
	minSalary: number | null | undefined;
	maxSalary: number | null | undefined;
	totalEmployees: string | null | undefined;
	applyType: JobApplyType | null | undefined;
}

export interface Job extends JobForm1Data, JobForm2Data {
	id: string;
}

export interface CreateJobData extends Omit<Job, "id"> {}
