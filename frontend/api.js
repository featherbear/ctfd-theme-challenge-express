// CTFd remains the authority for challenge visibility, flags, hints and solves.
export async function api(path, body) {
  const response = await fetch(`${window.init.urlRoot}/api/v1${path}`, {
    credentials: 'same-origin', method: body ? 'POST' : 'GET',
    headers: { 'Content-Type': 'application/json', 'CSRF-Token': window.init.csrfNonce },
    ...(body ? { body: JSON.stringify(body) } : {})
  });
  if (response.status === 401) throw new Error('Please log in to continue.');
  let data;
  try { data = await response.json(); }
  catch { throw new Error('The server did not return a valid response. Please try again.'); }
  if (!response.ok || data.success === false) throw new Error(data.message || (typeof data.errors === 'string' ? data.errors : 'This request is unavailable. Please try again.'));
  return data.data;
}
