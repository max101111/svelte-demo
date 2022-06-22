<script>
	console.log(import.meta.env.MODE);
	console.log(import.meta.env.VITE_API_URL);
	import {
  afterNavigate,
  beforeNavigate,
  disableScrollHandling,
  goto,
  invalidate,
  prefetch,
  prefetchRoutes
} from '$app/navigation';
</script>

<select class="select w-full max-w-xs select-bordered">
	<option disabled selected>Pick your favorite Simpson</option>
	<option style="height: 100px;">Homer</option>
	<option>Marge</option>
	<option>Bart</option>
	<option>Lisa</option>
	<option>Maggie</option>
</select>

<button on:click={()=>goto('/test_request/456-s?id=23',{
    state:{a:123}
})}>123</button>
