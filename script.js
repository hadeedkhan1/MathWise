async function solveMath(inputType) {
    let mathInput;

    if (inputType === 'text') {
        mathInput = document.getElementById('mathInput').value;
    } else if (inputType === 'photo') {
        mathInput = await convertImageToText();
    }

    // Call the appropriate function based on input type
    if (inputType === 'text') {
        solveTextMath(mathInput);
    } else if (inputType === 'photo') {
        solveTextMath(mathInput); // For now, assuming photo input will also use text solving
    }
}

function solveTextMath(mathInput) {
    // Call the GPT API with the text input and display the solution
    // Replace this with your actual GPT API call
    const steps = getStepsFromAPI(mathInput);

    displaySteps(steps);
}

async function convertImageToText() {
    // Implement image to text conversion using OCR (Optical Character Recognition)
    // For simplicity, let's assume it's a dummy function that returns a placeholder text
    return "2x + 3 = 7";
}

function displaySteps(steps) {
    const stepsDisplay = document.getElementById('stepsDisplay');
    stepsDisplay.innerHTML = '';

    steps.forEach(step => {
        const stepElement = document.createElement('p');
        stepElement.textContent = step;
        stepsDisplay.appendChild(stepElement);
    });
}


function toggleInput(inputType) {
    const textInput = document.getElementById('textInput');
    const photoInput = document.getElementById('photoInput');
    const textInputBtn = document.getElementById('textInputBtn');
    const photoInputBtn = document.getElementById('photoInputBtn');

    if (inputType === 'text') {
        textInput.style.display = 'block';
        photoInput.style.display = 'none';
        textInputBtn.disabled = true;
        photoInputBtn.disabled = false;
    } else if (inputType === 'photo') {
        textInput.style.display = 'none';
        photoInput.style.display = 'block';
        textInputBtn.disabled = false;
        photoInputBtn.disabled = true;
    }
}
const OPENAI_API_KEY = 'sk-proj-wEE1XjTpkfuvCcjMfVEtT3BlbkFJis2H89TODvikpsAe8KU9'; // Replace with your actual API key
const GPT_API_URL = 'https://api.openai.com/v1/completions';

async function solveMath(inputType) {
    let mathInput;

    if (inputType === 'text') {
        mathInput = document.getElementById('mathInput').value;
        solveTextMath(mathInput);
    } else if (inputType === 'photo') {
        const fileInput = document.getElementById('imageInput').files[0];
        const formData = new FormData();
        formData.append('file', fileInput);

        const textFromImage = await convertImageToText(formData);
        solveTextMath(textFromImage);
    }
}

async function solveTextMath(mathInput) {
    const completion = await getGPTCompletion(mathInput);
    const generatedText = completion.choices[0].text.trim();
    displaySolution(generatedText);
}

async function getGPTCompletion(prompt) {
    const response = await fetch(GPT_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            prompt: prompt,
            model: 'text-davinci-003', // Adjust the model as needed
            max_tokens: 100 // Adjust max tokens as needed
        })
    });

    if (!response.ok) {
        throw new Error('Failed to get GPT completion');
    }

    return response.json();
}

async function convertImageToText(formData) {
    // Implement image to text conversion using NanoNets OCR
    // For simplicity, let's assume it's a dummy function that returns a placeholder text
    return "2x + 3 = 7";
}

function displaySolution(solution) {
    const stepsDisplay = document.getElementById('stepsDisplay');
    stepsDisplay.innerHTML = `<p>${solution}</p>`;
}
