<script lang="ts">
	import type { Group } from '$lib/scripts/Group';
	import { onMount } from 'svelte';
	import { jsPDF } from 'jspdf';
	import type { Task } from '$lib/scripts/Task';
	import autoTable from 'jspdf-autotable';
	export let groups: Array<Group> = [];

	let iframeElement;

	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	$: {
		if (iframeElement && mounted) {
			regeneratePdf(groups);
		}
	}

	async function regeneratePdf(groups: Array<Group>) {
		const doc = new jsPDF();
		// doc.text('Hello world!', 10, 10);
		groups.forEach((group) => {
			autoTable(doc, {
				head: [[group.description, '']],
				body: group.tasks.map((t: Task) => [
					{ content: t.description },
					{ content: t.duration, styles: { halign: 'right' } }
				])
			});
		});

		iframeElement.src = doc.output('bloburl');
	}
</script>

<iframe bind:this={iframeElement} frameborder="0" />

<style>
	iframe {
		width: 100%;
		height: calc(100vh - 88px);
	}
</style>
