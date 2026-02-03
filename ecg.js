// ECG Disorders Quiz Data
// Based on סוגי הפרעות באקג

const ecgData = [
    // Sinus Tachycardia
    {
        question: "מהו הקצב האופייני ל-Sinus Tachycardia?",
        options: [
            { text: "מעל 100 פעימות בדקה", correct: true },
            { text: "פחות מ-60 פעימות בדקה", correct: false },
            { text: "60-100 פעימות בדקה", correct: false },
            { text: "מעל 300 פעימות בדקה", correct: false }
        ],
        category: "סינוס טכיקרדיה",
        explanation: "Sinus Tachycardia מאופיין בקצב מעל 100 פעימות בדקה עם קיצוב סדיר."
    },
    {
        question: "מהו הטיפול העיקרי ב-Sinus Tachycardia עם QRS צר?",
        options: [
            { text: "בטא בלוקרס, חוסמי קלציום", correct: true },
            { text: "Defibrillation", correct: false },
            { text: "קוצב לב", correct: false },
            { text: "CPR", correct: false }
        ],
        category: "סינוס טכיקרדיה",
        explanation: "בטא בלוקרס וחוסמי קלציום הם הטיפול העיקרי ב-Sinus Tachycardia עם QRS צר."
    },
    {
        question: "אילו גורמים יכולים לגרום ל-Sinus Tachycardia?",
        options: [
            { text: "סטרס, תרופות, חומרים סטימולנטים, סמים ממרצים", correct: true },
            { text: "שינה עמוקה", correct: false },
            { text: "היפותרמיה", correct: false },
            { text: "חוסמי בטא", correct: false }
        ],
        category: "סינוס טכיקרדיה",
        explanation: "Sinus Tachycardia יכול להיגרם מסטרס גופני או מנטלי, תרופות, חומרים סטימולנטים וסמים ממרצים."
    },

    // Sinus Bradycardia
    {
        question: "מהו הקצב האופייני ל-Sinus Bradycardia?",
        options: [
            { text: "פחות מ-60 פעימות בדקה", correct: true },
            { text: "מעל 100 פעימות בדקה", correct: false },
            { text: "60-100 פעימות בדקה", correct: false },
            { text: "מעל 150 פעימות בדקה", correct: false }
        ],
        category: "סינוס ברדיקרדיה",
        explanation: "Sinus Bradycardia מאופיין בקצב פחות מ-60 פעימות בדקה."
    },
    {
        question: "איזו תרופה ניתנת לטיפול ב-Sinus Bradycardia סימפטומטית?",
        options: [
            { text: "אטרופין", correct: true },
            { text: "אדנוזין", correct: false },
            { text: "דיגוקסין", correct: false },
            { text: "אמיודרון", correct: false }
        ],
        category: "סינוס ברדיקרדיה",
        explanation: "אטרופין לוריד הוא הטיפול הראשוני ב-Sinus Bradycardia סימפטומטית."
    },
    {
        question: "אילו גורמים יכולים לגרום ל-Sinus Bradycardia?",
        options: [
            { text: "שינה, ספורטאים, היפותירואידיזם, חוסמי בטא", correct: true },
            { text: "קפאין וניקוטין", correct: false },
            { text: "חום גבוה", correct: false },
            { text: "היפרתירואידיזם", correct: false }
        ],
        category: "סינוס ברדיקרדיה",
        explanation: "Sinus Bradycardia יכול להיגרם משינה, אצל ספורטאים, היפותירואידיזם, גירוי ואגאלי ותרופות כמו חוסמי בטא."
    },

    // PAC
    {
        question: "מהו המאפיין העיקרי של PAC (Premature Atrial Contraction)?",
        options: [
            { text: "פעימה מוקדמת היוצרת מרווח P-P קצר מקודמיו", correct: true },
            { text: "קיצוב סדיר לחלוטין", correct: false },
            { text: "QRS רחב מאוד", correct: false },
            { text: "היעדר גל P", correct: false }
        ],
        category: "PAC",
        explanation: "PAC מאופיין בפעימה מוקדמת היוצרת מרווח P-P קצר מקודמיו, עם קיצוב לא סדיר."
    },
    {
        question: "מה גורם ל-PAC באוכלוסייה בריאה?",
        options: [
            { text: "קופאין, ניקוטין, אלכוהול", correct: true },
            { text: "אוטם לבבי", correct: false },
            { text: "מחלות מסתמים", correct: false },
            { text: "יתר לחץ דם ריאתי", correct: false }
        ],
        category: "PAC",
        explanation: "באוכלוסייה בריאה, PAC נגרם בדרך כלל מקופאין, ניקוטין ואלכוהול."
    },

    // SVT/AVNRT
    {
        question: "מהו הקצב האופייני ל-SVT (Supra Ventricular Tachycardia)?",
        options: [
            { text: "100-280 פעימות בדקה", correct: true },
            { text: "40-60 פעימות בדקה", correct: false },
            { text: "60-100 פעימות בדקה", correct: false },
            { text: "מעל 400 פעימות בדקה", correct: false }
        ],
        category: "SVT",
        explanation: "SVT מאופיין בקצב של 100-280 פעימות בדקה עם קיצוב סדיר."
    },
    {
        question: "מהו הטיפול הראשוני ל-SVT?",
        options: [
            { text: "תמרוני ואגאליים (עיסוי קרוטידים, שטיפת פנים במים קרים)", correct: true },
            { text: "Defibrillation מיידי", correct: false },
            { text: "קוצב לב", correct: false },
            { text: "ניתוח לב פתוח", correct: false }
        ],
        category: "SVT",
        explanation: "הטיפול הראשוני ב-SVT כולל תמרוני ואגאליים כמו עיסוי קרוטידים, עצירת נשימה ושטיפת פנים במים קרים מאוד."
    },
    {
        question: "איזו תרופה יעילה ב-100% לטיפול ב-SVT?",
        options: [
            { text: "Adenosine", correct: true },
            { text: "Digoxin", correct: false },
            { text: "Aspirin", correct: false },
            { text: "Warfarin", correct: false }
        ],
        category: "SVT",
        explanation: "Adenosine יעיל ב-100% לטיפול ב-SVT, אך יכול לגרום לברדיקרדיה, בחילות והקאות."
    },
    {
        question: "מדוע לא נותנים Digoxin ב-SVT?",
        options: [
            { text: "כי מתחיל להשפיע מאוחר מדי", correct: true },
            { text: "כי הוא גורם לטכיקרדיה", correct: false },
            { text: "כי הוא אסור בהריון", correct: false },
            { text: "כי הוא יקר מדי", correct: false }
        ],
        category: "SVT",
        explanation: "לא נותנים Digoxin ב-SVT כי הוא מתחיל להשפיע מאוחר מדי."
    },

    // Atrial Flutter
    {
        question: "מהו המראה האופייני של גלי P ב-Atrial Flutter?",
        options: [
            { text: "שיני מסור (גלי F)", correct: true },
            { text: "גלי P תקינים", correct: false },
            { text: "היעדר גלי P", correct: false },
            { text: "גלי P גבוהים וחדים", correct: false }
        ],
        category: "רפרוף עליות",
        explanation: "ב-Atrial Flutter רואים גלי P בצורת 'שיני מסור', הנקראים גלי F."
    },
    {
        question: "מהו קצב הגירויים בעליות ב-Atrial Flutter?",
        options: [
            { text: "250-400 פעימות בדקה", correct: true },
            { text: "60-100 פעימות בדקה", correct: false },
            { text: "פחות מ-60 פעימות בדקה", correct: false },
            { text: "מעל 600 פעימות בדקה", correct: false }
        ],
        category: "רפרוף עליות",
        explanation: "ב-Atrial Flutter, הגירויים החשמליים בעליות בקצב של 250-400 פעימות בדקה."
    },
    {
        question: "מהו יחס P:QRS האופייני ב-Atrial Flutter?",
        options: [
            { text: "2:1, 3:1, או 4:1", correct: true },
            { text: "1:1 תמיד", correct: false },
            { text: "אין קשר בין P ל-QRS", correct: false },
            { text: "יותר QRS מגלי P", correct: false }
        ],
        category: "רפרוף עליות",
        explanation: "ב-Atrial Flutter, היחס בין גלי P ל-QRS הוא בדרך כלל 2:1, 3:1 או 4:1."
    },

    // Atrial Fibrillation
    {
        question: "מהו הקיצוב האופייני ב-Atrial Fibrillation?",
        options: [
            { text: "לא סדיר", correct: true },
            { text: "סדיר לחלוטין", correct: false },
            { text: "סדיר עם הפסקות", correct: false },
            { text: "סדיר עם פעימות מוקדמות בלבד", correct: false }
        ],
        category: "פרפור עליות",
        explanation: "Atrial Fibrillation מאופיין בקיצוב לא סדיר."
    },
    {
        question: "מהו קצב העליות ב-Atrial Fibrillation?",
        options: [
            { text: "350-600 פעימות בדקה", correct: true },
            { text: "60-100 פעימות בדקה", correct: false },
            { text: "100-150 פעימות בדקה", correct: false },
            { text: "פחות מ-60 פעימות בדקה", correct: false }
        ],
        category: "פרפור עליות",
        explanation: "ב-Atrial Fibrillation, קצב העליות הוא 350-600 פעימות בדקה."
    },
    {
        question: "איך נראה קו הבסיס ב-Atrial Fibrillation?",
        options: [
            { text: "דשא או רעד בבסיס - גלי P לא מזוהים", correct: true },
            { text: "קו ישר", correct: false },
            { text: "שיני מסור", correct: false },
            { text: "גלי P תקינים וברורים", correct: false }
        ],
        category: "פרפור עליות",
        explanation: "ב-Atrial Fibrillation, גלי P לא מזוהים ונראים כ'דשא' או 'רעד בבסיס'."
    },
    {
        question: "מה חשוב לעשות לפני Cardioversion ב-AF שנמשך יותר מ-48 שעות?",
        options: [
            { text: "אקו לב (TEE) לוודא חוסר קרישי דם בעלייה שמאלית", correct: true },
            { text: "צילום חזה", correct: false },
            { text: "בדיקת שתן", correct: false },
            { text: "אין צורך בבדיקות מקדימות", correct: false }
        ],
        category: "פרפור עליות",
        explanation: "אם עברו יותר מ-48 שעות, חייבים לעשות אקו לב (TEE) לוודא חוסר קרישי דם בעלייה שמאלית."
    },
    {
        question: "מהי תרופת נוגד הקרישה המסורתית לטיפול ב-Atrial Fibrillation?",
        options: [
            { text: "Warfarin (Coumadin)", correct: true },
            { text: "Aspirin בלבד", correct: false },
            { text: "Adenosine", correct: false },
            { text: "Amiodarone", correct: false }
        ],
        category: "פרפור עליות",
        explanation: "Warfarin (Coumadin) עם INR בין 2 ל-3 היא התרופה המסורתית למניעת קרישים ב-AF."
    },
    {
        question: "מהן התרופות החדשות (NOAC/DOAC) לטיפול ב-AF?",
        options: [
            { text: "Xarelto, Eliquis, Pradaxa", correct: true },
            { text: "Aspirin, Plavix", correct: false },
            { text: "Digoxin, Amiodarone", correct: false },
            { text: "Beta blockers", correct: false }
        ],
        category: "פרפור עליות",
        explanation: "התרופות החדשות (NOAC/DOAC) כוללות Xarelto, Eliquis ו-Pradaxa."
    },

    // PVC
    {
        question: "מהם הגורמים העיקריים ל-PVC?",
        options: [
            { text: "קפאין, ניקוטין, אלכוהול, איסכמיה, היפוקלמיה", correct: true },
            { text: "שינה עמוקה בלבד", correct: false },
            { text: "היפותרמיה בלבד", correct: false },
            { text: "תרופות להורדת לחץ דם בלבד", correct: false }
        ],
        category: "PVC",
        explanation: "PVC נגרם מקפאין, ניקוטין, אלכוהול, איסכמיה, היפוקסיה, הפרעות אלקטרוליטים ועוד."
    },
    {
        question: "מהו Bigeminy?",
        options: [
            { text: "לאחר כל QRS תקין מופיע PVC", correct: true },
            { text: "לאחר כל 2 QRS תקינים מופיע PVC", correct: false },
            { text: "לאחר כל 3 QRS תקינים מופיע PVC", correct: false },
            { text: "PVC בודד", correct: false }
        ],
        category: "PVC",
        explanation: "Bigeminy הוא מצב בו לאחר כל קומפלקס תקין של QRS מופיע PVC."
    },
    {
        question: "מהו Trigeminy?",
        options: [
            { text: "לאחר כל 2 QRS תקינים מופיע PVC", correct: true },
            { text: "לאחר כל QRS תקין מופיע PVC", correct: false },
            { text: "לאחר כל 3 QRS תקינים מופיע PVC", correct: false },
            { text: "3 PVCs ברצף", correct: false }
        ],
        category: "PVC",
        explanation: "Trigeminy הוא מצב בו לאחר כל 2 קומפלקסים תקינים של QRS מופיע PVC."
    },
    {
        question: "מהו Quadrigeminy?",
        options: [
            { text: "לאחר כל 3 QRS תקינים מופיע PVC", correct: true },
            { text: "לאחר כל QRS תקין מופיע PVC", correct: false },
            { text: "לאחר כל 2 QRS תקינים מופיע PVC", correct: false },
            { text: "4 PVCs ברצף", correct: false }
        ],
        category: "PVC",
        explanation: "Quadrigeminy הוא מצב בו לאחר כל 3 קומפלקסים תקינים של QRS מופיע PVC."
    },

    // Ventricular Tachycardia
    {
        question: "מהו הקצב האופייני ל-Ventricular Tachycardia?",
        options: [
            { text: "100-200 פעימות בדקה", correct: true },
            { text: "פחות מ-60 פעימות בדקה", correct: false },
            { text: "60-100 פעימות בדקה", correct: false },
            { text: "מעל 400 פעימות בדקה", correct: false }
        ],
        category: "VT",
        explanation: "Ventricular Tachycardia מאופיין בקצב חדרי של 100-200 פעימות בדקה."
    },
    {
        question: "מהו רוחב ה-QRS ב-Ventricular Tachycardia?",
        options: [
            { text: "רחב - מעל 0.12 שניות", correct: true },
            { text: "צר - פחות מ-0.08 שניות", correct: false },
            { text: "תקין - 0.08-0.12 שניות", correct: false },
            { text: "לא ניתן למדוד", correct: false }
        ],
        category: "VT",
        explanation: "ב-VT, ה-QRS רחב עם משך של 0.12 שניות או יותר."
    },
    {
        question: "מה עלול לגרום VT בהמשך?",
        options: [
            { text: "VF (פרפור חדרים)", correct: true },
            { text: "Sinus Bradycardia", correct: false },
            { text: "1st Degree AV Block", correct: false },
            { text: "PAC", correct: false }
        ],
        category: "VT",
        explanation: "VT עלול להתדרדר ל-VF (פרפור חדרים) שהוא מצב מסכן חיים."
    },
    {
        question: "מהו הטיפול ב-VT פולימורפי ללא הכרה?",
        options: [
            { text: "Defibrillation", correct: true },
            { text: "Adenosine", correct: false },
            { text: "תמרוני ואגאליים", correct: false },
            { text: "Digoxin", correct: false }
        ],
        category: "VT",
        explanation: "VT פולימורפי ללא הכרה מטופל ב-Defibrillation."
    },

    // Torsade de Pointes
    {
        question: "מהו Torsade de Pointes?",
        options: [
            { text: "קיצוב מהיר ולא מאורגן של החדר עם התכווצות לא יעילה", correct: true },
            { text: "קיצוב איטי וסדיר", correct: false },
            { text: "רפרוף עליות", correct: false },
            { text: "פרפור עליות", correct: false }
        ],
        category: "Torsade de Pointes",
        explanation: "Torsade de Pointes הוא קיצוב מהיר ולא מאורגן של החדר, הגורם להתכווצות לא יעילה."
    },
    {
        question: "מה הטיפול הנדרש ב-Torsade de Pointes?",
        options: [
            { text: "היפוך קצב חשמלי - סכנת חיים מיידית!", correct: true },
            { text: "מעקב בלבד", correct: false },
            { text: "תרופות פומיות", correct: false },
            { text: "מנוחה במיטה", correct: false }
        ],
        category: "Torsade de Pointes",
        explanation: "Torsade de Pointes הוא סכנת חיים מיידית ומחייב היפוך קצב חשמלי."
    },

    // Ventricular Fibrillation
    {
        question: "מהו הקצב החדרי ב-VF?",
        options: [
            { text: "מעל 300 פעימות בדקה", correct: true },
            { text: "60-100 פעימות בדקה", correct: false },
            { text: "פחות מ-60 פעימות בדקה", correct: false },
            { text: "100-150 פעימות בדקה", correct: false }
        ],
        category: "VF",
        explanation: "ב-VF, הקצב החדרי הוא מעל 300 פעימות בדקה."
    },
    {
        question: "מהו הקיצוב ב-VF?",
        options: [
            { text: "לא סדיר, ללא תבנית ספציפית", correct: true },
            { text: "סדיר לחלוטין", correct: false },
            { text: "סדיר עם הפסקות", correct: false },
            { text: "שיני מסור", correct: false }
        ],
        category: "VF",
        explanation: "VF מאופיין בקיצוב לא סדיר וללא תבנית ספציפית."
    },
    {
        question: "מהו הטיפול הראשוני ב-VF?",
        options: [
            { text: "CPR + Defibrillation", correct: true },
            { text: "Adenosine", correct: false },
            { text: "תמרוני ואגאליים", correct: false },
            { text: "מעקב בלבד", correct: false }
        ],
        category: "VF",
        explanation: "הטיפול הראשוני ב-VF הוא CPR + Defibrillation."
    },
    {
        question: "מהי טמפרטורת ה-Hypothermia המומלצת לאחר החייאה מ-VF?",
        options: [
            { text: "32-34 מעלות", correct: true },
            { text: "36-37 מעלות", correct: false },
            { text: "38-40 מעלות", correct: false },
            { text: "28-30 מעלות", correct: false }
        ],
        category: "VF",
        explanation: "Hypothermia של 32-34 מעלות מומלצת תוך שעה לאחר שיש דופק, למשך 12-24 שעות."
    },

    // Asystole
    {
        question: "מהו Asystole?",
        options: [
            { text: "היעדר פעילות חשמלית בלב - אין קיצוב", correct: true },
            { text: "קצב מהיר מאוד", correct: false },
            { text: "קצב איטי מאוד", correct: false },
            { text: "רפרוף עליות", correct: false }
        ],
        category: "Asystole",
        explanation: "Asystole הוא מצב בו אין פעילות חשמלית בלב."
    },
    {
        question: "מהן ה-H's וה-T's - הסיבות ל-Asystole?",
        options: [
            { text: "Hypoxia, Hypovolemia, Hypothermia, Toxins, Tamponade, Tension pneumothorax", correct: true },
            { text: "קפאין וניקוטין בלבד", correct: false },
            { text: "סטרס נפשי בלבד", correct: false },
            { text: "שינה עמוקה", correct: false }
        ],
        category: "Asystole",
        explanation: "הסיבות ל-Asystole כוללות: Hypoxia, Hypovolemia, חמצת, Hypothermia, Toxins, Tamponade, Tension pneumothorax ועוד."
    },

    // 1st Degree AV Block
    {
        question: "מהו המאפיין העיקרי של 1st Degree AV Block?",
        options: [
            { text: "מרווח PR מעל 0.20 שניות", correct: true },
            { text: "היעדר גלי P", correct: false },
            { text: "QRS רחב מאוד", correct: false },
            { text: "קצב מעל 150 פעימות בדקה", correct: false }
        ],
        category: "AV Block",
        explanation: "ב-1st Degree AV Block, מרווח PR מעל 0.20 שניות אך כל גירוי עובר מהעלייה לחדרים."
    },
    {
        question: "ב-1st Degree AV Block, האם גלי P נראים?",
        options: [
            { text: "כן, גל P בא לפני כל QRS במבנה תקין", correct: true },
            { text: "לא, אין גלי P", correct: false },
            { text: "גלי P רק לפעמים", correct: false },
            { text: "גלי P בצורת שיני מסור", correct: false }
        ],
        category: "AV Block",
        explanation: "ב-1st Degree AV Block, גל P בא לפני כל QRS במבנה תקין."
    },

    // 2nd Degree AV Block Type 1
    {
        question: "מהו המאפיין של 2nd Degree AV Block Type 1 (Wenckebach)?",
        options: [
            { text: "מרווח PR מתארך בכל פעימה עד שיופיע גל P ללא QRS", correct: true },
            { text: "מרווח PR קבוע", correct: false },
            { text: "אין גלי P כלל", correct: false },
            { text: "QRS רחב מאוד", correct: false }
        ],
        category: "AV Block",
        explanation: "ב-Type 1, מרווח PR מתארך בהדרגה עד שיש גל P שאחריו אין QRS (Wenckebach)."
    },
    {
        question: "מהו יחס P:QRS ב-2nd Degree AV Block Type 1?",
        options: [
            { text: "3:2, 4:3, 5:4 וכו'", correct: true },
            { text: "1:1 תמיד", correct: false },
            { text: "אין קשר בין P ל-QRS", correct: false },
            { text: "2:1 תמיד", correct: false }
        ],
        category: "AV Block",
        explanation: "ב-Type 1, יחס P:QRS הוא 3:2, 4:3, 5:4 וכו'."
    },

    // 2nd Degree AV Block Type 2
    {
        question: "מהו המאפיין של 2nd Degree AV Block Type 2?",
        options: [
            { text: "מרווח PR קבוע, אך לא כל גל P מלווה ב-QRS", correct: true },
            { text: "מרווח PR מתארך בהדרגה", correct: false },
            { text: "אין גלי P כלל", correct: false },
            { text: "כל גל P מלווה ב-QRS", correct: false }
        ],
        category: "AV Block",
        explanation: "ב-Type 2, מרווח PR קבוע בגלי P שאחריהם יש QRS, אך לא כל גל P מלווה ב-QRS."
    },
    {
        question: "מהו יחס P:QRS ב-2nd Degree AV Block Type 2?",
        options: [
            { text: "2:1, 3:1, 4:1, 5:1 וכו'", correct: true },
            { text: "1:1 תמיד", correct: false },
            { text: "3:2, 4:3, 5:4", correct: false },
            { text: "אין יחס קבוע", correct: false }
        ],
        category: "AV Block",
        explanation: "ב-Type 2, יחס P:QRS הוא 2:1, 3:1, 4:1, 5:1 וכו'."
    },

    // 3rd Degree AV Block
    {
        question: "מהו 3rd Degree AV Block?",
        options: [
            { text: "חסם מלא - אף גירוי מהעלייה לא עובר לחדרים", correct: true },
            { text: "חסם חלקי - חלק מהגירויים עוברים", correct: false },
            { text: "מרווח PR ארוך בלבד", correct: false },
            { text: "קצב מהיר מאוד", correct: false }
        ],
        category: "AV Block",
        explanation: "3rd Degree AV Block (Complete Heart Block) הוא חסם מלא בו אף גירוי מהעלייה לא עובר לחדרים."
    },
    {
        question: "האם 3rd Degree AV Block מהווה סכנת חיים?",
        options: [
            { text: "כן - מחייב הכנסת קוצב לב", correct: true },
            { text: "לא - מצב שפיר", correct: false },
            { text: "רק אם יש חום", correct: false },
            { text: "רק בקשישים", correct: false }
        ],
        category: "AV Block",
        explanation: "3rd Degree AV Block הוא סכנת חיים ומחייב הכנסת קוצב לב."
    },
    {
        question: "מהו המאפיין של QRS ב-3rd Degree AV Block?",
        options: [
            { text: "לא תקין, רחב, יותר גלי P מקומפלקסים של QRS", correct: true },
            { text: "צר ותקין", correct: false },
            { text: "יחס 1:1 עם גלי P", correct: false },
            { text: "לא ניתן לזהות", correct: false }
        ],
        category: "AV Block",
        explanation: "ב-3rd Degree AV Block, ה-QRS לא תקין ורחב, ויש יותר גלי P מקומפלקסים של QRS."
    },

    // General ECG Questions
    {
        question: "מהו מרווח PR תקין?",
        options: [
            { text: "0.12-0.20 שניות", correct: true },
            { text: "0.04-0.08 שניות", correct: false },
            { text: "0.30-0.40 שניות", correct: false },
            { text: "0.50-0.60 שניות", correct: false }
        ],
        category: "כללי",
        explanation: "מרווח PR תקין הוא בין 0.12 ל-0.20 שניות."
    },
    {
        question: "מהו משך QRS תקין?",
        options: [
            { text: "פחות מ-0.12 שניות", correct: true },
            { text: "מעל 0.20 שניות", correct: false },
            { text: "0.30-0.40 שניות", correct: false },
            { text: "אין גבול עליון", correct: false }
        ],
        category: "כללי",
        explanation: "משך QRS תקין הוא פחות מ-0.12 שניות. מעל זה נחשב רחב ופתולוגי."
    },
    {
        question: "מהו קצב לב תקין במבוגר?",
        options: [
            { text: "60-100 פעימות בדקה", correct: true },
            { text: "40-60 פעימות בדקה", correct: false },
            { text: "100-150 פעימות בדקה", correct: false },
            { text: "150-200 פעימות בדקה", correct: false }
        ],
        category: "כללי",
        explanation: "קצב לב תקין במבוגר הוא 60-100 פעימות בדקה."
    }
];
