const BASE_URL = "http://localhost:3000/"

// all funder
export const getFunders = async () => {
  const response = await fetch(`${BASE_URL}api/funderApi`)
  const json = await response.json()
// console.log(json)
  return json;
}

// single funder
export const getFunder = async (formId) => {
  const response = await fetch(`${BASE_URL}api/funderApi/${formId}`);
  const json = await response.json()

  if (json) return json;
  return {}
}

// posting a new funder
export async function addFunder(formData) {
  try {
    const Options = {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(formData)
    }

    const response = await fetch(`${BASE_URL}api/funderApi`, Options)
    const json = await response.json()

    return json;
  } catch (error) {
    return error;
  }
}


// Update a new funder
export async function updateFunder(funderId, formData) {
  const Options = {
    method: 'PUT',
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify(formData)
  }

  const response = await fetch(`${BASE_URL}api/funderApi/${funderId}`, Options)
  const json = await response.json()
  return json;
}


// Delete a new funder
export async function deleteUser(funderId) {
  const Options = {
    method: 'DELETE',
    headers: { 'Content-Type': "application/json" },
  }

  const response = await fetch(`${BASE_URL}api/funderApi/${funderId}`, Options)
  const json = await response.json()
  return json;
}