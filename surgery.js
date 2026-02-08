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
            { text: "סיכון לחמצת לקטית עקב פגיעה כלייתית מהניגוד", correct: true },
            { text: "חומר הניגוד מבטל את פעילות התרופה בכבד", correct: false },
            { text: "סיכון מוגבר לתגובה אלרגית לחומר הניגוד", correct: false },
            { text: "גורם לעלייה חדה ברמות הסוכר בדם", correct: false }
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
            { text: "B לרוב סימפטומטי ומחלים, C לרוב שקט והופך לכרוני", correct: true },
            { text: "שניהם בדרך כלל הופכים לזיהום כרוני ארוך טווח", correct: false },
            { text: "C גורם לתסמינים חמורים יותר בשלב החריף", correct: false },
            { text: "B ו-C זהים במהלך הקליני ובפרוגנוזה", correct: false }
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
            { text: "מתן אשלגן IV לאיזון רמות האלקטרוליטים בדם", correct: false },
            { text: "משתנים חוסכי אשלגן להגברת הפרשתו בשתן", correct: false },
            { text: "ביקרבונט IV לתיקון החמצת והורדת האשלגן", correct: false }
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
            { text: "האכלה דרך הפה עם מזון קל לעיכול", correct: false },
            { text: "ניתוח לפרוסקופי מיידי בכל סוגי החסימות", correct: false },
            { text: "מתן משלשלים והחשה לפינוי המעיים", correct: false }
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
            { text: "כאב קוליקי, הקאות, נפיחות, עצירה בגזים וצואה", correct: true },
            { text: "שלשולים מימיים עם דם וליחה בצואה", correct: false },
            { text: "חום גבוה מלווה בצמרמורות והזעות לילה", correct: false },
            { text: "ירידה במשקל עם חולשה כללית וחוסר תיאבון", correct: false }
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
            { text: "חימום מואץ של המטופל ל-39 מעלות להגברת מטבוליזם", correct: false },
            { text: "שמירה קפדנית על טמפרטורה תקינה של 37 מעלות", correct: false },
            { text: "קירור עמוק ל-25 מעלות לעצירה מטבולית מוחלטת", correct: false }
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
            { text: "רמות גבוהות של ויטמין C ואבץ בגוף", correct: false },
            { text: "תזונה עשירה בחלבון וקלוריות מספיקות", correct: false },
            { text: "פעילות גופנית מתונה וזרימת דם תקינה", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "כל גורם שפוגע בפרפוזיה, תזונה או מערכת החיסון מעכב ריפוי."
    },
    {
        question: "מהו סימן לזיהום בפצע ניתוחי?",
        options: [
            { text: "אודם, חום מקומי, נפיחות, הפרשה מוגלתית וכאב", correct: true },
            { text: "פצע יבש ונקי עם קרום דק ויבש בשוליים", correct: false },
            { text: "גרד קל באזור הפצע עם עור מתקלף סביב", correct: false },
            { text: "צבע ורדרד חיוור של הרקמה הסובבת את הפצע", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "סימני דלקת קלאסיים: Rubor (אודם), Calor (חום), Tumor (נפיחות), Dolor (כאב), ו-Pus."
    },
    {
        question: "מהם שלושת השלבים של ריפוי פצע?",
        options: [
            { text: "דלקתי, שגשוג (פרוליפרטיבי), ושיפוץ (רימודלינג)", correct: true },
            { text: "דימום, קרישה, החלמה", correct: false },
            { text: "נמק, צלקת, ריפוי", correct: false },
            { text: "זיהום, ניקוי, סגירה", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "ריפוי פצע כולל: שלב דלקתי (1-4 ימים), שלב שגשוג עם יצירת גרנולציה וקולגן (4-21 יום), ושלב שיפוץ (3 שבועות עד שנה)."
    },
    {
        question: "מהי Dehiscence?",
        options: [
            { text: "פתיחה חוזרת של פצע ניתוחי לאורך קו התפרים", correct: true },
            { text: "זיהום בפצע", correct: false },
            { text: "ריפוי תקין של פצע", correct: false },
            { text: "היצרות של צלקת", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "Dehiscence היא פתיחה חוזרת של שכבות הפצע, לרוב בין יום 5-10 לאחר ניתוח. גורמי סיכון: השמנה, סוכרת, זיהום, שיעול."
    },
    {
        question: "מהי Evisceration?",
        options: [
            { text: "יציאת איברים פנימיים דרך פצע בטני פתוח", correct: true },
            { text: "פתיחה של שכבות שטחיות בלבד", correct: false },
            { text: "היווצרות בקע", correct: false },
            { text: "הצטלקות יתר", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "Evisceration היא סיבוך חמור של Dehiscence בו איברי בטן (לרוב מעי) יוצאים החוצה. מחייב כיסוי עם מפית רטובה וניתוח דחוף."
    },
    {
        question: "איזה ויטמין חיוני ליצירת קולגן בריפוי פצעים?",
        options: [
            { text: "ויטמין C", correct: true },
            { text: "ויטמין A", correct: false },
            { text: "ויטמין D", correct: false },
            { text: "ויטמין B12", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "ויטמין C חיוני לסינתזת קולגן. חסר בויטמין C (צפדינה) פוגע בריפוי פצעים."
    },
    {
        question: "מהו ריפוי ב-Primary intention?",
        options: [
            { text: "ריפוי כשקצוות הפצע מקורבים ותפורים, יוצר צלקת מינימלית", correct: true },
            { text: "ריפוי כשהפצע נשאר פתוח", correct: false },
            { text: "ריפוי לאחר זיהום", correct: false },
            { text: "ריפוי עם השתלת עור", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "Primary intention - קצוות הפצע נסגרים מיד (תפרים, סיכות). Secondary intention - הפצע נשאר פתוח ומתמלא בהדרגה."
    },
    {
        question: "מה התפקיד של רקמת גרנולציה בריפוי פצע?",
        options: [
            { text: "רקמה עשירה בכלי דם שממלאת הפצע ומהווה בסיס לאפיתל", correct: true },
            { text: "רקמה פתולוגית המעידה על זיהום חיידקי בפצע", correct: false },
            { text: "רקמה נמקית שיש להסיר באמצעות דברידמנט", correct: false },
            { text: "סימן לכישלון בתהליך הריפוי הדורש התערבות", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "רקמת גרנולציה בריאה היא ורודה-אדומה, לחה וגרגירית. מכילה כלי דם חדשים (אנגיוגנזיס) ומהווה בסיס לריפוי."
    },
    {
        question: "מהו Keloid?",
        options: [
            { text: "צלקת היפרטרופית שגדלה מעבר לגבולות הפצע המקורי", correct: true },
            { text: "צלקת שטוחה ולבנה", correct: false },
            { text: "פצע פתוח כרוני", correct: false },
            { text: "זיהום בצלקת", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "Keloid היא הצטלקות מוגזמת החורגת מגבולות הפצע. שכיחה יותר בעור כהה. טיפול: הזרקת סטרואידים, לחץ, או כריתה."
    },
    {
        question: "מדוע אלבומין נמוך מעכב ריפוי פצעים?",
        options: [
            { text: "גורם לבצקות רקמה ופגיעה בהובלת חומרים לפצע", correct: true },
            { text: "אלבומין נמוך מגביר סיכון לזיהומים חיידקיים", correct: false },
            { text: "גורם לעלייה ברמות הסוכר המעכבת ריפוי", correct: false },
            { text: "אלבומין אינו קשור לתהליכי ריפוי פצעים", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "היפואלבומינמיה גורמת לבצקות רקמה (לחץ אונקוטי נמוך), הפוגעות בהובלת חמצן וחומרים הנחוצים לריפוי."
    },

    // ========== שאלות נוספות - בריאטריה ==========
    {
        question: "מהו ההבדל העיקרי בין Sleeve Gastrectomy ל-Gastric Bypass?",
        options: [
            { text: "Sleeve מסיר חלק מהקיבה בלבד, Bypass יוצר גם עקיפת מעי", correct: true },
            { text: "אין הבדל", correct: false },
            { text: "Sleeve כולל עקיפת מעי", correct: false },
            { text: "Bypass מגדיל את הקיבה", correct: false }
        ],
        category: "בריאטריה",
        explanation: "Sleeve Gastrectomy מסיר 80% מהקיבה. Gastric Bypass (Roux-en-Y) יוצר כיס קיבה קטן וגם עוקף חלק מהמעי הדק."
    },
    {
        question: "איזה חסר תזונתי שכיח לאחר ניתוח Gastric Bypass?",
        options: [
            { text: "ברזל, B12, סידן וויטמין D", correct: true },
            { text: "עודף ברזל", correct: false },
            { text: "עודף B12", correct: false },
            { text: "אין חסרים תזונתיים", correct: false }
        ],
        category: "בריאטריה",
        explanation: "עקיפת הדואודנום והג'גונום פוגעת בספיגת ברזל, סידן וויטמינים מסיסי שומן. עקיפת הקיבה פוגעת בספיגת B12."
    },
    {
        question: "מהו Dumping Syndrome?",
        options: [
            { text: "מעבר מהיר של מזון לא מעוכל למעי הגורם לתסמינים GI וכלי דם", correct: true },
            { text: "עצירות כרונית", correct: false },
            { text: "רפלוקס קיבתי ושטי", correct: false },
            { text: "זיהום במעיים", correct: false }
        ],
        category: "בריאטריה",
        explanation: "Dumping Syndrome מופיע לאחר ניתוחי קיבה. Early dumping (15-30 דקות): בחילות, שלשול, הזעה. Late dumping (1-3 שעות): היפוגליקמיה."
    },
    {
        question: "מהי הגישה המועדפת לניתוחים בריאטריים כיום?",
        options: [
            { text: "לפרוסקופית (זעיר פולשנית)", correct: true },
            { text: "ניתוח פתוח בלבד", correct: false },
            { text: "ניתוח רובוטי בלבד", correct: false },
            { text: "אנדוסקופית דרך הפה", correct: false }
        ],
        category: "בריאטריה",
        explanation: "גישה לפרוסקופית מפחיתה סיבוכים, כאב, ותקופת החלמה בהשוואה לניתוח פתוח."
    },
    {
        question: "מהו סיבוך מוקדם חמור של Sleeve Gastrectomy?",
        options: [
            { text: "דליפה מקו התפרים (Staple line leak)", correct: true },
            { text: "עלייה במשקל", correct: false },
            { text: "סוכרת", correct: false },
            { text: "אין סיבוכים", correct: false }
        ],
        category: "בריאטריה",
        explanation: "דליפה מקו התפרים היא סיבוך חמור (1-3%) הדורש זיהוי מוקדם. סימנים: טכיקרדיה, חום, כאב בטן."
    },
    {
        question: "מהו Adiponectin?",
        options: [
            { text: "הורמון משומן המגביר רגישות לאינסולין, נמוך בהשמנה", correct: true },
            { text: "הורמון מרקמת שומן שגורם לצבירת שומן בגוף", correct: false },
            { text: "אנזים עיכול המופרש מהלבלב לפירוק שומנים", correct: false },
            { text: "הורמון הרעב המופרש מהקיבה לפני ארוחות", correct: false }
        ],
        category: "בריאטריה",
        explanation: "Adiponectin הוא הורמון מגן שרמתו יורדת בהשמנה. הוא משפר רגישות לאינסולין ובעל תכונות אנטי-דלקתיות."
    },
    {
        question: "מהי הסיבה העיקרית להיפוגליקמיה מאוחרת לאחר ניתוח בריאטרי?",
        options: [
            { text: "הפרשת יתר אינסולין בתגובה לספיגה מהירה של סוכרים", correct: true },
            { text: "צום ממושך לאחר הניתוח וחוסר צריכה קלורית", correct: false },
            { text: "המשך נטילת תרופות לסוכרת במינון הקודם", correct: false },
            { text: "זיהום בפצע הניתוחי הגורם לתגובה מטבולית", correct: false }
        ],
        category: "בריאטריה",
        explanation: "זהו חלק מ-Late Dumping Syndrome: סוכרים נספגים מהר, גורמים לשחרור אינסולין מוגזם, ואחר כך היפוגליקמיה."
    },

    // ========== שאלות נוספות - חסימת מעי ==========
    {
        question: "מהי הסיבה השכיחה ביותר לחסימת מעי דק (SBO)?",
        options: [
            { text: "הידבקויות (Adhesions) לאחר ניתוחים קודמים", correct: true },
            { text: "גידולים ראשוניים או גרורתיים במעי הדק", correct: false },
            { text: "בקע מפשעתי או בקע טבורי כלוא ומחנק", correct: false },
            { text: "אבנים במרה שחדרו למעי (Gallstone Ileus)", correct: false }
        ],
        category: "חסימת מעי",
        explanation: "60-75% מ-SBO נגרמים מהידבקויות. גורמים נוספים: בקעים, גידולים, Crohn."
    },
    {
        question: "מהי הסיבה השכיחה ביותר לחסימת מעי גס (LBO)?",
        options: [
            { text: "סרטן המעי הגס (קרצינומה קולורקטלית)", correct: true },
            { text: "הידבקויות לאחר ניתוחים קודמים בבטן", correct: false },
            { text: "אבני מרה שחדרו לקולון דרך פיסטולה", correct: false },
            { text: "עצירות פונקציונלית עם צואה קשה במעי", correct: false }
        ],
        category: "חסימת מעי",
        explanation: "60% מ-LBO נגרמים מסרטן המעי הגס. גורמים נוספים: וולוולוס, דיברטיקוליטיס, סטריקטורה."
    },
    {
        question: "מהו Volvulus?",
        options: [
            { text: "פיתול של המעי סביב צירו הגורם לחסימה ואיסכמיה", correct: true },
            { text: "בקע פנימי של לולאת מעי לחלל אחר בבטן", correct: false },
            { text: "דלקת זיהומית או אוטואימונית של דופן המעי", correct: false },
            { text: "גידול שפיר הגדל מדופן המעי פנימה", correct: false }
        ],
        category: "חסימת מעי",
        explanation: "Volvulus גורם לחסימה מכנית וגם לאיסכמיה מסוכנת. סיגמואיד וצקום הם המיקומים השכיחים."
    },
    {
        question: "מהו הסימן הקליני שמחשיד לסטרנגולציה בחסימת מעי?",
        options: [
            { text: "כאב קבוע (לא קוליקי), טכיקרדיה, חום, לויקוציטוזיס", correct: true },
            { text: "כאב קוליקי לסירוגין עם הקלה בין ההתקפים", correct: false },
            { text: "שלשולים מימיים עם ריר ודם מעורבים בצואה", correct: false },
            { text: "רעב מוגבר עם ירידה במשקל והרגשת שובע מוקדם", correct: false }
        ],
        category: "חסימת מעי",
        explanation: "סטרנגולציה = פגיעה בזרימת דם למעי. סימני אזהרה: כאב קבוע במקום קוליקי, סימני ספסיס, כאב לא פרופורציונלי."
    },
    {
        question: "מה רואים בצילום בטן בחסימת מעי דק?",
        options: [
            { text: "לולאות מעי מורחבות עם רמות אוויר-נוזל", correct: true },
            { text: "אוויר חופשי תת-סרעפתי המעיד על ניקוב", correct: false },
            { text: "הסתיידויות מפושטות בחלל הבטן והאגן", correct: false },
            { text: "צילום תקין ללא ממצאים פתולוגיים", correct: false }
        ],
        category: "חסימת מעי",
        explanation: "בחסימה: הרחבת מעי פרוקסימלית לחסימה, רמות נוזל-אוויר, ומעי קולפס דיסטלית לחסימה."
    },
    {
        question: "מהו Intussusception?",
        options: [
            { text: "חדירת קטע מעי לתוך הקטע הסמוך (טלסקופי)", correct: true },
            { text: "פיתול של המעי סביב צירו עם חסימת זרימת דם", correct: false },
            { text: "בקע של לולאת מעי דרך פתח בדופן הבטן", correct: false },
            { text: "היצרות פיברוטית של לומן המעי עקב דלקת", correct: false }
        ],
        category: "חסימת מעי",
        explanation: "Intussusception שכיח בילדים. במבוגרים לרוב קשור לגידול. גורם לחסימה ואיסכמיה."
    },

    // ========== שאלות נוספות - פרי-אופרטיבי ==========
    {
        question: "כמה שעות צום נדרש לפני ניתוח אלקטיבי לנוזלים צלולים?",
        options: [
            { text: "2 שעות לפני הניתוח", correct: true },
            { text: "6 שעות לפני הניתוח", correct: false },
            { text: "8 שעות לפני הניתוח", correct: false },
            { text: "12 שעות לפני הניתוח", correct: false }
        ],
        category: "פרי-אופרטיבי",
        explanation: "הנחיות ASA: נוזלים צלולים - 2 שעות, חלב אם - 4 שעות, ארוחה קלה - 6 שעות, ארוחה שומנית - 8 שעות."
    },
    {
        question: "מהו סיבוך DVT לאחר ניתוח?",
        options: [
            { text: "קריש דם בוורידים העמוקים, בדרך כלל ברגליים", correct: true },
            { text: "דימום מהפצע הניתוחי הדורש התערבות מחודשת", correct: false },
            { text: "זיהום בפצע הניתוחי עם הפרשה מוגלתית", correct: false },
            { text: "כאב בגרון לאחר אינטובציה עם קושי בבליעה", correct: false }
        ],
        category: "פרי-אופרטיבי",
        explanation: "DVT = Deep Vein Thrombosis. סיכון מוגבר בניתוחים ארוכים, חוסר תנועה. סיבוך מסוכן: PE (תסחיף ריאתי)."
    },
    {
        question: "מהי הפרעת האיזון הנפוצה לאחר ניתוח?",
        options: [
            { text: "היפוקלמיה וחמצת מטבולית", correct: true },
            { text: "היפרקלמיה ובססת", correct: false },
            { text: "היפרנתרמיה", correct: false },
            { text: "היפרקלצמיה", correct: false }
        ],
        category: "פרי-אופרטיבי",
        explanation: "לאחר ניתוח נפוצים: איבוד נוזלים, צום, הקאות. כל אלה גורמים להיפוקלמיה ולעיתים חמצת."
    },
    {
        question: "מהי אטלקטזיס לאחר ניתוח?",
        options: [
            { text: "קריסת אלוואולות בריאות, סיבוך ריאתי שכיח", correct: true },
            { text: "דלקת ריאות", correct: false },
            { text: "פנאומוטורקס", correct: false },
            { text: "בצקת ריאות", correct: false }
        ],
        category: "פרי-אופרטיבי",
        explanation: "אטלקטזיס שכיח 24-48 שעות אחרי ניתוח. גורם: הרדמה, כאב, חוסר נשימות עמוקות. מניעה: ספירומטר, שיעול."
    },
    {
        question: "מה כולל פרוטוקול ERAS (Enhanced Recovery After Surgery)?",
        options: [
            { text: "צום מקוצר, הליכה מוקדמת, הזנה מוקדמת, הפחתת אופיואידים", correct: true },
            { text: "צום ממושך של 24 שעות ומנוחה מוחלטת במיטה", correct: false },
            { text: "אנטיביוטיקה פרופילקטית ממושכת במשך שבוע", correct: false },
            { text: "הזנה תוך-ורידית בלבד עד להוכחת פריסטלטיקה", correct: false }
        ],
        category: "פרי-אופרטיבי",
        explanation: "ERAS מקצר אשפוז ומפחית סיבוכים: צום מינימלי, משככי כאב לא-אופיואידים, הקמה וניידות מוקדמת."
    },
    {
        question: "מהי סיבת החום ב-24 השעות הראשונות לאחר ניתוח?",
        options: [
            { text: "בדרך כלל אטלקטזיס (ריאתי), לא זיהום", correct: true },
            { text: "זיהום בפצע", correct: false },
            { text: "DVT", correct: false },
            { text: "דלקת בדרכי השתן", correct: false }
        ],
        category: "פרי-אופרטיבי",
        explanation: "חום מוקדם (יום 1-2) = בדרך כלל ריאתי. חום ביום 3-5 = זיהום פצע/UTI. חום מאוחר (יום 5+) = DVT/אבצס."
    },

    // ========== שאלות נוספות - לבלב ==========
    {
        question: "מהו הכאב האופייני בדלקת לבלב חריפה?",
        options: [
            { text: "כאב אפיגסטרי חד הקורן לגב, בתנוחה מכופפת קדימה", correct: true },
            { text: "כאב בבטן ימנית תחתונה", correct: false },
            { text: "כאב בחזה", correct: false },
            { text: "כאב בשכמות", correct: false }
        ],
        category: "לבלב",
        explanation: "כאב לבלב קלאסי: אפיגסטרי, קורן לגב, משתפר בישיבה מכופפת קדימה. מלווה בבחילות והקאות."
    },
    {
        question: "מהו סימן Cullen?",
        options: [
            { text: "שטף דם סביב הטבור המעיד על דימום רטרופריטוניאלי", correct: true },
            { text: "צהבת", correct: false },
            { text: "נפיחות בטנית", correct: false },
            { text: "כאב בכתף", correct: false }
        ],
        category: "לבלב",
        explanation: "Cullen sign = ecchymosis סביב הטבור. Grey Turner sign = ecchymosis בצדדים. שניהם מעידים על דלקת לבלב נקרוטית חמורה."
    },
    {
        question: "מהי דלקת לבלב נקרוטית (Necrotizing Pancreatitis)?",
        options: [
            { text: "נמק של רקמת הלבלב, מצב חמור עם תמותה גבוהה", correct: true },
            { text: "דלקת קלה שחולפת מעצמה", correct: false },
            { text: "גידול בלבלב", correct: false },
            { text: "אבנים בלבלב", correct: false }
        ],
        category: "לבלב",
        explanation: "20% מדלקות לבלב הן נקרוטיות. סיבוכים: זיהום הנמק, SIRS, אי ספיקת איברים. תמותה 20-40%."
    },
    {
        question: "מהי Pseudocyst של הלבלב?",
        options: [
            { text: "אוסף נוזל מוקף דופן דלקתית, ללא אפיתל אמיתי", correct: true },
            { text: "גידול ממאיר", correct: false },
            { text: "אבן בלבלב", correct: false },
            { text: "מורסה", correct: false }
        ],
        category: "לבלב",
        explanation: "Pseudocyst מתפתח 4-6 שבועות לאחר דלקת לבלב. רוב הקטנים נספגים. גדולים/סימפטומטיים דורשים ניקוז."
    },
    {
        question: "מדוע בודקים סידן בדם בדלקת לבלב?",
        options: [
            { text: "היפוקלצמיה היא סימן לחומרה (ספוניפיקציה של שומן)", correct: true },
            { text: "היפרקלצמיה שכיחה", correct: false },
            { text: "אין קשר לסידן", correct: false },
            { text: "לבדיקת תפקודי כליות", correct: false }
        ],
        category: "לבלב",
        explanation: "בדלקת לבלב נקרוטית, חומצות שומן משתחררות וקושרות סידן (saponification). היפוקלצמיה = סימן פרוגנוסטי רע."
    },
    {
        question: "מהו ציון Ranson?",
        options: [
            { text: "מערכת ניקוד לחומרת דלקת לבלב ולפרוגנוזה", correct: true },
            { text: "מדד לתפקוד כליות", correct: false },
            { text: "ציון כאב", correct: false },
            { text: "מדד לסוכרת", correct: false }
        ],
        category: "לבלב",
        explanation: "Ranson מעריך 11 פרמטרים (5 בקבלה, 6 אחרי 48 שעות). ציון גבוה (>3) מעיד על תמותה גבוהה יותר."
    },

    // ========== שאלות נוספות - כבד ומרה ==========
    {
        question: "מהו Murphy's Sign?",
        options: [
            { text: "עצירת נשימה בלחיצה על RUQ, אופייני לדלקת כיס מרה", correct: true },
            { text: "כאב ב-LLQ", correct: false },
            { text: "נפיחות בטנית", correct: false },
            { text: "צהבת", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "Murphy's Sign חיובי: בלחיצה מתחת לקשת הצלעות ימין, החולה עוצר נשימה מכאב. אופייני לדלקת כיס מרה חריפה."
    },
    {
        question: "מהי Cholecystitis?",
        options: [
            { text: "דלקת של כיס המרה, לרוב בגלל אבנים", correct: true },
            { text: "דלקת של צינורות המרה", correct: false },
            { text: "אבנים בכליות", correct: false },
            { text: "דלקת הלבלב", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "Cholecystitis = דלקת כיס מרה. 90% מאבנים. סימנים: כאב RUQ, חום, Murphy חיובי, לויקוציטוזיס."
    },
    {
        question: "מהי Cholangitis ומהי הטריאדה של Charcot?",
        options: [
            { text: "דלקת צינורות מרה: חום, צהבת, כאב RUQ", correct: true },
            { text: "דלקת כיס מרה: בחילות, הקאות, שלשול", correct: false },
            { text: "דלקת לבלב: כאב גב, חום, היפוקלצמיה", correct: false },
            { text: "דלקת כבד: צהבת, הקאות, בלבול", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "Cholangitis = זיהום בצינורות המרה, חירום רפואי. Charcot's triad: חום+צמרמורות, צהבת, כאב RUQ."
    },
    {
        question: "מהי הפנטאדה של Reynolds בדלקת צינורות מרה?",
        options: [
            { text: "טריאדת Charcot + בלבול + היפוטנציה (שוק)", correct: true },
            { text: "חום + שלשול + הקאות + כאב + צהבת", correct: false },
            { text: "כאב + בחילות + עלייה בסוכר + חום + לויקוציטוזיס", correct: false },
            { text: "צהבת + גרד + כאב + בחילות + ירידה במשקל", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "Reynolds' Pentad = Cholangitis חמורה עם ספסיס: Charcot's triad (חום, צהבת, כאב) + בלבול + שוק."
    },
    {
        question: "מה גורם לגרד (Pruritus) במחלות כבד?",
        options: [
            { text: "הצטברות מלחי מרה בעור", correct: true },
            { text: "בילירובין גבוה", correct: false },
            { text: "אלבומין נמוך", correct: false },
            { text: "עלייה באמוניה", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "מלחי מרה מצטברים בחסימה ובשחמת, מגיעים לעור ומגרים את קצות העצבים. גרד חמור אופייני לחסימה."
    },

    // ========== שאלות נוספות - מערכת העיכול ==========
    {
        question: "מהו GERD ומה הטיפול העיקרי?",
        options: [
            { text: "רפלוקס קיבתי-ושטי, טיפול: PPI (מעכבי משאבת פרוטונים)", correct: true },
            { text: "כיב קיבה, טיפול: אנטיביוטיקה", correct: false },
            { text: "דלקת קיבה, טיפול: סטרואידים", correct: false },
            { text: "חסימת ושט, טיפול: ניתוח", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "GERD = Gastroesophageal Reflux Disease. PPIs (כמו Omeprazole) מפחיתים חומציות ומרפאים ושט."
    },
    {
        question: "מהו Barrett's Esophagus?",
        options: [
            { text: "החלפת אפיתל קשקשי של הושט באפיתל גלילי עקב GERD כרוני", correct: true },
            { text: "גידול שפיר בושט", correct: false },
            { text: "היצרות הושט", correct: false },
            { text: "דליות בושט", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "Barrett's הוא מצב טרום-סרטני. דורש מעקב אנדוסקופי עם ביופסיות. סיכון לאדנוקרצינומה של הושט."
    },
    {
        question: "מהו Helicobacter pylori ולמה הוא קשור?",
        options: [
            { text: "חיידק הגורם לכיבים פפטיים ולסרטן קיבה", correct: true },
            { text: "וירוס הגורם לשלשול", correct: false },
            { text: "פרזיט הגורם לעצירות", correct: false },
            { text: "פטרייה הגורמת לרפלוקס", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "H. pylori גורם ל-90% מכיבי תריסריון ו-70% מכיבי קיבה. טיפול: Triple therapy (2 אנטיביוטיקות + PPI)."
    },
    {
        question: "מהם סימני אזהרה (Red Flags) בתלונות GI הדורשים בירור דחוף?",
        options: [
            { text: "ירידה במשקל, דם בצואה, אנמיה, דיספגיה, המטמזיס", correct: true },
            { text: "גזים ונפיחות לאחר ארוחות עשירות בסיבים", correct: false },
            { text: "צרבת קלה המוקלת על ידי נוגדי חומצה", correct: false },
            { text: "עצירות מדי פעם עם צואה קשה אך ללא דם", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "דגלים אדומים מחשידים לממאירות או סיבוך חמור. דורשים אנדוסקופיה או הדמייה בהקדם."
    }
];
