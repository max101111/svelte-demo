
<script>
	import { onMount } from 'svelte';
	import { getStores, navigating, page, session, updated } from '$app/stores';
	export let item;
	export let m;
	// onMount(async () => {
	// 	const res = await fetch('http://localhost:3000/users', {
	// 		method: 'get',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		}
	// 	});

	// 	item = await res.json();
	// 	console.log(item);
	// });
    
	console.log('session', $session);
	console.log('navigating', $navigating);
	// console.log(request,'request');
</script>

<pre>
    {JSON.stringify(item)}{m}
</pre>
