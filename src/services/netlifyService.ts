export async function getNetlifySites(token: string) {
  const response = await fetch("https://api.netlify.com/api/v1/sites", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const text = await response.text().catch(() => response.statusText);
    throw new Error(`Netlify API error: ${response.status} ${text}`);
  }

  const data = await response.json();
  return data;
}
