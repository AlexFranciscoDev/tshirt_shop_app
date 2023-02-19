export const Petition = async (url, fetch_method, data_save = '', files = false) => {
  // Iniciate variables
  let data = [];
  let options = {
    method: 'GET'
  }
  if (fetch_method == 'GET' || fetch_method == 'DELETE') {
    options = {
      method: fetch_method
    }
  }
  if (fetch_method == 'POST' || fetch_method == 'PUT') {
    let body = JSON.stringify(data_save);
    if (files) {
      options = {
        method: fetch_method,
        body: data_save
      }
    } else {
      options = {
        method: fetch_method,
        body: JSON.stringify(data_save),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    }
  }
  // Doing the petition
  let response = await fetch(url, options);
  data = await response.json();
  console.log(data);
  return (
    data
  )
}
