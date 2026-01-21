// Pharmacology Basics - Lecture 1 Quiz Data
// Based on Pharmacokinetics Fundamentals lecture

const lecture1Data = [
    // Definition of Pharmacology
    {
        question: "מהי פרמקולוגיה?",
        options: [
            { text: "המדע החוקר תרופות ואינטראקציות שלהן עם מערכות חיים", correct: true },
            { text: "המדע החוקר אנטומיה אנושית", correct: false },
            { text: "המדע החוקר תהליכי מחלות", correct: false },
            { text: "המדע החוקר פרוצדורות כירורגיות", correct: false }
        ],
        category: "הגדרות",
        explanation: "פרמקולוגיה היא המדע החוקר תרופות ואינטראקציות שלהן עם מערכות חיים."
    },
    {
        question: "מהי תרופה (Drug)?",
        options: [
            { text: "חומר המשפיע על תפקוד תאים חיים", correct: true },
            { text: "רק תרופות מרשם", correct: false },
            { text: "רק חומרים הגורמים להתמכרות", correct: false },
            { text: "רק כימיקלים סינתטיים", correct: false }
        ],
        category: "הגדרות",
        explanation: "תרופה היא כל חומר המשפיע על תפקוד תאים חיים, המשמש לטיפול, מניעה או אבחון מחלות."
    },

    // Drug Naming
    {
        question: "איזה סוג שם של תרופה הוא ייחודי ושייך לחברה?",
        options: [
            { text: "שם מסחרי (Trade name)", correct: true },
            { text: "שם גנרי", correct: false },
            { text: "שם כימי", correct: false },
            { text: "שם IUPAC", correct: false }
        ],
        category: "שמות תרופות",
        explanation: "שמות מסחריים הם שמות ייחודיים בבעלות חברות תרופות. דוגמאות: Advil, Tylenol."
    },
    {
        question: "השם הגנרי של תרופה נקרא גם:",
        options: [
            { text: "שם לא קנייני (Non-proprietary name)", correct: true },
            { text: "שם מותג", correct: false },
            { text: "נוסחה כימית", correct: false },
            { text: "שם מסחרי", correct: false }
        ],
        category: "שמות תרופות",
        explanation: "שם גנרי = שם לא קנייני. הוא נקבע על ידי USAN (United States Adopted Names)."
    },
    {
        question: "איזה שם של תרופה מתאר את המבנה הכימי?",
        options: [
            { text: "שם כימי", correct: true },
            { text: "שם גנרי", correct: false },
            { text: "שם מסחרי", correct: false },
            { text: "שם מותג", correct: false }
        ],
        category: "שמות תרופות",
        explanation: "שמות כימיים מתארים את המבנה הכימי של התרופה. דוגמה: N-acetyl-para-aminophenol (אצטמינופן)."
    },

    // Drug Development Phases
    {
        question: "באיזה שלב של ניסויים קליניים נבדקת תרופה לראשונה על בני אדם?",
        options: [
            { text: "שלב 1 (Phase 1)", correct: true },
            { text: "שלב 2 (Phase 2)", correct: false },
            { text: "שלב 3 (Phase 3)", correct: false },
            { text: "שלב 4 (Phase 4)", correct: false }
        ],
        category: "פיתוח תרופות",
        explanation: "ניסויי שלב 1 הם הבדיקות הראשונות בבני אדם, בדרך כלל על 20-100 מתנדבים בריאים להערכת בטיחות ומינון."
    },
    {
        question: "באיזה שלב של ניסויים קליניים משתתפים אלפי מטופלים ומשווים לטיפול סטנדרטי?",
        options: [
            { text: "שלב 3 (Phase 3)", correct: true },
            { text: "שלב 1 (Phase 1)", correct: false },
            { text: "שלב 2 (Phase 2)", correct: false },
            { text: "שלב 4 (Phase 4)", correct: false }
        ],
        category: "פיתוח תרופות",
        explanation: "שלב 3 כולל 1,000-6,000 מטופלים ומשווה את התרופה החדשה לטיפול סטנדרטי או פלצבו."
    },
    {
        question: "מעקב פוסט-שיווקי (Post-marketing surveillance) מתרחש באיזה שלב?",
        options: [
            { text: "שלב 4 (Phase 4)", correct: true },
            { text: "שלב 1 (Phase 1)", correct: false },
            { text: "שלב 2 (Phase 2)", correct: false },
            { text: "שלב 3 (Phase 3)", correct: false }
        ],
        category: "פיתוח תרופות",
        explanation: "שלב 4 הוא מעקב פוסט-שיווקי, ניטור התרופה לאחר אישור FDA לתופעות לוואי נדירות או ארוכות טווח."
    },
    {
        question: "ניסויים קליניים בשלב 2 בודקים בעיקר:",
        options: [
            { text: "יעילות במטופלים עם המחלה המטרה", correct: true },
            { text: "בטיחות במתנדבים בריאים", correct: false },
            { text: "מעקב פוסט-שיווקי", correct: false },
            { text: "השוואה לטיפול סטנדרטי", correct: false }
        ],
        category: "פיתוח תרופות",
        explanation: "שלב 2 כולל 100-500 מטופלים עם המחלה המטרה להערכת יעילות."
    },

    // FDA Pregnancy Categories
    {
        question: "איזו קטגוריית הריון של FDA מציינת 'אין סיכון במחקרים מבוקרים בבני אדם'?",
        options: [
            { text: "קטגוריה A", correct: true },
            { text: "קטגוריה B", correct: false },
            { text: "קטגוריה C", correct: false },
            { text: "קטגוריה D", correct: false }
        ],
        category: "קטגוריות FDA",
        explanation: "קטגוריה A: אין סיכון במחקרים מבוקרים בבני אדם."
    },
    {
        question: "איזו קטגוריית הריון של FDA מציינת תרופות שאסורות בהריון?",
        options: [
            { text: "קטגוריה X", correct: true },
            { text: "קטגוריה D", correct: false },
            { text: "קטגוריה C", correct: false },
            { text: "קטגוריה B", correct: false }
        ],
        category: "קטגוריות FDA",
        explanation: "קטגוריה X: התווית נגד - הסיכונים עולים בבירור על היתרונות."
    },
    {
        question: "קטגוריה D בסיווג הריון של FDA משמעותה:",
        options: [
            { text: "ראיות חיוביות לסיכון, אך היתרונות עשויים לעלות על הסיכונים", correct: true },
            { text: "לא הודגם סיכון", correct: false },
            { text: "התווית נגד בהריון", correct: false },
            { text: "אין מחקרים על בעלי חיים", correct: false }
        ],
        category: "קטגוריות FDA",
        explanation: "קטגוריה D: ראיות חיוביות לסיכון, אך היתרונות עשויים לעלות על הסיכונים במצבים חמורים."
    },

    // Pharmacokinetics - General
    {
        question: "מה מייצג הקיצור ADME בפרמקוקינטיקה?",
        options: [
            { text: "ספיגה, פיזור, מטבוליזם, הפרשה (Absorption, Distribution, Metabolism, Excretion)", correct: true },
            { text: "מתן, מינון, ניטור, הערכה", correct: false },
            { text: "פעולה, משך, מנגנון, השפעה", correct: false },
            { text: "אגוניסט, תרופה, ממברנה, אנזים", correct: false }
        ],
        category: "פרמקוקינטיקה",
        explanation: "ADME = Absorption, Distribution, Metabolism, Excretion - ארבעת התהליכים העיקריים של פרמקוקינטיקה."
    },
    {
        question: "פרמקוקינטיקה מתארת בצורה הטובה ביותר:",
        options: [
            { text: "מה הגוף עושה לתרופה", correct: true },
            { text: "מה התרופה עושה לגוף", correct: false },
            { text: "כיצד תרופות מתקשרות עם קולטנים", correct: false },
            { text: "מחקר תופעות לוואי של תרופות", correct: false }
        ],
        category: "פרמקוקינטיקה",
        explanation: "פרמקוקינטיקה = מה הגוף עושה לתרופה. פרמקודינמיקה = מה התרופה עושה לגוף."
    },
    {
        question: "פרמקודינמיקה מתארת בצורה הטובה ביותר:",
        options: [
            { text: "מה התרופה עושה לגוף", correct: true },
            { text: "מה הגוף עושה לתרופה", correct: false },
            { text: "כיצד תרופות נספגות", correct: false },
            { text: "כיצד תרופות מופרשות", correct: false }
        ],
        category: "פרמקוקינטיקה",
        explanation: "פרמקודינמיקה = מה התרופה עושה לגוף (השפעות ומנגנונים של תרופות)."
    },

    // Routes of Administration
    {
        question: "לאיזו דרך מתן יש זמינות ביולוגית של 100%?",
        options: [
            { text: "תוך-ורידי (IV)", correct: true },
            { text: "פומי (Oral)", correct: false },
            { text: "תוך-שרירי (IM)", correct: false },
            { text: "תת-עורי (SC)", correct: false }
        ],
        category: "דרכי מתן",
        explanation: "מתן IV מעביר את התרופה ישירות לזרם הדם, נותן זמינות ביולוגית של 100%."
    },
    {
        question: "דרכי מתן אנטרליות כוללות את כולן חוץ מ:",
        options: [
            { text: "תוך-ורידי (IV)", correct: true },
            { text: "פומי (Oral)", correct: false },
            { text: "תת-לשוני (Sublingual)", correct: false },
            { text: "רקטלי (Rectal)", correct: false }
        ],
        category: "דרכי מתן",
        explanation: "דרכי מתן אנטרליות מערבות את מערכת העיכול: פומי, תת-לשוני, בוקלי, רקטלי. IV היא דרך פרנטרלית."
    },
    {
        question: "איזו דרך מתן עוקפת מטבוליזם מעבר ראשון (First-pass)?",
        options: [
            { text: "תת-לשוני (Sublingual)", correct: true },
            { text: "פומי (Oral)", correct: false },
            { text: "צינור קיבה (Gastric tube)", correct: false },
            { text: "רקטלי (באופן חלקי)", correct: false }
        ],
        category: "דרכי מתן",
        explanation: "ספיגה תת-לשונית עוברת ישירות למחזור הדם הסיסטמי, עוקפת את מטבוליזם המעבר הראשון בכבד."
    },
    {
        question: "מטבוליזם מעבר ראשון (First-pass) מתרחש בעיקר ב:",
        options: [
            { text: "כבד", correct: true },
            { text: "כליות", correct: false },
            { text: "ריאות", correct: false },
            { text: "קיבה", correct: false }
        ],
        category: "דרכי מתן",
        explanation: "מטבוליזם מעבר ראשון מתרחש בכבד כאשר תרופות הנספגות ממערכת העיכול עוברות דרך מחזור הדם הפורטלי."
    },

    // Absorption
    {
        question: "רוב התרופות חוצות ממברנות תאים על ידי:",
        options: [
            { text: "דיפוזיה פסיבית", correct: true },
            { text: "הובלה פעילה", correct: false },
            { text: "פינוציטוזיס", correct: false },
            { text: "דיפוזיה מונחית", correct: false }
        ],
        category: "ספיגה",
        explanation: "דיפוזיה פסיבית היא המנגנון הנפוץ ביותר לספיגת תרופות דרך ממברנות תאים."
    },
    {
        question: "איזו צורה של תרופה חומצית חלשה נספגת טוב יותר?",
        options: [
            { text: "צורה לא-מיוננת (לא טעונה)", correct: true },
            { text: "צורה מיוננת (טעונה)", correct: false },
            { text: "צורת מלח", correct: false },
            { text: "צורה מוהידרטת", correct: false }
        ],
        category: "ספיגה",
        explanation: "צורות לא-מיוננות (לא טעונות) הן יותר מסיסות בשומן וחוצות ממברנות תאים בקלות רבה יותר."
    },
    {
        question: "תרופה חומצית חלשה נספגת הכי טוב ב:",
        options: [
            { text: "סביבה חומצית (קיבה)", correct: true },
            { text: "סביבה בסיסית (מעי)", correct: false },
            { text: "סביבה ניטרלית", correct: false },
            { text: "לא משנה", correct: false }
        ],
        category: "ספיגה",
        explanation: "חומצות חלשות יותר לא-מיוננות בסביבות חומציות, מה שהופך אותן לנספגות טוב יותר בקיבה."
    },
    {
        question: "תרופה בסיסית חלשה נספגת הכי טוב ב:",
        options: [
            { text: "סביבה בסיסית (מעי)", correct: true },
            { text: "סביבה חומצית (קיבה)", correct: false },
            { text: "סביבה ניטרלית", correct: false },
            { text: "לא משנה", correct: false }
        ],
        category: "ספיגה",
        explanation: "בסיסים חלשים יותר לא-מיוננים בסביבות בסיסיות, מה שהופך אותם לנספגים טוב יותר במעי."
    },

    // Bioavailability
    {
        question: "זמינות ביולוגית (F) מוגדרת כ:",
        options: [
            { text: "השיעור של התרופה שמגיע למחזור הסיסטמי", correct: true },
            { text: "כמות התרופה הכוללת בגוף", correct: false },
            { text: "קצב סילוק התרופה", correct: false },
            { text: "הנפח שבו התרופה מתפזרת", correct: false }
        ],
        category: "זמינות ביולוגית",
        explanation: "זמינות ביולוגית (F) היא השיעור של התרופה המנוהלת שמגיע למחזור הסיסטמי ללא שינוי."
    },
    {
        question: "איזה גורם לא משפיע על זמינות ביולוגית?",
        options: [
            { text: "גובה המטופל", correct: true },
            { text: "מטבוליזם מעבר ראשון", correct: false },
            { text: "פורמולציית התרופה", correct: false },
            { text: "דרך המתן", correct: false }
        ],
        category: "זמינות ביולוגית",
        explanation: "זמינות ביולוגית מושפעת ממטבוליזם מעבר ראשון, מסיסות התרופה, פורמולציה ודרך המתן."
    },

    // Distribution
    {
        question: "נפח הפיזור (Vd) מציין:",
        options: [
            { text: "עד כמה התרופה מתפזרת בגוף באופן נרחב", correct: true },
            { text: "הנפח האמיתי של הדם", correct: false },
            { text: "קצב סילוק התרופה", correct: false },
            { text: "כמות התרופה שנספגה", correct: false }
        ],
        category: "פיזור",
        explanation: "Vd הוא הנפח התיאורטי הדרוש להכיל את כמות התרופה הכוללת בריכוז הפלזמה."
    },
    {
        question: "לתרופה עם מסיסות גבוהה בשומן יהיה:",
        options: [
            { text: "נפח פיזור גדול", correct: true },
            { text: "נפח פיזור קטן", correct: false },
            { text: "ללא פיזור לרקמות", correct: false },
            { text: "100% קשירה לחלבוני פלזמה", correct: false }
        ],
        category: "פיזור",
        explanation: "תרופות מסיסות בשומן מתפזרות באופן נרחב לרקמות, מה שגורם ל-Vd גדול."
    },
    {
        question: "איזה חלבון הוא החלבון העיקרי הקושר תרופות בפלזמה?",
        options: [
            { text: "אלבומין", correct: true },
            { text: "גלובולין", correct: false },
            { text: "פיברינוגן", correct: false },
            { text: "המוגלובין", correct: false }
        ],
        category: "פיזור",
        explanation: "אלבומין הוא חלבון הפלזמה העיקרי הקושר תרופות (במיוחד תרופות חומציות)."
    },
    {
        question: "רק תרופה _____ יכולה להפעיל השפעה פרמקולוגית:",
        options: [
            { text: "לא קשורה (חופשית)", correct: true },
            { text: "קשורה לחלבון", correct: false },
            { text: "ממוטבלת", correct: false },
            { text: "מיוננת", correct: false }
        ],
        category: "פיזור",
        explanation: "רק תרופה לא קשורה (חופשית) יכולה לחצות ממברנות ולהתקשר עם קולטנים כדי לייצר השפעות."
    },

    // Metabolism
    {
        question: "תגובות מטבוליזם פאזה 1 כוללות את כולן חוץ מ:",
        options: [
            { text: "גלוקורונידציה", correct: true },
            { text: "חמצון", correct: false },
            { text: "חיזור", correct: false },
            { text: "הידרוליזה", correct: false }
        ],
        category: "מטבוליזם",
        explanation: "פאזה 1 = חמצון, חיזור, הידרוליזה. פאזה 2 = תגובות צימוד כמו גלוקורונידציה."
    },
    {
        question: "האתר העיקרי למטבוליזם של תרופות הוא:",
        options: [
            { text: "כבד", correct: true },
            { text: "כליה", correct: false },
            { text: "ריאה", correct: false },
            { text: "מעי", correct: false }
        ],
        category: "מטבוליזם",
        explanation: "הכבד הוא האתר העיקרי למטבוליזם של תרופות, המכיל את רוב האנזימים המטבוליזמים."
    },
    {
        question: "אנזימי ציטוכרום P450 מעורבים ב:",
        options: [
            { text: "מטבוליזם פאזה 1", correct: true },
            { text: "מטבוליזם פאזה 2", correct: false },
            { text: "הפרשת תרופות", correct: false },
            { text: "ספיגת תרופות", correct: false }
        ],
        category: "מטבוליזם",
        explanation: "אנזימי CYP450 מזרזים תגובות חמצון של פאזה 1, המסלול החשוב ביותר למטבוליזם של תרופות."
    },
    {
        question: "מטבוליזם פאזה 2 בדרך כלל הופך תרופות ל:",
        options: [
            { text: "יותר מסיסות במים להפרשה", correct: true },
            { text: "יותר מסיסות בשומן", correct: false },
            { text: "יותר פעילות", correct: false },
            { text: "יותר רעילות", correct: false }
        ],
        category: "מטבוליזם",
        explanation: "תגובות צימוד של פאזה 2 מוסיפות קבוצות פולריות, והופכות תרופות ליותר מסיסות במים להפרשה כלייתית."
    },
    {
        question: "פרו-דראג (Prodrug) היא:",
        options: [
            { text: "תרכובת לא פעילה שהופכת לתרופה פעילה בגוף", correct: true },
            { text: "תרופה פעילה שהופכת ללא פעילה", correct: false },
            { text: "תרופה הניתנת לפני ניתוח", correct: false },
            { text: "תרופה בדרגה מקצועית", correct: false }
        ],
        category: "מטבוליזם",
        explanation: "פרו-דראגס הן תרכובות לא פעילות שעוברות מטבוליזם להפוך לתרופות פעילות."
    },

    // Excretion
    {
        question: "האיבר העיקרי להפרשת תרופות הוא:",
        options: [
            { text: "כליה", correct: true },
            { text: "כבד", correct: false },
            { text: "ריאה", correct: false },
            { text: "עור", correct: false }
        ],
        category: "הפרשה",
        explanation: "הכליות הן האיברים העיקריים להפרשת תרופות, מסלקות תרופות מסיסות במים ומטבוליטים."
    },
    {
        question: "הפרשת תרופות כלייתית כוללת את כולן חוץ מ:",
        options: [
            { text: "חמצון", correct: true },
            { text: "סינון גלומרולרי", correct: false },
            { text: "הפרשה טובולרית", correct: false },
            { text: "ספיגה חוזרת טובולרית", correct: false }
        ],
        category: "הפרשה",
        explanation: "הפרשה כלייתית כוללת סינון, הפרשה וספיגה חוזרת. חמצון הוא מטבוליזם, לא הפרשה."
    },
    {
        question: "הבססת השתן מגבירה הפרשה של:",
        options: [
            { text: "חומצות חלשות", correct: true },
            { text: "בסיסים חלשים", correct: false },
            { text: "תרופות ניטרליות", correct: false },
            { text: "כל התרופות באופן שווה", correct: false }
        ],
        category: "הפרשה",
        explanation: "שתן בסיסי מיינן חומצות חלשות, מונע ספיגה חוזרת ומגביר הפרשה (לכידת יונים)."
    },

    // Half-Life
    {
        question: "זמן מחצית חיים (t½) מוגדר כ:",
        options: [
            { text: "הזמן לירידת ריכוז הפלזמה ב-50%", correct: true },
            { text: "הזמן לסילוק מלא של התרופה", correct: false },
            { text: "הזמן להגעה לריכוז שיא", correct: false },
            { text: "הזמן לספיגת התרופה", correct: false }
        ],
        category: "זמן מחצית חיים",
        explanation: "זמן מחצית חיים הוא הזמן הדרוש לירידת ריכוז התרופה בפלזמה ב-50%."
    },
    {
        question: "כמה זמני מחצית חיים בערך דרושים להגעה למצב יציב (Steady state)?",
        options: [
            { text: "4-5 זמני מחצית חיים", correct: true },
            { text: "1-2 זמני מחצית חיים", correct: false },
            { text: "10 זמני מחצית חיים", correct: false },
            { text: "תלוי במינון", correct: false }
        ],
        category: "זמן מחצית חיים",
        explanation: "מצב יציב מושג לאחר כ-4-5 זמני מחצית חיים (>94% מהריכוז הסופי)."
    },
    {
        question: "אחרי 4 זמני מחצית חיים, כמה אחוז מהתרופה נותר?",
        options: [
            { text: "6.25%", correct: true },
            { text: "25%", correct: false },
            { text: "12.5%", correct: false },
            { text: "50%", correct: false }
        ],
        category: "זמן מחצית חיים",
        explanation: "אחרי 4 זמני מחצית חיים: 100% → 50% → 25% → 12.5% → 6.25% נותר."
    },

    // Kinetics
    {
        question: "קינטיקה מסדר ראשון (First-order) משמעותה:",
        options: [
            { text: "שיעור קבוע של תרופה מסולק ליחידת זמן", correct: true },
            { text: "כמות קבועה של תרופה מסולקת ליחידת זמן", correct: false },
            { text: "התרופה מסולקת מיד", correct: false },
            { text: "התרופה לא עוברת מטבוליזם", correct: false }
        ],
        category: "קינטיקה",
        explanation: "סדר ראשון: שיעור קבוע מסולק ליחידת זמן. הקצב תלוי בריכוז."
    },
    {
        question: "קינטיקה מסדר אפס (Zero-order) משמעותה:",
        options: [
            { text: "כמות קבועה של תרופה מסולקת ליחידת זמן", correct: true },
            { text: "שיעור קבוע של תרופה מסולק ליחידת זמן", correct: false },
            { text: "אין סילוק תרופה", correct: false },
            { text: "הסילוק מיידי", correct: false }
        ],
        category: "קינטיקה",
        explanation: "סדר אפס: כמות קבועה מסולקת ליחידת זמן, ללא תלות בריכוז. האנזימים רוויים."
    },
    {
        question: "איזו תרופה מציגה קינטיקה מסדר אפס במינונים טיפוליים?",
        options: [
            { text: "אתנול (אלכוהול)", correct: true },
            { text: "אספירין", correct: false },
            { text: "פניצילין", correct: false },
            { text: "איבופרופן", correct: false }
        ],
        category: "קינטיקה",
        explanation: "אתנול עוקב אחר קינטיקה מסדר אפס כי אלכוהול דהידרוגנאז הופך רווי."
    },
    {
        question: "רוב התרופות עוקבות אחר איזה סוג קינטיקת סילוק?",
        options: [
            { text: "סדר ראשון", correct: true },
            { text: "סדר אפס", correct: false },
            { text: "סדר שני", correct: false },
            { text: "סדר מעורב", correct: false }
        ],
        category: "קינטיקה",
        explanation: "רוב התרופות עוקבות אחר קינטיקה מסדר ראשון בריכוזים טיפוליים."
    },

    // Loading Dose
    {
        question: "הנוסחה למינון טעינה (Loading dose) היא:",
        options: [
            { text: "LD = Vd × Cp", correct: true },
            { text: "LD = Cp / Vd", correct: false },
            { text: "LD = Clearance × t½", correct: false },
            { text: "LD = Dose / Bioavailability", correct: false }
        ],
        category: "מינון טעינה",
        explanation: "מינון טעינה = נפח פיזור × ריכוז פלזמה מטרה (LD = Vd × Cp)."
    },
    {
        question: "מינון טעינה משמש כדי:",
        options: [
            { text: "להגיע במהירות לריכוז טיפולי", correct: true },
            { text: "לבנות באיטיות רמות תרופה", correct: false },
            { text: "להפחית תופעות לוואי", correct: false },
            { text: "להגדיל זמן מחצית חיים", correct: false }
        ],
        category: "מינון טעינה",
        explanation: "מינוני טעינה משיגים רמות טיפוליות במהירות מבלי להמתין 4-5 זמני מחצית חיים."
    },

    // Clearance
    {
        question: "פינוי (Clearance) מייצג:",
        options: [
            { text: "נפח פלזמה המנוקה מתרופה ליחידת זמן", correct: true },
            { text: "כמות התרופה המסולקת למינון", correct: false },
            { text: "זמן לסילוק כל התרופה", correct: false },
            { text: "קצב ספיגת התרופה", correct: false }
        ],
        category: "פינוי",
        explanation: "פינוי הוא נפח הפלזמה שממנו התרופה מוסרת לחלוטין ליחידת זמן."
    },
    {
        question: "פינוי גופני כולל שווה ל:",
        options: [
            { text: "פינוי כלייתי + פינוי כבדי + פינוי אחר", correct: true },
            { text: "פינוי כלייתי בלבד", correct: false },
            { text: "פינוי כבדי בלבד", correct: false },
            { text: "Vd × זמן מחצית חיים", correct: false }
        ],
        category: "פינוי",
        explanation: "פינוי כולל הוא סכום כל הפינויים מאיברים (כליה, כבד ומסלולים אחרים)."
    },

    // Pharmacodynamics
    {
        question: "אגוניסט היא תרופה ש:",
        options: [
            { text: "נקשרת לקולטן ומפעילה אותו", correct: true },
            { text: "נקשרת לקולטן וחוסמת אותו", correct: false },
            { text: "מונעת ספיגת תרופה", correct: false },
            { text: "מגבירה מטבוליזם של תרופה", correct: false }
        ],
        category: "פרמקודינמיקה",
        explanation: "אגוניסטים נקשרים לקולטנים ומייצרים תגובה ביולוגית (מפעילים את הקולטן)."
    },
    {
        question: "אנטגוניסט היא תרופה ש:",
        options: [
            { text: "נקשרת לקולטן וחוסמת את השפעת האגוניסטים", correct: true },
            { text: "נקשרת לקולטן ומפעילה אותו", correct: false },
            { text: "מגבירה השפעות אגוניסטים", correct: false },
            { text: "אין לה אינטראקציה עם קולטנים", correct: false }
        ],
        category: "פרמקודינמיקה",
        explanation: "אנטגוניסטים נקשרים לקולטנים אך לא מפעילים אותם, חוסמים את פעולת האגוניסטים."
    },
    {
        question: "אנטגוניסט תחרותי:",
        options: [
            { text: "ניתן להתגבר עליו על ידי הגברת ריכוז האגוניסט", correct: true },
            { text: "לא ניתן להתגבר עליו בשום אמצעי", correct: false },
            { text: "נקשר באופן בלתי הפיך לקולטן", correct: false },
            { text: "נקשר לאתר שונה מהאגוניסט", correct: false }
        ],
        category: "פרמקודינמיקה",
        explanation: "אנטגוניסטים תחרותיים מתחרים עם אגוניסטים על אותו אתר קישור וניתן להתגבר עליהם על ידי מינונים גבוהים יותר של אגוניסט."
    },
    {
        question: "יעילות (Efficacy) מתייחסת ל:",
        options: [
            { text: "ההשפעה המקסימלית שתרופה יכולה לייצר", correct: true },
            { text: "המינון הדרוש לייצר 50% מההשפעה", correct: false },
            { text: "כמה מהר תרופה פועלת", correct: false },
            { text: "כמה זמן תרופה נמשכת", correct: false }
        ],
        category: "פרמקודינמיקה",
        explanation: "יעילות (Emax) היא התגובה המקסימלית שתרופה יכולה לייצר, ללא תלות במינון."
    },
    {
        question: "פוטנטיות (Potency) מתייחסת ל:",
        options: [
            { text: "כמות התרופה הדרושה לייצר השפעה נתונה", correct: true },
            { text: "ההשפעה המקסימלית שתרופה יכולה לייצר", correct: false },
            { text: "משך פעולת התרופה", correct: false },
            { text: "מהירות תחילת פעולת התרופה", correct: false }
        ],
        category: "פרמקודינמיקה",
        explanation: "פוטנטיות היא המינון הדרוש לייצר השפעה ספציפית (ED50). מינון נמוך יותר = פוטנטיות גבוהה יותר."
    },
    {
        question: "ED50 מייצג:",
        options: [
            { text: "המינון המייצר 50% מההשפעה המקסימלית", correct: true },
            { text: "המינון הקטלני ל-50% מהנבדקים", correct: false },
            { text: "המינון הרעיל ל-50% מהנבדקים", correct: false },
            { text: "50% זמינות ביולוגית", correct: false }
        ],
        category: "פרמקודינמיקה",
        explanation: "ED50 (מינון אפקטיבי 50) הוא המינון המייצר 50% מההשפעה הטיפולית המקסימלית."
    },

    // Therapeutic Index
    {
        question: "מדד טיפולי (TI) מחושב כ:",
        options: [
            { text: "TD50/ED50 או LD50/ED50", correct: true },
            { text: "ED50/TD50", correct: false },
            { text: "Emax/EC50", correct: false },
            { text: "Clearance/Vd", correct: false }
        ],
        category: "מדד טיפולי",
        explanation: "TI = TD50/ED50 (מינון רעיל/מינון אפקטיבי). TI גבוה יותר = תרופה בטוחה יותר."
    },
    {
        question: "תרופה עם מדד טיפולי צר:",
        options: [
            { text: "דורשת ניטור קפדני של רמות בדם", correct: true },
            { text: "מאוד בטוחה לשימוש", correct: false },
            { text: "ניתן לתת בכל מינון", correct: false },
            { text: "אין לה תופעות לוואי", correct: false }
        ],
        category: "מדד טיפולי",
        explanation: "תרופות עם TI צר (כמו וורפרין, דיגוקסין, ליתיום) צריכות ניטור קפדני בגלל המרווח הקטן בין מינונים טיפוליים לרעילים."
    },

    // Drug Interactions
    {
        question: "משרן (Inducer) של CYP450 יגרום ל:",
        options: [
            { text: "הגברת מטבוליזם של תרופות אחרות", correct: true },
            { text: "הפחתת מטבוליזם של תרופות אחרות", correct: false },
            { text: "ללא השפעה על תרופות אחרות", correct: false },
            { text: "השפעה רק על המטבוליזם שלו עצמו", correct: false }
        ],
        category: "אינטראקציות תרופתיות",
        explanation: "משרני CYP450 (כמו ריפמפין, פניטואין) מגבירים פעילות אנזימים, מזרזים מטבוליזם של תרופות אחרות."
    },
    {
        question: "מעכב (Inhibitor) של CYP450 יגרום ל:",
        options: [
            { text: "הפחתת מטבוליזם של תרופות אחרות", correct: true },
            { text: "הגברת מטבוליזם של תרופות אחרות", correct: false },
            { text: "הגברת ספיגת תרופות", correct: false },
            { text: "הפחתת פיזור תרופות", correct: false }
        ],
        category: "אינטראקציות תרופתיות",
        explanation: "מעכבי CYP450 (כמו קטוקונאזול, מיץ אשכוליות) מפחיתים פעילות אנזימים, מאטים מטבוליזם של תרופות אחרות."
    },
    {
        question: "סינרגיזם מתרחש כאשר:",
        options: [
            { text: "ההשפעה המשולבת של שתי תרופות גדולה מסכום ההשפעות הבודדות", correct: true },
            { text: "תרופה אחת מבטלת את השפעת השנייה", correct: false },
            { text: "לשתי תרופות אין אינטראקציה", correct: false },
            { text: "תרופה אחת מגבירה את הרעילות של השנייה", correct: false }
        ],
        category: "אינטראקציות תרופתיות",
        explanation: "סינרגיזם (פוטנציאציה): 1 + 1 > 2. ההשפעה המשולבת עולה על סכום ההשפעות הבודדות."
    },

    // Special Populations
    {
        question: "מינון תרופות בחולים קשישים לעתים קרובות דורש:",
        options: [
            { text: "מינונים נמוכים יותר בשל ירידה בתפקוד כלייתי/כבדי", correct: true },
            { text: "מינונים גבוהים יותר בשל עלייה במטבוליזם", correct: false },
            { text: "אין צורך בהתאמה", correct: false },
            { text: "מתן תכוף יותר", correct: false }
        ],
        category: "אוכלוסיות מיוחדות",
        explanation: "לקשישים תפקוד כלייתי וכבדי מופחת, הדורש הפחתת מינון עבור תרופות רבות."
    },
    {
        question: "באי-ספיקת כליות, לתרופות שמופרשות בעיקר דרך הכליות יהיה:",
        options: [
            { text: "זמן מחצית חיים מוארך", correct: true },
            { text: "זמן מחצית חיים מקוצר", correct: false },
            { text: "פרמקוקינטיקה ללא שינוי", correct: false },
            { text: "מטבוליזם מוגבר", correct: false }
        ],
        category: "אוכלוסיות מיוחדות",
        explanation: "תפקוד כלייתי מופחת מוריד את הפינוי, מוביל להצטברות תרופה וזמן מחצית חיים מוארך."
    }
];
