class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint) {
    const url = `${this.baseUrl}/${endpoint}`;
    const response = await fetch(url);
    // console.log(await response.json());

    if (!response.ok) {
      throw new Error("Http error");
    }
    return await response.json();
  }

  async post(endpoint, data) {
    const url = `${this.baseUrl}/${endpoint}`;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
debugger
const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: myHeaders,
    });
    if (!response.ok) {
        throw new Error("Http error");
      }
      return await response.json();
  }
}
