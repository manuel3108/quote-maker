import type { Task } from 'svelte/internal';
import { Task } from './Task';

export class Group {
	public tasks: Array<Task>;
	public description: string;

	constructor() {
		this.tasks = [new Task()];
	}
}
