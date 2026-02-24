const assessmentData = [
    // עקרונות אומדן פיזיקאלי
    {
        question: "מהו המטרה העיקרית של אומדן פיזיקאלי?",
        options: [
            { text: "לאסוף נתונים אובייקטיביים על מצב הבריאות של המטופל", correct: true },
            { text: "להחליף בדיקות מעבדה", correct: false },
            { text: "לאבחן מחלות באופן עצמאי", correct: false },
            { text: "לבצע פרוצדורות רפואיות", correct: false }
        ],
        category: "עקרונות אומדן פיזיקאלי",
        explanation: "אומדן פיזיקאלי משמש לאיסוף נתונים אובייקטיביים על מצב בריאותו של המטופל, ומשלים את הנתונים הסובייקטיביים שהתקבלו מהאנמנזה."
    },
    {
        question: "באיזה סדר מבוצעות טכניקות האומדן הפיזיקאלי?",
        options: [
            { text: "בדיקה, מישוש, הקשה, האזנה", correct: true },
            { text: "האזנה, מישוש, בדיקה, הקשה", correct: false },
            { text: "מישוש, בדיקה, האזנה, הקשה", correct: false },
            { text: "הקשה, האזנה, מישוש, בדיקה", correct: false }
        ],
        category: "עקרונות אומדן פיזיקאלי",
        explanation: "הסדר הנכון הוא: בדיקה (Inspection), מישוש (Palpation), הקשה (Percussion), והאזנה (Auscultation)."
    },
    {
        question: "מהי הטכניקה הראשונה שיש לבצע בכל אומדן פיזיקאלי?",
        options: [
            { text: "בדיקה ויזואלית (Inspection)", correct: true },
            { text: "מישוש (Palpation)", correct: false },
            { text: "הקשה (Percussion)", correct: false },
            { text: "האזנה (Auscultation)", correct: false }
        ],
        category: "טכניקות אומדן",
        explanation: "הבדיקה הויזואלית היא תמיד הטכניקה הראשונה, שכן היא לא פולשנית ומאפשרת קבלת מידע ראשוני חשוב."
    },
    {
        question: "מהי תנוחת Supine?",
        options: [
            { text: "שכיבה על הגב, הפנים כלפי מעלה", correct: true },
            { text: "שכיבה על הבטן", correct: false },
            { text: "ישיבה זקופה", correct: false },
            { text: "עמידה", correct: false }
        ],
        category: "תנוחות בדיקה",
        explanation: "Supine היא תנוחת שכיבה על הגב כאשר הפנים מופנות כלפי מעלה, הידיים לצד הגוף."
    },
    {
        question: "באיזו תנוחה מבוצעת בדיקה גינקולוגית?",
        options: [
            { text: "Lithotomy", correct: true },
            { text: "Supine", correct: false },
            { text: "Prone", correct: false },
            { text: "Sims", correct: false }
        ],
        category: "תנוחות בדיקה",
        explanation: "תנוחת Lithotomy משמשת לבדיקות גינקולוגיות - שכיבה על הגב עם כפיפת הברכיים והירכיים."
    },
    {
        question: "מהי תנוחת Dorsal Recumbent?",
        options: [
            { text: "שכיבה על הגב עם כפיפת הברכיים כלפי מעלה", correct: true },
            { text: "שכיבה על הצד", correct: false },
            { text: "שכיבה על הבטן", correct: false },
            { text: "ישיבה עם הטיה קדימה", correct: false }
        ],
        category: "תנוחות בדיקה",
        explanation: "Dorsal Recumbent - שכיבה על הגב עם כפיפת שתי הברכיים כלפי מעלה, כפות הרגליים על המיטה."
    },
    {
        question: "מהי תנוחת Fowler?",
        options: [
            { text: "ישיבה עם העלאת ראש המיטה ל-45-60 מעלות", correct: true },
            { text: "שכיבה שטוחה על הגב", correct: false },
            { text: "שכיבה על הצד", correct: false },
            { text: "עמידה זקופה", correct: false }
        ],
        category: "תנוחות בדיקה",
        explanation: "תנוחת Fowler היא תנוחת ישיבה עם העלאת ראש המיטה ל-45-60 מעלות, משמשת לבדיקת ראש, צוואר וחזה."
    },
    {
        question: "מהי תנוחת Prone?",
        options: [
            { text: "שכיבה על הבטן, הפנים כלפי מטה", correct: true },
            { text: "שכיבה על הגב", correct: false },
            { text: "שכיבה על הצד", correct: false },
            { text: "ישיבה", correct: false }
        ],
        category: "תנוחות בדיקה",
        explanation: "Prone היא תנוחת שכיבה על הבטן כאשר הראש מסובב הצידה, משמשת לבדיקת הגב והעכוז."
    },
    {
        question: "מהי תנוחת Sims (Semi-prone)?",
        options: [
            { text: "שכיבה על הצד השמאלי עם כפיפת הרגל הימנית", correct: true },
            { text: "שכיבה על הגב", correct: false },
            { text: "ישיבה עם הטיה קדימה", correct: false },
            { text: "עמידה", correct: false }
        ],
        category: "תנוחות בדיקה",
        explanation: "תנוחת Sims - שכיבה על הצד השמאלי עם כפיפת הרגל הימנית, משמשת לבדיקות רקטליות וולגינליות."
    },
    {
        question: "מהי תנוחת Knee-Chest?",
        options: [
            { text: "כריעה על הברכיים והחזה, הראש הצידה", correct: true },
            { text: "שכיבה על הגב", correct: false },
            { text: "ישיבה זקופה", correct: false },
            { text: "שכיבה על הבטן", correct: false }
        ],
        category: "תנוחות בדיקה",
        explanation: "Knee-Chest - כריעה על הברכיים והחזה עם הרמת הישבן, משמשת לבדיקת רקטום ופרוסטטה."
    },

    // מכשירים וכלים
    {
        question: "מהו השימוש העיקרי של Ophthalmoscope?",
        options: [
            { text: "בדיקת תחתית העין והרשתית", correct: true },
            { text: "בדיקת תעלת האוזן", correct: false },
            { text: "בדיקת הגרון", correct: false },
            { text: "בדיקת העור", correct: false }
        ],
        category: "מכשירים וכלים",
        explanation: "Ophthalmoscope משמש לבדיקת מבנים פנימיים של העין, כולל הרשתית וכלי הדם בעין."
    },
    {
        question: "מהו השימוש של Otoscope?",
        options: [
            { text: "בדיקת תעלת האוזן והתוף", correct: true },
            { text: "בדיקת העין", correct: false },
            { text: "בדיקת הלב", correct: false },
            { text: "בדיקת הריאות", correct: false }
        ],
        category: "מכשירים וכלים",
        explanation: "Otoscope משמש לבדיקת תעלת האוזן החיצונית וקרום התוף."
    },
    {
        question: "מהו Tuning Fork ומה השימוש בו?",
        options: [
            { text: "מזלג כיוון לבדיקת שמיעה והולכה עצבית", correct: true },
            { text: "מכשיר להקשה על הגב", correct: false },
            { text: "מכשיר למדידת חום", correct: false },
            { text: "כלי לבדיקת רפלקסים", correct: false }
        ],
        category: "מכשירים וכלים",
        explanation: "Tuning Fork (מזלג כיוון) משמש לבדיקת שמיעה, הולכה עצבית וכושר רעידה."
    },
    {
        question: "מהו Reflex Hammer?",
        options: [
            { text: "פטיש לבדיקת רפלקסים גידיים", correct: true },
            { text: "מכשיר להקשה על החזה", correct: false },
            { text: "כלי למדידת לחץ דם", correct: false },
            { text: "מכשיר לבדיקת העיניים", correct: false }
        ],
        category: "מכשירים וכלים",
        explanation: "Reflex Hammer (פטיש רפלקסים) משמש להערכת רפלקסים גידיים ותפקוד נוירולוגי."
    },
    {
        question: "מהו השימוש של פנס (Flashlight/Penlight) באומדן?",
        options: [
            { text: "בדיקת תגובת אישונים, הארת חללי גוף ובדיקת עור", correct: true },
            { text: "מדידת טמפרטורה", correct: false },
            { text: "בדיקת לחץ דם", correct: false },
            { text: "האזנה ללב", correct: false }
        ],
        category: "מכשירים וכלים",
        explanation: "פנס משמש לבדיקת תגובת האישונים לאור, הארת פה וגרון, ובדיקת שינויים בעור."
    },
    {
        question: "מהו Stethoscope?",
        options: [
            { text: "מכשיר להאזנה לקולות הגוף (לב, ריאות, מעיים)", correct: true },
            { text: "מכשיר למדידת דופק", correct: false },
            { text: "כלי לבדיקת רפלקסים", correct: false },
            { text: "מכשיר להקשה", correct: false }
        ],
        category: "מכשירים וכלים",
        explanation: "Stethoscope (סטטוסקופ) משמש להאזנה לקולות פנימיים - לב, ריאות, מעיים ולחץ דם."
    },
    {
        question: "מהו Tape Measure באומדן פיזיקאלי?",
        options: [
            { text: "סרט מדידה למדידת היקפים ואורך", correct: true },
            { text: "מכשיר למדידת טמפרטורה", correct: false },
            { text: "כלי למדידת לחץ דם", correct: false },
            { text: "מכשיר לבדיקת שמיעה", correct: false }
        ],
        category: "מכשירים וכלים",
        explanation: "Tape Measure משמש למדידת היקף ראש, בטן, גפיים ואורך תינוקות."
    },
    {
        question: "מהו Sphygmomanometer?",
        options: [
            { text: "מכשיר למדידת לחץ דם", correct: true },
            { text: "מכשיר למדידת חום", correct: false },
            { text: "מכשיר לבדיקת אוזניים", correct: false },
            { text: "מכשיר לבדיקת עיניים", correct: false }
        ],
        category: "מכשירים וכלים",
        explanation: "Sphygmomanometer הוא מד לחץ דם, כולל חפת וספירה למדידה."
    },

    // טכניקות אומדן
    {
        question: "מהי טכניקת Inspection?",
        options: [
            { text: "בדיקה ויזואלית מתוכננת ומכוונת של המטופל", correct: true },
            { text: "מישוש בידיים", correct: false },
            { text: "הקשה על הגוף", correct: false },
            { text: "האזנה לקולות", correct: false }
        ],
        category: "טכניקות אומדן",
        explanation: "Inspection היא בדיקה ויזואלית מדוקדקת של גוף המטופל, תוך שימוש בחוש הראייה."
    },
    {
        question: "מהי טכניקת Palpation?",
        options: [
            { text: "שימוש בידיים למישוש ואיתור מבנים ואיברים", correct: true },
            { text: "בדיקה עם העיניים", correct: false },
            { text: "הקשה על הגוף", correct: false },
            { text: "האזנה עם סטטוסקופ", correct: false }
        ],
        category: "טכניקות אומדן",
        explanation: "Palpation היא שימוש בידיים למישוש איברים, הערכת טמפרטורה, מרקם, גודל, צורה ותנועה."
    },
    {
        question: "מהי טכניקת Percussion?",
        options: [
            { text: "הקשה על משטח הגוף לייצור קולות לזיהוי מבנים פנימיים", correct: true },
            { text: "מישוש עמוק", correct: false },
            { text: "בדיקה ויזואלית", correct: false },
            { text: "האזנה לנשימה", correct: false }
        ],
        category: "טכניקות אומדן",
        explanation: "Percussion היא הקשה על פני הגוף לייצור גלי קול המאפשרים הערכת גודל, מיקום ועקביות של איברים פנימיים."
    },
    {
        question: "מהי טכניקת Auscultation?",
        options: [
            { text: "האזנה לקולות הגוף באמצעות סטטוסקופ", correct: true },
            { text: "בדיקה ויזואלית", correct: false },
            { text: "מישוש בידיים", correct: false },
            { text: "הקשה על הגוף", correct: false }
        ],
        category: "טכניקות אומדן",
        explanation: "Auscultation היא האזנה לקולות הגוף (לב, ריאות, כלי דם, מעיים) באמצעות סטטוסקופ."
    },
    {
        question: "מה ההבדל בין מישוש שטחי למישוש עמוק?",
        options: [
            { text: "מישוש שטחי בוחן עור ושרירים, מישוש עמוק בוחן איברים פנימיים", correct: true },
            { text: "מישוש שטחי בידיים, מישוש עמוק במכשירים", correct: false },
            { text: "מישוש שטחי של הגב, מישוש עמוק של הבטן", correct: false },
            { text: "אין הבדל משמעותי", correct: false }
        ],
        category: "טכניקות אומדן",
        explanation: "מישוש שטחי (Light Palpation) בוחן את העור, שרירים שטחיים ורגישות. מישוש עמוק (Deep Palpation) בוחן איברים פנימיים."
    },
    {
        question: "איזה סוג מישוש משמש לזיהוי נפיחות או בצקת?",
        options: [
            { text: "מישוש עם לחיצה (Pitting)", correct: true },
            { text: "מישוש שטחי בלבד", correct: false },
            { text: "מישוש עמוק בלבד", correct: false },
            { text: "מישוש עם שתי ידיים", correct: false }
        ],
        category: "טכניקות אומדן",
        explanation: "מישוש עם לחיצה (Pitting Palpation) משמש לזיהוי בצקת - לוחצים על העור ובודקים אם נשאר שקע."
    },
    {
        question: "איזה קול Percussion מעיד על נוזל או איבר מוצק?",
        options: [
            { text: "קול עמום (Dull/Flat)", correct: true },
            { text: "קול מהדהד (Resonant)", correct: false },
            { text: "קול תיפופי (Tympanic)", correct: false },
            { text: "קול היפר-מהדהד (Hyper-resonant)", correct: false }
        ],
        category: "טכניקות אומדן",
        explanation: "קול עמום (Dull) נשמע מעל איברים מוצקים או נוזלים, כמו כבד או נוזל בריאות."
    },
    {
        question: "איזה קול Percussion נשמע מעל ריאות תקינות?",
        options: [
            { text: "קול מהדהד (Resonant)", correct: true },
            { text: "קול עמום (Dull)", correct: false },
            { text: "קול תיפופי (Tympanic)", correct: false },
            { text: "קול שטוח (Flat)", correct: false }
        ],
        category: "טכניקות אומדן",
        explanation: "קול מהדהד (Resonant) הוא הקול התקין הנשמע מעל רקמת ריאה בריאה המכילה אוויר."
    },

    // נגעי עור - מצבים פתולוגים
    {
        question: "מהו Pallor (חיוורון)?",
        options: [
            { text: "צבע חיוור של העור עקב אנמיה או הפחתת אוקסיהמוגלובין", correct: true },
            { text: "צבע כחלחל של העור", correct: false },
            { text: "אדמומיות של העור", correct: false },
            { text: "צבע צהוב של העור", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Pallor (חיוורון) נגרם עקב כמות מופחתת של אוקסיהמוגלובין, עקב אנמיה, הלם רגשי או מתח."
    },
    {
        question: "מהו Cyanosis (כיחלון)?",
        options: [
            { text: "צבע כחלחל עקב חוסר חמצן בדם", correct: true },
            { text: "צבע חיוור של העור", correct: false },
            { text: "צבע אדום של העור", correct: false },
            { text: "צבע צהוב של העור", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Cyanosis נובע מכמות נמוכה של חמצן בדם, מופיע בשפתיים ואצבעות ודורש התערבות מידית."
    },
    {
        question: "מהו Jaundice (צהבת)?",
        options: [
            { text: "שקיעת בילירובין ברקמות הגורמת לצבע צהוב", correct: true },
            { text: "כיחלון עקב חוסר חמצן", correct: false },
            { text: "אדמומיות עקב דלקת", correct: false },
            { text: "חיוורון עקב אנמיה", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Jaundice היא שקיעת בילירובין (פיגמנט צהוב) בעור, ריריות ולחמיות, הקשורה לפגיעה בכבד או חסימה בדרכי מרה."
    },
    {
        question: "מהו Erythema (אדמומיות)?",
        options: [
            { text: "אדמומיות העור עקב התרחבות נימי דם", correct: true },
            { text: "חיוורון העור", correct: false },
            { text: "כיחלון", correct: false },
            { text: "צהבת", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Erythema היא אדמומיות עקב התרחבות וגודש נימי דם, עקב חום, דלקת, אלרגיה או תרופות."
    },
    {
        question: "מהו Vitiligo?",
        options: [
            { text: "מחלת עור עם כתמים בהירים עקב הרס מלנוציטים", correct: true },
            { text: "אדמומיות של העור", correct: false },
            { text: "כתמים כהים בעור", correct: false },
            { text: "דלקת עור", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Vitiligo היא מחלה הגורמת לכתמים בהירים בעור עקב הרס של מלנוציטים (היפופיגמנטציה)."
    },
    {
        question: "מהו Albinism (לבקנות)?",
        options: [
            { text: "מחלה תורשתית עם חוסר מלנין בעור, שיער ועיניים", correct: true },
            { text: "כתמים בהירים בעור", correct: false },
            { text: "אדמומיות כרונית", correct: false },
            { text: "פריחה אלרגית", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Albinism היא מחלה תורשתית רצסיבית הגורמת לחוסר מלנין, רגישות לאור וסיכון לסרטן עור."
    },
    {
        question: "מהו Edema (בצקת)?",
        options: [
            { text: "הצטברות נוזלים בחלל הבין-תאי, האזור נפוח ומתוח", correct: true },
            { text: "אדמומיות של העור", correct: false },
            { text: "כתמים על העור", correct: false },
            { text: "יובש בעור", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Edema היא הצטברות נוזלים בחלל הבין-תאי, האזור נראה נפוח, מבריק ומתוח. מעיד על ליקוי בהחזר ורידי."
    },

    // נגעים ראשוניים בעור
    {
        question: "מהו Macule/Patch?",
        options: [
            { text: "כתם קטן ושטוח בעור, גודל עד 1 ס\"מ", correct: true },
            { text: "נגע מוצק מורם", correct: false },
            { text: "שלפוחית מלאה בנוזל", correct: false },
            { text: "נגע עמוק", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Macule/Patch הוא כתם קטן ושטוח שגודלו עד 1 ס\"מ, ללא בליטה מעל פני העור."
    },
    {
        question: "מהו Papule (קשרית)?",
        options: [
            { text: "נגע מוצק ומורם הניתן למישוש, גודל עד 1 ס\"מ", correct: true },
            { text: "כתם שטוח", correct: false },
            { text: "שלפוחית מלאה בנוזל", correct: false },
            { text: "כיב עמוק", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Papule היא נגע מוצק הניתן למישוש, מורם מעל פני העור, בגודל עד 1 ס\"מ."
    },
    {
        question: "מהו Plaque (רובד)?",
        options: [
            { text: "נגע שטחי מורם בגודל 1 ס\"מ או יותר", correct: true },
            { text: "כתם שטוח קטן", correct: false },
            { text: "נגע מלא בנוזל", correct: false },
            { text: "נגע עמוק מוצק", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Plaque הוא נגע שטחי מורם בגודל 1 ס\"מ או יותר, כמו בפסוריאזיס."
    },
    {
        question: "מהו Vesicle/Bulla (שלפוחית)?",
        options: [
            { text: "נגע מלא בנוזל סרוטי או דמי, גודל 1 ס\"מ או יותר", correct: true },
            { text: "נגע מוצק", correct: false },
            { text: "כתם שטוח", correct: false },
            { text: "נגע מלא במוגלה", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Vesicle/Bulla היא שלפוחית מלאה בנוזל סרוטי או דמי, בגודל 1 ס\"מ או יותר."
    },
    {
        question: "מהו Pustule?",
        options: [
            { text: "נגע מורם מלא במוגלה (אקנה)", correct: true },
            { text: "נגע מלא בנוזל צלול", correct: false },
            { text: "כתם שטוח", correct: false },
            { text: "נגע עמוק ומוצק", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Pustule הוא נגע מורם המכיל מוגלה, נפוץ באקנה וזיהומים חיידקיים."
    },
    {
        question: "מהו Nodule (קשר)?",
        options: [
            { text: "נגע מוצק מורם עמוק ומוצק יותר מפפולה, גדול מ-0.5 ס\"מ", correct: true },
            { text: "כתם שטוח", correct: false },
            { text: "שלפוחית מלאה בנוזל", correct: false },
            { text: "נגע שטחי קטן", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Nodule הוא נגע מוצק מורם, עמוק ומוצק יותר מפפולה. מעל 2 ס\"מ - נקרא Tumor."
    },
    {
        question: "מהו Wheal (אורטיקה, סרפד)?",
        options: [
            { text: "נגע שטחי של בצקת עור מקומית, מופיע ונעלם (מעקיצה או אלרגיה)", correct: true },
            { text: "נגע מוצק קבוע", correct: false },
            { text: "כתם צבעוני", correct: false },
            { text: "שלפוחית מלאה בנוזל", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Wheal (תפיחה) הוא נגע שטחי ובלתי סדיר של בצקת עור מקומית, נוטה להופיע ולהיעלם במהירות."
    },
    {
        question: "מהו Cyst (נודולה)?",
        options: [
            { text: "נגע מלא בחומר הניתן ללחיצה - נוזלי או כמעט מוצק, גודל 1 ס\"מ או יותר", correct: true },
            { text: "כתם שטוח", correct: false },
            { text: "נגע מוצק לחלוטין", correct: false },
            { text: "שלפוחית דקה", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Cyst היא נודולה מלאה בחומר הניתן ללחיצה, נוזלי או כמעט מוצק, בגודל 1 ס\"מ או יותר."
    },

    // נגעים שניוניים בעור
    {
        question: "מהו Crust (גלד)?",
        options: [
            { text: "השארית המיובשת של הפרשות מהעור (סרום, מוגלה, דם)", correct: true },
            { text: "פתיתים דקים של עור מת", correct: false },
            { text: "התעבות העור", correct: false },
            { text: "כיב עמוק", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Crust (גלד) הוא השארית המיובשת של הפרשות כגון סרום, מוגלה או דם על פני העור."
    },
    {
        question: "מהו Scales (קשקשים)?",
        options: [
            { text: "פתיתים דקים של תאי אפידרמיס מתים שמתקלפים", correct: true },
            { text: "הפרשות מיובשות", correct: false },
            { text: "נגעים מורמים", correct: false },
            { text: "כיבים", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Scales (קשקשים) הם פתיתים דקים של תאי אפידרמיס מתים המתקלפים מהעור."
    },
    {
        question: "מהו Lichenification (התעבות)?",
        options: [
            { text: "התעבות נימושה של העור עקב שפשוף וגרד חוזר", correct: true },
            { text: "דילול העור", correct: false },
            { text: "פצע פתוח", correct: false },
            { text: "נגע מלא בנוזל", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Lichenification היא התעבות נראית ונימושה של שכבת העור העליונה עקב שפשוף וגרד חוזר ונשנה."
    },
    {
        question: "מהו Erosion?",
        options: [
            { text: "כרסום ואיבוד שכבת העור העליונה ללא הצטלקות", correct: true },
            { text: "התעבות העור", correct: false },
            { text: "נגע עמוק עם הצטלקות", correct: false },
            { text: "קשקשים על העור", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Erosion היא כרסום ואיבוד שכבת האפידרמיס העליונה ללא הצטלקות, הרקמה לחה אך לא מדממת."
    },
    {
        question: "מהו Atrophy?",
        options: [
            { text: "עור מקומט ומצומק עקב אבוד קולגן ואלסטין", correct: true },
            { text: "התעבות העור", correct: false },
            { text: "נגע מורם", correct: false },
            { text: "פצע עמוק", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Atrophy היא עור מקומט, מצומק ומדולדל כתוצאה מאבוד קולגן ואלסטין."
    },
    {
        question: "מהו Excoriation?",
        options: [
            { text: "נגעים ישרים או נקודתיים עקב גירוד והתעסקות עם העור", correct: true },
            { text: "התעבות העור", correct: false },
            { text: "הצטלקות", correct: false },
            { text: "קשקשים", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Excoriation הם נגעים ישרים או נקודתיים הנגרמים עקב גירוד והתעסקות עם העור."
    },
    {
        question: "מהו Keloid?",
        options: [
            { text: "הצטלקות היפרטרופית המתפשטת מעבר לגבולות הפציעה הראשונית", correct: true },
            { text: "צלקת רגילה", correct: false },
            { text: "נגע זמני", correct: false },
            { text: "כתם שטוח", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Keloid היא הצטלקות היפרטרופית (שגשוג יתר) אשר מתפשטת אל מעבר לגבולות הפציעה הראשונית."
    },
    {
        question: "מהו Scar (צלקת)?",
        options: [
            { text: "רקמת חיבור המחליפה רקמה תקינה לאחר פציעה או מחלה", correct: true },
            { text: "נגע זמני", correct: false },
            { text: "התעבות העור", correct: false },
            { text: "כיב פתוח", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Scar (צלקת) היא רקמת חיבור אשר מחליפה רקמה תקינה לאחר פציעה או מחלה."
    },
    {
        question: "מהו Fissure (חריץ)?",
        options: [
            { text: "סדק ישר בעור הנובע לרוב מיובש רב", correct: true },
            { text: "התעבות העור", correct: false },
            { text: "נגע מורם", correct: false },
            { text: "הצטלקות", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Fissure הוא חריץ או סדק ישר בעור, הנובע לרוב מיובש רב של העור."
    },
    {
        question: "מהו Ulcer (כיב)?",
        options: [
            { text: "אובדן עמוק של שכבת העור העליונה והאמצעית, יכול לדמם ולהצטלק", correct: true },
            { text: "נגע שטחי", correct: false },
            { text: "קשקשים", correct: false },
            { text: "התעבות העור", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Ulcer (כיב) הוא אובדן עמוק של שכבת העור העליונה והאמצעית, האזור יכול לדמם ולהצטלק."
    },

    // הפרעות שיער וציפורניים
    {
        question: "מהי קשקשת (Dandruff)?",
        options: [
            { text: "בעיה בה עור הקרקפת משיל תאים מתים בקצב מוגבר", correct: true },
            { text: "מחלה דלקתית כרונית", correct: false },
            { text: "זיהום פטרייתי", correct: false },
            { text: "אובדן שיער", correct: false }
        ],
        category: "הפרעות שיער וציפורניים",
        explanation: "קשקשת היא בעיה נפוצה בה עור הקרקפת משיל תאים מתים בקצב מוגבר, לרוב בעיה אסתטית."
    },
    {
        question: "מהו פסוריאזיס (Psoriasis)?",
        options: [
            { text: "מחלת עור כרונית עם רבדים אדומים מכוסים קשקשים כסופים", correct: true },
            { text: "זיהום חיידקי", correct: false },
            { text: "אלרגיה", correct: false },
            { text: "מחסור ויטמינים", correct: false }
        ],
        category: "הפרעות שיער וציפורניים",
        explanation: "פסוריאזיס היא מחלת עור כרונית בה תאי העור מתחלקים מהר, יוצרת רבדים אדומים מכוסים קשקשים כסופים."
    },
    {
        question: "מהי סבוראה (Seborrhea)?",
        options: [
            { text: "מחלה דלקתית בה בלוטות החלב מפרישות שומן רב, עם קשקשים צהבהבים", correct: true },
            { text: "זיהום פטרייתי", correct: false },
            { text: "אובדן שיער", correct: false },
            { text: "מחלה אוטואימונית", correct: false }
        ],
        category: "הפרעות שיער וציפורניים",
        explanation: "סבוראה היא מחלה דלקתית בה בלוטות החלב מפרישות שומן רב, עם קשקשים צהבהבים, גרד וצריבה."
    },
    {
        question: "מהו Koilonychia (Spoon shape)?",
        options: [
            { text: "ציפורניים דקות שטוחות או קעורות, לרוב עקב חוסר ברזל", correct: true },
            { text: "ציפורניים עבות וצהובות", correct: false },
            { text: "ציפורניים מעוגלות", correct: false },
            { text: "ציפורניים עם קווים", correct: false }
        ],
        category: "הפרעות שיער וציפורניים",
        explanation: "Koilonychia (ציפורניים בצורת כף) - ציפורניים דקות ששטוחות או קעורות, בעיקר עקב חוסר ברזל ואנמיה."
    },
    {
        question: "מהן Beau's lines?",
        options: [
            { text: "סדקים פנימיים בציפורן עקב טראומה מקומית", correct: true },
            { text: "קווים אדומים בציפורן", correct: false },
            { text: "ציפורניים צהובות", correct: false },
            { text: "ציפורניים מעובות", correct: false }
        ],
        category: "הפרעות שיער וציפורניים",
        explanation: "Beau's lines הם סדקים או חריצים אופקיים בציפורן, נגרמים בדרך כלל מטראומה מקומית."
    },
    {
        question: "מהו Clubbing (התאלות ציפורן)?",
        options: [
            { text: "התעגלות קצות האצבעות והציפורניים עקב מחסור ממושך בחמצן", correct: true },
            { text: "ציפורניים שטוחות", correct: false },
            { text: "ציפורניים צהובות", correct: false },
            { text: "פטרת בציפורניים", correct: false }
        ],
        category: "הפרעות שיער וציפורניים",
        explanation: "Clubbing הוא התעגלות קצות האצבעות והציפורניים, לרוב עקב מחסור ממושך בחמצן (מחלות נשימה). נבדק עם Shamroth test."
    },
    {
        question: "מהו Onychomycosis?",
        options: [
            { text: "פטרת הציפורניים - ציפורניים צהובות עכורות ומעוותות", correct: true },
            { text: "ציפורניים בצורת כף", correct: false },
            { text: "התאלות ציפורן", correct: false },
            { text: "סדקים בציפורן", correct: false }
        ],
        category: "הפרעות שיער וציפורניים",
        explanation: "Onychomycosis היא פטרת הציפורניים - ההפרעה השכיחה ביותר, הציפורן הופכת מעובה, צהובה ועכורה."
    },
    {
        question: "מהן Splinter hemorrhages?",
        options: [
            { text: "קווים זעירים לאורך הציפורן - דימומים קטנים", correct: true },
            { text: "ציפורניים צהובות", correct: false },
            { text: "ציפורניים עבות", correct: false },
            { text: "ציפורניים בצורת כף", correct: false }
        ],
        category: "הפרעות שיער וציפורניים",
        explanation: "Splinter hemorrhages הם דימומים קטנים - קווים זעירים לאורך הציפורן, מופיעים במספר מחלות כמו דלקת חיידקית של שריר הלב."
    },
    {
        question: "על מה עשויות להעיד ציפורניים צהובות?",
        options: [
            { text: "עישון, מחלות ריאות כרוניות או לימפדמה", correct: true },
            { text: "חוסר ברזל", correct: false },
            { text: "זיהום חיידקי", correct: false },
            { text: "מחסור בקלציום", correct: false }
        ],
        category: "הפרעות שיער וציפורניים",
        explanation: "ציפורניים צהובות מופיעות אצל מעשנים, סובלים ממחלות ריאות כרוניות או לימפדמה."
    },
    {
        question: "על מה עשויים להעיד שטחים לבנים נרחבים בציפורן?",
        options: [
            { text: "בעיות בכבד או בכליות", correct: true },
            { text: "מחלות ריאות", correct: false },
            { text: "זיהום פטרייתי", correct: false },
            { text: "חוסר ברזל", correct: false }
        ],
        category: "הפרעות שיער וציפורניים",
        explanation: "שטחים לבנים נרחבים של הציפורן עלולים להעיד על בעיות בכבד או בכליות."
    },

    // שאלות נוספות - עקרונות ותנוחות
    {
        question: "מדוע חשוב לבצע בדיקה ויזואלית (Inspection) תחילה?",
        options: [
            { text: "היא לא פולשנית ומספקת מידע ראשוני חשוב", correct: true },
            { text: "היא הכי מדויקת", correct: false },
            { text: "היא הכי מהירה", correct: false },
            { text: "אין צורך במכשירים", correct: false }
        ],
        category: "עקרונות אומדן פיזיקאלי",
        explanation: "הבדיקה הויזואלית היא לא פולשנית, מאפשרת קבלת מידע ראשוני ומכוונת את שאר הבדיקה."
    },
    {
        question: "באיזו תנוחה מומלץ לבצע בדיקת בטן?",
        options: [
            { text: "Supine או Dorsal Recumbent", correct: true },
            { text: "Prone", correct: false },
            { text: "Lithotomy", correct: false },
            { text: "Knee-Chest", correct: false }
        ],
        category: "תנוחות בדיקה",
        explanation: "בדיקת בטן מבוצעת בתנוחת Supine (שכיבה על הגב) או Dorsal Recumbent לרפיון שרירי הבטן."
    },
    {
        question: "מהי תנוחת Semi-Fowler?",
        options: [
            { text: "ישיבה עם העלאת ראש המיטה ל-30-45 מעלות", correct: true },
            { text: "שכיבה שטוחה", correct: false },
            { text: "העלאת הראש ל-90 מעלות", correct: false },
            { text: "שכיבה על הצד", correct: false }
        ],
        category: "תנוחות בדיקה",
        explanation: "Semi-Fowler היא העלאת ראש המיטה ל-30-45 מעלות, נמוכה יותר מ-Fowler הרגילה."
    },
    {
        question: "באיזו תנוחה מבוצעת בדיקת פרוסטטה?",
        options: [
            { text: "Knee-Chest או Standing", correct: true },
            { text: "Supine", correct: false },
            { text: "Fowler", correct: false },
            { text: "Dorsal Recumbent", correct: false }
        ],
        category: "תנוחות בדיקה",
        explanation: "בדיקת פרוסטטה מבוצעת בתנוחת Knee-Chest או עמידה עם כיפוף קדימה."
    },
    {
        question: "מהי מטרת המישוש (Palpation) באומדן?",
        options: [
            { text: "להעריך טמפרטורה, מרקם, גודל, צורה ותנועה של איברים", correct: true },
            { text: "לזהות צבעים", correct: false },
            { text: "לשמוע קולות", correct: false },
            { text: "למדוד לחץ דם", correct: false }
        ],
        category: "טכניקות אומדן",
        explanation: "מישוש משמש להערכת טמפרטורה, מרקם, גודל, צורה, עקביות ותנועה של מבנים פנימיים."
    },
    {
        question: "איזה מכשיר משמש לבדיקת רפלקס הברך?",
        options: [
            { text: "Reflex Hammer (פטיש רפלקסים)", correct: true },
            { text: "Tuning Fork", correct: false },
            { text: "Stethoscope", correct: false },
            { text: "Otoscope", correct: false }
        ],
        category: "מכשירים וכלים",
        explanation: "Reflex Hammer (פטיש רפלקסים) משמש לבדיקת רפלקסים גידיים כמו רפלקס הברך."
    },
    {
        question: "מה בודקים עם מזלג כיוון (Tuning Fork)?",
        options: [
            { text: "שמיעה, הולכה עצבית וכושר רעידה", correct: true },
            { text: "ראייה", correct: false },
            { text: "טעם", correct: false },
            { text: "לחץ דם", correct: false }
        ],
        category: "מכשירים וכלים",
        explanation: "Tuning Fork משמש לבדיקת שמיעה (Weber, Rinne), הולכה עצבית וכושר רעידה."
    },
    {
        question: "איזה קול Percussion נשמע מעל הבטן?",
        options: [
            { text: "Tympanic (תיפופי)", correct: true },
            { text: "Dull (עמום)", correct: false },
            { text: "Resonant (מהדהד)", correct: false },
            { text: "Flat (שטוח)", correct: false }
        ],
        category: "טכניקות אומדן",
        explanation: "קול Tympanic (תיפופי) נשמע מעל בטן עקב נוכחות אוויר במעיים."
    },
    {
        question: "מהו ההבדל בין נגע ראשוני לנגע שניוני?",
        options: [
            { text: "נגע ראשוני הוא הנגע ההתחלתי, נגע שניוני נובע ממנו או מתהליך ריפוי", correct: true },
            { text: "נגע ראשוני חמור יותר", correct: false },
            { text: "נגע שניוני מופיע ראשון", correct: false },
            { text: "אין הבדל אמיתי", correct: false }
        ],
        category: "נגעי עור",
        explanation: "נגע ראשוני הוא הנגע המקורי המופיע בעור, נגע שניוני מתפתח ממנו או במהלך תהליך הריפוי."
    },
    {
        question: "איזה מבין אלה הוא נגע שניוני?",
        options: [
            { text: "Crust (גלד), Scales (קשקשים), Scar (צלקת)", correct: true },
            { text: "Papule, Vesicle, Nodule", correct: false },
            { text: "Macule, Wheal, Pustule", correct: false },
            { text: "Plaque, Cyst, Bulla", correct: false }
        ],
        category: "נגעי עור",
        explanation: "נגעים שניוניים כוללים: Crust, Scales, Lichenification, Erosion, Atrophy, Excoriation, Keloid, Scar, Fissure, Ulcer."
    },
    {
        question: "מהו Shamroth test?",
        options: [
            { text: "בדיקה לזיהוי Clubbing - מצמידים שתי אצבעות ובודקים אם יש צורת יהלום", correct: true },
            { text: "בדיקת שמיעה", correct: false },
            { text: "בדיקת רפלקסים", correct: false },
            { text: "בדיקת עור", correct: false }
        ],
        category: "הפרעות שיער וציפורניים",
        explanation: "Shamroth test משמש לאבחון Clubbing - מצמידים את האצבע השנייה של כל יד זו לזו, בתקין נוצר יהלום, בקלאבינג משולש."
    },
    {
        question: "איזו תנוחה מתאימה לבדיקת רקטום?",
        options: [
            { text: "Sims, Knee-Chest או Standing", correct: true },
            { text: "Supine בלבד", correct: false },
            { text: "Fowler", correct: false },
            { text: "Lithotomy בלבד", correct: false }
        ],
        category: "תנוחות בדיקה",
        explanation: "בדיקת רקטום מבוצעת בתנוחת Sims, Knee-Chest או עמידה עם כיפוף קדימה."
    },
    {
        question: "מהי תנוחת Trendelenburg?",
        options: [
            { text: "שכיבה על הגב עם הרמת הרגליים מעל רמת הלב", correct: true },
            { text: "ישיבה זקופה", correct: false },
            { text: "שכיבה על הבטן", correct: false },
            { text: "שכיבה על הצד", correct: false }
        ],
        category: "תנוחות בדיקה",
        explanation: "Trendelenburg היא שכיבה על הגב עם הרמת הרגליים מעל רמת הלב, משמשת במצבי הלם."
    },
    {
        question: "איזה חוש עיקרי משמש בטכניקת Inspection?",
        options: [
            { text: "ראייה", correct: true },
            { text: "מישוש", correct: false },
            { text: "שמיעה", correct: false },
            { text: "ריח", correct: false }
        ],
        category: "טכניקות אומדן",
        explanation: "Inspection מתבססת בעיקר על חוש הראייה - בדיקה ויזואלית מדוקדקת של המטופל."
    },
    {
        question: "באיזו תנוחה מומלץ לבדוק את הריאות מאחור?",
        options: [
            { text: "Sitting (ישיבה) עם הטיה קדימה", correct: true },
            { text: "Supine", correct: false },
            { text: "Prone", correct: false },
            { text: "Lithotomy", correct: false }
        ],
        category: "תנוחות בדיקה",
        explanation: "בדיקת הריאות מאחור מבוצעת בעמידה או ישיבה, לעיתים עם הטיה קלה קדימה."
    },
    {
        question: "מה ההבדל בין Vesicle ל-Bulla?",
        options: [
            { text: "Vesicle קטנה מ-1 ס\"מ, Bulla גדולה מ-1 ס\"מ", correct: true },
            { text: "Vesicle מלאה במוגלה, Bulla בנוזל צלול", correct: false },
            { text: "Vesicle עמוקה, Bulla שטחית", correct: false },
            { text: "אין הבדל ממשי", correct: false }
        ],
        category: "נגעי עור",
        explanation: "שתיהן שלפוחיות מלאות בנוזל, ההבדל הוא בגודל: Vesicle קטנה מ-1 ס\"מ, Bulla גדולה מ-1 ס\"מ."
    },
    {
        question: "מהי המשמעות של Pitting Edema?",
        options: [
            { text: "בצקת בה לחיצה משאירה שקע באזור", correct: true },
            { text: "בצקת קשה ללא שקע", correct: false },
            { text: "אדמומיות בעור", correct: false },
            { text: "נפיחות זמנית", correct: false }
        ],
        category: "נגעי עור",
        explanation: "Pitting Edema היא בצקת בה לחיצה עם האצבע משאירה שקע שנשאר לזמן מה, מעידה על הצטברות נוזלים."
    },

    // אומדן נוירולוגי - 8 שאלות
    {
        question: "מהו טווח סולם GCS (Glasgow Coma Scale)?",
        options: [
            { text: "3-15 (3 הכי חמור, 15 הכי טוב)", correct: true },
            { text: "0-10 (0 הכי חמור, 10 הכי טוב)", correct: false },
            { text: "1-12 (1 הכי חמור, 12 הכי טוב)", correct: false },
            { text: "5-20 (5 הכי חמור, 20 הכי טוב)", correct: false }
        ],
        category: "אומדן נוירולוגי",
        explanation: "סולם GCS נע בין 3 (מצב קומה עמוק) ל-15 (ערות מלאה). הסולם כולל 3 קטגוריות: פתיחת עיניים, תגובה מילולית ותגובה מוטורית."
    },
    {
        question: "מה משמעות PERRLA באומדן נוירולוגי?",
        options: [
            { text: "אישונים שווים, עגולים, מגיבים לאור והתאמה", correct: true },
            { text: "לחץ דם תקין, דופק סדיר, נשימה טובה", correct: false },
            { text: "רפלקסים תקינים, עמידה יציבה, הליכה תקינה", correct: false },
            { text: "תנועות עיניים שוות, ראייה טובה, קואורדינציה תקינה", correct: false }
        ],
        category: "אומדן נוירולוגי",
        explanation: "PERRLA = Pupils Equal, Round, React to Light and Accommodation. זהו תיאור תקין של בדיקת האישונים."
    },
    {
        question: "מהו דירוג כוח שרירים 3/5 בסולם הערכת כוח שרירים?",
        options: [
            { text: "תנועה מלאה נגד כוח הכבידה, אך ללא התנגדות", correct: true },
            { text: "תנועה מלאה נגד כבידה והתנגדות קלה", correct: false },
            { text: "תנועה מלאה עם התנגדות חלקית נגד הבודק", correct: false },
            { text: "תנועה חלקית ללא יכולת להתגבר על כבידה", correct: false }
        ],
        category: "אומדן נוירולוגי",
        explanation: "סולם כוח שרירים: 0=אין תנועה, 1=כיווץ קל, 2=תנועה ללא כבידה, 3=תנועה נגד כבידה, 4=תנועה עם התנגדות, 5=כוח מלא."
    },
    {
        question: "מה משמעות רפלקס מדורג +2?",
        options: [
            { text: "רפלקס תקין, תגובה נורמלית ופעילה", correct: true },
            { text: "רפלקס מוגבר, אולי פתולוגי", correct: false },
            { text: "רפלקס חלש, אך קיים", correct: false },
            { text: "רפלקס היפראקטיבי עם קלונוס", correct: false }
        ],
        category: "אומדן נוירולוגי",
        explanation: "סולם דירוג רפלקסים: 0=אין, +1=היפואקטיבי, +2=נורמלי, +3=מעט מוגבר, +4=היפראקטיבי עם קלונוס."
    },
    {
        question: "מה בודקים במבחן אצבע-אף (Finger-to-nose test)?",
        options: [
            { text: "קואורדינציה והתאמה בין תנועות עדינות", correct: true },
            { text: "כוח שרירים של הזרועות", correct: false },
            { text: "רפלקסים עמוקים של הגפה העליונה", correct: false },
            { text: "תחושת מישוש וכאב בקצות האצבעות", correct: false }
        ],
        category: "אומדן נוירולוגי",
        explanation: "מבחן אצבע-אף בוחן קואורדינציה מוטורית עדינה ותפקוד המוחון (Cerebellum). המטופל נדרש לגעת באצבעו ולאחר מכן באפו."
    },
    {
        question: "מה בודקים במבחן Romberg?",
        options: [
            { text: "שיווי משקל, פרופריוצפציה ותפקוד מערכת שיווי משקל", correct: true },
            { text: "כוח שרירים של הרגליים", correct: false },
            { text: "רפלקסים עמוקים של הברכיים", correct: false },
            { text: "מהירות ותיאום תנועות הליכה", correct: false }
        ],
        category: "אומדן נוירולוגי",
        explanation: "מבחן Romberg בוחן שיווי משקל ופרופריוצפציה. המטופל עומד עם רגליים צמודות ועיניים פקוחות, ואז סוגר עיניים. נפילה = חיובי."
    },
    {
        question: "כיצד בודקים את עצב גולגולתי III (Oculomotor)?",
        options: [
            { text: "תגובת אישונים לאור, תנועות עיניים ופתיחת עפעפיים", correct: true },
            { text: "חוש ריח באמצעות מבחן ריח", correct: false },
            { text: "תנועות שרירי הפנים וטעם לשון", correct: false },
            { text: "שמיעה ושיווי משקל פנימי", correct: false }
        ],
        category: "אומדן נוירולוגי",
        explanation: "עצב CN III (Oculomotor) אחראי על תנועות עיניים רבות, הרמת עפעף עליון והתכווצות אישון. בודקים תגובת אישון ותנועות עיניים."
    },
    {
        question: "מה משמעות תנוחת Decorticate posturing?",
        options: [
            { text: "פגיעה מוחית חמורה, זרועות כפופות פנימה, רגליים מתוחות", correct: true },
            { text: "תפקוד נוירולוגי תקין, תנוחת גוף רגועה", correct: false },
            { text: "פגיעה קלה, זרועות ורגליים מתוחות החוצה", correct: false },
            { text: "התכווצות רפלקסיבית זמנית של הגפיים", correct: false }
        ],
        category: "אומדן נוירולוגי",
        explanation: "Decorticate posturing מעידה על פגיעה מוחית חמורה - זרועות כפופות פנימה לחזה, רגליים מתוחות. Decerebrate - כל הגפיים מתוחות."
    },

    // אומדן וסקולרי - 17 שאלות
    {
        question: "מהו טווח לחץ הדם התקין?",
        options: [
            { text: "סיסטולי 90-120, דיאסטולי 60-80 mmHg", correct: true },
            { text: "סיסטולי 100-140, דיאסטולי 70-90 mmHg", correct: false },
            { text: "סיסטולי 80-110, דיאסטולי 50-70 mmHg", correct: false },
            { text: "סיסטולי 110-130, דיאסטולי 65-85 mmHg", correct: false }
        ],
        category: "אומדן וסקולרי",
        explanation: "לחץ דם תקין הוא סיסטולי 90-120 mmHg ודיאסטולי 60-80 mmHg. מעל 130/80 נחשב יתר לחץ דם."
    },
    {
        question: "מה משמעות דופק מדורג 2+ (Pulse 2+)?",
        options: [
            { text: "דופק תקין, בעל משרעת נורמלית וקל למישוש", correct: true },
            { text: "דופק חלש מאוד, קשה למישוש", correct: false },
            { text: "דופק מוגבר, חזק מאוד ובולט", correct: false },
            { text: "דופק אופייני לחסימה עורקית חלקית", correct: false }
        ],
        category: "אומדן וסקולרי",
        explanation: "סולם דירוג דופק: 0=אין דופק, 1+=חלש, 2+=נורמלי, 3+=מוגבר, 4+=חזק מאוד (bounding)."
    },
    {
        question: "מהו זמן מילוי נימי תקין (Capillary Refill Time)?",
        options: [
            { text: "פחות מ-2 שניות", correct: true },
            { text: "פחות מ-5 שניות", correct: false },
            { text: "בין 2-4 שניות", correct: false },
            { text: "פחות מ-3 שניות", correct: false }
        ],
        category: "אומדן וסקולרי",
        explanation: "זמן מילוי נימי (CRT) תקין הוא פחות מ-2 שניות. זמן ארוך יותר מעיד על פרפוזיה לקויה או הלם."
    },
    {
        question: "מה משמעות בצקת מדורגת 3+ (Edema 3+)?",
        options: [
            { text: "בצקת עמוקה, שקע של 6-8 מ\"מ שנמשך 1-2 דקות", correct: true },
            { text: "בצקת קלה, שקע של 2 מ\"מ שנעלם מיד", correct: false },
            { text: "בצקת בינונית, שקע של 4 מ\"מ שנעלם תוך שניות", correct: false },
            { text: "בצקת מאסיבית, רגל נפוחה מאוד ללא שקע", correct: false }
        ],
        category: "אומדן וסקולרי",
        explanation: "סולם בצקת: 1+=קלה (2 מ\"מ), 2+=בינונית (4 מ\"מ), 3+=עמוקה (6-8 מ\"מ), 4+=מאסיבית (>8 מ\"מ)."
    },
    {
        question: "מהם סימני אי ספיקה עורקית (Arterial Insufficiency)?",
        options: [
            { text: "חיוורון, קור, כאב, איבוד שיער, ציפורניים עבות", correct: true },
            { text: "אדמומיות, חום, נפיחות מתמדת", correct: false },
            { text: "גירוד, פריחה, שינוי צבע לכחול", correct: false },
            { text: "בצקת מסיבית, עור מבריק ורך", correct: false }
        ],
        category: "אומדן וסקולרי",
        explanation: "אי ספיקה עורקית מאופיינת בחיוורון, קור, כאב, איבוד שיער, עור מבריק, ציפורניים עבות וכיבים כואבים."
    },
    {
        question: "מה בודקים עם סימן Homan?",
        options: [
            { text: "חשד ל-DVT - כאב בשוק בעת כיפוף הרגל כלפי מעלה", correct: true },
            { text: "זרימת דם עורקית בזרוע", correct: false },
            { text: "תפקוד עצבים היקפיים ברגל", correct: false },
            { text: "יציבות מפרק הקרסול והברך", correct: false }
        ],
        category: "אומדן וסקולרי",
        explanation: "סימן Homan בוחן חשד לטרומבוזיס ורידי עמוק (DVT). כאב בשוק בעת כיפוף כף הרגל כלפי מעלה הוא חיובי."
    },
    {
        question: "מה משמעות ABI (Ankle-Brachial Index) של 0.7?",
        options: [
            { text: "מחלת עורקים היקפית בינונית (Moderate PAD)", correct: true },
            { text: "זרימת דם תקינה, ללא פתולוגיה", correct: false },
            { text: "מחלת עורקים קלה, טיפול לא דרוש", correct: false },
            { text: "חסימה עורקית קריטית הדורשת התערבות מיידית", correct: false }
        ],
        category: "אומדן וסקולרי",
        explanation: "ABI תקין: 0.9-1.3. ABI 0.7-0.9 = PAD קלה, 0.4-0.69 = בינונית, <0.4 = חמורה. 0.7 הוא PAD בינונית."
    },
    {
        question: "מהו קצב דופק תקין (Pulse Rate)?",
        options: [
            { text: "60-100 פעימות לדקה במבוגרים", correct: true },
            { text: "50-90 פעימות לדקה במבוגרים", correct: false },
            { text: "70-110 פעימות לדקה במבוגרים", correct: false },
            { text: "65-95 פעימות לדקה במבוגרים", correct: false }
        ],
        category: "אומדן וסקולרי",
        explanation: "קצב דופק תקין במבוגרים הוא 60-100 פעימות לדקה. מתחת ל-60 = ברדיקרדיה, מעל 100 = טכיקרדיה."
    },
    {
        question: "איפה ממוקם דופק Dorsalis Pedis?",
        options: [
            { text: "על גב כף הרגל, לצד הגידים האקסטנסורים", correct: true },
            { text: "מאחורי הקרסול הפנימי", correct: false },
            { text: "בשוק, מאחורי עצם השוקה", correct: false },
            { text: "מתחת למפשעה, בקו הירך הפנימי", correct: false }
        ],
        category: "אומדן וסקולרי",
        explanation: "דופק Dorsalis Pedis נמצא על גב כף הרגל, לצד הגידים האקסטנסורים. Posterior Tibial נמצא מאחורי הקרסול הפנימי."
    },
    {
        question: "מהי תופעת Raynaud?",
        options: [
            { text: "התכווצות כלי דם באצבעות עקב קור או מתח, שינויי צבע", correct: true },
            { text: "התרחבות כלי דם בכפות הידיים עם חום", correct: false },
            { text: "דלקת כרונית של כלי דם קטנים ברגליים", correct: false },
            { text: "היצרות עורקים גדולים בזרועות וברגליים", correct: false }
        ],
        category: "אומדן וסקולרי",
        explanation: "תופעת Raynaud היא התכווצות כלי דם באצבעות בתגובה לקור או מתח, גורמת לשינוי צבע (לבן-כחול-אדום)."
    },
    {
        question: "מה מטרת מבחן Allen?",
        options: [
            { text: "בדיקת זרימת דם עורקית בכף היד דרך העורקים הרדיאלי והאולנרי", correct: true },
            { text: "בדיקת תפקוד ורידי בזרוע העליונה", correct: false },
            { text: "הערכת כוח שרירי האחיזה של כף היד", correct: false },
            { text: "בדיקת תחושה והולכה עצבית באצבעות", correct: false }
        ],
        category: "אומדן וסקולרי",
        explanation: "מבחן Allen בוחן את זרימת הדם העורקית בכף היד. חוסמים שני עורקים, משחררים אחד ובודקים אם כף היד מתמלאת בדם."
    },
    {
        question: "מה ההבדל בין כיחלון מרכזי (Central) לכיחלון היקפי (Peripheral)?",
        options: [
            { text: "מרכזי בשפתיים ולשון, היקפי באצבעות וקצות גפיים", correct: true },
            { text: "מרכזי בחזה ובטן, היקפי בפנים", correct: false },
            { text: "מרכזי באוזניים, היקפי ברגליים", correct: false },
            { text: "מרכזי בגב, היקפי בזרועות", correct: false }
        ],
        category: "אומדן וסקולרי",
        explanation: "כיחלון מרכזי מופיע בשפתיים, לשון וריריות ומעיד על היפוקסיה מערכתית. כיחלון היקפי מופיע באצבעות וקצות גפיים."
    },
    {
        question: "כיצד נמדד דופק אפיקלי (Apical Pulse)?",
        options: [
            { text: "עם סטטוסקופ על החזה למשך 60 שניות", correct: true },
            { text: "עם אצבעות על הצוואר למשך 30 שניות", correct: false },
            { text: "עם מכשיר אלקטרוני על האצבע למשך דקה", correct: false },
            { text: "עם מישוש על פרק כף היד למשך 15 שניות", correct: false }
        ],
        category: "אומדן וסקולרי",
        explanation: "דופק אפיקלי נמדד עם סטטוסקופ במקום PMI (Point of Maximal Impulse), בדרך כלל בין הצלעות 5-6, למשך 60 שניות מלאות."
    },
    {
        question: "מהו Pulse Deficit?",
        options: [
            { text: "הפרש בין קצב דופק אפיקלי (לבבי) לדופק רדיאלי", correct: true },
            { text: "דופק חלש מאוד שקשה למישוש", correct: false },
            { text: "הפרש בין דופק ביד ימין לשמאל", correct: false },
            { text: "דופק לא סדיר עם השהיות ארוכות", correct: false }
        ],
        category: "אומדן וסקולרי",
        explanation: "Pulse Deficit הוא הפרש בין קצב הלב (אפיקלי) לבין קצב הדופק הרדיאלי, נפוץ ב-Atrial Fibrillation."
    },
    {
        question: "על מה מעיד Clubbing (התאלות אצבעות)?",
        options: [
            { text: "היפוקסיה כרונית, מחלות ריאה או לב כרוניות", correct: true },
            { text: "זיהום חריף בדרכי הנשימה", correct: false },
            { text: "מחסור בויטמין D וסידן", correct: false },
            { text: "פגיעה מקומית באצבעות מטראומה", correct: false }
        ],
        category: "אומדן וסקולרי",
        explanation: "Clubbing מעיד על היפוקסיה כרונית, מחלות ריאה (COPD, סרטן ריאה), מחלות לב ציאנוטיות או מחלות מעיים דלקתיות."
    },
    {
        question: "מהו Pulsus Paradoxus?",
        options: [
            { text: "ירידה בלחץ דם סיסטולי >10 mmHg בעת שאיפה", correct: true },
            { text: "עלייה בלחץ דם בעת נשיפה", correct: false },
            { text: "דופק לא סדיר עם פעימות חסרות", correct: false },
            { text: "דופק חלש רק בגף אחד", correct: false }
        ],
        category: "אומדן וסקולרי",
        explanation: "Pulsus Paradoxus הוא ירידה של יותר מ-10 mmHg בלחץ הדם הסיסטולי בעת שאיפה. נראה בטמפונדה לבבית ואסטמה חמורה."
    }
];
