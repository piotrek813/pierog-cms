<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Input } from '$lib/components/ui/input';
	import EditorJS from '@editorjs/editorjs';
	/* @ts-ignore */
	import Header from '@editorjs/header';
	/* @ts-ignore */
	import List from '@editorjs/header';

	const editor = new EditorJS({
		/**
		 * Id of Element that should contain the Editor
		 */
		holder: 'editorjs',

		/**
		 * Available Tools list.
		 * Pass Tool's class or Settings object for each Tool you want to use
		 */
		tools: {
			header: {
				class: Header,
				inlineToolbar: ['link']
			},
			list: {
				class: List,
				inlineToolbar: true
			}
		}
	});
</script>

<div class="grid w-full gap-1.5 p-20">
	<form action="">
		<Label for="title"
			>Title

			<Input id="title" />
		</Label>
		<Label for="message"
			>Contents

			<Textarea id="message" />
		</Label>
	</form>
</div>

<div id="editorjs"></div>
