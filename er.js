// ER Review Quiz Data - דף חזרה למיון
const erData = [
    // === משככי כאבים ===
    {
        question: "מהי הסכנה העיקרית במינון יתר של Paracetamol (Acamol)?",
        options: [
            { text: "פגיעה בכבד", correct: true },
            { text: "אגרנולוציטוזיס", correct: false },
            { text: "דיכוי נשימתי", correct: false },
            { text: "דימום מהקיבה", correct: false }
        ],
        category: "משככי כאבים",
        explanation: "Paracetamol משכך כאב ומוריד חום. במינון יתר הוא גורם לפגיעה בכבד – לכן חשוב לבדוק את המינון הכולל, כולל בתכשירים משולבים."
    },
    {
        question: "מה נכון לגבי Paracetamol (Acamol)?",
        options: [
            { text: "משכך כאב ומוריד חום", correct: true },
            { text: "NSAID שמפחית דלקת", correct: false },
            { text: "אופיואיד חלש", correct: false },
            { text: "מרפה שריר חלק", correct: false }
        ],
        category: "משככי כאבים",
        explanation: "Acamol משכך כאב ומוריד חום, אך אינו נוגד דלקת משמעותי (שלא כמו NSAIDs כגון Voltaren)."
    },
    {
        question: "איזו תופעת לוואי נדירה אך משמעותית מיוחסת ל-Dipyrone (Optalgin)?",
        options: [
            { text: "אגרנולוציטוזיס", correct: true },
            { text: "פגיעה בכבד", correct: false },
            { text: "תופעות אקסטרה-פירמידליות", correct: false },
            { text: "היפוקלמיה", correct: false }
        ],
        category: "משככי כאבים",
        explanation: "Optalgin משכך כאב ומוריד חום. תופעת לוואי נדירה אך משמעותית היא אגרנולוציטוזיס – ירידה חדה בנויטרופילים."
    },
    {
        question: "Diclofenac (Voltaren / Abitren) שייך לקבוצה:",
        options: [
            { text: "NSAID – משכך כאב ומפחית דלקת", correct: true },
            { text: "אופיואיד", correct: false },
            { text: "חוסם תעלות סידן", correct: false },
            { text: "בנזודיאזפין", correct: false }
        ],
        category: "משככי כאבים",
        explanation: "Diclofenac הוא NSAID – משכך כאב ומפחית דלקת."
    },
    {
        question: "מטופל מקבל Voltaren. מה חשוב לזכור?",
        options: [
            { text: "סיכון לפגיעה בקיבה/כליות ודימום; לא לקחת על קיבה ריקה", correct: true },
            { text: "סיכון לדיכוי נשימתי; לעקוב אחרי RR", correct: false },
            { text: "יש לתת רק לפני גלוקוז", correct: false },
            { text: "אסור לתת עם מזון", correct: false }
        ],
        category: "משככי כאבים",
        explanation: "NSAIDs כמו Diclofenac עלולים לפגוע בקיבה ובכליות ולהגביר סיכון לדימום. לא לקחת על קיבה ריקה."
    },
    {
        question: "Cod-Acamol מכיל קודאין. אילו תופעות לוואי צפויות בעיקר בגלל הקודאין?",
        options: [
            { text: "ישנוניות, עצירות ודיכוי נשימתי", correct: true },
            { text: "שלשול, טכיקרדיה ויתר לחץ דם", correct: false },
            { text: "אגרנולוציטוזיס", correct: false },
            { text: "תופעות אקסטרה-פירמידליות", correct: false }
        ],
        category: "משככי כאבים",
        explanation: "קודאין הוא אופיואיד, ולכן Cod-Acamol חזק יותר מ-Acamol אך גורם לישנוניות, עצירות ודיכוי נשימתי."
    },
    {
        question: "מטופל קיבל Morphine לכאב חזק. איזה מדד חשוב במיוחד לעקוב אחריו?",
        options: [
            { text: "קצב נשימה (RR)", correct: true },
            { text: "חום גוף", correct: false },
            { text: "רמת סוכר", correct: false },
            { text: "צבע שתן", correct: false }
        ],
        category: "משככי כאבים",
        explanation: "Morphine הוא אופיואיד חזק. תופעות לוואי: דיכוי נשימתי, ירידת לחץ דם ועצירות – לכן מעקב צמוד אחרי RR."
    },
    {
        question: "Percocet מורכב מ:",
        options: [
            { text: "Oxycodone + Paracetamol", correct: true },
            { text: "Codeine + Paracetamol", correct: false },
            { text: "Morphine + Dipyrone", correct: false },
            { text: "Oxycodone + Diclofenac", correct: false }
        ],
        category: "משככי כאבים",
        explanation: "Percocet = Oxycodone (אופיואיד) + Paracetamol, לכאב בינוני–חזק. Cod-Acamol = Codeine + Paracetamol."
    },
    {
        question: "מהו הסיכון הכפול במתן Percocet?",
        options: [
            { text: "דיכוי נשימתי + סיכון למינון עודף של Paracetamol", correct: true },
            { text: "דימום מהקיבה + פגיעה בכליות", correct: false },
            { text: "אגרנולוציטוזיס + היפוקלמיה", correct: false },
            { text: "ברדיקרדיה + היפוגליקמיה", correct: false }
        ],
        category: "משככי כאבים",
        explanation: "הרכיב האופיואידי (Oxycodone) גורם לדיכוי נשימתי, והרכיב Paracetamol מעלה סיכון למינון עודף ופגיעה בכבד – במיוחד אם המטופל לוקח גם Acamol."
    },
    {
        question: "איזה מהבאים הוא אופיואיד?",
        options: [
            { text: "Morphine", correct: true },
            { text: "Optalgin", correct: false },
            { text: "Voltaren", correct: false },
            { text: "Acamol", correct: false }
        ],
        category: "משככי כאבים",
        explanation: "Morphine הוא אופיואיד חזק. Optalgin ו-Acamol משככי כאב ומורידי חום, Voltaren הוא NSAID."
    },

    // === תרופות לב והפרעות קצב ===
    {
        question: "מהו מנגנון הפעולה של Verapamil (Ikacor)?",
        options: [
            { text: "חוסם תעלות סידן – מאט הולכה ב-AV node ומוריד דופק", correct: true },
            { text: "חוסם β – מוריד דופק ולחץ דם", correct: false },
            { text: "ACE inhibitor – מוריד לחץ דם", correct: false },
            { text: "מרחיב כלי דם – מפחית preload", correct: false }
        ],
        category: "תרופות לב והפרעות קצב",
        explanation: "Verapamil הוא חוסם תעלות סידן, מאט הולכה דרך ה-AV node ומוריד דופק. משמש למשל ב-SVT ובחלק מהפרעות הקצב."
    },
    {
        question: "מהו השימוש העיקרי של Adenosine (Adenocor)?",
        options: [
            { text: "טיפול אקוטי ב-SVT סדיר", correct: true },
            { text: "טיפול בברדיקרדיה", correct: false },
            { text: "טיפול באנגינה", correct: false },
            { text: "טיפול בשוק ספטי", correct: false }
        ],
        category: "תרופות לב והפרעות קצב",
        explanation: "Adenosine חוסם זמנית את ההולכה ב-AV node ומשמש לטיפול אקוטי ב-SVT סדיר."
    },
    {
        question: "כיצד פועל Adenosine?",
        options: [
            { text: "חוסם זמנית הולכה ב-AV node", correct: true },
            { text: "חוסם פעילות פאראסימפתטית", correct: false },
            { text: "מגרה קולטני α ו-β", correct: false },
            { text: "משתן לולאה", correct: false }
        ],
        category: "תרופות לב והפרעות קצב",
        explanation: "Adenosine גורם לחסימה זמנית וקצרה מאוד של ההולכה ב-AV node, ובכך עוצר SVT סדיר."
    },
    {
        question: "Amiodarone (Procor) היא:",
        options: [
            { text: "תרופה אנטי-אריתמית רחבת טווח, כולל ל-VT", correct: true },
            { text: "חוסם β סלקטיבי", correct: false },
            { text: "משתן לולאה", correct: false },
            { text: "ואזופרסור לשוק", correct: false }
        ],
        category: "תרופות לב והפרעות קצב",
        explanation: "Amiodarone היא תרופה אנטי-אריתמית רחבת טווח, המשמשת בהפרעות קצב שונות כולל VT."
    },
    {
        question: "מה תפקידו של Sodium bicarbonate?",
        options: [
            { text: "בסיס שמעלה pH – במצבים מסוימים של חמצת והרעלות", correct: true },
            { text: "תיקון היפוקלמיה", correct: false },
            { text: "חומר אנטי-אריתמי לטכיקרדיה חדרית", correct: false },
            { text: "מייצב ממברנת הלב בהיפרקלמיה", correct: false }
        ],
        category: "תרופות לב והפרעות קצב",
        explanation: "Sodium bicarbonate הוא בסיס שמעלה pH, וניתן במצבים מסוימים של חמצת ובמצבי הרעלה מסוימים."
    },
    {
        question: "מה נכון לגבי Lidocaine?",
        options: [
            { text: "אנטי-אריתמי בעיקר להפרעות קצב חדריות, וגם חומר הרדמה מקומית", correct: true },
            { text: "משמש בעיקר לטיפול ב-SVT סדיר", correct: false },
            { text: "חוסם β שמוריד לחץ דם", correct: false },
            { text: "מעלה דופק בברדיקרדיה", correct: false }
        ],
        category: "תרופות לב והפרעות קצב",
        explanation: "Lidocaine הוא אנטי-אריתמי, בעיקר להפרעות קצב חדריות, ומשמש גם כחומר הרדמה מקומית."
    },
    {
        question: "כיצד פועל Nitroglycerin (Glyceryl trinitrate)?",
        options: [
            { text: "מרחיב כלי דם – מפחית preload וצריכת חמצן של הלב", correct: true },
            { text: "מכווץ כלי דם ומעלה MAP", correct: false },
            { text: "מאט הולכה ב-AV node", correct: false },
            { text: "מוציא נתרן ומים מהגוף", correct: false }
        ],
        category: "תרופות לב והפרעות קצב",
        explanation: "Nitroglycerin מרחיב כלי דם, מפחית preload וצריכת חמצן של הלב. משמש בעיקר באנגינה ובמצבים מסוימים של בצקת ריאות."
    },
    {
        question: "Propranolol (Deralin / Prolol) הוא:",
        options: [
            { text: "חוסם β – מוריד דופק ולחץ דם", correct: true },
            { text: "חוסם תעלות סידן", correct: false },
            { text: "ACE inhibitor", correct: false },
            { text: "α ו-β agonist", correct: false }
        ],
        category: "תרופות לב והפרעות קצב",
        explanation: "Propranolol הוא חוסם β שמוריד דופק ולחץ דם."
    },
    {
        question: "Captopril (Aceril) שייך לקבוצת:",
        options: [
            { text: "ACE inhibitors – מוריד לחץ דם ומפחית עומס על הלב", correct: true },
            { text: "חוסמי β", correct: false },
            { text: "משתני לולאה", correct: false },
            { text: "חוסמי תעלות סידן", correct: false }
        ],
        category: "תרופות לב והפרעות קצב",
        explanation: "Captopril הוא ACE inhibitor – מוריד לחץ דם ומפחית עומס על הלב."
    },
    {
        question: "Furosemide (Fusid) הוא:",
        options: [
            { text: "משתן לולאה – מוציא נתרן ומים", correct: true },
            { text: "מרחיב כלי דם", correct: false },
            { text: "ACE inhibitor", correct: false },
            { text: "מקור לאשלגן", correct: false }
        ],
        category: "תרופות לב והפרעות קצב",
        explanation: "Furosemide הוא משתן לולאה שמוציא נתרן ומים. משמש בבצקת ריאות ו-CHF."
    },
    {
        question: "מהי השפעת Epinephrine (Adrenaline)?",
        options: [
            { text: "α ו-β agonist – מעלה לחץ דם, דופק ומרחיב סמפונות", correct: true },
            { text: "חוסם β – מוריד דופק", correct: false },
            { text: "חוסם פעילות פאראסימפתטית בלבד", correct: false },
            { text: "מרחיב כלי דם ומוריד לחץ דם", correct: false }
        ],
        category: "תרופות לב והפרעות קצב",
        explanation: "Adrenaline הוא α ו-β agonist: מעלה לחץ דם ודופק ומרחיב סמפונות. משמש באנפילקסיס ובדום לב."
    },
    {
        question: "כיצד Atropine מעלה את הדופק?",
        options: [
            { text: "חוסם פעילות פאראסימפתטית", correct: true },
            { text: "חוסם תעלות סידן", correct: false },
            { text: "חוסם זמנית את ה-AV node", correct: false },
            { text: "מגרה קולטני β2 בלבד", correct: false }
        ],
        category: "תרופות לב והפרעות קצב",
        explanation: "Atropine חוסם את הפעילות הפאראסימפתטית (הוואגלית) ובכך מעלה דופק – לטיפול בברדיקרדיה."
    },
    {
        question: "איזו תרופה היא חוסם תעלות סידן?",
        options: [
            { text: "Verapamil (Ikacor)", correct: true },
            { text: "Propranolol (Deralin)", correct: false },
            { text: "Captopril (Aceril)", correct: false },
            { text: "Amiodarone (Procor)", correct: false }
        ],
        category: "תרופות לב והפרעות קצב",
        explanation: "Verapamil = חוסם תעלות סידן. Propranolol = חוסם β, Captopril = ACE inhibitor, Amiodarone = אנטי-אריתמי רחב טווח."
    },
    {
        question: "מה השם המסחרי של Amiodarone?",
        options: [
            { text: "Procor", correct: true },
            { text: "Ikacor", correct: false },
            { text: "Adenocor", correct: false },
            { text: "Aceril", correct: false }
        ],
        category: "תרופות לב והפרעות קצב",
        explanation: "Amiodarone = Procor. Verapamil = Ikacor, Adenosine = Adenocor, Captopril = Aceril."
    },

    // === נוגדי קרישה וטסיות ===
    {
        question: "מהו מנגנון הפעולה של ASA (Aspirin)?",
        options: [
            { text: "אנטי-טסייתי – מפחית הצמדות טסיות", correct: true },
            { text: "מעכב thrombin ו-factor Xa", correct: false },
            { text: "LMWH – נוגד קרישה", correct: false },
            { text: "מעודד ייצור גורמי קרישה", correct: false }
        ],
        category: "נוגדי קרישה וטסיות",
        explanation: "Aspirin הוא אנטי-טסייתי – מפחית הצמדות טסיות. חשוב במיוחד ב-ACS."
    },
    {
        question: "Enoxaparin (Clexane) הוא:",
        options: [
            { text: "LMWH – נוגד קרישה למניעה/טיפול ב-DVT/PE", correct: true },
            { text: "אנטי-טסייתי", correct: false },
            { text: "ויטמין K", correct: false },
            { text: "חוסם β", correct: false }
        ],
        category: "נוגדי קרישה וטסיות",
        explanation: "Clexane הוא הפרין במשקל מולקולרי נמוך (LMWH) – נוגד קרישה למניעה ולטיפול ב-DVT/PE."
    },
    {
        question: "כיצד פועל Heparin?",
        options: [
            { text: "נוגד קרישה – מעכב בעיקר thrombin ו-factor Xa", correct: true },
            { text: "מפחית הצמדות טסיות", correct: false },
            { text: "ממיס קרישים קיימים", correct: false },
            { text: "חוסם ייצור ויטמין K", correct: false }
        ],
        category: "נוגדי קרישה וטסיות",
        explanation: "Heparin הוא נוגד קרישה שמעכב בעיקר thrombin ו-factor Xa."
    },
    {
        question: "מה ההבדל החשוב בין ASA לבין Clexane/Heparin?",
        options: [
            { text: "ASA = Antiplatelet; Clexane/Heparin = Anticoagulants", correct: true },
            { text: "ASA = Anticoagulant; Clexane/Heparin = Antiplatelets", correct: false },
            { text: "שלושתם אנטי-טסייתיים", correct: false },
            { text: "שלושתם נוגדי קרישה מאותה קבוצה", correct: false }
        ],
        category: "נוגדי קרישה וטסיות",
        explanation: "ASA הוא אנטי-טסייתי (Antiplatelet), בעוד Clexane ו-Heparin הם נוגדי קרישה (Anticoagulants)."
    },
    {
        question: "באיזה מצב חשוב במיוחד מתן Aspirin?",
        options: [
            { text: "ACS", correct: true },
            { text: "היפוקלמיה", correct: false },
            { text: "אנפילקסיס", correct: false },
            { text: "אנצפלופתיה כבדית", correct: false }
        ],
        category: "נוגדי קרישה וטסיות",
        explanation: "Aspirin חשוב ב-ACS (תסמונת כלילית חריפה) בזכות הפחתת הצמדות הטסיות."
    },
    {
        question: "איזו תרופה מתאימה למניעת DVT במטופל מאושפז?",
        options: [
            { text: "Enoxaparin (Clexane)", correct: true },
            { text: "Phytomenadione (Konakion)", correct: false },
            { text: "Furosemide (Fusid)", correct: false },
            { text: "Papaverine", correct: false }
        ],
        category: "נוגדי קרישה וטסיות",
        explanation: "Clexane (LMWH) משמש למניעה ולטיפול ב-DVT/PE. Konakion (ויטמין K) דווקא מעודד קרישה."
    },

    // === תרופות מערכת העיכול ===
    {
        question: "כיצד פועל Ondansetron (Zofran)?",
        options: [
            { text: "חוסם 5-HT3 – מפחית בחילות והקאות", correct: true },
            { text: "משפר תנועתיות של מערכת העיכול", correct: false },
            { text: "מפחית הפרשת חומצה בקיבה", correct: false },
            { text: "אנטיהיסטמין מרדים", correct: false }
        ],
        category: "תרופות מערכת העיכול",
        explanation: "Zofran חוסם קולטני 5-HT3 (סרוטונין) ובכך מפחית בחילות והקאות."
    },
    {
        question: "מה נכון לגבי Metoclopramide (Pramin)?",
        options: [
            { text: "משפר תנועתיות ונוגד הקאה; עלול לגרום לתופעות אקסטרה-פירמידליות", correct: true },
            { text: "חוסם 5-HT3 ללא תופעות לוואי נוירולוגיות", correct: false },
            { text: "PPI שמפחית הפרשת חומצה", correct: false },
            { text: "משלשל אוסמוטי", correct: false }
        ],
        category: "תרופות מערכת העיכול",
        explanation: "Pramin משפר את תנועתיות מערכת העיכול ונוגד הקאה. ⚠️ יכול לגרום לתופעות אקסטרה-פירמידליות."
    },
    {
        question: "לאיזו תרופה נוגדת הקאה יש סיכון לתופעות אקסטרה-פירמידליות?",
        options: [
            { text: "Metoclopramide (Pramin)", correct: true },
            { text: "Ondansetron (Zofran)", correct: false },
            { text: "Pantoprazole (Controloc)", correct: false },
            { text: "Maalox", correct: false }
        ],
        category: "תרופות מערכת העיכול",
        explanation: "Metoclopramide עלול לגרום לתופעות אקסטרה-פירמידליות (כגון תנועות לא רצוניות)."
    },
    {
        question: "Pantoprazole (Controloc) ו-Esomeprazole (Nexium) הם:",
        options: [
            { text: "PPI – מפחיתים הפרשת חומצה בקיבה", correct: true },
            { text: "Antacids – מנטרלים חומצה קיימת", correct: false },
            { text: "חוסמי 5-HT3", correct: false },
            { text: "מרפי שריר חלק", correct: false }
        ],
        category: "תרופות מערכת העיכול",
        explanation: "שניהם PPI (מעכבי משאבת פרוטונים) – מפחיתים הפרשת חומצה. משמשים ב-GERD, כיב פפטי ולהגנה על הקיבה."
    },
    {
        question: "מה ההבדל בין Maalox לבין PPI?",
        options: [
            { text: "Maalox מנטרל חומצה קיימת – הקלה מהירה יותר אך קצרה יותר", correct: true },
            { text: "Maalox מפחית הפרשת חומצה לאורך זמן רב יותר", correct: false },
            { text: "Maalox הוא PPI חזק יותר", correct: false },
            { text: "אין הבדל במנגנון", correct: false }
        ],
        category: "תרופות מערכת העיכול",
        explanation: "Maalox (Magnesium/Aluminium hydroxide) הוא Antacid – מנטרל חומצה קיימת. ההקלה מהירה יותר אך קצרה יותר מ-PPI."
    },
    {
        question: "במה משמשים PPI כמו Controloc ו-Nexium?",
        options: [
            { text: "GERD, כיב פפטי ולעיתים להגנה על הקיבה", correct: true },
            { text: "עצירות ואנצפלופתיה כבדית", correct: false },
            { text: "בחילות לאחר כימותרפיה בלבד", correct: false },
            { text: "עוויתות מעיים", correct: false }
        ],
        category: "תרופות מערכת העיכול",
        explanation: "PPI משמשים ב-GERD, בכיב פפטי ולעיתים להגנה על הקיבה (למשל במטופלים על NSAIDs)."
    },
    {
        question: "מה תפקידו של Papaverine?",
        options: [
            { text: "מרפה שריר חלק – מפחית עוויתות/ספזם", correct: true },
            { text: "משלשל אוסמוטי", correct: false },
            { text: "נוגד הקאה", correct: false },
            { text: "מנטרל חומצה", correct: false }
        ],
        category: "תרופות מערכת העיכול",
        explanation: "Papaverine מרפה שריר חלק ומפחית עוויתות/ספזם."
    },
    {
        question: "מדוע Lactulose (Laevolac) חשוב במיוחד באנצפלופתיה כבדית?",
        options: [
            { text: "מפחית ספיגת אמוניה במעי", correct: true },
            { text: "מגביר ייצור גורמי קרישה", correct: false },
            { text: "מוריד חום", correct: false },
            { text: "מעלה רמת גלוקוז", correct: false }
        ],
        category: "תרופות מערכת העיכול",
        explanation: "Lactulose הוא משלשל אוסמוטי. באנצפלופתיה כבדית הוא מפחית ספיגת אמוניה במעי."
    },
    {
        question: "מטופל עם שחמת ובלבול (אנצפלופתיה כבדית). איזו תרופה מתאימה?",
        options: [
            { text: "Lactulose (Laevolac)", correct: true },
            { text: "Papaverine", correct: false },
            { text: "Glycerin suppository", correct: false },
            { text: "Maalox", correct: false }
        ],
        category: "תרופות מערכת העיכול",
        explanation: "Lactulose מפחית ספיגת אמוניה במעי ולכן הוא טיפול חשוב באנצפלופתיה כבדית."
    },
    {
        question: "Sodium citrate (Microlet) הוא:",
        options: [
            { text: "משלשל/מרכך צואה לשימוש רקטלי", correct: true },
            { text: "משלשל אוסמוטי לשתייה", correct: false },
            { text: "בסיס להעלאת pH בדם", correct: false },
            { text: "נוגד הקאה", correct: false }
        ],
        category: "תרופות מערכת העיכול",
        explanation: "Microlet (Sodium citrate) הוא משלשל/מרכך צואה לשימוש רקטלי."
    },
    {
        question: "כיצד פועל Fleet enema (Phosphates)?",
        options: [
            { text: "מושך מים למעי ומסייע בפינוי צואה", correct: true },
            { text: "מרפה שריר חלק", correct: false },
            { text: "מגרה את הרקטום בלבד ללא נוזל", correct: false },
            { text: "מפחית ספיגת אמוניה", correct: false }
        ],
        category: "תרופות מערכת העיכול",
        explanation: "Fleet enema הוא חוקן פוספטים שמושך מים למעי ומסייע בפינוי צואה."
    },
    {
        question: "כיצד מסייע Glycerin suppository?",
        options: [
            { text: "מגרה את הרקטום ומסייע ביציאה", correct: true },
            { text: "מושך מים למעי הדק", correct: false },
            { text: "מפחית ספיגת אמוניה", correct: false },
            { text: "מרפה עוויתות", correct: false }
        ],
        category: "תרופות מערכת העיכול",
        explanation: "נר גליצרין מגרה את הרקטום ומסייע ביציאה."
    },

    // === אנטיהיסטמין וסדטיבים ===
    {
        question: "Promethazine (Phenergan) הוא:",
        options: [
            { text: "אנטיהיסטמין עם השפעה מרדימה – לאלרגיה, בחילות והרגעה", correct: true },
            { text: "בנזודיאזפין קצר טווח", correct: false },
            { text: "חוסם 5-HT3", correct: false },
            { text: "סטרואיד סיסטמי", correct: false }
        ],
        category: "אנטיהיסטמין וסדטיבים",
        explanation: "Phenergan הוא אנטיהיסטמין עם השפעה מרדימה. משמש לאלרגיה, בחילות ולעיתים להרגעה."
    },
    {
        question: "במה משמש Diazepam (Assival / Valium)?",
        options: [
            { text: "חרדה, פרכוסים, הרפיית שרירים והרגעה", correct: true },
            { text: "סדציה עם אפקט אנלגטי ושמירה על רפלקסים", correct: false },
            { text: "בחילות והקאות", correct: false },
            { text: "כאב חזק", correct: false }
        ],
        category: "אנטיהיסטמין וסדטיבים",
        explanation: "Diazepam הוא בנזודיאזפין – לחרדה, פרכוסים, הרפיית שרירים והרגעה. ⚠️ ישנוניות ודיכוי נשימתי."
    },
    {
        question: "מהי הסכנה העיקרית במתן בנזודיאזפינים (Valium, Dormicum)?",
        options: [
            { text: "דיכוי נשימתי", correct: true },
            { text: "יתר לחץ דם", correct: false },
            { text: "היפרקלמיה", correct: false },
            { text: "פגיעה בכבד", correct: false }
        ],
        category: "אנטיהיסטמין וסדטיבים",
        explanation: "בנזודיאזפינים גורמים לישנוניות ולדיכוי נשימתי – יש לנטר נשימה וסטורציה."
    },
    {
        question: "Midazolam (Dormicum) משמש בעיקר ל:",
        options: [
            { text: "סדציה לפני פרוצדורות/הרדמה – בנזודיאזפין קצר טווח", correct: true },
            { text: "טיפול כרוני בחרדה", correct: false },
            { text: "שיכוך כאב חזק", correct: false },
            { text: "טיפול באלרגיה", correct: false }
        ],
        category: "אנטיהיסטמין וסדטיבים",
        explanation: "Dormicum הוא בנזודיאזפין קצר טווח לסדציה לפני פרוצדורות/הרדמה. ⚠️ דיכוי נשימתי."
    },
    {
        question: "מה מייחד את Ketamine (Ketalar)?",
        options: [
            { text: "הרדמה/סדציה עם אפקט אנלגטי; שומר יחסית על נשימה ורפלקסים, אך דורש ניטור", correct: true },
            { text: "בנזודיאזפין ללא צורך בניטור", correct: false },
            { text: "אנטיהיסטמין לאלרגיה", correct: false },
            { text: "אופיואיד שגורם לדיכוי נשימתי חמור", correct: false }
        ],
        category: "אנטיהיסטמין וסדטיבים",
        explanation: "Ketamine הוא חומר הרדמה/סדציה עם אפקט אנלגטי. שומר יחסית על הנשימה והרפלקסים לעומת חומרים אחרים – אך עדיין דורש ניטור."
    },
    {
        question: "איזו מהתרופות הבאות אינה בנזודיאזפין?",
        options: [
            { text: "Ketamine (Ketalar)", correct: true },
            { text: "Diazepam (Valium)", correct: false },
            { text: "Midazolam (Dormicum)", correct: false },
            { text: "Assival", correct: false }
        ],
        category: "אנטיהיסטמין וסדטיבים",
        explanation: "Ketamine הוא חומר הרדמה דיסוציאטיבי עם אפקט אנלגטי. Valium/Assival (Diazepam) ו-Dormicum (Midazolam) הם בנזודיאזפינים."
    },

    // === מרחיבי סמפונות וסטרואידים ===
    {
        question: "Salbutamol (Ventolin) הוא:",
        options: [
            { text: "β2 agonist – מרחיב סמפונות", correct: true },
            { text: "Anticholinergic – מרחיב סמפונות", correct: false },
            { text: "סטרואיד בשאיפה", correct: false },
            { text: "חוסם β", correct: false }
        ],
        category: "מרחיבי סמפונות וסטרואידים",
        explanation: "Ventolin הוא β2 agonist שמרחיב סמפונות – לאסתמה וברונכוספזם."
    },
    {
        question: "אילו תופעות לוואי אופייניות ל-Salbutamol?",
        options: [
            { text: "רעד, טכיקרדיה ולעיתים היפוקלמיה", correct: true },
            { text: "ברדיקרדיה והיפרקלמיה", correct: false },
            { text: "דיכוי נשימתי וישנוניות", correct: false },
            { text: "עצירות ואגרנולוציטוזיס", correct: false }
        ],
        category: "מרחיבי סמפונות וסטרואידים",
        explanation: "Salbutamol עלול לגרום לרעד, טכיקרדיה ולעיתים להיפוקלמיה (מעביר אשלגן לתוך התאים)."
    },
    {
        question: "Ipratropium (Aerovent) הוא:",
        options: [
            { text: "Anticholinergic מרחיב סמפונות – שימושי במיוחד ב-COPD", correct: true },
            { text: "β2 agonist – ראשון באסתמה", correct: false },
            { text: "סטרואיד בשאיפה", correct: false },
            { text: "אנטיהיסטמין", correct: false }
        ],
        category: "מרחיבי סמפונות וסטרואידים",
        explanation: "Aerovent הוא מרחיב סמפונות אנטיכולינרגי, שימושי במיוחד ב-COPD."
    },
    {
        question: "Budesonide (Budicort) הוא:",
        options: [
            { text: "סטרואיד בשאיפה – מפחית דלקת בדרכי הנשימה", correct: true },
            { text: "סטרואיד סיסטמי במתן פומי", correct: false },
            { text: "β2 agonist", correct: false },
            { text: "Anticholinergic", correct: false }
        ],
        category: "מרחיבי סמפונות וסטרואידים",
        explanation: "Budicort הוא סטרואיד בשאיפה שמפחית דלקת בדרכי הנשימה – לאסתמה/COPD."
    },
    {
        question: "מה נכון לגבי Dexamethasone?",
        options: [
            { text: "סטרואיד חזק – מפחית דלקת ובצקת", correct: true },
            { text: "מרחיב סמפונות β2 agonist", correct: false },
            { text: "אנטיביוטיקה רחבת טווח", correct: false },
            { text: "נוגד קרישה", correct: false }
        ],
        category: "מרחיבי סמפונות וסטרואידים",
        explanation: "Dexamethasone הוא סטרואיד חזק שמפחית דלקת ובצקת."
    },
    {
        question: "Prednisone הוא:",
        options: [
            { text: "סטרואיד סיסטמי – למצבים דלקתיים/אלרגיים", correct: true },
            { text: "סטרואיד בשאיפה בלבד", correct: false },
            { text: "אנטיהיסטמין", correct: false },
            { text: "NSAID", correct: false }
        ],
        category: "מרחיבי סמפונות וסטרואידים",
        explanation: "Prednisone הוא סטרואיד סיסטמי למצבים דלקתיים/אלרגיים ועוד."
    },
    {
        question: "איזה מרחיב סמפונות הוא אנטיכולינרגי?",
        options: [
            { text: "Ipratropium (Aerovent)", correct: true },
            { text: "Salbutamol (Ventolin)", correct: false },
            { text: "Budesonide (Budicort)", correct: false },
            { text: "Adrenaline", correct: false }
        ],
        category: "מרחיבי סמפונות וסטרואידים",
        explanation: "Ipratropium הוא אנטיכולינרגי. Salbutamol הוא β2 agonist, Budesonide הוא סטרואיד בשאיפה."
    },
    {
        question: "מטופל שמקבל אינהלציות רבות של Ventolin – איזה אלקטרוליט כדאי לבדוק?",
        options: [
            { text: "אשלגן – סיכון להיפוקלמיה", correct: true },
            { text: "נתרן – סיכון להיפרנתרמיה", correct: false },
            { text: "סידן – סיכון להיפרקלצמיה", correct: false },
            { text: "מגנזיום – סיכון להיפרמגנזמיה", correct: false }
        ],
        category: "מרחיבי סמפונות וסטרואידים",
        explanation: "Salbutamol מכניס אשלגן לתאים ועלול לגרום להיפוקלמיה."
    },

    // === אנטיביוטיקה ===
    {
        question: "מה מוסיפה Clavulanic acid ל-Amoxicillin ב-Augmentin?",
        options: [
            { text: "מרחיבה כיסוי נגד חיידקים המייצרים β-lactamase", correct: true },
            { text: "מוסיפה כיסוי נגד וירוסים", correct: false },
            { text: "מפחיתה תופעות לוואי בקיבה", correct: false },
            { text: "הופכת את התרופה לצפלוספורין", correct: false }
        ],
        category: "אנטיביוטיקה",
        explanation: "Augmentin = Amoxicillin + Clavulanic acid, שמרחיבה את הכיסוי נגד חיידקים המייצרים β-lactamase."
    },
    {
        question: "Cefazolin הוא:",
        options: [
            { text: "Cephalosporin דור ראשון; נפוץ בפרופילקסיס ניתוחי", correct: true },
            { text: "Cephalosporin דור שלישי לזיהומים קשים", correct: false },
            { text: "Fluoroquinolone", correct: false },
            { text: "Macrolide", correct: false }
        ],
        category: "אנטיביוטיקה",
        explanation: "Cefazolin הוא צפלוספורין דור ראשון ונפוץ גם בפרופילקסיס ניתוחי."
    },
    {
        question: "Ceftriaxone (Rocephin) הוא:",
        options: [
            { text: "Cephalosporin דור שלישי – לזיהומים משמעותיים", correct: true },
            { text: "Cephalosporin דור ראשון", correct: false },
            { text: "Cephalosporin דור שני", correct: false },
            { text: "פניצילין", correct: false }
        ],
        category: "אנטיביוטיקה",
        explanation: "Rocephin הוא צפלוספורין דור שלישי, לזיהומים משמעותיים."
    },
    {
        question: "Cefuroxime (Zinnat) שייך ל:",
        options: [
            { text: "Cephalosporin דור שני", correct: true },
            { text: "Cephalosporin דור ראשון", correct: false },
            { text: "Cephalosporin דור שלישי", correct: false },
            { text: "Macrolide", correct: false }
        ],
        category: "אנטיביוטיקה",
        explanation: "Zinnat (Cefuroxime) הוא צפלוספורין דור שני."
    },
    {
        question: "איזו אנטיביוטיקה היא Cephalosporin דור ראשון?",
        options: [
            { text: "Cephalexin", correct: true },
            { text: "Ceftriaxone", correct: false },
            { text: "Cefuroxime", correct: false },
            { text: "Ofloxacin", correct: false }
        ],
        category: "אנטיביוטיקה",
        explanation: "Cephalexin ו-Cefazolin הם דור ראשון. Cefuroxime דור שני, Ceftriaxone דור שלישי, Ofloxacin הוא Fluoroquinolone."
    },
    {
        question: "Ofloxacin שייך לקבוצת:",
        options: [
            { text: "Fluoroquinolones", correct: true },
            { text: "Macrolides", correct: false },
            { text: "Cephalosporins", correct: false },
            { text: "Penicillins", correct: false }
        ],
        category: "אנטיביוטיקה",
        explanation: "Ofloxacin הוא Fluoroquinolone."
    },
    {
        question: "Erythromycin שייך לקבוצת:",
        options: [
            { text: "Macrolides", correct: true },
            { text: "Fluoroquinolones", correct: false },
            { text: "Cephalosporins", correct: false },
            { text: "Penicillins", correct: false }
        ],
        category: "אנטיביוטיקה",
        explanation: "Erythromycin הוא Macrolide."
    },
    {
        question: "לאיזה זיהום אופייני משמש Penicillin V?",
        options: [
            { text: "זיהום סטרפטוקוקלי בגרון", correct: true },
            { text: "שפעת", correct: false },
            { text: "זיהום פטרייתי בעור", correct: false },
            { text: "הצטננות ויראלית", correct: false }
        ],
        category: "אנטיביוטיקה",
        explanation: "Penicillin V משמש לזיהומים חיידקיים רגישים, למשל סטרפטוקוק בגרון."
    },
    {
        question: "מטופל עם הצטננות ויראלית מבקש אנטיביוטיקה. מה נכון?",
        options: [
            { text: "אנטיביוטיקה מטפלת בזיהום חיידקי – לא בזיהום ויראלי", correct: true },
            { text: "יש לתת Augmentin לכל זיהום בדרכי הנשימה", correct: false },
            { text: "יש לתת Ceftriaxone כדי לקצר את המחלה", correct: false },
            { text: "אנטיביוטיקה מונעת הדבקה בווירוס", correct: false }
        ],
        category: "אנטיביוטיקה",
        explanation: "⭐ כלל חשוב: אנטיביוטיקה מטפלת בזיהום חיידקי – לא בזיהום ויראלי."
    },
    {
        question: "מה ההבדל בין Amoxicillin ל-Penicillin V?",
        options: [
            { text: "Amoxicillin הוא פניצילין עם טווח רחב יותר", correct: true },
            { text: "Amoxicillin הוא צפלוספורין", correct: false },
            { text: "Amoxicillin הוא Macrolide", correct: false },
            { text: "Penicillin V רחב טווח יותר", correct: false }
        ],
        category: "אנטיביוטיקה",
        explanation: "שניהם פניצילינים, אך Amoxicillin רחב יותר."
    },
    {
        question: "איזו מהבאות שייכת למשפחת הפניצילינים?",
        options: [
            { text: "Amoxicillin", correct: true },
            { text: "Ceftriaxone", correct: false },
            { text: "Ofloxacin", correct: false },
            { text: "Erythromycin", correct: false }
        ],
        category: "אנטיביוטיקה",
        explanation: "Amoxicillin, Penicillin V ו-Augmentin הם פניצילינים. Ceftriaxone = צפלוספורין, Ofloxacin = Fluoroquinolone, Erythromycin = Macrolide."
    },

    // === נוזלים וטיפול בפצעים ===
    {
        question: "NaCl 0.9% (Normal Saline) הוא:",
        options: [
            { text: "נוזל איזוטוני – להחזרת נפח/נוזלים", correct: true },
            { text: "נוזל היפוטוני להמסת תרופות", correct: false },
            { text: "תמיסת גלוקוז", correct: false },
            { text: "נוזל קולואידי", correct: false }
        ],
        category: "נוזלים וטיפול בפצעים",
        explanation: "Normal Saline הוא נוזל איזוטוני להחזרת נפח/נוזלים."
    },
    {
        question: "מדוע D5W אינו נוזל הבחירה להחייאת נפח?",
        options: [
            { text: "לאחר שהגלוקוז מנוצל, המים מתפזרים בכל הגוף ולא נשארים בכלי הדם", correct: true },
            { text: "כי הוא מכיל יותר מדי נתרן", correct: false },
            { text: "כי הוא גורם להיפרקלמיה", correct: false },
            { text: "כי אסור לתת אותו בווריד", correct: false }
        ],
        category: "נוזלים וטיפול בפצעים",
        explanation: "D5W = גלוקוז 5% במים. לאחר שהגלוקוז מנוצל, המים מתפזרים בגוף – ולכן אינו נוזל הבחירה להחייאת נפח."
    },
    {
        question: "למה משמשים Water for Injection (WFI)?",
        options: [
            { text: "להמסת/דילול תרופות – לא לעירוי IV ישיר בכמויות גדולות", correct: true },
            { text: "להחייאת נפח בשוק", correct: false },
            { text: "לטיפול בהיפוגליקמיה", correct: false },
            { text: "לשטיפת פצעי כוויה בלבד", correct: false }
        ],
        category: "נוזלים וטיפול בפצעים",
        explanation: "WFI הם מים סטריליים להמסת/דילול תרופות. ❌ לא מיועדים לעירוי IV ישיר בכמויות גדולות."
    },
    {
        question: "מה מאפיין את Plasma-Lyte 148?",
        options: [
            { text: "נוזל קריסטלואידי מאוזן, דומה בהרכבו לנוזל החוץ-תאי", correct: true },
            { text: "תמיסת גלוקוז מרוכזת", correct: false },
            { text: "מים סטריליים להמסת תרופות", correct: false },
            { text: "מוצר דם", correct: false }
        ],
        category: "נוזלים וטיפול בפצעים",
        explanation: "Plasma-Lyte 148 הוא קריסטלואיד מאוזן שהרכבו דומה לנוזל החוץ-תאי."
    },
    {
        question: "מטופל מגיע עם ירידת נפח וטכיקרדיה. איזה נוזל מתאים להחזרת נפח?",
        options: [
            { text: "NaCl 0.9%", correct: true },
            { text: "D5W", correct: false },
            { text: "Water for Injection", correct: false },
            { text: "Glucose 20%", correct: false }
        ],
        category: "נוזלים וטיפול בפצעים",
        explanation: "להחזרת נפח משתמשים בנוזל איזוטוני כמו NaCl 0.9% (או קריסטלואיד מאוזן כמו Plasma-Lyte). D5W ו-WFI אינם מתאימים להחייאת נפח."
    },
    {
        question: "Povidone iodine (Polidine) הוא:",
        options: [
            { text: "חומר אנטיספטי – מפחית עומס חיידקי", correct: true },
            { text: "אנטיביוטיקה סיסטמית", correct: false },
            { text: "משחה לכוויות על בסיס כסף", correct: false },
            { text: "סטרואיד מקומי", correct: false }
        ],
        category: "נוזלים וטיפול בפצעים",
        explanation: "Polidine (Povidone iodine) הוא חומר אנטיספטי שמפחית עומס חיידקי."
    },
    {
        question: "Silver sulfadiazine (Silverol) מוכר בעיקר בטיפול ב:",
        options: [
            { text: "כוויות", correct: true },
            { text: "שברים", correct: false },
            { text: "טחורים", correct: false },
            { text: "דלקת לחמית", correct: false }
        ],
        category: "נוזלים וטיפול בפצעים",
        explanation: "Silverol הוא חומר אנטימיקרוביאלי מקומי, מוכר בעיקר בטיפול בכוויות."
    },

    // === תרופות חשובות נוספות במיון ===
    {
        question: "מדוע במצבים מתאימים נותנים Thiamine (B1) לפני גלוקוז?",
        options: [
            { text: "כדי להפחית סיכון ל-Wernicke encephalopathy", correct: true },
            { text: "כדי למנוע היפרקלמיה", correct: false },
            { text: "כדי להעלות לחץ דם", correct: false },
            { text: "כדי למנוע אגרנולוציטוזיס", correct: false }
        ],
        category: "תרופות חשובות נוספות במיון",
        explanation: "⭐ במצבים מתאימים (אלכוהוליזם/תת-תזונה) נותנים Thiamine לפני גלוקוז כדי להפחית סיכון ל-Wernicke encephalopathy."
    },
    {
        question: "באילו מטופלים Thiamine חשוב במיוחד?",
        options: [
            { text: "חולי אלכוהוליזם ותת-תזונה", correct: true },
            { text: "מטופלים עם היפרקלמיה", correct: false },
            { text: "מטופלים עם אסתמה", correct: false },
            { text: "מטופלים לאחר ניתוח", correct: false }
        ],
        category: "תרופות חשובות נוספות במיון",
        explanation: "Thiamine (ויטמין B1) חשוב במיוחד בחולי אלכוהוליזם/תת-תזונה."
    },
    {
        question: "מה תפקידו של Phytomenadione (Konakion / Vitamin K)?",
        options: [
            { text: "חיוני לייצור גורמי קרישה בכבד; משמש בהיפוך השפעת Warfarin", correct: true },
            { text: "נוגד קרישה למניעת DVT", correct: false },
            { text: "אנטי-טסייתי ב-ACS", correct: false },
            { text: "תיקון היפוקלמיה", correct: false }
        ],
        category: "תרופות חשובות נוספות במיון",
        explanation: "Konakion (ויטמין K) חיוני לייצור גורמי קרישה בכבד. משמש בהיפוך השפעת Warfarin ובחסר ויטמין K."
    },
    {
        question: "מטופל המטופל ב-Warfarin מגיע עם דימום. איזו תרופה מהרשימה הופכת את השפעת ה-Warfarin?",
        options: [
            { text: "Konakion (Vitamin K)", correct: true },
            { text: "Clexane", correct: false },
            { text: "Aspirin", correct: false },
            { text: "Heparin", correct: false }
        ],
        category: "תרופות חשובות נוספות במיון",
        explanation: "ויטמין K (Konakion) מאפשר לכבד לייצר גורמי קרישה ובכך הופך את השפעת Warfarin."
    },
    {
        question: "מה הכלל החשוב ביותר במתן KCl בווריד?",
        options: [
            { text: "לעולם לא IV push – חייב דילול וקצב מבוקר", correct: true },
            { text: "יש לתת IV push מהיר כדי לתקן במהירות", correct: false },
            { text: "יש לתת רק עם גלוקוז 50%", correct: false },
            { text: "אין צורך בניטור", correct: false }
        ],
        category: "תרופות חשובות נוספות במיון",
        explanation: "KCl לתיקון היפוקלמיה. ⚠️ לא לתת IV push! חייב דילול וקצב מבוקר – מתן מהיר עלול לגרום להפרעות קצב קטלניות."
    },
    {
        question: "במה משמשות תמיסות Glucose 5/10/20%?",
        options: [
            { text: "מקור לגלוקוז – בעיקר לטיפול בהיפוגליקמיה בריכוז המתאים", correct: true },
            { text: "החייאת נפח בשוק דימומי", correct: false },
            { text: "תיקון היפוקלמיה", correct: false },
            { text: "הורדת לחץ תוך-גולגולתי", correct: false }
        ],
        category: "תרופות חשובות נוספות במיון",
        explanation: "תמיסות גלוקוז הן מקור לגלוקוז, בעיקר לטיפול בהיפוגליקמיה בריכוז המתאים."
    },
    {
        question: "מה נכון לגבי Calcium gluconate בהיפרקלמיה עם שינויים באק״ג?",
        options: [
            { text: "מייצב את ממברנת הלב אך לא מוריד את רמת האשלגן", correct: true },
            { text: "מוריד את רמת האשלגן בדם במהירות", correct: false },
            { text: "מגביר הפרשת אשלגן בשתן", correct: false },
            { text: "אסור לתת אותו בהיפרקלמיה", correct: false }
        ],
        category: "תרופות חשובות נוספות במיון",
        explanation: "⭐ Calcium gluconate מייצב את ממברנת הלב בהיפרקלמיה עם שינויים באק״ג – אך לא מוריד את רמת האשלגן."
    },
    {
        question: "באילו מצבים משתמשים ב-Magnesium sulfate?",
        options: [
            { text: "חסר מגנזיום, Torsades de pointes ואקלמפסיה", correct: true },
            { text: "היפרקלמיה ו-DKA", correct: false },
            { text: "SVT ו-ברדיקרדיה", correct: false },
            { text: "אנפילקסיס ואסתמה בלבד", correct: false }
        ],
        category: "תרופות חשובות נוספות במיון",
        explanation: "Magnesium sulfate לתיקון חסר מגנזיום; שימושים נוספים: Torsades de pointes ואקלמפסיה."
    },
    {
        question: "Norepinephrine (Noradrenaline) הוא:",
        options: [
            { text: "ואזופרסור – מכווץ כלי דם ומעלה MAP", correct: true },
            { text: "מרחיב כלי דם – מוריד preload", correct: false },
            { text: "חוסם β", correct: false },
            { text: "משתן לולאה", correct: false }
        ],
        category: "תרופות חשובות נוספות במיון",
        explanation: "Noradrenaline הוא ואזופרסור שמכווץ כלי דם ומעלה MAP – תרופה מרכזית בשוק ספטי."
    },
    {
        question: "מתי ניתן Noradrenaline בשוק ספטי?",
        options: [
            { text: "בתת-לחץ דם לאחר החייאת נוזלים לפי הצורך", correct: true },
            { text: "לפני כל מתן נוזלים", correct: false },
            { text: "רק כשיש ברדיקרדיה", correct: false },
            { text: "רק בשוק נוירוגני", correct: false }
        ],
        category: "תרופות חשובות נוספות במיון",
        explanation: "⭐ Noradrenaline היא תרופה מרכזית בשוק ספטי עם תת-לחץ דם לאחר החייאת נוזלים לפי הצורך."
    },
    {
        question: "מטופלת עם אקלמפסיה. איזו תרופה מהרשימה משמשת במצב זה?",
        options: [
            { text: "Magnesium sulfate", correct: true },
            { text: "Calcium gluconate", correct: false },
            { text: "KCl", correct: false },
            { text: "Sodium bicarbonate", correct: false }
        ],
        category: "תרופות חשובות נוספות במיון",
        explanation: "Magnesium sulfate משמש באקלמפסיה, ב-Torsades de pointes ובתיקון חסר מגנזיום."
    },

    // === מצבים נוירולוגיים ===
    {
        question: "מה חשוב להעריך במטופל עם חבלת ראש?",
        options: [
            { text: "GCS, אישונים, הכרה, הקאות, כאב ראש ושינוי נוירולוגי", correct: true },
            { text: "רק לחץ דם ודופק", correct: false },
            { text: "רק נוכחות פצע חיצוני", correct: false },
            { text: "רמת סוכר בלבד", correct: false }
        ],
        category: "מצבים נוירולוגיים",
        explanation: "בחבלת ראש (עלולה לגרום לזעזוע, דימום תוך-גולגולתי או בצקת): GCS, אישונים, הכרה, הקאות, כאב ראש ושינוי נוירולוגי."
    },
    {
        question: "אילו סיבוכים עלולים להתפתח לאחר חבלת ראש?",
        options: [
            { text: "זעזוע מוח, דימום תוך-גולגולתי או בצקת", correct: true },
            { text: "אנצפלופתיה כבדית", correct: false },
            { text: "היפוקלמיה", correct: false },
            { text: "דלקת קרומי המוח מיידית", correct: false }
        ],
        category: "מצבים נוירולוגיים",
        explanation: "חבלת ראש עלולה לגרום לזעזוע, דימום תוך-גולגולתי או בצקת מוחית."
    },
    {
        question: "בחשד ל-CVA (שבץ), מה חשוב במיוחד?",
        options: [
            { text: "FAST, זמן הופעת התסמינים והדמיית מוח", correct: true },
            { text: "מתן גלוקוז מיידי לכולם", correct: false },
            { text: "מתן Morphine לכאב ראש", correct: false },
            { text: "המתנה לשיפור עצמוני לפני הדמיה", correct: false }
        ],
        category: "מצבים נוירולוגיים",
        explanation: "CVA = אירוע מוחי עקב חסימת כלי דם או דימום. ⭐ FAST, זמן הופעת התסמינים והדמיית מוח."
    },
    {
        question: "מהו TIA?",
        options: [
            { text: "אירוע נוירולוגי חולף עקב איסכמיה ללא אוטם מוחי קבוע; סימן אזהרה לשבץ", correct: true },
            { text: "דימום מוחי קטן שאינו מצריך מעקב", correct: false },
            { text: "פרכוס ממושך", correct: false },
            { text: "מיגרנה עם אאורה", correct: false }
        ],
        category: "מצבים נוירולוגיים",
        explanation: "TIA הוא אירוע נוירולוגי חולף עקב איסכמיה, ללא אוטם מוחי קבוע. ⚠️ מהווה סימן אזהרה לשבץ."
    },
    {
        question: "אילו סימנים אופייניים ל-Meningitis?",
        options: [
            { text: "חום, כאב ראש, קשיון עורף ושינוי במצב הכרה", correct: true },
            { text: "כאב ראש חד-צדדי פועם עם רגישות לאור, ללא חום", correct: false },
            { text: "תחושת סחרור בלבד", correct: false },
            { text: "אובדן הכרה קצר עם חזרה מהירה", correct: false }
        ],
        category: "מצבים נוירולוגיים",
        explanation: "⭐ Meningitis (דלקת קרומי המוח): חום, כאב ראש, קשיון עורף ושינוי במצב הכרה."
    },
    {
        question: "מהו Syncope?",
        options: [
            { text: "אובדן הכרה קצר וחולף עקב ירידה זמנית בפרפוזיה המוחית", correct: true },
            { text: "פרכוס עקב פעילות חשמלית לא תקינה", correct: false },
            { text: "תחושה שהסביבה מסתובבת", correct: false },
            { text: "אירוע איסכמי עם אוטם מוחי", correct: false }
        ],
        category: "מצבים נוירולוגיים",
        explanation: "Syncope = אובדן הכרה קצר וחולף עקב ירידה זמנית בפרפוזיה המוחית."
    },
    {
        question: "מטופל מתאר שהחדר \"מסתובב\" סביבו. מהו המונח?",
        options: [
            { text: "Vertigo", correct: true },
            { text: "Syncope", correct: false },
            { text: "Seizure", correct: false },
            { text: "TIA", correct: false }
        ],
        category: "מצבים נוירולוגיים",
        explanation: "Vertigo = תחושת סחרור/שהסביבה מסתובבת."
    },
    {
        question: "מה מאפיין Migraine?",
        options: [
            { text: "כאב ראש לעיתים חד-צדדי ופועם, עם בחילות/רגישות לאור", correct: true },
            { text: "כאב ראש עם חום וקשיון עורף", correct: false },
            { text: "אובדן הכרה פתאומי", correct: false },
            { text: "חולשה חד-צדדית קבועה", correct: false }
        ],
        category: "מצבים נוירולוגיים",
        explanation: "Migraine – כאב ראש נוירולוגי, לעיתים חד-צדדי ופועם, עם בחילות/רגישות לאור."
    },
    {
        question: "מהו Seizure?",
        options: [
            { text: "פרכוס עקב פעילות חשמלית לא תקינה במוח", correct: true },
            { text: "ירידה זמנית בפרפוזיה המוחית", correct: false },
            { text: "חסימת כלי דם במוח", correct: false },
            { text: "דלקת קרומי המוח", correct: false }
        ],
        category: "מצבים נוירולוגיים",
        explanation: "Seizure = פרכוס עקב פעילות חשמלית לא תקינה במוח."
    },
    {
        question: "מה ההבדל העיקרי בין TIA ל-CVA?",
        options: [
            { text: "ב-TIA התסמינים חולפים וללא אוטם מוחי קבוע", correct: true },
            { text: "TIA נגרם תמיד מדימום", correct: false },
            { text: "ב-CVA אין צורך בהדמיה", correct: false },
            { text: "TIA אינו קשור לסיכון לשבץ", correct: false }
        ],
        category: "מצבים נוירולוגיים",
        explanation: "TIA הוא אירוע חולף ללא אוטם קבוע, בעוד CVA הוא אירוע מוחי עם נזק (חסימה או דימום). TIA הוא סימן אזהרה לשבץ."
    },

    // === מצבים נשימתיים ===
    {
        question: "מהו Pneumothorax?",
        options: [
            { text: "אוויר בחלל הפלאורלי – קריסת ריאה חלקית/מלאה", correct: true },
            { text: "נוזל בחלל הפלאורלי", correct: false },
            { text: "קריש בעורק הריאה", correct: false },
            { text: "זיהום ברקמת הריאה", correct: false }
        ],
        category: "מצבים נשימתיים",
        explanation: "Pneumothorax = אוויר בחלל הפלאורלי שגורם לקריסת ריאה חלקית/מלאה. ⭐ Tension pneumothorax הוא מצב חירום."
    },
    {
        question: "איזה סוג של Pneumothorax הוא מצב חירום?",
        options: [
            { text: "Tension pneumothorax", correct: true },
            { text: "כל pneumothorax קטן", correct: false },
            { text: "Pneumothorax שנספג", correct: false },
            { text: "אף סוג אינו מצב חירום", correct: false }
        ],
        category: "מצבים נשימתיים",
        explanation: "⭐ Tension pneumothorax הוא מצב חירום."
    },
    {
        question: "מה מאפיין Pulmonary edema?",
        options: [
            { text: "הצטברות נוזלים בריאות – קוצר נשימה, חרחורים והיפוקסמיה", correct: true },
            { text: "היצרות הפיכה של דרכי הנשימה עם צפצופים", correct: false },
            { text: "אוויר בחלל הפלאורלי", correct: false },
            { text: "דלקת של הסמפונות", correct: false }
        ],
        category: "מצבים נשימתיים",
        explanation: "Pulmonary edema = הצטברות נוזלים בריאות, לעיתים עקב אי-ספיקת לב שמאל. ⭐ קוצר נשימה, חרחורים והיפוקסמיה."
    },
    {
        question: "מה המקור השכיח ביותר ל-PE (תסחיף ריאתי)?",
        options: [
            { text: "DVT", correct: true },
            { text: "Pneumonia", correct: false },
            { text: "Pneumothorax", correct: false },
            { text: "Asthma", correct: false }
        ],
        category: "מצבים נשימתיים",
        explanation: "PE = קריש שסותם עורק ריאתי, לרוב ממקור DVT."
    },
    {
        question: "מהי ההסתמנות האופיינית של PE?",
        options: [
            { text: "קוצר נשימה פתאומי, כאב בחזה, טכיקרדיה/היפוקסמיה", correct: true },
            { text: "חום, שיעול וליחה במשך שבוע", correct: false },
            { text: "צפצופים שמגיבים ל-Ventolin", correct: false },
            { text: "שיעול כרוני עם ליחה במשך שנים", correct: false }
        ],
        category: "מצבים נשימתיים",
        explanation: "⭐ PE: קוצר נשימה פתאומי, כאב בחזה, טכיקרדיה/היפוקסמיה."
    },
    {
        question: "מה ההבדל בין Asthma ל-COPD?",
        options: [
            { text: "באסתמה ההיצרות הפיכה; ב-COPD ההגבלה בזרימת האוויר מתמשכת", correct: true },
            { text: "באסתמה ההגבלה בלתי הפיכה; ב-COPD היא הפיכה", correct: false },
            { text: "שתיהן מחלות זיהומיות", correct: false },
            { text: "אין הבדל", correct: false }
        ],
        category: "מצבים נשימתיים",
        explanation: "Asthma = מחלה דלקתית עם היצרות הפיכה של דרכי הנשימה. COPD = מחלה חסימתית כרונית עם הגבלה מתמשכת בזרימת האוויר."
    },
    {
        question: "אילו תסמינים אופייניים ל-Pneumonia?",
        options: [
            { text: "חום, שיעול, ליחה ולעיתים היפוקסמיה", correct: true },
            { text: "קוצר נשימה פתאומי לאחר טיסה ארוכה", correct: false },
            { text: "צפצופים הפיכים בלבד", correct: false },
            { text: "כאב בחזה במאמץ שנרגע במנוחה", correct: false }
        ],
        category: "מצבים נשימתיים",
        explanation: "Pneumonia = זיהום ודלקת ברקמת הריאה: חום, שיעול, ליחה ולעיתים היפוקסמיה."
    },
    {
        question: "מהו URTI?",
        options: [
            { text: "זיהום בדרכי הנשימה העליונות – כגון הצטננות/דלקת גרון", correct: true },
            { text: "זיהום ברקמת הריאה", correct: false },
            { text: "מחלה חסימתית כרונית", correct: false },
            { text: "תסחיף ריאתי", correct: false }
        ],
        category: "מצבים נשימתיים",
        explanation: "URTI = זיהום בדרכי הנשימה העליונות, למשל הצטננות או דלקת גרון."
    },
    {
        question: "מהו Bronchitis?",
        options: [
            { text: "דלקת של הסמפונות, לרוב כחלק מזיהום בדרכי הנשימה", correct: true },
            { text: "זיהום ברקמת הריאה (alveoli)", correct: false },
            { text: "אוויר בחלל הפלאורלי", correct: false },
            { text: "נוזלים בריאות", correct: false }
        ],
        category: "מצבים נשימתיים",
        explanation: "Bronchitis = דלקת של הסמפונות, לרוב כחלק מזיהום בדרכי הנשימה."
    },
    {
        question: "מה הסימן האופייני לאסתמה?",
        options: [
            { text: "צפצופים וקוצר נשימה", correct: true },
            { text: "חרחורים ובצקות ברגליים", correct: false },
            { text: "קשיון עורף", correct: false },
            { text: "כאב במותן", correct: false }
        ],
        category: "מצבים נשימתיים",
        explanation: "⭐ באסתמה – צפצופים וקוצר נשימה עקב היצרות הפיכה של דרכי הנשימה."
    },

    // === מצבים קרדיאליים ===
    {
        question: "מה מאפיין Stable angina?",
        options: [
            { text: "כאב בחזה שמופיע במאמץ ונרגע במנוחה/טיפול", correct: true },
            { text: "כאב חדש או במנוחה", correct: false },
            { text: "כאב עם נזק לשריר הלב", correct: false },
            { text: "כאב שמקרין לגב לאחר ארוחה", correct: false }
        ],
        category: "מצבים קרדיאליים",
        explanation: "Stable angina = כאב בחזה עקב איסכמיה שמופיע במאמץ ונרגע במנוחה/טיפול."
    },
    {
        question: "מה מאפיין Unstable angina?",
        options: [
            { text: "כאב חדש/מחמיר/במנוחה, איסכמיה חריפה ללא עדות לאוטם – ACS", correct: true },
            { text: "כאב במאמץ בלבד שנרגע במנוחה", correct: false },
            { text: "אוטם עם נזק לשריר הלב", correct: false },
            { text: "הפרעת קצב ללא כאב", correct: false }
        ],
        category: "מצבים קרדיאליים",
        explanation: "Unstable angina = איסכמיה חריפה ללא עדות לאוטם; כאב חדש/מחמיר/במנוחה. ⚠️ מצב של ACS."
    },
    {
        question: "מהו MI (Myocardial infarction)?",
        options: [
            { text: "אוטם שריר הלב עקב איסכמיה ממושכת ונזק לשריר הלב", correct: true },
            { text: "כאב בחזה במאמץ ללא נזק", correct: false },
            { text: "הפרעה בהולכה החשמלית בלבד", correct: false },
            { text: "דלקת של קרום הלב", correct: false }
        ],
        category: "מצבים קרדיאליים",
        explanation: "MI = אוטם שריר הלב עקב איסכמיה ממושכת ונזק לשריר הלב."
    },
    {
        question: "מה ההבדל בין Unstable angina ל-MI?",
        options: [
            { text: "ב-Unstable angina אין עדות לאוטם (נזק) בשריר הלב", correct: true },
            { text: "Unstable angina מופיעה רק במאמץ", correct: false },
            { text: "MI אינו חלק מ-ACS", correct: false },
            { text: "אין הבדל", correct: false }
        ],
        category: "מצבים קרדיאליים",
        explanation: "שניהם ACS, אך ב-Unstable angina יש איסכמיה חריפה ללא עדות לאוטם, ואילו ב-MI יש נזק לשריר הלב."
    },
    {
        question: "איזה מהמצבים הבאים אינו נחשב ACS?",
        options: [
            { text: "Stable angina", correct: true },
            { text: "Unstable angina", correct: false },
            { text: "MI", correct: false },
            { text: "כולם ACS", correct: false }
        ],
        category: "מצבים קרדיאליים",
        explanation: "Stable angina מופיעה במאמץ ונרגעת במנוחה – אינה ACS. Unstable angina ו-MI הם ACS."
    },
    {
        question: "מהי Cardiac arrhythmia?",
        options: [
            { text: "הפרעה בקצב או בהולכה החשמלית של הלב (טכיקרדיה, ברדיקרדיה, AF, VT)", correct: true },
            { text: "חסימה של עורק כלילי", correct: false },
            { text: "הצטברות נוזלים בריאות", correct: false },
            { text: "דלקת של שריר הלב", correct: false }
        ],
        category: "מצבים קרדיאליים",
        explanation: "Cardiac arrhythmia = הפרעה בקצב או בהולכה החשמלית של הלב – טכיקרדיה, ברדיקרדיה, AF, VT וכו'."
    },
    {
        question: "מה מאפיין CHF (Chronic heart failure)?",
        options: [
            { text: "הלב אינו מספק תפוקת דם מספקת – בצקות, קוצר נשימה וגודש ריאתי", correct: true },
            { text: "כאב חד בחזה במאמץ בלבד", correct: false },
            { text: "הפרעת קצב חולפת", correct: false },
            { text: "חסימה פתאומית של עורק ריאתי", correct: false }
        ],
        category: "מצבים קרדיאליים",
        explanation: "CHF = הלב אינו מצליח לספק תפוקת דם מספקת לצורכי הגוף. ⭐ בצקות, קוצר נשימה וגודש ריאתי."
    },

    // === אלקטרוליטים, אנדוקריני ואלרגיה ===
    {
        question: "אילו שינויים באק״ג אופייניים להיפרקלמיה?",
        options: [
            { text: "T מחודד; בהחמרה QRS מתרחב", correct: true },
            { text: "U waves", correct: false },
            { text: "ST ירידה בלבד", correct: false },
            { text: "אין שינויים באק״ג", correct: false }
        ],
        category: "אלקטרוליטים, אנדוקריני ואלרגיה",
        explanation: "בהיפרקלמיה – T מחודד; בהחמרה QRS מתרחב. ⭐ הסכנה המרכזית: הפרעות קצב."
    },
    {
        question: "מהי הסכנה המרכזית בהיפרקלמיה?",
        options: [
            { text: "הפרעות קצב", correct: true },
            { text: "פגיעה בכבד", correct: false },
            { text: "דימום", correct: false },
            { text: "היפוגליקמיה", correct: false }
        ],
        category: "אלקטרוליטים, אנדוקריני ואלרגיה",
        explanation: "⭐ הסכנה המרכזית בהיפרקלמיה היא הפרעות קצב."
    },
    {
        question: "איזה ממצא באק״ג יכול להופיע בהיפוקלמיה?",
        options: [
            { text: "U waves", correct: true },
            { text: "T מחודד", correct: false },
            { text: "QRS רחב מאוד", correct: false },
            { text: "גלי Delta", correct: false }
        ],
        category: "אלקטרוליטים, אנדוקריני ואלרגיה",
        explanation: "בהיפוקלמיה – חולשת שרירים והפרעות קצב; ECG יכול להראות U waves."
    },
    {
        question: "אילו תסמינים אופייניים להיפוקלמיה?",
        options: [
            { text: "חולשת שרירים והפרעות קצב", correct: true },
            { text: "קשיון עורף וחום", correct: false },
            { text: "צואה שחורה", correct: false },
            { text: "כאב במותן", correct: false }
        ],
        category: "אלקטרוליטים, אנדוקריני ואלרגיה",
        explanation: "⭐ היפוקלמיה (אשלגן נמוך): חולשת שרירים והפרעות קצב."
    },
    {
        question: "מה מאפיין DKA (Diabetic Ketoacidosis)?",
        options: [
            { text: "חסר אינסולין → היפרגליקמיה + קטונים + חמצת מטבולית", correct: true },
            { text: "עודף אינסולין → היפוגליקמיה", correct: false },
            { text: "היפרגליקמיה עם בססת מטבולית", correct: false },
            { text: "חסר ויטמין B1", correct: false }
        ],
        category: "אלקטרוליטים, אנדוקריני ואלרגיה",
        explanation: "DKA = סיבוך חריף של סוכרת: חסר אינסולין → היפרגליקמיה + יצירת קטונים + חמצת מטבולית."
    },
    {
        question: "מהו עיקר הטיפול ב-DKA?",
        options: [
            { text: "נוזלים, אינסולין ותיקון אלקטרוליטים לפי פרוטוקול", correct: true },
            { text: "גלוקוז 20% ו-Thiamine", correct: false },
            { text: "Furosemide והגבלת נוזלים", correct: false },
            { text: "אנטיביוטיקה בלבד", correct: false }
        ],
        category: "אלקטרוליטים, אנדוקריני ואלרגיה",
        explanation: "⭐ DKA: נוזלים, אינסולין ותיקון אלקטרוליטים בהתאם לפרוטוקול (כולל ניטור K⁺)."
    },
    {
        question: "מהו הטיפול הראשון באנפילקסיס?",
        options: [
            { text: "Adrenaline IM", correct: true },
            { text: "Promethazine (Phenergan) PO", correct: false },
            { text: "Dexamethasone IV בלבד", correct: false },
            { text: "Atropine IV", correct: false }
        ],
        category: "אלקטרוליטים, אנדוקריני ואלרגיה",
        explanation: "⭐ באנפילקסיס – Adrenaline IM הוא הטיפול הראשון."
    },
    {
        question: "מה מאפיין Anaphylaxis לעומת תגובה אלרגית רגילה?",
        options: [
            { text: "תגובה סיסטמית חמורה – ברונכוספזם, בצקת בדרכי האוויר וירידת לחץ דם", correct: true },
            { text: "פריחה מקומית בלבד", correct: false },
            { text: "גרד קל ללא סכנה", correct: false },
            { text: "חום גבוה וקשיון עורף", correct: false }
        ],
        category: "אלקטרוליטים, אנדוקריני ואלרגיה",
        explanation: "Anaphylaxis = תגובה אלרגית סיסטמית חמורה שעלולה לגרום לברונכוספזם, בצקת בדרכי האוויר וירידת לחץ דם."
    },
    {
        question: "מהי Allergic reaction?",
        options: [
            { text: "תגובה חיסונית לאלרגן בדרגות חומרה שונות", correct: true },
            { text: "זיהום חיידקי בעור", correct: false },
            { text: "תופעה שמופיעה רק לאחר אנטיביוטיקה", correct: false },
            { text: "תמיד מצב מסכן חיים", correct: false }
        ],
        category: "אלקטרוליטים, אנדוקריני ואלרגיה",
        explanation: "Allergic reaction = תגובה חיסונית לאלרגן בדרגות חומרה שונות – מקלה ועד אנפילקסיס."
    },

    // === מערכת העיכול והבטן ===
    {
        question: "מהו GERD?",
        options: [
            { text: "חזרת תוכן חומצי מהקיבה לוושט – צרבת/רפלוקס", correct: true },
            { text: "כיב בתריסריון", correct: false },
            { text: "דלקת בלבלב", correct: false },
            { text: "דלקת בכיס המרה", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "GERD = חזרת תוכן חומצי מהקיבה לוושט – צרבת/רפלוקס."
    },
    {
        question: "מהם הגורמים המרכזיים ל-PUD (כיב פפטי)?",
        options: [
            { text: "H. pylori ו-NSAIDs", correct: true },
            { text: "אלכוהול ופרצטמול", correct: false },
            { text: "סטרס ומזון חריף בלבד", correct: false },
            { text: "אבני מרה", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "⭐ PUD – כיב בקיבה או בתריסריון. גורמים מרכזיים: H. pylori ו-NSAIDs."
    },
    {
        question: "מה מאפיין Gastroenteritis?",
        options: [
            { text: "הקאות, שלשולים, כאבי בטן ולעיתים חום", correct: true },
            { text: "כאב ב-RLQ שהתחיל סביב הטבור", correct: false },
            { text: "צואה שחורה וזפתית", correct: false },
            { text: "בטן קשה כקרש", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "Gastroenteritis = דלקת/זיהום במערכת העיכול: הקאות, שלשולים, כאבי בטן ולעיתים חום."
    },
    {
        question: "מטופל עם כאב אפיגסטרי עז שמקרין לגב. איזו אבחנה מתאימה?",
        options: [
            { text: "Pancreatitis", correct: true },
            { text: "Appendicitis", correct: false },
            { text: "Diverticulitis", correct: false },
            { text: "Anal fissure", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "Pancreatitis = דלקת בלבלב: כאב אפיגסטרי משמעותי, לעיתים מקרין לגב."
    },
    {
        question: "מה ההבדל בין Biliary colic ל-Cholecystitis?",
        options: [
            { text: "ב-Biliary colic אין דלקת מתמשכת בכיס המרה", correct: true },
            { text: "Biliary colic נגרם תמיד מזיהום", correct: false },
            { text: "Cholecystitis אינו קשור לאבנים", correct: false },
            { text: "Biliary colic מופיע רק בצום", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "Cholecystitis = דלקת בכיס המרה, לרוב עקב אבן חוסמת. Biliary colic = כאב מאבן, בדרך כלל לאחר ארוחה שומנית, ללא דלקת מתמשכת."
    },
    {
        question: "מתי מופיע בדרך כלל Biliary colic?",
        options: [
            { text: "לאחר ארוחה שומנית", correct: true },
            { text: "במאמץ גופני", correct: false },
            { text: "בזמן יציאה", correct: false },
            { text: "בשכיבה על הבטן", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "Biliary colic – כאב שנגרם לרוב מאבן בכיס המרה, בדרך כלל לאחר ארוחה שומנית."
    },
    {
        question: "מתי Incarcerated hernia הופך למצב חירום?",
        options: [
            { text: "כשיש פגיעה באספקת הדם – strangulation", correct: true },
            { text: "כשהבקע ניתן להחזרה", correct: false },
            { text: "כשאין כאב", correct: false },
            { text: "רק בילדים", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "Incarcerated hernia = בקע שבו התוכן נלכד ואינו ניתן להחזרה. ⚠️ אם יש פגיעה באספקת הדם → strangulation, מצב חירום."
    },
    {
        question: "מהו המהלך האופייני של הכאב ב-Appendicitis?",
        options: [
            { text: "מתחיל סביב הטבור ועובר ל-RLQ", correct: true },
            { text: "מתחיל ב-LLQ ועובר לגב", correct: false },
            { text: "כאב אפיגסטרי שמקרין לגב", correct: false },
            { text: "כאב במותן שמקרין למפשעה", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "Appendicitis = דלקת התוספתן; הכאב מתחיל לעיתים סביב הטבור ועובר ל-RLQ."
    },
    {
        question: "מטופל בן 70 עם כאב ב-LLQ, חום ושינוי ביציאות. מה האבחנה הסבירה?",
        options: [
            { text: "Diverticulitis", correct: true },
            { text: "Appendicitis", correct: false },
            { text: "Biliary colic", correct: false },
            { text: "GERD", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "Diverticulitis = דלקת של סעיפים במעי, לרוב במעי הגס: כאב בדרך כלל ב-LLQ, חום ושינוי ביציאות."
    },
    {
        question: "אילו סימנים אופייניים ל-SBO (חסימת מעי דק)?",
        options: [
            { text: "כאבי בטן, הקאות, תפיחות והיעדר יציאות/גזים", correct: true },
            { text: "שלשולים מרובים וחום", correct: false },
            { text: "צרבת לאחר ארוחה", correct: false },
            { text: "דימום אדום טרי בזמן יציאה", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "⭐ SBO: כאבי בטן, הקאות, תפיחות והיעדר יציאות/גזים בשלבים מתקדמים."
    },
    {
        question: "מה מאפיין Peritonitis?",
        options: [
            { text: "בטן קשה/רגישה מאוד, כאב ותסמינים סיסטמיים", correct: true },
            { text: "בטן רכה ללא רגישות", correct: false },
            { text: "כאב שנרגע לאחר אוכל", correct: false },
            { text: "צרבת בלבד", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "Peritonitis = דלקת של הצפק, לעיתים בעקבות perforation או זיהום. ⭐ בטן קשה/רגישה מאוד, כאב ותסמינים סיסטמיים."
    },
    {
        question: "מה מאפיין קלינית את Mesenteric ischemia?",
        options: [
            { text: "כאב בטן משמעותי שבתחילה גדול ביחס לממצאים בבדיקה", correct: true },
            { text: "כאב קל עם בטן קשה כקרש", correct: false },
            { text: "כאב שמופיע רק לאחר ארוחה שומנית ונעלם", correct: false },
            { text: "אין כאב כלל", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "Mesenteric ischemia = פגיעה באספקת הדם למעי. ⭐ כאב בטן משמעותי שעלול להיות בתחילה גדול ביחס לממצאים בבדיקה."
    },
    {
        question: "מהו סיבוך אפשרי של Perforation באיבר חלול?",
        options: [
            { text: "Peritonitis", correct: true },
            { text: "GERD", correct: false },
            { text: "Hemorrhoids", correct: false },
            { text: "Vertigo", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "Perforation = חור/קרע באיבר חלול → דליפה לחלל הבטן ועלולה לגרום לפריטוניטיס."
    },
    {
        question: "מטופלת עם כאב חד בזמן יציאה ודימום אדום טרי. מה האבחנה הסבירה?",
        options: [
            { text: "Anal fissure", correct: true },
            { text: "Melena", correct: false },
            { text: "Pancreatitis", correct: false },
            { text: "SBO", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "Anal fissure = סדק בפי הטבעת → כאב חד בזמן יציאה ולעיתים דימום אדום טרי."
    },
    {
        question: "מהם Hemorrhoids?",
        options: [
            { text: "ורידים מורחבים באזור פי הטבעת", correct: true },
            { text: "סדק בפי הטבעת", correct: false },
            { text: "כיס מוגלה", correct: false },
            { text: "בקע מפשעתי", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "Hemorrhoids (טחורים) = ורידים מורחבים באזור פי הטבעת."
    },
    {
        question: "Melena (צואה שחורה וזפתית) מעידה לרוב על:",
        options: [
            { text: "דימום ממערכת העיכול העליונה", correct: true },
            { text: "דימום מטחורים", correct: false },
            { text: "סדק בפי הטבעת", correct: false },
            { text: "עצירות בלבד", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "Melena = צואה שחורה, זפתית, לרוב מעידה על דימום במערכת העיכול העליונה."
    },
    {
        question: "מהו Abscess?",
        options: [
            { text: "כיס מוגלה עקב זיהום", correct: true },
            { text: "בקע שנלכד", correct: false },
            { text: "קריש בווריד עמוק", correct: false },
            { text: "חור באיבר חלול", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "Abscess = כיס מוגלה עקב זיהום."
    },
    {
        question: "מהי Constipation?",
        options: [
            { text: "ירידה בתדירות/קושי בפינוי צואה", correct: true },
            { text: "חסימה מלאה של המעי הדק", correct: false },
            { text: "דלקת של הצפק", correct: false },
            { text: "צואה שחורה", correct: false }
        ],
        category: "מערכת העיכול והבטן",
        explanation: "Constipation (עצירות) = ירידה בתדירות/קושי בפינוי צואה."
    },

    // === כליות ודרכי השתן ===
    {
        question: "אילו סימנים אופייניים ל-Dehydration?",
        options: [
            { text: "ירידה בלחץ דם, טכיקרדיה, יובש ואוליגוריה", correct: true },
            { text: "יתר לחץ דם וברדיקרדיה", correct: false },
            { text: "בצקות ברגליים וחרחורים", correct: false },
            { text: "שתן מרובה", correct: false }
        ],
        category: "כליות ודרכי השתן",
        explanation: "Dehydration = חוסר בנוזלים → ירידה בנפח הדם/לחץ דם, טכיקרדיה, יובש ואוליגוריה."
    },
    {
        question: "מה ההבדל בין AKI ל-CKD?",
        options: [
            { text: "AKI = ירידה חדה בתפקוד הכליות; CKD = ירידה כרונית ומתמשכת", correct: true },
            { text: "AKI = זיהום בכליה; CKD = אבן בכליה", correct: false },
            { text: "AKI תמיד בלתי הפיך; CKD תמיד הפיך", correct: false },
            { text: "אין הבדל", correct: false }
        ],
        category: "כליות ודרכי השתן",
        explanation: "ARF/AKI = ירידה חדה בתפקוד הכליות. CRF/CKD = ירידה כרונית ומתמשכת בתפקוד הכליות."
    },
    {
        question: "אילו תסמינים מתאימים ל-Pyelonephritis?",
        options: [
            { text: "חום, צמרמורת, כאב במותן ולעיתים תסמיני UTI", correct: true },
            { text: "צריבה בשתן בלבד, ללא חום", correct: false },
            { text: "כאב ב-RLQ שהתחיל סביב הטבור", correct: false },
            { text: "שלפוחית מלאה ללא יכולת להטיל שתן", correct: false }
        ],
        category: "כליות ודרכי השתן",
        explanation: "Pyelonephritis = זיהום בכליה. ⭐ חום, צמרמורת, כאב במותן ולעיתים תסמיני UTI."
    },
    {
        question: "מה הופך UTI ל-Complex UTI?",
        options: [
            { text: "גורמי סיכון לסיבוכים – חסימה, קטטר, הפרעה מבנית או מחלות רקע", correct: true },
            { text: "צריבה במתן שתן", correct: false },
            { text: "תכיפות במתן שתן", correct: false },
            { text: "גיל צעיר", correct: false }
        ],
        category: "כליות ודרכי השתן",
        explanation: "Complex UTI = UTI עם גורמי סיכון לסיבוכים, כגון חסימה, קטטר, הפרעה מבנית או מחלות רקע."
    },
    {
        question: "Simple UTI ממוקם בדרך כלל ב:",
        options: [
            { text: "שלפוחית השתן", correct: true },
            { text: "כליה", correct: false },
            { text: "שופכן", correct: false },
            { text: "ערמונית", correct: false }
        ],
        category: "כליות ודרכי השתן",
        explanation: "Simple UTI = זיהום בדרכי השתן, בדרך כלל בשלפוחית."
    },
    {
        question: "מה מאפיין Urinary retention?",
        options: [
            { text: "חוסר יכולת לרוקן את השלפוחית – שלפוחית מלאה/כאב ולעיתים overflow", correct: true },
            { text: "מתן שתן מרובה", correct: false },
            { text: "אוליגוריה עקב התייבשות", correct: false },
            { text: "דם בשתן", correct: false }
        ],
        category: "כליות ודרכי השתן",
        explanation: "Urinary retention = חוסר יכולת לרוקן את השלפוחית → שלפוחית מלאה/כאב ולעיתים overflow."
    },
    {
        question: "מה הגורם השכיח ל-Renal colic?",
        options: [
            { text: "אבן בדרכי השתן", correct: true },
            { text: "זיהום בשלפוחית", correct: false },
            { text: "התייבשות בלבד", correct: false },
            { text: "חסימת מעי", correct: false }
        ],
        category: "כליות ודרכי השתן",
        explanation: "Renal colic = כאב עז, לרוב עקב אבן בדרכי השתן."
    },
    {
        question: "מה מבדיל Pyelonephritis מ-Simple UTI?",
        options: [
            { text: "מעורבות של דרכי השתן העליונות ותסמינים סיסטמיים", correct: true },
            { text: "צריבה בשתן", correct: false },
            { text: "תכיפות במתן שתן", correct: false },
            { text: "אין הבדל", correct: false }
        ],
        category: "כליות ודרכי השתן",
        explanation: "Pyelonephritis = UTI עם מעורבות דרכי השתן העליונות (כליה) ותסמינים סיסטמיים כמו חום וצמרמורת."
    },

    // === כלי דם, עור ושברים ===
    {
        question: "אילו סימנים אופייניים ל-DVT?",
        options: [
            { text: "נפיחות, כאב וחום מקומי ברגל", correct: true },
            { text: "רגל קרה, חיוורת וללא דופק", correct: false },
            { text: "פריחה מגרדת", correct: false },
            { text: "ורידים מורחבים ללא תסמינים", correct: false }
        ],
        category: "כלי דם, עור ושברים",
        explanation: "DVT = קריש בווריד עמוק, לרוב ברגל. ⭐ נפיחות, כאב, חום מקומי."
    },
    {
        question: "מהו הסיבוך המסוכן של DVT?",
        options: [
            { text: "PE – הקריש עלול להתנתק ולהגיע לריאות", correct: true },
            { text: "Cellulitis", correct: false },
            { text: "Pneumothorax", correct: false },
            { text: "Renal colic", correct: false }
        ],
        category: "כלי דם, עור ושברים",
        explanation: "⚠️ קריש DVT עלול להתנתק ולגרום ל-PE."
    },
    {
        question: "מהו Cellulitis?",
        options: [
            { text: "זיהום חיידקי של העור והרקמות התת-עוריות – אודם, חום, כאב ונפיחות", correct: true },
            { text: "קריש בווריד עמוק", correct: false },
            { text: "כוויה מדרגה ראשונה", correct: false },
            { text: "תגובה אלרגית מקומית", correct: false }
        ],
        category: "כלי דם, עור ושברים",
        explanation: "Cellulitis = זיהום חיידקי של העור והרקמות התת-עוריות → אודם, חום, כאב ונפיחות."
    },
    {
        question: "מה כוללת בדיקה נוירווסקולרית בשבר?",
        options: [
            { text: "Pulses + Perfusion + Sensation + Movement", correct: true },
            { text: "GCS + אישונים", correct: false },
            { text: "לחץ דם + חום + סטורציה", correct: false },
            { text: "רק בדיקת דופק", correct: false }
        ],
        category: "כלי דם, עור ושברים",
        explanation: "בשבר חשוב לבדוק נוירווסקולרי: Pulses + Perfusion + Sensation + Movement, וכן כאב, נפיחות ועיוות."
    },
    {
        question: "מטופל עם חשד לשבר באמה. מה בנוסף לבדיקה הנוירווסקולרית חשוב להעריך?",
        options: [
            { text: "כאב, נפיחות ועיוות", correct: true },
            { text: "רמת סוכר", correct: false },
            { text: "קשיון עורף", correct: false },
            { text: "תפקודי כבד", correct: false }
        ],
        category: "כלי דם, עור ושברים",
        explanation: "בשבר (פגיעה בשלמות העצם) – מעבר ל-Pulses, Perfusion, Sensation, Movement – יש להעריך כאב, נפיחות ועיוות."
    },

    // === הרעלות ושוק ===
    {
        question: "מה הגישה הראשונית למטופל עם Drug overdose?",
        options: [
            { text: "ABC, רמת הכרה, נשימה, סימנים חיוניים וזיהוי החומר", correct: true },
            { text: "מתן אנטיביוטיקה מיידית", correct: false },
            { text: "שחרור לאחר שיחה", correct: false },
            { text: "המתנה לתוצאות בדיקות דם לפני כל פעולה", correct: false }
        ],
        category: "הרעלות ושוק",
        explanation: "⭐ Drug overdose: ABC, רמת הכרה, נשימה, סימנים חיוניים וזיהוי החומר. ההשפעה תלויה בחומר."
    },
    {
        question: "במטופל עם שימוש כרוני באלכוהול ותת-תזונה, על איזה חסר חשוב לחשוב?",
        options: [
            { text: "Thiamine (B1)", correct: true },
            { text: "ויטמין C", correct: false },
            { text: "ברזל", correct: false },
            { text: "סידן", correct: false }
        ],
        category: "הרעלות ושוק",
        explanation: "⭐ בחולה כרוני/תת-תזונה חשוב לחשוב על Thiamine deficiency (סיכון ל-Wernicke)."
    },
    {
        question: "מה קורה ב-Hypovolemic shock?",
        options: [
            { text: "ירידה בנפח הדם/נוזלים → ירידה ב-preload ובתפוקת הלב", correct: true },
            { text: "ואזודילטציה עקב זיהום", correct: false },
            { text: "פגיעה במערכת העצבים האוטונומית", correct: false },
            { text: "כשל של שריר הלב בלבד", correct: false }
        ],
        category: "הרעלות ושוק",
        explanation: "Hypovolemic shock = ירידה בנפח הדם/נוזלים → ירידה ב-preload ובתפוקת הלב."
    },
    {
        question: "Hemorrhagic shock הוא:",
        options: [
            { text: "שוק היפוולמי שנגרם מדימום", correct: true },
            { text: "שוק עקב זיהום", correct: false },
            { text: "שוק עקב פגיעה בחוט השדרה", correct: false },
            { text: "שוק אלרגי", correct: false }
        ],
        category: "הרעלות ושוק",
        explanation: "Hemorrhagic shock = שוק היפוולמי שנגרם מדימום."
    },
    {
        question: "מה מאפיין Septic shock?",
        options: [
            { text: "ואזודילטציה והפרעה בפרפוזיה עקב זיהום, עם תת-לחץ דם מתמשך", correct: true },
            { text: "ברדיקרדיה עקב פגיעה בחוט השדרה", correct: false },
            { text: "איבוד דם חיצוני", correct: false },
            { text: "יתר לחץ דם עם טכיקרדיה", correct: false }
        ],
        category: "הרעלות ושוק",
        explanation: "Septic shock = תגובה לזיהום סיסטמי → ואזודילטציה והפרעה בפרפוזיה; עלול להוביל לתת-לחץ דם מתמשך."
    },
    {
        question: "מהו המאפיין החשוב של Neurogenic (Spinal) shock?",
        options: [
            { text: "Hypotension + Bradycardia", correct: true },
            { text: "Hypotension + Tachycardia", correct: false },
            { text: "Hypertension + Bradycardia", correct: false },
            { text: "Hypertension + Tachycardia", correct: false }
        ],
        category: "הרעלות ושוק",
        explanation: "⭐ בשוק נוירוגני: Hypotension + Bradycardia – בניגוד לשוק היפוולמי שבו לרוב יש טכיקרדיה."
    },
    {
        question: "מטופל לאחר נפילה מגובה עם פגיעה בעמוד השדרה, לחץ דם 80/50 ודופק 48. מהו סוג השוק הסביר?",
        options: [
            { text: "Neurogenic shock", correct: true },
            { text: "Hypovolemic shock", correct: false },
            { text: "Septic shock", correct: false },
            { text: "Anaphylactic shock", correct: false }
        ],
        category: "הרעלות ושוק",
        explanation: "שילוב של תת-לחץ דם וברדיקרדיה לאחר פגיעה בחוט השדרה מתאים לשוק נוירוגני. בשוק היפוולמי צפויה טכיקרדיה."
    },
    {
        question: "איזה דופק צפוי לרוב בשוק היפוולמי?",
        options: [
            { text: "טכיקרדיה", correct: true },
            { text: "ברדיקרדיה", correct: false },
            { text: "דופק תקין", correct: false },
            { text: "דופק לא סדיר תמיד", correct: false }
        ],
        category: "הרעלות ושוק",
        explanation: "בשוק היפוולמי הגוף מפצה בטכיקרדיה, בניגוד לשוק נוירוגני שבו יש ברדיקרדיה."
    },
    {
        question: "מהו Sepsis?",
        options: [
            { text: "תגובה לא תקינה של הגוף לזיהום שעלולה לגרום לפגיעה באיברים", correct: true },
            { text: "כל זיהום מקומי", correct: false },
            { text: "חום גבוה ללא זיהום", correct: false },
            { text: "תגובה אלרגית לאנטיביוטיקה", correct: false }
        ],
        category: "הרעלות ושוק",
        explanation: "Sepsis = תגובה לא תקינה של הגוף לזיהום שעלולה לגרום לפגיעה באיברים."
    },

    // === התאמת טיפול למצב ===
    {
        question: "מטופל עם SVT סדיר ויציב המודינמית. איזו תרופה ניתנת?",
        options: [
            { text: "Adenosine", correct: true },
            { text: "Atropine", correct: false },
            { text: "Adrenaline", correct: false },
            { text: "Furosemide", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "SVT → Adenosine."
    },
    {
        question: "מטופל עם ברדיקרדיה סימפטומטית. איזו תרופה מתאימה?",
        options: [
            { text: "Atropine", correct: true },
            { text: "Adenosine", correct: false },
            { text: "Propranolol", correct: false },
            { text: "Verapamil", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Bradycardia symptomatic → Atropine. Adenosine, Propranolol ו-Verapamil דווקא מאטים דופק."
    },
    {
        question: "איזו תרופה מתאימה לטיפול ב-VT?",
        options: [
            { text: "Amiodarone", correct: true },
            { text: "Atropine", correct: false },
            { text: "Furosemide", correct: false },
            { text: "Captopril", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "VT → Amiodarone (וגם Lidocaine משמש בהפרעות קצב חדריות)."
    },
    {
        question: "מטופל עם תגובה אנפילקטית לאחר עקיצת דבורה. מה הטיפול הראשון?",
        options: [
            { text: "Adrenaline IM", correct: true },
            { text: "Promethazine", correct: false },
            { text: "Prednisone", correct: false },
            { text: "Salbutamol בלבד", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Anaphylaxis → Adrenaline IM."
    },
    {
        question: "מטופל עם Pulmonary edema על רקע אי-ספיקת לב. מה הטיפול?",
        options: [
            { text: "חמצן + טיפול בגורם, לעיתים Furosemide/Nitroglycerin לפי מצב", correct: true },
            { text: "בולוס גדול של NaCl 0.9%", correct: false },
            { text: "Atropine", correct: false },
            { text: "KCl IV push", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Pulmonary edema → Oxygen + טיפול בגורם, לעיתים Furosemide/Nitroglycerin לפי מצב."
    },
    {
        question: "מטופל עם היפוקלמיה. מה הטיפול?",
        options: [
            { text: "KCl – מדולל ובקצב מבוקר", correct: true },
            { text: "Calcium gluconate", correct: false },
            { text: "Furosemide", correct: false },
            { text: "Salbutamol", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Hypokalemia → KCl (לא IV push – מדולל ובקצב מבוקר). Furosemide ו-Salbutamol דווקא מורידים אשלגן."
    },
    {
        question: "מטופל עם היפרקלמיה ושינויים באק״ג. מה ניתן תחילה לייצוב הלב?",
        options: [
            { text: "Calcium gluconate", correct: true },
            { text: "KCl", correct: false },
            { text: "Magnesium sulfate", correct: false },
            { text: "Atropine", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Hyperkalemia + ECG changes → Calcium gluconate (מייצב ממברנת הלב, לא מוריד אשלגן)."
    },
    {
        question: "באק״ג נראה Torsades de pointes. איזו תרופה מתאימה?",
        options: [
            { text: "Magnesium sulfate", correct: true },
            { text: "Adenosine", correct: false },
            { text: "Calcium gluconate", correct: false },
            { text: "Atropine", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Torsades → Magnesium sulfate."
    },
    {
        question: "מטופל בשוק ספטי עם תת-לחץ דם למרות נוזלים. איזו תרופה מתאימה?",
        options: [
            { text: "Norepinephrine", correct: true },
            { text: "Nitroglycerin", correct: false },
            { text: "Furosemide", correct: false },
            { text: "Propranolol", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Septic shock → Norepinephrine (ואזופרסור שמעלה MAP)."
    },
    {
        question: "מהו הטיפול ב-DKA?",
        options: [
            { text: "Fluids + Insulin + ניטור K⁺", correct: true },
            { text: "Glucose 20% + Thiamine", correct: false },
            { text: "Furosemide + הגבלת נוזלים", correct: false },
            { text: "Sodium bicarbonate לכל מטופל", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "DKA → Fluids + Insulin + K⁺ monitoring."
    },
    {
        question: "מה הטיפול ב-DVT?",
        options: [
            { text: "Anticoagulation (כגון Clexane/Heparin)", correct: true },
            { text: "Konakion", correct: false },
            { text: "אנטיביוטיקה", correct: false },
            { text: "Furosemide", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "DVT → Anticoagulation."
    },
    {
        question: "במטופל עם PE, על מה חשוב לחשוב כמקור?",
        options: [
            { text: "DVT", correct: true },
            { text: "Pneumonia", correct: false },
            { text: "GERD", correct: false },
            { text: "Pancreatitis", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "PE → לחשוב על מקור DVT."
    },
    {
        question: "מטופל עם החמרת COPD. אילו תרופות מתאימות?",
        options: [
            { text: "Salbutamol/Ipratropium ± סטרואידים לפי מצב", correct: true },
            { text: "Propranolol", correct: false },
            { text: "Morphine", correct: false },
            { text: "Furosemide בלבד", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "COPD → Salbutamol/Ipratropium ± steroids לפי מצב."
    },
    {
        question: "מטופלת עם התקף אסתמה. מה הטיפול?",
        options: [
            { text: "Salbutamol ± סטרואידים", correct: true },
            { text: "Propranolol", correct: false },
            { text: "Diazepam", correct: false },
            { text: "Adenosine", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Asthma → Salbutamol ± steroids. חוסמי β כמו Propranolol עלולים להחמיר ברונכוספזם."
    },
    {
        question: "מטופל עם GI bleeding. על מה חשוב לחשוב?",
        options: [
            { text: "Hb, המודינמיקה, גישה ורידית ו-PPI לפי המקור", correct: true },
            { text: "Clexane מיידי", correct: false },
            { text: "Aspirin", correct: false },
            { text: "Voltaren לכאב", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "GI bleed → לחשוב על Hb, hemodynamics, IV access, PPI לפי מקור. נוגדי קרישה ו-NSAIDs מחמירים דימום."
    },
    {
        question: "מטופל עם Melena. מהו מקור הדימום הסביר?",
        options: [
            { text: "Upper GI bleed", correct: true },
            { text: "טחורים", correct: false },
            { text: "Anal fissure", correct: false },
            { text: "דימום מהשלפוחית", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Melena → לרוב upper GI bleed."
    },
    {
        question: "מטופל עם Renal colic. על מה לחשוב?",
        options: [
            { text: "אבן בדרכי השתן", correct: true },
            { text: "Appendicitis", correct: false },
            { text: "PE", correct: false },
            { text: "DKA", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Renal colic → לחשוב על stone."
    },
    {
        question: "מטופל עם כאב חזה במאמץ (אנגינה). איזו תרופה מרחיבה כלי דם ומפחיתה את צריכת החמצן של הלב?",
        options: [
            { text: "Nitroglycerin", correct: true },
            { text: "Norepinephrine", correct: false },
            { text: "Atropine", correct: false },
            { text: "Lidocaine", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Nitroglycerin → Angina."
    },
    {
        question: "מטופל עם CHF ובצקות. איזו תרופה מוציאה נוזלים עודפים?",
        options: [
            { text: "Furosemide", correct: true },
            { text: "NaCl 0.9%", correct: false },
            { text: "Adenosine", correct: false },
            { text: "Lactulose", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Furosemide → Pulmonary edema/CHF. משתן לולאה שמוציא נתרן ומים."
    },
    {
        question: "מטופל בדום לב. איזו תרופה מהרשימה ניתנת?",
        options: [
            { text: "Adrenaline", correct: true },
            { text: "Propranolol", correct: false },
            { text: "Captopril", correct: false },
            { text: "Verapamil", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Adrenaline → Anaphylaxis / cardiac arrest."
    },
    {
        question: "מטופל מכור לאלכוהול מגיע מבולבל עם היפוגליקמיה. מה הסדר הנכון?",
        options: [
            { text: "Thiamine לפני גלוקוז", correct: true },
            { text: "גלוקוז בלבד, ללא Thiamine", correct: false },
            { text: "Furosemide ואז גלוקוז", correct: false },
            { text: "KCl IV push ואז גלוקוז", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "במצבים מתאימים נותנים Thiamine לפני גלוקוז, כדי להפחית סיכון ל-Wernicke encephalopathy."
    },
    {
        question: "מטופל מפרכס כבר מספר דקות. איזו תרופה מהרשימה מתאימה?",
        options: [
            { text: "Diazepam (Assival/Valium)", correct: true },
            { text: "Ketamine", correct: false },
            { text: "Promethazine", correct: false },
            { text: "Ondansetron", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Diazepam הוא בנזודיאזפין המשמש לפרכוסים (וגם לחרדה, הרפיית שרירים והרגעה). יש לנטר נשימה."
    },
    {
        question: "מטופל זקוק לסדציה קצרה לפני רדוקציה של כתף. איזו תרופה מתאימה?",
        options: [
            { text: "Midazolam (Dormicum)", correct: true },
            { text: "Ondansetron (Zofran)", correct: false },
            { text: "Furosemide (Fusid)", correct: false },
            { text: "Pantoprazole (Controloc)", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Midazolam הוא בנזודיאזפין קצר טווח לסדציה לפני פרוצדורות. ⚠️ דיכוי נשימתי – לנטר."
    },
    {
        question: "מטופל במיון עם בחילות והקאות. איזו תרופה מתאימה?",
        options: [
            { text: "Ondansetron (Zofran)", correct: true },
            { text: "Papaverine", correct: false },
            { text: "Lactulose", correct: false },
            { text: "Atropine", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Zofran חוסם 5-HT3 ומפחית בחילות והקאות (גם Pramin נוגד הקאה)."
    },
    {
        question: "מטופל עם Pyelonephritis. מה המשמעות?",
        options: [
            { text: "UTI עם מעורבות סיסטמית/דרכי שתן עליונות", correct: true },
            { text: "UTI פשוט בשלפוחית בלבד", correct: false },
            { text: "אבן בכליה ללא זיהום", correct: false },
            { text: "אי-ספיקת כליות כרונית", correct: false }
        ],
        category: "התאמת טיפול למצב",
        explanation: "Pyelonephritis → UTI + systemic/upper urinary tract involvement."
    }
];
