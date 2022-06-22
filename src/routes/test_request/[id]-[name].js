/** @type {import('./__types/[id]').RequestHandler} */
export async function get ({ params, request }) {
    // `params.id` comes from [id].js
    const res = await fetch('http://localhost:3000/users', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let item = await res.json();
    console.log('ite1m', params)


    if (item) {
        return {
            body: { item, m: 456,request }
        };
    }

    return {
        status: 404
    };
}