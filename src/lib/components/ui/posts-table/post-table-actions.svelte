<script lang="ts">
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import { deleteDoc, doc } from 'firebase/firestore';
	import { db } from '$lib/firebase';
	import { toast } from 'svelte-sonner';

	export let id: string | undefined;

	function onDelete() {
		if (id === undefined) {
			toast("Couldn't delete a record");
			return;
		}

		deleteDoc(doc(db, 'post', id))
			.then(() => toast(`Deleted a record with id: ${id}`))
			.catch(() => toast("Couldn' delete a record"));
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button variant="ghost" builders={[builder]} size="icon" class="relative h-8 w-8 p-0">
			<span class="sr-only">Open menu</span>
			<Ellipsis class="h-4 w-4" />
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Item on:click={onDelete}>Delete</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
