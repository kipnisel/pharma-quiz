class FocusedQuiz {
    constructor() {
        this.questions = [];
        this.currentQuestion = 0;
        this.score = 0;
        this.totalQuestions = 10;
        this.selectedCategory = 'all';
        this.mistakeStorageKey = 'focused_quiz_mistakes';
        this.mistakes = this.loadMistakes();

        this.initElements();
        this.bindEvents();
    }

    // Load mistakes from localStorage
    loadMistakes() {
        try {
            const stored = localStorage.getItem(this.mistakeStorageKey);
            return stored ? JSON.parse(stored) : {};
        } catch (e) {
            return {};
        }
    }

    // Save mistakes to localStorage
    saveMistakes() {
        try {
            localStorage.setItem(this.mistakeStorageKey, JSON.stringify(this.mistakes));
        } catch (e) {
            console.warn('Could not save mistakes to localStorage');
        }
    }

    // Record a mistake for a question
    recordMistake(questionText) {
        if (!this.mistakes[questionText]) {
            this.mistakes[questionText] = { count: 0, lastMistake: null };
        }
        this.mistakes[questionText].count++;
        this.mistakes[questionText].lastMistake = Date.now();
        this.saveMistakes();
    }

    // Record a correct answer (reduce mistake weight over time)
    recordCorrect(questionText) {
        if (this.mistakes[questionText] && this.mistakes[questionText].count > 0) {
            this.mistakes[questionText].count = Math.max(0, this.mistakes[questionText].count - 1);
            if (this.mistakes[questionText].count === 0) {
                delete this.mistakes[questionText];
            }
            this.saveMistakes();
        }
    }

    // Get mistake weight for prioritization (higher = more likely to appear)
    getMistakeWeight(questionText) {
        if (!this.mistakes[questionText]) return 1;
        // Weight based on mistake count and recency
        const mistake = this.mistakes[questionText];
        const daysSinceLastMistake = (Date.now() - mistake.lastMistake) / (1000 * 60 * 60 * 24);
        // More recent mistakes get higher priority
        const recencyBonus = Math.max(1, 5 - daysSinceLastMistake);
        return 1 + (mistake.count * 2) + recencyBonus;
    }

    initElements() {
        this.settingsEl = document.getElementById('settings');
        this.quizContainerEl = document.getElementById('quiz-container');
        this.resultsEl = document.getElementById('results');
        this.questionTextEl = document.getElementById('question-text');
        this.questionCategoryEl = document.getElementById('question-category');
        this.optionsEl = document.getElementById('options');
        this.feedbackEl = document.getElementById('feedback');
        this.feedbackTextEl = document.getElementById('feedback-text');
        this.explanationEl = document.getElementById('explanation');
        this.nextBtnEl = document.getElementById('next-btn');
        this.questionNumberEl = document.getElementById('question-number');
        this.totalQuestionsEl = document.getElementById('total-questions');
        this.scoreEl = document.getElementById('score');
        this.finalScoreEl = document.getElementById('final-score');
        this.finalTotalEl = document.getElementById('final-total');
        this.resultsMessageEl = document.getElementById('results-message');
    }

    bindEvents() {
        document.getElementById('start-btn').addEventListener('click', () => this.startQuiz());
        document.getElementById('restart-btn').addEventListener('click', () => this.restartQuiz());
        this.nextBtnEl.addEventListener('click', () => this.nextQuestion());
    }

    startQuiz() {
        this.totalQuestions = parseInt(document.getElementById('question-count').value);
        this.selectedCategory = document.getElementById('category-select').value;
        this.questions = this.generateQuestions();
        this.currentQuestion = 0;
        this.score = 0;

        this.totalQuestionsEl.textContent = this.totalQuestions;
        this.scoreEl.textContent = '0';

        this.settingsEl.classList.add('hidden');
        this.quizContainerEl.classList.add('active');
        this.resultsEl.classList.add('hidden');

        this.showQuestion();
    }

    generateQuestions() {
        let availableQuestions = [...focusedData];

        // Filter by category if selected
        if (this.selectedCategory !== 'all') {
            // Normalize strings to handle potential Unicode encoding differences
            const normalizedSelected = this.selectedCategory.normalize('NFC').trim();
            availableQuestions = availableQuestions.filter(q =>
                q.category.normalize('NFC').trim() === normalizedSelected
            );
        }

        // Weighted shuffle - prioritize questions with previous mistakes
        availableQuestions = availableQuestions.map(q => ({
            ...q,
            weight: this.getMistakeWeight(q.question)
        }));

        // Sort by weighted random - questions with higher weights more likely to appear first
        availableQuestions = availableQuestions.sort((a, b) => {
            const randomA = Math.random() * a.weight;
            const randomB = Math.random() * b.weight;
            return randomB - randomA;
        });

        // Take only the number we need
        return availableQuestions.slice(0, this.totalQuestions);
    }

    showQuestion() {
        if (this.currentQuestion >= this.questions.length) {
            this.showResults();
            return;
        }

        const question = this.questions[this.currentQuestion];
        this.questionNumberEl.textContent = this.currentQuestion + 1;
        this.questionCategoryEl.textContent = question.category;
        this.questionTextEl.textContent = question.question;

        // Shuffle options for each display
        const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

        this.optionsEl.innerHTML = '';
        shuffledOptions.forEach((option, index) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'option';
            optionEl.textContent = option.text;
            optionEl.addEventListener('click', () => this.selectAnswer(index, option.correct, question));
            this.optionsEl.appendChild(optionEl);
        });

        this.feedbackEl.classList.add('hidden');
        this.nextBtnEl.classList.add('hidden');
    }

    selectAnswer(index, isCorrect, question) {
        const options = this.optionsEl.querySelectorAll('.option');

        // Disable all options
        options.forEach(opt => opt.classList.add('disabled'));

        // Mark selected answer
        options[index].classList.add(isCorrect ? 'correct' : 'incorrect');

        // Mark correct answer if wrong
        if (!isCorrect) {
            options.forEach((opt, i) => {
                // Find the correct option by comparing text
                const optionText = opt.textContent;
                const correctOption = question.options.find(o => o.correct);
                if (optionText === correctOption.text) {
                    opt.classList.add('correct');
                }
            });
        }

        // Update score and track mistakes
        if (isCorrect) {
            this.score++;
            this.scoreEl.textContent = this.score;
            this.recordCorrect(question.question);
        } else {
            this.recordMistake(question.question);
        }

        // Show feedback
        this.feedbackEl.classList.remove('hidden', 'correct', 'incorrect');
        this.feedbackEl.classList.add(isCorrect ? 'correct' : 'incorrect');
        this.feedbackTextEl.textContent = isCorrect ? 'תשובה נכונה!' : 'תשובה שגויה';
        this.explanationEl.textContent = question.explanation;

        this.nextBtnEl.classList.remove('hidden');
    }

    nextQuestion() {
        this.currentQuestion++;
        this.showQuestion();
    }

    showResults() {
        this.quizContainerEl.classList.remove('active');
        this.resultsEl.classList.remove('hidden');

        this.finalScoreEl.textContent = this.score;
        this.finalTotalEl.textContent = this.totalQuestions;

        const percentage = (this.score / this.totalQuestions) * 100;
        let message = '';

        if (percentage === 100) {
            message = 'מושלם! שליטה מעולה בחומר!';
        } else if (percentage >= 80) {
            message = 'מצוין! יש לך ידע מרשים!';
        } else if (percentage >= 60) {
            message = 'טוב מאוד! יש מקום לשיפור קטן';
        } else if (percentage >= 40) {
            message = 'לא רע, אבל כדאי לחזור על החומר';
        } else {
            message = 'צריך קצת יותר לימוד, בהצלחה!';
        }

        this.resultsMessageEl.textContent = message;
    }

    restartQuiz() {
        this.resultsEl.classList.add('hidden');
        this.quizContainerEl.classList.remove('active');
        this.settingsEl.classList.remove('hidden');
    }
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    new FocusedQuiz();
});
