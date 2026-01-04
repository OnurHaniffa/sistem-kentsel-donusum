<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { Home, ArrowLeft, AlertTriangle } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Hata {$page.status} | Sistem Kentsel Dönüşüm</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-background px-4">
	<div class="text-center max-w-md">
		<div class="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary/10 to-purple/10 flex items-center justify-center">
			<AlertTriangle class="h-10 w-10 text-primary" />
		</div>

		<h1 class="text-6xl font-bold text-foreground mb-4">{$page.status}</h1>

		<p class="text-xl text-muted-foreground mb-2">
			{#if $page.status === 404}
				Sayfa Bulunamadı
			{:else if $page.status === 500}
				Sunucu Hatası
			{:else}
				Bir Hata Oluştu
			{/if}
		</p>

		<p class="text-muted-foreground mb-8">
			{#if $page.status === 404}
				Aradığınız sayfa mevcut değil veya taşınmış olabilir.
			{:else}
				Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.
			{/if}
		</p>

		<div class="flex flex-col sm:flex-row gap-3 justify-center">
			<Button
				variant="outline"
				class="rounded-xl"
				onclick={() => history.back()}
			>
				<ArrowLeft class="h-4 w-4 mr-2" />
				Geri Dön
			</Button>
			<Button
				class="bg-gradient-to-r from-primary to-purple text-white rounded-xl"
				href="/"
			>
				<Home class="h-4 w-4 mr-2" />
				Ana Sayfa
			</Button>
		</div>
	</div>
</div>
