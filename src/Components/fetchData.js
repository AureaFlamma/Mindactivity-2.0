export default async function fetchData(method, url, bodyObj) {
  const settings = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyObj),
  };
  try {
    console.log(settings.body);
    const fetchResponse = await fetch(url, settings);
    const data = await fetchResponse.json();
    console.log("here's the data: ", data);

    return data;
  } catch (e) {
    console.log(e);
    return;
  }
}
