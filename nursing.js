// חידון סיעודי - בדיקות מעבדה ומתן חמצן
const nursingData = [
    // ==================== ספירת דם ====================
    {
        question: "מהו הטווח התקין של המוגלובין (Hb) בגברים?",
        options: [
            { text: "14-18 gr/dL", correct: true },
            { text: "12-16 gr/dL", correct: false },
            { text: "10-14 gr/dL", correct: false },
            { text: "16-20 gr/dL", correct: false }
        ],
        category: "ספירת דם",
        explanation: "ערכי המוגלובין תקינים בגברים הם 14-18 gr/dL. המוגלובין אחראי על נשיאת חמצן בדם."
    },
    {
        question: "מהו הטווח התקין של המוגלובין (Hb) בנשים?",
        options: [
            { text: "12-16 gr/dL", correct: true },
            { text: "14-18 gr/dL", correct: false },
            { text: "10-14 gr/dL", correct: false },
            { text: "16-20 gr/dL", correct: false }
        ],
        category: "ספירת דם",
        explanation: "ערכי המוגלובין תקינים בנשים הם 12-16 gr/dL, נמוכים מעט מגברים."
    },
    {
        question: "מהו הטווח התקין של תאי דם אדומים (RBC) בגברים?",
        options: [
            { text: "4.7-6.1 mill/µL", correct: true },
            { text: "4.2-5.4 mill/µL", correct: false },
            { text: "3.5-5.0 mill/µL", correct: false },
            { text: "5.0-7.0 mill/µL", correct: false }
        ],
        category: "ספירת דם",
        explanation: "הטווח התקין של RBC בגברים הוא 4.7-6.1 מיליון תאים למיקרוליטר."
    },
    {
        question: "מה מציין MCV?",
        options: [
            { text: "נפח (גודל) תאי דם אדומים", correct: true },
            { text: "ריכוז המוגלובין בתא", correct: false },
            { text: "מספר טסיות הדם", correct: false },
            { text: "מספר תאי דם לבנים", correct: false }
        ],
        category: "ספירת דם",
        explanation: "MCV (Mean Corpuscular Volume) מציין את הנפח הממוצע של תאי דם אדומים, נמדד ב-fL (פמטוליטר)."
    },
    {
        question: "מהו הטווח התקין של MCV?",
        options: [
            { text: "80-96 fL", correct: true },
            { text: "60-80 fL", correct: false },
            { text: "96-110 fL", correct: false },
            { text: "70-90 fL", correct: false }
        ],
        category: "ספירת דם",
        explanation: "הטווח התקין של MCV הוא 80-96 fL. ערך נמוך מעיד על מיקרוציטוזיס, ערך גבוה על מקרוציטוזיס."
    },
    {
        question: "מה מציין MCH?",
        options: [
            { text: "תכולת המוגלובין בתא (צבע הכדוריות)", correct: true },
            { text: "נפח תאי דם אדומים", correct: false },
            { text: "ריכוז המוגלובין הכללי", correct: false },
            { text: "התפלגות גודל תאי דם", correct: false }
        ],
        category: "ספירת דם",
        explanation: "MCH (Mean Corpuscular Hemoglobin) מציין את תכולת ההמוגלובין הממוצעת בתא. הצבע נקבע על ידי כמות הברזל על הכדורית."
    },
    {
        question: "מהו הטווח התקין של MCH?",
        options: [
            { text: "27-31 pg", correct: true },
            { text: "20-25 pg", correct: false },
            { text: "32-38 pg", correct: false },
            { text: "15-22 pg", correct: false }
        ],
        category: "ספירת דם",
        explanation: "הטווח התקין של MCH הוא 27-31 פיקוגרם לתא."
    },
    {
        question: "מהו הטווח התקין של טסיות (PLT)?",
        options: [
            { text: "130,000-450,000/µL", correct: true },
            { text: "50,000-200,000/µL", correct: false },
            { text: "200,000-500,000/µL", correct: false },
            { text: "100,000-300,000/µL", correct: false }
        ],
        category: "ספירת דם",
        explanation: "הטווח התקין של טסיות הוא 130,000-450,000 תאים למיקרוליטר."
    },
    {
        question: "מהו הטווח התקין של תאי דם לבנים (WBC)?",
        options: [
            { text: "4,800-10,800/µL", correct: true },
            { text: "3,000-8,000/µL", correct: false },
            { text: "6,000-15,000/µL", correct: false },
            { text: "2,000-6,000/µL", correct: false }
        ],
        category: "ספירת דם",
        explanation: "הטווח התקין של WBC הוא 4,800-10,800 תאים למיקרוליטר."
    },
    {
        question: "מהו האחוז התקין של נויטרופילים (NET)?",
        options: [
            { text: "48-73%", correct: true },
            { text: "20-40%", correct: false },
            { text: "30-50%", correct: false },
            { text: "60-90%", correct: false }
        ],
        category: "ספירת דם",
        explanation: "האחוז התקין של נויטרופילים הוא 48-73%. הם אחראיים בעיקר על מאבק בזיהומים חיידקיים."
    },
    {
        question: "מהו האחוז התקין של לימפוציטים (LYB)?",
        options: [
            { text: "18-48%", correct: true },
            { text: "5-15%", correct: false },
            { text: "50-70%", correct: false },
            { text: "10-25%", correct: false }
        ],
        category: "ספירת דם",
        explanation: "האחוז התקין של לימפוציטים הוא 18-48%."
    },
    {
        question: "ירידה ב-Hb יכולה להיגרם על ידי:",
        options: [
            { text: "אנמיה, דימום, המוליזה, חוסר ברזל/B12/חומצה פולית", correct: true },
            { text: "התייבשות, פוליציטמיה, היפוקסיה", correct: false },
            { text: "עישון, שהייה בגובה, מחלת ריאות כרונית", correct: false },
            { text: "דלקת, זיהום, סטרואידים", correct: false }
        ],
        category: "ספירת דם",
        explanation: "ירידה בהמוגלובין נגרמת מאנמיה, דימום, המוליזה, או חסר של ברזל/B12/חומצה פולית. התוצאה: ירידה בנשיאת חמצן, עייפות, חולשה, חיוורון, טכיקרדיה וקוצר נשימה."
    },
    {
        question: "עלייה ב-Hb יכולה להיגרם על ידי:",
        options: [
            { text: "התייבשות, פוליציטמיה, היפוקסיה, עישון", correct: true },
            { text: "אנמיה, דימום, המוליזה", correct: false },
            { text: "חוסר ברזל, חוסר B12", correct: false },
            { text: "כימותרפיה, זיהומים ויראליים", correct: false }
        ],
        category: "ספירת דם",
        explanation: "עלייה בהמוגלובין נגרמת מהתייבשות, מחלת ריאות כרונית, פוליציטמיה, היפוקסיה, עישון או שהייה בגובה. התוצאה: דם סמיך, סיכון לקרישיות."
    },
    {
        question: "מהי הנוסחה לחישוב רמת המטוקרית מרמת ההמוגלובין?",
        options: [
            { text: "רמת המוגלובין × 3 = רמת המטוקרית", correct: true },
            { text: "רמת המוגלובין × 2 = רמת המטוקרית", correct: false },
            { text: "רמת המוגלובין ÷ 3 = רמת המטוקרית", correct: false },
            { text: "רמת המוגלובין + 10 = רמת המטוקרית", correct: false }
        ],
        category: "ספירת דם",
        explanation: "בנורמה, מספר כדוריות הדם האדומות × 3 = רמת ההמוגלובין, ורמת ההמוגלובין × 3 = רמת ההמטוקרית."
    },
    {
        question: "ירידה ב-MCV מעידה על:",
        options: [
            { text: "אנמיה מיקרוציטית (תאי דם קטנים)", correct: true },
            { text: "אנמיה מקרוציטית (תאי דם גדולים)", correct: false },
            { text: "פוליציטמיה", correct: false },
            { text: "לויקוציטוזיס", correct: false }
        ],
        category: "ספירת דם",
        explanation: "MCV נמוך מעיד על אנמיה מיקרוציטית - תאי דם קטנים מהרגיל. גורמים: חסר ברזל, תלסמיה. אם ההפרעה בגודל - חסר ויטמינים כמו חומצה פולית."
    },
    {
        question: "עלייה ב-MCV מעידה על:",
        options: [
            { text: "אנמיה מקרוציטית (תאי דם גדולים)", correct: true },
            { text: "אנמיה מיקרוציטית (תאי דם קטנים)", correct: false },
            { text: "טרומבוציטופניה", correct: false },
            { text: "נויטרופיליה", correct: false }
        ],
        category: "ספירת דם",
        explanation: "MCV גבוה מעיד על אנמיה מקרוציטית - תאי דם גדולים מהרגיל. גורמים: חסר B12, חסר חומצה פולית, מחלת כבד, אלכוהוליזם."
    },
    {
        question: "ירידה ב-MCH (תכולת המוגלובין נמוכה) מעידה על:",
        options: [
            { text: "היפוכרומיה - כדוריות חיוורות עקב חסר ברזל", correct: true },
            { text: "מקרוציטוזיס - תאים גדולים", correct: false },
            { text: "פוליציטמיה", correct: false },
            { text: "לויקוציטוזיס", correct: false }
        ],
        category: "ספירת דם",
        explanation: "MCH נמוך מעיד על היפוכרומיה - פחות המוגלובין בכל תא, הכדוריות נראות חיוורות. הגורם העיקרי: חסר ברזל. אם חסר צבע - חסר ברזל."
    },
    {
        question: "מה מציין RDW?",
        options: [
            { text: "התפלגות גודל תאי דם אדומים", correct: true },
            { text: "ריכוז המוגלובין הכללי", correct: false },
            { text: "נפח טסיות הדם", correct: false },
            { text: "מספר רטיקולוציטים", correct: false }
        ],
        category: "ספירת דם",
        explanation: "RDW (Red Cell Distribution Width) מציין את מידת השוני בגדלי תאי הדם האדומים. טווח תקין: 9-14.5%."
    },
    {
        question: "עלייה ב-RDW מעידה על:",
        options: [
            { text: "אניסוציטוזיס - שוני בגדלי תאי הדם האדומים", correct: true },
            { text: "תאים אחידים בגודלם", correct: false },
            { text: "פוליציטמיה", correct: false },
            { text: "לויקופניה", correct: false }
        ],
        category: "ספירת דם",
        explanation: "RDW גבוה מעיד על אניסוציטוזיס - חוסר אחידות בגדלי תאי הדם האדומים. גורמים: חסר ברזל, חסר B12, חסר פולאט, אנמיה מעורבת."
    },
    {
        question: "ירידה בטסיות (PLT) נקראת:",
        options: [
            { text: "טרומבוציטופניה", correct: true },
            { text: "טרומבוציטוזיס", correct: false },
            { text: "לויקופניה", correct: false },
            { text: "נויטרופניה", correct: false }
        ],
        category: "ספירת דם",
        explanation: "טרומבוציטופניה היא ירידה במספר הטסיות, הגורמת לדימום, פטכיות ושטפי דם."
    },
    {
        question: "עלייה בטסיות (PLT) נקראת:",
        options: [
            { text: "טרומבוציטוזיס", correct: true },
            { text: "טרומבוציטופניה", correct: false },
            { text: "לויקוציטוזיס", correct: false },
            { text: "נויטרופיליה", correct: false }
        ],
        category: "ספירת דם",
        explanation: "טרומבוציטוזיס היא עלייה במספר הטסיות, שעלולה לגרום לקרישיות יתר. גורמים: דלקת, זיהום, אחרי דימום, חוסר ברזל."
    },
    {
        question: "מה עלול לגרום לירידה בטסיות (PLT)?",
        options: [
            { text: "כשל מח עצם, כימותרפיה, DIC, היפרספלניזם", correct: true },
            { text: "דלקת, זיהום, חוסר ברזל", correct: false },
            { text: "התייבשות, פוליציטמיה", correct: false },
            { text: "סטרואידים, סטרס", correct: false }
        ],
        category: "ספירת דם",
        explanation: "ירידה בטסיות נגרמת מכשל מח עצם, כימותרפיה, זיהומים ויראליים, DIC והיפרספלניזם (פעילות יתר של הטחול)."
    },
    {
        question: "מהו הטווח התקין של MPV (נפח טסיות)?",
        options: [
            { text: "7-11 fL", correct: true },
            { text: "3-5 fL", correct: false },
            { text: "12-18 fL", correct: false },
            { text: "15-25 fL", correct: false }
        ],
        category: "ספירת דם",
        explanation: "הטווח התקין של MPV הוא 7-11 fL. MPV גבוה מעיד על טסיות גדולות וצעירות."
    },
    {
        question: "עלייה ב-WBC נקראת:",
        options: [
            { text: "לויקוציטוזיס", correct: true },
            { text: "לויקופניה", correct: false },
            { text: "טרומבוציטוזיס", correct: false },
            { text: "נויטרופניה", correct: false }
        ],
        category: "ספירת דם",
        explanation: "לויקוציטוזיס היא עלייה בתאי דם לבנים, המעידה על תגובה חיסונית מוגברת, חשד לזיהום או ממאירות."
    },
    {
        question: "ירידה ב-WBC נקראת:",
        options: [
            { text: "לויקופניה", correct: true },
            { text: "לויקוציטוזיס", correct: false },
            { text: "נויטרופיליה", correct: false },
            { text: "טרומבוציטופניה", correct: false }
        ],
        category: "ספירת דם",
        explanation: "לויקופניה היא ירידה בתאי דם לבנים, הגורמת לנטייה לזיהומים. גורמים: זיהומים ויראליים, תרופות, כשל מח עצם, כימותרפיה."
    },
    {
        question: "מה עלול לגרום לעלייה ב-WBC?",
        options: [
            { text: "זיהום, דלקת, סטרס, סטרואידים, לוקמיה", correct: true },
            { text: "זיהומים ויראליים, כימותרפיה", correct: false },
            { text: "כשל מח עצם, תרופות", correct: false },
            { text: "HIV, כשל חיסוני", correct: false }
        ],
        category: "ספירת דם",
        explanation: "עלייה ב-WBC נגרמת מזיהום, דלקת, סטרס, סטרואידים או לוקמיה."
    },
    {
        question: "עלייה בנויטרופילים מעידה בעיקר על:",
        options: [
            { text: "זיהום חיידקי או דלקת חריפה", correct: true },
            { text: "זיהום ויראלי", correct: false },
            { text: "תגובה אלרגית", correct: false },
            { text: "זיהום טפילי", correct: false }
        ],
        category: "ספירת דם",
        explanation: "נויטרופיליה (עלייה בנויטרופילים) מעידה על זיהום חיידקי, דלקת חריפה, סטרס, סטרואידים או עישון."
    },
    {
        question: "עלייה בלימפוציטים מעידה בעיקר על:",
        options: [
            { text: "זיהום ויראלי או תגובה לימפופרוליפרטיבית", correct: true },
            { text: "זיהום חיידקי חריף", correct: false },
            { text: "תגובה אלרגית", correct: false },
            { text: "זיהום טפילי", correct: false }
        ],
        category: "ספירת דם",
        explanation: "לימפוציטוזיס (עלייה בלימפוציטים) מעידה על זיהום ויראלי, CLL או שעלת."
    },
    {
        question: "עלייה באאוזינופילים מעידה בעיקר על:",
        options: [
            { text: "אלרגיה, אסתמה, טפילים", correct: true },
            { text: "זיהום חיידקי", correct: false },
            { text: "זיהום ויראלי", correct: false },
            { text: "כשל מח עצם", correct: false }
        ],
        category: "ספירת דם",
        explanation: "אאוזינופיליה מעידה על אלרגיה, אסתמה, טפילים, מחלות עור או תגובה לתרופות."
    },
    {
        question: "מהו הטווח התקין של רטיקולוציטים?",
        options: [
            { text: "25,000-75,000/µL", correct: true },
            { text: "5,000-15,000/µL", correct: false },
            { text: "100,000-200,000/µL", correct: false },
            { text: "50,000-150,000/µL", correct: false }
        ],
        category: "ספירת דם",
        explanation: "הטווח התקין של רטיקולוציטים (תאי דם אדומים צעירים) הוא 25,000-75,000/µL. עלייה מעידה על ייצור מוגבר של תאי דם אדומים."
    },
    {
        question: "אצל אדם מיובש (דהידרציה), מה קורה לרמות ההמוגלובין וההמטוקרית?",
        options: [
            { text: "עולות", correct: true },
            { text: "יורדות", correct: false },
            { text: "לא משתנות", correct: false },
            { text: "המוגלובין עולה והמטוקרית יורדת", correct: false }
        ],
        category: "ספירת דם",
        explanation: "אצל אדם מיובש ההמוגלובין וההמטוקרית עולים בגלל ריכוז הדם. אם האדם מדולל (שתה/קיבל הרבה נוזלים) הם יורדים."
    },
    {
        question: "מהו האחוז התקין של מונוציטים (MON)?",
        options: [
            { text: "0-9%", correct: true },
            { text: "10-20%", correct: false },
            { text: "15-30%", correct: false },
            { text: "5-15%", correct: false }
        ],
        category: "ספירת דם",
        explanation: "האחוז התקין של מונוציטים הוא 0-9%. מונוציטוזיס מעידה על זיהומים כרוניים או מחלות דלקתיות."
    },
    {
        question: "מהו האחוז התקין של בזופילים (BASO)?",
        options: [
            { text: "0-2%", correct: true },
            { text: "5-10%", correct: false },
            { text: "3-8%", correct: false },
            { text: "0-5%", correct: false }
        ],
        category: "ספירת דם",
        explanation: "האחוז התקין של בזופילים הוא 0-2%. בזופיליה עשויה להעיד על אלרגיה או מחלות מיאלופרוליפרטיביות."
    },
    {
        question: "מהו הטווח התקין של המטוקרית (HCT) בגברים?",
        options: [
            { text: "42-53%", correct: true },
            { text: "37-47%", correct: false },
            { text: "30-40%", correct: false },
            { text: "50-60%", correct: false }
        ],
        category: "ספירת דם",
        explanation: "הטווח התקין של המטוקרית בגברים הוא 42-53%. המטוקרית מייצגת את החלק היחסי של תאי דם אדומים מנפח הדם."
    },
    {
        question: "מהו הטווח התקין של MCHC (ריכוז המוגלובין)?",
        options: [
            { text: "32-36 gr/dL", correct: true },
            { text: "27-31 gr/dL", correct: false },
            { text: "20-25 gr/dL", correct: false },
            { text: "38-42 gr/dL", correct: false }
        ],
        category: "ספירת דם",
        explanation: "הטווח התקין של MCHC הוא 32-36 gr/dL. ירידה מעידה על היפוכרומיה, בעיקר עקב חסר ברזל."
    },
    {
        question: "מהו האחוז התקין של אאוזינופילים (ESO)?",
        options: [
            { text: "0-5%", correct: true },
            { text: "5-10%", correct: false },
            { text: "10-20%", correct: false },
            { text: "0-2%", correct: false }
        ],
        category: "ספירת דם",
        explanation: "האחוז התקין של אאוזינופילים הוא 0-5%."
    },
    {
        question: "אצל אדם אנמי עם MCV נמוך, מהי ההפרעה הסבירה?",
        options: [
            { text: "חסר ברזל או תלסמיה", correct: true },
            { text: "חסר ויטמין B12", correct: false },
            { text: "חסר חומצה פולית", correct: false },
            { text: "מחלת כבד", correct: false }
        ],
        category: "ספירת דם",
        explanation: "MCV נמוך מעיד על אנמיה מיקרוציטית. הגורמים העיקריים: חסר ברזל ותלסמיה. אם ההפרעה בגודל - חסר ויטמינים."
    },
    {
        question: "אצל אדם אנמי עם MCH נמוך, מהי ההפרעה הסבירה?",
        options: [
            { text: "חסר ברזל - היפוכרומיה", correct: true },
            { text: "חסר ויטמין B12", correct: false },
            { text: "מחלת כבד", correct: false },
            { text: "התייבשות", correct: false }
        ],
        category: "ספירת דם",
        explanation: "MCH נמוך מעיד על היפוכרומיה - פחות המוגלובין בתא, כדוריות אדומות נראות חיוורות. אם חסר צבע - חסר ברזל."
    },
    // ==================== תפקודי קרישה ====================
    {
        question: "מהו הטווח התקין של PT (זמן פרותרומבין)?",
        options: [
            { text: "11-13.5 שניות", correct: true },
            { text: "8-10 שניות", correct: false },
            { text: "15-20 שניות", correct: false },
            { text: "25-35 שניות", correct: false }
        ],
        category: "תפקודי קרישה",
        explanation: "הטווח התקין של PT הוא 11-13.5 שניות. PT מודד את מסלול הקרישה החיצוני."
    },
    {
        question: "PT מודד את:",
        options: [
            { text: "מסלול הקרישה החיצוני", correct: true },
            { text: "מסלול הקרישה הפנימי", correct: false },
            { text: "מסלול הקרישה המשותף", correct: false },
            { text: "תפקוד הטסיות", correct: false }
        ],
        category: "תפקודי קרישה",
        explanation: "PT (Prothrombin Time) מודד את מסלול הקרישה החיצוני."
    },
    {
        question: "מהו הטווח התקין של INR באדם בריא?",
        options: [
            { text: "0.8-1.1", correct: true },
            { text: "2.0-3.0", correct: false },
            { text: "1.5-2.5", correct: false },
            { text: "0.5-0.7", correct: false }
        ],
        category: "תפקודי קרישה",
        explanation: "INR תקין באדם בריא הוא 0.8-1.1. INR מהווה יחס בין PT של המטופל ל-PT של האוכלוסייה."
    },
    {
        question: "מהו טווח ה-INR הרצוי במטופלים הנוטלים קומדין (Warfarin)?",
        options: [
            { text: "2.0-3.0", correct: true },
            { text: "0.8-1.1", correct: false },
            { text: "3.5-4.5", correct: false },
            { text: "1.0-2.0", correct: false }
        ],
        category: "תפקודי קרישה",
        explanation: "בחולים הנוטלים קומדין (Warfarin), טווח ה-INR הרצוי הוא 2.0-3.0."
    },
    {
        question: "מהו הטווח התקין של aPTT?",
        options: [
            { text: "25-35 שניות", correct: true },
            { text: "11-13.5 שניות", correct: false },
            { text: "40-60 שניות", correct: false },
            { text: "15-20 שניות", correct: false }
        ],
        category: "תפקודי קרישה",
        explanation: "הטווח התקין של aPTT הוא 25-35 שניות. aPTT מודד את מסלול הקרישה הפנימי."
    },
    {
        question: "aPTT מודד את:",
        options: [
            { text: "מסלול הקרישה הפנימי", correct: true },
            { text: "מסלול הקרישה החיצוני", correct: false },
            { text: "מסלול הקרישה המשותף", correct: false },
            { text: "מספר הטסיות", correct: false }
        ],
        category: "תפקודי קרישה",
        explanation: "aPTT (Activated Partial Thromboplastin Time) מודד את מסלול הקרישה הפנימי."
    },
    {
        question: "מהו הטווח התקין של פיברינוגן?",
        options: [
            { text: "200-400 mg/dL", correct: true },
            { text: "100-200 mg/dL", correct: false },
            { text: "400-600 mg/dL", correct: false },
            { text: "50-150 mg/dL", correct: false }
        ],
        category: "תפקודי קרישה",
        explanation: "הטווח התקין של פיברינוגן הוא 200-400 מ\"ג/ד\"ל."
    },
    {
        question: "עלייה ב-PT/INR מעידה על:",
        options: [
            { text: "סיכון מוגבר לדימום - זמן קרישה ממושך", correct: true },
            { text: "סיכון מוגבר לקרישים", correct: false },
            { text: "תפקוד קרישה תקין", correct: false },
            { text: "עלייה בטסיות", correct: false }
        ],
        category: "תפקודי קרישה",
        explanation: "עלייה ב-PT/INR מעידה על זמן קרישה ממושך וסיכון מוגבר לדימום. גורמים: חסר ויטמין K, מחלת כבד, קומדין, DIC."
    },
    {
        question: "מה גורם לעלייה ב-PT?",
        options: [
            { text: "חסר ויטמין K, מחלת כבד, קומדין, DIC", correct: true },
            { text: "התייבשות, עלייה בטסיות", correct: false },
            { text: "סטרס, סטרואידים", correct: false },
            { text: "דלקת, הריון", correct: false }
        ],
        category: "תפקודי קרישה",
        explanation: "עלייה ב-PT נגרמת מחסר ויטמין K, מחלת כבד, טיפול בקומדין (Warfarin) או DIC."
    },
    {
        question: "INR מהווה:",
        options: [
            { text: "יחס בין PT של המטופל ל-PT של האוכלוסייה", correct: true },
            { text: "יחס בין aPTT של המטופל לנורמה", correct: false },
            { text: "מדד לתפקוד טסיות", correct: false },
            { text: "ריכוז פיברינוגן בדם", correct: false }
        ],
        category: "תפקודי קרישה",
        explanation: "INR (International Normalized Ratio) מהווה יחס בינלאומי מנורמל בין תוצאת ה-PT של המטופל לעומת ה-PT של האוכלוסייה."
    },
    {
        question: "מה גורם לעלייה ב-aPTT?",
        options: [
            { text: "הפרין, המופיליה, חוסר פקטורי קרישה, DIC", correct: true },
            { text: "קומדין, חסר ויטמין K", correct: false },
            { text: "סטרואידים, סטרס", correct: false },
            { text: "דלקת, זיהום", correct: false }
        ],
        category: "תפקודי קרישה",
        explanation: "עלייה ב-aPTT נגרמת מהפרין, המופיליה, חוסר פקטורי קרישה, DIC או נוגדן לופוס."
    },
    {
        question: "ירידה בפיברינוגן עלולה לגרום ל:",
        options: [
            { text: "פגיעה ביצירת קריש ונטייה לדימום", correct: true },
            { text: "קרישיות מוגברת", correct: false },
            { text: "היפרקלצמיה", correct: false },
            { text: "לויקוציטוזיס", correct: false }
        ],
        category: "תפקודי קרישה",
        explanation: "ירידה בפיברינוגן פוגעת ביצירת קריש וגורמת לנטייה לדימום. גורמים: מחלת כבד, DIC, צריכה מוגברת של פקטורי קרישה."
    },
    // ==================== כימיה ====================
    {
        question: "מהו הטווח התקין של גלוקוז (סוכר) בדם?",
        options: [
            { text: "60-110 mg/dL", correct: true },
            { text: "80-150 mg/dL", correct: false },
            { text: "40-80 mg/dL", correct: false },
            { text: "100-180 mg/dL", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של גלוקוז בדם הוא 60-110 mg/dL."
    },
    {
        question: "היפוגליקמיה מתבטאת ב:",
        options: [
            { text: "הזעה, רעד, בלבול, פרכוסים, ירידה בהכרה", correct: true },
            { text: "פוליאוריה, צמא, DKA", correct: false },
            { text: "בצקות, עלייה במשקל", correct: false },
            { text: "כאבי ראש, חום גבוה", correct: false }
        ],
        category: "כימיה",
        explanation: "היפוגליקמיה (סוכר נמוך) מתבטאת בהזעה, רעד, בלבול, פרכוסים וירידה בהכרה. גורמים: עודף אינסולין, צום, אלכוהול, ספסיס."
    },
    {
        question: "היפרגליקמיה מתבטאת ב:",
        options: [
            { text: "פוליאוריה, צמא, DKA/HHS", correct: true },
            { text: "הזעה, רעד, בלבול", correct: false },
            { text: "בצקות, קוצר נשימה", correct: false },
            { text: "כאבי שרירים, חולשה כללית", correct: false }
        ],
        category: "כימיה",
        explanation: "היפרגליקמיה (סוכר גבוה) מתבטאת בפוליאוריה, צמא, DKA (חמצת קטוטית סוכרתית) או HHS (מצב היפרגליקמי היפראוסמולרי). גורמים: סוכרת, סטרס, סטרואידים, זיהום."
    },
    {
        question: "מהו הטווח התקין של אוריאה (Urea)?",
        options: [
            { text: "19-45 mg/dL", correct: true },
            { text: "5-15 mg/dL", correct: false },
            { text: "50-80 mg/dL", correct: false },
            { text: "10-30 mg/dL", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של אוריאה הוא 19-45 mg/dL. אוריאה היא תוצר פסולת של פירוק חלבונים."
    },
    {
        question: "אוריאה היא תוצר פסולת של:",
        options: [
            { text: "פירוק חלבונים", correct: true },
            { text: "פירוק שומנים", correct: false },
            { text: "פירוק סוכרים", correct: false },
            { text: "פירוק שריר", correct: false }
        ],
        category: "כימיה",
        explanation: "אוריאה היא תוצר פסולת של פירוק חלבונים. עלייה באוריאה (אזוטמיה) עשויה להעיד על אי ספיקת כליות, התייבשות, דימום במערכת העיכול או פירוק חלבון מוגבר."
    },
    {
        question: "מהו הטווח התקין של קריאטינין (Creatinine)?",
        options: [
            { text: "0.8-1.2 mg/dL", correct: true },
            { text: "0.3-0.6 mg/dL", correct: false },
            { text: "1.5-2.5 mg/dL", correct: false },
            { text: "2.0-3.5 mg/dL", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של קריאטינין הוא 0.8-1.2 mg/dL. קריאטינין הוא תוצר פסולת של פירוק קריאטין פוספט בשרירים."
    },
    {
        question: "עלייה בקריאטינין מעידה בעיקר על:",
        options: [
            { text: "ירידה בתפקוד כלייתי", correct: true },
            { text: "מחלת כבד", correct: false },
            { text: "בעיית לב", correct: false },
            { text: "דלקת כללית", correct: false }
        ],
        category: "כימיה",
        explanation: "עלייה בקריאטינין מעידה על ירידה בתפקוד כלייתי. גורמים נוספים: התייבשות, חסימת שתן, תמס שריר (רבדומיוליזיס)."
    },
    {
        question: "מהו הטווח התקין של נתרן (Sodium)?",
        options: [
            { text: "135-145 mmol/L", correct: true },
            { text: "120-130 mmol/L", correct: false },
            { text: "145-155 mmol/L", correct: false },
            { text: "130-140 mmol/L", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של נתרן הוא 135-145 mmol/L."
    },
    {
        question: "היפונתרמיה מתבטאת ב:",
        options: [
            { text: "בלבול, כאב ראש, פרכוסים, בצקת מוחית", correct: true },
            { text: "יובש, צמא, פגיעה נוירולוגית", correct: false },
            { text: "חולשת שרירים, הפרעות קצב", correct: false },
            { text: "כאבי בטן, עצירות", correct: false }
        ],
        category: "כימיה",
        explanation: "היפונתרמיה (נתרן נמוך) מתבטאת בבלבול, כאב ראש, פרכוסים ובצקת מוחית. גורמים: אי ספיקת לב, SIADH, הקאות, שלשולים, עודף מים."
    },
    {
        question: "היפרנתרמיה נגרמת בעיקר מ:",
        options: [
            { text: "התייבשות, סכרת תפלה, איבוד מים", correct: true },
            { text: "אי ספיקת לב, SIADH, הקאות", correct: false },
            { text: "עודף מים, שלשולים", correct: false },
            { text: "אי ספיקת כליות", correct: false }
        ],
        category: "כימיה",
        explanation: "היפרנתרמיה (נתרן גבוה) נגרמת מהתייבשות, סכרת תפלה ואיבוד מים. מתבטאת בבלבול, יובש ופגיעה נוירולוגית."
    },
    {
        question: "מהו הטווח התקין של אשלגן (Potassium)?",
        options: [
            { text: "3.5-5.3 mmol/L", correct: true },
            { text: "2.0-3.0 mmol/L", correct: false },
            { text: "5.5-7.0 mmol/L", correct: false },
            { text: "4.0-6.0 mmol/L", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של אשלגן הוא 3.5-5.3 mmol/L."
    },
    {
        question: "היפוקלמיה מתבטאת ב:",
        options: [
            { text: "חולשת שרירים, עצירות, הפרעות קצב", correct: true },
            { text: "הפרעות קצב מסכנות חיים בלבד", correct: false },
            { text: "בלבול ופרכוסים", correct: false },
            { text: "טטניה ונימול", correct: false }
        ],
        category: "כימיה",
        explanation: "היפוקלמיה (אשלגן נמוך) מתבטאת בחולשת שרירים, עצירות והפרעות קצב. גורמים: משתנים, הקאות, שלשולים, אינסולין, אלקלוזיס."
    },
    {
        question: "היפרקלמיה מתבטאת ב:",
        options: [
            { text: "הפרעות קצב מסכנות חיים וחולשת שרירים", correct: true },
            { text: "עצירות וחולשה קלה בלבד", correct: false },
            { text: "בצקות ועלייה במשקל", correct: false },
            { text: "כאבי בטן ושלשולים", correct: false }
        ],
        category: "כימיה",
        explanation: "היפרקלמיה (אשלגן גבוה) מתבטאת בהפרעות קצב מסכנות חיים וחולשת שרירים. גורמים: אי ספיקת כליות, המוליזה, DKA, חמצת."
    },
    {
        question: "מהו הטווח התקין של סידן (Calcium)?",
        options: [
            { text: "8.5-10.3 mg/dL", correct: true },
            { text: "6.0-8.0 mg/dL", correct: false },
            { text: "10.5-12.5 mg/dL", correct: false },
            { text: "7.0-9.0 mg/dL", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של סידן הוא 8.5-10.3 mg/dL."
    },
    {
        question: "היפוקלצמיה מתבטאת ב:",
        options: [
            { text: "טטניה, פרסטזיות, פרכוסים, הארכת QT", correct: true },
            { text: "אבנים, עצירות, כאבי בטן, בלבול", correct: false },
            { text: "חולשת שרירים, הפרעות קצב", correct: false },
            { text: "פוליאוריה וצמא", correct: false }
        ],
        category: "כימיה",
        explanation: "היפוקלצמיה (סידן נמוך) מתבטאת בטטניה, פרסטזיות, פרכוסים והארכת QT. גורמים: חוסר ויטמין D, היפופאראתירואידיזם, אי ספיקת כליות."
    },
    {
        question: "היפרקלצמיה מתבטאת ב:",
        options: [
            { text: "אבנים, עצירות, כאבי בטן, בלבול, הפרעות קצב", correct: true },
            { text: "טטניה, פרסטזיות, פרכוסים", correct: false },
            { text: "חולשת שרירים ונימול", correct: false },
            { text: "בצקות וקוצר נשימה", correct: false }
        ],
        category: "כימיה",
        explanation: "היפרקלצמיה (סידן גבוה) מתבטאת באבנים, עצירות, כאבי בטן, בלבול והפרעות קצב. גורמים: היפרפאראתירואידיזם, ממאירות, עודף ויטמין D."
    },
    {
        question: "מהו הטווח התקין של כולסטרול?",
        options: [
            { text: "110-200 mg/dL", correct: true },
            { text: "150-250 mg/dL", correct: false },
            { text: "200-300 mg/dL", correct: false },
            { text: "80-150 mg/dL", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של כולסטרול הוא 110-200 mg/dL."
    },
    {
        question: "מהי הרמה הרצויה של LDL (כולסטרול רע) בחולה סוכרתי?",
        options: [
            { text: "מתחת ל-100 mg/dL", correct: true },
            { text: "מתחת ל-200 mg/dL", correct: false },
            { text: "מתחת ל-70 mg/dL", correct: false },
            { text: "מתחת ל-150 mg/dL", correct: false }
        ],
        category: "כימיה",
        explanation: "בחולה סוכרתי, רמת LDL הרצויה היא מתחת ל-100 mg/dL. בחולה לב - מתחת ל-70 mg/dL."
    },
    {
        question: "מהי הרמה הרצויה של LDL (כולסטרול רע) בחולה לב?",
        options: [
            { text: "מתחת ל-70 mg/dL", correct: true },
            { text: "מתחת ל-100 mg/dL", correct: false },
            { text: "מתחת ל-200 mg/dL", correct: false },
            { text: "מתחת ל-150 mg/dL", correct: false }
        ],
        category: "כימיה",
        explanation: "בחולה לב, רמת LDL הרצויה היא מתחת ל-70 mg/dL - היעד המחמיר ביותר."
    },
    {
        question: "מהו הערך התקין המינימלי של HDL (כולסטרול טוב) בגברים?",
        options: [
            { text: "מעל 40 mg/dL", correct: true },
            { text: "מעל 50 mg/dL", correct: false },
            { text: "מעל 60 mg/dL", correct: false },
            { text: "מעל 30 mg/dL", correct: false }
        ],
        category: "כימיה",
        explanation: "HDL תקין בגברים הוא מעל 40 mg/dL. HDL מגן יחסית מפני טרשת עורקים."
    },
    {
        question: "מהו הערך התקין המינימלי של HDL (כולסטרול טוב) בנשים?",
        options: [
            { text: "מעל 50 mg/dL", correct: true },
            { text: "מעל 40 mg/dL", correct: false },
            { text: "מעל 60 mg/dL", correct: false },
            { text: "מעל 30 mg/dL", correct: false }
        ],
        category: "כימיה",
        explanation: "HDL תקין בנשים הוא מעל 50 mg/dL - גבוה יותר מגברים."
    },
    {
        question: "מהו הטווח התקין של HbA1c?",
        options: [
            { text: "4.0-5.6%", correct: true },
            { text: "6.0-8.0%", correct: false },
            { text: "3.0-4.5%", correct: false },
            { text: "5.5-7.0%", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של HbA1c (המוגלובין מסוכרר) הוא 4.0-5.6%."
    },
    {
        question: "HbA1c מייצג:",
        options: [
            { text: "ממוצע רמות סוכר ב-3 חודשים האחרונים", correct: true },
            { text: "רמת סוכר נוכחית בדם", correct: false },
            { text: "ממוצע סוכר בשבוע האחרון", correct: false },
            { text: "ממוצע סוכר בחודש האחרון", correct: false }
        ],
        category: "כימיה",
        explanation: "HbA1c (המוגלובין מסוכרר) מייצג ממוצע רמות סוכר ב-3 חודשים האחרונים."
    },
    {
        question: "מהו הטווח התקין של אלבומין?",
        options: [
            { text: "3.5-4.5 g/dL", correct: true },
            { text: "2.0-3.0 g/dL", correct: false },
            { text: "5.0-6.5 g/dL", correct: false },
            { text: "1.5-3.0 g/dL", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של אלבומין הוא 3.5-4.5 g/dL. ירידה גורמת לירידת לחץ אונקוטי, בצקות ומיימת."
    },
    {
        question: "ירידה באלבומין מתבטאת ב:",
        options: [
            { text: "בצקות ומיימת עקב ירידת לחץ אונקוטי", correct: true },
            { text: "כאבי ראש וסחרחורת", correct: false },
            { text: "חום גבוה וצמרמורות", correct: false },
            { text: "שלשולים והקאות", correct: false }
        ],
        category: "כימיה",
        explanation: "ירידה באלבומין גורמת לירידה בלחץ האונקוטי ובצקות ומיימת. גורמים: מחלת כבד, תת תזונה, אובדן כלייתי/מעי."
    },
    {
        question: "מהו הטווח התקין של CRP?",
        options: [
            { text: "0.3-1 mg/dL", correct: true },
            { text: "0-5 mg/dL", correct: false },
            { text: "5-10 mg/dL", correct: false },
            { text: "1-3 mg/dL", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של CRP (חלבון המגיב ל-C) הוא 0.3-1 mg/dL. CRP הוא מדד דלקתי."
    },
    {
        question: "עלייה ב-CRP מעידה על:",
        options: [
            { text: "דלקת, זיהום, טראומה או מחלה אוטואימונית", correct: true },
            { text: "אנמיה", correct: false },
            { text: "בעיית כליות", correct: false },
            { text: "חסר ויטמינים", correct: false }
        ],
        category: "כימיה",
        explanation: "עלייה ב-CRP מעידה על מדד דלקתי מוגבר. גורמים: דלקת, זיהום, טראומה, מחלה אוטואימונית."
    },
    {
        question: "מהו הטווח התקין של AST ו-ALT?",
        options: [
            { text: "0-35 U/L", correct: true },
            { text: "0-100 U/L", correct: false },
            { text: "50-150 U/L", correct: false },
            { text: "10-70 U/L", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של AST (GOT) ו-ALT (GPT) הוא 0-35 U/L. אלו אנזימי כבד."
    },
    {
        question: "עלייה ב-ALT מעידה בעיקר על:",
        options: [
            { text: "פגיעה בכבד (פגיעה הפטוצלולרית)", correct: true },
            { text: "פגיעה בכליות", correct: false },
            { text: "פגיעה בלב", correct: false },
            { text: "פגיעה בריאות", correct: false }
        ],
        category: "כימיה",
        explanation: "עלייה ב-ALT (GPT) מעידה על פגיעה הפטוצלולרית - פגיעה בתאי הכבד. גורמים: הפטיטיס, כבד שומני."
    },
    {
        question: "מהו הטווח התקין של ברזל (Iron) בדם?",
        options: [
            { text: "50-175 mg/dL", correct: true },
            { text: "10-40 mg/dL", correct: false },
            { text: "200-400 mg/dL", correct: false },
            { text: "30-100 mg/dL", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של ברזל בדם הוא 50-175 mg/dL."
    },
    {
        question: "חוסר ברזל גורם ל:",
        options: [
            { text: "אנמיה מיקרוציטית/היפוכרומית - עייפות וחולשה", correct: true },
            { text: "אנמיה מקרוציטית", correct: false },
            { text: "פוליציטמיה", correct: false },
            { text: "לויקוציטוזיס", correct: false }
        ],
        category: "כימיה",
        explanation: "חוסר ברזל גורם לאנמיה מיקרוציטית (תאים קטנים) והיפוכרומית (תאים חיוורים), המתבטאת בעייפות וחולשה."
    },
    {
        question: "מהו הטווח התקין של ויטמין B12?",
        options: [
            { text: "400-900 pg/ml", correct: true },
            { text: "100-300 pg/ml", correct: false },
            { text: "1000-2000 pg/ml", correct: false },
            { text: "50-200 pg/ml", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של ויטמין B12 הוא 400-900 pg/ml."
    },
    {
        question: "חוסר ויטמין B12 גורם ל:",
        options: [
            { text: "אנמיה מקרוציטית ונוירופתיה", correct: true },
            { text: "אנמיה מיקרוציטית", correct: false },
            { text: "טרומבוציטופניה בלבד", correct: false },
            { text: "לויקופניה בלבד", correct: false }
        ],
        category: "כימיה",
        explanation: "חוסר ויטמין B12 גורם לאנמיה מקרוציטית (תאים גדולים) ונוירופתיה (פגיעה עצבית). גורמים: תת ספיגה, אנמיה פרניציוזה, מחלת מעי."
    },
    {
        question: "מהו הטווח התקין של Ferritin?",
        options: [
            { text: "40-160 mg/dL", correct: true },
            { text: "10-30 mg/dL", correct: false },
            { text: "200-400 mg/dL", correct: false },
            { text: "5-20 mg/dL", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של Ferritin הוא 40-160 mg/dL. Ferritin מייצג את מאגרי הברזל בגוף ומשמש גם כמדד לדלקת."
    },
    {
        question: "Ferritin מייצג:",
        options: [
            { text: "מאגרי ברזל בגוף", correct: true },
            { text: "רמת ברזל חופשי בדם", correct: false },
            { text: "יכולת ספיגת ברזל", correct: false },
            { text: "הובלת ברזל בדם", correct: false }
        ],
        category: "כימיה",
        explanation: "Ferritin מייצג את מאגרי הברזל בגוף. ירידה תומכת באנמיה מחוסר ברזל. עלייה עשויה להעיד על דלקת, מחלת כבד או עודף ברזל."
    },
    {
        question: "מהו הטווח התקין של טריגליצרידים?",
        options: [
            { text: "0-150 mg/dL", correct: true },
            { text: "100-250 mg/dL", correct: false },
            { text: "200-350 mg/dL", correct: false },
            { text: "50-200 mg/dL", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של טריגליצרידים הוא 0-150 mg/dL."
    },
    {
        question: "רמות טריגליצרידים גבוהות מאוד עלולות לגרום ל:",
        options: [
            { text: "פנקראטיטיס (דלקת לבלב)", correct: true },
            { text: "אנמיה", correct: false },
            { text: "היפוגליקמיה", correct: false },
            { text: "היפוקלצמיה", correct: false }
        ],
        category: "כימיה",
        explanation: "רמות טריגליצרידים גבוהות מאוד מעידות על סיכון קרדיווסקולרי ועלולות לגרום לפנקראטיטיס."
    },
    {
        question: "אזוטמיה היא:",
        options: [
            { text: "הצטברות תוצרי פסולת כמו אוריאה וקריאטינין בדם", correct: true },
            { text: "ירידה בסידן", correct: false },
            { text: "עלייה בנתרן", correct: false },
            { text: "ירידה באשלגן", correct: false }
        ],
        category: "כימיה",
        explanation: "אזוטמיה היא הצטברות תוצרי פסולת חנקניים (כמו אוריאה וקריאטינין) בדם, בדרך כלל עקב אי ספיקת כליות."
    },
    {
        question: "קריאטינין היא תוצר פסולת של:",
        options: [
            { text: "פירוק קריאטין פוספט בשרירים", correct: true },
            { text: "פירוק חלבונים", correct: false },
            { text: "פירוק שומנים", correct: false },
            { text: "פירוק סוכרים", correct: false }
        ],
        category: "כימיה",
        explanation: "קריאטינין היא תוצר פסולת של פירוק קריאטין פוספט בשרירים."
    },
    {
        question: "אלקלין פוספטאז (ALP) גבוה עשוי להעיד על:",
        options: [
            { text: "חסימת מרה או מחלות עצם", correct: true },
            { text: "מחלת כליות", correct: false },
            { text: "מחלת לב", correct: false },
            { text: "מחלת ריאות", correct: false }
        ],
        category: "כימיה",
        explanation: "ALP גבוה מעיד על כולסטזיס (חסימת מרה) או פעילות עצם מוגברת. טווח תקין: 20-125 U/L. עלייה גם בגדילה ובהריון."
    },
    {
        question: "LDH הוא:",
        options: [
            { text: "אנזים לא ספציפי המעיד על נזק תאי", correct: true },
            { text: "הורמון בלוטת התריס", correct: false },
            { text: "מדד לתפקוד כלייתי", correct: false },
            { text: "מדד לתפקוד קרישה", correct: false }
        ],
        category: "כימיה",
        explanation: "LDH הוא אנזים לא ספציפי המעיד על נזק תאי. טווח תקין: 280-450 U/L. עלייה בפירוק תאים, המוליזה, איסכמיה, ממאירות."
    },
    {
        question: "מהו הטווח התקין של חומצה אורית (Uric Acid)?",
        options: [
            { text: "2.5-7.5 mg/dL", correct: true },
            { text: "0.5-2.0 mg/dL", correct: false },
            { text: "8.0-12.0 mg/dL", correct: false },
            { text: "1.0-4.0 mg/dL", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של חומצה אורית הוא 2.5-7.5 mg/dL. חומצה אורית היא תוצר פירוק סופי של פורינים."
    },
    {
        question: "עלייה בחומצה אורית עלולה לגרום ל:",
        options: [
            { text: "גאוט (שיגדון), אבני שתן, דלקת מפרקים", correct: true },
            { text: "אנמיה", correct: false },
            { text: "היפוגליקמיה", correct: false },
            { text: "היפוקלצמיה", correct: false }
        ],
        category: "כימיה",
        explanation: "עלייה בחומצה אורית גורמת לשקיעת קריסטלים, אבני חומצת שתן וגאוט (שיגדון - דלקת מפרקים). גורמים: גאוט, פירוק תאים, כימותרפיה, מחלת כליה."
    },
    {
        question: "מהו הטווח התקין של חומצה פולית (Folic Acid)?",
        options: [
            { text: "3.0-17.0 ng/ml", correct: true },
            { text: "0.5-2.0 ng/ml", correct: false },
            { text: "20-50 ng/ml", correct: false },
            { text: "1.0-5.0 ng/ml", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של חומצה פולית הוא 3.0-17.0 ng/ml. חסר חומצה פולית גורם לאנמיה מקרוציטית."
    },
    {
        question: "מהו הטווח התקין של זרחן (Phosphor)?",
        options: [
            { text: "4-4.5 mg/dL", correct: true },
            { text: "1-2 mg/dL", correct: false },
            { text: "6-8 mg/dL", correct: false },
            { text: "8-10 mg/dL", correct: false }
        ],
        category: "כימיה",
        explanation: "הטווח התקין של זרחן הוא 4-4.5 mg/dL. עלייה בזרחן גורמת לשקיעת סידן-פוספט ופגיעה ברקמות."
    },
    // ==================== בלוטת התריס ====================
    {
        question: "מהו הטווח התקין של TSH?",
        options: [
            { text: "0.5-5.5 mcu/ml", correct: true },
            { text: "0.1-0.3 mcu/ml", correct: false },
            { text: "6.0-10.0 mcu/ml", correct: false },
            { text: "10-20 mcu/ml", correct: false }
        ],
        category: "בלוטת התריס",
        explanation: "הטווח התקין של TSH הוא 0.5-5.5 mcu/ml."
    },
    {
        question: "עלייה ב-TSH מעידה על:",
        options: [
            { text: "תת פעילות בלוטת התריס (היפותירואידיזם)", correct: true },
            { text: "פעילות יתר של בלוטת התריס", correct: false },
            { text: "תפקוד תקין של הבלוטה", correct: false },
            { text: "מחלת כבד", correct: false }
        ],
        category: "בלוטת התריס",
        explanation: "עלייה ב-TSH מעידה על היפותירואידיזם - תת פעילות בלוטת התריס. ההיפופיזה מייצרת יותר TSH כדי לגרות את הבלוטה לעבוד."
    },
    {
        question: "ירידה ב-TSH מעידה על:",
        options: [
            { text: "פעילות יתר של בלוטת התריס (היפרתירואידיזם)", correct: true },
            { text: "תת פעילות בלוטת התריס", correct: false },
            { text: "תפקוד תקין של הבלוטה", correct: false },
            { text: "מחלת כליה", correct: false }
        ],
        category: "בלוטת התריס",
        explanation: "ירידה ב-TSH מעידה על היפרתירואידיזם - פעילות יתר של בלוטת התריס, או בעיה מרכזית בהיפופיזה."
    },
    {
        question: "מהו הטווח התקין של T3?",
        options: [
            { text: "3.5-6.5 pmol/L", correct: true },
            { text: "1.0-2.5 pmol/L", correct: false },
            { text: "8.0-12.0 pmol/L", correct: false },
            { text: "0.5-3.0 pmol/L", correct: false }
        ],
        category: "בלוטת התריס",
        explanation: "הטווח התקין של T3 הוא 3.5-6.5 pmol/L."
    },
    {
        question: "מהו הטווח התקין של T4?",
        options: [
            { text: "4.5-12.5 µg/dL", correct: true },
            { text: "1.0-3.0 µg/dL", correct: false },
            { text: "15.0-25.0 µg/dL", correct: false },
            { text: "3.0-6.0 µg/dL", correct: false }
        ],
        category: "בלוטת התריס",
        explanation: "הטווח התקין של T4 הוא 4.5-12.5 µg/dL."
    },
    {
        question: "עלייה ב-PTH גורמת ל:",
        options: [
            { text: "היפרקלצמיה ופגיעה בעצמות/אבנים", correct: true },
            { text: "היפוקלצמיה", correct: false },
            { text: "היפרנתרמיה", correct: false },
            { text: "היפוקלמיה", correct: false }
        ],
        category: "בלוטת התריס",
        explanation: "PTH (פאראתירואיד הורמון) מעלה את רמת הסידן בדם. עלייה ב-PTH גורמת להיפרקלצמיה, פגיעה בעצמות ואבנים."
    },
    {
        question: "מהו הטווח התקין של PTH?",
        options: [
            { text: "85-150 pg/ml", correct: true },
            { text: "10-50 pg/ml", correct: false },
            { text: "200-400 pg/ml", correct: false },
            { text: "50-100 pg/ml", correct: false }
        ],
        category: "בלוטת התריס",
        explanation: "הטווח התקין של PTH הוא 85-150 pg/ml. ירידה ב-PTH גורמת להיפוקלצמיה וטטניה."
    },
    {
        question: "היפרתירואידיזם (פעילות יתר של בלוטת התריס) מתבטא ב:",
        options: [
            { text: "מטבוליזם מוגבר, ירידה במשקל, דופק מהיר", correct: true },
            { text: "עייפות, עלייה במשקל, קור", correct: false },
            { text: "בצקות ומיימת", correct: false },
            { text: "פרכוסים ובלבול", correct: false }
        ],
        category: "בלוטת התריס",
        explanation: "היפרתירואידיזם מתבטא במטבוליזם מוגבר, ירידה במשקל ודופק מהיר. T3 ו-T4 גבוהים, TSH נמוך."
    },
    {
        question: "היפותירואידיזם (תת פעילות של בלוטת התריס) מתבטא ב:",
        options: [
            { text: "עייפות, עלייה במשקל, תחושת קור, מטבוליזם נמוך", correct: true },
            { text: "ירידה במשקל, דופק מהיר", correct: false },
            { text: "חום גבוה והזעות", correct: false },
            { text: "פוליאוריה וצמא", correct: false }
        ],
        category: "בלוטת התריס",
        explanation: "היפותירואידיזם מתבטא בעייפות, עלייה במשקל, תחושת קור ומטבוליזם נמוך. T3 ו-T4 נמוכים, TSH גבוה."
    },
    // ==================== גזים בדם ====================
    {
        question: "מהו הטווח התקין של pH בדם?",
        options: [
            { text: "7.35-7.45", correct: true },
            { text: "7.20-7.30", correct: false },
            { text: "7.45-7.55", correct: false },
            { text: "7.10-7.35", correct: false }
        ],
        category: "גזים בדם",
        explanation: "הטווח התקין של pH בדם הוא 7.35-7.45."
    },
    {
        question: "מהו הטווח התקין של PaCO2?",
        options: [
            { text: "35-45 mmHg", correct: true },
            { text: "20-30 mmHg", correct: false },
            { text: "50-60 mmHg", correct: false },
            { text: "25-35 mmHg", correct: false }
        ],
        category: "גזים בדם",
        explanation: "הטווח התקין של PaCO2 הוא 35-45 mmHg."
    },
    {
        question: "מהו הטווח התקין של PaO2?",
        options: [
            { text: "80-100 mmHg", correct: true },
            { text: "60-80 mmHg", correct: false },
            { text: "100-120 mmHg", correct: false },
            { text: "40-60 mmHg", correct: false }
        ],
        category: "גזים בדם",
        explanation: "הטווח התקין של PaO2 הוא 80-100 mmHg."
    },
    {
        question: "מהו הטווח התקין של HCO3 (ביקרבונט)?",
        options: [
            { text: "22-26 mEq/L", correct: true },
            { text: "15-20 mEq/L", correct: false },
            { text: "28-34 mEq/L", correct: false },
            { text: "18-22 mEq/L", correct: false }
        ],
        category: "גזים בדם",
        explanation: "הטווח התקין של HCO3 (ביקרבונט) הוא 22-26 mEq/L."
    },
    {
        question: "מהו הטווח התקין של O2 Saturation?",
        options: [
            { text: "95-100%", correct: true },
            { text: "85-95%", correct: false },
            { text: "90-98%", correct: false },
            { text: "80-95%", correct: false }
        ],
        category: "גזים בדם",
        explanation: "הטווח התקין של O2 Saturation הוא 95-100%."
    },
    {
        question: "עלייה ב-PaCO2 מעידה על:",
        options: [
            { text: "חמצת נשימתית", correct: true },
            { text: "בססת נשימתית", correct: false },
            { text: "חמצת מטבולית", correct: false },
            { text: "בססת מטבולית", correct: false }
        ],
        category: "גזים בדם",
        explanation: "עלייה ב-PaCO2 (היפרקפניה) מעידה על חמצת נשימתית. גורמים: היפוונטילציה, COPD, דיכוי נשימתי."
    },
    {
        question: "ירידה ב-PaCO2 מעידה על:",
        options: [
            { text: "בססת נשימתית", correct: true },
            { text: "חמצת נשימתית", correct: false },
            { text: "חמצת מטבולית", correct: false },
            { text: "בססת מטבולית", correct: false }
        ],
        category: "גזים בדם",
        explanation: "ירידה ב-PaCO2 (היפוקפניה) מעידה על בססת נשימתית. הגורם: היפרוונטילציה."
    },
    {
        question: "ירידה ב-HCO3 מעידה על:",
        options: [
            { text: "חמצת מטבולית", correct: true },
            { text: "בססת מטבולית", correct: false },
            { text: "חמצת נשימתית", correct: false },
            { text: "בססת נשימתית", correct: false }
        ],
        category: "גזים בדם",
        explanation: "ירידה ב-HCO3 מעידה על חמצת מטבולית עקב ירידה בבופר הבסיסי. גורמים: שלשולים, אי ספיקת כליה."
    },
    {
        question: "עלייה ב-HCO3 מעידה על:",
        options: [
            { text: "בססת מטבולית", correct: true },
            { text: "חמצת מטבולית", correct: false },
            { text: "חמצת נשימתית", correct: false },
            { text: "בססת נשימתית", correct: false }
        ],
        category: "גזים בדם",
        explanation: "עלייה ב-HCO3 מעידה על בססת מטבולית. גורמים: הקאות, בססת מטבולית, פיצוי נשימתי כרוני."
    },
    {
        question: "pH מתחת ל-7.35 מעיד על:",
        options: [
            { text: "חמצת (Acidosis)", correct: true },
            { text: "בססת (Alkalosis)", correct: false },
            { text: "מצב תקין", correct: false },
            { text: "היפוקסיה", correct: false }
        ],
        category: "גזים בדם",
        explanation: "pH מתחת ל-7.35 מעיד על חמצת. חמצת מתבטאת בדיכוי תפקוד מערכות, נשימה עמוקה ועייפות."
    },
    {
        question: "pH מעל 7.45 מעיד על:",
        options: [
            { text: "בססת (Alkalosis)", correct: true },
            { text: "חמצת (Acidosis)", correct: false },
            { text: "מצב תקין", correct: false },
            { text: "היפרקפניה", correct: false }
        ],
        category: "גזים בדם",
        explanation: "pH מעל 7.45 מעיד על בססת (בסיסיות). מתבטאת בנימול, טטניה והפרעות קצב."
    },
    {
        question: "מהו הטווח התקין של BE (עודף בסיס)?",
        options: [
            { text: "-2 עד +2 mEq", correct: true },
            { text: "5-10 mEq", correct: false },
            { text: "-5 עד -3 mEq", correct: false },
            { text: "3-6 mEq", correct: false }
        ],
        category: "גזים בדם",
        explanation: "הטווח התקין של BE הוא -2 עד +2 mEq. BE שלילי מעיד על חמצת מטבולית, BE חיובי על בססת מטבולית."
    },
    {
        question: "חולה עם pH 7.30, PaCO2 55, HCO3 24 - מהו האבחון?",
        options: [
            { text: "חמצת נשימתית", correct: true },
            { text: "בססת נשימתית", correct: false },
            { text: "חמצת מטבולית", correct: false },
            { text: "בססת מטבולית", correct: false }
        ],
        category: "גזים בדם",
        explanation: "pH נמוך (חמצת), PaCO2 גבוה (הגורם הנשימתי), HCO3 תקין = חמצת נשימתית. הבעיה היא באוורור - CO2 מצטבר."
    },
    {
        question: "חולה עם pH 7.50, PaCO2 30, HCO3 24 - מהו האבחון?",
        options: [
            { text: "בססת נשימתית", correct: true },
            { text: "חמצת נשימתית", correct: false },
            { text: "חמצת מטבולית", correct: false },
            { text: "בססת מטבולית", correct: false }
        ],
        category: "גזים בדם",
        explanation: "pH גבוה (בססת), PaCO2 נמוך (היפרוונטילציה), HCO3 תקין = בססת נשימתית."
    },
    {
        question: "חולה עם pH 7.28, PaCO2 40, HCO3 16 - מהו האבחון?",
        options: [
            { text: "חמצת מטבולית", correct: true },
            { text: "בססת מטבולית", correct: false },
            { text: "חמצת נשימתית", correct: false },
            { text: "בססת נשימתית", correct: false }
        ],
        category: "גזים בדם",
        explanation: "pH נמוך (חמצת), PaCO2 תקין, HCO3 נמוך (הגורם המטבולי) = חמצת מטבולית."
    },
    {
        question: "חולה עם pH 7.50, PaCO2 40, HCO3 30 - מהו האבחון?",
        options: [
            { text: "בססת מטבולית", correct: true },
            { text: "חמצת מטבולית", correct: false },
            { text: "חמצת נשימתית", correct: false },
            { text: "בססת נשימתית", correct: false }
        ],
        category: "גזים בדם",
        explanation: "pH גבוה (בססת), PaCO2 תקין, HCO3 גבוה (הגורם המטבולי) = בססת מטבולית."
    },
    // ==================== מצוקה נשימתית ====================
    {
        question: "מהו קצב הנשימה התקין אצל מבוגר בריא במנוחה?",
        options: [
            { text: "16-20 נשימות לדקה", correct: true },
            { text: "12-14 נשימות לדקה", correct: false },
            { text: "22-28 נשימות לדקה", correct: false },
            { text: "8-12 נשימות לדקה", correct: false }
        ],
        category: "מצוקה נשימתית",
        explanation: "קצב הנשימה התקין אצל מבוגר בריא במנוחה הוא 16-20 נשימות לדקה."
    },
    {
        question: "מהי נשימה חיצונית?",
        options: [
            { text: "שחלוף גזים בריאות בין הנימים לנאדיות (Alveoli)", correct: true },
            { text: "שחלוף גזים בין תאי דם אדומים לתאים", correct: false },
            { text: "נשימה דרך האף בלבד", correct: false },
            { text: "נשימה באמצעות מכשיר הנשמה", correct: false }
        ],
        category: "מצוקה נשימתית",
        explanation: "נשימה חיצונית היא שחלוף הגזים בריאות בין הנימים לנאדיות (Alveoli)."
    },
    {
        question: "מהי נשימה פנימית?",
        options: [
            { text: "שחלוף גזים בין תאי דם אדומים לבין התאים", correct: true },
            { text: "שחלוף גזים בריאות בין הנימים לנאדיות", correct: false },
            { text: "נשימה דרך הפה בלבד", correct: false },
            { text: "אוורור ריאתי מכני", correct: false }
        ],
        category: "מצוקה נשימתית",
        explanation: "נשימה פנימית היא שחלוף הגזים בין תאי הדם האדומים לבין תאי הגוף."
    },
    {
        question: "איזה גורם מהבאים גורם לעלייה בקצב הנשימה?",
        options: [
            { text: "חום גוף מוגבר", correct: true },
            { text: "שינה", correct: false },
            { text: "מנוחה", correct: false },
            { text: "תרופות מרגיעות", correct: false }
        ],
        category: "מצוקה נשימתית",
        explanation: "חום גוף מוגבר, כאב חריף, התרגשות, היפוקסיה וחמצת - כולם גורמים לעלייה בקצב הנשימה."
    },
    {
        question: "שינה גורמת ל:",
        options: [
            { text: "הורדת קצב הנשימה", correct: true },
            { text: "העלאת קצב הנשימה", correct: false },
            { text: "אין שינוי בקצב הנשימה", correct: false },
            { text: "נשימות עמוקות יותר", correct: false }
        ],
        category: "מצוקה נשימתית",
        explanation: "שינה גורמת להורדת קצב הנשימה."
    },
    {
        question: "טכיפנאה מוגדרת כ:",
        options: [
            { text: "מספר נשימות מעל 24 לדקה", correct: true },
            { text: "מספר נשימות מעל 30 לדקה", correct: false },
            { text: "מספר נשימות מתחת ל-12 לדקה", correct: false },
            { text: "נשימות עמוקות במיוחד", correct: false }
        ],
        category: "מצוקה נשימתית",
        explanation: "טכיפנאה היא מספר נשימות מעל 24 לדקה, והיא סימן אובייקטיבי למצוקה נשימתית."
    },
    {
        question: "מה מהבאים הוא סימן אובייקטיבי למצוקה נשימתית?",
        options: [
            { text: "כחלון פריפרי או מרכזי", correct: true },
            { text: "תחושת מחנק", correct: false },
            { text: "סחרחורת", correct: false },
            { text: "חרדה", correct: false }
        ],
        category: "מצוקה נשימתית",
        explanation: "סימנים אובייקטיביים למצוקה נשימתית: טכיפנאה, טכיקרדיה, כחלון, עור קר, שימוש בשרירי עזר."
    },
    {
        question: "מה מהבאים הוא סימן סובייקטיבי למצוקה נשימתית?",
        options: [
            { text: "תחושת מחנק", correct: true },
            { text: "טכיפנאה", correct: false },
            { text: "כחלון", correct: false },
            { text: "שימוש בשרירי עזר", correct: false }
        ],
        category: "מצוקה נשימתית",
        explanation: "סימנים סובייקטיביים למצוקה נשימתית: תחושת מחנק, סחרחורת, אי שקט, חולשה, חרדה."
    },
    {
        question: "ערך PaO2 המעיד על מצוקה נשימתית:",
        options: [
            { text: "מתחת ל-60 mmHg", correct: true },
            { text: "מתחת ל-80 mmHg", correct: false },
            { text: "מתחת ל-100 mmHg", correct: false },
            { text: "מתחת ל-40 mmHg", correct: false }
        ],
        category: "מצוקה נשימתית",
        explanation: "PaO2 מתחת ל-60 mmHg מעיד על מצוקה נשימתית בממצאי גזים בדם."
    },
    {
        question: "ערך O2 Saturation המעיד על מצוקה נשימתית:",
        options: [
            { text: "מתחת ל-93-94%", correct: true },
            { text: "מתחת ל-100%", correct: false },
            { text: "מתחת ל-85%", correct: false },
            { text: "מתחת ל-75%", correct: false }
        ],
        category: "מצוקה נשימתית",
        explanation: "O2 Saturation מתחת ל-93-94% מעיד על מצוקה נשימתית."
    },
    {
        question: "Pulse Oximetry מודד:",
        options: [
            { text: "אחוז ריווי חמצן של כדוריות הדם האדומות (SaO2)", correct: true },
            { text: "לחץ חלקי של חמצן בדם (PaO2)", correct: false },
            { text: "ריכוז חמצן באוויר הנשאף", correct: false },
            { text: "כמות חמצן בליטרים לדקה", correct: false }
        ],
        category: "מצוקה נשימתית",
        explanation: "Pulse Oximetry הוא מכשיר אלקטרוני המוצמד לאצבע או תנוך אוזן ומודד את אחוז הריווי של כדוריות הדם האדומות (%SaO2). נורמה: 95-100%."
    },
    {
        question: "SaO2 של 97% שווה ל-PaO2 של:",
        options: [
            { text: "97 mmHg", correct: true },
            { text: "80 mmHg", correct: false },
            { text: "60 mmHg", correct: false },
            { text: "45 mmHg", correct: false }
        ],
        category: "מצוקה נשימתית",
        explanation: "SaO2 של 97% מקביל ל-PaO2 של 97 mmHg."
    },
    {
        question: "SaO2 של 90% שווה ל-PaO2 של:",
        options: [
            { text: "60 mmHg", correct: true },
            { text: "80 mmHg", correct: false },
            { text: "45 mmHg", correct: false },
            { text: "97 mmHg", correct: false }
        ],
        category: "מצוקה נשימתית",
        explanation: "SaO2 של 90% מקביל ל-PaO2 של 60 mmHg - סף מצוקה נשימתית."
    },
    {
        question: "SaO2 של 80% שווה ל-PaO2 של:",
        options: [
            { text: "45 mmHg", correct: true },
            { text: "60 mmHg", correct: false },
            { text: "80 mmHg", correct: false },
            { text: "30 mmHg", correct: false }
        ],
        category: "מצוקה נשימתית",
        explanation: "SaO2 של 80% מקביל ל-PaO2 של 45 mmHg - מצב חמור."
    },
    {
        question: "שימוש בשרירי עזר בנשימה כולל:",
        options: [
            { text: "כנפות האף, שרירי הצוואר, שרירים בין צלעיים", correct: true },
            { text: "שרירי הידיים בלבד", correct: false },
            { text: "שרירי הבטן בלבד", correct: false },
            { text: "שרירי הרגליים", correct: false }
        ],
        category: "מצוקה נשימתית",
        explanation: "שימוש בשרירי עזר (כנפות האף, שרירי הצוואר, שרירים בין צלעיים) הוא סימן אובייקטיבי למצוקה נשימתית."
    },
    {
        question: "מה מהבאים אינו גורם למצוקה נשימתית?",
        options: [
            { text: "שינה", correct: true },
            { text: "מחסור בחמצן", correct: false },
            { text: "דיכוי מרכז הנשימה", correct: false },
            { text: "בצקת ריאות", correct: false }
        ],
        category: "מצוקה נשימתית",
        explanation: "שינה גורמת להורדת קצב הנשימה אך אינה גורמת למצוקה נשימתית. הגורמים למצוקה: מחסור בחמצן, ירידה באוורור, פגיעה בפרפוזיה, פגיעה במעבר חמצן לרקמות, פגיעה בנשימה הפנימית."
    },
    // ==================== אמצעי מתן חמצן ====================
    {
        question: "משקפי חמצן (Nasal Cannula) מספקים ריכוז חמצן של:",
        options: [
            { text: "24-44%", correct: true },
            { text: "40-60%", correct: false },
            { text: "60-80%", correct: false },
            { text: "90-100%", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "משקפי חמצן מספקים ריכוז חמצן של 24-44% בזרימה של 1-6 ליטר/דקה."
    },
    {
        question: "זרימת החמצן במשקפי חמצן היא:",
        options: [
            { text: "1-6 ליטר/דקה", correct: true },
            { text: "5-10 ליטר/דקה", correct: false },
            { text: "8-15 ליטר/דקה", correct: false },
            { text: "10-15 ליטר/דקה", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "משקפי חמצן עובדים בזרימה של 1-6 ליטר/דקה. כל ליטר מעלה את ריכוז החמצן ב-4%."
    },
    {
        question: "כל ליטר חמצן במשקפיים מעלה את ריכוז החמצן ב:",
        options: [
            { text: "4%", correct: true },
            { text: "2%", correct: false },
            { text: "6%", correct: false },
            { text: "10%", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "כל ליטר/דקה במשקפי חמצן מעלה את ריכוז אוויר החדר (21%) ב-4%. לכן 1 ל'/דקה = 24%, 2 ל'/דקה = 28% וכו'."
    },
    {
        question: "זרימה של 2 ליטר/דקה במשקפי חמצן מספקת ריכוז של:",
        options: [
            { text: "28%", correct: true },
            { text: "24%", correct: false },
            { text: "32%", correct: false },
            { text: "36%", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "2 ליטר/דקה = 20% (ריכוז באוויר חדר) + 8% (2×4%) = 28%."
    },
    {
        question: "זרימה של 4 ליטר/דקה במשקפי חמצן מספקת ריכוז של:",
        options: [
            { text: "36%", correct: true },
            { text: "28%", correct: false },
            { text: "40%", correct: false },
            { text: "44%", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "4 ליטר/דקה = 20% + 16% (4×4%) = 36%."
    },
    {
        question: "זרימה של 6 ליטר/דקה במשקפי חמצן מספקת ריכוז של:",
        options: [
            { text: "44%", correct: true },
            { text: "36%", correct: false },
            { text: "48%", correct: false },
            { text: "52%", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "6 ליטר/דקה = 20% + 24% (6×4%) = 44%. זהו הריכוז המקסימלי במשקפיים."
    },
    {
        question: "מסכה פשוטה (Simple Mask) מספקת ריכוז חמצן של:",
        options: [
            { text: "40-60%", correct: true },
            { text: "24-44%", correct: false },
            { text: "60-80%", correct: false },
            { text: "90-100%", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "מסכה פשוטה מספקת ריכוז חמצן של 40-60% למשך זמן מוגבל או בזמן חירום."
    },
    {
        question: "מהו הזרימה המינימלית הדרושה במסכה פשוטה?",
        options: [
            { text: "5 ליטר/דקה", correct: true },
            { text: "2 ליטר/דקה", correct: false },
            { text: "8 ליטר/דקה", correct: false },
            { text: "10 ליטר/דקה", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "דרוש מינימום של 5 ליטר/דקה במסכה פשוטה כדי לרוקן את המסכה מפחמן דו-חמצני שננשף."
    },
    {
        question: "מדוע דרוש מינימום של 5 ליטר/דקה במסכה פשוטה?",
        options: [
            { text: "כדי לרוקן את המסכה מפחמן דו-חמצני שננשף", correct: true },
            { text: "כדי להגיע לריכוז חמצן מספיק", correct: false },
            { text: "למנוע התייבשות הרירית", correct: false },
            { text: "למנוע התלקחות", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "מינימום 5 ליטר/דקה נדרש כדי לרוקן את המסכה מ-CO2 שננשף אל תוכה."
    },
    {
        question: "מסכת Non-Rebreather מספקת ריכוז חמצן של:",
        options: [
            { text: "90-100%", correct: true },
            { text: "40-60%", correct: false },
            { text: "60-80%", correct: false },
            { text: "24-44%", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "מסכת Non-Rebreather מספקת ריכוז חמצן של 90-100% בזרימה של 5-15 ליטר/דקה."
    },
    {
        question: "מסכת Non-Rebreather מתאימה ל:",
        options: [
            { text: "מטופלים במצב מתדרדר העומדים בפני אינטובציה", correct: true },
            { text: "מטופלים יציבים הזקוקים לחמצן נמוך", correct: false },
            { text: "מטופלי COPD", correct: false },
            { text: "מטופלים לאחר ניתוח שגרתי", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "מסכת Non-Rebreather מתאימה למטופלים במצב מתדרדר העומדים בפני אינטובציה, כיוון שהיא מספקת את הריכוז הגבוה ביותר."
    },
    {
        question: "מה מבדיל מסכת Non-Rebreather ממסכה פשוטה?",
        options: [
            { text: "שקית העשרה עם שסתומים חד-כיווניים", correct: true },
            { text: "צינור ונטורי", correct: false },
            { text: "חיבור ישיר לטרכיאוסטומי", correct: false },
            { text: "גודל המסכה בלבד", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "מסכת Non-Rebreather כוללת שקית העשרה עם שסתומים חד-כיווניים שמאפשרים כניסת חמצן טהור ומונעים כניסת אוויר שננשף לשקית."
    },
    {
        question: "מסכת ונטורי (Venturi) מתאימה במיוחד ל:",
        options: [
            { text: "מטופלי COPD - מחלת ריאה חסימתית כרונית", correct: true },
            { text: "מטופלים במצב מתדרדר", correct: false },
            { text: "מטופלים לאחר ניתוח", correct: false },
            { text: "מטופלים בשינה", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "מסכת ונטורי מתאימה במיוחד למטופלי COPD בזכות דיוק הריכוז. היא מבטיחה הזרמת חמצן בכמות מדויקת ומחושבת."
    },
    {
        question: "היתרון העיקרי של מסכת ונטורי הוא:",
        options: [
            { text: "מתן חמצן בריכוז מדויק ומחושב", correct: true },
            { text: "ריכוז חמצן גבוה במיוחד", correct: false },
            { text: "נוחות למטופל", correct: false },
            { text: "מחיר נמוך", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "מסכת ונטורי כוללת צינור רחב עם פתחים קטנים המאפשרים כניסת אוויר חדר בכמות פרופורציונלית ידועה ומחושבת, ובכך מבטיחים ריכוז מדויק."
    },
    {
        question: "משקפי חמצן ומסכה פשוטה הם אמצעי:",
        options: [
            { text: "זרימה נמוכה (Low Flow Systems)", correct: true },
            { text: "זרימה גבוהה (High Flow Systems)", correct: false },
            { text: "זרימה משתנה", correct: false },
            { text: "זרימה קבועה", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "משקפי חמצן, מסכה פשוטה ומסכות העשרה הם אמצעי זרימה נמוכה (Low Flow Systems)."
    },
    {
        question: "מסכת ונטורי וחיבור T הם אמצעי:",
        options: [
            { text: "זרימה גבוהה (High Flow Systems)", correct: true },
            { text: "זרימה נמוכה (Low Flow Systems)", correct: false },
            { text: "זרימה משתנה", correct: false },
            { text: "זרימה קבועה", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "מסכת ונטורי (Venturi) וחיבור T (T-Piece) הם אמצעי זרימה גבוהה (High Flow Systems)."
    },
    {
        question: "חיבור T (T-Piece) מתחבר ישירות אל:",
        options: [
            { text: "פתח אוויר מלאכותי כגון טרכיאוסטומי או טובוס", correct: true },
            { text: "האף של המטופל", correct: false },
            { text: "המסכה", correct: false },
            { text: "בקבוק החמצן", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "חיבור T (T-Piece) הוא צינור גמיש רחב המתחבר ישירות אל פתח אוויר מלאכותי כגון טרכיאוסטומי או טובוס."
    },
    {
        question: "חיבור T דורש זרימה מינימלית של:",
        options: [
            { text: "10 ליטר/דקה", correct: true },
            { text: "5 ליטר/דקה", correct: false },
            { text: "2 ליטר/דקה", correct: false },
            { text: "15 ליטר/דקה", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "חיבור T דורש זרימה מינימלית של 10 ליטר/דקה ומחייב שימוש בבקבוק מים לתוספת לחות."
    },
    {
        question: "ריכוז החמצן באוויר החדר הוא:",
        options: [
            { text: "21%", correct: true },
            { text: "30%", correct: false },
            { text: "16%", correct: false },
            { text: "24%", correct: false }
        ],
        category: "אמצעי מתן חמצן",
        explanation: "ריכוז החמצן באוויר החדר הוא כ-21% (20-21%)."
    },
    // ==================== עקרונות מתן חמצן ====================
    {
        question: "בקבוק החמצן צבוע באופן אוניברסלי:",
        options: [
            { text: "ירוק בגופו ולבן בראשו", correct: true },
            { text: "לבן בגופו וירוק בראשו", correct: false },
            { text: "כחול בגופו ולבן בראשו", correct: false },
            { text: "אדום בגופו ולבן בראשו", correct: false }
        ],
        category: "עקרונות מתן חמצן",
        explanation: "בקבוק החמצן עשוי ממתכת ובאופן אוניברסלי צבוע ירוק בגופו ולבן בראשו."
    },
    {
        question: "בקבוק הלחות משמש ל:",
        options: [
            { text: "מניעת התייבשות הרירית", correct: true },
            { text: "העלאת ריכוז החמצן", correct: false },
            { text: "מדידת זרימת החמצן", correct: false },
            { text: "ניטור רמת החמצן בדם", correct: false }
        ],
        category: "עקרונות מתן חמצן",
        explanation: "תוספת לחות חשובה בעת מתן חמצן כדי למנוע התייבשות הרירית."
    },
    {
        question: "כל כמה זמן יש להחליף את המים בבקבוק הלחות?",
        options: [
            { text: "כל 24 שעות", correct: true },
            { text: "כל 12 שעות", correct: false },
            { text: "כל 48 שעות", correct: false },
            { text: "כל 72 שעות", correct: false }
        ],
        category: "עקרונות מתן חמצן",
        explanation: "יש לדאוג להחלפת המים בבקבוק הלחות כל 24 שעות, כיוון שהמים עלולים להוות מאגר של פתוגנים."
    },
    {
        question: "כל כמה זמן יש להחליף את מערכת מתן החמצן כולה?",
        options: [
            { text: "כל 72 שעות", correct: true },
            { text: "כל 24 שעות", correct: false },
            { text: "כל 48 שעות", correct: false },
            { text: "כל שבוע", correct: false }
        ],
        category: "עקרונות מתן חמצן",
        explanation: "יש להחליף את מערכת מתן החמצן כולה כל 72 שעות למניעת התפתחות זיהומים."
    },
    {
        question: "אחת מסכנות מתן חמצן היא:",
        options: [
            { text: "הרעלת חמצן (Oxygen Toxicity)", correct: true },
            { text: "היפרקלצמיה", correct: false },
            { text: "היפוקלמיה", correct: false },
            { text: "ברדיקרדיה", correct: false }
        ],
        category: "עקרונות מתן חמצן",
        explanation: "סכנות מתן חמצן: התלקחות, היפו-ונטילציה (Oxygen Induced Hypoventilation) והרעלת חמצן (Oxygen Toxicity)."
    },
    {
        question: "Oxygen Induced Hypoventilation היא:",
        options: [
            { text: "ירידה באוורור כתוצאה ממתן חמצן", correct: true },
            { text: "עלייה באוורור כתוצאה ממתן חמצן", correct: false },
            { text: "הרעלת חמצן", correct: false },
            { text: "התלקחות", correct: false }
        ],
        category: "עקרונות מתן חמצן",
        explanation: "Oxygen Induced Hypoventilation היא ירידה באוורור כתוצאה ממתן חמצן, סכנה משמעותית במיוחד אצל מטופלי COPD."
    },
    {
        question: "לפני התחלת מתן חמצן, האחות חייבת:",
        options: [
            { text: "לבדוק קיום הוראת רופא כתובה, ברורה וחתומה", correct: true },
            { text: "להתחיל מתן חמצן ולעדכן רופא אחר כך", correct: false },
            { text: "לבקש הוראה טלפונית בלבד", correct: false },
            { text: "להחליט על ריכוז החמצן באופן עצמאי", correct: false }
        ],
        category: "עקרונות מתן חמצן",
        explanation: "לפני מתן חמצן, האחות בודקת קיום הוראת רופא כתובה, ברורה וחתומה."
    },
    {
        question: "בעת התחלת מתן חמצן, מהו הסדר הנכון?",
        options: [
            { text: "פותחים ברז חמצן ולאחר מכן מרכיבים אמצעי על פני המטופל", correct: true },
            { text: "מרכיבים אמצעי על פני המטופל ולאחר מכן פותחים ברז", correct: false },
            { text: "פותחים ברז ומרכיבים אמצעי בו-זמנית", correct: false },
            { text: "אין סדר מוגדר", correct: false }
        ],
        category: "עקרונות מתן חמצן",
        explanation: "הסדר הנכון: פותחים את ברז החמצן ולאחר מכן מרכיבים את אמצעי מתן החמצן על פני המטופל."
    },
    {
        question: "הפסקת מתן חמצן מותנית ב:",
        options: [
            { text: "קבלת הוראה רפואית כתובה וחתומה", correct: true },
            { text: "החלטת האחות בלבד", correct: false },
            { text: "שיפור במצב המטופל", correct: false },
            { text: "בקשת המטופל", correct: false }
        ],
        category: "עקרונות מתן חמצן",
        explanation: "הפסקת מתן חמצן מותנית בקבלת הוראה רפואית כתובה וחתומה. לאחר ההפסקה, האחות מתעדת ועורכת אמדן חוזר."
    },
    {
        question: "מטופל עם מסכה שרוצה לאכול - מה הפתרון?",
        options: [
            { text: "להחליף למשקפי חמצן בזמן הארוחה", correct: true },
            { text: "להסיר את החמצן לחלוטין", correct: false },
            { text: "לתת לו לאכול עם המסכה", correct: false },
            { text: "לדחות את הארוחה עד הפסקת הטיפול", correct: false }
        ],
        category: "עקרונות מתן חמצן",
        explanation: "ניתן להחליף למשקפיים בזמן ארוחות ולהחליף חזרה. יש להתאים את הזרימה והריכוז במשקפיים לאלו הנדרשים במסכה."
    },
    {
        question: "המטרה הטיפולית במתן חמצן היא:",
        options: [
            { text: "לתת את הריכוז הנמוך ביותר הדרוש להשגת יעילות טיפולית", correct: true },
            { text: "לתת את הריכוז הגבוה ביותר האפשרי", correct: false },
            { text: "לתת 100% חמצן תמיד", correct: false },
            { text: "לתת חמצן רק במצבי חירום", correct: false }
        ],
        category: "עקרונות מתן חמצן",
        explanation: "המטרה הטיפולית היא לתת את הריכוז הנמוך ביותר הדרוש להשגת יעילות טיפולית, ללא הופעת תופעות לוואי."
    },
    {
        question: "הוראה תקנית למתן חמצן חייבת לכלול:",
        options: [
            { text: "תאריך, שעה, אמצעי מתן, כמות/ריכוז, חתימת רופא", correct: true },
            { text: "כמות חמצן ושעה בלבד", correct: false },
            { text: "אמצעי מתן וחתימה בלבד", correct: false },
            { text: "ריכוז חמצן בלבד", correct: false }
        ],
        category: "עקרונות מתן חמצן",
        explanation: "הוראה תקנית למתן חמצן כוללת: תאריך, שעה, אמצעי מתן, כמות (ליטר/דקה) או ריכוז (%), חתימה וחותמת רופא."
    },
    {
        question: "האמדן הנשימתי בעת מתן חמצן כולל:",
        options: [
            { text: "מספר/עומק/קצב נשימות, מראה/צבע, דיווח המטופל, מדדי מעבדה", correct: true },
            { text: "מספר נשימות בלבד", correct: false },
            { text: "סטורציה בלבד", correct: false },
            { text: "צבע העור בלבד", correct: false }
        ],
        category: "עקרונות מתן חמצן",
        explanation: "האמדן הנשימתי כולל: מספר, עומק וקצב נשימות; מראה וצבע המטופל; דיווח על הרגשתו; מדדי מעבדה (גזים, Pulse Oximetry)."
    },
    {
        question: "מה מהבאים הוא תפקיד האחות במהלך מתן חמצן?",
        options: [
            { text: "מניעת נקודות לחץ של הציוד על הפנים", correct: true },
            { text: "קביעת ריכוז החמצן באופן עצמאי", correct: false },
            { text: "הפסקת חמצן ללא הוראת רופא", correct: false },
            { text: "העלאת ריכוז ללא תיעוד", correct: false }
        ],
        category: "עקרונות מתן חמצן",
        explanation: "תפקידי האחות: מניעת נקודות לחץ, מניעת רטיבות/גירוי, מניעת הפרשות במסכה, החלפת מים ומערכת, סיוע בפעילויות יומיומיות."
    },
    {
        question: "האם מותר למטופל המקבל חמצן דרך משקפיים לדבר?",
        options: [
            { text: "כן, דיבור לא משפיע על מידת החמצון", correct: true },
            { text: "לא, יש להימנע מדיבור", correct: false },
            { text: "רק במשפטים קצרים", correct: false },
            { text: "רק אם הסטורציה מעל 98%", correct: false }
        ],
        category: "עקרונות מתן חמצן",
        explanation: "מותר למטופל לדבר באופן רגיל מבלי שהדבר ישפיע על מידת החמצון, גם כאשר מקבל חמצן דרך משקפיים."
    },
    {
        question: "האם מותר להשתמש באותו בקבוק לחות לשני מטופלים?",
        options: [
            { text: "לא, אין להשתמש באותו בקבוק לשני מטופלים", correct: true },
            { text: "כן, אם מחליפים את המים", correct: false },
            { text: "כן, אם מחטאים את הבקבוק", correct: false },
            { text: "כן, אם המטופלים באותו חדר", correct: false }
        ],
        category: "עקרונות מתן חמצן",
        explanation: "אין להשתמש באותו בקבוק לחות לשני מטופלים, כיוון שהמים עלולים להוות מאגר של פתוגנים."
    },
    // ==================== אי-ספיקת כליות ====================
    {
        question: "מהם שלושת הסיווגים של אי-ספיקת כליה חריפה (AKI) לפי מיקום הפגיעה?",
        options: [
            { text: "טרום-כלייתי, תוך-כלייתי, בתר-כלייתי", correct: true },
            { text: "גלומרולרי, טובולרי, אינטרסטיציאלי", correct: false },
            { text: "חד-צדדי, דו-צדדי, מעורב", correct: false },
            { text: "חריף, תת-חריף, כרוני", correct: false }
        ],
        category: "אי-ספיקת כליות",
        explanation: "AKI מסווג ל-Pre-renal (ירידה בזרימת דם לכליה), Intra-renal (נזק לרקמת הכליה עצמה), ו-Post-renal (חסימה ביציאת השתן)."
    },
    {
        question: "מהי הסיבה העיקרית לאי-ספיקת כליה חריפה טרום-כלייתית (Pre-renal)?",
        options: [
            { text: "ירידה בזרימת דם לכליה — התייבשות, דימום, הלם, אי-ספיקת לב", correct: true },
            { text: "נזק ישיר לרקמת הכליה מתרופות", correct: false },
            { text: "חסימה ביציאת השתן מאבנים", correct: false },
            { text: "דלקת בגלומרולי", correct: false }
        ],
        category: "אי-ספיקת כליות",
        explanation: "ב-Pre-renal AKI הכליה עצמה תקינה אך 'מורעבת' מדם. הסיבות: התייבשות, דימום, הלם, אי-ספיקת לב."
    },
    {
        question: "מהי אורמיה?",
        options: [
            { text: "הצטברות פסולת חנקנית (אוריאה, קריאטינין) כשהכליה לא מסננת", correct: true },
            { text: "עודף סידן בדם", correct: false },
            { text: "חוסר אשלגן בדם", correct: false },
            { text: "עודף נתרן בדם", correct: false }
        ],
        category: "אי-ספיקת כליות",
        explanation: "אורמיה היא הצטברות פסולת חנקנית (אוריאה↑, קריאטינין↑). תסמינים: בחילה, הקאות, עייפות, בלבול, גרד, נשימת קוסמאול, ובמצב מתקדם — פריקרדיטיס."
    },
    {
        question: "כליות קטנות באולטרסאונד מרמזות על:",
        options: [
            { text: "תהליך כרוני (CKD)", correct: true },
            { text: "תהליך חריף (AKI)", correct: false },
            { text: "חסימת שתן", correct: false },
            { text: "ממצא תקין", correct: false }
        ],
        category: "אי-ספיקת כליות",
        explanation: "כליות קטנות באולטרסאונד מרמזות על תהליך כרוני. כליות בגודל תקין עם פגיעה פתאומית מרמזות על תהליך חריף."
    },
    {
        question: "מדוע מופיעה אנמיה באי-ספיקת כליה כרונית (CKD)?",
        options: [
            { text: "ירידה בייצור אריתרופויאטין (EPO) בכליה", correct: true },
            { text: "דימום מערכת העיכול", correct: false },
            { text: "חוסר ברזל תזונתי", correct: false },
            { text: "המוליזה אוטואימונית", correct: false }
        ],
        category: "אי-ספיקת כליות",
        explanation: "הכליה מייצרת EPO (אריתרופויאטין) המגרה ייצור כדוריות דם אדומות. כשהכליה נכשלת, ייצור ה-EPO יורד וגורם לאנמיה."
    },
    {
        question: "מהו הסיבוך העצמי הנובע מאי-ספיקת כליה כרונית?",
        options: [
            { text: "מחלת עצם כלייתית (Renal Osteodystrophy)", correct: true },
            { text: "אוסטאוארתריטיס", correct: false },
            { text: "גאוט", correct: false },
            { text: "פיברומיאלגיה", correct: false }
        ],
        category: "אי-ספיקת כליות",
        explanation: "הפרעת מאזן סידן-זרחן-PTH-ויטמין D גורמת להיחלשות העצם — מחלת עצם כלייתית (Renal Osteodystrophy)."
    },
    {
        question: "מהו טריק הזיכרון AEIOU לאינדיקציות לדיאליזה דחופה?",
        options: [
            { text: "חמצת, אלקטרוליטים, הרעלה, עומס נוזלים, אורמיה", correct: true },
            { text: "אנמיה, בצקת, זיהום, אוליגוריה, אורמיה", correct: false },
            { text: "אשלגן, בצקת, אינסולין, אוריאה, עצירות", correct: false },
            { text: "חמצת, בצקת, זיהום, אוריאה, עייפות", correct: false }
        ],
        category: "אי-ספיקת כליות",
        explanation: "AEIOU: Acidosis (חמצת חמורה), Electrolytes (היפרקלמיה מסכנת חיים), Intoxication (הרעלה), Overload (עומס נוזלים/בצקת ריאות), Uremia (תסמיני אורמיה חמורים)."
    },
    {
        question: "מהי היפרפוספטמיה ומדוע היא מופיעה באי-ספיקת כליה כרונית?",
        options: [
            { text: "זרחן גבוה — הכליה לא מפרישה זרחן, מה שמוריד סידן ומגרה PTH", correct: true },
            { text: "זרחן נמוך — הכליה מפרישה יותר מדי זרחן", correct: false },
            { text: "זרחן גבוה — עקב תזונה עשירה בזרחן בלבד", correct: false },
            { text: "זרחן גבוה — עקב עודף ויטמין D", correct: false }
        ],
        category: "אי-ספיקת כליות",
        explanation: "באי-ספיקת כליה כרונית הכליה לא מפרישה זרחן ולא מפעילה ויטמין D. הזרחן הגבוה 'קושר' סידן ומוריד אותו → מגרה הפרשת PTH → פראתירואידיזם שניוני."
    },
    {
        question: "מהי עמידות למשתנים (Diuretic Resistance)?",
        options: [
            { text: "מצב שבו משתני לולאה ותיאזידים אינם מצליחים להפנות נוזלים עקב פגיעה כלייתית קשה", correct: true },
            { text: "אלרגיה לתרופות משתנות", correct: false },
            { text: "שתן מרובה מדי בתגובה למשתנים", correct: false },
            { text: "תגובה מוגזמת למשתנים", correct: false }
        ],
        category: "אי-ספיקת כליות",
        explanation: "כשהכליה פגועה קשות, משתני לולאה (Furosemide) ותיאזידים אינם מצליחים להפנות נוזלים. עמידות זו, יחד עם בצקת ריאות, מחזקת את ההתוויה לדיאליזה."
    },
    // ==================== סוכרת וסיבוכים חריפים ====================
    {
        question: "מהי חמצת קטוטית סוכרתית (DKA)?",
        options: [
            { text: "חוסר אינסולין → פירוק שומן → ייצור קטונים → חמצת מטבולית", correct: true },
            { text: "עודף אינסולין → היפוגליקמיה → חמצת", correct: false },
            { text: "עודף סוכר בלבד ללא חמצת", correct: false },
            { text: "זיהום בדרכי השתן הגורם לחמצת", correct: false }
        ],
        category: "סוכרת וסיבוכים חריפים",
        explanation: "DKA הוא סיבוך חריף בעיקר בסוכרת Type 1. חוסר אינסולין → הגוף לא יכול להכניס גלוקוז לתאים → 'רעב' תאי → פירוק שומן → ייצור קטונים → חמצת מטבולית."
    },
    {
        question: "מהו סימן הנשימה האופייני ל-DKA?",
        options: [
            { text: "נשימת קוסמאול — נשימה עמוקה ומהירה (פיצוי לחמצת)", correct: true },
            { text: "נשימת צ'יין-סטוקס", correct: false },
            { text: "סטרידור", correct: false },
            { text: "נשימה שטחית ואיטית", correct: false }
        ],
        category: "סוכרת וסיבוכים חריפים",
        explanation: "נשימת קוסמאול היא נשימה עמוקה ומהירה — פיצוי נשימתי לחמצת מטבולית חמורה. הגוף 'נושף' CO₂ כדי להעלות pH."
    },
    {
        question: "מהם ממצאי המעבדה האופייניים ב-DKA?",
        options: [
            { text: "היפרגליקמיה, קטונים, pH נמוך, HCO₃ נמוך, BE שלילי", correct: true },
            { text: "היפוגליקמיה, pH גבוה, HCO₃ גבוה", correct: false },
            { text: "סוכר תקין, קטונים שליליים, pH תקין", correct: false },
            { text: "היפרגליקמיה, pH גבוה, אשלגן נמוך", correct: false }
        ],
        category: "סוכרת וסיבוכים חריפים",
        explanation: "ב-DKA: היפרגליקמיה (סוכר גבוה), קטונים בדם/שתן, חמצת מטבולית (pH נמוך, HCO₃ נמוך, BE שלילי). אשלגן תקין/גבוה בתחילה אך יצנח עם מתן אינסולין."
    },
    {
        question: "מהו השלב הראשון בטיפול ב-DKA?",
        options: [
            { text: "נוזלים (NaCl 0.9%) — המטופל מיובש קשות", correct: true },
            { text: "אינסולין IV — להורדת הסוכר מיד", correct: false },
            { text: "ביקרבונט — לתיקון החמצת", correct: false },
            { text: "אשלגן — למניעת היפוקלמיה", correct: false }
        ],
        category: "סוכרת וסיבוכים חריפים",
        explanation: "סדר הטיפול ב-DKA: 1) נוזלים תחילה (ייצוב נפח ולחץ דם), 2) אינסולין IV, 3) השלמת אשלגן (KCl), 4) הוספת גלוקוז כשהסוכר יורד ל-250 mg/dL, 5) ביקרבונט רק בחמצת קיצונית."
    },
    {
        question: "מדוע חשוב לנטר אשלגן בטיפול ב-DKA?",
        options: [
            { text: "האינסולין מכניס אשלגן לתאים → היפוקלמיה מסוכנת", correct: true },
            { text: "האשלגן תמיד נמוך ב-DKA", correct: false },
            { text: "האשלגן גורם לקטונים", correct: false },
            { text: "האשלגן מעלה את הסוכר", correct: false }
        ],
        category: "סוכרת וסיבוכים חריפים",
        explanation: "ב-DKA האשלגן בתחילה תקין/גבוה (החמצת מוציאה K מהתאים), אך מאגרי הגוף מרוקנים. עם מתן אינסולין — האשלגן נכנס לתאים ויצנח. 'שים לב לאשלגן' ו'נוזלים לפני אינסולין' הם המסרים המרכזיים."
    },
    {
        question: "כשהסוכר יורד ל-~250 mg/dL בטיפול ב-DKA, מה עושים?",
        options: [
            { text: "מוסיפים גלוקוז לנוזלים וממשיכים אינסולין (לפינוי קטונים)", correct: true },
            { text: "מפסיקים אינסולין מיד", correct: false },
            { text: "מפסיקים נוזלים", correct: false },
            { text: "מתחילים ביקרבונט", correct: false }
        ],
        category: "סוכרת וסיבוכים חריפים",
        explanation: "לא מפסיקים אינסולין כשהסוכר יורד — אלא מוסיפים גלוקוז לנוזלים וממשיכים אינסולין כדי לפנות קטונים בלי לגרום להיפוגליקמיה."
    },
    {
        question: "מה ההבדל העיקרי בין DKA ל-HHS?",
        options: [
            { text: "ב-HHS אין חמצת קטוטית משמעותית, יש התייבשות קיצונית וסוכר גבוה מאוד", correct: true },
            { text: "ב-HHS יש קטונים גבוהים יותר מ-DKA", correct: false },
            { text: "DKA מופיע בסוכרת Type 2 ו-HHS בסוכרת Type 1", correct: false },
            { text: "אין הבדל משמעותי ביניהם", correct: false }
        ],
        category: "סוכרת וסיבוכים חריפים",
        explanation: "HHS (מצב היפראוסמולרי היפרגליקמי) — בעיקר בסוכרת Type 2. סוכר גבוה מאוד והתייבשות קיצונית, אך בלי חמצת קטוטית משמעותית (יש מספיק אינסולין למנוע קטוזיס). אוסמולריות גבוהה מאוד, ירידה בהכרה."
    },
    {
        question: "מהו יעד ה-HbA1c המקובל בסוכרת כרונית?",
        options: [
            { text: "מתחת ל-7%", correct: true },
            { text: "מתחת ל-5%", correct: false },
            { text: "מתחת ל-10%", correct: false },
            { text: "מתחת ל-9%", correct: false }
        ],
        category: "סוכרת וסיבוכים חריפים",
        explanation: "יעד HbA1c בסוכרת כרונית הוא בדרך כלל מתחת ל-7%. בנוסף: לחץ דם <130/80, LDL נמוך (70-100 לפי סיכון), BMI תקין (18.5-25)."
    },
    {
        question: "מדוע יש להשהות מטפורמין לפני בדיקת CT עם חומר ניגוד?",
        options: [
            { text: "חומר ניגוד עלול לפגוע בכליה, ומטפורמין + פגיעה כלייתית → סיכון לחמצת לקטית", correct: true },
            { text: "מטפורמין מפריע לתוצאות הבדיקה", correct: false },
            { text: "חומר הניגוד מעלה את רמת הסוכר", correct: false },
            { text: "מטפורמין גורם לאלרגיה לחומר ניגוד", correct: false }
        ],
        category: "סוכרת וסיבוכים חריפים",
        explanation: "חומר ניגוד יכול לפגוע בכליה (נפרופתיה). אם המטופל נוטל מטפורמין ויש פגיעה כלייתית — סיכון להצטברות מטפורמין ולחמצת לקטית. יש להשהות מטפורמין ~48 שעות ולחדש רק לאחר וידוא תפקוד כליה תקין."
    },
    {
        question: "אילו בדיקות מעקב יזום נדרשות בסוכרת כרונית?",
        options: [
            { text: "בדיקת עיניים, בדיקת רגליים, תפקודי כליה, מיקרואלבומינוריה", correct: true },
            { text: "בדיקת שמיעה, רנטגן חזה, ספירת דם", correct: false },
            { text: "CT ראש, אולטרסאונד בטן, בדיקת עצמות", correct: false },
            { text: "בדיקת ריאות, אקו לב, בדיקת שתן כללית בלבד", correct: false }
        ],
        category: "סוכרת וסיבוכים חריפים",
        explanation: "מעקב יזום בסוכרת כולל: בדיקת עיניים (רטינופתיה), בדיקת רגליים (כף רגל סוכרתית), תפקודי כליה ובדיקת חלבון בשתן (מיקרואלבומינוריה)."
    },
    // ==================== הפרעות ADH ====================
    {
        question: "מהי ההפרעה ב-SIADH?",
        options: [
            { text: "הפרשת ADH מוגברת → שימור מים יתר → היפונתרמיה (דילול)", correct: true },
            { text: "חוסר ADH → איבוד מים → היפרנתרמיה", correct: false },
            { text: "עודף אלדוסטרון → שימור נתרן", correct: false },
            { text: "חוסר קורטיזול → היפוגליקמיה", correct: false }
        ],
        category: "הפרעות ADH",
        explanation: "ב-SIADH יש הפרשת ADH מוגברת → הכליה שומרת מים → דילול הנתרן (היפונתרמיה). השתן מועט ומרוכז, אוסמולריות דם נמוכה."
    },
    {
        question: "מהי ההפרעה ב-Diabetes Insipidus?",
        options: [
            { text: "חוסר ADH (מרכזי) או חוסר תגובה בכליה (נפרוגני) → איבוד מים → היפרנתרמיה", correct: true },
            { text: "עודף ADH → שימור מים → היפונתרמיה", correct: false },
            { text: "עודף אינסולין → היפוגליקמיה", correct: false },
            { text: "חוסר אינסולין → היפרגליקמיה", correct: false }
        ],
        category: "הפרעות ADH",
        explanation: "ב-Diabetes Insipidus יש חוסר ADH (מרכזי) או חוסר תגובה בכליה (נפרוגני) → איבוד מים → שתן מרובה ומדולל, היפרנתרמיה, אוסמולריות דם גבוהה."
    },
    {
        question: "כיצד מבדילים בין SIADH ל-Diabetes Insipidus לפי השתן?",
        options: [
            { text: "SIADH — שתן מועט ומרוכז; DI — שתן מרובה ומדולל", correct: true },
            { text: "SIADH — שתן מרובה; DI — שתן מועט", correct: false },
            { text: "שניהם — שתן מרובה ומדולל", correct: false },
            { text: "שניהם — שתן מועט ומרוכז", correct: false }
        ],
        category: "הפרעות ADH",
        explanation: "SIADH: ADH עודף → הכליה שומרת מים → שתן מועט ומרוכז (אוסמולריות שתן גבוהה). DI: חוסר ADH → הכליה לא שומרת מים → שתן מרובה ומדולל (אוסמולריות שתן נמוכה)."
    },
    {
        question: "מהו הטיפול העקרוני ב-SIADH?",
        options: [
            { text: "הגבלת נוזלים; במצב חמור — NaCl היפרטוני זהיר", correct: true },
            { text: "מתן נוזלים מרובים", correct: false },
            { text: "מתן Desmopressin", correct: false },
            { text: "דיאליזה דחופה", correct: false }
        ],
        category: "הפרעות ADH",
        explanation: "ב-SIADH הגוף שומר מים — לכן הטיפול הוא הגבלת נוזלים. במצב חמור עם היפונתרמיה קשה — NaCl היפרטוני (3%) זהיר."
    },
    {
        question: "מהו הטיפול ב-Diabetes Insipidus מרכזי?",
        options: [
            { text: "Desmopressin (תחליף ADH סינתטי) והשלמת נוזלים", correct: true },
            { text: "הגבלת נוזלים", correct: false },
            { text: "אינסולין", correct: false },
            { text: "משתנים", correct: false }
        ],
        category: "הפרעות ADH",
        explanation: "ב-DI מרכזי יש חוסר ADH — הטיפול הוא Desmopressin (תחליף ADH סינתטי) והשלמת נוזלים."
    },
    {
        question: "טריק זיכרון: כיצד לזכור ש-Diabetes Insipidus גורם לשתן מרובה?",
        options: [
            { text: "השתן 'תפל' (insipid) — מדולל ומרובה", correct: true },
            { text: "השתן 'מתוק' — מכיל סוכר", correct: false },
            { text: "השתן 'חמוץ' — pH נמוך", correct: false },
            { text: "השתן 'כהה' — מרוכז מאוד", correct: false }
        ],
        category: "הפרעות ADH",
        explanation: "Diabetes Insipidus — השתן 'תפל' (insipid), מדולל ומרובה. לעומת זאת, ב-SIADH — 'S' כמו 'Save' — הגוף שומר מים → דילול הנתרן."
    },
    // ==================== הלם ====================
    {
        question: "מהו הלם (Shock)?",
        options: [
            { text: "תת-זילוח רקמתי — אספקת חמצן/דם לרקמות נמוכה מהצורך", correct: true },
            { text: "לחץ דם גבוה מאוד", correct: false },
            { text: "דופק איטי מאוד", correct: false },
            { text: "חום גבוה בלבד", correct: false }
        ],
        category: "הלם",
        explanation: "הלם = תת-זילוח רקמתי. ללא טיפול → כשל איברים. סימן מעבדתי מרכזי משותף: לקטט גבוה."
    },
    {
        question: "מהו סימן המעבדה המרכזי המשותף לכל סוגי ההלם?",
        options: [
            { text: "לקטט גבוה", correct: true },
            { text: "סוכר גבוה", correct: false },
            { text: "המוגלובין נמוך", correct: false },
            { text: "נתרן גבוה", correct: false }
        ],
        category: "הלם",
        explanation: "לקטט הוא תוצר חילוף אנאירובי. כשיש תת-זילוח רקמתי, התאים עוברים לחילוף חומרים אנאירובי → לקטט עולה. לקטט >4 = חמור."
    },
    {
        question: "מהם המאפיינים הייחודיים של הלם נוירוגני?",
        options: [
            { text: "היפוטנשן עם ברדיקרדיה ועור חם — בניגוד לשאר ההלמים", correct: true },
            { text: "טכיקרדיה ועור קר", correct: false },
            { text: "חום גבוה ובלבול", correct: false },
            { text: "פריחה וקוצר נשימה", correct: false }
        ],
        category: "הלם",
        explanation: "הלם נוירוגני (פגיעת עמוד שדרה) — אובדן טונוס סימפתטי. סימן ההיכר: היפוטנשן עם ברדיקרדיה ועור חם ויבש — שונה מכל שאר סוגי ההלם שבהם יש טכיקרדיה ועור קר."
    },
    {
        question: "מהו הטיפול הראשוני בהלם ספטי?",
        options: [
            { text: "אנטיביוטיקה מהירה, נוזלים, וזופרסורים", correct: true },
            { text: "אדרנלין וסטרואידים בלבד", correct: false },
            { text: "עירוי דם בלבד", correct: false },
            { text: "ניתוח דחוף", correct: false }
        ],
        category: "הלם",
        explanation: "הלם ספטי — זיהום מערכתי → הרחבת כלי דם. טיפול: אנטיביוטיקה מהירה, נוזלים, וזופרסורים. סימנים: לקטט גבוה, רקע זיהומי, חום, בלבול."
    },
    {
        question: "מהו הטיפול הראשוני בהלם אנפילקטי?",
        options: [
            { text: "אדרנלין, נוזלים, חמצן, אנטיהיסטמין/סטרואיד", correct: true },
            { text: "אנטיביוטיקה ונוזלים", correct: false },
            { text: "עירוי דם בלבד", correct: false },
            { text: "אינסולין וגלוקוז", correct: false }
        ],
        category: "הלם",
        explanation: "הלם אנפילקטי — תגובה אלרגית חריפה. סימנים: חשיפה לאלרגן, פריחה, קוצר נשימה/ברונכוספאזם, נפיחות. טיפול: אדרנלין, נוזלים, חמצן, אנטיהיסטמין/סטרואיד."
    },
    {
        question: "מהם שלבי ההלם?",
        options: [
            { text: "ראשוני → מפוצה → מתקדם (לא-מפוצה) → בלתי הפיך", correct: true },
            { text: "קל → בינוני → חמור", correct: false },
            { text: "חריף → תת-חריף → כרוני", correct: false },
            { text: "ראשוני → כרוני → סופני", correct: false }
        ],
        category: "הלם",
        explanation: "4 שלבי הלם: 1) ראשוני (ללא תסמינים בולטים, לקטט מתחיל לעלות), 2) מפוצה (טכיקרדיה, עור קר, ל\"ד נשמר), 3) מתקדם (ל\"ד נמוך, בלבול, חמצת), 4) בלתי הפיך (כשל רב-מערכתי)."
    },
    {
        question: "בשלב המפוצה של ההלם, מה מאפשר שמירה על לחץ דם?",
        options: [
            { text: "מנגנוני פיצוי — מערכת סימפתטית ו-RAAS", correct: true },
            { text: "מתן נוזלים", correct: false },
            { text: "תפקוד כלייתי תקין", correct: false },
            { text: "מתן וזופרסורים", correct: false }
        ],
        category: "הלם",
        explanation: "בשלב המפוצה הגוף מפצה באמצעות המערכת הסימפתטית ו-RAAS. סימנים: טכיקרדיה, נשימה מהירה, עור קר, שתן מועט, מילוי קפילרי מואט — אך ל\"ד עדיין נשמר."
    },
    {
        question: "מהו מילוי קפילרי (Capillary Refill) תקין?",
        options: [
            { text: "פחות מ-3 שניות", correct: true },
            { text: "פחות מ-5 שניות", correct: false },
            { text: "פחות מ-1 שנייה", correct: false },
            { text: "פחות מ-10 שניות", correct: false }
        ],
        category: "הלם",
        explanation: "מילוי קפילרי תקין הוא פחות מ-3 שניות. בשלב המתקדם של הלם, מילוי קפילרי >3-4 שניות מעיד על תת-זילוח חמור."
    },
    {
        question: "מהו הטיפול בהלם היפו-וולמי/דימומי?",
        options: [
            { text: "החזרת נוזלים/דם ועצירת מקור הדימום", correct: true },
            { text: "אנטיביוטיקה ווזופרסורים", correct: false },
            { text: "אדרנלין וסטרואידים", correct: false },
            { text: "אינוטרופים ותמיכה לבבית", correct: false }
        ],
        category: "הלם",
        explanation: "הלם היפו-וולמי/דימומי — אובדן נפח/דם. סימנים: טכיקרדיה, ל\"ד נמוך, שתן מועט, עור קר ולח. טיפול: החזרת נוזלים/דם, עצירת מקור הדימום."
    },
    // ==================== כאב ====================
    {
        question: "מהו ההבדל בין כאב נוציצפטיבי סומטי לכאב נוציצפטיבי ויסצרלי?",
        options: [
            { text: "סומטי — חד וממוקם (עור, שריר, עצם); ויסצרלי — עמום ומפושט (איברים פנימיים)", correct: true },
            { text: "סומטי — שורף ומחשמל; ויסצרלי — חד וממוקם", correct: false },
            { text: "סומטי — ללא מקור ברור; ויסצרלי — תמיד ממוקם", correct: false },
            { text: "אין הבדל ביניהם", correct: false }
        ],
        category: "כאב",
        explanation: "כאב נוציצפטיבי סומטי — מקורו בעור, שריר, עצם, מפרק. חד, ממוקם. כאב נוציצפטיבי ויסצרלי — מקורו באיברים פנימיים (קרביים). עמום, מפושט, קשה לאיתור, מלווה בחילה/לחץ פנימי."
    },
    {
        question: "מהם המאפיינים של כאב נוירופתי?",
        options: [
            { text: "שורף, נימול, 'מחשמל' — פגיעה/גירוי בעצב עצמו", correct: true },
            { text: "חד וממוקם — פגיעה בעור", correct: false },
            { text: "עמום ומפושט — פגיעה באיברים פנימיים", correct: false },
            { text: "כאב שמשתנה עם מנוחה בלבד", correct: false }
        ],
        category: "כאב",
        explanation: "כאב נוירופתי — פגיעה/גירוי בעצב עצמו. אופי: שורף, נימול, 'מחשמל'. אופייני לנוירופתיה סוכרתית. לעיתים מופיע שעות אחרי האירוע."
    },
    {
        question: "מהו כאב מוקרן (Referred Pain)?",
        options: [
            { text: "כאב שנתפס באזור מרוחק ממקור הכאב (למשל כאב לב המוקרן ליד/לסת)", correct: true },
            { text: "כאב שנמשך מעבר לזמן הריפוי", correct: false },
            { text: "כאב שנגרם מגירוי עצבי ישיר", correct: false },
            { text: "כאב שמופיע רק בלילה", correct: false }
        ],
        category: "כאב",
        explanation: "כאב מוקרן (Referred Pain) — כאב שמורגש באזור אחר ממקורו. דוגמה קלאסית: כאב לב המוקרן ליד שמאל או לסת."
    },
    {
        question: "לפי סולם WHO לטיפול בכאב, מהו הטיפול בכאב קל (מדרגה 1)?",
        options: [
            { text: "פרצטמול (Acamol), דיפירון (Optalgin), NSAIDs (Voltaren) — לא אופיואידים", correct: true },
            { text: "טרמדול (Tramal) — אופיואיד חלש", correct: false },
            { text: "מורפין — אופיואיד חזק", correct: false },
            { text: "PCA — משאבת כאב", correct: false }
        ],
        category: "כאב",
        explanation: "סולם WHO: מדרגה 1 (כאב קל) — לא אופיואידים: פרצטמול (Acamol), דיפירון (Optalgin), NSAIDs (Voltaren). מדרגה 2 — אופיואידים חלשים (טרמדול, קודאין). מדרגה 3 — אופיואידים חזקים (מורפין, פנטניל)."
    },
    {
        question: "מהי PCA (Patient-Controlled Analgesia)?",
        options: [
            { text: "משאבה שמאפשרת למטופל לתת לעצמו מנת משכך בלחיצה, עם הגבלות בטיחות", correct: true },
            { text: "מתן משככים קבוע לפי שעון", correct: false },
            { text: "זריקה תת-עורית חד-פעמית", correct: false },
            { text: "טיפול בכאב ללא תרופות", correct: false }
        ],
        category: "כאב",
        explanation: "PCA — משאבה שמאפשרת למטופל לתת לעצמו מנת משכך (לרוב אופיואיד) בלחיצה, עם הגבלות בטיחות (מנה מקסימלית, נעילת זמן). נפוץ לכאב פוסט-ניתוחי בינוני-חזק."
    },
    {
        question: "מהם שיקולי הבטיחות העיקריים בבחירת משכך כאב?",
        options: [
            { text: "NSAIDs — זהירות בפגיעה כלייתית/דימום/כיב; אופיואידים — מעקב דיכוי נשימתי ולחץ דם", correct: true },
            { text: "כל המשככים בטוחים ללא הגבלה", correct: false },
            { text: "רק אופיואידים דורשים ניטור", correct: false },
            { text: "רק NSAIDs דורשים ניטור", correct: false }
        ],
        category: "כאב",
        explanation: "NSAIDs — זהירות בפגיעה כלייתית, דימום, כיב פפטי. אופיואידים — מעקב אחר דיכוי נשימתי ולחץ דם. יש להתאים את המשכך למצב הקליני (תפקוד כליה, נשימה, ל\"ד)."
    },
    {
        question: "מהו ההבדל בין כאב חריף לכאב כרוני?",
        options: [
            { text: "חריף — קצר-טווח, 'אזעקה' (אחרי פציעה/ניתוח); כרוני — נמשך מעבר ל-~3 חודשים", correct: true },
            { text: "חריף תמיד חזק יותר מכרוני", correct: false },
            { text: "כרוני תמיד ממוקם, חריף תמיד מפושט", correct: false },
            { text: "אין הבדל קליני ביניהם", correct: false }
        ],
        category: "כאב",
        explanation: "כאב חריף הוא קצר-טווח ומשמש 'אזעקה' (אחרי ניתוח/פציעה). כאב כרוני נמשך מעבר לזמן הריפוי הצפוי (~3 חודשים ומעלה)."
    },
    // ==================== סיבוכים פוסט-ניתוחיים ====================
    {
        question: "מהם שלושת הגורמים במשולש Virchow לסיכון לפקקת ורידים עמוקים (DVT)?",
        options: [
            { text: "סטזיס/חוסר תנועה, פגיעה בדופן כלי דם, נטייה לקרישיות יתר", correct: true },
            { text: "חום, בלבול, לקטט גבוה", correct: false },
            { text: "היפוקסיה, היפרקפניה, חמצת", correct: false },
            { text: "זיהום, דימום, אנמיה", correct: false }
        ],
        category: "סיבוכים פוסט-ניתוחיים",
        explanation: "משולש Virchow — שלושת גורמי הסיכון ל-DVT: סטזיס/חוסר תנועה (אחרי ניתוח, ריתוק למיטה), פגיעה בדופן כלי דם, נטייה לקרישיות יתר."
    },
    {
        question: "מהם התסמינים הקלאסיים של תסחיף ריאתי (PE)?",
        options: [
            { text: "קוצר נשימה פתאומי, כאב חזה פלאוריטי, טכיקרדיה, ירידת סטורציה", correct: true },
            { text: "חום גבוה וליחה מוגלתית", correct: false },
            { text: "כאב בטן וצהבת", correct: false },
            { text: "כאב גב ושתן כהה", correct: false }
        ],
        category: "סיבוכים פוסט-ניתוחיים",
        explanation: "תסחיף ריאתי (PE) — קריש שנודד לריאה. תסמינים: קוצר נשימה פתאומי, כאב חזה פלאוריטי, טכיקרדיה, ירידת סטורציה, ירידת ל\"ד. קלאסי 24+ שעות אחרי ניתוח."
    },
    {
        question: "מהי הבדיקה המעבדתית הראשונית לשלילת PE/DVT?",
        options: [
            { text: "D-dimer — שלילי שולל קריש בסבירות גבוהה", correct: true },
            { text: "Troponin", correct: false },
            { text: "CRP", correct: false },
            { text: "LDH", correct: false }
        ],
        category: "סיבוכים פוסט-ניתוחיים",
        explanation: "D-dimer: גבוה — חשד לקריש (תומך ב-PE/DVT); שלילי — שולל קריש בסבירות גבוהה. אבחנה ודאית של PE: אנגיו ריאות CT. Troponin שייך ל-MI, לא ל-PE."
    },
    {
        question: "מהי הסיבה השכיחה ביותר לחום ביום הראשון אחרי ניתוח?",
        options: [
            { text: "תמט ריאה (Atelectasis) — Wind", correct: true },
            { text: "זיהום בדרכי שתן — Water", correct: false },
            { text: "זיהום פצע — Wound", correct: false },
            { text: "פקקת ורידים — Walking", correct: false }
        ],
        category: "סיבוכים פוסט-ניתוחיים",
        explanation: "ציר הזמן של חום פוסט-ניתוחי (5 W's): יום 0-1: Wind (תמט ריאה), יום 1-3: Water (זיהום שתן), יום 3-5: Walking (DVT/זיהום), יום 5-7: Wound (זיהום פצע), כל זמן: Wonder drugs (תרופות)."
    },
    {
        question: "מהי Atelectasis (תמט ריאה)?",
        options: [
            { text: "קריסת נאדיות ריאה — הסיבה השכיחה ביותר לחום מוקדם אחרי ניתוח", correct: true },
            { text: "דלקת ריאות", correct: false },
            { text: "תסחיף ריאתי", correct: false },
            { text: "בצקת ריאות", correct: false }
        ],
        category: "סיבוכים פוסט-ניתוחיים",
        explanation: "Atelectasis — קריסת נאדיות ריאה. נובע מנשימה שטחית, כאב והפרשות אחרי ניתוח. מניעה: נשימות עמוקות, ספירומטריה מעודדת, תנועה מוקדמת."
    },
    {
        question: "מהם עקרונות המניעה של VAP (דלקת ריאות הקשורה להנשמה)?",
        options: [
            { text: "הרמת ראש המיטה ל-30°-45°, היגיינת פה, חופשת הרגעה, שאיבת הפרשות תת-גלוטיות", correct: true },
            { text: "שכיבה שטוחה ומנוחה מלאה", correct: false },
            { text: "אנטיביוטיקה מונעת בלבד", correct: false },
            { text: "גמילה מיידית מהנשמה ללא הערכה", correct: false }
        ],
        category: "סיבוכים פוסט-ניתוחיים",
        explanation: "חבילת מניעת VAP: הרמת ראש המיטה ל-30°-45° (לא שטוח!), טיפול פה וכלורהקסידין, 'חופשת הרגעה' יומית והערכת מוכנות לגמילה, שאיבת הפרשות תת-גלוטיות, מניעת כיב לחץ ופקקת."
    },
    {
        question: "מהו תסחיף שומן (Fat Embolism)?",
        options: [
            { text: "חלקיקי שומן שנכנסים למחזור הדם אחרי שברים בעצמות ארוכות — מצוקה נשימתית, פריחה פטכיאלית, בלבול", correct: true },
            { text: "קריש דם שנודד לריאה", correct: false },
            { text: "בצקת ריאות מעומס נוזלים", correct: false },
            { text: "דלקת ריאות זיהומית", correct: false }
        ],
        category: "סיבוכים פוסט-ניתוחיים",
        explanation: "תסחיף שומן — בעיקר אחרי שברים בעצמות ארוכות. חלקיקי שומן נכנסים למחזור הדם וגורמים למצוקה נשימתית, פריחה פטכיאלית ובלבול."
    },
    {
        question: "מהם הסימנים של בצקת ריאות?",
        options: [
            { text: "חרחורים (Crackles/Rales) בבסיסים, קוצר נשימה, לעיתים ליחה מוקצפת ורודה", correct: true },
            { text: "צפצופים (Wheezing) וסטרידור", correct: false },
            { text: "כאב חזה חד בלבד", correct: false },
            { text: "חום גבוה וליחה מוגלתית", correct: false }
        ],
        category: "סיבוכים פוסט-ניתוחיים",
        explanation: "בצקת ריאות — הצטברות נוזל בריאות. סימנים: חרחורים (Crackles/Rales) בבסיסים, קוצר נשימה, ליחה מוקצפת ורודה. סיבות: אי-ספיקת לב, עומס נוזלים, אי-ספיקת כליה."
    },
    // ==================== עירוי דם ====================
    {
        question: "מהי תגובת TACO בעירוי דם?",
        options: [
            { text: "עומס נוזלים — בצקת ריאות, קוצר נשימה, חרחורים, יתר ל\"ד", correct: true },
            { text: "פגיעת ריאה חיסונית", correct: false },
            { text: "אי-התאמת סוג דם", correct: false },
            { text: "תגובה אלרגית", correct: false }
        ],
        category: "עירוי דם",
        explanation: "TACO (Transfusion-Associated Circulatory Overload) — עומס נוזלים, בעיקר בחולה לב/כליה. סימנים: בצקת ריאות מעומס, קוצר נשימה, חרחורים, יתר ל\"ד, גודש. טיפול: האטה/הפסקת העירוי, ישיבה זקופה, חמצן, משתן (פוסיד)."
    },
    {
        question: "מהי תגובת TRALI בעירוי דם?",
        options: [
            { text: "פגיעת ריאה חיסונית — מצוקה נשימתית חריפה תוך שעות מהעירוי", correct: true },
            { text: "עומס נוזלים — בצקת ריאות מעומס", correct: false },
            { text: "חום וצמרמורת בלבד", correct: false },
            { text: "תגובה אלרגית עם פריחה", correct: false }
        ],
        category: "עירוי דם",
        explanation: "TRALI (Transfusion-Related Acute Lung Injury) — תגובה חיסונית בריאות הגורמת למצוקה נשימתית חריפה תוך שעות מהעירוי."
    },
    {
        question: "מהם הסימנים של תגובה המוליטית בעירוי דם?",
        options: [
            { text: "חום, צמרמורת, כאב גב/מותן, שתן כהה — מצב חירום", correct: true },
            { text: "פריחה וגרד בלבד", correct: false },
            { text: "חום ללא תסמינים נוספים", correct: false },
            { text: "קוצר נשימה וחרחורים", correct: false }
        ],
        category: "עירוי דם",
        explanation: "תגובה המוליטית — אי-התאמת סוג דם. סימנים: חום, צמרמורת, כאב גב/מותן, שתן כהה. זהו מצב חירום. חייבים להפסיק עירוי מיד."
    },
    {
        question: "מהו ההבדל בין תגובה חומית (Febrile) לתגובה המוליטית בעירוי דם?",
        options: [
            { text: "חומית — חום וצמרמורת ללא המוליזה; המוליטית — כאב גב, שתן כהה, חירום", correct: true },
            { text: "אין הבדל ביניהן", correct: false },
            { text: "חומית חמורה יותר מהמוליטית", correct: false },
            { text: "שתיהן גורמות לשתן כהה", correct: false }
        ],
        category: "עירוי דם",
        explanation: "תגובה חומית (Febrile) — תגובה לכדוריות לבנות, חום וצמרמורת ללא המוליזה. תגובה המוליטית — אי-התאמת סוג דם, חום, כאב גב/מותן, שתן כהה — מצב חירום."
    },
    {
        question: "TACO שכיח במיוחד בחולה עם:",
        options: [
            { text: "אי-ספיקת לב שמקבל כמה מנות דם", correct: true },
            { text: "סוכרת מאוזנת", correct: false },
            { text: "אנמיה קלה", correct: false },
            { text: "חולה צעיר ובריא", correct: false }
        ],
        category: "עירוי דם",
        explanation: "TACO שכיח בחולה עם אי-ספיקת לב שמקבל כמה מנות דם. הטיפול: האטה/הפסקת העירוי, ישיבה זקופה, חמצן, ולרוב משתן (פוסיד) להפנות את עודף הנוזל."
    },
    // ==================== זיהום בדרכי שתן ====================
    {
        question: "מהם התסמינים של ציסטיטיס (דלקת בשלפוחית)?",
        options: [
            { text: "צריבה, תכיפות, דחיפות במתן שתן", correct: true },
            { text: "חום גבוה, כאב מותני, הרגשה כללית רעה", correct: false },
            { text: "שתן מרובה ומדולל", correct: false },
            { text: "כאב בטן וצהבת", correct: false }
        ],
        category: "זיהום בדרכי שתן",
        explanation: "ציסטיטיס (Cystitis) — דלקת בשלפוחית (דרכי שתן תחתונות). תסמינים: צריבה, תכיפות, דחיפות במתן שתן."
    },
    {
        question: "מהם התסמינים של פיאלונפריטיס (זיהום בכליה)?",
        options: [
            { text: "חום גבוה, כאב מותני, הרגשה כללית רעה", correct: true },
            { text: "צריבה ודחיפות במתן שתן בלבד", correct: false },
            { text: "שתן מרובה ומדולל", correct: false },
            { text: "כאב חזה וקוצר נשימה", correct: false }
        ],
        category: "זיהום בדרכי שתן",
        explanation: "פיאלונפריטיס (Pyelonephritis) — זיהום בכליה (דרכי שתן עליונות). תסמינים: חום גבוה, כאב מותני, הרגשה כללית רעה."
    },
    {
        question: "מהו הצירוף המחשיד ביותר לזיהום בדרכי שתן במקלון שתן (Dipstick)?",
        options: [
            { text: "Nitrites חיוביות + Leukocyte Esterase חיובי + חיידקים", correct: true },
            { text: "דם בלבד", correct: false },
            { text: "חלבון בלבד", correct: false },
            { text: "גלוקוז בשתן", correct: false }
        ],
        category: "זיהום בדרכי שתן",
        explanation: "הצירוף המחשיד ביותר: Nitrites חיוביות (חיידקים גראם-שליליים כמו E. coli שהופכים חנקה לחנקתית) + Leukocyte Esterase חיובי (כדוריות לבנות/דלקת) + חיידקים."
    },
    {
        question: "מה מסמנות Nitrites חיוביות בבדיקת שתן?",
        options: [
            { text: "נוכחות חיידקים גראם-שליליים (כמו E. coli) — מחשיד מאוד לזיהום", correct: true },
            { text: "חלבון גבוה בשתן", correct: false },
            { text: "סוכר בשתן", correct: false },
            { text: "דם בשתן", correct: false }
        ],
        category: "זיהום בדרכי שתן",
        explanation: "Nitrites חיוביות — חיידקים גראם-שליליים (כמו E. coli) שהופכים חנקה (Nitrate) לחנקתית (Nitrite). ממצא מאוד מחשיד לזיהום בדרכי שתן."
    },
    // ==================== הערכה סיעודית ====================
    {
        question: "מהו סדר הפעולות לפי גישת ABCDE בכל מצב חריף?",
        options: [
            { text: "Airway → Breathing → Circulation → Disability → Exposure", correct: true },
            { text: "Breathing → Airway → Circulation → Disability → Exposure", correct: false },
            { text: "Circulation → Airway → Breathing → Exposure → Disability", correct: false },
            { text: "Disability → Circulation → Breathing → Airway → Exposure", correct: false }
        ],
        category: "הערכה סיעודית",
        explanation: "ABCDE: A — Airway (נתיב אוויר פתוח), B — Breathing (נשימה וסטורציה), C — Circulation (דופק, ל\"ד, גישה ורידית, ECG), D — Disability (הערכה נוירולוגית, GCS), E — Exposure (חשיפה, חום, בדיקה גופנית)."
    },
    {
        question: "מהו GCS (Glasgow Coma Scale)?",
        options: [
            { text: "כלי להערכת רמת הכרה — פקיחת עיניים, תגובה מילולית, תגובה מוטורית", correct: true },
            { text: "מדד לתפקוד כלייתי", correct: false },
            { text: "סולם כאב", correct: false },
            { text: "מדד לתפקוד לבבי", correct: false }
        ],
        category: "הערכה סיעודית",
        explanation: "GCS (Glasgow Coma Scale) — כלי להערכת רמת הכרה. בודק שלושה מרכיבים: פקיחת עיניים (E), תגובה מילולית (V), תגובה מוטורית (M)."
    },
    {
        question: "מהו I&O (Intake & Output)?",
        options: [
            { text: "מעקב אחר כניסת נוזלים מול תפוקת שתן — קריטי באי-ספיקת כליה, הלם, והפרעות נתרן", correct: true },
            { text: "מדד לתפקוד ריאתי", correct: false },
            { text: "סולם הערכת כאב", correct: false },
            { text: "מדד לתפקוד לבבי", correct: false }
        ],
        category: "הערכה סיעודית",
        explanation: "I&O (Intake & Output) — מעקב אחר כניסת נוזלים מול תפוקת שתן. קריטי באי-ספיקת כליה, הלם, והפרעות נתרן."
    },
    {
        question: "מהו כלל ROME לפענוח ABG?",
        options: [
            { text: "Respiratory Opposite, Metabolic Equal — כיוון ה-pH ביחס לגורם", correct: true },
            { text: "שם של תרופה לטיפול בחמצת", correct: false },
            { text: "פרוטוקול להנשמה", correct: false },
            { text: "סולם הערכת כאב", correct: false }
        ],
        category: "הערכה סיעודית",
        explanation: "ROME: בבעיה נשימתית — pH ו-pCO₂ הולכים בכיוונים הפוכים (Respiratory Opposite). בבעיה מטבולית — pH ו-HCO₃ הולכים יחד באותו כיוון (Metabolic Equal)."
    },
    {
        question: "אשלגן מעל 6.5 עם גלי T חדים והרחבת QRS מעיד על:",
        options: [
            { text: "היפרקלמיה מסכנת חיים — דיאליזה/טיפול דחוף", correct: true },
            { text: "היפוקלמיה", correct: false },
            { text: "היפוקלצמיה", correct: false },
            { text: "היפרנתרמיה", correct: false }
        ],
        category: "הערכה סיעודית",
        explanation: "K⁺ > 6.5 עם גלי T חדים והרחבת QRS — היפרקלמיה מסכנת חיים. דורש טיפול דחוף: סידן IV (מגן על הלב), אינסולין+גלוקוז, סלבוטמול, ולעיתים דיאליזה."
    },
    {
        question: "לחץ דם נמוך + טכיקרדיה + עור קר + שתן מועט — חשד ל:",
        options: [
            { text: "הלם (היפו-וולמי/ספטי)", correct: true },
            { text: "הלם נוירוגני", correct: false },
            { text: "היפותרמיה", correct: false },
            { text: "אלקלוזיס מטבולי", correct: false }
        ],
        category: "הערכה סיעודית",
        explanation: "ל\"ד נמוך + טכיקרדיה + עור קר + שתן מועט = הלם (היפו-וולמי או ספטי). לעומת זאת, הלם נוירוגני מאופיין בברדיקרדיה + עור חם."
    },
    {
        question: "נתרן נמוך + שתן מרוכז + אוסמולריות דם נמוכה — חשד ל:",
        options: [
            { text: "SIADH", correct: true },
            { text: "Diabetes Insipidus", correct: false },
            { text: "אי-ספיקת כליה", correct: false },
            { text: "היפרנתרמיה", correct: false }
        ],
        category: "הערכה סיעודית",
        explanation: "Na↓ + שתן מרוכז + אוסמולריות דם נמוכה = SIADH (עודף ADH → שימור מים → דילול נתרן). לעומת Diabetes Insipidus: Na↑ + שתן מרובה + אוסמולריות גבוהה."
    },
    {
        question: "קוצר נשימה פתאומי + ירידת סטורציה אחרי ניתוח — חשד ל:",
        options: [
            { text: "תסחיף ריאתי (PE)", correct: true },
            { text: "תמט ריאה (Atelectasis)", correct: false },
            { text: "דלקת ריאות", correct: false },
            { text: "ברונכיטיס", correct: false }
        ],
        category: "הערכה סיעודית",
        explanation: "קוצר נשימה פתאומי + ירידת סטורציה אחרי ניתוח = חשד לתסחיף ריאתי (PE). בדיקה: D-dimer (שלילי שולל), ואבחנה ודאית באנגיו ריאות CT."
    },
    {
        question: "חרחורים + קוצר נשימה במהלך/אחרי עירוי דם — חשד ל:",
        options: [
            { text: "TACO (עומס נוזלים מעירוי)", correct: true },
            { text: "TRALI (פגיעת ריאה חיסונית)", correct: false },
            { text: "תגובה אלרגית", correct: false },
            { text: "תגובה המוליטית", correct: false }
        ],
        category: "הערכה סיעודית",
        explanation: "חרחורים + קוצר נשימה במהלך/אחרי עירוי דם = TACO (עומס נוזלים). טיפול: האטה/הפסקת העירוי, ישיבה זקופה, חמצן, משתן."
    },
    {
        question: "מהי סכנת תיקון מהיר מדי של היפונתרמיה?",
        options: [
            { text: "ODS (Osmotic Demyelination Syndrome) — נזק מוחי בלתי הפיך", correct: true },
            { text: "היפרקלמיה", correct: false },
            { text: "בצקת ריאות", correct: false },
            { text: "היפוגליקמיה", correct: false }
        ],
        category: "הערכה סיעודית",
        explanation: "תיקון מהיר מדי של היפונתרמיה (~20 mEq בכמה שעות) עלול לגרום ל-ODS (Central Pontine Myelinolysis) — נזק מוחי בלתי הפיך. נדרש: קצב עלייה מבוקר (8-10 mEq/L ביממה), ניטור נתרן תכוף (כל 2-4 שעות)."
    },
    {
        question: "מהי סכנת מתן ביקרבונט מהיר בחמצת חמורה (כמו DKA)?",
        options: [
            { text: "החמצת מוחית פרדוקסלית, היפוקלמיה, הסטה שמאלה של עקומת ההמוגלובין", correct: true },
            { text: "היפרגליקמיה בלבד", correct: false },
            { text: "עלייה בלקטט", correct: false },
            { text: "ברדיקרדיה בלבד", correct: false }
        ],
        category: "הערכה סיעודית",
        explanation: "מתן ביקרבונט מהיר בחמצת חמורה עלול לגרום ל: 1) החמצת מוחית פרדוקסלית (CO₂ חוצה מחסום דם-מוח), 2) הסטה שמאלה של עקומת המוגלובין-חמצן (היפוקסיה רקמתית), 3) היפוקלמיה (K נכנס לתאים), 4) היפרנתרמיה ועומס נוזלים."
    }
];
