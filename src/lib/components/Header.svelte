<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Menu, X, ArrowRight } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import Logo from './Logo.svelte';

	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);

	const navLinks = [
		{ href: '/', label: 'Anasayfa' },
		{ href: '/kurumsal', label: 'Kurumsal' },
		{ href: '/hizmetler', label: 'Hizmetler' },
		{ href: '/ekibimiz', label: 'Ekibimiz & SSS' },
		{ href: '/iletisim', label: 'İletişim' }
	];

	// Derived state for navbar styling
	let isHomepage = $derived($page.url.pathname === '/');
	let useLight = $derived(isHomepage && !scrolled);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
		document.body.style.overflow = '';
	}

	function handleScroll() {
		scrolled = window.scrollY > 10;
	}

	function isActive(href: string, currentPath: string): boolean {
		if (href === '/') return currentPath === '/';
		return currentPath.startsWith(href);
	}

	onDestroy(() => {
		if (browser) {
			document.body.style.overflow = '';
		}
	});
</script>

<svelte:window onscroll={handleScroll} />

<!-- Premium Navbar -->
<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out">
	<!-- Main navbar container -->
	<div class="px-4 sm:px-6 lg:px-8 py-3">
		<nav
			class="mx-auto max-w-7xl rounded-2xl transition-all duration-500 {scrolled
				? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/[0.04]'
				: isHomepage
					? 'bg-white/[0.03] backdrop-blur-md border border-white/[0.08]'
					: 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/[0.04]'}"
		>
			<div class="px-4 sm:px-6">
				<div class="flex h-16 items-center justify-between">

					<!-- Logo -->
					<a href="/" class="group transition-all duration-300 hover:opacity-90">
						<Logo size="md" light={useLight} />
					</a>

					<!-- Desktop Navigation - Center -->
					<div class="hidden lg:flex items-center">
						<div class="flex items-center gap-1 rounded-full {useLight ? 'bg-white/[0.06]' : 'bg-muted/50'} p-1.5">
							{#each navLinks as link}
								{@const active = isActive(link.href, $page.url.pathname)}
								<a
									href={link.href}
									class="nav-link relative px-4 py-2 text-[13px] font-medium transition-all duration-300 rounded-full
										{active
											? useLight
												? 'text-white bg-white/15'
												: 'text-foreground bg-white shadow-sm'
											: useLight
												? 'text-white/70 hover:text-white hover:bg-white/10'
												: 'text-muted-foreground hover:text-foreground hover:bg-muted'}"
								>
									<span class="relative z-10">{link.label}</span>
								</a>
							{/each}
						</div>
					</div>

					<!-- Right side: CTA -->
					<div class="hidden lg:flex items-center">
						<!-- CTA Button with micro-interaction -->
						<a
							href="/iletisim"
							class="cta-btn group inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300
								{useLight
									? 'bg-white text-foreground hover:bg-white/90 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 hover:scale-105'
									: 'bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-foreground/10 hover:shadow-xl hover:shadow-foreground/20 hover:scale-105'}"
						>
							Ücretsiz Görüşme
							<ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
						</a>
					</div>

					<!-- Mobile Menu Button -->
					<button
						type="button"
						class="lg:hidden relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 {useLight
							? 'text-white hover:bg-white/10'
							: 'text-foreground hover:bg-muted'}"
						onclick={toggleMobileMenu}
						aria-label="Menüyü aç/kapat"
						aria-expanded={mobileMenuOpen}
					>
						<div class="relative w-5 h-5">
							<span
								class="absolute left-0 block h-0.5 w-5 rounded-full transition-all duration-300 {useLight ? 'bg-white' : 'bg-current'}
									{mobileMenuOpen ? 'top-[9px] rotate-45' : 'top-1'}"
							></span>
							<span
								class="absolute left-0 top-[9px] block h-0.5 w-5 rounded-full transition-all duration-300 {useLight ? 'bg-white' : 'bg-current'}
									{mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}"
							></span>
							<span
								class="absolute left-0 block h-0.5 w-5 rounded-full transition-all duration-300 {useLight ? 'bg-white' : 'bg-current'}
									{mobileMenuOpen ? 'top-[9px] -rotate-45' : 'top-[17px]'}"
							></span>
						</div>
					</button>
				</div>
			</div>
		</nav>
	</div>
</header>

<!-- Mobile Menu - Full Screen Overlay -->
{#if mobileMenuOpen}
	<div class="fixed inset-0 z-40 lg:hidden">
		<!-- Backdrop -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
			onclick={closeMobileMenu}
			onkeydown={(e) => e.key === 'Escape' && closeMobileMenu()}
		></div>

		<!-- Menu Panel -->
		<div class="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl animate-slide-in-right">
			<!-- Header -->
			<div class="flex items-center justify-between p-6 border-b border-border/50">
				<a href="/" onclick={closeMobileMenu}>
					<Logo size="sm" />
				</a>
				<button
					type="button"
					class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-muted transition-colors duration-300"
					onclick={closeMobileMenu}
					aria-label="Menüyü kapat"
				>
					<X class="h-5 w-5" />
				</button>
			</div>

			<!-- Navigation Links -->
			<nav class="p-6 space-y-1 overflow-y-auto" style="max-height: calc(100vh - 200px);">
				{#each navLinks as link, i}
					{@const active = isActive(link.href, $page.url.pathname)}
					<a
						href={link.href}
						onclick={closeMobileMenu}
						class="flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-300
							{active ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'}"
						style="animation: slideInRight 0.3s ease-out {i * 0.05}s both"
					>
						{link.label}
						{#if active}
							<div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
						{/if}
					</a>
				{/each}
			</nav>

			<!-- CTA -->
			<div class="absolute bottom-0 left-0 right-0 p-6 border-t border-border/50 bg-muted/30">
				<a
					href="/iletisim"
					onclick={closeMobileMenu}
					class="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02]"
				>
					Ücretsiz Görüşme
					<ArrowRight class="h-4 w-4" />
				</a>
				<p class="text-center text-xs text-muted-foreground mt-4">
					7/24 WhatsApp desteği
				</p>
			</div>
		</div>
	</div>
{/if}

<!-- Spacer for fixed header -->
<div class="h-[88px]"></div>

<style>
	@keyframes slideInRight {
		from {
			opacity: 0;
			transform: translateX(20px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes fade-in {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes slide-in-right {
		from { transform: translateX(100%); }
		to { transform: translateX(0); }
	}

	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateX(-50%) translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateX(-50%) translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.2s ease-out;
	}

	.animate-slide-in-right {
		animation: slide-in-right 0.3s ease-out;
	}

	.animate-fade-in-up {
		animation: fade-in-up 0.2s ease-out forwards;
	}

	/* Micro-interactions for nav links */
	.nav-link {
		position: relative;
		overflow: hidden;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: 6px;
		left: 50%;
		width: 0;
		height: 2px;
		background: currentColor;
		transition: all 0.3s ease;
		transform: translateX(-50%);
		border-radius: 1px;
		opacity: 0;
	}

	.nav-link:hover::after {
		width: 20px;
		opacity: 0.5;
	}

	/* CTA button pulse effect */
	.cta-btn {
		position: relative;
	}

	.cta-btn::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 9999px;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.cta-btn:hover::before {
		animation: pulse-ring 1s ease-out infinite;
	}

	@keyframes pulse-ring {
		0% {
			box-shadow: 0 0 0 0 currentColor;
			opacity: 0.4;
		}
		100% {
			box-shadow: 0 0 0 10px transparent;
			opacity: 0;
		}
	}
</style>
