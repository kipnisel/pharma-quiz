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
    },

    // ========== שאלות נוספות - סוכרת ==========
    {
        question: "מהי המטרה הטיפולית ל-HbA1c ברוב חולי הסוכרת?",
        options: [
            { text: "מתחת ל-7% (או 53 mmol/mol)", correct: true },
            { text: "מתחת ל-5% (או 31 mmol/mol)", correct: false },
            { text: "מתחת ל-10% (או 86 mmol/mol)", correct: false },
            { text: "מתחת ל-12% (או 108 mmol/mol)", correct: false }
        ],
        category: "סוכרת",
        explanation: "HbA1c מתחת ל-7% מפחית סיכון לסיבוכים מיקרווסקולריים. בקשישים או חולים מורכבים המטרה גמישה יותר."
    },
    {
        question: "מהו DKA (Diabetic Ketoacidosis)?",
        options: [
            { text: "חמצת מטבולית עם קטונים בדם, שכיח בסוכרת סוג 1", correct: true },
            { text: "תרדמת היפוגליקמית עקב עודף אינסולין", correct: false },
            { text: "בססת נשימתית עקב היפרונטילציה", correct: false },
            { text: "היפרגליקמיה קלה ללא קטונים בדם", correct: false }
        ],
        category: "סוכרת",
        explanation: "DKA מאופיין בסוכר גבוה, חמצת (pH<7.3), קטונים בדם/שתן. מצב חירום הדורש אינסולין ונוזלים IV."
    },
    {
        question: "מהו HHS (Hyperosmolar Hyperglycemic State)?",
        options: [
            { text: "היפרגליקמיה קשה עם התייבשות חמורה, ללא קטוזיס משמעותי", correct: true },
            { text: "היפוגליקמיה קשה עם אובדן הכרה ופרכוסים", correct: false },
            { text: "חמצת לקטית עקב מטפורמין בחולה כליות", correct: false },
            { text: "תגובה אלרגית לאינסולין עם אנפילקסיס", correct: false }
        ],
        category: "סוכרת",
        explanation: "HHS שכיח בסוכרת סוג 2, עם סוכר מעל 600 mg/dL, אוסמולריות גבוהה, והתייבשות קשה. תמותה גבוהה מ-DKA."
    },
    {
        question: "מהי נוירופתיה סוכרתית?",
        options: [
            { text: "פגיעה בעצבים היקפיים הגורמת לתחושת נימול וכאב בכפות הרגליים", correct: true },
            { text: "פגיעה בראייה עקב נזק לרשתית העין בלבד", correct: false },
            { text: "פגיעה בכליות עם חלבון בשתן בלבד", correct: false },
            { text: "פגיעה בכלי דם גדולים עם התקפי לב", correct: false }
        ],
        category: "סוכרת",
        explanation: "נוירופתיה פריפרית היא הסיבוך השכיח ביותר. גורמת לאובדן תחושה, כאב נוירופתי, וסיכון לפצעים ברגליים."
    },
    {
        question: "מהו הטיפול הראשון בהיפוגליקמיה (סוכר נמוך) בחולה בהכרה?",
        options: [
            { text: "מתן 15-20 גרם פחמימות פשוטות (מיץ, סוכריות)", correct: true },
            { text: "הזרקת אינסולין לתיקון האיזון ההורמונלי", correct: false },
            { text: "מתן גלוקגון תת-עורי כקו ראשון בכל מקרה", correct: false },
            { text: "צום למשך שעה עד להתייצבות הסוכר", correct: false }
        ],
        category: "סוכרת",
        explanation: "כלל 15-15: 15 גרם פחמימות, המתן 15 דקות, בדוק שוב. גלוקגון IM או דקסטרוז IV רק אם אין הכרה."
    },
    {
        question: "מהם סימני Somogyi effect?",
        options: [
            { text: "היפרגליקמיה בבוקר כתגובה להיפוגליקמיה לילית", correct: true },
            { text: "היפוגליקמיה בבוקר עקב צום לילי ממושך", correct: false },
            { text: "היפרגליקמיה קבועה לאורך כל היום והלילה", correct: false },
            { text: "תנודות סוכר רק לאחר ארוחות גדולות", correct: false }
        ],
        category: "סוכרת",
        explanation: "Somogyi: היפוגליקמיה לילית גורמת לשחרור הורמונים קונטר-רגולטוריים ולסוכר גבוה בבוקר. פתרון: הפחתת אינסולין לילי."
    },
    {
        question: "מהו Dawn Phenomenon?",
        options: [
            { text: "עלייה בסוכר בשעות הבוקר המוקדמות עקב הורמונים", correct: true },
            { text: "ירידה בסוכר בשעות הלילה המאוחרות עקב צום", correct: false },
            { text: "תנודות סוכר לאחר פעילות גופנית אינטנסיבית", correct: false },
            { text: "היפוגליקמיה בשעות אחר הצהריים המאוחרות", correct: false }
        ],
        category: "סוכרת",
        explanation: "Dawn phenomenon נגרם מהפרשת GH וקורטיזול בשעות 4-8 בבוקר. פתרון: התאמת אינסולין או תזמון."
    },
    {
        question: "מהי Retinopathy סוכרתית?",
        options: [
            { text: "פגיעה בכלי הדם ברשתית הגורמת לאובדן ראייה", correct: true },
            { text: "פגיעה בעצב האופטי עקב לחץ תוך עיני גבוה", correct: false },
            { text: "עכירות של עדשת העין (קטרקט) בלבד", correct: false },
            { text: "דלקת בקרנית העין עקב יובש כרוני", correct: false }
        ],
        category: "סוכרת",
        explanation: "רטינופתיה סוכרתית היא הגורם המוביל לעיוורון במבוגרים. דורשת בדיקת קרקעית עיניים שנתית."
    },
    {
        question: "מהי Nephropathy סוכרתית?",
        options: [
            { text: "פגיעה בכליות המתחילה במיקרואלבומינוריה ומתקדמת לאי ספיקה", correct: true },
            { text: "זיהום חוזר בדרכי השתן עקב סוכר גבוה בשתן", correct: false },
            { text: "אבנים בכליות עקב שינויים מטבוליים בסוכרת", correct: false },
            { text: "בצקת ברגליים עקב אגירת נוזלים בלבד", correct: false }
        ],
        category: "סוכרת",
        explanation: "נפרופתיה סוכרתית היא הגורם השכיח לדיאליזה. ACE-I או ARB מאטים התקדמות. בדיקת מיקרואלבומין שנתית."
    },
    {
        question: "מהו אינסולין Basal-Bolus?",
        options: [
            { text: "משטר אינסולין עם מנה בסיסית ארוכת טווח ומנות לארוחות", correct: true },
            { text: "אינסולין בודד במנה אחת ביום ללא קשר לארוחות", correct: false },
            { text: "אינסולין מעורב קבוע פעמיים ביום בלבד", correct: false },
            { text: "אינסולין רק בזמן מחלה או מצבי דחק", correct: false }
        ],
        category: "סוכרת",
        explanation: "Basal-Bolus מחקה הפרשה פיזיולוגית: אינסולין ארוך (Lantus/Levemir) + מהיר (Novorapid/Humalog) לארוחות."
    },

    // ========== שאלות נוספות - הפטיטיס ==========
    {
        question: "מהי הפטיטיס A ומה דרך ההעברה?",
        options: [
            { text: "דלקת כבד ויראלית המועברת בדרך פקאלית-אוראלית", correct: true },
            { text: "דלקת כבד המועברת דרך דם ומגע מיני בלבד", correct: false },
            { text: "דלקת כבד אוטואימונית ללא גורם זיהומי", correct: false },
            { text: "דלקת כבד הנגרמת מתרופות או אלכוהול", correct: false }
        ],
        category: "הפטיטיס B",
        explanation: "הפטיטיס A מועבר דרך מים ומזון מזוהם. בדרך כלל חולף מעצמו ללא כרוניות. יש חיסון יעיל (Havrix)."
    },
    {
        question: "איזה מסמני הפטיטיס B מעיד על יכולת הדבקה נמוכה?",
        options: [
            { text: "Anti-HBe חיובי (סרוקונברסיה של HBeAg)", correct: true },
            { text: "HBeAg חיובי עם viral load גבוה", correct: false },
            { text: "HBsAg חיובי בלבד ללא נוגדנים", correct: false },
            { text: "Anti-HBc IgM חיובי בשלב חריף", correct: false }
        ],
        category: "הפטיטיס B",
        explanation: "Anti-HBe מופיע כש-HBeAg נעלם (סרוקונברסיה). מעיד על ירידה בשכפול הנגיפי ויכולת הדבקה נמוכה יותר."
    },
    {
        question: "מהי Window Period בהפטיטיס B?",
        options: [
            { text: "תקופה בה HBsAg נעלם אך Anti-HBs עדיין לא הופיע", correct: true },
            { text: "תקופת הדגירה מרגע ההדבקה ועד הופעת תסמינים", correct: false },
            { text: "תקופה בה החולה מדבק אך ללא סימנים קליניים", correct: false },
            { text: "זמן המתנה בין מנות החיסון השונות", correct: false }
        ],
        category: "הפטיטיס B",
        explanation: "ב-Window Period הסמן היחיד החיובי הוא Anti-HBc. חשוב לאבחנה כי HBsAg ו-Anti-HBs שניהם שליליים."
    },
    {
        question: "מהו הטיפול בהפטיטיס B כרונית?",
        options: [
            { text: "תרופות אנטי-ויראליות כמו Tenofovir או Entecavir", correct: true },
            { text: "אנטיביוטיקה לטיפול בזיהום החיידקי המשני", correct: false },
            { text: "סטרואידים להפחתת הדלקת בכבד בלבד", correct: false },
            { text: "אין טיפול יעיל והמחלה תמיד מתקדמת", correct: false }
        ],
        category: "הפטיטיס B",
        explanation: "Tenofovir ו-Entecavir מדכאים שכפול נגיפי ומפחיתים סיכון לשחמת וסרטן כבד. טיפול ארוך טווח."
    },
    {
        question: "מהו Occult HBV Infection?",
        options: [
            { text: "HBsAg שלילי אך HBV DNA חיובי בדם או בכבד", correct: true },
            { text: "HBsAg חיובי עם viral load גבוה מאוד", correct: false },
            { text: "זיהום חריף עם תסמינים קליניים בולטים", correct: false },
            { text: "מצב לאחר חיסון מוצלח עם Anti-HBs חיובי", correct: false }
        ],
        category: "הפטיטיס B",
        explanation: "Occult HBV שכיח בחולים עם Anti-HBc חיובי בודד. חשוב במושתלי כבד ובחולים מדוכאי חיסון."
    },

    // ========== שאלות נוספות - אלקטרוליטים ==========
    {
        question: "מהו SIADH ואיזו הפרעה אלקטרוליטית הוא גורם?",
        options: [
            { text: "הפרשת יתר של ADH הגורמת להיפונתרמיה היפוטונית", correct: true },
            { text: "חוסר הפרשת ADH הגורם להיפרנתרמיה חמורה", correct: false },
            { text: "הפרשת יתר של אלדוסטרון הגורמת להיפוקלמיה", correct: false },
            { text: "חוסר הפרשת קורטיזול הגורם להיפרקלמיה", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "SIADH: אגירת מים מדללת את הנתרן. גורמים: מחלות ריאה, CNS, תרופות, גידולים. טיפול: הגבלת נוזלים."
    },
    {
        question: "מהו Diabetes Insipidus ואיזו הפרעה הוא גורם?",
        options: [
            { text: "חוסר ADH או תגובה אליו הגורם להיפרנתרמיה והשתנה מרובה", correct: true },
            { text: "עודף ADH הגורם לאגירת נוזלים והיפונתרמיה", correct: false },
            { text: "עודף אינסולין הגורם להיפוגליקמיה חמורה", correct: false },
            { text: "חוסר אינסולין הגורם לסוכרת ולקטוזיס", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "DI מרכזי: חוסר ADH. DI נפרוגני: חוסר תגובה ל-ADH. שניהם גורמים לפוליאוריה, צמא, והיפרנתרמיה."
    },
    {
        question: "מהם סימני ECG של היפרקלמיה?",
        options: [
            { text: "גלי T גבוהים וחדים, הארכת PR, הרחבת QRS", correct: true },
            { text: "גלי U בולטים, הארכת QT, השטחת גל T", correct: false },
            { text: "עליית ST בכל החיבורים עם גלי Q פתולוגיים", correct: false },
            { text: "פרפור עליות עם תגובה חדרית מהירה", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "היפרקלמיה: T גבוהים (מוקדם) → PR ארוך, QRS רחב → גלים סינוסואידליים → VF/אסיסטולה. חירום!"
    },
    {
        question: "מהו הטיפול בהיפונתרמיה סימפטומטית חמורה?",
        options: [
            { text: "NaCl 3% היפרטוני בזהירות עם העלאה איטית של הנתרן", correct: true },
            { text: "מתן נוזלים היפוטוניים בכמות גדולה במהירות", correct: false },
            { text: "הגבלת נוזלים מוחלטת ללא מתן סליין כלל", correct: false },
            { text: "משתנים בכמות גבוהה להפחתת עומס נוזלים", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "תיקון מהיר מדי גורם ל-ODS (מיאלינוליזיס). מטרה: העלאה של 4-6 mEq/L ב-24 שעות ראשונות."
    },
    {
        question: "מהי היפומגנזמיה ולמה היא קשורה?",
        options: [
            { text: "מגנזיום נמוך הגורם להיפוקלמיה והיפוקלצמיה עמידות לטיפול", correct: true },
            { text: "מגנזיום גבוה הגורם לחולשת שרירים ודיכוי נשימתי", correct: false },
            { text: "מגנזיום נמוך הגורם להיפרקלמיה ובססת מטבולית", correct: false },
            { text: "מגנזיום גבוה הגורם להפרעות קצב חדריות", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "היפומגנזמיה שכיחה באלכוהוליזם, משתנים, שלשולים. יש לתקן מגנזיום לפני שניתן לתקן K+ ו-Ca++."
    },
    {
        question: "מהו Anion Gap ומתי הוא מוגבר?",
        options: [
            { text: "Na - (Cl + HCO3), מוגבר בחמצת לקטית, DKA, אי ספיקת כליות", correct: true },
            { text: "K + Na - Cl, מוגבר בהיפרקלמיה ובחמצת נשימתית", correct: false },
            { text: "HCO3 + Cl - Na, מוגבר בבססת מטבולית חמורה", correct: false },
            { text: "Ca + Mg - PO4, מוגבר בהיפרקלצמיה וממאירות", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "AG תקין: 8-12. AG גבוה: חמצות עם חומצות אורגניות (לקטט, קטונים, אורמיה, רעלים). MUDPILES."
    },
    {
        question: "מהי פגיעה כלייתית חריפה (AKI) ומהם הסוגים?",
        options: [
            { text: "עלייה חדה בקריאטינין: פרה-רנלית, רנלית, פוסט-רנלית", correct: true },
            { text: "ירידה הדרגתית ב-GFR לאורך שנים עם פרוטאינוריה", correct: false },
            { text: "זיהום בדרכי השתן עם חום וצמרמורות בלבד", correct: false },
            { text: "אבנים בכליות הגורמות לכאב קוליקי חד צדדי", correct: false }
        ],
        category: "אלקטרוליטים",
        explanation: "פרה-רנלית: היפופרפוזיה. רנלית: ATN, גלומרולונפריטיס. פוסט-רנלית: חסימה. טיפול לפי הסיבה."
    },

    // ========== שאלות נוספות - מערכת העיכול ==========
    {
        question: "מהו Achalasia?",
        options: [
            { text: "כשל בהרפיית ה-LES וחוסר פריסטלטיקה בוושט", correct: true },
            { text: "רפלוקס חומצי כרוני עם נזק לוושט התחתון", correct: false },
            { text: "היצרות מכנית של הוושט עקב גידול או צלקת", correct: false },
            { text: "דליות בוושט עקב יתר לחץ דם פורטלי", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "אכלזיה: דיספגיה לנוזלים ומוצקים, רגורגיטציה. אבחון: מנומטריה. טיפול: בוטוקס, הרחבה פניאומטית, מיוטומיה."
    },
    {
        question: "מהו Zenker's Diverticulum?",
        options: [
            { text: "כיס בלוע התחתון הגורם לדיספגיה, ריח רע, ורגורגיטציה", correct: true },
            { text: "כיס במעי הגס הגורם לדימום ודיברטיקוליטיס", correct: false },
            { text: "כיס בקיבה הגורם לכאבים אפיגסטריים וצרבת", correct: false },
            { text: "כיס בתריסריון הגורם לחסימת מוצא הקיבה", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "Zenker: דיברטיקולום פולסיבי בוושט עליון. שכיח בקשישים. סיבוכים: אספירציה, חסימה. טיפול: ניתוחי."
    },
    {
        question: "מהי Gastroparesis?",
        options: [
            { text: "עיכוב בריקון הקיבה ללא חסימה מכנית, שכיח בסוכרת", correct: true },
            { text: "חסימה מכנית של מוצא הקיבה עקב גידול או צלקת", correct: false },
            { text: "דלקת חריפה של רירית הקיבה עם כאב והקאות", correct: false },
            { text: "כיב פפטי מדמם הדורש התערבות אנדוסקופית", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "גסטרופרזיס: בחילות, הקאות, שובע מוקדם, נפיחות. גורמים: סוכרת, פוסט-כירורגי, אידיופתי. טיפול: פרוקינטיים."
    },
    {
        question: "מהי Celiac Disease?",
        options: [
            { text: "רגישות לגלוטן הגורמת לנזק לרירית המעי הדק וחוסר ספיגה", correct: true },
            { text: "אלרגיה לחלב הגורמת לשלשולים ונפיחות בטנית", correct: false },
            { text: "דלקת מעי כרונית אוטואימונית כמו Crohn או UC", correct: false },
            { text: "זיהום בקטריאלי במעי הגורם לשלשול דמי חריף", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "צליאק: נוגדנים Anti-tTG ו-Anti-EMA. ביופסיה: אטרופיה של וילי. טיפול: דיאטה ללא גלוטן לכל החיים."
    },
    {
        question: "מהו Crohn's Disease?",
        options: [
            { text: "דלקת מעי כרונית טרנסמורלית שיכולה לפגוע בכל מערכת העיכול", correct: true },
            { text: "דלקת מעי המוגבלת לקולון ולרקטום עם פגיעה שטחית", correct: false },
            { text: "זיהום חיידקי במעי הנרפא עם אנטיביוטיקה", correct: false },
            { text: "חסימת מעי מכנית עקב הידבקויות לאחר ניתוח", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "Crohn: פגיעה skip lesions, פיסטולות, היצרויות. מפה לאנוס. UC: רק קולון, פגיעה רציפה, שטחית."
    },
    {
        question: "מהו Toxic Megacolon?",
        options: [
            { text: "התרחבות חריפה של הקולון עם סימני ספסיס, סיבוך של IBD או זיהום", correct: true },
            { text: "גידול ממאיר גדול בקולון הגורם לחסימה מוחלטת", correct: false },
            { text: "עצירות כרונית עם הצטברות צואה קשה במעי", correct: false },
            { text: "פוליפים מרובים בקולון עם סיכון מוגבר לסרטן", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "Toxic Megacolon: חירום כירורגי. קולון מורחב >6cm, חום, טכיקרדיה, לויקוציטוזיס. סיכון לניקוב."
    },
    {
        question: "מהו C. difficile Colitis?",
        options: [
            { text: "דלקת קולון עקב חיידק לאחר טיפול באנטיביוטיקה", correct: true },
            { text: "דלקת קולון אוטואימונית ללא קשר לתרופות", correct: false },
            { text: "דלקת קולון ויראלית עם שלשול קצר וחולף", correct: false },
            { text: "דלקת קולון איסכמית עקב חסימת כלי דם", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "C. diff: שלשול מימי, חום, כאבי בטן לאחר אנטיביוטיקה. אבחון: PCR לטוקסין. טיפול: Vancomycin PO או Fidaxomicin."
    },
    {
        question: "מהי Diverticulitis?",
        options: [
            { text: "דלקת וזיהום של דיברטיקולום, לרוב בקולון השמאלי", correct: true },
            { text: "דימום מדיברטיקולום ללא דלקת או זיהום", correct: false },
            { text: "היווצרות של דיברטיקולים חדשים בקולון", correct: false },
            { text: "כיס בוושט הגורם לקושי בבליעה", correct: false }
        ],
        category: "מערכת העיכול",
        explanation: "דיברטיקוליטיס: כאב LLQ, חום, לויקוציטוזיס. CT לאבחנה. טיפול: אנטיביוטיקה, במקרים חמורים ניתוח."
    },

    // ========== שאלות נוספות - חסימת מעי ==========
    {
        question: "מהי Ogilvie Syndrome?",
        options: [
            { text: "פסאודו-חסימה של המעי הגס ללא חסימה מכנית", correct: true },
            { text: "חסימה מכנית של המעי הגס עקב סרטן קולורקטלי", correct: false },
            { text: "פיתול של הסיגמואיד הגורם לחסימה ואיסכמיה", correct: false },
            { text: "חדירת מעי לתוך מעי (אינטוססספציה) במבוגרים", correct: false }
        ],
        category: "חסימת מעי",
        explanation: "Ogilvie: הרחבת צקום וקולון ימני ללא חסימה מכנית. שכיח בחולים מאושפזים. טיפול: Neostigmine, דקומפרסיה."
    },
    {
        question: "מהו Gallstone Ileus?",
        options: [
            { text: "חסימת מעי עקב אבן מרה גדולה שחדרה דרך פיסטולה", correct: true },
            { text: "דלקת כיס מרה חריפה עם צהבת וחום גבוה", correct: false },
            { text: "חסימת צינור המרה עקב אבן קטנה הגורמת לקוליק", correct: false },
            { text: "אילאוס פאראליטי לאחר ניתוח כיס מרה", correct: false }
        ],
        category: "חסימת מעי",
        explanation: "Gallstone Ileus: אבן >2.5cm חודרת דרך פיסטולה כולציסטו-אנטרית. חסימה לרוב באילאום טרמינלי."
    },
    {
        question: "מה ההבדל בין הקאות בחסימה גבוהה לנמוכה?",
        options: [
            { text: "גבוהה: הקאות מרובות מרתיות מוקדמות. נמוכה: הקאות צואתיות מאוחרות", correct: true },
            { text: "גבוהה: הקאות צואתיות מוקדמות. נמוכה: הקאות מרתיות מאוחרות", correct: false },
            { text: "גבוהה: ללא הקאות כלל. נמוכה: הקאות מרובות מיידיות", correct: false },
            { text: "אין הבדל בסוג או בתזמון ההקאות בין שני הסוגים", correct: false }
        ],
        category: "חסימת מעי",
        explanation: "חסימה גבוהה: הקאות מוקדמות, ירוקות. חסימה נמוכה: הקאות מאוחרות, צואתיות (feculent), נפיחות בולטת."
    },
    {
        question: "מתי יש התוויה לניתוח בחסימת מעי?",
        options: [
            { text: "סימני סטרנגולציה, פריטוניטיס, כשל בטיפול שמרני", correct: true },
            { text: "כל חסימת מעי דורשת ניתוח מיידי ללא יוצא מן הכלל", correct: false },
            { text: "רק חסימה חוזרת לאחר שלושה אירועים קודמים", correct: false },
            { text: "רק כאשר יש חום גבוה ללא קשר לממצאים אחרים", correct: false }
        ],
        category: "חסימת מעי",
        explanation: "ניתוח דחוף: סטרנגולציה (כאב קבוע, טכיקרדיה, חמצת), פריטוניטיס, בקע כלוא, חסימה מלאה ללא שיפור."
    },
    {
        question: "מהי Closed Loop Obstruction?",
        options: [
            { text: "קטע מעי חסום משני צדדיו עם סיכון גבוה לאיסכמיה", correct: true },
            { text: "חסימה חלקית עם מעבר חלקי של גזים ונוזלים", correct: false },
            { text: "חסימה פונקציונלית ללא חסימה אנטומית אמיתית", correct: false },
            { text: "חסימה בנקודה אחת בלבד עם ניקוז פרוקסימלי חופשי", correct: false }
        ],
        category: "חסימת מעי",
        explanation: "Closed loop: סיכון גבוה לסטרנגולציה וניקוב. נפוץ בוולוולוס ובקע כלוא. דורש ניתוח דחוף."
    },

    // ========== שאלות נוספות - פרי-אופרטיבי ==========
    {
        question: "מהו ASA Physical Status Classification?",
        options: [
            { text: "סיווג של מצב בריאותי לפני הרדמה, מ-ASA 1 (בריא) עד ASA 6 (מת מוחי)", correct: true },
            { text: "סולם כאב סטנדרטי מ-0 עד 10 לאחר ניתוח", correct: false },
            { text: "ציון סיכון לדימום בזמן ניתוח לפי בדיקות קרישה", correct: false },
            { text: "מדד לעומק ההרדמה במהלך הניתוח עצמו", correct: false }
        ],
        category: "פרי-אופרטיבי",
        explanation: "ASA 1: בריא. ASA 2: מחלה מערכתית קלה. ASA 3: מחלה חמורה. ASA 4: מסכן חיים. ASA 5: גוסס."
    },
    {
        question: "מהו Malignant Hyperthermia?",
        options: [
            { text: "תגובה היפרמטבולית להרדמה עם עלייה בטמפרטורה ובCO2", correct: true },
            { text: "חום לאחר ניתוח עקב זיהום בפצע הניתוחי", correct: false },
            { text: "היפותרמיה חמורה בזמן ניתוח ארוך בחדר קר", correct: false },
            { text: "תגובה אלרגית לאנטיביוטיקה עם חום ופריחה", correct: false }
        ],
        category: "פרי-אופרטיבי",
        explanation: "MH: תגובה גנטית לסוקסיניל כולין או גזים מרדימים. טיפול: Dantrolene IV, קירור, תמיכה."
    },
    {
        question: "מהי Aspiration Pneumonitis?",
        options: [
            { text: "דלקת ריאות כימית עקב שאיפת תוכן קיבה חומצי", correct: true },
            { text: "דלקת ריאות חיידקית עקב שאיפת חיידקים מהפה", correct: false },
            { text: "בצקת ריאות עקב עומס נוזלים במהלך הניתוח", correct: false },
            { text: "תסחיף ריאתי עקב קריש דם מהרגליים", correct: false }
        ],
        category: "פרי-אופרטיבי",
        explanation: "אספירציה בהרדמה: נזק כימי מיידי מחומצה. מניעה: צום, RSI, הגנה על דרכי אוויר."
    },
    {
        question: "מהו Postoperative Ileus?",
        options: [
            { text: "עיכוב בחזרת תפקוד המעי לאחר ניתוח, בדרך כלל חולף", correct: true },
            { text: "חסימת מעי מכנית עקב הידבקויות מיד לאחר ניתוח", correct: false },
            { text: "ניקוב מעי במהלך הניתוח עם פריטוניטיס", correct: false },
            { text: "דימום פנימי לחלל הבטן לאחר הניתוח", correct: false }
        ],
        category: "פרי-אופרטיבי",
        explanation: "POI: קיבה 24-48h, מעי דק 24h, קולון 3-5 ימים. הארכה: אופיואידים, אלקטרוליטים, זיהום."
    },
    {
        question: "מהי Surgical Site Infection (SSI)?",
        options: [
            { text: "זיהום באתר הניתוח תוך 30 יום, או שנה אם יש שתל", correct: true },
            { text: "זיהום בדרכי השתן עקב צנתר שהוחדר לפני הניתוח", correct: false },
            { text: "דלקת ריאות עקב הנשמה ממושכת לאחר ניתוח", correct: false },
            { text: "זיהום בזרם הדם עקב קטטר ורידי מרכזי", correct: false }
        ],
        category: "פרי-אופרטיבי",
        explanation: "SSI: Superficial (עור), Deep (פאשיה/שריר), Organ/Space. גורמי סיכון: סוכרת, השמנה, עישון, משך ניתוח."
    },
    {
        question: "מהו VTE Prophylaxis לאחר ניתוח?",
        options: [
            { text: "מניעת קרישי דם באמצעות הפרין, גרביים, והליכה מוקדמת", correct: true },
            { text: "מניעת זיהום באמצעות אנטיביוטיקה פרופילקטית בלבד", correct: false },
            { text: "מניעת כאב באמצעות משככי כאבים סביב השעון", correct: false },
            { text: "מניעת בחילות באמצעות תרופות נוגדות הקאה", correct: false }
        ],
        category: "פרי-אופרטיבי",
        explanation: "VTE: DVT + PE. מניעה: LMWH/UFH, מכשירי לחץ, גרביים אלסטיות, הקמה מוקדמת. לפי סיכון וסוג ניתוח."
    },

    // ========== שאלות נוספות - לבלב ==========
    {
        question: "מהי Atlanta Classification לדלקת לבלב?",
        options: [
            { text: "סיווג חומרת דלקת לבלב: קלה, בינונית, חמורה", correct: true },
            { text: "סיווג סוגי ניתוחים על הלבלב לפי גישה כירורגית", correct: false },
            { text: "סיווג גידולי לבלב לפי דרגת ממאירות ופרוגנוזה", correct: false },
            { text: "סיווג סוכרת לפי מידת הפגיעה בתאי הלבלב", correct: false }
        ],
        category: "לבלב",
        explanation: "Atlanta: קלה - ללא אי ספיקת איברים. בינונית - אי ספיקה חולפת <48h. חמורה - אי ספיקה מתמשכת >48h."
    },
    {
        question: "מהו Walled-Off Necrosis (WON)?",
        options: [
            { text: "אוסף נמק מוקף דופן, מתפתח 4+ שבועות לאחר דלקת לבלב נקרוטית", correct: true },
            { text: "אבצס חריף בלבלב הדורש ניקוז מיידי תוך ימים", correct: false },
            { text: "פסאודוציסט פשוט ללא רכיב נקרוטי מוצק", correct: false },
            { text: "גידול ציסטי בלבלב עם פוטנציאל ממאיר", correct: false }
        ],
        category: "לבלב",
        explanation: "WON: אוסף מוקף עם נמק מוצק. לעומת פסאודוציסט שמכיל נוזל בלבד. זיהום WON דורש התערבות."
    },
    {
        question: "מהו Pancreatic Divisum?",
        options: [
            { text: "מום מולד בו צינורות הלבלב לא התמזגו, גורם לדלקת חוזרת", correct: true },
            { text: "קרע טראומטי של הלבלב לשני חלקים נפרדים", correct: false },
            { text: "גידול המחלק את הלבלב לשני אונות נפרדות", correct: false },
            { text: "ניתוח בו מסירים חצי מהלבלב (המיפנקריאטקטומי)", correct: false }
        ],
        category: "לבלב",
        explanation: "Pancreatic Divisum: הצינור הדורסלי מנקז דרך הפפילה המינורית. אצל חלק גורם לדלקות חוזרות."
    },
    {
        question: "מהו Autoimmune Pancreatitis (AIP)?",
        options: [
            { text: "דלקת לבלב אוטואימונית, לרוב מגיבה לסטרואידים", correct: true },
            { text: "דלקת לבלב חריפה עקב אבני מרה וצריכת אלכוהול", correct: false },
            { text: "דלקת לבלב כרונית עקב מוטציה גנטית בלבד", correct: false },
            { text: "דלקת לבלב זיהומית הדורשת טיפול אנטיביוטי", correct: false }
        ],
        category: "לבלב",
        explanation: "AIP Type 1: קשור ל-IgG4, מערבת איברים נוספים. Type 2: מוגבל ללבלב. שניהם מגיבים לסטרואידים."
    },
    {
        question: "מהו IPMN (Intraductal Papillary Mucinous Neoplasm)?",
        options: [
            { text: "גידול ציסטי בצינורות הלבלב המייצר ריר, עם פוטנציאל ממאיר", correct: true },
            { text: "דלקת לבלב כרונית עם הצטברות סידן בצינורות", correct: false },
            { text: "ציסטה פשוטה בלבלב ללא פוטנציאל סרטני", correct: false },
            { text: "פסאודוציסט לאחר דלקת לבלב חריפה", correct: false }
        ],
        category: "לבלב",
        explanation: "IPMN: Main duct - סיכון גבוה לממאירות, ניתוח. Branch duct - מעקב או ניתוח לפי גודל וסימנים מחשידים."
    },

    // ========== שאלות נוספות - כבד ומרה ==========
    {
        question: "מהי Acalculous Cholecystitis?",
        options: [
            { text: "דלקת כיס מרה ללא אבנים, שכיחה בחולים קשים באשפוז", correct: true },
            { text: "דלקת כיס מרה עם אבנים מרובות הדורשת ניתוח דחוף", correct: false },
            { text: "כיס מרה מכווץ וקטן ללא דלקת או תסמינים", correct: false },
            { text: "גידול בכיס המרה המתחזה לדלקת רגילה", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "Acalculous cholecystitis: 5-10% מכלל הכולציסטיטיס. בחולי ICU, טראומה, צום ממושך, TPN. תמותה גבוהה יותר."
    },
    {
        question: "מהו Mirizzi Syndrome?",
        options: [
            { text: "אבן בצוואר כיס המרה לוחצת על צינור המרה וגורמת לצהבת", correct: true },
            { text: "פיסטולה בין כיס המרה למעי הדק עקב דלקת כרונית", correct: false },
            { text: "ניקוב של כיס המרה עם מוגלה בחלל הבטן", correct: false },
            { text: "סרטן כיס המרה עם חדירה לכבד הסמוך", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "Mirizzi: אבן בצוואר כיס המרה גורמת לחסימה חיצונית של CBD. סוגים I-IV לפי חומרת הפיסטולה."
    },
    {
        question: "מהו Primary Sclerosing Cholangitis (PSC)?",
        options: [
            { text: "דלקת כרונית של צינורות המרה עם היצרויות ופיברוזיס", correct: true },
            { text: "דלקת חריפה של צינורות המרה עקב חיידקים וחסימה", correct: false },
            { text: "אבנים בצינורות המרה הגורמות לחסימה וזיהום", correct: false },
            { text: "גידול של צינורות המרה (כולנגיוקרצינומה)", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "PSC: קשור ל-IBD (במיוחד UC). סיכון לכולנגיוקרצינומה. MRCP מראה beading. אין טיפול יעיל, השתלת כבד."
    },
    {
        question: "מהו Hepatorenal Syndrome?",
        options: [
            { text: "אי ספיקת כליות בחולי שחמת עם אי ספיקת כבד מתקדמת", correct: true },
            { text: "פגיעה בכבד עקב אי ספיקת כליות כרונית ממושכת", correct: false },
            { text: "זיהום בדרכי השתן בחולים עם מחלת כבד", correct: false },
            { text: "אבנים בכליות עקב הפרעות מטבוליות בשחמת", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "HRS: וזוקונסטריקציה כלייתית בשחמת. Type 1: מהיר, חמור. Type 2: איטי. טיפול: אלבומין, Terlipressin, TIPS."
    },
    {
        question: "מהו Spontaneous Bacterial Peritonitis (SBP)?",
        options: [
            { text: "זיהום ספונטני של נוזל מיימת בחולי שחמת, ללא מקור ניתוחי", correct: true },
            { text: "דלקת צפק לאחר ניקוב מעי או ניתוח בבטן", correct: false },
            { text: "הצטברות נוזל מיימת סטרילי ללא זיהום", correct: false },
            { text: "דלקת צפק כימית עקב דליפת מרה לחלל הבטן", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "SBP: PMN >250/mm³ בנוזל מיימת. טיפול: Ceftriaxone או Cefotaxime. פרופילקסיס: Norfloxacin לאחר אירוע."
    },
    {
        question: "מהו Hepatic Encephalopathy?",
        options: [
            { text: "הפרעה נוירולוגית עקב הצטברות אמוניה באי ספיקת כבד", correct: true },
            { text: "שבץ מוחי בחולי שחמת עקב הפרעות קרישה", correct: false },
            { text: "גידול מוחי גרורתי מסרטן כבד ראשוני", correct: false },
            { text: "דימום מוחי עקב לחץ דם פורטלי גבוה", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "HE: בלבול, אסטריקסיס (flapping tremor), תרדמת. טיפול: לקטולוז (מפחית pH במעי), Rifaximin."
    },
    {
        question: "מהו TIPS (Transjugular Intrahepatic Portosystemic Shunt)?",
        options: [
            { text: "שאנט בין וריד פורטלי לוריד כבדי להפחתת לחץ פורטלי", correct: true },
            { text: "השתלת כבד חלקית מתורם חי לחולה שחמת", correct: false },
            { text: "ניתוח לכריתת גידול בכבד עם שוליים נקיים", correct: false },
            { text: "צנתור לניקוז מורסה בכבד דרך העור", correct: false }
        ],
        category: "כבד ומרה",
        explanation: "TIPS: מפחית לחץ פורטלי. התוויות: דימום מדליות לא נשלט, מיימת עמידה. סיבוך: אנצפלופתיה."
    },

    // ========== שאלות נוספות - בריאטריה ==========
    {
        question: "מהו Gastric Banding?",
        options: [
            { text: "טבעת מתכווננת סביב הקיבה העליונה ליצירת כיס קטן", correct: true },
            { text: "כריתת 80% מהקיבה ויצירת שרוול צר", correct: false },
            { text: "עקיפת חלק מהקיבה והמעי הדק לספיגה מופחתת", correct: false },
            { text: "הכנסת בלון לקיבה לתקופה זמנית להקטנת נפח", correct: false }
        ],
        category: "בריאטריה",
        explanation: "Gastric Banding: הליך הפיך, ירידה במשקל פחות דרמטית. פחות נפוץ היום עקב סיבוכים וחזרה במשקל."
    },
    {
        question: "מהו BPD-DS (Biliopancreatic Diversion with Duodenal Switch)?",
        options: [
            { text: "ניתוח משולב: Sleeve + עקיפת מעי ארוכה לחוסר ספיגה משמעותי", correct: true },
            { text: "הליך מגביל בלבד ללא רכיב של חוסר ספיגה", correct: false },
            { text: "הכנסת בלון לקיבה לתקופה של שישה חודשים", correct: false },
            { text: "טבעת סביב הקיבה ללא שינוי באנטומיה", correct: false }
        ],
        category: "בריאטריה",
        explanation: "BPD-DS: ירידה במשקל מקסימלית אך סיכון גבוה לחסרים תזונתיים. שמור למקרים קשים במיוחד."
    },
    {
        question: "מהו OAGB/MGB (One Anastomosis Gastric Bypass)?",
        options: [
            { text: "ניתוח עקיפה עם אנסטומוזה אחת בלבד, פשוט יותר מ-RYGB", correct: true },
            { text: "ניתוח Sleeve סטנדרטי ללא עקיפת מעי כלל", correct: false },
            { text: "ניתוח להסרת טבעת קיבה שהוחדרה בעבר", correct: false },
            { text: "ניתוח להרחבת כיס הקיבה לאחר Sleeve", correct: false }
        ],
        category: "בריאטריה",
        explanation: "OAGB: לולאה אחת, ניתוח קצר יותר. סיכון: רפלוקס מרה. יעילות דומה ל-RYGB."
    },
    {
        question: "מהי Internal Hernia לאחר ניתוח בריאטרי?",
        options: [
            { text: "בקע פנימי דרך פתחים שנוצרו בניתוח, גורם לחסימת מעי", correct: true },
            { text: "בקע חיצוני בפצע הניתוחי בדופן הבטן", correct: false },
            { text: "בקע מפשעתי שהתגלה לאחר ירידה במשקל", correct: false },
            { text: "התרופפות של הטבעת סביב הקיבה העליונה", correct: false }
        ],
        category: "בריאטריה",
        explanation: "Internal Hernia: סיבוך מאוחר של RYGB. כאב קוליקי, הקאות. CT לאבחנה. ניתוח דחוף אם יש חסימה."
    },
    {
        question: "מהו Marginal Ulcer?",
        options: [
            { text: "כיב באנסטומוזה בין כיס הקיבה למעי לאחר Bypass", correct: true },
            { text: "כיב בקיבה המקורית לאחר ניתוח Sleeve", correct: false },
            { text: "שחיקה של הטבעת לתוך דופן הקיבה", correct: false },
            { text: "כיב בתריסריון עקב H. pylori לאחר ניתוח", correct: false }
        ],
        category: "בריאטריה",
        explanation: "Marginal Ulcer: 1-5% לאחר RYGB. גורמי סיכון: עישון, NSAIDs, H. pylori. טיפול: PPI, הפסקת עישון."
    },
    {
        question: "מהי Rhabdomyolysis לאחר ניתוח בריאטרי?",
        options: [
            { text: "פירוק שרירים עקב לחץ ממושך בניתוח ארוך בחולים שמנים", correct: true },
            { text: "חולשת שרירים עקב חסר בויטמין B12 לאחר ניתוח", correct: false },
            { text: "כאבי שרירים עקב התייבשות בימים הראשונים", correct: false },
            { text: "עווית שרירים עקב היפוקלצמיה לאחר ניתוח", correct: false }
        ],
        category: "בריאטריה",
        explanation: "Rhabdomyolysis: CK מוגבר, שתן כהה, סיכון ל-AKI. מניעה: ריפוד טוב, הקטנת משך ניתוח, נוזלים."
    },

    // ========== שאלות נוספות - ריפוי פצעים ==========
    {
        question: "מהו Tertiary Intention Healing?",
        options: [
            { text: "סגירה מושהית של פצע לאחר תקופה של ריפוי פתוח", correct: true },
            { text: "ריפוי פצע עם קצוות מקורבים וסגורים מההתחלה", correct: false },
            { text: "ריפוי פצע פתוח שמתמלא בהדרגה ברקמת גרנולציה", correct: false },
            { text: "ריפוי פצע עם השתלת עור מאזור אחר בגוף", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "Tertiary intention: פצע נשאר פתוח (עקב זיהום או זיהום פוטנציאלי), ונסגר לאחר מספר ימים של ריפוי."
    },
    {
        question: "מהו Negative Pressure Wound Therapy (NPWT)?",
        options: [
            { text: "שימוש בואקום לקידום ריפוי פצעים מורכבים", correct: true },
            { text: "חבישות לחץ חיובי להפחתת בצקת סביב פצעים", correct: false },
            { text: "טיפול בחמצן היפרברי לפצעים שאינם מחלימים", correct: false },
            { text: "הזרקת סטרואידים לפצעים עם הצטלקות יתר", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "NPWT (VAC): מסיר עודף נוזלים, מגביר זרימת דם, מקדם גרנולציה. לפצעים מורכבים, כרוניים, לאחר ניתוח."
    },
    {
        question: "מהם שלבי Pressure Injury (פצעי לחץ)?",
        options: [
            { text: "Stage 1-4 לפי עומק הפגיעה, מאודם ועד חשיפת עצם", correct: true },
            { text: "Grade A-D לפי שטח הפצע בסנטימטרים מרובעים", correct: false },
            { text: "Level I-III לפי כמות ההפרשה והריח מהפצע", correct: false },
            { text: "Type 1-3 לפי מיקום הפצע על הגוף בלבד", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "Stage 1: אודם שאינו מתבהר. 2: אובדן עור חלקי. 3: אובדן עור מלא. 4: חשיפת שריר/עצם. Unstageable: כיסוי נמק."
    },
    {
        question: "מהו Biofilm בפצעים?",
        options: [
            { text: "קהילת חיידקים מוגנת על ידי מטריצה, עמידה לאנטיביוטיקה", correct: true },
            { text: "שכבת עור חדשה הנוצרת במהלך תהליך האפיתליזציה", correct: false },
            { text: "חבישה ביולוגית המכילה גורמי גדילה לריפוי", correct: false },
            { text: "רקמה נמקית שיש להסיר מפצע לפני ריפוי", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "Biofilm: חיידקים מוגנים במטריצה פולימרית. קשה לטיפול. דורש debridement מכני ואנטיביוטיקה ממוקדת."
    },
    {
        question: "מהו Hypergranulation?",
        options: [
            { text: "יצירת יתר של רקמת גרנולציה הבולטת מעל גובה הפצע", correct: true },
            { text: "חוסר ביצירת רקמת גרנולציה עם פצע יבש ושטוח", correct: false },
            { text: "זיהום ברקמת הגרנולציה עם הפרשה מוגלתית", correct: false },
            { text: "נמק של רקמת הגרנולציה עם צבע שחור-חום", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "Hypergranulation: רקמה אדומה בולטת מעל גובה העור. מעכבת אפיתליזציה. טיפול: סילבר ניטראט, סטרואידים מקומיים."
    },
    {
        question: "מהו Collagen בריפוי פצעים?",
        options: [
            { text: "חלבון מבני העיקרי בצלקת, מיוצר על ידי פיברובלסטים", correct: true },
            { text: "אנזים המפרק רקמה נמקית בשלב הדלקתי", correct: false },
            { text: "גורם גדילה המעודד התחלקות תאי אפיתל", correct: false },
            { text: "חומר קרישה הסותם כלי דם פגועים בתחילת הפגיעה", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "קולגן Type III נוצר תחילה (חלש), מוחלף ב-Type I (חזק יותר) בשלב הרימודלינג. צלקת מגיעה ל-80% מחוזק העור המקורי."
    },
    {
        question: "מהם גורמי גדילה חשובים בריפוי פצעים?",
        options: [
            { text: "PDGF, TGF-beta, VEGF, EGF - מעודדים ריפוי והתחדשות", correct: true },
            { text: "TNF-alpha, IL-6, IL-1 בלבד - גורמים פרו-דלקתיים", correct: false },
            { text: "אינסולין וגלוקגון בלבד - הורמונים מטבוליים", correct: false },
            { text: "קורטיזול ואדרנלין בלבד - הורמוני סטרס", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "PDGF: כימוטקסיס. TGF-β: קולגן. VEGF: אנגיוגנזיס. EGF: אפיתליזציה. חשובים לכל שלבי הריפוי."
    },
    {
        question: "מהו Wound Contraction?",
        options: [
            { text: "תהליך בו שולי הפצע מתקרבים בעזרת מיופיברובלסטים", correct: true },
            { text: "הרחבת הפצע עקב זיהום או לחץ מקומי על הרקמות", correct: false },
            { text: "יצירת צלקת קשה ומתוחה המגבילה תנועה", correct: false },
            { text: "סגירה כירורגית של פצע באמצעות תפרים", correct: false }
        ],
        category: "ריפוי פצעים",
        explanation: "Wound Contraction: מיופיברובלסטים מכווצים את הפצע. חשוב ב-Secondary intention. יכול לגרום לקונטרקטורות."
    }
];
