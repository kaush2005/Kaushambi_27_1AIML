async function getJoke() {
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    setup.textContent = "Loading a joke...";
    punchline.textContent = "";
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        if (!response.ok) throw new Error("HTTP " + response.status);
        const joke = await response.json();
        setup.textContent = joke.setup;
        punchline.textContent = joke.punchline;
    } catch (error) {
        setup.textContent = "Unable to fetch a joke. Please try again.";
        console.error("Joke API error:", error);
    }
}
