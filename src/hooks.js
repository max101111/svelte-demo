/** @type {import('@sveltejs/kit').GetSession} */
export function getSession (event) {
    
    return { user: { name: '456', } };
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle ({ event, resolve }) {
    console.log(event.locals,7894)
    if (event.url.pathname.startsWith('/custom')) {
      return new Response('custom response');
    }
   
    const response = await resolve(event);
    return response;
}