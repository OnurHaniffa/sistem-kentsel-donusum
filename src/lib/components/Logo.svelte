<script lang="ts">
	interface Props {
		size?: 'sm' | 'md' | 'lg';
		light?: boolean;
		showTagline?: boolean;
	}

	let { size = 'md', light = false, showTagline = false }: Props = $props();

	const sizes = {
		sm: { top: 'text-[10px]', bottom: 'text-[13px]', tagline: 'text-[7px]' },
		md: { top: 'text-[12px]', bottom: 'text-[16px]', tagline: 'text-[9px]' },
		lg: { top: 'text-[16px]', bottom: 'text-[21px]', tagline: 'text-[11px]' }
	};

	let s = $derived(sizes[size]);
	let mainColor = $derived(light ? '#ffffff' : '#4a2c2c');
	let lightColor = $derived(light ? 'rgba(255,255,255,0.5)' : '#6b4a4a');
</script>

<div class="flex flex-col items-center text-center">
	<!-- SISTEM -->
	<span
		class="{s.top} font-black tracking-[0.25em] leading-none"
		style="font-family: 'Quicksand', sans-serif; color: {mainColor};"
	>SISTEM</span>

	<!-- Kentsel Dönüşüm -->
	<span
		class="{s.bottom} font-semibold tracking-wide leading-none mt-0.5"
		style="font-family: 'Quicksand', sans-serif; color: {mainColor};"
	>Kentsel Dönüşüm</span>

	{#if showTagline}
		<span
			class="{s.tagline} font-normal tracking-wider leading-none mt-1.5"
			style="font-family: 'Quicksand', sans-serif; color: {lightColor};"
		>Dönüşüm Seninle</span>
	{/if}
</div>
