// app/utils/api.js
export async function fetchWordDefinition(word) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch the word definition");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching word definition:", error);
    return null;
  }
}
