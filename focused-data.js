// Focused Quiz Data - חיסוני הפטיטיס B, שחמת, סוכרת ואנדוקרינולוגיה
// Concentrated questions on specific exam topics

const focusedData = [
    // ========== חיסוני הפטיטיס B - Hepatitis B Immunization ==========
    {
        question: "מהו סוג החיסון נגד הפטיטיס B?",
        options: [
            { text: "חיסון רקומביננטי (תת-יחידה) המכיל HBsAg מיוצר בשמרים", correct: true },
            { text: "חיסון חי מוחלש המכיל נגיף מוחלש", correct: false },
            { text: "חיסון מומת המכיל נגיף שלם מומת", correct: false },
            { text: "חיסון טוקסואיד המכיל רעלן מנוטרל", correct: false }
        ],
        category: "חיסוני הפטיטיס B",
        explanation: "חיסון הפטיטיס B הוא חיסון רקומביננטי - HBsAg מיוצר בהנדסה גנטית בשמרים. בטוח ויעיל מאוד."
    },
    {
        question: "מהו לוח הזמנים הסטנדרטי לחיסון הפטיטיס B?",
        options: [
            { text: "0, 1, 6 חודשים - שלוש מנות", correct: true },
            { text: "0, 2, 4 חודשים - שלוש מנות", correct: false },
            { text: "0, 1 חודש - שתי מנות בלבד", correct: false },
            { text: "מנה בודדת עם בוסטר לאחר 5 שנים", correct: false }
        ],
        category: "חיסוני הפטיטיס B",
        explanation: "לוח החיסונים הסטנדרטי: מנה ראשונה, מנה שנייה לאחר חודש, מנה שלישית לאחר 6 חודשים מהראשונה."
    },
    {
        question: "מהי רמת Anti-HBs המעידה על חיסון מוצלח?",
        options: [
            { text: "מעל 10 mIU/mL", correct: true },
            { text: "מעל 100 mIU/mL", correct: false },
            { text: "מעל 1 mIU/mL", correct: false },
            { text: "כל רמה חיובית מספיקה", correct: false }
        ],
        category: "חיסוני הפטיטיס B",
        explanation: "רמת Anti-HBs מעל 10 mIU/mL מעידה על הגנה מספקת. בדיקה נעשית 1-2 חודשים לאחר המנה השלישית."
    },
    {
        question: "מה עושים אם לאחר 3 מנות חיסון רמת Anti-HBs נמוכה מ-10?",
        options: [
            { text: "נותנים סדרה נוספת של 3 מנות ובודקים שוב", correct: true },
            { text: "המטופל נחשב Non-responder ואין מה לעשות", correct: false },
            { text: "נותנים מנה בודדת נוספת וזה מספיק", correct: false },
            { text: "נותנים HBIG במקום חיסון פעיל", correct: false }
        ],
        category: "חיסוני הפטיטיס B",
        explanation: "Non-responders מקבלים סדרה שנייה של 3 מנות. 30-50% יגיבו לסדרה השנייה. אם עדיין לא - נחשבים Non-responders."
    },
    {
        question: "מיהם Non-responders לחיסון הפטיטיס B?",
        options: [
            { text: "אנשים שלא מפתחים Anti-HBs מעל 10 גם לאחר שתי סדרות חיסונים", correct: true },
            { text: "אנשים שלא קיבלו את כל שלוש המנות", correct: false },
            { text: "אנשים עם HBsAg חיובי לפני החיסון", correct: false },
            { text: "אנשים שרמת Anti-HBs שלהם ירדה לאחר שנים", correct: false }
        ],
        category: "חיסוני הפטיטיס B",
        explanation: "Non-responders (5-10% מהמחוסנים) אינם מגיבים לחיסון. גורמי סיכון: גיל מבוגר, השמנה, עישון, דיאליזה."
    },
    {
        question: "מתי יש לתת HBIG (אימונוגלובולין) בנוסף לחיסון?",
        options: [
            { text: "לאחר חשיפה משמעותית לדם נגוע או ליילוד לאם HBsAg חיובית", correct: true },
            { text: "לכל מי שמתחיל סדרת חיסונים", correct: false },
            { text: "רק ל-Non-responders כטיפול קבוע", correct: false },
            { text: "רק למטופלים מדוכאי חיסון", correct: false }
        ],
        category: "חיסוני הפטיטיס B",
        explanation: "HBIG מספק חסינות פסיבית מיידית. ניתן לאחר חשיפה (PEP) וליילוד לאם חיובית - יחד עם חיסון פעיל."
    },
    {
        question: "מהו הטיפול ביילוד לאם עם HBsAg חיובי?",
        options: [
            { text: "HBIG + חיסון תוך 12 שעות מהלידה", correct: true },
            { text: "חיסון בלבד תוך 24 שעות", correct: false },
            { text: "HBIG בלבד, חיסון לאחר חודש", correct: false },
            { text: "המתנה לבדיקת סרולוגיה של היילוד", correct: false }
        ],
        category: "חיסוני הפטיטיס B",
        explanation: "יילוד לאם חיובית מקבל HBIG + מנת חיסון ראשונה תוך 12 שעות. יעילות של 95% במניעת העברה אנכית."
    },
    {
        question: "האם נדרש בוסטר (מנת חיזוק) לחיסון הפטיטיס B?",
        options: [
            { text: "לא נדרש בוסטר לאנשים בריאים - הזיכרון האימונולוגי שומר עליהם", correct: true },
            { text: "כן, כל 5 שנים", correct: false },
            { text: "כן, כל 10 שנים", correct: false },
            { text: "כן, בוסטר חד פעמי לאחר 10 שנים", correct: false }
        ],
        category: "חיסוני הפטיטיס B",
        explanation: "למרות ירידה ברמת Anti-HBs עם הזמן, הזיכרון האימונולוגי נשמר. בוסטר נדרש רק לקבוצות סיכון (דיאליזה)."
    },
    {
        question: "לאילו קבוצות סיכון מומלץ חיסון הפטיטיס B?",
        options: [
            { text: "צוות רפואי, מטופלי דיאליזה, בני זוג של נשאים, מכורים לסמים IV", correct: true },
            { text: "רק צוות רפואי וחולים כרוניים", correct: false },
            { text: "רק יילודים ותינוקות עד גיל שנה", correct: false },
            { text: "רק נוסעים לאזורים אנדמיים", correct: false }
        ],
        category: "חיסוני הפטיטיס B",
        explanation: "קבוצות סיכון: צוות רפואי, דיאליזה, מגע עם נשאים, מכורים IV, מרובי פרטנרים, אסירים, נוסעים לאזורים אנדמיים."
    },
    {
        question: "מדוע חולי דיאליזה צריכים מינון כפול של חיסון הפטיטיס B?",
        options: [
            { text: "בגלל תגובה חיסונית מופחתת עקב אורמיה ודיכוי חיסוני", correct: true },
            { text: "בגלל פינוי מהיר של החיסון דרך הדיאליזה", correct: false },
            { text: "בגלל שהם חשופים יותר לנגיף מאנשים אחרים", correct: false },
            { text: "בגלל אינטראקציה עם תרופות שהם מקבלים", correct: false }
        ],
        category: "חיסוני הפטיטיס B",
        explanation: "אורמיה גורמת לדיכוי חיסוני. חולי דיאליזה מקבלים 40mcg במקום 20mcg, ונדרש מעקב שנתי לרמת Anti-HBs."
    },
    {
        question: "מהי הבדיקה לאחר חיסון הפטיטיס B לצוות רפואי?",
        options: [
            { text: "בדיקת Anti-HBs כמותית 1-2 חודשים לאחר המנה השלישית", correct: true },
            { text: "בדיקת HBsAg לשלילת זיהום", correct: false },
            { text: "בדיקת Anti-HBc לבדיקת חשיפה", correct: false },
            { text: "אין צורך בבדיקה לאחר החיסון", correct: false }
        ],
        category: "חיסוני הפטיטיס B",
        explanation: "לצוות רפואי חשוב לאשר תגובה לחיסון. Anti-HBs מעל 10 = הגנה. אם נמוך - סדרה נוספת."
    },
    {
        question: "מה ההנחיה לאחר חשיפה מקצועית לדם (מחט) כשהמקור HBsAg חיובי?",
        options: [
            { text: "HBIG + התחלת/השלמת סדרת חיסונים אם לא מחוסן או לא הגיב", correct: true },
            { text: "חיסון בלבד ללא HBIG", correct: false },
            { text: "המתנה לתוצאות בדיקה של הנחשף", correct: false },
            { text: "אין צורך בטיפול אם החשיפה הייתה שטחית", correct: false }
        ],
        category: "חיסוני הפטיטיס B",
        explanation: "PEP (Post-Exposure Prophylaxis): לא מחוסן/לא הגיב - HBIG + חיסון תוך 24 שעות. מחוסן עם תגובה - אין צורך."
    },
    {
        question: "מה המשמעות של Window Period בהפטיטיס B?",
        options: [
            { text: "תקופה בה HBsAg נעלם ו-Anti-HBs עוד לא הופיע - רק Anti-HBc חיובי", correct: true },
            { text: "תקופת הדגירה מרגע ההדבקה", correct: false },
            { text: "התקופה בה החיסון עדיין לא יעיל", correct: false },
            { text: "הזמן שלוקח ל-HBIG להתפרק בגוף", correct: false }
        ],
        category: "חיסוני הפטיטיס B",
        explanation: "Window Period: Anti-HBc (בעיקר IgM) הוא הסמן היחיד החיובי. חשוב לאבחון - לא לפספס זיהום חריף."
    },
    {
        question: "מה ההבדל בין חסינות מחיסון לחסינות מזיהום קודם?",
        options: [
            { text: "חיסון: רק Anti-HBs חיובי. זיהום קודם: Anti-HBs + Anti-HBc חיוביים", correct: true },
            { text: "אין הבדל בבדיקות המעבדה", correct: false },
            { text: "חיסון: Anti-HBc חיובי. זיהום קודם: Anti-HBs חיובי", correct: false },
            { text: "חיסון נותן רמות גבוהות יותר של נוגדנים", correct: false }
        ],
        category: "חיסוני הפטיטיס B",
        explanation: "מחוסן: רק Anti-HBs (מהחיסון). החלמה טבעית: Anti-HBs + Anti-HBc (מהזיהום הקודם)."
    },
    {
        question: "מתי אין לתת חיסון הפטיטיס B?",
        options: [
            { text: "תגובה אנפילקטית קודמת לחיסון או לשמרים", correct: true },
            { text: "הריון - החיסון הוא קונטראינדיקציה מוחלטת", correct: false },
            { text: "מחלה חריפה קלה עם חום נמוך", correct: false },
            { text: "נטילת אנטיביוטיקה במקביל", correct: false }
        ],
        category: "חיסוני הפטיטיס B",
        explanation: "הקונטראינדיקציה היחידה: תגובה אנפילקטית לחיסון קודם או לשמרים. החיסון בטוח בהריון!"
    },

    // ========== שחמת - תוצאות מעבדה - Cirrhosis Lab Results ==========
    {
        question: "מהו הסמן המעבדתי הראשון להיפגע בשחמת?",
        options: [
            { text: "אלבומין - יורד עקב פגיעה בסינתזה בכבד", correct: true },
            { text: "בילירובין - עולה עקב פגיעה בהפרשה", correct: false },
            { text: "INR - עולה עקב פגיעה בגורמי קרישה", correct: false },
            { text: "אמוניה - עולה עקב פגיעה במעגל האוריאה", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "אלבומין מיוצר בכבד, ואופי פגיעה כרונית בשחמת. חציון חיים ארוך (21 יום) - ירידה מעידה על פגיעה מתמשכת."
    },
    {
        question: "מדוע INR מוארך בשחמת?",
        options: [
            { text: "הכבד לא מייצר מספיק גורמי קרישה (II, VII, IX, X)", correct: true },
            { text: "יש עודף ויטמין K בגוף", correct: false },
            { text: "הכבד מייצר יותר מדי פיברינוגן", correct: false },
            { text: "יש צריכת יתר של טסיות בטחול", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "הכבד מסנתז גורמי קרישה תלויי ויטמין K (II, VII, IX, X). בשחמת - סינתזה ירודה ו-INR עולה."
    },
    {
        question: "מדוע בילירובין עולה בשחמת?",
        options: [
            { text: "פגיעה ביכולת הכבד לצמד (conjugate) ולהפריש בילירובין", correct: true },
            { text: "עלייה בהמוליזה של כדוריות דם אדומות", correct: false },
            { text: "חסימה מכנית של צינורות המרה", correct: false },
            { text: "ייצור יתר של בילירובין בטחול", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "בילירובין עובר conjugation בכבד. בשחמת - פגיעה בתהליך וב-excretion, עלייה בשני הסוגים."
    },
    {
        question: "מה ההבדל בין עליית אנזימי כבד בהפטיטיס חריפה לשחמת?",
        options: [
            { text: "בהפטיטיס - ALT/AST גבוהים מאוד. בשחמת - יכולים להיות נורמליים או מעט מוגברים", correct: true },
            { text: "בשחמת - ALT/AST גבוהים יותר מהפטיטיס", correct: false },
            { text: "אין הבדל משמעותי ברמות האנזימים", correct: false },
            { text: "בהפטיטיס - רק AST עולה, בשחמת - רק ALT", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "בשחמת יש פחות hepatocytes בריאים לשחרר אנזימים. ALT/AST יכולים להיות נורמליים למרות נזק כבדי חמור!"
    },
    {
        question: "מהו יחס AST/ALT (De Ritis Ratio) האופייני לשחמת אלכוהולית?",
        options: [
            { text: "מעל 2:1 - AST גבוה משמעותית מ-ALT", correct: true },
            { text: "1:1 - שווים", correct: false },
            { text: "מתחת ל-1:2 - ALT גבוה יותר", correct: false },
            { text: "אין יחס אופייני", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "בשחמת אלכוהולית AST/ALT > 2. בהפטיטיס ויראלית היחס בדרך כלל < 1. עוזר באבחנה מבדלת."
    },
    {
        question: "מדוע יש טרומבוציטופניה בשחמת?",
        options: [
            { text: "ספלנומגליה גורמת לכליאת טסיות בטחול (hypersplenism)", correct: true },
            { text: "הכבד מייצר פחות טסיות", correct: false },
            { text: "נוגדנים הורסים את הטסיות (ITP)", correct: false },
            { text: "צריכת יתר של טסיות בקרישי דם", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "יתר לחץ דם פורטלי גורם לספלנומגליה. טחול מוגדל כולא טסיות (ולפעמים גם WBC ו-RBC) = pancytopenia."
    },
    {
        question: "מהי רמת אמוניה בשחמת ומה המשמעות?",
        options: [
            { text: "מוגברת - הכבד לא ממיר אמוניה לאוריאה, גורמת לאנצפלופתיה", correct: true },
            { text: "מופחתת - הכבד מייצר יותר אוריאה", correct: false },
            { text: "נורמלית - אין קשר לתפקוד הכבד", correct: false },
            { text: "משתנה - תלוי בסוג השחמת בלבד", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "אמוניה מחיידקי מעי צריכה להמיר לאוריאה בכבד. בשחמת - הצטברות אמוניה גורמת להפטיק אנצפלופתיה."
    },
    {
        question: "מהו Child-Pugh Score ומה הוא מודד?",
        options: [
            { text: "ציון לחומרת שחמת: בילירובין, אלבומין, INR, מיימת, אנצפלופתיה", correct: true },
            { text: "ציון לחומרת הפטיטיס חריפה בלבד", correct: false },
            { text: "מדד לסיכון לסרטן כבד", correct: false },
            { text: "ציון לנזק כבדי מתרופות", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "Child-Pugh A (5-6), B (7-9), C (10-15). כולל 5 פרמטרים. משמש לפרוגנוזה והחלטות טיפול/השתלה."
    },
    {
        question: "מהו MELD Score ולמה הוא משמש?",
        options: [
            { text: "ציון הכולל בילירובין, INR, קריאטינין - לתעדוף להשתלת כבד", correct: true },
            { text: "ציון לחומרת דלקת לבלב", correct: false },
            { text: "מדד לתגובה לטיפול אנטי-ויראלי", correct: false },
            { text: "ציון לסיכון לדימום מדליות", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "MELD (Model for End-stage Liver Disease): 6-40. משמש לתעדוף להשתלת כבד. גבוה יותר = דחיפות גבוהה יותר."
    },
    {
        question: "מדוע רמת נתרן נמוכה (היפונתרמיה) שכיחה בשחמת?",
        options: [
            { text: "אגירת מים (dilutional) עקב ADH מוגבר והפעלת RAAS", correct: true },
            { text: "איבוד נתרן בשתן עקב פגיעה כלייתית", correct: false },
            { text: "חוסר צריכה תזונתית של נתרן", correct: false },
            { text: "העברת נתרן לתאים עקב חמצת", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "בשחמת יש vasodilatation ספלנכני, הפעלת RAAS ו-ADH. אגירת מים מדללת את הנתרן = dilutional hyponatremia."
    },
    {
        question: "מה מעידה רמת אלפא-פטופרוטאין (AFP) גבוהה בשחמת?",
        options: [
            { text: "חשד להתפתחות קרצינומה הפטוצלולרית (HCC)", correct: true },
            { text: "החמרה בתפקודי הכבד", correct: false },
            { text: "התפתחות מיימת", correct: false },
            { text: "עלייה בלחץ הפורטלי", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "AFP הוא tumor marker ל-HCC. שחמת היא גורם סיכון ל-HCC. מעקב בUS + AFP כל 6 חודשים."
    },
    {
        question: "מה ההבדל בין היפרבילירובינמיה conjugated ל-unconjugated?",
        options: [
            { text: "Conjugated: בילירובין ישיר, בעיה בכבד/מרה. Unconjugated: בילירובין עקיף, המוליזה/Gilbert", correct: true },
            { text: "אין הבדל קליני משמעותי", correct: false },
            { text: "Conjugated: המוליזה. Unconjugated: חסימת מרה", correct: false },
            { text: "שניהם מעידים על אותה בעיה בדיוק", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "Unconjugated (indirect): לפני עיבוד בכבד - המוליזה, Gilbert. Conjugated (direct): לאחר עיבוד - חסימה, שחמת."
    },
    {
        question: "מדוע ALP (Alkaline Phosphatase) יכול להיות גבוה בשחמת?",
        options: [
            { text: "פגיעה בתאי צינוריות המרה (cholestasis) בתוך הכבד", correct: true },
            { text: "פגיעה ישירה בהפטוציטים", correct: false },
            { text: "ספלנומגליה מפרישה ALP", correct: false },
            { text: "ALP תמיד נורמלי בשחמת", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "ALP ו-GGT הם סמני cholestasis. בשחמת יש גם intrahepatic cholestasis. עלייה משמעותית ב-ALP מחשידה ל-PBC/PSC."
    },
    {
        question: "מהי משמעות GGT גבוה בהקשר של שחמת?",
        options: [
            { text: "רגיש לנזק כבדי וצריכת אלכוהול, מעיד על cholestasis", correct: true },
            { text: "ספציפי להמוליזה בלבד", correct: false },
            { text: "מעיד על פגיעה כלייתית נלווית", correct: false },
            { text: "תמיד נורמלי בשחמת אלכוהולית", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "GGT מוגבר באלכוהול גם ללא מחלת כבד. בשחמת - עלייה עם ALP מעידה על cholestasis. רגיש אך לא ספציפי."
    },
    {
        question: "מה תפקיד בדיקת קריאטינין בהערכת שחמת?",
        options: [
            { text: "הערכת תפקוד כלייתי - חשד ל-Hepatorenal Syndrome", correct: true },
            { text: "הערכת תפקוד הכבד עצמו", correct: false },
            { text: "קריאטינין לא רלוונטי בשחמת", correct: false },
            { text: "הערכת מצב תזונתי בלבד", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "HRS (Hepatorenal Syndrome) הוא סיבוך של שחמת. עלייה בקריאטינין בחולה שחמת = סימן מחשיד. גם ב-MELD Score."
    },
    {
        question: "מהו Paracentesis ומה בודקים בנוזל המיימת?",
        options: [
            { text: "ניקוז נוזל מהבטן. בודקים SAAG, תאים, חלבון, תרבית", correct: true },
            { text: "ביופסיית כבד לאבחון שחמת", correct: false },
            { text: "בדיקת דם ורידי מהכבד", correct: false },
            { text: "הזרקת חומר ניגוד לצינורות המרה", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "Paracentesis: ניקוז מיימת. SAAG > 1.1 = יתר לחץ פורטלי. PMN > 250 = SBP. חלבון נמוך = סיכון ל-SBP."
    },
    {
        question: "מהו SAAG ומה המשמעות שלו?",
        options: [
            { text: "Serum-Ascites Albumin Gradient. מעל 1.1 = יתר לחץ פורטלי", correct: true },
            { text: "בדיקה לזיהום בנוזל המיימת", correct: false },
            { text: "יחס בילירובין בדם למיימת", correct: false },
            { text: "מדד לחומרת אנצפלופתיה", correct: false }
        ],
        category: "שחמת - מעבדה",
        explanation: "SAAG = Serum Albumin - Ascites Albumin. > 1.1 = portal HTN (שחמת). < 1.1 = סיבות אחרות (ממאירות, TB)."
    },

    // ========== סוכרת ואנדוקרינולוגיה ==========
    {
        question: "מהם ערכי הסוכר לאבחון סוכרת?",
        options: [
            { text: "צום ≥126, או אקראי ≥200 עם סימפטומים, או HbA1c ≥6.5%", correct: true },
            { text: "צום ≥100, או אקראי ≥140", correct: false },
            { text: "רק HbA1c ≥7% מאשר אבחנה", correct: false },
            { text: "צום ≥140 בלבד", correct: false }
        ],
        category: "סוכרת",
        explanation: "אבחון סוכרת: FPG ≥126 (פעמיים), או Random ≥200 + סימפטומים, או OGTT ≥200 בשעתיים, או HbA1c ≥6.5%."
    },
    {
        question: "מהו Pre-diabetes ומה הערכים?",
        options: [
            { text: "צום 100-125 (IFG) או HbA1c 5.7-6.4% - סיכון מוגבר לסוכרת", correct: true },
            { text: "צום 90-100 - ללא משמעות קלינית", correct: false },
            { text: "HbA1c 6.5-7% - סוכרת קלה", correct: false },
            { text: "אין מצב כזה - או סוכרת או לא", correct: false }
        ],
        category: "סוכרת",
        explanation: "Pre-diabetes: IFG (100-125), IGT (OGTT 140-199), HbA1c 5.7-6.4%. שינוי אורח חיים יכול למנוע התקדמות."
    },
    {
        question: "מה ההבדל העיקרי בין סוכרת סוג 1 לסוג 2?",
        options: [
            { text: "סוג 1: חוסר מוחלט באינסולין (אוטואימוני). סוג 2: תנגודת לאינסולין עם חסר יחסי", correct: true },
            { text: "סוג 1: מבוגרים. סוג 2: ילדים", correct: false },
            { text: "סוג 1: קשור להשמנה. סוג 2: לא קשור להשמנה", correct: false },
            { text: "אין הבדל משמעותי - אותה מחלה", correct: false }
        ],
        category: "סוכרת",
        explanation: "סוג 1: הרס אוטואימוני של תאי בטא, חייב אינסולין. סוג 2: תנגודת + חסר יחסי, לרוב קשור להשמנה."
    },
    {
        question: "אילו נוגדנים מעידים על סוכרת סוג 1?",
        options: [
            { text: "Anti-GAD, Anti-IA2, Anti-Insulin, Anti-ZnT8", correct: true },
            { text: "ANA ו-Anti-dsDNA", correct: false },
            { text: "Anti-TPO ו-Anti-TG", correct: false },
            { text: "אין נוגדנים אופייניים", correct: false }
        ],
        category: "סוכרת",
        explanation: "נוגדנים לתאי בטא: GAD65, IA-2, Insulin, ZnT8. חיוביים בסוג 1 ולפעמים ב-LADA (סוכרת אוטואימונית במבוגרים)."
    },
    {
        question: "מהו C-peptide ומה משמעותו בסוכרת?",
        options: [
            { text: "מדד לייצור אינסולין אנדוגני - נמוך בסוג 1, נורמלי/גבוה בסוג 2 מוקדם", correct: true },
            { text: "סמן לנזק כלייתי מסוכרת", correct: false },
            { text: "מדד לתנגודת לאינסולין", correct: false },
            { text: "תוצר פירוק של אינסולין אקסוגני", correct: false }
        ],
        category: "סוכרת",
        explanation: "C-peptide משתחרר עם אינסולין מהלבלב. נמוך/אפס = סוג 1 או סוג 2 מתקדם. גבוה = תנגודת עם ייצור מוגבר."
    },
    {
        question: "מהם קריטריוני DKA (Diabetic Ketoacidosis)?",
        options: [
            { text: "סוכר >250, pH <7.3 או HCO3 <18, קטונים חיוביים בדם/שתן", correct: true },
            { text: "סוכר >400 בלבד", correct: false },
            { text: "קטונים חיוביים בלבד ללא קשר ל-pH", correct: false },
            { text: "pH <7.0 בלבד", correct: false }
        ],
        category: "סוכרת",
        explanation: "DKA: היפרגליקמיה + חמצת מטבולית (AG מוגבר) + קטונמיה/קטונוריה. קל/בינוני/חמור לפי pH ו-HCO3."
    },
    {
        question: "מהו הטיפול הראשוני ב-DKA?",
        options: [
            { text: "נוזלים IV (NaCl 0.9%), אינסולין IV, השלמת אשלגן, ניטור", correct: true },
            { text: "אינסולין SC בלבד ושליחה הביתה", correct: false },
            { text: "ביקרבונט IV לכל החולים", correct: false },
            { text: "גלוקוז IV לתיקון החמצת", correct: false }
        ],
        category: "סוכרת",
        explanation: "DKA: 1) נוזלים (1-2L בשעה ראשונה), 2) אינסולין IV (לאחר K>3.3), 3) K+ (כי יורד עם הטיפול), 4) ניטור צמוד."
    },
    {
        question: "מתי נותנים ביקרבונט ב-DKA?",
        options: [
            { text: "רק כאשר pH <6.9-7.0 - חמצת חמורה מסכנת חיים", correct: true },
            { text: "לכל חולה עם DKA", correct: false },
            { text: "כאשר pH <7.3", correct: false },
            { text: "אף פעם - ביקרבונט מסוכן ב-DKA", correct: false }
        ],
        category: "סוכרת",
        explanation: "ביקרבונט רק ב-pH <6.9-7.0. ברוב המקרים, תיקון DKA עם נוזלים ואינסולין יתקן את החמצת בלי ביקרבונט."
    },
    {
        question: "מהו HHS (Hyperosmolar Hyperglycemic State)?",
        options: [
            { text: "סוכר >600, אוסמולריות >320, ללא קטוזיס משמעותי, בדרך כלל בסוג 2", correct: true },
            { text: "סוכר >250 עם קטוזיס חמור", correct: false },
            { text: "היפוגליקמיה עם התייבשות", correct: false },
            { text: "חמצת לקטית עקב מטפורמין", correct: false }
        ],
        category: "סוכרת",
        explanation: "HHS: סוכר גבוה מאוד (>600), התייבשות קשה, אוסמולריות >320, ללא קטוזיס משמעותי. תמותה גבוהה יותר מ-DKA."
    },
    {
        question: "מדוע אין קטוזיס ב-HHS?",
        options: [
            { text: "יש מספיק אינסולין למנוע ליפוליזה אך לא לשליטה בסוכר", correct: true },
            { text: "חולי HHS לא מייצרים קטונים", correct: false },
            { text: "הכליות מפנות את הקטונים מהר", correct: false },
            { text: "יש קטוזיס אך הוא לא נמדד", correct: false }
        ],
        category: "סוכרת",
        explanation: "בסוג 2 יש אינסולין אנדוגני כלשהו - מספיק למנוע ליפוליזה וקטוגנזה, אך לא מספיק לוויסות סוכר."
    },
    {
        question: "מהי מטרת HbA1c ברוב חולי הסוכרת?",
        options: [
            { text: "<7% (או <53 mmol/mol)", correct: true },
            { text: "<5% (נורמלי מוחלט)", correct: false },
            { text: "<9% (מקל)", correct: false },
            { text: "אין מטרה - רק סימפטומים חשובים", correct: false }
        ],
        category: "סוכרת",
        explanation: "מטרה <7% ברוב החולים. מטרה נמוכה יותר (<6.5%) בצעירים ללא סיבוכים. מטרה גבוהה יותר (<8%) בקשישים/מורכבים."
    },
    {
        question: "מהן משפחות התרופות לסוכרת סוג 2?",
        options: [
            { text: "מטפורמין, סולפונילאוריאה, DPP-4i, GLP-1 agonists, SGLT2i, TZD, אינסולין", correct: true },
            { text: "רק מטפורמין ואינסולין", correct: false },
            { text: "רק סולפונילאוריאה", correct: false },
            { text: "אין תרופות - רק דיאטה", correct: false }
        ],
        category: "סוכרת",
        explanation: "קו ראשון: מטפורמין. קו שני: בחירה לפי נוכחות מחלה קרדיווסקולרית, CKD, השמנה, סיכון להיפוגליקמיה."
    },
    {
        question: "מהו היתרון של SGLT2 inhibitors (גליפלוזינים)?",
        options: [
            { text: "הגנה קרדיו-רנלית, ירידה במשקל, לחץ דם, ללא היפוגליקמיה", correct: true },
            { text: "הורדת סוכר מהירה ביותר", correct: false },
            { text: "אין תופעות לוואי כלל", correct: false },
            { text: "זולים ביותר", correct: false }
        ],
        category: "סוכרת",
        explanation: "SGLT2i: הוכחו להפחית אירועים CV ולהאט CKD. תופעות לוואי: UTI, זיהומי שמרים, DKA (נדיר), Fournier gangrene."
    },
    {
        question: "מהו היתרון של GLP-1 Receptor Agonists?",
        options: [
            { text: "הגנה קרדיווסקולרית, ירידה משמעותית במשקל, סיכון נמוך להיפוגליקמיה", correct: true },
            { text: "ניתנים בטבליה פעם ביום", correct: false },
            { text: "אין בחילות כתופעת לוואי", correct: false },
            { text: "מתאימים לחולים עם היסטוריה של פנקריאטיטיס", correct: false }
        ],
        category: "סוכרת",
        explanation: "GLP-1 RA: הזרקה (Ozempic, Trulicity) או טבליה (Rybelsus). יעילים לירידה במשקל. תופעות: בחילות, סיכון לפנקריאטיטיס."
    },
    {
        question: "מדוע סולפונילאוריאה גורמת להיפוגליקמיה?",
        options: [
            { text: "מגרה הפרשת אינסולין מתאי בטא ללא תלות ברמת הסוכר", correct: true },
            { text: "מפחיתה ספיגת סוכר במעי", correct: false },
            { text: "מגבירה הפרשת סוכר בשתן", correct: false },
            { text: "משפרת רגישות לאינסולין בלבד", correct: false }
        ],
        category: "סוכרת",
        explanation: "SU נקשרת לתאי בטא ומשחררת אינסולין גם כשהסוכר נמוך. סיכון להיפוגליקמיה, במיוחד בקשישים ובאי ספיקת כליות."
    },
    {
        question: "מה הסיבוך החמור של מטפורמין?",
        options: [
            { text: "חמצת לקטית - נדיר אך מסכן חיים, במיוחד באי ספיקת כליות", correct: true },
            { text: "היפוגליקמיה קשה", correct: false },
            { text: "עלייה במשקל", correct: false },
            { text: "אין סיבוכים חמורים", correct: false }
        ],
        category: "סוכרת",
        explanation: "Lactic acidosis נדיר (<1:10,000). גורמי סיכון: CKD חמור, אי ספיקת לב, hypoxia. יש להפסיק לפני CT עם ניגוד."
    },
    {
        question: "מהי נוירופתיה סוכרתית פריפרית?",
        options: [
            { text: "פגיעה בעצבים היקפיים - נימול, צריבה, כאב בכפות הרגליים (stocking-glove)", correct: true },
            { text: "פגיעה בעצב הראייה בלבד", correct: false },
            { text: "חולשת שרירים פרוקסימלית", correct: false },
            { text: "פגיעה בעצבי הגולגולת", correct: false }
        ],
        category: "סוכרת",
        explanation: "DPN (Diabetic Peripheral Neuropathy): השכיח ביותר. סימטרי, distal, sensory > motor. סיכון לפצעים וקטיעות."
    },
    {
        question: "מהי רטינופתיה סוכרתית ואיך מוצאים אותה?",
        options: [
            { text: "פגיעה בכלי דם ברשתית - בדיקת קרקעית עין עם הרחבת אישונים", correct: true },
            { text: "פגיעה בעדשה - בדיקת חדות ראייה", correct: false },
            { text: "פגיעה בעצב האופטי - בדיקת שדה ראייה", correct: false },
            { text: "יובש בעיניים - מבחן שירמר", correct: false }
        ],
        category: "סוכרת",
        explanation: "DR: מיקרואנוריזמות, דימומים, exudates, ניאווסקולריזציה. Screening שנתי לכל חולי סוכרת. טיפול: לייזר, Anti-VEGF."
    },
    {
        question: "מהי נפרופתיה סוכרתית ומה הסימן המוקדם?",
        options: [
            { text: "פגיעה בכליות - microalbuminuria (30-300 mg/24h או ACR 30-300)", correct: true },
            { text: "דם בשתן (hematuria) כסימן ראשון", correct: false },
            { text: "קריאטינין גבוה כסימן ראשון", correct: false },
            { text: "זיהומים חוזרים בדרכי השתן", correct: false }
        ],
        category: "סוכרת",
        explanation: "DN: microalbuminuria → macroalbuminuria → ירידה ב-GFR. טיפול: ACEi/ARB, שליטה בסוכר ולחץ דם, SGLT2i."
    },
    {
        question: "מהי תרופת הבחירה להגנה כלייתית בסוכרת?",
        options: [
            { text: "ACE inhibitor או ARB - מפחיתים לחץ תוך-גלומרולרי ואלבומינוריה", correct: true },
            { text: "Beta blocker", correct: false },
            { text: "Calcium channel blocker", correct: false },
            { text: "משתן בלבד", correct: false }
        ],
        category: "סוכרת",
        explanation: "ACEi/ARB: renoprotective בנפרופתיה סוכרתית. התחלה כשיש albuminuria. SGLT2i מוסיפים הגנה נוספת."
    },
    {
        question: "מהו Somogyi Effect?",
        options: [
            { text: "היפרגליקמיה בבוקר כתגובה נגדית להיפוגליקמיה לילית", correct: true },
            { text: "היפוגליקמיה בבוקר עקב צום ארוך", correct: false },
            { text: "עלייה בסוכר לאחר ארוחה גדולה", correct: false },
            { text: "ירידה בסוכר לאחר פעילות גופנית", correct: false }
        ],
        category: "סוכרת",
        explanation: "Somogyi: hypo לילית → counterregulatory hormones (glucagon, cortisol, GH) → rebound hyperglycemia. פתרון: הפחתת אינסולין לילי."
    },
    {
        question: "מהו Dawn Phenomenon?",
        options: [
            { text: "עלייה בסוכר בשעות הבוקר המוקדמות עקב GH וקורטיזול", correct: true },
            { text: "היפוגליקמיה בבוקר", correct: false },
            { text: "תגובה להיפוגליקמיה לילית", correct: false },
            { text: "עלייה בסוכר אחרי ארוחת ערב", correct: false }
        ],
        category: "סוכרת",
        explanation: "Dawn phenomenon: שחרור פיזיולוגי של GH וקורטיזול בשעות 4-8 בבוקר. פתרון: התאמת אינסולין או תזמון."
    },
    {
        question: "מהם סוגי האינסולין לפי משך פעולה?",
        options: [
            { text: "Rapid (Lispro), Short (Regular), Intermediate (NPH), Long (Glargine, Detemir)", correct: true },
            { text: "יש רק סוג אחד של אינסולין", correct: false },
            { text: "Rapid ו-Long בלבד", correct: false },
            { text: "Short ו-Intermediate בלבד", correct: false }
        ],
        category: "סוכרת",
        explanation: "Rapid: 15-30 דקות, 3-5 שעות. Regular: 30-60 דקות, 6-8 שעות. NPH: 2-4 שעות, 12-18 שעות. Long: 24+ שעות."
    },
    {
        question: "מהו Basal-Bolus Regimen?",
        options: [
            { text: "אינסולין ארוך פעם/פעמיים ביום + אינסולין מהיר לפני ארוחות", correct: true },
            { text: "אינסולין מהיר בלבד פעמיים ביום", correct: false },
            { text: "אינסולין ארוך בלבד פעם ביום", correct: false },
            { text: "תערובת קבועה פעמיים ביום", correct: false }
        ],
        category: "סוכרת",
        explanation: "Basal-Bolus מחקה הפרשה פיזיולוגית: Basal (Lantus/Levemir/Tresiba) + Bolus (Novorapid/Humalog) לארוחות. גמיש ויעיל."
    },
    {
        question: "מהם סימני היפוגליקמיה?",
        options: [
            { text: "אדרנרגיים: רעד, הזעה, דפיקות. נוירוגליקופניים: בלבול, עייפות, פרכוסים", correct: true },
            { text: "רק סחרחורת וכאב ראש", correct: false },
            { text: "רק עייפות", correct: false },
            { text: "אין סימנים עד לאובדן הכרה", correct: false }
        ],
        category: "סוכרת",
        explanation: "סימנים אדרנרגיים (<70): הזעה, רעד, רעב, חרדה. נוירוגליקופניים (<54): בלבול, קושי בריכוז, פרכוסים, אובדן הכרה."
    },
    {
        question: "מהו הטיפול בהיפוגליקמיה?",
        options: [
            { text: "בהכרה: 15-20g פחמימות פשוטות. ללא הכרה: גלוקגון IM או Dextrose IV", correct: true },
            { text: "אינסולין נוסף", correct: false },
            { text: "צום עד שהסוכר יעלה מעצמו", correct: false },
            { text: "שתיית מים בלבד", correct: false }
        ],
        category: "סוכרת",
        explanation: "כלל 15-15: 15g פחמימות, המתן 15 דקות, בדוק שוב. אם <70 - חזור. ללא הכרה: גלוקגון 1mg IM או D50 IV."
    },
    {
        question: "מהם גורמי סיכון לרגל סוכרתית?",
        options: [
            { text: "נוירופתיה, מחלת כלי דם היקפית, עיוותים, היסטוריה של פצעים/קטיעה", correct: true },
            { text: "רק סוכר לא מאוזן", correct: false },
            { text: "רק גיל מבוגר", correct: false },
            { text: "רק השמנה", correct: false }
        ],
        category: "סוכרת",
        explanation: "Diabetic foot: שילוב של נוירופתיה (אובדן תחושה) + PVD (איסכמיה) + פגיעה חיסונית. בדיקת רגליים בכל ביקור!"
    },
    {
        question: "מהי Hypoglycemia Unawareness?",
        options: [
            { text: "אובדן הסימנים האדרנרגיים המקדימים להיפוגליקמיה - מסוכן מאוד", correct: true },
            { text: "היפוגליקמיה שלא גורמת לנזק", correct: false },
            { text: "חוסר מודעות לסוכרת", correct: false },
            { text: "היפוגליקמיה רק בלילה", correct: false }
        ],
        category: "סוכרת",
        explanation: "Hypoglycemia Unawareness: לאחר היפוגליקמיות חוזרות, הסף לתגובה אדרנרגית יורד. סיכון לאירועים חמורים. טיפול: הימנעות מהיפו."
    },
    {
        question: "מהו Thyroid Storm ומה הטיפול?",
        options: [
            { text: "היפרתיירואידיזם קיצוני מסכן חיים: PTU, בטא-בלוקר, סטרואידים, יוד", correct: true },
            { text: "היפותיירואידיזם חמור", correct: false },
            { text: "גידול בבלוטת התריס", correct: false },
            { text: "דלקת תריס חריפה", correct: false }
        ],
        category: "אנדוקרינולוגיה",
        explanation: "Thyroid Storm: טכיקרדיה, חום, בלבול, אי ספיקת לב. טיפול: PTU (מונע סינתזה וconversion), Propranolol, Hydrocortisone, Lugol."
    },
    {
        question: "מהו Myxedema Coma?",
        options: [
            { text: "היפותיירואידיזם קיצוני: היפותרמיה, ברדיקרדיה, שינוי במצב ההכרה", correct: true },
            { text: "היפרתיירואידיזם חמור", correct: false },
            { text: "גידול בבלוטת התריס", correct: false },
            { text: "דלקת תריס חריפה", correct: false }
        ],
        category: "אנדוקרינולוגיה",
        explanation: "Myxedema Coma: חירום! היפותרמיה, היפונתרמיה, היפוגליקמיה, ברדיקרדיה. טיפול: T4 IV, סטרואידים, תמיכה."
    },
    {
        question: "מהו Addisonian Crisis?",
        options: [
            { text: "אי ספיקת אדרנל חריפה: היפוטנציה, היפוגליקמיה, היפרקלמיה", correct: true },
            { text: "עודף קורטיזול", correct: false },
            { text: "גידול באדרנל", correct: false },
            { text: "עודף אלדוסטרון", correct: false }
        ],
        category: "אנדוקרינולוגיה",
        explanation: "Addisonian Crisis: חוסר קורטיזול ואלדוסטרון. היפונתרמיה, היפרקלמיה, חמצת. טיפול: Hydrocortisone IV + נוזלים."
    },
    {
        question: "מהו Pheochromocytoma?",
        options: [
            { text: "גידול באדרנל המפריש קטכולאמינים: יתר לחץ דם התקפי, דפיקות, הזעה", correct: true },
            { text: "גידול בהיפופיזה", correct: false },
            { text: "גידול בתריס", correct: false },
            { text: "גידול בלבלב", correct: false }
        ],
        category: "אנדוקרינולוגיה",
        explanation: "Pheo: 5 P's - Pressure, Pain (headache), Palpitations, Perspiration, Pallor. אבחון: Metanephrines בדם/שתן. טיפול: Alpha blocker לפני Beta, ניתוח."
    },
    {
        question: "מהו Cushing Syndrome?",
        options: [
            { text: "עודף קורטיזול: השמנה מרכזית, פנים ירח, סטריאה סגולות, חולשת שרירים", correct: true },
            { text: "חוסר קורטיזול", correct: false },
            { text: "עודף אלדוסטרון", correct: false },
            { text: "חוסר הורמון גדילה", correct: false }
        ],
        category: "אנדוקרינולוגיה",
        explanation: "Cushing: עודף קורטיזול. סיבות: ACTH-producing tumor (Cushing disease), adrenal tumor, iatrogenic. אבחון: 24h urine cortisol, DST."
    },
    {
        question: "מהו SIADH?",
        options: [
            { text: "הפרשת יתר ADH: היפונתרמיה היפוטונית עם אוסמולריות שתן גבוהה", correct: true },
            { text: "חוסר ADH", correct: false },
            { text: "היפרנתרמיה", correct: false },
            { text: "התייבשות קשה", correct: false }
        ],
        category: "אנדוקרינולוגיה",
        explanation: "SIADH: אגירת מים, דילול נתרן. סיבות: CNS, ריאות, תרופות, גידולים. טיפול: הגבלת נוזלים, NaCl אם סימפטומטי, Tolvaptan."
    },
    {
        question: "מהו Diabetes Insipidus?",
        options: [
            { text: "חוסר ADH (מרכזי) או אי תגובה לו (נפרוגני): פוליאוריה, פולידיפסיה, היפרנתרמיה", correct: true },
            { text: "עודף ADH", correct: false },
            { text: "סוכרת מסוג 1", correct: false },
            { text: "היפונתרמיה", correct: false }
        ],
        category: "אנדוקרינולוגיה",
        explanation: "DI: שתן מדולל (low osmolality), היפרנתרמיה, צמא. מרכזי: Desmopressin עוזר. נפרוגני: לא מגיב, טיפול בסיבה + Thiazide."
    },
    {
        question: "מהו Acromegaly?",
        options: [
            { text: "עודף GH במבוגרים: הגדלת ידיים, רגליים, לשון, לסת; סוכרת, יתר לחץ דם", correct: true },
            { text: "חוסר GH", correct: false },
            { text: "עודף פרולקטין", correct: false },
            { text: "עודף TSH", correct: false }
        ],
        category: "אנדוקרינולוגיה",
        explanation: "Acromegaly: adenoma בהיפופיזה מפריש GH. מוביל לסיבוכים CV, סוכרת, Sleep apnea. אבחון: IGF-1 גבוה, OGTT לא מדכא GH."
    },
    {
        question: "מהו Primary Hyperaldosteronism (Conn Syndrome)?",
        options: [
            { text: "עודף אלדוסטרון: יתר לחץ דם, היפוקלמיה, בססת מטבולית", correct: true },
            { text: "חוסר אלדוסטרון", correct: false },
            { text: "עודף קורטיזול", correct: false },
            { text: "עודף ADH", correct: false }
        ],
        category: "אנדוקרינולוגיה",
        explanation: "Conn: adenoma או hyperplasia באדרנל. HTN עמיד, K+ נמוך, Renin נמוך, Aldosterone גבוה. טיפול: Spironolactone או ניתוח."
    }
];
