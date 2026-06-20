function generateFlashcards() {

    let notes = document.getElementById("notes").value;

    let flashcards = document.getElementById("flashcards");

    let sentences = notes.split(".");

    let cards = "";

    sentences.forEach(sentence => {

        if (sentence.trim() !== "") {

            let words = sentence.trim().split(" ");

            let keyword = words[0];

            cards += `
            <div class="card">

                <h2>Flashcard</h2>

                <h3>Question:</h3>
                <p>What is ${keyword}?</p>

                <h3>Answer:</h3>
                <p>${sentence.trim()}.</p>

            </div>
            <br>
            `;
        }

    });

    flashcards.innerHTML = cards;
}