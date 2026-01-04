<script lang="ts">
	import { MessageCircle } from 'lucide-svelte';

	const whatsappNumber = '905XXXXXXXXX';
	const message = encodeURIComponent(
		'Merhaba, kentsel dönüşüm danışmanlığı hakkında bilgi almak istiyorum.'
	);
	const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
</script>

<a
	href={whatsappUrl}
	target="_blank"
	rel="noopener noreferrer"
	class="fixed bottom-6 right-6 z-40 group"
	aria-label="WhatsApp ile iletişime geç"
>
	<!-- Button - WhatsApp green -->
	<div
		class="relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#22c55e] text-white px-4 py-3 rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-[1.02] transition-all duration-300"
	>
		<MessageCircle class="h-5 w-5" />
		<span class="font-medium text-sm hidden sm:inline">WhatsApp</span>
	</div>
</a>
