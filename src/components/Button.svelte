<script>
</script>

<button on:click class="s_button_basic">
	<slot>button</slot>
</button>

<style>
	.s_button_basic {
		background-color: #1890ff;
        color: #fff;
        border: 0px;
        padding: 5px 8px;
        border-radius: 2px;
	}
	.s_button_basic:active {
		background-color: #066dce;
	}
</style>
