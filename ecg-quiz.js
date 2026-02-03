class ECGQuiz {
    constructor() {
        this.questions = [];
        this.currentQuestion = 0;
        this.score = 0;
        this.totalQuestions = 10;
        this.selectedCategory = 'all';

        this.initElements();
        this.bindEvents();
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
        let availableQuestions = [...ecgData];

        // Filter by category if selected
        if (this.selectedCategory !== 'all') {
            availableQuestions = availableQuestions.filter(q => q.category === this.selectedCategory);
        }

        // Shuffle questions
        availableQuestions = availableQuestions.sort(() => Math.random() - 0.5);

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

        // Update score
        if (isCorrect) {
            this.score++;
            this.scoreEl.textContent = this.score;
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
            message = 'מושלם! אתה מומחה באק"ג!';
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
    new ECGQuiz();
});
