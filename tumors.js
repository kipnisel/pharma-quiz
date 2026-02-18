// חידון היסטולוגיה - סוגי רקמות וגידולים - Quiz Data
const tumorsData = [
    // ===== סוגי רקמות =====
    {
        question: "איזו מהרקמות הבאות היא רקמה אפיתליאלית?",
        options: [
            { text: "עור - אפידרמיס", correct: true },
            { text: "רקמת שומן", correct: false },
            { text: "רקמת סחוס", correct: false },
            { text: "רקמת עצם", correct: false }
        ],
        category: "סוגי רקמות",
        explanation: "העור (אפידרמיס) הוא רקמה אפיתליאלית. רקמת שומן, סחוס ועצם הן רקמות מזנכימאליות."
    },
    {
        question: "איזו מהרקמות הבאות היא רקמה מזנכימאלית?",
        options: [
            { text: "רקמת חיבור", correct: true },
            { text: "ריריות (Mucosa)", correct: false },
            { text: "בלוטות", correct: false },
            { text: "אפידרמיס", correct: false }
        ],
        category: "סוגי רקמות",
        explanation: "רקמת חיבור היא רקמה מזנכימאלית. ריריות, בלוטות ואפידרמיס הן רקמות אפיתליאליות."
    },
    {
        question: "לאיזו קבוצת רקמות שייכות בלוטות הזיעה, הדמעות, החלב והרוק?",
        options: [
            { text: "רקמה אפיתליאלית", correct: true },
            { text: "רקמה מזנכימאלית", correct: false },
            { text: "רקמת חיבור", correct: false },
            { text: "רקמת שריר", correct: false }
        ],
        category: "סוגי רקמות",
        explanation: "בלוטות (זיעה, דמעה, חלב, רוק) הן חלק מהרקמה האפיתליאלית."
    },
    {
        question: "מהי Mucosa?",
        options: [
            { text: "ריריות - רקמה אפיתליאלית", correct: true },
            { text: "רקמת שומן", correct: false },
            { text: "רקמת סחוס", correct: false },
            { text: "רקמת חיבור", correct: false }
        ],
        category: "סוגי רקמות",
        explanation: "Mucosa (ריריות) היא רקמה אפיתליאלית המצפה חללים פנימיים בגוף."
    },
    {
        question: "איזו מהבאות אינה רקמה מזנכימאלית?",
        options: [
            { text: "שליה ומעטפת כלייתית", correct: true },
            { text: "רקמת עצם", correct: false },
            { text: "כלי דם", correct: false },
            { text: "רקמת שריר", correct: false }
        ],
        category: "סוגי רקמות",
        explanation: "שליה ומעטפת כלייתית הן רקמות אפיתליאליות. רקמת עצם, כלי דם ורקמת שריר הן מזנכימאליות."
    },
    {
        question: "כלי דם וכלי לימפה שייכים לאיזו קבוצת רקמות?",
        options: [
            { text: "רקמה מזנכימאלית", correct: true },
            { text: "רקמה אפיתליאלית", correct: false },
            { text: "רקמה עצבית", correct: false },
            { text: "ריריות", correct: false }
        ],
        category: "סוגי רקמות",
        explanation: "כלי דם וכלי לימפה שייכים לרקמה המזנכימאלית."
    },
    {
        question: "מה ההבדל העיקרי בין רקמה אפיתליאלית לרקמה מזנכימאלית?",
        options: [
            { text: "אפיתליאלית מצפה משטחים וחללים, מזנכימאלית מהווה רקמות תמיכה", correct: true },
            { text: "אפיתליאלית נמצאת רק בעור, מזנכימאלית רק באיברים פנימיים", correct: false },
            { text: "אפיתליאלית מכילה כלי דם, מזנכימאלית לא", correct: false },
            { text: "אין הבדל משמעותי ביניהן", correct: false }
        ],
        category: "סוגי רקמות",
        explanation: "רקמה אפיתליאלית מצפה משטחים וחללים בגוף (עור, ריריות, בלוטות), בעוד רקמה מזנכימאלית מהווה רקמות תמיכה ומבנה (חיבור, שריר, עצם, סחוס, שומן, כלי דם)."
    },
    {
        question: "אילו סוגי רקמות שריר קיימים ברקמה המזנכימאלית?",
        options: [
            { text: "שריר חלק ושריר מפוספס", correct: true },
            { text: "שריר חלק בלבד", correct: false },
            { text: "שריר מפוספס בלבד", correct: false },
            { text: "שריר חלק, מפוספס ולב", correct: false }
        ],
        category: "סוגי רקמות",
        explanation: "ברקמה המזנכימאלית קיימים שני סוגי שריר: שריר חלק (Leio-) ושריר מפוספס (Rhabdo-)."
    },
    // ===== מונחים כלליים =====
    {
        question: "מה משמעות הסיומת OMA בשמות גידולים?",
        options: [
            { text: "סיומת המציינת גידול", correct: true },
            { text: "סיומת המציינת גידול ממאיר בלבד", correct: false },
            { text: "סיומת המציינת דלקת", correct: false },
            { text: "סיומת המציינת גידול שפיר בלבד", correct: false }
        ],
        category: "מונחים כלליים",
        explanation: "OMA היא סיומת כללית המציינת גידול (שפיר או ממאיר). היא מופיעה בשמות גידולים שפירים וממאירים כאחד."
    },
    {
        question: "על פי מה נקבעים שמות הגידולים?",
        options: [
            { text: "עפ\"י המקום, ואם הם אפיתליאליים או מזנכימאליים", correct: true },
            { text: "עפ\"י גודל הגידול בלבד", correct: false },
            { text: "עפ\"י שם המטופל שאובחן ראשון", correct: false },
            { text: "עפ\"י צבע הגידול", correct: false }
        ],
        category: "מונחים כלליים",
        explanation: "שמות הגידולים נקבעים על פי המקום (סוג הרקמה) והאם הם אפיתליאליים או מזנכימאליים."
    },
    {
        question: "מה ההבדל בין Carcinoma ל-Sarcoma?",
        options: [
            { text: "Carcinoma הוא גידול ממאיר אפיתליאלי, Sarcoma הוא גידול ממאיר מזנכימאלי", correct: true },
            { text: "Carcinoma הוא גידול שפיר, Sarcoma הוא גידול ממאיר", correct: false },
            { text: "שניהם גידולים שפירים מרקמות שונות", correct: false },
            { text: "Carcinoma הוא גידול מזנכימאלי, Sarcoma הוא אפיתליאלי", correct: false }
        ],
        category: "מונחים כלליים",
        explanation: "Carcinoma = גידול ממאיר אפיתליאלי. Sarcoma = גידול ממאיר מזנכימאלי. שניהם ממאירים אך מרקמות מקור שונות."
    },
    {
        question: "מה מציינת הסיומת Sarcoma?",
        options: [
            { text: "גידול ממאיר מזנכימאלי", correct: true },
            { text: "גידול שפיר מזנכימאלי", correct: false },
            { text: "גידול ממאיר אפיתליאלי", correct: false },
            { text: "גידול שפיר אפיתליאלי", correct: false }
        ],
        category: "מונחים כלליים",
        explanation: "הסיומת Sarcoma מציינת תמיד גידול ממאיר שמקורו ברקמה מזנכימאלית."
    },
    {
        question: "מה מציינת הסיומת Carcinoma?",
        options: [
            { text: "גידול ממאיר אפיתליאלי", correct: true },
            { text: "גידול שפיר אפיתליאלי", correct: false },
            { text: "גידול ממאיר מזנכימאלי", correct: false },
            { text: "דלקת ברקמה אפיתליאלית", correct: false }
        ],
        category: "מונחים כלליים",
        explanation: "Carcinoma = גידול ממאיר שמקורו ברקמה אפיתליאלית."
    },
    // ===== גידולים אפיתליאליים =====
    {
        question: "מה משמעות המילה Adeno?",
        options: [
            { text: "בלוטי (שקית בבלוטה)", correct: true },
            { text: "דמוי אצבעות", correct: false },
            { text: "שטוח רב שכבתי", correct: false },
            { text: "ממאיר", correct: false }
        ],
        category: "גידולים אפיתליאליים",
        explanation: "Adeno = בלוטי, מציין גידול שמקורו ברקמה בלוטית (שקית בבלוטה)."
    },
    {
        question: "מה משמעות המילה Papillary?",
        options: [
            { text: "דמוי אצבעות", correct: true },
            { text: "בלוטי", correct: false },
            { text: "שטוח רב שכבתי", correct: false },
            { text: "דמוי רגלית", correct: false }
        ],
        category: "גידולים אפיתליאליים",
        explanation: "Papillary = דמוי אצבעות (נראה כמו אצבע), מתאר את צורת הגידול."
    },
    {
        question: "מהו Polyp?",
        options: [
            { text: "גידול אפיתליאלי דמוי רגלית, שומר על גבולות", correct: true },
            { text: "גידול ממאיר מזנכימאלי", correct: false },
            { text: "גידול ממאיר אפיתליאלי", correct: false },
            { text: "דלקת ברקמה בלוטית", correct: false }
        ],
        category: "גידולים אפיתליאליים",
        explanation: "Polyp הוא גידול אפיתליאלי דמוי רגלית (פוליפ), שומר על גבולות ולדפנות. ההפרשות או השריר אינם נפגעים."
    },
    {
        question: "מהו Adenoma?",
        options: [
            { text: "גידול שפיר, אפיתליאלי, בלוטי", correct: true },
            { text: "גידול ממאיר, אפיתליאלי, בלוטי", correct: false },
            { text: "גידול שפיר, מזנכימאלי", correct: false },
            { text: "גידול ממאיר, מזנכימאלי", correct: false }
        ],
        category: "גידולים אפיתליאליים",
        explanation: "Adenoma = גידול שפיר, אפיתליאלי, בלוטי. הסיומת -oma עם הקידומת Adeno- מציינת גידול שפיר בלוטי."
    },
    {
        question: "מהו Adenocarcinoma?",
        options: [
            { text: "גידול ממאיר, אפיתליאלי, בלוטי", correct: true },
            { text: "גידול שפיר, אפיתליאלי, בלוטי", correct: false },
            { text: "גידול ממאיר, מזנכימאלי, בלוטי", correct: false },
            { text: "גידול שפיר, מזנכימאלי", correct: false }
        ],
        category: "גידולים אפיתליאליים",
        explanation: "Adenocarcinoma = גידול ממאיר, אפיתליאלי, בלוטי. השילוב של Adeno (בלוטי) + Carcinoma (ממאיר אפיתליאלי)."
    },
    {
        question: "מהו Papilloma?",
        options: [
            { text: "גידול שפיר, אפיתליאלי, דמוי אצבעות", correct: true },
            { text: "גידול ממאיר, אפיתליאלי, דמוי אצבעות", correct: false },
            { text: "גידול שפיר, מזנכימאלי", correct: false },
            { text: "גידול ממאיר, מזנכימאלי", correct: false }
        ],
        category: "גידולים אפיתליאליים",
        explanation: "Papilloma = גידול שפיר, אפיתליאלי, דמוי אצבעות. הסיומת -oma מציינת שפיר."
    },
    {
        question: "מהו Squamous Cell Carcinoma?",
        options: [
            { text: "גידול ממאיר, אפיתליאלי, שטוח רב שכבתי (קשקשי)", correct: true },
            { text: "גידול שפיר, אפיתליאלי, בלוטי", correct: false },
            { text: "גידול ממאיר, מזנכימאלי", correct: false },
            { text: "גידול שפיר, אפיתליאלי, דמוי אצבעות", correct: false }
        ],
        category: "גידולים אפיתליאליים",
        explanation: "Squamous Cell Carcinoma = גידול ממאיר, אפיתליאלי, שטוח רב שכבתי (קשקשי). זהו סוג נפוץ של סרטן עור."
    },
    {
        question: "מהו Papillary Adenocarcinoma?",
        options: [
            { text: "גידול ממאיר, אפיתליאלי, בלוטי, דמוי אצבעות, רב שכבתי", correct: true },
            { text: "גידול שפיר, אפיתליאלי, בלוטי", correct: false },
            { text: "גידול ממאיר, מזנכימאלי, דמוי אצבעות", correct: false },
            { text: "גידול שפיר, אפיתליאלי, דמוי אצבעות", correct: false }
        ],
        category: "גידולים אפיתליאליים",
        explanation: "Papillary Adenocarcinoma = גידול ממאיר, אפיתליאלי, בלוטי, דמוי אצבעות, אפיתל רב שכבתי. שילוב של Papillary + Adeno + Carcinoma."
    },
    {
        question: "מה ההבדל בין Adenoma ל-Adenocarcinoma?",
        options: [
            { text: "Adenoma שפיר ו-Adenocarcinoma ממאיר, שניהם בלוטיים אפיתליאליים", correct: true },
            { text: "Adenoma ממאיר ו-Adenocarcinoma שפיר", correct: false },
            { text: "Adenoma אפיתליאלי ו-Adenocarcinoma מזנכימאלי", correct: false },
            { text: "אין הבדל, שניהם שמות שונים לאותו גידול", correct: false }
        ],
        category: "גידולים אפיתליאליים",
        explanation: "שניהם גידולים אפיתליאליים בלוטיים. Adenoma הוא שפיר (סיומת -oma), בעוד Adenocarcinoma הוא ממאיר (מכיל Carcinoma)."
    },
    {
        question: "מה ההבדל בין Papilloma ל-Papillary Adenocarcinoma?",
        options: [
            { text: "Papilloma שפיר ו-Papillary Adenocarcinoma ממאיר בלוטי", correct: true },
            { text: "שניהם ממאירים, Papilloma פחות אגרסיבי", correct: false },
            { text: "Papilloma מזנכימאלי ו-Papillary Adenocarcinoma אפיתליאלי", correct: false },
            { text: "שניהם שפירים מסוגי רקמה שונים", correct: false }
        ],
        category: "גידולים אפיתליאליים",
        explanation: "Papilloma הוא גידול שפיר אפיתליאלי דמוי אצבעות. Papillary Adenocarcinoma הוא גידול ממאיר אפיתליאלי בלוטי דמוי אצבעות."
    },
    {
        question: "איזה מהגידולים הבאים הוא שפיר?",
        options: [
            { text: "Adenoma", correct: true },
            { text: "Carcinoma", correct: false },
            { text: "Adenocarcinoma", correct: false },
            { text: "Squamous Cell Carcinoma", correct: false }
        ],
        category: "גידולים אפיתליאליים",
        explanation: "Adenoma הוא גידול שפיר (בלוטי, אפיתליאלי). כל השאר מכילים את המילה Carcinoma ולכן הם ממאירים."
    },
    {
        question: "איזה מהגידולים האפיתליאליים הבאים הוא ממאיר?",
        options: [
            { text: "Carcinoma", correct: true },
            { text: "Adenoma", correct: false },
            { text: "Papilloma", correct: false },
            { text: "Polyp", correct: false }
        ],
        category: "גידולים אפיתליאליים",
        explanation: "Carcinoma = גידול ממאיר אפיתליאלי. Adenoma ו-Papilloma הם שפירים, ו-Polyp הוא גידול השומר על גבולות."
    },
    // ===== גידולים מזנכימאליים =====
    {
        question: "מהו הגידול השפיר של רקמת החיבור?",
        options: [
            { text: "Fibroma", correct: true },
            { text: "Lipoma", correct: false },
            { text: "Osteoma", correct: false },
            { text: "Chondroma", correct: false }
        ],
        category: "גידולים מזנכימאליים",
        explanation: "Fibroma = גידול שפיר של רקמת חיבור. הגרסה הממאירה היא Fibrosarcoma."
    },
    {
        question: "מהו הגידול הממאיר של רקמת החיבור?",
        options: [
            { text: "Fibrosarcoma", correct: true },
            { text: "Liposarcoma", correct: false },
            { text: "Osteosarcoma", correct: false },
            { text: "Chondrosarcoma", correct: false }
        ],
        category: "גידולים מזנכימאליים",
        explanation: "Fibrosarcoma = גידול ממאיר של רקמת חיבור (Fibro = חיבור + Sarcoma = ממאיר מזנכימאלי)."
    },
    {
        question: "מהו Lipoma?",
        options: [
            { text: "גידול שפיר של רקמת שומן", correct: true },
            { text: "גידול ממאיר של רקמת שומן", correct: false },
            { text: "גידול שפיר של רקמת חיבור", correct: false },
            { text: "גידול שפיר של רקמת עצם", correct: false }
        ],
        category: "גידולים מזנכימאליים",
        explanation: "Lipoma = גידול שפיר של רקמת שומן (Lipo = שומן). הגרסה הממאירה היא Liposarcoma."
    },
    {
        question: "מהו Liposarcoma?",
        options: [
            { text: "גידול ממאיר של רקמת שומן", correct: true },
            { text: "גידול שפיר של רקמת שומן", correct: false },
            { text: "גידול ממאיר של רקמת חיבור", correct: false },
            { text: "גידול ממאיר של רקמת עצם", correct: false }
        ],
        category: "גידולים מזנכימאליים",
        explanation: "Liposarcoma = גידול ממאיר של רקמת שומן (Lipo = שומן + Sarcoma = ממאיר מזנכימאלי)."
    },
    {
        question: "מהו Leiomyoma?",
        options: [
            { text: "גידול שפיר של שריר חלק", correct: true },
            { text: "גידול ממאיר של שריר חלק", correct: false },
            { text: "גידול שפיר של שריר מפוספס", correct: false },
            { text: "גידול ממאיר של שריר מפוספס", correct: false }
        ],
        category: "גידולים מזנכימאליים",
        explanation: "Leiomyoma = גידול שפיר של שריר חלק (Leio = חלק, Myo = שריר). הגרסה הממאירה היא Leiomyosarcoma."
    },
    {
        question: "מהו Leiomyosarcoma?",
        options: [
            { text: "גידול ממאיר של שריר חלק", correct: true },
            { text: "גידול שפיר של שריר חלק", correct: false },
            { text: "גידול ממאיר של שריר מפוספס", correct: false },
            { text: "גידול שפיר של שריר מפוספס", correct: false }
        ],
        category: "גידולים מזנכימאליים",
        explanation: "Leiomyosarcoma = גידול ממאיר של שריר חלק (Leio = חלק, Myo = שריר, Sarcoma = ממאיר)."
    },
    {
        question: "מהו Rhabdomyoma?",
        options: [
            { text: "גידול שפיר של שריר מפוספס", correct: true },
            { text: "גידול ממאיר של שריר מפוספס", correct: false },
            { text: "גידול שפיר של שריר חלק", correct: false },
            { text: "גידול ממאיר של שריר חלק", correct: false }
        ],
        category: "גידולים מזנכימאליים",
        explanation: "Rhabdomyoma = גידול שפיר של שריר מפוספס (Rhabdo = מפוספס, Myo = שריר)."
    },
    {
        question: "מהו Rhabdomyosarcoma?",
        options: [
            { text: "גידול ממאיר של שריר מפוספס", correct: true },
            { text: "גידול שפיר של שריר מפוספס", correct: false },
            { text: "גידול ממאיר של שריר חלק", correct: false },
            { text: "גידול שפיר של שריר חלק", correct: false }
        ],
        category: "גידולים מזנכימאליים",
        explanation: "Rhabdomyosarcoma = גידול ממאיר של שריר מפוספס (Rhabdo = מפוספס, Myo = שריר, Sarcoma = ממאיר)."
    },
    {
        question: "מהו Chondroma?",
        options: [
            { text: "גידול שפיר של סחוס", correct: true },
            { text: "גידול ממאיר של סחוס", correct: false },
            { text: "גידול שפיר של עצם", correct: false },
            { text: "גידול שפיר של רקמת חיבור", correct: false }
        ],
        category: "גידולים מזנכימאליים",
        explanation: "Chondroma = גידול שפיר של סחוס (Chondro = סחוס). הגרסה הממאירה היא Chondrosarcoma."
    },
    {
        question: "מהו Chondrosarcoma?",
        options: [
            { text: "גידול ממאיר של סחוס", correct: true },
            { text: "גידול שפיר של סחוס", correct: false },
            { text: "גידול ממאיר של עצם", correct: false },
            { text: "גידול ממאיר של רקמת חיבור", correct: false }
        ],
        category: "גידולים מזנכימאליים",
        explanation: "Chondrosarcoma = גידול ממאיר של סחוס (Chondro = סחוס + Sarcoma = ממאיר)."
    },
    {
        question: "מהו Osteoma?",
        options: [
            { text: "גידול שפיר של עצם", correct: true },
            { text: "גידול ממאיר של עצם", correct: false },
            { text: "גידול שפיר של סחוס", correct: false },
            { text: "גידול שפיר של שריר", correct: false }
        ],
        category: "גידולים מזנכימאליים",
        explanation: "Osteoma = גידול שפיר של עצם (Osteo = עצם). הגרסה הממאירה היא Osteosarcoma."
    },
    {
        question: "מהו Osteosarcoma?",
        options: [
            { text: "גידול ממאיר של עצם", correct: true },
            { text: "גידול שפיר של עצם", correct: false },
            { text: "גידול ממאיר של סחוס", correct: false },
            { text: "גידול ממאיר של רקמת חיבור", correct: false }
        ],
        category: "גידולים מזנכימאליים",
        explanation: "Osteosarcoma = גידול ממאיר של עצם (Osteo = עצם + Sarcoma = ממאיר)."
    },
    {
        question: "מהו Hemangioma?",
        options: [
            { text: "גידול שפיר של כלי דם", correct: true },
            { text: "גידול ממאיר של כלי דם", correct: false },
            { text: "גידול שפיר של רקמת חיבור", correct: false },
            { text: "גידול שפיר של שריר", correct: false }
        ],
        category: "גידולים מזנכימאליים",
        explanation: "Hemangioma (או Angioma) = גידול שפיר של כלי דם (Hema/Angio = כלי דם). הגרסה הממאירה היא Hemangiosarcoma."
    },
    {
        question: "מהו Hemangiosarcoma?",
        options: [
            { text: "גידול ממאיר של כלי דם", correct: true },
            { text: "גידול שפיר של כלי דם", correct: false },
            { text: "גידול ממאיר של רקמת חיבור", correct: false },
            { text: "גידול ממאיר של עצם", correct: false }
        ],
        category: "גידולים מזנכימאליים",
        explanation: "Hemangiosarcoma = גידול ממאיר של כלי דם (Hemangio = כלי דם + Sarcoma = ממאיר)."
    },
    {
        question: "מהו שם נוסף ל-Hemangioma?",
        options: [
            { text: "Angioma", correct: true },
            { text: "Fibroma", correct: false },
            { text: "Adenoma", correct: false },
            { text: "Lipoma", correct: false }
        ],
        category: "גידולים מזנכימאליים",
        explanation: "Hemangioma ו-Angioma הם שמות חלופיים לגידול שפיר של כלי דם."
    },
    // ===== שאלות מעורבות =====
    {
        question: "איזה מהגידולים הבאים הוא ממאיר?",
        options: [
            { text: "Fibrosarcoma", correct: true },
            { text: "Fibroma", correct: false },
            { text: "Lipoma", correct: false },
            { text: "Osteoma", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "Fibrosarcoma הוא גידול ממאיר (מכיל Sarcoma). Fibroma, Lipoma ו-Osteoma הם גידולים שפירים (סיומת -oma בלבד)."
    },
    {
        question: "איזה מהגידולים הבאים הוא שפיר?",
        options: [
            { text: "Chondroma", correct: true },
            { text: "Chondrosarcoma", correct: false },
            { text: "Leiomyosarcoma", correct: false },
            { text: "Rhabdomyosarcoma", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "Chondroma הוא גידול שפיר של סחוס (סיומת -oma). כל השאר מכילים Sarcoma ולכן הם ממאירים."
    },
    {
        question: "מאיזו רקמה מקורו של Leiomyosarcoma?",
        options: [
            { text: "שריר חלק", correct: true },
            { text: "שריר מפוספס", correct: false },
            { text: "רקמת חיבור", correct: false },
            { text: "רקמת שומן", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "Leio = חלק, Myo = שריר, Sarcoma = ממאיר. Leiomyosarcoma הוא גידול ממאיר של שריר חלק."
    },
    {
        question: "מאיזו רקמה מקורו של Rhabdomyoma?",
        options: [
            { text: "שריר מפוספס", correct: true },
            { text: "שריר חלק", correct: false },
            { text: "רקמת עצם", correct: false },
            { text: "רקמת סחוס", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "Rhabdo = מפוספס, Myo = שריר. Rhabdomyoma הוא גידול שפיר של שריר מפוספס."
    },
    {
        question: "הקידומת Leio- מציינת:",
        options: [
            { text: "חלק (שריר חלק)", correct: true },
            { text: "מפוספס (שריר מפוספס)", correct: false },
            { text: "שומן", correct: false },
            { text: "עצם", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "Leio- = חלק, מציינת שריר חלק. לעומת זאת, Rhabdo- = מפוספס."
    },
    {
        question: "הקידומת Rhabdo- מציינת:",
        options: [
            { text: "מפוספס (שריר מפוספס)", correct: true },
            { text: "חלק (שריר חלק)", correct: false },
            { text: "חיבור", correct: false },
            { text: "כלי דם", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "Rhabdo- = מפוספס, מציינת שריר מפוספס (רצוני). לעומת זאת, Leio- = חלק."
    },
    {
        question: "הקידומת Osteo- מציינת:",
        options: [
            { text: "עצם", correct: true },
            { text: "סחוס", correct: false },
            { text: "שריר", correct: false },
            { text: "חיבור", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "Osteo- = עצם. Osteoma = גידול שפיר של עצם, Osteosarcoma = גידול ממאיר של עצם."
    },
    {
        question: "הקידומת Chondro- מציינת:",
        options: [
            { text: "סחוס", correct: true },
            { text: "עצם", correct: false },
            { text: "שומן", correct: false },
            { text: "כלי דם", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "Chondro- = סחוס. Chondroma = גידול שפיר של סחוס, Chondrosarcoma = גידול ממאיר של סחוס."
    },
    {
        question: "הקידומת Lipo- מציינת:",
        options: [
            { text: "שומן", correct: true },
            { text: "חיבור", correct: false },
            { text: "עצם", correct: false },
            { text: "שריר", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "Lipo- = שומן. Lipoma = גידול שפיר של רקמת שומן, Liposarcoma = גידול ממאיר של רקמת שומן."
    },
    {
        question: "הקידומת Fibro- מציינת:",
        options: [
            { text: "רקמת חיבור", correct: true },
            { text: "רקמת שומן", correct: false },
            { text: "רקמת עצם", correct: false },
            { text: "רקמת סחוס", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "Fibro- = חיבור/סיבי. Fibroma = גידול שפיר של רקמת חיבור, Fibrosarcoma = גידול ממאיר של רקמת חיבור."
    },
    {
        question: "מהו הגידול השפיר המקביל ל-Liposarcoma?",
        options: [
            { text: "Lipoma", correct: true },
            { text: "Fibroma", correct: false },
            { text: "Adenoma", correct: false },
            { text: "Osteoma", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "Lipoma הוא הגידול השפיר של רקמת שומן, ו-Liposarcoma הוא הגידול הממאיר של אותה רקמה."
    },
    {
        question: "מהו הגידול הממאיר המקביל ל-Osteoma?",
        options: [
            { text: "Osteosarcoma", correct: true },
            { text: "Chondrosarcoma", correct: false },
            { text: "Fibrosarcoma", correct: false },
            { text: "Hemangiosarcoma", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "Osteoma = שפיר של עצם. Osteosarcoma = ממאיר של עצם. שניהם מרקמת עצם."
    },
    {
        question: "גידול ממאיר ברקמת כלי דם נקרא:",
        options: [
            { text: "Hemangiosarcoma", correct: true },
            { text: "Hemangioma", correct: false },
            { text: "Fibrosarcoma", correct: false },
            { text: "Liposarcoma", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "Hemangiosarcoma = גידול ממאיר של כלי דם. Hemangioma הוא השפיר."
    },
    {
        question: "כיצד ניתן לדעת מהשם אם גידול מזנכימאלי הוא שפיר או ממאיר?",
        options: [
            { text: "שפיר מסתיים ב-oma, ממאיר מסתיים ב-sarcoma", correct: true },
            { text: "שפיר מסתיים ב-sarcoma, ממאיר מסתיים ב-oma", correct: false },
            { text: "אי אפשר לדעת מהשם", correct: false },
            { text: "שפיר מתחיל ב-Adeno, ממאיר מתחיל ב-Carcino", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "בגידולים מזנכימאליים: סיומת -oma = שפיר (Fibroma, Lipoma), סיומת -sarcoma = ממאיר (Fibrosarcoma, Liposarcoma)."
    },
    {
        question: "כיצד ניתן לדעת מהשם אם גידול אפיתליאלי הוא שפיר או ממאיר?",
        options: [
            { text: "שפיר מסתיים ב-oma, ממאיר מכיל carcinoma", correct: true },
            { text: "שפיר מכיל carcinoma, ממאיר מסתיים ב-oma", correct: false },
            { text: "שפיר מסתיים ב-sarcoma, ממאיר מסתיים ב-oma", correct: false },
            { text: "אי אפשר לדעת מהשם", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "בגידולים אפיתליאליים: סיומת -oma = שפיר (Adenoma, Papilloma), המילה Carcinoma = ממאיר (Adenocarcinoma, Squamous Cell Carcinoma)."
    },
    {
        question: "חולה אובחן עם גידול שפיר ברקמת סחוס. מה שם הגידול?",
        options: [
            { text: "Chondroma", correct: true },
            { text: "Chondrosarcoma", correct: false },
            { text: "Osteoma", correct: false },
            { text: "Fibroma", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "Chondro = סחוס + oma = שפיר → Chondroma."
    },
    {
        question: "חולה אובחן עם גידול ממאיר ברקמת שריר חלק. מה שם הגידול?",
        options: [
            { text: "Leiomyosarcoma", correct: true },
            { text: "Rhabdomyosarcoma", correct: false },
            { text: "Leiomyoma", correct: false },
            { text: "Fibrosarcoma", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "Leio = חלק, Myo = שריר, Sarcoma = ממאיר → Leiomyosarcoma."
    },
    {
        question: "חולה אובחן עם גידול ממאיר אפיתליאלי בלוטי. מה שם הגידול?",
        options: [
            { text: "Adenocarcinoma", correct: true },
            { text: "Adenoma", correct: false },
            { text: "Carcinoma", correct: false },
            { text: "Fibrosarcoma", correct: false }
        ],
        category: "שאלות מעורבות",
        explanation: "Adeno = בלוטי + Carcinoma = ממאיר אפיתליאלי → Adenocarcinoma."
    },
    // ===== שאלות מקובץ parsed_questions2.json =====
    {
        question: "איזה מן התהליכים הבאים יכול להוות קרקע פורייה לסרטן:",
        options: [
            { text: "היפרפלזיה(Hyperplasia)", correct: true },
            { text: "היפרטרופיה(Hypertrophy)", correct: false },
            { text: "אטרופיה(Atrophy)", correct: false },
            { text: "מתפלזיה(Metaplasia)", correct: false }
        ],
        category: "מבוא לפתולוגיה",
        explanation: "היפרפלזיה (Hyperplasia) היא תהליך של הגדלת מספר התאים שיכול להוות קרקע פורייה לסרטן."
    },
    {
        question: "איזה מהשינויים הבאים הוא אדפטציה תאית פתולוגית עם סיכון מוגבר לממאירות?",
        options: [
            { text: "היפרטרופיה", correct: true },
            { text: "אטרופיה", correct: false },
            { text: "מתפלזיה", correct: false },
            { text: "נמק", correct: false }
        ],
        category: "מבוא לפתולוגיה",
        explanation: "היפרטרופיה היא אדפטציה תאית פתולוגית עם סיכון מוגבר לממאירות."
    },
    {
        question: "איזה מהמשפטים הבאים מתארים בצורה מדויקת ביותר את ההבדל בין אטיולוגיה לפתוגנזה ?",
        options: [
            { text: "אטיולוגיה עוסקת בגורם והסיבה למחלה, בעוד פתוגנזה מתארת את תהליך התפתחות המחלה והשינויים המבניים והתפקודיים הנלווים אליה.", correct: true },
            { text: "אטיולוגיה מתארת את שלבי המחלה הקליניים, בעוד פתוגנזה עוסקת בהערכת סיכויי ההחלמה.", correct: false },
            { text: "פתוגנזה מתארת את התפלגות המחלה באוכלוסייה, בעוד אטיולוגיה עוסקת בגורמי סיכון בלבד.", correct: false },
            { text: "אטיולוגיה ופתוגנזה הם מונחים נרדפים המתארים את אותו היבט של מחלה.", correct: false }
        ],
        category: "מבוא לפתולוגיה",
        explanation: "אטיולוגיה עוסקת בגורם והסיבה למחלה, בעוד פתוגנזה מתארת את תהליך התפתחות המחלה."
    },
    {
        question: "מה ההבדל בין אטיולוגיה לפתוגנזה?",
        options: [
            { text: "אטיולוגיה עוסקת בסיבה למחלה, ופתוגנזה מתארת את אופן התפתחות המחלה", correct: true },
            { text: "אין הבדל בין שני המושגים", correct: false },
            { text: "אטיולוגיה מתארת תסמיני של המחלה, ופתוגנזה מתארת את הטיפול", correct: false },
            { text: "אטיולוגיה מתארת את מהלך המחלה, ופתוגנזה מתארת את האבחנה.", correct: false }
        ],
        category: "מבוא לפתולוגיה",
        explanation: "אטיולוגיה עוסקת בסיבה למחלה, ופתוגנזה מתארת את אופן התפתחות המחלה."
    },
    {
        question: "איזה משפט מתאר בצורה המדויקת ביותר את ההבדל בין אטיולוגיה לפתוגנזה?",
        options: [
            { text: "פתוגנזה מתארת את שלבי התפתחות המחלה ועונה על \"כיצד?\", ואטיולוגיה היא המקור/הסיבה למחלה ועונה על \"למה?\"", correct: true },
            { text: "פתוגנזה היא המקור והסיבה למחלה, ואטיולוגיה היא שלבי ההתפתחות שלה.", correct: false },
            { text: "פתוגנזה עוסקת בגורמי סיכון, ואטיולוגיה עוסקת בפרוגנוזה.", correct: false },
            { text: "פתוגנזה היא \"לדעת מראש\" את מהלך המחלה, ואטיולוגיה היא תיאור הסימנים והתסמינים.", correct: false }
        ],
        category: "מבוא לפתולוגיה",
        explanation: "פתוגנזה מתארת את שלבי התפתחות המחלה (\"כיצד?\"), ואטיולוגיה היא המקור/הסיבה למחלה (\"למה?\")."
    },
    {
        question: "מהו ההבדל המרכזי בין המונח אטיולוגיה לבין המונח פתוגנזה בתהליך חקר המחלה?",
        options: [
            { text: "אטיולוגיה עוסקת בחקר הסיבות, המקור והטריגרים להיווצרות המחלה (עונה על השאלה \"למה\"), בעוד פתוגנזה מתארת את מכניזם המחלה ושלבי התפתחותה (\"כיצד\").", correct: true },
            { text: "אטיולוגיה מתארת את שלבי התפתחות המחלה (\"כיצד\"), בעוד פתוגנזה מתמקדת במקור ובסיבה למחלה (\"למה\").", correct: false },
            { text: "אטיולוגיה היא מושג סטטיסטי המתאר את שכיחות המחלה באוכלוסייה, בעוד פתוגנזה היא התחזית הרפואית לסיכויי ההחלמה של החולה.", correct: false },
            { text: "אין הבדל בין המונחים; שניהם מתארים את גורמי הסיכון הנמצאים בשליטתנו.", correct: false }
        ],
        category: "מבוא לפתולוגיה",
        explanation: "אטיולוגיה עוסקת בסיבות למחלה (\"למה\"), פתוגנזה מתארת את מכניזם התפתחות המחלה (\"כיצד\")."
    },
    {
        question: "איזו אדפטציה תאית נחשבת אינה סרטן, אך מהווה קרקע פורייה להתפתחות ממאירות?",
        options: [
            { text: "היפרפלזיה", correct: true },
            { text: "היפרטרופיה פיזיולוגית", correct: false },
            { text: "אטרופיה", correct: false },
            { text: "אפופטוזיס", correct: false }
        ],
        category: "מבוא לפתולוגיה",
        explanation: "היפרפלזיה אינה סרטן, אך מהווה קרקע פורייה להתפתחות ממאירות."
    },
    {
        question: "מהו האתר העיקרי בו מתרחשת הפגיעה הכלייתית ב-Diabetic Nephropathy?",
        options: [
            { text: "הגלומרולים", correct: true },
            { text: "האינטרסטיציום הכלייתי", correct: false },
            { text: "האבוביות (טובולים)", correct: false },
            { text: "אגן הכליה", correct: false }
        ],
        category: "מבוא לפתולוגיה",
        explanation: "הפגיעה הכלייתית ב-Diabetic Nephropathy מתרחשת בעיקר בגלומרולים."
    },
    {
        question: "איזה ממצא מעיד על נקודת ה־Point of No Return בפגיעה תאית?",
        options: [
            { text: "פגיעה חמורה ובלתי הפיכה במיטוכונדריה ובממברנות.", correct: true },
            { text: "הצטברות שומן בתא", correct: false },
            { text: "התנפחות תאית", correct: false },
            { text: "ירידה זמנית בייצור ATP", correct: false }
        ],
        category: "מבוא לפתולוגיה",
        explanation: "נקודת ה-Point of No Return מתרחשת כאשר יש פגיעה חמורה ובלתי הפיכה במיטוכונדריה ובממברנות."
    },
    {
        question: "איזה מהמצבים הבאים מדגים מתפלזיה?",
        options: [
            { text: "החלפת אפיתל ריסני באפיתל רב־שכבתי קשקשי בדרכי הנשימה של מעשן", correct: true },
            { text: "הגדלת מסת שריר הלב בעקבות יתר לחץ דם", correct: false },
            { text: "עלייה במספר תאי האנדומטריום בעקבות גירוי הורמונלי", correct: false },
            { text: "ירידה בגודל שריר עקב חוסר שימוש", correct: false }
        ],
        category: "מבוא לפתולוגיה",
        explanation: "מתפלזיה היא החלפת סוג אחד של תאים בסוג אחר, כמו החלפת אפיתל ריסני באפיתל קשקשי אצל מעשנים."
    },
    {
        question: "באיזה מצבים קליניים ירידה ב-Preload תוביל דווקא לעלייה רפלקסיבית בקצב הלב ללא שיפור בתפוקת הלב, ומה ההסבר ההמודינמי לכך?",
        options: [
            { text: "היפוולמיה (דימום/התייבשות) – ירידה ב־Preload ↓ נפח פעימה → טכיקרדיה רפלקסיבית ללא עלייה בתפוקת הלב.", correct: true },
            { text: "ואזודילטציה חדה (ניטרטים/ספסיס) – ירידה בהחזר ורידי → עלייה בקצב הלב ללא שיפור ב־CO.", correct: false },
            { text: "טמפונדה לבבית – מילוי דיאסטולי מוגבל → טכיקרדיה פיצויית ללא עלייה בתפוקת הלב.", correct: false },
            { text: "אי־ספיקת לב מתקדמת – ירידה ב־Preload על עקומת Frank-Starling השטוחה → טכיקרדיה ללא שיפור ב־CO", correct: false }
        ],
        category: "הפרעות המודינמיות",
        explanation: "היפוולמיה (דימום/התייבשות) גורמת לירידה ב-Preload ולטכיקרדיה רפלקסיבית ללא עלייה בתפוקת הלב."
    },
    {
        question: "מה מהמשפטים הבאים מתאר בצורה הטובה ביותר pulmonary thromboembolism?",
        options: [
            { text: "תסחיף שמקורו לרוב ב-DVT ברגליים ועובר דרך לב ימין", correct: true },
            { text: "חסימת עורק ריאתי על ידי תסחיף שמקורו לרוב בלב שמאל", correct: false },
            { text: "חסימה ורידית מקומית בריאה ללא מקור מרוחק", correct: false },
            { text: "תסחיף אוויר שחוסם את כלי הדם הריאתיים", correct: false }
        ],
        category: "הפרעות המודינמיות",
        explanation: "תסחיף ריאתי מקורו בדרך כלל ב-DVT ברגליים ועובר דרך לב ימין."
    },
    {
        question: "מה הוא אחד מהסיבוכים שיכולים להיות במקרה של DVT?",
        options: [
            { text: "תסחיף ריאתי  ופוסט טרומבוטית", correct: true },
            { text: "דלקת ריאות עם שיעול חזק", correct: false },
            { text: "מגרינות וכאבי ראש חזקים", correct: false },
            { text: "פגיעה בפלוטת התיירואיד והפרשה מוגברת של הורמונים", correct: false }
        ],
        category: "הפרעות המודינמיות",
        explanation: "אחד הסיבוכים העיקריים של DVT הוא תסחיף ריאתי וסינדרום פוסט טרומבוטי."
    },
    {
        question: "מהם שלושת הסוגים העיקריים של מצבי \"הלם\" (Shock) ?",
        options: [
            { text: "הלם קרדיוגני (לבבי), הלם היפוולמי (איבוד נוזלים/דם) והלם ספטי (זיהומי).", correct: true },
            { text: "הלם רגשי, הלם תרמי והלם כתוצאה מחוסר שינה.", correct: false },
            { text: "הלם נשימתי, הלם סוכרתי והלם מטבולי.", correct: false },
            { text: "הלם וסקולרי, הלם כרוני והלם משני לנמק שומני.", correct: false }
        ],
        category: "הפרעות המודינמיות",
        explanation: "שלושת הסוגים העיקריים של הלם הם: קרדיוגני, היפוולמי וספטי."
    },
    {
        question: "איזה מנגנון יגרום ל־בצקת לא דלקתית ענייה בחלבונים?",
        options: [
            { text: "ירידה בלחץ הקולואיד־אוסמוטי בפלזמה", correct: true },
            { text: "עלייה בחדירות הקפילרות", correct: false },
            { text: "שחרור ציטוקינים דלקתיים", correct: false },
            { text: "נזק ישיר לאנדותל", correct: false }
        ],
        category: "הפרעות המודינמיות",
        explanation: "בצקת לא דלקתית ענייה בחלבונים נגרמת מירידה בלחץ הקולואיד-אוסמוטי בפלזמה."
    },
    {
        question: "מה היא אחת הסיבות שגורמות להתרחשותAir embolism ?",
        options: [
            { text: "deconpression sicknes בעקבות שינוי מהיר בלחץ האטמוספרי", correct: true },
            { text: "בצקות בגפיים", correct: false },
            { text: "פגיעה בגראש", correct: false },
            { text: "הריון", correct: false }
        ],
        category: "הפרעות המודינמיות",
        explanation: "Air embolism יכול להתרחש בעקבות decompression sickness כתוצאה משינוי מהיר בלחץ האטמוספרי."
    },
    {
        question: "איזה מהבאים מתאר בצורה המדויקת ביותר את מנגנון היווצרות בצקת לא דלקתית?",
        options: [
            { text: "עלייה בלחץ ההידרוסטטי או ירידה בלחץ האונקוטי של הפלזמה, ללא עלייה בחדירות כלי הדם", correct: true },
            { text: "שחרור ציטוקינים דלקתיים הגורמים לעלייה בחדירות האנדותל", correct: false },
            { text: "פגיעה ישירה בשלמות האנדותל ויציאת חלבונים לרקמה", correct: false },
            { text: "הפעלה של טסיות הדם ויצירת פקק המוסטטי מקומי", correct: false }
        ],
        category: "הפרעות המודינמיות",
        explanation: "בצקת לא דלקתית נגרמת מעלייה בלחץ ההידרוסטטי או ירידה בלחץ האונקוטי, ללא עלייה בחדירות כלי הדם."
    },
    {
        question: "איזה מהמצבים הבאים מאופיין בזרימת דם מופחתת מהרקמה, הצטברות המוגלובין לא מחומצן וגוון כחלחל של הרקמה?",
        options: [
            { text: "גודש (Congestion)", correct: true },
            { text: "היפרמיה (Hyperemia)", correct: false },
            { text: "בצקת דלקתית", correct: false },
            { text: "דימום חריף", correct: false }
        ],
        category: "הפרעות המודינמיות",
        explanation: "גודש (Congestion) מאופיין בזרימת דם מופחתת מהרקמה והצטברות המוגלובין לא מחומצן."
    },
    {
        question: "מה מהבאים הינו שם של גידול ממאיר ?",
        options: [
            { text: "Teratoma", correct: true },
            { text: "papilloma", correct: false },
            { text: "adenoma", correct: false },
            { text: "Cystadenoma", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "Teratoma הוא גידול ממאיר."
    },
    {
        question: "מהו המאפיין החשוב ביותר של התפשטות גידול דרך מערכת הלימפה?",
        options: [
            { text: "הגרורה הראשונה מופיעה בדרך כלל בsentinel lymph node", correct: true },
            { text: "הגידול שולח גרורות ישירות לחלל הגוף ללא מעורבות בלוטות", correct: false },
            { text: "הגרורות הראשונות נמצאות בדרך‑כלל בריאות ובכבד", correct: false },
            { text: "יש רק גרורות רחוקות בלי פגיעה בבלוטות הקרובות לגידול", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "גידול המתפשט דרך מערכת הלימפה שולח את הגרורה הראשונה לבלוטת הלימפה השומרת (sentinel lymph node)."
    },
    {
        question: "מהו ההבדל המשמעותי ביותר בין גידול שפיר לגידול ממאיר?",
        options: [
            { text: "יכולת לשלוח גרורות", correct: true },
            { text: "קצב חלוקה בלבד", correct: false },
            { text: "מקור הרקמה", correct: false },
            { text: "קיום קפסולה סביב הגידול", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "ההבדל העיקרי בין גידול שפיר לממאיר הוא יכולת הגידול הממאיר לשלוח גרורות."
    },
    {
        question: "מהו אחד המאפיינים המרכזיים המשמשים להבדלה בין גידול ממאיר לגידול שפיר?",
        options: [
            { text: "מידת הדיפרנציאציה והאנפלזיה של תאי הגידול", correct: true },
            { text: "גודל הגידול בעת האבחנה", correct: false },
            { text: "מיקום אנטומי של הגידול", correct: false },
            { text: "משך הזמן שבו הגידול קיים בגוף", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "מידת הדיפרנציאציה והאנפלזיה של תאי הגידול היא מאפיין מרכזי להבדלה בין גידול ממאיר לשפיר."
    },
    {
        question: "מה הבדל בקצב הגידול בין שפיר לממאיר?",
        options: [
            { text: "גידול שפיר איטי גידול ממאיר מהיר", correct: true },
            { text: "גידול ממאיר איטי גידול שפיר מהיר", correct: false },
            { text: "שניהם מתפתחים מהר", correct: false },
            { text: "שניהם מתפתחים לאט", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "גידול שפיר גדל לאט בעוד גידול ממאיר גדל מהר."
    },
    {
        question: "איזו מהתכונות הבאות מאפיינת תאים סרטניים?",
        options: [
            { text: "מסוגלים להתחלק באופן בלתי מבוקר וללא צורך בגירויים חיצוניים", correct: true },
            { text: "פוטנציאל חלוקה שנעצר לאחר מספר מחזורים מוגדר", correct: false },
            { text: "תא שאינו מצליח להתחמק מפיקוח חיסוני", correct: false },
            { text: "מורכבים אך ורק מתאים שעברו התמיינות מלאה", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "תאים סרטניים מסוגלים להתחלק באופן בלתי מבוקר וללא צורך בגירויים חיצוניים."
    },
    {
        question: "איזה מהבאים מאפיין את מצב ה־Cachexia בחולי סרטן?",
        options: [
            { text: "מצב שכיח המתבטא בירידה במשקל, אובדן שומן, אנורקסיה, אנמיה ועייפות כתוצאה מפעילות ציטוקינים כגון TNF -", correct: true },
            { text: "מצב המתבטא בעיקר באיבוד נוזלים עקב חסימת כלי דם סמוכים לגידול", correct: false },
            { text: "תהליך שנגרם כתוצאה ישירה מלחץ מכני של הגידול על מערכת העיכול בלבד", correct: false },
            { text: "מצב המאופיין בעלייה במשקל עקב ייצור יתר של הורמונים אנבוליים", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "Cachexia הוא מצב המתבטא בירידה במשקל, אובדן שומן ועייפות כתוצאה מפעילות ציטוקינים."
    },
    {
        question: "איזו תכונה אופיינית לתאי סרטן?",
        options: [
            { text: "חוסר תגובה לסיגנלים מעכבי חלוקה", correct: true },
            { text: "רגישות מוגברת לאפופטוזיס", correct: false },
            { text: "חלוקה מוגבלת בזמן", correct: false },
            { text: "יציבות גנטית גבוהה", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "תאי סרטן מתאפיינים בחוסר תגובה לסיגנלים מעכבי חלוקה."
    },
    {
        question: "איזה היגד מתאר בצורה המדויקת ביותר את הבסיס המולקולרי של מחלת הסרטן?",
        options: [
            { text: "סרטן הוא מחלה קלונלית שמקורה בתא אחד שעבר שינוי גנטי, והשינוי מועבר לכל תאי הבת", correct: true },
            { text: "סרטן מתפתח תמיד כתוצאה מגורם סביבתי חיצוני יחיד", correct: false },
            { text: "סרטן נגרם רק משינויים מטבוליים שאינם גנטיים", correct: false },
            { text: "סרטן מופיע רק ברקמות בעלות קצב חלוקה גבוה", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "סרטן הוא מחלה קלונלית שמקורה בתא אחד שעבר שינוי גנטי."
    },
    {
        question: "מהו תפקידו המרכזי של הגן- TP53?",
        options: [
            { text: "עצירה זמנית/קבועה של מחזור התא", correct: true },
            { text: "הפעלת טלומראז המאריך קצוות ומייצב מוטציות שנצברו", correct: false },
            { text: "מניעת הפרשה של פאקטורי גידול מתאי האנדותל", correct: false },
            { text: "להוריד את זיקת ההיקשרות של חלבוני הגידול לחלבוני המטרה", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "תפקידו המרכזי של הגן TP53 הוא עצירה זמנית או קבועה של מחזור התא."
    },
    {
        question: "מהו התפקיד העיקרי של אינסולין בגוף?",
        options: [
            { text: "הגברת הכנסת גלוקוז לתאי שריר, שומן וכבד", correct: true },
            { text: "הגברת ייצור גלוקוז בכבד", correct: false },
            { text: "פירוק שומן והעלאת חומצות שומן בדם", correct: false },
            { text: "עיכוב צריכת גלוקוז ברקמות פריפריות", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "תפקידו העיקרי של אינסולין הוא הגברת הכנסת גלוקוז לתאי שריר, שומן וכבד."
    },
    {
        question: "איזו מהטענות הבאות נכונה לגבי הבקרה הפיזיולוגית של גלוקוז והאבחנה של סוכרת?",
        options: [
            { text: "אינסולין מגביר הכנסת גלוקוז לשריר ולרקמת שומן, מעכב ייצור גלוקוז בכבד, ורמת גלוקוז בצום של 126 מ״ג/ד״ל ביותר מבדיקה אחת מספיקה לאבחנת סוכרת.", correct: true },
            { text: "אינסולין פועל בעיקר בכבד בלבד, ואבחנת סוכרת מתבצעת רק לפי מבחן העמסת סוכר מעל 200 מ״ג/ד״ל.", correct: false },
            { text: "במצב של IGT רמת הגלוקוז בצום תמיד נמוכה מ-110 מ״ג/ד״ל ואין סיכון מוגבר למחלה קרדיווסקולרית.", correct: false },
            { text: "היפרגליקמיה בסוכרת נגרמת רק מחוסר מוחלט בהפרשת אינסולין, ללא קשר לעמידות לאינסולין.", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "אינסולין מגביר הכנסת גלוקוז ומעכב ייצור גלוקוז בכבד, ורמת גלוקוז 126 מ\"ג/ד\"ל בצום מספיקה לאבחון סוכרת."
    },
    {
        question: "מהו האתר העיקרי בו מתרחשת הפגיעה הכלייתית ב-Diabetic Nephropathy?",
        options: [
            { text: "הגלומרולים", correct: true },
            { text: "האינטרסטיציום הכלייתי", correct: false },
            { text: "האבוביות (טובולים)", correct: false },
            { text: "אגן הכליה", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "הפגיעה הכלייתית ב-Diabetic Nephropathy מתרחשת בעיקר בגלומרולים."
    },
    {
        question: "איזה מנגנון אחראי בעיקר להתפתחות קטואצידוזיס בסוכרת סוג 1?",
        options: [
            { text: "עודף אינסולין", correct: false },
            { text: "פירוק גליקוגן מוגבר", correct: false },
            { text: "ליפוליזה מוגברת ויצירת גופי קטון", correct: true },
            { text: "ירידה בקליטת גלוקוז במעי", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "קטואצידוזיס בסוכרת סוג 1 נגרמת מליפוליזה מוגברת ויצירת גופי קטון."
    },
    {
        question: "איזו פגיעה מאפיינת מיקרואנגיופתיה סוכרתית?",
        options: [
            { text: "עיבוי ה־Basement membrane בכלי דם קטנים", correct: true },
            { text: "קרע באאורטה", correct: false },
            { text: "דימום מוחי חריף", correct: false },
            { text: "הרחבה של כלי דם גדולים", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "מיקרואנגיופתיה סוכרתית מאופיינת בעיבוי ה-Basement membrane בכלי דם קטנים."
    },
    {
        question: "מהו המנגנון המוביל לפגיעה בתאים ברקמות שאינן מושפעות מאינסולין (כגון כליה ועצבים)?",
        options: [
            { text: "הפיכת גלוקוז לפרוקטוז, תהליך הצורך NADPH ומוביל למחסור בחמצן", correct: true },
            { text: "ירידה ברמות הגלוקוז בתוך התא", correct: false },
            { text: "חסימה של הרצפטורים ע\"ג תאי מערכת החיסון", correct: false },
            { text: "ירידה ברמת הPCK התוך תאי", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "הפיכת גלוקוז לפרוקטוז צורכת NADPH ומובילה למחסור בחמצן, גורמת לפגיעה ברקמות שאינן תלויות באינסולין."
    },
    {
        question: "מהו התפקיד העיקרי של האינסולין בגוף?",
        options: [
            { text: "הגברת הכנסת גלוקוז לתאים מסוימים, עיכוב ייצור גלוקוז בכבד ועידוד אגירת אנרגיה", correct: true },
            { text: "עידוד פירוק שומנים והגברת ייצור גלוקוז בכבד", correct: false },
            { text: "עיכוב כניסת גלוקוז לתאי שריר ושומן", correct: false },
            { text: "העלאת רמות הגלוקוז בדם במצבי צום", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "התפקיד העיקרי של האינסולין הוא הגברת הכנסת גלוקוז לתאים, עיכוב ייצור גלוקוז בכבד ועידוד אגירת אנרגיה."
    },
    {
        question: "איזו פגיעה עצבית אופיינית לסוכרת?",
        options: [
            { text: "נוירופתיה סנסורית ומוטורית בגפיים התחתונות", correct: true },
            { text: "פגיעה בלעדית במערכת העצבים המרכזית", correct: false },
            { text: "פרכוסים חוזרים", correct: false },
            { text: "פגיעה עצבית חד פעמית בלבד", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "פגיעה עצבית אופיינית בסוכרת היא נוירופתיה סנסורית ומוטורית בגפיים התחתונות."
    },
    {
        question: "איזה מהבאים אינו מנגנון לעלייה בנזילות כלי הדם?",
        options: [
            { text: "התרבות תאי אנדותל והקטנת המרווחים ביניהם", correct: true },
            { text: "מעבר חומרים דרך תאי אנדותל באמצעות transcytosis בתגובה ל-VEGF", correct: false },
            { text: "יצירת כלי דם חדשים בשלבי הבשלה מוקדמים", correct: false },
            { text: "כיווץ תאי אנדותך בתגובה להיסטמין", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "התרבות תאי אנדותל והקטנת המרווחים ביניהם אינה מנגנון לעלייה בנזילות כלי הדם."
    },
    {
        question: "מה מאפיין גרנולומה בדלקת כרונית?",
        options: [
            { text: "אגרגטים של מאקרופאגים מאוקטבים ולימפוציטים", correct: true },
            { text: "הצטברות נויטרופילים בלבד", correct: false },
            { text: "בצקת עשירה בנוזל ללא תאים", correct: false },
            { text: "תהליך רגנרציה מלא של הרקמה", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "גרנולומה בדלקת כרונית מאופיינת באגרגטים של מאקרופאגים מאוקטבים ולימפוציטים."
    },
    {
        question: "איזו מהאפשרויות הבאות מאפיינת גרנולומה בדלקת כרונית?",
        options: [
            { text: "צברים של מאקרופאגים מאוקטבים המוקפים בלימפוציטים", correct: true },
            { text: "הצטברות נויטרופילים עם בצקת נרחבת", correct: false },
            { text: "פגיעה ברקמה עם סימני דלקת", correct: false },
            { text: "הרחבת כלי דם ע\"י פרוסטגלנדינים", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "גרנולומה מאופיינת בצברים של מאקרופאגים מאוקטבים המוקפים בלימפוציטים."
    },
    {
        question: "איזה מהבאים אינו נחשב לאחד מחמשת הסימנים הקלאסיים של דלקת?",
        options: [
            { text: "ירידת לחץ דם סיסטמי", correct: true },
            { text: "אדמומיות", correct: false },
            { text: "חום", correct: false },
            { text: "נפיחות", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "ירידת לחץ דם סיסטמי אינה אחד מחמשת הסימנים הקלאסיים של דלקת."
    },
    {
        question: "מהן המטרות העיקריות של תגובת הדלקת בגוף?",
        options: [
            { text: "סילוק הגורם הראשוני לפגיעה והתאים המתים, ואתחול תהליך הריפוי.", correct: true },
            { text: "דיכוי מוחלט של מערכת החיסון כדי למנוע נזק לרקמות בריאות.", correct: false },
            { text: "ייצור תאי דם אדומים חדשים למניעת אנמיה באזור הפגוע.", correct: false },
            { text: "מניעת זרימת דם לאזור הפגוע כדי לבודד את הזיהום.", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "המטרות העיקריות של תגובת הדלקת הן סילוק הגורם הראשוני לפגיעה והתאים המתים, ואתחול תהליך הריפוי."
    },
    {
        question: "מהם חמשת הסימנים הקליניים המובהקים המאפיינים דלקת חריפה?",
        options: [
            { text: "חום, אדמומיות, נפיחות (בצקת), כאב ואובדן תפקוד.", correct: true },
            { text: "ירידה בלחץ הדם, חיוורון, נפיחות, גרד ואובדן תפקוד.", correct: false },
            { text: "חום סיסטמי, אדמומיות מקומית, דימום, כאב וייצור כלי דם חדשים.", correct: false },
            { text: "כיווץ כלי דם, חיוורון, קור מקומי, כאב וייצור רקמת צלקת.", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "חמשת הסימנים הקליניים המאפיינים דלקת חריפה הם: חום, אדמומיות, נפיחות, כאב ואובדן תפקוד."
    },
    {
        question: "מה ההבדל בין דלקת כרונית לדלקת אקוטית?",
        options: [
            { text: "דלקת כרונית משפיעה קצת יותר לאט מאשר דלקת כרונית", correct: true },
            { text: "בשני סוגי הדלקות הסימנים המקומיים בולטים", correct: false },
            { text: "בשני סוגי הדלקות התאים שמשתתפים הם נויטרופילים", correct: false },
            { text: "בדלקת אקוטית הנזק לרקמות יותר קשה", correct: false }
        ],
        category: "ניאופלזיה",
        explanation: "דלקת כרונית מתפתחת לאט יותר מדלקת אקוטית."
    },
    // ===== שאלות דלקת =====
    {
        question: "מהו משך הזמן האופייני להתרחשות דלקת אקוטית?",
        options: [
            { text: "מהיר - דקות עד שעות", correct: true },
            { text: "איטי - ימים", correct: false },
            { text: "שבועות", correct: false },
            { text: "חודשים", correct: false }
        ],
        category: "דלקת",
        explanation: "דלקת אקוטית מתפתחת במהירות - בטווח של דקות עד שעות, בניגוד לדלקת כרונית שמתפתחת לאט יותר."
    },
    {
        question: "אילו תאים משתתפים בעיקר בדלקת אקוטית?",
        options: [
            { text: "בעיקר נויטרופילים", correct: true },
            { text: "בעיקר מונוציטים/מאקרופאגים ולימפוציטים", correct: false },
            { text: "בעיקר אאוזינופילים", correct: false },
            { text: "בעיקר בזופילים", correct: false }
        ],
        category: "דלקת",
        explanation: "הנויטרופילים הם התאים העיקריים בדלקת אקוטית. בדלקת כרונית, מונוציטים/מאקרופאגים ולימפוציטים הם העיקריים."
    },
    {
        question: "מה מאפיין את הנזק לרקמות בדלקת כרונית?",
        options: [
            { text: "לעיתים קרובות חמור ופרוגרסיבי, פיברוזיס", correct: true },
            { text: "בדרך כלל קל ומוגבל עצמית", correct: false },
            { text: "אין נזק לרקמות", correct: false },
            { text: "רק נזק זמני הפיך", correct: false }
        ],
        category: "דלקת",
        explanation: "דלקת כרונית מאופיינת בנזק רקמתי חמור ופרוגרסיבי עם פיברוזיס, בניגוד לדלקת אקוטית שהנזק בה בדרך כלל קל ומוגבל עצמית."
    }
];
