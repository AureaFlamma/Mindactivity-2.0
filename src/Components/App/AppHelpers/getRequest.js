export default async function getRequest(url) {
  const settings = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
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
