import http from "./HttpClient";
import { type CreateJobData, type Job } from "../types/job";
import { type AxiosResponse } from "axios";

class JobService {
	public static async getAll(): Promise<AxiosResponse<Job[], unknown>> {
		return await http.get<Job[]>("/jobs");
	}

	public static async get(id: string): Promise<AxiosResponse<Job, unknown>> {
		return await http.get<Job>(`/jobs/${id}`);
	}

	public static async create(
		data: CreateJobData,
	): Promise<AxiosResponse<Job, unknown>> {
		return await http.post<Job>("/jobs", data);
	}

	public static async update(
		data: Partial<Job>,
		id: string,
	): Promise<AxiosResponse<unknown, unknown>> {
		return await http.put<unknown>(`/jobs/${id}`, data);
	}

	public static async delete(id: string): Promise<AxiosResponse<unknown, unknown>> {
		return await http.delete<unknown>(`/jobs/${id}`);
	}
}

export default JobService;
