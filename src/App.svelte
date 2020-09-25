<script lang="typescript">
	export let application;

	import Routes from './Routes.svelte'
	import Navbar from './components/Navbar.svelte';

	import Message from './scripts/Message'

	var m: Message = new Message();
</script>

<style global lang="scss">
	@import "main.scss";
</style>

<svelte:head>
	<title>{application.displayName}</title>
</svelte:head>

<Navbar bind:application></Navbar>
<main>
	<Routes></Routes>
</main>

