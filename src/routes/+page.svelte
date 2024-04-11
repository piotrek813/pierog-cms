<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import PostTable from '$lib/components/ui/posts-table/post-table.svelte';
	import { Toaster } from 'svelte-sonner';
</script>

<div class="p-20">
	<div class="flex justify-between">
		<h1>PierogCms</h1>
		<a href="/create">
			<Button class="mb-5">Create a new entry</Button>
		</a>
	</div>
	<PostTable />

	<Toaster />
</div>
