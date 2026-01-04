<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/ekibimiz#sss', { replaceState: true });
	});
</script>

<svelte:head>
	<title>SSS | Sistem Kentsel Dönüşüm</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center">
	<p class="text-muted-foreground">Yönlendiriliyor...</p>
</div>
