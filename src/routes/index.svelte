<script lang="ts">
	import GroupTemplate from '$lib/components/GroupTemplate.svelte';
	import PdfViewer from '$lib/components/PDFViewer.svelte';
	import { Group } from '$lib/scripts/Group';

	let groups: Array<Group> = [];

	function addNewGroup() {
		groups = [...groups, new Group()];
	}

	addNewGroup();
</script>

<main class="m-3">
	<div class="columns">
		<div class="column">
			{#each groups as group}
				<GroupTemplate group={group} />
			{/each}

			<div>
				<button class="button is-primary mt-3" on:click={addNewGroup}
					>Add Group</button
				>
			</div>
		</div>
		<div class="column">
			<PdfViewer groups={groups} />
		</div>
	</div>
</main>
