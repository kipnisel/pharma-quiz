class PharmaQuiz {
    constructor() {
        this.drugs = drugsData.filter(d => d.name && d.name.length > 3);
        this.questions = [];
        this.currentQuestion = 0;
        this.score = 0;
        this.totalQuestions = 10;
        this.questionType = 'all';

        this.initElements();
        this.bindEvents();
    }

    initElements() {
        this.settingsEl = document.getElementById('settings');
        this.quizContainerEl = document.getElementById('quiz-container');
        this.resultsEl = document.getElementById('results');
        this.questionTextEl = document.getElementById('question-text');
        this.questionTypeEl = document.getElementById('question-type');
        this.optionsEl = document.getElementById('options');
        this.feedbackEl = document.getElementById('feedback');
        this.feedbackTextEl = document.getElementById('feedback-text');
        this.correctAnswerEl = document.getElementById('correct-answer');
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
        this.questionType = document.getElementById('question-types').value;
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
        const questions = [];
        const types = this.questionType === 'all'
            ? ['mechanism', 'clinical', 'toxicity', 'drug']
            : [this.questionType];

        const validDrugs = this.drugs.filter(d =>
            d.mechanism || d.clinical || d.toxicity
        );

        for (let i = 0; i < this.totalQuestions; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            const question = this.createQuestion(type, validDrugs);
            if (question) {
                questions.push(question);
            }
        }

        return questions;
    }

    createQuestion(type, validDrugs) {
        const shuffled = [...validDrugs].sort(() => Math.random() - 0.5);

        switch(type) {
            case 'mechanism':
                return this.createMechanismQuestion(shuffled);
            case 'clinical':
                return this.createClinicalQuestion(shuffled);
            case 'toxicity':
                return this.createToxicityQuestion(shuffled);
            case 'drug':
                return this.createDrugQuestion(shuffled);
            default:
                return this.createMechanismQuestion(shuffled);
        }
    }

    createMechanismQuestion(drugs) {
        const drugsWithMech = drugs.filter(d => d.mechanism && d.mechanism.length > 10);
        if (drugsWithMech.length < 4) return this.createDrugQuestion(drugs);

        const correctDrug = drugsWithMech[0];
        const wrongDrugs = drugsWithMech.slice(1, 4);

        const options = [
            { text: this.formatDrugName(correctDrug.name), correct: true },
            ...wrongDrugs.map(d => ({ text: this.formatDrugName(d.name), correct: false }))
        ].sort(() => Math.random() - 0.5);

        return {
            type: 'מנגנון פעולה',
            question: `איזו תרופה פועלת במנגנון הבא?\n\n"${this.truncateText(correctDrug.mechanism, 200)}"`,
            options,
            explanation: `התשובה הנכונה: ${this.formatDrugName(correctDrug.name)}`
        };
    }

    createClinicalQuestion(drugs) {
        const drugsWithClinical = drugs.filter(d => d.clinical && d.clinical.length > 10);
        if (drugsWithClinical.length < 4) return this.createDrugQuestion(drugs);

        const correctDrug = drugsWithClinical[0];
        const wrongDrugs = drugsWithClinical.slice(1, 4);

        const options = [
            { text: this.formatDrugName(correctDrug.name), correct: true },
            ...wrongDrugs.map(d => ({ text: this.formatDrugName(d.name), correct: false }))
        ].sort(() => Math.random() - 0.5);

        return {
            type: 'שימושים קליניים',
            question: `איזו תרופה משמשת לטיפול ב:\n\n"${this.truncateText(correctDrug.clinical, 200)}"`,
            options,
            explanation: `התשובה הנכונה: ${this.formatDrugName(correctDrug.name)}`
        };
    }

    createToxicityQuestion(drugs) {
        const drugsWithTox = drugs.filter(d => d.toxicity && d.toxicity.length > 10);
        if (drugsWithTox.length < 4) return this.createDrugQuestion(drugs);

        const correctDrug = drugsWithTox[0];
        const wrongDrugs = drugsWithTox.slice(1, 4);

        const options = [
            { text: this.formatDrugName(correctDrug.name), correct: true },
            ...wrongDrugs.map(d => ({ text: this.formatDrugName(d.name), correct: false }))
        ].sort(() => Math.random() - 0.5);

        return {
            type: 'תופעות לוואי',
            question: `לאיזו תרופה יש את תופעות הלוואי הבאות?\n\n"${this.truncateText(correctDrug.toxicity, 200)}"`,
            options,
            explanation: `התשובה הנכונה: ${this.formatDrugName(correctDrug.name)}`
        };
    }

    createDrugQuestion(drugs) {
        const drugsWithData = drugs.filter(d => d.mechanism || d.clinical);
        if (drugsWithData.length < 4) return null;

        const correctDrug = drugsWithData[0];
        const wrongDrugs = drugsWithData.slice(1, 4);

        // Decide what to ask about
        const askAbout = correctDrug.mechanism ? 'mechanism' : 'clinical';
        const questionText = askAbout === 'mechanism'
            ? `מהו מנגנון הפעולה של ${this.formatDrugName(correctDrug.name)}?`
            : `מהם השימושים הקליניים של ${this.formatDrugName(correctDrug.name)}?`;

        const correctAnswer = askAbout === 'mechanism' ? correctDrug.mechanism : correctDrug.clinical;

        const options = [
            { text: this.truncateText(correctAnswer, 150), correct: true },
            ...wrongDrugs.map(d => ({
                text: this.truncateText(askAbout === 'mechanism' ? (d.mechanism || d.clinical) : (d.clinical || d.mechanism), 150),
                correct: false
            }))
        ].sort(() => Math.random() - 0.5);

        return {
            type: 'זיהוי תרופה',
            question: questionText,
            options,
            explanation: `התשובה הנכונה: ${this.truncateText(correctAnswer, 300)}`
        };
    }

    formatDrugName(name) {
        // Clean up drug name for display
        return name.replace(/\s+/g, ' ').trim();
    }

    truncateText(text, maxLength) {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }

    showQuestion() {
        if (this.currentQuestion >= this.questions.length) {
            this.showResults();
            return;
        }

        const question = this.questions[this.currentQuestion];
        this.questionNumberEl.textContent = this.currentQuestion + 1;
        this.questionTypeEl.textContent = question.type;
        this.questionTextEl.textContent = question.question;

        this.optionsEl.innerHTML = '';
        question.options.forEach((option, index) => {
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
            question.options.forEach((opt, i) => {
                if (opt.correct) {
                    options[i].classList.add('correct');
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
        this.correctAnswerEl.textContent = question.explanation;

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
            message = 'מושלם! אתה מומחה בפרמקולוגיה! 🏆';
        } else if (percentage >= 80) {
            message = 'מצוין! יש לך ידע מרשים! 🌟';
        } else if (percentage >= 60) {
            message = 'טוב מאוד! יש מקום לשיפור קטן 📚';
        } else if (percentage >= 40) {
            message = 'לא רע, אבל כדאי לחזור על החומר 📖';
        } else {
            message = 'צריך קצת יותר לימוד, בהצלחה! 💪';
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
    new PharmaQuiz();
});
