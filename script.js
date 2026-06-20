function generateFlashcards() {

    let notes = document.getElementById("notes").value;

    let flashcards = document.getElementById("flashcards");

    let sentences = notes.split(".");

    let cards = "";

    sentences.forEach(sentence => {

        sentence = sentence.trim();

        if (sentence !== "") {

            let words = sentence.split(" ");

            let keyword = words.find(word => 
                word.length > 4
            );

            if (!keyword) {
                keyword = words[0];
            }

            cards += `
            <div class="card" onclick="flipCard(this)">

                <div class="front">
                    <h2>❓ ${keyword}</h2>
                    <p>Click to reveal answer</p>
                </div>

                <div class="back">
                    <h2>💡 Answer</h2>
                    <p>${sentence}.</p>
                </div>

            </div>
            `;
        }

    });

    flashcards.innerHTML = cards;
}


function flipCard(card) {

    card.classList.toggle("flipped");

}