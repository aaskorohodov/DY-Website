const phrases = [
    'print("Hello, World!")',
    'System.out.println("Hello, World!");',
    'printf("Hello, World!");',
    'console.log("Hello, World!");',
    'puts "Hello, World!"',
    'std::cout << "Hello, World!" << std::endl;',
    'fmt.Println("Hello, World!")',
    'echo "Hello, World!";'
];

const typingSpeeds = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 500];
const deletingSpeeds = [10, 20, 30, 50, 100];
const pauseSpeeds = [1000, 2000, 1500, 800, 300, 500];

let textContainer = document.getElementById("print-element");
let currentPhraseIndex = 0;
let currentCharacterIndex = 0;
let isTyping = true;

function typeText() {
    const currentPhrase = phrases[currentPhraseIndex];
    const displayedText = currentPhrase.slice(0, currentCharacterIndex);

    textContainer.textContent = displayedText;

    if (isTyping) {
        if (currentCharacterIndex < currentPhrase.length) {
            currentCharacterIndex++;
            let typingSpeed = getRandomFromArray(typingSpeeds);
            setTimeout(typeText, typingSpeed);
        } else {
            isTyping = false;
            let pauseSpeed = getRandomFromArray(pauseSpeeds);
            setTimeout(typeText, pauseSpeed);
        }
    } else {
        if (currentCharacterIndex > 0) {
            currentCharacterIndex--;
            let delSpeed = getRandomFromArray(deletingSpeeds);
            setTimeout(typeText, delSpeed);
        } else {
            isTyping = true;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            let pauseSpeed = getRandomFromArray(pauseSpeeds);
            setTimeout(typeText, pauseSpeed);
        };
    };
};

// Start the typing effect
typeText();