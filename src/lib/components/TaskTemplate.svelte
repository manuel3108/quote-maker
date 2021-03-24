<script lang="ts">
	import type { Task } from '$lib/scripts/Task';

	export let task: Task;
</script>

<div class="ml-5">
	<div class="columns">
		<div class="column is-10">
			<textarea class="input" rows="3" bind:value={task.description} />
		</div>
		<div class="column is-2 ">
			<input type="number" class="input" bind:value={task.duration} />
		</div>
	</div>
</div>
