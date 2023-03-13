export async function apiRequest(
  url = "",
  optionsObj = null,
  errorMessage = null
) {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw new Error("Please restart the app");
  } catch (error) {
    errorMessage = error.message;
  } finally {
    return errorMessage;
  }
}
