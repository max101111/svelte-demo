<script context="module">
   export let nn = []
</script>
<script>
	export let expanded = false;
	export let name = 'lll';
	export let files = [];
    const uuid = crypto.randomUUID();
	function toggle() {
        nn=[uuid]
        console.log(nn)
		expanded =nn.includes(uuid);
	}
</script>

<span class:expanded on:click={toggle}>{name}</span>

{#if expanded}
	<ul>
		{#each files as file}
			<li>
				{#if file.type === 'folder'}
					<svelte:self {...file} />
				{:else}
					<li>
						{file.name}
					</li>
				{/if}
			</li>
		{/each}
	</ul>
{/if}

<style>
	span {
		padding: 0 0 0 1.5em;
		background: url(tutorial/icons/folder.svg) 0 0.1em no-repeat;
		background-size: 1em 1em;
		font-weight: bold;
		cursor: pointer;
	}

	.expanded {
		background-image: url(tutorial/icons/folder-open.svg);
	}

	ul {
		padding: 0.2em 0 0 0.5em;
		margin: 0 0 0 0.5em;
		list-style: none;
		border-left: 1px solid #eee;
        position: relative;
        width: 100px;
	}

	li {
		padding: 0.2em 0;
        position: absolute;
        top: 0;
        width: 100px;
        height: 20px;
        right: -100%;
	}
</style>
