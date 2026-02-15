---
name: new-quiz-module
description: Scaffold a complete new quiz module for the pharma-quiz app. Creates HTML, CSS, JS logic, and data files following existing project patterns. Use when adding a new topic/subject quiz.
argument-hint: <module-name> <hebrew-title> <hebrew-subtitle> <color1> <color2>
disable-model-invocation: true
allowed-tools: Read, Write, Edit, Bash(ls *), Glob, Grep
---

# New Quiz Module Scaffolder

Create a complete new quiz module for the pharma-quiz application.

## Arguments

The user will provide these details (prompt for any that are missing):

- **Module name** (`$0`): Lowercase English identifier (e.g., `anatomy`, `pediatrics`). Used for filenames.
- **Hebrew title** (`$1`): The quiz title in Hebrew (e.g., `חידון אנטומיה`). Shown in the header h1.
- **Hebrew subtitle** (`$2`): Subtitle in Hebrew (e.g., `מבנה גוף האדם`). Shown under the title.
- **Primary color** (`$3`): CSS hex color for the gradient start (e.g., `#8e44ad`). Default: `#2c3e50`.
- **Secondary color** (`$4`): CSS hex color for the gradient end (e.g., `#9b59b6`). Default: `#3498db`.

If the user provides only a module name and title, use sensible defaults for the rest.

## What to Generate

Create these 4 files in the pharma-quiz project root:

### 1. `<module-name>-quiz.html`

Follow the exact structure of `surgery-quiz.html`:

```html
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HEBREW_TITLE</title>
    <link rel="stylesheet" href="MODULE_NAME-styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>HEBREW_TITLE</h1>
            <p class="subtitle">HEBREW_SUBTITLE</p>
        </header>

        <div id="stats" class="stats">
            <div class="stat-item">
                <span class="stat-label">שאלה:</span>
                <span id="question-number">1</span> / <span id="total-questions">10</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">ניקוד:</span>
                <span id="score">0</span>
            </div>
        </div>

        <div id="quiz-container" class="quiz-container">
            <div id="question-card" class="question-card">
                <div id="question-category" class="question-category"></div>
                <h2 id="question-text" class="question-text"></h2>
                <div id="options" class="options"></div>
            </div>

            <div id="feedback" class="feedback hidden">
                <div id="feedback-icon" class="feedback-icon"></div>
                <p id="feedback-text"></p>
                <p id="explanation" class="explanation"></p>
            </div>

            <button id="next-btn" class="btn next-btn hidden">השאלה הבאה</button>
        </div>

        <div id="results" class="results hidden">
            <h2>סיכום</h2>
            <div class="results-score">
                <span id="final-score">0</span> / <span id="final-total">10</span>
            </div>
            <p id="results-message"></p>
            <button id="restart-btn" class="btn">התחל מחדש</button>
        </div>

        <div id="settings" class="settings">
            <h3>הגדרות</h3>
            <div class="setting-item">
                <label for="question-count">מספר שאלות:</label>
                <select id="question-count">
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                </select>
            </div>
            <div class="setting-item">
                <label for="category-select">קטגוריה:</label>
                <select id="category-select">
                    <option value="all" selected>הכל</option>
                    <!-- CATEGORIES will be populated from the data file -->
                </select>
            </div>
            <button id="start-btn" class="btn start-btn">התחל חידון</button>
        </div>
    </div>

    <script src="MODULE_NAME.js"></script>
    <script src="MODULE_NAME-quiz.js"></script>
</body>
</html>
```

**Important**: Populate the category `<option>` elements based on the categories defined in the data file.

### 2. `<module-name>-styles.css`

Copy the exact structure of `surgery-styles.css` but replace the color scheme:

- Replace `#2c3e50` with the primary color (`$3`)
- Replace `#3498db` / `#2980b9` with the secondary color (`$4`)
- Keep all layout, spacing, animations, RTL support, and responsive breakpoints identical

Key color locations to update:
- `body` background gradient
- `.question-category` badge gradient
- `.option:hover` border color
- `.option.selected` background and border
- `.btn` background gradient
- `.btn:hover` box shadow
- `.stat-label` color
- `.results-score` color
- `.setting-item select:focus` border color

### 3. `<module-name>-quiz.js`

Follow the exact pattern of `surgery-quiz.js` (with mistake tracking). Key customizations:

- **Class name**: Use PascalCase of the module name (e.g., `AnatomyQuiz`)
- **Data variable**: Reference the correct data array from the data file (e.g., `anatomyData`)
- **localStorage key**: Use `MODULE_NAME_quiz_mistakes` pattern
- **Perfect score message**: Customize to match the topic (e.g., `מושלם! אתה מומחה באנטומיה!`)

The class must include ALL these methods from `surgery-quiz.js`:
- `constructor()` - with mistake tracking initialization
- `loadMistakes()` / `saveMistakes()` - localStorage persistence
- `recordMistake()` / `recordCorrect()` - mistake tracking
- `getMistakeWeight()` - weighted question prioritization
- `initElements()` - DOM element references
- `bindEvents()` - event listeners
- `startQuiz()` - quiz initialization
- `generateQuestions()` - weighted shuffle with category filtering
- `showQuestion()` - render question with shuffled options
- `selectAnswer()` - handle answer with visual feedback
- `nextQuestion()` - advance to next
- `showResults()` - show score with Hebrew performance messages
- `restartQuiz()` - reset to settings

### 4. `<module-name>.js` (Data File)

Create a data file with the correct variable name and structure. Include 3-5 sample questions as a starting template:

```javascript
// MODULE_TITLE Quiz Data
const MODULE_NAMEData = [
    {
        question: "שאלה לדוגמה?",
        options: [
            { text: "תשובה נכונה", correct: true },
            { text: "תשובה שגויה א", correct: false },
            { text: "תשובה שגויה ב", correct: false },
            { text: "תשובה שגויה ג", correct: false }
        ],
        category: "קטגוריה",
        explanation: "הסבר לתשובה הנכונה."
    },
    // ... more sample questions
];
```

The sample questions should be relevant to the module topic if possible. Each question MUST have:
- `question`: String (Hebrew)
- `options`: Array of exactly 4 objects, each with `text` (String) and `correct` (Boolean). Exactly one option must be `correct: true`.
- `category`: String (Hebrew) - used for filtering
- `explanation`: String (Hebrew) - shown after answering

## After Generating

1. List the unique categories from the data file
2. Populate the `<option>` elements in the HTML category selector to match
3. Remind the user to:
   - Add more questions to the data file
   - Add a navigation link from other quiz pages if desired
   - Test the module by opening the HTML file in a browser

## Existing Project Conventions

- All text is in Hebrew (RTL)
- Files are in the project root (no subdirectories for modules)
- File naming: `<name>-quiz.html`, `<name>-styles.css`, `<name>-quiz.js`, `<name>.js`
- Data arrays are named `<name>Data` (camelCase)
- Quiz classes are named `<Name>Quiz` (PascalCase)
- localStorage keys follow `<name>_quiz_mistakes` pattern
- The app uses vanilla JS with no build tools or external dependencies
