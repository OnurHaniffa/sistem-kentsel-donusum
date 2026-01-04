<script lang="ts">
	interface Props {
		size?: 'sm' | 'md' | 'lg';
		light?: boolean;
		showTagline?: boolean;
	}

	let { size = 'md', light = false, showTagline = false }: Props = $props();

	const sizes = {
		sm: { top: 'text-[12px]', bottom: 'text-[16px]', tagline: 'text-[7px]' },
		md: { top: 'text-[15px]', bottom: 'text-[20px]', tagline: 'text-[9px]' },
		lg: { top: 'text-[20px]', bottom: 'text-[26px]', tagline: 'text-[11px]' }
	};

	let s = $derived(sizes[size]);
	let mainColor = $derived(light ? '#ffffff' : '#4a2c2c');
	let lightColor = $derived(light ? 'rgba(255,255,255,0.5)' : '#6b4a4a');
</script>

<div class="flex flex-col items-center text-center">
	<!-- SistemKentsel -->
	<span
		class="{s.top} font-semibold tracking-wide leading-none"
		style="font-family: 'Quicksand', sans-serif; color: {mainColor};"
	>SistemKentsel</span>

	<!-- DÖNÜŞÜM using font -->
	<span
		class="{s.bottom} font-black tracking-[0.15em] leading-none mt-0.5"
		style="font-family: 'Quicksand', sans-serif; color: {mainColor};"
	>DÖNÜŞÜM</span>

	{#if showTagline}
		<span
			class="{s.tagline} font-normal tracking-wider leading-none mt-1.5"
			style="font-family: 'Quicksand', sans-serif; color: {lightColor};"
		>Dönüşüm Seninle</span>
	{/if}
</div>
