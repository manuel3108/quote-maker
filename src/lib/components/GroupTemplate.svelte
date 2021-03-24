<script lang="ts">
	import type { Group } from '$lib/scripts/Group';
	import { Task } from '$lib/scripts/Task';
	import TaskTemplate from './TaskTemplate.svelte';

	export let group: Group;

	function addTask() {
		group.tasks = [...group.tasks, new Task()];
	}
</script>

<div class="mt-3">
	<div class="field">
		<label class="label mb-1">Group description</label>
		<div class="control">
			<input class="input" bind:value={group.description} />
		</div>
	</div>
	<div class="columns ml-5">
		<div class="column is-10 pb-0">
			<span>Task description</span>
		</div>
		<div class="column is-2 pb-0">
			<span>Task duration</span>
		</div>
	</div>
	{#each group.tasks as task}
		<TaskTemplate task={task} />
	{/each}
	<div class="has-text-right">
		<button class="button is-primary mt-3 ml-5" on:click={addTask}>
			Add Task</button
		>
	</div>
</div>
