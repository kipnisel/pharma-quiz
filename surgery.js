// Surgery Quiz Data - כירורגיה וסיעוד המבוגר
// Based on סיכום סיעוד המובגר-כירורגיה and כירורגיה סיכום סופי 2024

const surgeryData = [
    // ========== דגשים: סוכרת - משפחות תרופות ==========
    {
        question: "מהם שלושת הסימפטומים הקלאסיים של סוכרת (3 P's)?",
        options: [
            { text: "Polyuria, Polydipsia, Polyphagia", correct: true },
            { text: "Pain, Pallor, Pulselessness", correct: false },
            { text: "Pyrexia, Pruritis, Polyarthritis", correct: false },
            { text: "Paralysis, Paresthesia, Ptosis", correct: false }
        ],
        category: "סוכרת",
        explanation: "סימני סוכרת קלאסיים: Polyuria (השתנה מרובה), Polydipsia (צמא מוגבר), Polyphagia (רעב מוגבר) - נגרמים מסוכר גבוה בדם."
    },
    {
        question: "מהו מנגנון הפעולה של מטפורמין (Metformin)?",
        options: [
            { text: "מפחית ייצור גלוקוז בכבד ומשפר רגישות לאינסולין", correct: true },
            { text: "מגביר הפרשת אינסולין מהלבלב", correct: false },
            { text: "מעכב ספיגת גלוקוז במעי", correct: false },
            { text: "מגביר הפרשת גלוקוז בשתן", correct: false }
        ],
        category: "סוכרת",
        explanation: "מטפורמין ממשפחת הביגואנידים מפחית ייצור גלוקוז בכבד ומשפר רגישות לאינסולין ברקמות היקפיות."
    },
    {
        question: "מהי תופעת הלוואי הקריטית ביותר של מטפורמין?",
        options: [
            { text: "חמצת לקטית (Lactic Acidosis)", correct: true },
            { text: "היפוגליקמיה", correct: false },
            { text: "עלייה במשקל", correct: false },
            { text: "בצקות", correct: false }
        ],
        category: "סוכרת",
        explanation: "חמצת לקטית היא סיבוך נדיר אך מסכן חיים של מטפורמין, במיוחד בחולים עם אי ספיקת כליות."
    },
    {
        question: "מהו מנגנון הפעולה של סולפונילאוריאה (כגון גליבנקלמיד)?",
        options: [
            { text: "מגביר הפרשת אינסולין מתאי בטא בלבלב", correct: true },
            { text: "מפחית ספיגת גלוקוז במעי", correct: false },
            { text: "מגביר הפרשת גלוקוז בשתן", correct: false },
            { text: "משפר רגישות לאינסולין", correct: false }
        ],
        category: "סוכרת",
        explanation: "סולפונילאוריאה מגרה הפרשת אינסולין מתאי בטא בלבלב, ללא תלות ברמת הגלוקוז."
    },
    {
        question: "מהי תופעת הלוואי המסוכנת של סולפונילאוריאה?",
        options: [
            { text: "היפוגליקמיה קשה", correct: true },
            { text: "חמצת לקטית", correct: false },
            { text: "אי ספיקת כליות", correct: false },
            { text: "זיהומים בדרכי השתן", correct: false }
        ],
        category: "סוכרת",
        explanation: "סולפונילאוריאה גורמת להיפוגליקמיה כי היא מגרה הפרשת אינסולין גם כשרמת הסוכר נמוכה."
    },
    {
        question: "מהו מנגנון הפעולה של מעכבי SGLT2 (כגון דפגליפלוזין)?",
        options: [
            { text: "מגבירים הפרשת גלוקוז בשתן דרך הכליות", correct: true },
            { text: "מעכבים ספיגת גלוקוז במעי", correct: false },
            { text: "מגבירים הפרשת אינסולין", correct: false },
            { text: "מפחיתים ייצור גלוקוז בכבד", correct: false }
        ],
        category: "סוכרת",
        explanation: "מעכבי SGLT2 מעכבים ספיגה חוזרת של גלוקוז בכליות, וכך מגבירים הפרשתו בשתן."
    },
    {
        question: "מהי תופעת לוואי אופיינית של מעכבי SGLT2?",
        options: [
            { text: "זיהומים בדרכי השתן וזיהומי שמרים", correct: true },
            { text: "עלייה במשקל", correct: false },
            { text: "בחילות והקאות", correct: false },
            { text: "עצירות", correct: false }
        ],
        category: "סוכרת",
        explanation: "הגלוקוז המופרש בשתן יוצר סביבה נוחה לגידול חיידקים ופטריות."
    },
    {
        question: "מהו מנגנון הפעולה של מעכבי DPP-4 (גליפטינים)?",
        options: [
            { text: "מאריכים את פעילות GLP-1 ו-GIP", correct: true },
            { text: "מעכבים ספיגת גלוקוז במעי", correct: false },
            { text: "מגבירים הפרשת גלוקוז בשתן", correct: false },
            { text: "מפחיתים ייצור גלוקוז בכבד ישירות", correct: false }
        ],
        category: "סוכרת",
        explanation: "מעכבי DPP-4 מונעים פירוק הורמוני אינקרטין (GLP-1, GIP), ובכך מגבירים הפרשת אינסולין בתגובה לאוכל."
    },
    {
        question: "איזו משפחת תרופות לסוכרת בטוחה יחסית מבחינת היפוגליקמיה?",
        options: [
            { text: "מעכבי DPP-4 (גליפטינים)", correct: true },
            { text: "סולפונילאוריאה", correct: false },
            { text: "אינסולין", correct: false },
            { text: "מגלטינידים", correct: false }
        ],
        category: "סוכרת",
        explanation: "מעכבי DPP-4 מגבירים אינסולין רק בתגובה לאוכל, ולכן הסיכון להיפוגליקמיה נמוך."
    },
    {
        question: "מדוע יש להפסיק מטפורמין לפני בדיקת CT עם חומר ניגוד?",
        options: [
            { text: "סיכון לחמצת לקטית בשילוב פגיעה כלייתית מחומר הניגוד", correct: true },
            { text: "חומר הניגוד מבטל את פעילות התרופה", correct: false },
            { text: "סיכון לתגובה אלרגית", correct: false },
            { text: "עלייה בסוכר בדם", correct: false }
        ],
        category: "סוכרת",
        explanation: "חומר ניגוד עלול לפגוע בתפקוד הכליות, ובשילוב עם מטפורמין עלול לגרום לחמצת לקטית."
    },

    // ========== דגשים: הפטיטיס B - מעבדה ==========
    {
        question: "מהו הסמן הראשון להופיע בזיהום חריף בהפטיטיס B?",
        options: [
            { text: "HBsAg (אנטיגן משטחי)", correct: true },
            { text: "Anti-HBs (נוגדנים לאנטיגן משטחי)", correct: false },
            { text: "Anti-HBc IgG", correct: false },
            { text: "HBeAg", correct: false }
        ],
        category: "הפטיטיס B",
        explanation: "HBsAg מופיע ראשון ומעיד על נוכחות הווירוס. זהו הסמן העיקרי להדבקה פעילה."
    },
    {
        question: "מה מעיד נוכחות Anti-HBs חיובי בלבד?",
        options: [
            { text: "חיסון מוצלח נגד הפטיטיס B", correct: true },
            { text: "זיהום כרוני", correct: false },
            { text: "זיהום חריף", correct: false },
            { text: "נשאות", correct: false }
        ],
        category: "הפטיטיס B",
        explanation: "Anti-HBs חיובי ללא סמנים אחרים מעיד על חיסון מוצלח - הגוף יצר נוגדנים כנגד החיסון."
    },
    {
        question: "מה משמעות HBsAg חיובי + Anti-HBc IgM חיובי?",
        options: [
            { text: "זיהום חריף פעיל בהפטיטיס B", correct: true },
            { text: "זיהום כרוני", correct: false },
            { text: "החלמה מזיהום", correct: false },
            { text: "חיסון", correct: false }
        ],
        category: "הפטיטיס B",
        explanation: "IgM מעיד על זיהום חדש (חריף). HBsAg מעיד על נוכחות הווירוס. יחד = זיהום חריף."
    },
    {
        question: "מה משמעות HBsAg חיובי + Anti-HBc IgG חיובי ללא IgM?",
        options: [
            { text: "זיהום כרוני או נשאות", correct: true },
            { text: "זיהום חריף", correct: false },
            { text: "החלמה", correct: false },
            { text: "חיסון", correct: false }
        ],
        category: "הפטיטיס B",
        explanation: "IgG מעיד על זיהום ישן. HBsAg נוכח מעל 6 חודשים = כרוני/נשא."
    },
    {
        question: "מה מעיד HBeAg חיובי?",
        options: [
            { text: "ריבוי נגיפי גבוה ויכולת הדבקה גבוהה", correct: true },
            { text: "החלמה מהמחלה", correct: false },
            { text: "חיסון מוצלח", correct: false },
            { text: "זיהום לא פעיל", correct: false }
        ],
        category: "הפטיטיס B",
        explanation: "HBeAg מעיד על שכפול פעיל של הווירוס ויכולת הדבקה גבוהה."
    },
    {
        question: "מה משמעות Anti-HBs + Anti-HBc IgG חיוביים?",
        options: [
            { text: "החלמה מזיהום קודם עם חסינות", correct: true },
            { text: "זיהום פעיל", correct: false },
            { text: "חיסון בלבד", correct: false },
            { text: "נשאות", correct: false }
        ],
        category: "הפטיטיס B",
        explanation: "שילוב של נוגדנים ל-HBs (חסינות) ונוגדנים ל-HBc (חשיפה קודמת) = החלמה טבעית."
    },
    {
        question: "כמה זמן נשאר HBsAg חיובי מעיד על מעבר לנשאות כרונית?",
        options: [
            { text: "מעל 6 חודשים", correct: true },
            { text: "מעל שבועיים", correct: false },
            { text: "מעל חודש", correct: false },
            { text: "מעל שנה", correct: false }
        ],
        category: "הפטיטיס B",
        explanation: "HBsAg שנשאר חיובי מעל 6 חודשים מעיד על מעבר לזיהום כרוני/נשאות."
    },
    {
        question: "איזה חיסון ניתן נגד הפטיטיס B?",
        options: [
            { text: "Engerix או ScaBivac - 3 מנות", correct: true },
            { text: "חיסון חי מוחלש", correct: false },
            { text: "מנה בודדת", correct: false },
            { text: "Havrix", correct: false }
        ],
        category: "הפטיטיס B",
        explanation: "חיסון הפטיטיס B (Engerix) ניתן ב-3 מנות. Havrix הוא חיסון להפטיטיס A."
    },
    {
        question: "מהי דרך ההעברה של הפטיטיס B?",
        options: [
            { text: "דרך נוזלי גוף: דם, זרע, חלב אם", correct: true },
            { text: "דרך פקאלית-אוראלית", correct: false },
            { text: "באוויר", correct: false },
            { text: "דרך עקיצות יתושים", correct: false }
        ],
        category: "הפטיטיס B",
        explanation: "הפטיטיס B מועבר דרך נוזלי גוף, בניגוד להפטיטיס A ו-E שמועברים בדרך פקאלית-אוראלית."
    },
    {
        question: "מה ההבדל בין הפטיטיס B להפטיטיס C מבחינת מהלך המחלה?",
        options: [
            { text: "B בדרך כלל סימפטומטי ומחלים, C בדרך כלל אסימפטומטי ונהיה כרוני", correct: true },
            { text: "שניהם תמיד כרוניים", correct: false },
            { text: "C יותר סימפטומטי", correct: false },
            { text: "אין הבדל משמעותי", correct: false }
        ],
        category: "הפטיטיס B",
        explanation: "הפטיטיס B לרוב סימפטומטי ורוב החולים מחלימים. הפטיטיס C לרוב אסימפטומטי ו-80% הופכים לכרוניים."
    },

    // ========== דגשים: שינויי אלקטרוליטים ==========
    {
        question: "הקאות מרובות גורמות להפרעה אלקטרוליטית מסוג:",
        options: [
            { text: "בססת מטבולית עם היפוקלמיה והיפוכלורמיה", correct: true },
            { text: "חמצת מטבולית עם היפרקלמיה", correct: false },
            { text: "בססת נשימתית", correct: false },
            { text: "חמצת נשימתית", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "הקאות מסלקות H+, K+, Cl- מהקיבה, מה שגורם לבססת מטבולית עם היפוקלמיה והיפוכלורמיה."
    },
    {
        question: "בחמצת מטבולית, מה קורה לרמת האשלגן?",
        options: [
            { text: "עולה - היפרקלמיה", correct: true },
            { text: "יורדת - היפוקלמיה", correct: false },
            { text: "לא משתנה", correct: false },
            { text: "תלוי בסיבה", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "בחמצת, H+ נכנס לתאים ו-K+ יוצא, מה שגורם להיפרקלמיה."
    },
    {
        question: "בבססת מטבולית, מה קורה לרמת האשלגן והסידן?",
        options: [
            { text: "שניהם יורדים", correct: true },
            { text: "שניהם עולים", correct: false },
            { text: "אשלגן עולה, סידן יורד", correct: false },
            { text: "אשלגן יורד, סידן עולה", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "בבססת, H+ יוצא מהתאים ו-K+ נכנס. גם הסידן החופשי יורד."
    },
    {
        question: "חסימת מעי גבוהה (קיבה/דואודנום) גורמת ל:",
        options: [
            { text: "בססת מטבולית - הקאת תוכן קיבה חומצי", correct: true },
            { text: "חמצת מטבולית", correct: false },
            { text: "בססת נשימתית", correct: false },
            { text: "אין הפרעה חומצה-בסיס", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "הקאת תוכן קיבה מסלקת H+ וגורמת לבססת מטבולית."
    },
    {
        question: "חסימת מעי נמוכה גורמת ל:",
        options: [
            { text: "חמצת מטבולית - איבוד ביקרבונט", correct: true },
            { text: "בססת מטבולית", correct: false },
            { text: "בססת נשימתית", correct: false },
            { text: "אין הפרעה", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "בחסימה נמוכה איבוד הפרשות מעי עשירות בביקרבונט גורם לחמצת מטבולית."
    },
    {
        question: "מה הטיפול הראשוני בהיפרקלמיה חריפה?",
        options: [
            { text: "סידן IV להגנה על הלב, אינסולין+גלוקוז להכנסת K+ לתאים", correct: true },
            { text: "אשלגן IV", correct: false },
            { text: "מטפורמין", correct: false },
            { text: "אנטיביוטיקה", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "סידן מגן על הלב מהפרעות קצב. אינסולין+גלוקוז מכניסים K+ לתאים."
    },
    {
        question: "איזו הפרעת קצב אופיינית להיפוקלמיה?",
        options: [
            { text: "הפרעות קצב חדריות, גלי U ב-ECG", correct: true },
            { text: "ברדיקרדיה סינוסית", correct: false },
            { text: "רפרוף עליות", correct: false },
            { text: "אין קשר להפרעות קצב", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "היפוקלמיה מאריכה את ה-QT ועלולה לגרום להפרעות קצב חדריות. גלי U אופייניים."
    },
    {
        question: "מטופל עם שלשולים כרוניים צפוי לסבול מ:",
        options: [
            { text: "חמצת מטבולית והיפוקלמיה", correct: true },
            { text: "בססת מטבולית והיפרקלמיה", correct: false },
            { text: "בססת נשימתית", correct: false },
            { text: "היפרנתרמיה", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "שלשולים גורמים לאיבוד ביקרבונט (חמצת) ואשלגן (היפוקלמיה)."
    },
    {
        question: "לשם פריסטלטיקה תקינה נדרש איזון של:",
        options: [
            { text: "נתרן, אשלגן, קלציום ומגנזיום", correct: true },
            { text: "גלוקוז בלבד", correct: false },
            { text: "חלבונים בלבד", correct: false },
            { text: "שומנים בלבד", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "פוטנציאל התנועה של שריר חלק דורש איזון אלקטרוליטים - נתרן, אשלגן, קלציום ומגנזיום."
    },
    {
        question: "היפונתרמיה עלולה לגרום ל:",
        options: [
            { text: "בלבול, עייפות, עד פרכוסים ותרדמת", correct: true },
            { text: "הפרעות קצב לב בלבד", correct: false },
            { text: "כאבי שרירים בלבד", correct: false },
            { text: "אין תסמינים", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "נתרן נמוך גורם לבצקת מוחית עם תסמינים נוירולוגיים - מבלבול ועד פרכוסים."
    },

    // ========== מערכת העיכול ==========
    {
        question: "מה תפקיד ה-Intrinsic Factor שמיוצר בקיבה?",
        options: [
            { text: "נדרש לספיגת ויטמין B12 באילאום", correct: true },
            { text: "מפרק חלבונים", correct: false },
            { text: "מנטרל חומצה", correct: false },
            { text: "מגן על דופן הקיבה", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "Intrinsic Factor מיוצר בתאי Parietal ונקשר ל-B12, מאפשר ספיגתו באילאום."
    },
    {
        question: "מהו ה-pH בקיבה?",
        options: [
            { text: "1-3 (חומצי מאוד)", correct: true },
            { text: "7 (נייטרלי)", correct: false },
            { text: "8 (בסיסי)", correct: false },
            { text: "5-6 (חומצי קלות)", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "הקיבה מייצרת HCl שיוצר סביבה חומצית מאוד (pH 1-3) לעיכול ולחיטוי."
    },
    {
        question: "איזה אנזים מתחיל את פירוק הפחמימות כבר בפה?",
        options: [
            { text: "Ptyalin (עמילאז רוקי)", correct: true },
            { text: "Pepsin", correct: false },
            { text: "Lipase", correct: false },
            { text: "Trypsin", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "Ptyalin (עמילאז) ברוק מתחיל לפרק עמילנים כבר בפה."
    },
    {
        question: "היכן נספגים רוב החומרים התזונתיים?",
        options: [
            { text: "במעי הדק (ג'גונום ואילאום)", correct: true },
            { text: "בקיבה", correct: false },
            { text: "במעי הגס", correct: false },
            { text: "בוושט", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "המעי הדק הוא אתר הספיגה העיקרי הודות לשטח הפנים הגדול (Villi)."
    },
    {
        question: "מה תפקיד המעי הגס העיקרי?",
        options: [
            { text: "ספיגת מים ואלקטרוליטים, יצירת צואה", correct: true },
            { text: "עיכול חלבונים", correct: false },
            { text: "ייצור מרה", correct: false },
            { text: "ספיגת ויטמינים", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "המעי הגס סופג מים ואלקטרוליטים, מייצר ויטמין K (בעזרת חיידקים), ומעצב צואה."
    },
    {
        question: "מהו Peritonitis?",
        options: [
            { text: "דלקת של הצפק (הממברנה העוטפת את חלל הבטן)", correct: true },
            { text: "דלקת הוושט", correct: false },
            { text: "דלקת הקיבה", correct: false },
            { text: "דלקת המעי הגס", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "Peritonitis היא דלקת הצפק, מצב חירום המחייב טיפול מיידי."
    },

    // ========== חסימת מעי ==========
    {
        question: "מהו הטיפול הראשוני בחסימת מעי?",
        options: [
            { text: "צום, זונדה לניקוז, נוזלים ואלקטרוליטים IV", correct: true },
            { text: "האכלה דרך הפה", correct: false },
            { text: "ניתוח מיידי בכל מקרה", correct: false },
            { text: "משלשלים", correct: false }
        ],
        category: "חסימת מעי",
        explanation: "הטיפול הבסיסי: צום להנחת המעי, זונדה לניקוז גזים ונוזלים, ואיזון נוזלים IV."
    },
    {
        question: "מה ההבדל בין SBO ל-LBO?",
        options: [
            { text: "SBO - חסימת מעי דק, LBO - חסימת מעי גס", correct: true },
            { text: "SBO - חסימה קטנה, LBO - חסימה גדולה", correct: false },
            { text: "אין הבדל", correct: false },
            { text: "SBO - שמאל, LBO - ימין", correct: false }
        ],
        category: "חסימת מעי",
        explanation: "SBO = Small Bowel Obstruction, LBO = Large Bowel Obstruction."
    },
    {
        question: "מהו הסימן האופייני ביותר לחסימת מעי?",
        options: [
            { text: "כאב בטן קוליקי, הקאות, נפיחות, עצירה בגזים וצואה", correct: true },
            { text: "שלשולים", correct: false },
            { text: "חום גבוה בלבד", correct: false },
            { text: "ירידה במשקל בלבד", correct: false }
        ],
        category: "חסימת מעי",
        explanation: "הטטרדה הקלאסית: כאב קוליקי, הקאות, נפיחות (distension), ועצירה מוחלטת."
    },
    {
        question: "מהו Ileus?",
        options: [
            { text: "חסימת מעי פונקציונלית (פאראליטית) ללא חסימה מכנית", correct: true },
            { text: "חסימת מעי מכנית", correct: false },
            { text: "דלקת מעי", correct: false },
            { text: "גידול במעי", correct: false }
        ],
        category: "חסימת מעי",
        explanation: "Ileus הוא שיתוק של תנועת המעי, לעיתים לאחר ניתוח, תרופות, או הפרעות אלקטרוליטים."
    },

    // ========== ניתוחים וטיפול פרי-אופרטיבי ==========
    {
        question: "מדוע מטופל לפני ניתוח צריך להיות בצום?",
        options: [
            { text: "למנוע אספירציה של תוכן קיבה בזמן ההרדמה", correct: true },
            { text: "לרדת במשקל", correct: false },
            { text: "להוריד לחץ דם", correct: false },
            { text: "לשפר את הראייה", correct: false }
        ],
        category: "פרי-אופרטיבי",
        explanation: "צום מונע אספירציה של תוכן קיבה לריאות בזמן ההרדמה."
    },
    {
        question: "מהו NPO?",
        options: [
            { text: "Nothing Per Os - צום מוחלט דרך הפה", correct: true },
            { text: "סוג של תרופה", correct: false },
            { text: "בדיקת מעבדה", correct: false },
            { text: "סוג ניתוח", correct: false }
        ],
        category: "פרי-אופרטיבי",
        explanation: "NPO = Nothing Per Os = אין לאכול או לשתות דרך הפה."
    },
    {
        question: "מתי מחזירים פריסטלטיקה אחרי ניתוח בטן?",
        options: [
            { text: "כשיש קולות מעיים ומעבר גזים", correct: true },
            { text: "מיד לאחר הניתוח", correct: false },
            { text: "לאחר שבוע בכל מקרה", correct: false },
            { text: "כשיש עלייה בחום", correct: false }
        ],
        category: "פרי-אופרטיבי",
        explanation: "חזרת פריסטלטיקה מתבטאת בקולות מעיים ומעבר גזים/צואה."
    },
    {
        question: "מהי Hypothermia הטיפולית לאחר החייאה?",
        options: [
            { text: "קירור ל-32-34 מעלות למשך 12-24 שעות להגנה נוירולוגית", correct: true },
            { text: "חימום מואץ", correct: false },
            { text: "שמירה על 37 מעלות", correct: false },
            { text: "קירור ל-25 מעלות", correct: false }
        ],
        category: "פרי-אופרטיבי",
        explanation: "קירור טיפולי מגן על המוח לאחר דום לב, מתבצע ב-32-34°C למשך 12-24 שעות."
    },

    // ========== הלבלב ==========
    {
        question: "מהם שני התפקידים של הלבלב?",
        options: [
            { text: "אקסוקריני (אנזימי עיכול) ואנדוקריני (הורמונים כמו אינסולין)", correct: true },
            { text: "עיכול בלבד", correct: false },
            { text: "ייצור מרה בלבד", correct: false },
            { text: "סינון דם בלבד", correct: false }
        ],
        category: "לבלב",
        explanation: "הלבלב מייצר אנזימי עיכול (אקסוקריני) והורמונים כמו אינסולין וגלוקגון (אנדוקריני)."
    },
    {
        question: "מהו הסמן המעבדתי העיקרי לדלקת לבלב חריפה?",
        options: [
            { text: "Lipase ו-Amylase מוגברים", correct: true },
            { text: "המוגלובין נמוך", correct: false },
            { text: "קריאטינין גבוה", correct: false },
            { text: "סוכר נמוך", correct: false }
        ],
        category: "לבלב",
        explanation: "עלייה ב-Lipase ו-Amylase (אנזימי הלבלב) מעידה על נזק לרקמת הלבלב."
    },
    {
        question: "מהם הגורמים השכיחים לדלקת לבלב חריפה?",
        options: [
            { text: "אבני מרה ואלכוהול", correct: true },
            { text: "זיהום ויראלי", correct: false },
            { text: "אי ספיקת לב", correct: false },
            { text: "סוכרת", correct: false }
        ],
        category: "לבלב",
        explanation: "80% מהמקרים נגרמים מאבני מרה או אלכוהול."
    },
    {
        question: "מדוע נותנים צום בדלקת לבלב?",
        options: [
            { text: "כדי להניח את הלבלב ולמנוע גירוי להפרשת אנזימים", correct: true },
            { text: "לרדת במשקל", correct: false },
            { text: "כי המטופל לא רעב", correct: false },
            { text: "כדי לחסוך בעלויות", correct: false }
        ],
        category: "לבלב",
        explanation: "אכילה מגרה הפרשת אנזימי לבלב, מה שמחמיר את הדלקת והנזק."
    },

    // ========== הכבד ומערכת המרה ==========
    {
        question: "מהו תפקיד המרה?",
        options: [
            { text: "אמולסיפיקציה (הקטנת טיפות) של שומנים לעיכול", correct: true },
            { text: "פירוק חלבונים", correct: false },
            { text: "ספיגת מים", correct: false },
            { text: "ייצור אינסולין", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "המרה מפרקת טיפות שומן גדולות לקטנות, מה שמגדיל שטח הפנים לפעולת אנזים Lipase."
    },
    {
        question: "היכן מאוחסנת המרה?",
        options: [
            { text: "בכיס המרה", correct: true },
            { text: "בכבד", correct: false },
            { text: "בלבלב", correct: false },
            { text: "בקיבה", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "המרה מיוצרת בכבד ומאוחסנת ומרוכזת בכיס המרה."
    },
    {
        question: "מהו צהבת (Jaundice)?",
        options: [
            { text: "הצטברות בילירובין הגורמת לצבע צהוב בעור ובלחמיות", correct: true },
            { text: "עודף ברזל", correct: false },
            { text: "חסר ויטמין D", correct: false },
            { text: "חסר B12", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "בילירובין מוגבר (מפירוק המוגלובין או חסימת מרה) גורם לצהבת."
    },
    {
        question: "מה ההבדל בין בילירובין ישיר ללא ישיר?",
        options: [
            { text: "ישיר = מצומד (עבר עיבוד בכבד), לא ישיר = לא מצומד", correct: true },
            { text: "אין הבדל", correct: false },
            { text: "ישיר = בדם, לא ישיר = בשתן", correct: false },
            { text: "ישיר = מפירוק תאים אדומים", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "בילירובין לא ישיר (unconjugated) עובר עיבוד בכבד והופך לישיר (conjugated) שמופרש במרה."
    },
    {
        question: "מהי שחמת הכבד (Cirrhosis)?",
        options: [
            { text: "פיברוזיס והצטלקות של הכבד עם פגיעה בתפקוד", correct: true },
            { text: "דלקת חריפה", correct: false },
            { text: "גידול שפיר", correct: false },
            { text: "זיהום חיידקי", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "שחמת היא שלב סופי של נזק כבדי כרוני, עם צלקות שמפריעות לתפקוד."
    },

    // ========== ניתוחים בריאטריים ==========
    {
        question: "מהו BMI שמגדיר השמנת יתר חולנית?",
        options: [
            { text: "מעל 40, או מעל 35 עם מחלות נלוות", correct: true },
            { text: "מעל 25", correct: false },
            { text: "מעל 30", correct: false },
            { text: "מעל 50", correct: false }
        ],
        category: "בריאטריה",
        explanation: "BMI > 40 או > 35 עם comorbidities מהווה התוויה לניתוח בריאטרי."
    },
    {
        question: "מהו Resistin?",
        options: [
            { text: "הורמון מרקמת שומן שגורם לתנגודת לאינסולין", correct: true },
            { text: "הורמון שמגביר רגישות לאינסולין", correct: false },
            { text: "אנזים עיכול", correct: false },
            { text: "ויטמין", correct: false }
        ],
        category: "בריאטריה",
        explanation: "Resistin מיוצר בתאי שומן וגורם לתנגודת לאינסולין, תורם לסוכרת."
    },
    {
        question: "מה היתרון העיקרי של ניתוח בריאטרי מעבר לירידה במשקל?",
        options: [
            { text: "שיפור/ריפוי סוכרת, יתר לחץ דם ודיסליפידמיה", correct: true },
            { text: "שיפור קוסמטי בלבד", correct: false },
            { text: "הגדלת הקיבה", correct: false },
            { text: "אין יתרונות נוספים", correct: false }
        ],
        category: "בריאטריה",
        explanation: "ניתוח בריאטרי משפר משמעותית סוכרת (>80%), לחץ דם ורמות שומנים בדם."
    },

    // ========== פצעים וריפוי ==========
    {
        question: "אילו גורמים מעכבים ריפוי פצעים?",
        options: [
            { text: "סוכרת, אנמיה, תת תזונה, סטרואידים, עישון", correct: true },
            { text: "ויטמין C גבוה", correct: false },
            { text: "חלבון גבוה בתזונה", correct: false },
            { text: "פעילות גופנית", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "כל גורם שפוגע בפרפוזיה, תזונה או מערכת החיסון מעכב ריפוי."
    },
    {
        question: "מהו סימן לזיהום בפצע ניתוחי?",
        options: [
            { text: "אודם, חום מקומי, נפיחות, הפרשה מוגלתית וכאב", correct: true },
            { text: "פצע יבש ונקי", correct: false },
            { text: "גרד קל", correct: false },
            { text: "צבע ורדרד חיוור", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "סימני דלקת קלאסיים: Rubor (אודם), Calor (חום), Tumor (נפיחות), Dolor (כאב), ו-Pus."
    }
];
