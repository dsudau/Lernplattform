export async function getServerData(name) {
  return await fetch(`http://localhost:3000/${name}`)
    .then((response) => response.json())
    .catch((error) => console.error("Server-Error:", error))
    .then((loadedContent) => {
      return loadedContent;
    });
}
export async function setServerData(name, data) {
  if (!data) {
    await fetch(`http://localhost:3000/${name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((error) => console.error("Server-Error:", error));
  }
}
