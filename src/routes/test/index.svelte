<script>
	import Editor from '@tinymce/tinymce-svelte';

	let value;
	let conf = {
		plugins:
			'autoresize preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
		toolbar:
			'undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | forecolor backcolor removeformat | pagebreak | emoticons | fullscreen  preview | image link',
		toolbar_mode: 'floating',
		toolbar_sticky: true,
		autosave_ask_before_unload: false,
		automatic_uploads: true,
		images_upload_url: 'api/images/autoupload',
		convert_urls: false,
		forced_root_block: 'div',
		// setup: function (editor) {
		// 	editor.on('change', function () {
		// 		tinymce.triggerSave();
		// 	});
		// }
	};

	$: console.log(value);

	const modelEvents = (aa) => {
		console.log(aa);
	};
</script>

<main>
	<h1>Hello Tiny</h1>
	<div>{value}</div>
	<Editor bind:value bind:conf />
</main>
