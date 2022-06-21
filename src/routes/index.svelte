<script>
	console.log(import.meta.env.MODE);
	console.log(import.meta.env.VITE_API_URL);

	fetch('https://fat-adm-api.local.hiseas.com/admin/api/yanxue/order/page', {
		method: 'POST',
		headers: {
			authorization:
				'hiseaseyJhbGciOiJIUzUxMiJ9.eyJzYWx0IjoiZmFmOTdmZWYtOTc5ZC00Y2ZhLWE2ZTEtZmVlOWUyN2E3MWJmIiwiY3JlYXRlZCI6MTY1NTcxNzY4MzA5OCwiaWQiOjE2MywiZXhwIjoxNjU1NzM5MjgzfQ.apbMzpUH4zEaLzdpecwv2JOW-bK4Efi85siQhsCwqEjlhU9fpQIhVFFQY4_Uq93UYCABRefOqObDUJ7Y3yO1vg',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			code: null,
			customerId: null,
			groupStatusEnumList: null,
			operateStatusList: null
		})
	});
</script>

<select class="select w-full max-w-xs select-bordered">
	<option disabled selected>Pick your favorite Simpson</option>
	<option style="height: 100px;">Homer</option>
	<option>Marge</option>
	<option>Bart</option>
	<option>Lisa</option>
	<option>Maggie</option>
</select>
