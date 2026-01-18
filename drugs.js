const drugsData = [
  {
    "name": "diuretics/ משתני תאזידים hydrochlorothiazide + chlorthalidone",
    "mechanism": "חוסם מעבר של נתרן וכלור מהכלייה לגוף חזרה בצינור המרוחק/ distal tubule",
    "clinical": "יתר לחץ דם/ hypertension ובצקת קלה/ mild edema",
    "toxicity": "היפוקלמיה/ hypokalemia, היפונתרמיה/ hyponatremia, אלקולוזיס ולא מומלץ לרגישים לסולפנואימידים"
  },
  {
    "name": "diuretics/ משתני לולאה furosemide",
    "mechanism": "חוסם מעבר של נתרן, יוני כלור ואשלגן בלולאת הנפרון/ loop of henle",
    "clinical": "יתר לחץ דם/ hypertension, כישלון לבבי, בצקת ריאות חריפה, תפקוד כלייתי נמוך/ לא תקין והיפרקלצמיה/ hypercalcemia",
    "toxicity": "היפוקלמיה/ hypokalemia (הכי גרוע), היפוולמיה/ hypovolemia, היפונתרמיה/ hyponatremia, אלקלוזיס ולא מומלץ לרגישים לסולפנואידים."
  },
  {
    "name": "K sparing diuretics - spironolactone",
    "mechanism": "אנטגוניסט לאלדוסטרון בצינור הכלייה אשר משאירה את האשלגן בגוף מבלי להפסיק את השתן",
    "clinical": "אי ספיקת לב, יתר לחץ דם, בצקות ובעיקר למטופלים שטיפול בתיאזידים ומשתני לולאה גרמו לאיבוד רמות אשלגן רציניות.",
    "toxicity": "היפרקלמיה/ hyperkalemia וגנקומסטיה"
  },
  {
    "name": "osmotic diuretics - mannitol",
    "mechanism": "גורם לספיגת מים מחוץ לתאים לתוכם. בשל ספיגת הנוזלים הוא יוצא עם השתן, באזור הטובולייט הקרוב/ proximal tubule",
    "clinical": "בעיקר למניעת בצקת מוחית/ הפחתת לחץ תוך גוגולתי של הCSF, אי ספיקת כליות חריפה.",
    "toxicity": "בצקת ריאות והתייבשות"
  },
  {
    "name": "CA inhibitors - acetazolamide",
    "mechanism": "מעכבת אנזים carbonic anhydrase שמייצר מים וCO2 מbicarbonate. עקב העיכוב, כמות bicarbonate עולה, החומציות יורדת (pH עולה = פחות חומצי)",
    "clinical": "שימוש בגלוקומה, מחלת הרים חריפה (כניסת עודף חמצן לריאות) ובססת מטבולית.",
    "toxicity": "חמצת מטבולית (מינון יתר) וסדציה (דיכוי מבוקר של מע' העצבים)."
  },
  {
    "name": "sympathetic inhibitors - methyldopa",
    "mechanism": "מורידה לח\"ד ע\"י הפעלת רצפטור אלפא 2 בCNS בכך שמורידה התנגדות של כלי דם פריפרים.",
    "clinical": "טיפול ביתר לחץ דם לנשים בהריון, ויתר לחץ דם קל עד בינוני.",
    "toxicity": "דיכוי מע' העצבים המרכזית, ברעילות עיכוב מע' הפראסימפטטית ובצקות."
  },
  {
    "name": "sympathetic inhibitors - clonidine",
    "mechanism": "גורמת לעלייה קטנה של לח\"ד ע\"י הפעלת רצפטור אלפא 1 בCNS בכך שמכווצת את שריר החלק של כלי הדם ואז מרחיבה אותן, מורידה לח\"ד בכך שנקשרת לאלפא 2 - מפחיתה הפרשת נוראפינפרין",
    "clinical": "יתר לחץ דם קל/ בינוני, רעילות מאטרופין",
    "toxicity": "דיכוי מע' העצבים המרכזית, ברעילות עיכוב מע' הפראסימפטטית ובצקות."
  },
  {
    "name": "beta blocker - propranolol",
    "mechanism": "חוסם קולטני בטא 1 שבלב, לא סלקטיבי ולכן גם חוסם בטא 2 בכלי דם פריפרים ובריאות (השפעה חזקה יותר). מורידה תפקודי לב וכליה - ירידת נפח דם, התנגדות עורקית ומפחית הפרשת רנין.",
    "clinical": "כל סוגי יתר לחץ דם, תעוקת חזה, הפרעות קצב ואי ספיקת לב",
    "toxicity": "מסוכנת לחולי אסתמה, גורמת לברדיקרדיה, היצרות סמפונות, דיכאון, הזיות וסיוטים. הפסקת התרופה גורמת לטכיקרדיה, עליה בל\"ד ועצבנות."
  },
  {
    "name": "alpha blocker - Prazosin",
    "mechanism": "חוסמת קולטני אלפא 1 בכלי הדם הפריפרים, גורמת להרחבת עורקים וורידים ומורידה את התנגדותם.",
    "clinical": "יתר לחץ דם, משמשת לחולים עם גידולים שפירים בפרוסטטה",
    "toxicity": "סיכון בירידת ל\"ד עקב שינוי תנוחה לעמידה, לחץ דם נמוך/ hypotension"
  },
  {
    "name": "alpha-beta blocker - carvedilol",
    "mechanism": "חוסם קולטני בטא 1 שבלב - מוריד קצב וכוח התכווצות, וחוסם אלפא 1 בכלי הדם - הרחבת כלי דם וירידה בלחץ דם.",
    "clinical": "יתר ל\"ד, אי ספיקת לב כרונית",
    "toxicity": "סחרחורת, עייפות, ברדיקרדיה ולחץ דם נמוך"
  },
  {
    "name": "calcium channel blocker - dihydropyridines (amlodipine, nifedipine)",
    "mechanism": "חוסם את תעלות סידן בתאים של כלי הדם ובכך מורידה התנגדות עורקים",
    "clinical": "טיפול לטווח ארוך ביתר ל\"ד",
    "toxicity": "בצקות, כאבי ראש, סומק"
  },
  {
    "name": "calcium channel blocker - diltiazem",
    "mechanism": "חוסם תעלות סידן בתאי שריר הלב וכלי הדם ובכך מוריד התנגדות עורקית ותפוקת לב",
    "clinical": "טיפול לטווח ארוך ביתר ל\"ד, תעוקת חזה והפרעות קצב",
    "toxicity": "ברדיקרדיה, עצירות"
  },
  {
    "name": "calcium channel blocker - verapamil",
    "mechanism": "חוסם תעלות סידן בעיקר בתאי שריר הלב ובכך מפחית קצב והולכה לבבית.",
    "clinical": "טיפול לטווח ארוך ביתר ל\"ד, תעוקת חזה והפרעות קצב",
    "toxicity": "ברדיקרדיה, עצירות, אי ספיקת לב"
  },
  {
    "name": "vasodilator - hydralazine",
    "mechanism": "גורם להפרשת NO מוגבר בשריר חלק בעורקים שגורם להם להתרחב. בשל השפעתה על העורקים יותר מהורידים היא מורידה את הafterload",
    "clinical": "טיפול ביתר ל\"ד בינוני-חמור ולפעמים משולב עם ניטרטים באי ספיקת לב",
    "toxicity": "טכיקרדיה, בצקות, כאבי ראש (מהרחבת כלי דם במוח) וסינדרום דמוי זאבת (לופוס)"
  },
  {
    "name": "vasodilator - nitroprusside",
    "mechanism": "גורם להפרשת NO מוגבר בשריר חלק בעורקים שגורם להם להתרחב. בנוסף לכך היא מקטינה החזר ורידי והתנגדות עורקית וורידית.",
    "clinical": "מקרי חירום של אי ספיקת לב חריפה ויתר ל\"ד גבוה.",
    "toxicity": "הרעלת ציאניד כשמתערבב עם ניטרטים"
  },
  {
    "name": "vasodilator - minoxidil",
    "mechanism": "פותח תעלות אשלגן ולכן מורידה סיכוי כיווץ בשריר חלק שגורם להרפיית העורקים. עובד יותר על העורקים.",
    "clinical": "אי ספיקת כליות ויל\"ד חמור שלא מגיב לhydralazine",
    "toxicity": "Hypertrichosis (צמיחת שיער יתר), טכיקרדיה, בצקות, היפרגליקמיה (עקב פתיחת תעלות אשלגן בלבלב המעכב שיחרור אינסולין)"
  },
  {
    "name": "RAAS inhibitor - aliskiren",
    "mechanism": "מעכבת את ההורמון renin שיוצא מהכלייה, בכך מורידה את השפעתה של המע', נפח הדם והתנגדות כלי הדם",
    "clinical": "הורדת ל\"ד קל-בינוני, חולי סכרת",
    "toxicity": "שיעול יבש, היפרקלמיה, אנגיואדמה, כיווץ/ חסימת כלי דם בכליות ואסור לתת לנשים בהריון עם יתר לחץ דם"
  },
  {
    "name": "ACE inhibitors - captopril, lisinopril, enalapril",
    "mechanism": "מונעת מאנזים ACE להפוך את angiotensin 1 ל2 ופירוק חומר המרחיב כלי דם בריאות",
    "clinical": "הורדת ל\"ד קל-בינוני, חולי סכרת, אי ספיקת לב",
    "toxicity": "שיעול יבש, היפרקלמיה, אנגיואדמה, כיווץ/ חסימת כלי דם בכליות ואסור לתת לנשים בהריון"
  },
  {
    "name": "ARBs - losartan, candesartan, valsartan",
    "mechanism": "חוסמים את הרצפטורים שangiotensin 2 אמור להתחבר אלייהם ובכך מונעים בחלק האחרון של המע' לפעול ומונע ספיגת נוזלים בכליות",
    "clinical": "הורדת ל\"ד קל-בינוני, חולי סכרת, אי ספיקת לב כשיש שיעול מACEI",
    "toxicity": "היפרקלמיה, אנגיואדמה (נדיר), אסור בהריון"
  },
  {
    "name": "nitrates - nitroglycerin, isosorbide",
    "mechanism": "הופכים בגוף לNO שמרפה שרירים בכלי הדם. במינון נמוך משפיעה על הורידים שמוריד את הpreload ובמינון גבוה מעלה התנגדות בעורקים ומוריד את הafterload.",
    "clinical": "תעוקת חזה, אוטם שריר הלב, אי ספיקת לב",
    "toxicity": "כאבי ראש, טכיקרדיה, ירידה בל\"ד בשינוי תנוחה/ orthostatic hypotension, ירידה מסוכנת של ל\"ד בעת שילוב של מעכבי PDE-V כמו ויאגרה."
  },
  {
    "name": "ranolazine",
    "mechanism": "מעכבת תעלות נתרן בתאי שריר הלב ובכך מורידה את כיווצו. כך שיש פחות עומס בתאי השריר ופחות צריכת חמצן",
    "clinical": "טיפול מניעתי לתעוקת חזה",
    "toxicity": "סחרחורת, בחילות, עצירות"
  },
  {
    "name": "ivabradine",
    "mechanism": "מעכבת זרימת נתרן לSA node ובכך מורידה קצב לב וצריכת חמצן בשריר הלב.",
    "clinical": "טיפול בתעוקת חזה ובאי ספיקת לב",
    "toxicity": "ברדיקרדיה, הפרעות ראייה (פוספנים)"
  },
  {
    "name": "PDE inhibitor - milrinone",
    "mechanism": "מעכב באופן סלקטיבי את האנזים PDE3 שמפרק את הcAMP בתאים. עלייתו גורמת להגברת כוח הכיווץ של שריר הלב והרחבת עורקים וורידים. לכן מוריד preload ו-afterload",
    "clinical": "אי ספיקת לב חריפה",
    "toxicity": "הפרעות קצב, ירידת טסיות"
  },
  {
    "name": "class IA antiarrhythmic - quinidine",
    "mechanism": "חסימה בינונית לתעלות הנתרן המאריכה את התקופה הרפרקטורית. במקביל חסימה בינונית של תעלות אשלגן. כל הגירוי מתארך בזמן",
    "clinical": "מניעת הפרעות קצב לטווח ארוך ומניעת הפרעות קצב שמקורן בפרוזדורים ובחדרים",
    "toxicity": "Cinchonism (כאבי ראש, טינטון), הארכת QT, Torsades de pointes"
  },
  {
    "name": "class IB antiarrhythmic - lidocaine",
    "mechanism": "חסימה חלשה של תעלות הנתרן המקצרת את התקופה הרפרקטורית בכך שמכווצת את הלב בצורה יעילה יותר. ברקמה איסכמית מפחיתה הפרעות קצב חדריות.",
    "clinical": "טיפול במוקדים חדריים (VF/VT/PVC) היורים גירויים חשמליים בצורה לא תקינה. טיפול בהרעלת דיגוקסין",
    "toxicity": "רעילות CNS - בלבול, רעידות, פרכוסים"
  },
  {
    "name": "class IC antiarrhythmic - flecainide, propafenone",
    "mechanism": "חסימה חזקה של תעלות הנתרן המאריכה את שלב ה0 אך לא משפיעה על התקופה הרפרקטורית. במקביל חסימת רצפטור ביטא 1 שבלב. מרחיב QRS ומדכא מוקדים אקטופים",
    "clinical": "מדכא מוקדים אקטופים בהפרעות קצב חריפות",
    "toxicity": "מעלה סיכון לדום לב, פרו-אריתמי"
  },
  {
    "name": "class II antiarrhythmic - esmolol",
    "mechanism": "חוסם ביטא קצר טווח. מקטין כניסת סידן לתא ובכך מדכא ומאריך את שלב ה0. גורם לירידה בדופק ובכוח הכיווץ. בSA מוריד אוטומטיות ובAV מאט הולכה",
    "clinical": "טווח קצר בזמן ניתוחים/ מצבים דחופים שיש בהם צורך לייצוב מהיר",
    "toxicity": "ברדיקרדיה, תת לחץ דם"
  },
  {
    "name": "class III antiarrhythmic - amiodarone",
    "mechanism": "חוסם תעלות אשלגן ומאריך את התקופה הרפרקטורית. יש לו גם תכונות של כל הקבוצות האחרות",
    "clinical": "הפרעות קצב חדריות ועל-חדריות, פרפור פרוזדורים",
    "toxicity": "רעילות ריאתית, בעיות בלוטת התריס, רעילות כבד, פוטוסנסיטיביות, קורניאה"
  },
  {
    "name": "class IV antiarrhythmic - verapamil, diltiazem",
    "mechanism": "מעכבים תעלות סידן בלב ובכך משפיעים על ההולכה של הSA node וכתוצאה מכך מחלישים את כוח הכיווץ.",
    "clinical": "הורדת קצב לב בפרפור/ רפרוף פרוזדורים וSVT.",
    "toxicity": "בשילוב עם חוסמי ביטא גורם לדום לב/ אי ספיקת לב, אסור לתת את התרופה אם הפרעות הקצב מגיעות מאי ספיקת לב."
  },
  {
    "name": "atropine",
    "mechanism": "חוסמת פעילות פראסימפתטית בלב וכתוצאה מכך גורמת לעליית קצב הלב.",
    "clinical": "ניתנת להפרעות קצב איטיות כמו bradycardia ובתופעות לוואי של דופק איטי ממינון גבוה של חוסמי ביטא או הרעלת דיגוקסין.",
    "toxicity": "לא ניתנת לאנשים עם הפרעות קצב מהירות או אי ספיקת לב. יובש בפה, טשטוש ראייה"
  },
  {
    "name": "adenosine",
    "mechanism": "במינון גבוה מעכב כניסת סידן הגורם לעצירה זמנית בהולכה של הAV node ובכך \"מאפס\" את ההולכה החשמלית בלב.",
    "clinical": "ניתן בהפרעות קצב על-חדריות מהירות (SVT)",
    "toxicity": "בחילות, הקאות, קוצר נשימה, תחושות של \"נעצר לי הלב\" שחולף"
  },
  {
    "name": "fibrinolytics - alteplase, tenecteplase",
    "mechanism": "קבוצת תרופות TPA שמפרקות בצורה נקודתית קרישי דם בכך שמפרקות את הפיברינוגן והופכות אותו לפלזמין שמפרק טסיות.",
    "clinical": "פירוק קרישי דם, MI אקוטי, PE מסיבי (תסחיף ריאתי), שבץ איסכמי",
    "toxicity": "אסור לתת בהחייאה ממושכת, כיב פעיל, אירוע מוחי דימומי, ניתוח גדול, טראומה ויתר לחץ דם לא מאוזן - מעודד דימום מסיבי."
  },
  {
    "name": "statins - atorvastatin, simvastatin, rosuvastatin",
    "mechanism": "עיכוב האנזים HMG-CoA reductase המייצר כולסטרול בתאים. כתוצאה מכך על התאים נוצרים יותר קולטני LDL שמורידים את הLDL, מעט מהטריגליצרידים ועלייה קטנה של הHDL",
    "clinical": "שיפור בתפקוד תאי האנדותל, ייצוב הרובד הטרשתי, האטת התקדמות טרשת עורקים, מניעה ראשונית ושניונית של מחלת לב",
    "toxicity": "במינון גבוה פוגע בכבד וגורם להרס שרירים (rhabdomyolysis). לא ניתן להריוניות."
  },
  {
    "name": "ezetimibe",
    "mechanism": "חסימת הנשא שמעביר את הכולסטרול מהמעי לדם.",
    "clinical": "בתוספת לסטטינים יהיה שיפור בירידת הLDL ב25%.",
    "toxicity": "דלקת כבד, דלקת לבלב, טרומבוציטופניה."
  },
  {
    "name": "beta-2 agonist non-selective - epinephrine",
    "mechanism": "לא סלקטיבית, מפעילה את ביטא 1 ו2. גורמת להרחבת דרכי הנשימה ולכיווץ והגברת קצב הלב.",
    "clinical": "תגובה אנפילקטית, אסתמה חמורה",
    "toxicity": "תרופה אגרסיבית ולכן לא ניתן לחולי לב וסכרת עם אסתמה קלה-בינונית. גורמת להיפרגליקמיה, טכיקרדיה, הפרעות קצב, יל\"ד, אי ספיקת לב ורעד בשרירים."
  },
  {
    "name": "SABA - salbutamol (albuterol)",
    "mechanism": "סלקטיבית לביטא-2, גורמת לשריר החלק של דרכי הנשימה להרפות (לטווח קצר).",
    "clinical": "קו ראשון להתקף אסתמה אקוטי",
    "toxicity": "רעד, טכיקרדיה, היפוקלמיה"
  },
  {
    "name": "LABA - salmeterol, formoterol",
    "mechanism": "סלקטיבית לביטא-2, גורמת לשריר החלק של דרכי הנשימה להרפות (לטווח ארוך).",
    "clinical": "מניעת הופעת אסתמה בשינה/ nocturnal asthma. לא ניתן בזמן התקף כי לוקח לו זמן להשפיע. ניתן בשילוב עם סטרואידים.",
    "toxicity": "רעד בשרירים, עצבנות, עמידות לטיפול כתוצאה מביטוי הרצפטור בסמפונות ובמינון גבוה טכיקרדיה."
  },
  {
    "name": "muscarinic antagonist - ipratropium, tiotropium",
    "mechanism": "מעכבים את הרצפטורים המוסקריניים של אצטילכולין בתאים הגורמים לדיכוי מע' הפרא-סימפתטית. כתוצאה מכך הרפיית הסימפונות ודיכוי הפרשת הריר.",
    "clinical": "התקפי אסתמה אקוטיים עם שילוב של סטרואידים ומפעילי ביטא 2 וCOPD כטיפול מרכזי וקבוע.",
    "toxicity": "פחות יעילות ממפעילי רצפטורי ביטא, לא משפיעות על דלקת. יכולות לגרום לשיעול ופה יבש."
  },
  {
    "name": "inhaled corticosteroids - budesonide, fluticasone",
    "mechanism": "מעכבי יצירת phospholipase A2 ובכך גורם לירידת ייצור לויקוטריאנים ופרוסטגלנדינים. ירידה בחדירות כלי הדם, הבצקות, הפרשת היסטמין מתאי מאסט",
    "clinical": "טיפול מניעתי באסתמה, במשולב עם LABA",
    "toxicity": "קנדידה בפה (סור), צרידות. בשימוש ממושך - אוסטאופורוזיס, דיכוי אדרנל"
  },
  {
    "name": "systemic corticosteroids - prednisone, methylprednisolone, dexamethasone",
    "mechanism": "מעכבי דלקת חזקים, מעכבי יצירת phospholipase A2",
    "clinical": "התקף אסתמה חמור, מחלות אוטואימוניות, דלקת",
    "toxicity": "היפרגליקמיה, עלייה בפירוק חלבונים, אגירת נוזלים ומלחים, היפוקלמיה, יל\"ד, דיכאון, עיכוב בניית עצם, דיכוי בלוטת אדרנל, עלייה במשקל, סיכוי מוגבר לזיהומים, גלוקומה וקטרקט"
  },
  {
    "name": "mast cell stabilizer - cromolyn",
    "mechanism": "מייצב תאי מאסט ומונע הפרשת היסטמין",
    "clinical": "טיפול מניעתי לדלקת ודלקת בלחמית העין, הורדת רגישות סימפונות ונזלת אלרגית. מגיב יותר לילדים",
    "toxicity": "טעם מר בפה ותחושות צריבה בדרכי האוויר."
  },
  {
    "name": "leukotriene antagonist - montelukast, zafirlukast",
    "mechanism": "חוסמות קולטני לויקוטריאנים, כתוצאה מכך גורמים להרחבה חלקית של הסמפונות, מפחיתות דלקת, בצקות והפרשת ריר.",
    "clinical": "טיפול מניעתי לאסתמה קלה/ בינונית, לאחר אימון ספורט ובמיוחד בטיפול לאסמתים שהאספירין גרם להתקף",
    "toxicity": "עליה באנזימי הכבד, כאב ראש ובעיות עיכול, Churg-Strauss syndrome (נדיר)"
  },
  {
    "name": "5-lipoxygenase inhibitor - zileuton",
    "mechanism": "מעכבת את פעילות האנזים 5-lipoxygenase שמייצר ליוקוטריאנים.",
    "clinical": "מפחית תדירות של התקפי אסתמה",
    "toxicity": "עליית אנזימי הכבד, פוגעת ביעילות של warfarin, theophylline, propranolol."
  },
  {
    "name": "H1 antihistamine 1st gen - diphenhydramine, chlorpheniramine",
    "mechanism": "דור ראשון, חוסם קולטני H1 של ההיסטמין. עובר BBB",
    "clinical": "טיפול באלרגיות, גרד, נדודי שינה",
    "toxicity": "גורם לישנוניות עקב השפעה על הCNS, יובש בפה, עצירות, אצירת שתן"
  },
  {
    "name": "H1 antihistamine 2nd gen - cetirizine, loratadine, fexofenadine",
    "mechanism": "דור שני, חוסם קולטני H1 של ההיסטמין. לא עובר BBB",
    "clinical": "טיפול באלרגיות בדרכי הנשימה העליונות",
    "toxicity": "פחות סדציה מדור ראשון"
  },
  {
    "name": "anti-IgE - omalizumab",
    "mechanism": "נוגדן מונוקלונלי נגד IgE שמונע את הפעלת הרצפטורים שלו על תאי המאסט והבזופילים. מונע הפרשת מתווכי אלרגיה.",
    "clinical": "טיפול אסתמה אלרגית חמורה. לא קו 1 כי יקרה מאוד.",
    "toxicity": "תגובה אנפילקטית (נדיר)"
  },
  {
    "name": "benzodiazepines - diazepam, lorazepam, clonazepam, alprazolam",
    "mechanism": "נקשרות לתעלות GABA-A בכך שגורמות לעליית תדירות הפתיחה שלהן וכניסה גבוהה יותר של יוני כלור",
    "clinical": "במינון גבוה שינה, במינון נמוך נוגדות חרדה, הרפיית שרירי שלד, נוגד פרכוסים והקלה בתסמונת גמילה מאלכוהול",
    "toxicity": "סיכון נפילה לקשישים, פגיעה בפעילות הפסיכומוטורית, דיכוי מע' העצבים המרכזית, במינון יתר לאיבוד הכרה עד מוות. התמכרות"
  },
  {
    "name": "zolpidem",
    "mechanism": "פועל על תת-קבוצה של רצפטורי GABA-A (אלפא 1)",
    "clinical": "נדודי שינה",
    "toxicity": "הליכה בשינה, אמנזיה, תלות"
  },
  {
    "name": "TCA - amitriptyline, nortriptyline",
    "mechanism": "חסימת הנשאים של סרוטונין ונוראפינפרין להישאר בסינפסה, כך שההשפעה שלהם ממושכת.",
    "clinical": "דיכאון, כאב נוירופתי, מיגרנה",
    "toxicity": "תופעות לוואי רבות בשל חסימה נוספת של קולטני כולינרגיים והיסטמין - יובש בפה, עצירות, טשטוש ראייה, אצירת שתן, סדציה, עליה במשקל. קרדיוטוקסי במינון יתר"
  },
  {
    "name": "SSRI - escitalopram, fluoxetine, sertraline, paroxetine",
    "mechanism": "חוסמת בצורה סלקטיבית את הנשאים של הסרוטונין מהמרווח הסינפטי. כתוצאה מכך עולה ריכוז הסרוטונין",
    "clinical": "טיפול בדיכאון, חרדה, OCD, PTSD",
    "toxicity": "תופעות לוואי נמוכות יחסית, יכול לגרום לחרדה בתחילה, הפרעות מיניות, תסמונת סרוטונין בשילוב עם MAOIs"
  },
  {
    "name": "SNRI - venlafaxine, duloxetine",
    "mechanism": "חסימת הנשאים של סרוטונין ונוראפינפרין",
    "clinical": "דיכאון, חרדה, כאב נוירופתי, פיברומיאלגיה",
    "toxicity": "יל\"ד, בחילות, הפרעות מיניות"
  },
  {
    "name": "MAOI - phenelzine, tranylcypromine",
    "mechanism": "מעכבות פעילות אנזימתית של MAO. כתוצאה מכך, הסרוטונין, נוראפינפרין ודופמין לא יתפרקו אלא יצטברו",
    "clinical": "דיכאון עמיד לטיפול, פוביה חברתית",
    "toxicity": "משבר יתר לחץ דם עם מזונות עשירים בטירמין (גבינות, יין), תסמונת סרוטונין עם תרופות אחרות"
  },
  {
    "name": "mirtazapine",
    "mechanism": "חוסמת אלפא-2 פרה-סינפטי (שאחראי לבלימת שחרור יתר של נוראפינפרין). כתוצאה מכך עודף של הנוירוטרנסמיטר. גם חוסמת רצפטורי היסטמין",
    "clinical": "דיכאון, במיוחד עם אובדן תיאבון ונדודי שינה",
    "toxicity": "עלייה במשקל, סדציה"
  },
  {
    "name": "bupropion",
    "mechanism": "מעכב ספיגה חוזרת של נוראפינפרין ודופמין",
    "clinical": "דיכאון, גמילה מעישון",
    "toxicity": "נדודי שינה, יובש בפה, מוריד סף פרכוסים"
  },
  {
    "name": "sodium channel blockers - phenytoin, carbamazepine, lamotrigine",
    "mechanism": "חוסמות תעלות נתרן וכתוצאה מכך מונעות דפולריזציה במוח.",
    "clinical": "אפילפסיה, פרכוסים טוניים-קלוניים, כאב נוירופתי (carbamazepine)",
    "toxicity": "phenytoin - היפרפלזיה של חניכיים, הירסוטיזם, אטקסיה. carbamazepine - SIADH, אגרנולוציטוזיס"
  },
  {
    "name": "ethosuximide",
    "mechanism": "מעכבת תעלות סידן מסוג T בתלמוס",
    "clinical": "פרכוסי absence",
    "toxicity": "בחילות, כאבי ראש"
  },
  {
    "name": "valproic acid",
    "mechanism": "מגבירה GABA, חוסמת תעלות נתרן וסידן",
    "clinical": "כל סוגי הפרכוסים, הפרעה דו-קוטבית, מיגרנה",
    "toxicity": "הפטוטוקסי, טרטוגני (neural tube defects), עליה במשקל, רעד, נשירת שיער, פנקריאטיטיס"
  },
  {
    "name": "levetiracetam",
    "mechanism": "נקשר לחלבון SV2A בשלפוחיות סינפטיות",
    "clinical": "פרכוסים חלקיים ומוכללים",
    "toxicity": "עייפות, עצבנות, שינויים התנהגותיים"
  },
  {
    "name": "gabapentin, pregabalin",
    "mechanism": "נקשרים לתת-יחידה של תעלות סידן, מפחיתים שחרור נוירוטרנסמיטרים",
    "clinical": "כאב נוירופתי, פיברומיאלגיה, פרכוסים חלקיים, חרדה (pregabalin)",
    "toxicity": "סדציה, סחרחורת, בצקות היקפיות"
  },
  {
    "name": "local anesthetics - lidocaine, bupivacaine",
    "mechanism": "חוסמים תעלות נתרן בעצבים סנסוריים",
    "clinical": "הרדמה מקומית, הרדמה אפידורלית",
    "toxicity": "רעילות CNS - בלבול, רעידות, פרכוסים. רעילות לבבית (בעיקר bupivacaine)"
  },
  {
    "name": "inhaled anesthetics - sevoflurane, isoflurane, nitrous oxide",
    "mechanism": "מגבירים פעילות GABA, מעכבים NMDA וקולטנים ניקוטיניים",
    "clinical": "הרדמה כללית",
    "toxicity": "דיכוי נשימתי, היפותרמיה ממאירה (נדיר), בחילות והקאות"
  },
  {
    "name": "IV anesthetics - propofol",
    "mechanism": "מגביר פעילות GABA",
    "clinical": "אינדוקציה ותחזוקת הרדמה, סדציה בICU",
    "toxicity": "דיכוי נשימתי, היפוטנזיה, תסמונת אינפוזיה של פרופופול (propofol infusion syndrome)"
  },
  {
    "name": "ketamine",
    "mechanism": "אנטגוניסט NMDA",
    "clinical": "אינדוקציה להרדמה (במיוחד בפציעות), שיכוך כאבים, דיכאון עמיד",
    "toxicity": "הזיות, עליית לחץ דם, הפרשות יתר"
  },
  {
    "name": "levodopa/carbidopa",
    "mechanism": "levodopa הופכת לדופמין במוח. carbidopa מונעת המרה בפריפריה",
    "clinical": "מחלת פרקינסון",
    "toxicity": "dyskinesia, תנודות on-off, בחילות, הזיות, היפוטנזיה אורתוסטטית"
  },
  {
    "name": "dopamine agonists - pramipexole, ropinirole",
    "mechanism": "מפעילים ישירות רצפטורי דופמין",
    "clinical": "מחלת פרקינסון, RLS",
    "toxicity": "בחילות, ישנוניות, התקפי שינה, התנהגות אימפולסיבית, הזיות"
  },
  {
    "name": "MAO-B inhibitors - selegiline, rasagiline",
    "mechanism": "מעכבות פירוק דופמין",
    "clinical": "מחלת פרקינסון, בשלבים מוקדמים או כתוספת ל-levodopa",
    "toxicity": "בחילות, כאבי ראש, אינסומניה"
  },
  {
    "name": "COMT inhibitors - entacapone, tolcapone",
    "mechanism": "מונעות פירוק levodopa ודופמין",
    "clinical": "מחלת פרקינסון - מאריכות את השפעת levodopa",
    "toxicity": "שלשולים, שתן כתום, tolcapone - רעילות כבד"
  },
  {
    "name": "anticholinergics for Parkinson - benztropine, trihexyphenidyl",
    "mechanism": "חוסמים רצפטורים מוסקריניים בCNS, מאזנים בין דופמין לאצטילכולין",
    "clinical": "רעד בפרקינסון, תסמינים אקסטרה-פירמידליים מתרופות",
    "toxicity": "יובש בפה, עצירות, אצירת שתן, בלבול (במיוחד בקשישים)"
  },
  {
    "name": "typical antipsychotics - haloperidol, chlorpromazine",
    "mechanism": "חוסמים רצפטורי דופמין D2",
    "clinical": "סכיזופרניה, פסיכוזה, תסיסה",
    "toxicity": "EPS (דיסטוניה, אקתיזיה, פרקינסוניזם, tardive dyskinesia), היפרפרולקטינמיה, NMS, הארכת QT"
  },
  {
    "name": "atypical antipsychotics - clozapine, risperidone, olanzapine, quetiapine",
    "mechanism": "חוסמים רצפטורי דופמין D2 וסרוטונין 5-HT2A",
    "clinical": "סכיזופרניה, הפרעה דו-קוטבית, דיכאון עמיד (כתוספת)",
    "toxicity": "עליה במשקל, תסמונת מטבולית, סכרת. clozapine - אגרנולוציטוזיס (צריך מעקב דם)"
  },
  {
    "name": "lithium",
    "mechanism": "מנגנון לא ברור לחלוטין, משפיע על מסלולי איתות תוך-תאיים",
    "clinical": "הפרעה דו-קוטבית - מצבי מאניה ומניעה",
    "toxicity": "טווח טיפולי צר! רעד, פוליאוריה, היפותירואידיזם, רעילות כלייתית, teratogenic (Ebstein's anomaly)"
  },
  {
    "name": "rapid-acting insulin - lispro, aspart, glulisine",
    "mechanism": "אנלוגים לאינסולין עם ספיגה מהירה",
    "clinical": "סוכרת סוג 1 ו-2 - לפני ארוחות",
    "toxicity": "היפוגליקמיה"
  },
  {
    "name": "long-acting insulin - glargine, detemir, degludec",
    "mechanism": "אנלוגים לאינסולין עם שחרור איטי ואחיד",
    "clinical": "סוכרת - כיסוי בזאלי",
    "toxicity": "היפוגליקמיה (פחות מאינסולין קצר)"
  },
  {
    "name": "NPH insulin",
    "mechanism": "אינסולין בינוני עם שיא פעולה",
    "clinical": "סוכרת - כיסוי בינוני",
    "toxicity": "היפוגליקמיה, במיוחד בשיא הפעולה"
  },
  {
    "name": "sulfonylureas - glipizide, glyburide, glimepiride",
    "mechanism": "סוגרות תעלות אשלגן בתאי בטא בלבלב, גורמות לשחרור אינסולין",
    "clinical": "סוכרת סוג 2",
    "toxicity": "היפוגליקמיה, עליה במשקל"
  },
  {
    "name": "meglitinides - repaglinide, nateglinide",
    "mechanism": "כמו sulfonylureas אך קצרות טווח יותר",
    "clinical": "סוכרת סוג 2 - לפני ארוחות",
    "toxicity": "היפוגליקמיה (פחות מsulfonylureas), להימנע בחולי כבד"
  },
  {
    "name": "metformin",
    "mechanism": "מעכבת ייצור גלוקוז בכבד, מעלה רגישות לאינסולין, מאטה ספיגת גלוקוז במעי",
    "clinical": "תרופת הבחירה לסוכרת סוג 2",
    "toxicity": "בחילות, שלשולים, טעם מתכת בפה, ירידה בספיגת B12, חמצת לקטית (נדיר, באי ספיקת כליות)"
  },
  {
    "name": "thiazolidinediones (TZD) - pioglitazone, rosiglitazone",
    "mechanism": "מפעילות PPAR-gamma, מעלות רגישות לאינסולין",
    "clinical": "סוכרת סוג 2",
    "toxicity": "עליה במשקל, בצקות, אי ספיקת לב, שברים, סרטן שלפוחית השתן (pioglitazone)"
  },
  {
    "name": "alpha-glucosidase inhibitors - acarbose",
    "mechanism": "מעכבת אנזימים במעי שמפרקים פחמימות",
    "clinical": "סוכרת סוג 2 - מונעת עליית סוכר אחרי ארוחות",
    "toxicity": "גזים, נפיחות, שלשולים"
  },
  {
    "name": "SGLT2 inhibitors - canagliflozin, empagliflozin, dapagliflozin",
    "mechanism": "חוסמות ספיגה חוזרת של גלוקוז בכליה",
    "clinical": "סוכרת סוג 2, אי ספיקת לב, הגנה כלייתית",
    "toxicity": "זיהומי שתן ופטרת, היפוטנזיה, קטואצידוזיס (נדיר), Fournier's gangrene (נדיר מאוד)"
  },
  {
    "name": "GLP-1 agonists - exenatide, liraglutide, semaglutide",
    "mechanism": "מחקות GLP-1 - מגבירות שחרור אינסולין, מעכבות גלוקגון, מאטות ריקון קיבה, מפחיתות תיאבון",
    "clinical": "סוכרת סוג 2, השמנה, הגנה קרדיווסקולרית",
    "toxicity": "בחילות, הקאות, שלשולים, פנקריאטיטיס (נדיר)"
  },
  {
    "name": "DPP-4 inhibitors - sitagliptin, saxagliptin",
    "mechanism": "מונעות פירוק של GLP-1 אנדוגני",
    "clinical": "סוכרת סוג 2",
    "toxicity": "נסבלות היטב, כאבי ראש, זיהומי דרכי נשימה עליונות"
  },
  {
    "name": "levothyroxine (T4)",
    "mechanism": "תחליף להורמון בלוטת התריס T4",
    "clinical": "תת-פעילות בלוטת התריס",
    "toxicity": "במינון יתר - סימני יתר פעילות: טכיקרדיה, ירידה במשקל, חרדה, אוסטאופורוזיס"
  },
  {
    "name": "thionamides - methimazole, propylthiouracil (PTU)",
    "mechanism": "מעכבות ייצור הורמוני בלוטת התריס. PTU גם מעכב המרה של T4 ל-T3",
    "clinical": "יתר פעילות בלוטת התריס, Graves' disease",
    "toxicity": "אגרנולוציטוזיס (נדיר אך חמור), PTU - הפטוטוקסי"
  },
  {
    "name": "radioactive iodine (I-131)",
    "mechanism": "נספג בבלוטת התריס והורס את הרקמה",
    "clinical": "יתר פעילות בלוטת התריס, סרטן בלוטת התריס",
    "toxicity": "תת-פעילות (צפוי), אסור בהריון"
  },
  {
    "name": "potassium iodide",
    "mechanism": "במינון גבוה מעכב זמנית שחרור הורמוני בלוטת התריס (אפקט Wolff-Chaikoff)",
    "clinical": "הכנה לניתוח בלוטת התריס, thyroid storm, הגנה מקרינה גרעינית",
    "toxicity": "שימוש ממושך יכול לגרום ליתר פעילות"
  },
  {
    "name": "digoxin",
    "mechanism": "מעכב משאבת Na/K-ATPase, מעלה סידן תוך-תאי בלב, מגביר כוח התכווצות. מגביר פעילות וגאלית",
    "clinical": "אי ספיקת לב, פרפור פרוזדורים (שליטה בקצב)",
    "toxicity": "טווח טיפולי צר! בחילות, הקאות, הפרעות ראייה (צהוב-ירוק), הפרעות קצב. היפוקלמיה מחמירה רעילות"
  },
  {
    "name": "heparin (UFH)",
    "mechanism": "מפעיל antithrombin III, מעכב פקטורים IIa ו-Xa",
    "clinical": "מניעה וטיפול בפקקת ורידים עמוקים ותסחיף ריאתי, ACS",
    "toxicity": "דימום, HIT (thrombocytopenia מושרית הפרין)"
  },
  {
    "name": "LMWH - enoxaparin, dalteparin",
    "mechanism": "מעכבת בעיקר פקטור Xa דרך antithrombin",
    "clinical": "מניעה וטיפול בפקקת, ACS, גשר ל-warfarin",
    "toxicity": "דימום, HIT (נדיר יותר מUFH)"
  },
  {
    "name": "warfarin",
    "mechanism": "מעכב אפוקסיד רדוקטאז של ויטמין K, מונע סינתזה של פקטורים II, VII, IX, X וחלבוני C ו-S",
    "clinical": "מניעת שבץ בפרפור פרוזדורים, פקקת ורידים, מסתמים מכניים",
    "toxicity": "דימום, נמק עורי (בתחילת טיפול), teratogenic. אינטראקציות רבות עם מזון ותרופות"
  },
  {
    "name": "DOACs - rivaroxaban, apixaban (Xa inhibitors), dabigatran (thrombin inhibitor)",
    "mechanism": "מעכבים ישירות פקטורי קרישה",
    "clinical": "מניעת שבץ בפרפור פרוזדורים, טיפול ומניעת DVT/PE",
    "toxicity": "דימום. יש antidotes (idarucizumab ל-dabigatran, andexanet alfa ל-Xa inhibitors)"
  },
  {
    "name": "aspirin (low dose)",
    "mechanism": "מעכבת באופן בלתי הפיך COX-1 בטסיות, מונעת ייצור TXA2",
    "clinical": "מניעה ראשונית ושניונית של אירועים קרדיווסקולריים",
    "toxicity": "דימום GI, אסתמה מושרית אספירין"
  },
  {
    "name": "P2Y12 inhibitors - clopidogrel, prasugrel, ticagrelor",
    "mechanism": "מעכבים רצפטור P2Y12 על טסיות, מונעים הפעלה ע\"י ADP",
    "clinical": "ACS, לאחר stent, מניעת שבץ",
    "toxicity": "דימום. clopidogrel - צריך המרה ע\"י CYP2C19, prasugrel - אסור בשבץ קודם"
  },
  {
    "name": "NSAIDs - ibuprofen, naproxen, diclofenac",
    "mechanism": "מעכבים COX-1 ו-COX-2, מונעים ייצור פרוסטגלנדינים",
    "clinical": "כאב, דלקת, חום, דיסמנוריאה",
    "toxicity": "כיב פפטי, דימום GI, פגיעה כלייתית, סיכון CV מוגבר, אסתמה"
  },
  {
    "name": "COX-2 selective - celecoxib",
    "mechanism": "מעכב סלקטיבי של COX-2",
    "clinical": "כאב ודלקת בחולים בסיכון גבוה ל-GI",
    "toxicity": "סיכון CV מוגבר, פחות רעילות GI"
  },
  {
    "name": "acetaminophen (paracetamol)",
    "mechanism": "מנגנון לא ברור לחלוטין, כנראה עיכוב COX מרכזי",
    "clinical": "כאב, חום",
    "toxicity": "הפטוטוקסי במינון יתר! טיפול - N-acetylcysteine"
  },
  {
    "name": "opioids - morphine, oxycodone, fentanyl, hydromorphone",
    "mechanism": "אגוניסטים לרצפטורי mu-opioid",
    "clinical": "כאב בינוני-חמור, הרדמה",
    "toxicity": "דיכוי נשימתי, עצירות, בחילות, התמכרות, סבילות. טיפול במינון יתר - naloxone"
  },
  {
    "name": "tramadol",
    "mechanism": "אגוניסט חלש של mu-opioid + מעכב ספיגה חוזרת של סרוטונין ונוראפינפרין",
    "clinical": "כאב בינוני",
    "toxicity": "פרכוסים, תסמונת סרוטונין, פחות דיכוי נשימתי"
  },
  {
    "name": "naloxone",
    "mechanism": "אנטגוניסט של רצפטורי אופיואיד",
    "clinical": "מינון יתר של אופיואידים",
    "toxicity": "תסמיני גמילה אם ניתן לאדם תלוי"
  },
  {
    "name": "methotrexate",
    "mechanism": "מעכב dihydrofolate reductase, מפריע לסינתזת DNA",
    "clinical": "סרטן, RA, פסוריאזיס, הריון חוץ-רחמי",
    "toxicity": "דיכוי מח עצם, הפטוטוקסי, פנאומוניטיס, מוקוזיטיס. צריך חומצה פולית"
  },
  {
    "name": "colchicine",
    "mechanism": "מעכב פילמור של מיקרוטובולים, מפחית הגירת נויטרופילים",
    "clinical": "גאוט אקוטי, מניעת גאוט, קדחת ים תיכונית",
    "toxicity": "שלשולים, בחילות, הקאות. במינון יתר - דיכוי מח עצם, אי ספיקת איברים"
  },
  {
    "name": "allopurinol",
    "mechanism": "מעכב xanthine oxidase, מפחית ייצור חומצת שתן",
    "clinical": "מניעת גאוט, היפראוריצמיה",
    "toxicity": "התקפי גאוט בתחילת טיפול, תגובת רגישות חמורה (נדיר, קשור ל-HLA-B*5801)"
  },
  {
    "name": "febuxostat",
    "mechanism": "מעכב xanthine oxidase (סלקטיבי יותר)",
    "clinical": "גאוט בחולים שלא סובלים allopurinol",
    "toxicity": "סיכון CV מוגבר(?), התקפי גאוט בתחילה"
  },
  {
    "name": "probenecid",
    "mechanism": "מעכב ספיגה חוזרת של חומצת שתן בכליה",
    "clinical": "גאוט כרוני",
    "toxicity": "אבני כליה, התקפי גאוט בתחילה"
  },
  {
    "name": "PPIs - omeprazole, esomeprazole, pantoprazole",
    "mechanism": "מעכבים משאבת פרוטונים (H+/K+-ATPase) בקיבה",
    "clinical": "GERD, כיב פפטי, Zollinger-Ellison, הגנה עם NSAIDs",
    "toxicity": "בשימוש ארוך: חסר B12 ומגנזיום, זיהומים (C. diff, pneumonia), שברים, נפריטיס אינטרסטיציאלית"
  },
  {
    "name": "H2 blockers - ranitidine, famotidine",
    "mechanism": "חוסמים רצפטורי H2 על תאי פריאטל בקיבה",
    "clinical": "GERD, כיב פפטי",
    "toxicity": "בדרך כלל נסבלים היטב, ranitidine הוסר מהשוק (חשש NDMA)"
  },
  {
    "name": "ondansetron",
    "mechanism": "אנטגוניסט לרצפטור 5-HT3",
    "clinical": "בחילות והקאות (כימותרפיה, לאחר ניתוח)",
    "toxicity": "כאב ראש, עצירות, הארכת QT"
  },
  {
    "name": "metoclopramide",
    "mechanism": "אנטגוניסט D2, אגוניסט 5-HT4 - מזרז ריקון קיבה",
    "clinical": "בחילות, גסטרופרזיס, GERD",
    "toxicity": "EPS (דיסטוניה, tardive dyskinesia), היפרפרולקטינמיה"
  },
  {
    "name": "loperamide",
    "mechanism": "אגוניסט mu-opioid במעי (לא עובר BBB), מאט פריסטלטיקה",
    "clinical": "שלשול",
    "toxicity": "עצירות, כאבי בטן. במינון גבוה מאוד - רעילות לבבית"
  },
  {
    "name": "lactulose",
    "mechanism": "דיסכריד לא נספג, נשבר ע\"י חיידקים במעי, מושך מים",
    "clinical": "עצירות, אנצפלופתיה כבדית",
    "toxicity": "גזים, נפיחות, שלשולים"
  },
  {
    "name": "polyethylene glycol (PEG)",
    "mechanism": "משלשל אוסמוטי",
    "clinical": "עצירות, הכנה לקולונוסקופיה",
    "toxicity": "נפיחות, בחילות"
  },
  {
    "name": "sulfasalazine",
    "mechanism": "מתפרק ל-5-ASA (אנטי-דלקתי) וsulfapyridine",
    "clinical": "IBD, RA",
    "toxicity": "בחילות, כאבי ראש, תגובות לסולפה, אוליגוספרמיה"
  },
  {
    "name": "mesalamine (5-ASA)",
    "mechanism": "אנטי-דלקתי מקומי במעי",
    "clinical": "IBD (בעיקר UC)",
    "toxicity": "כאבי ראש, בחילות, נפריטיס (נדיר)"
  },
  {
    "name": "infliximab, adalimumab",
    "mechanism": "נוגדנים נגד TNF-alpha",
    "clinical": "IBD, RA, פסוריאזיס, אנקילוזינג ספונדיליטיס",
    "toxicity": "זיהומים (כולל שחפת), תגובות אינפוזיה, לימפומה (נדיר), אי ספיקת לב"
  },
  {
    "name": "azathioprine",
    "mechanism": "מטבוליט שלו (6-MP) מעכב סינתזת פורינים",
    "clinical": "IBD, השתלות, מחלות אוטואימוניות",
    "toxicity": "דיכוי מח עצם, הפטוטוקסי, פנקריאטיטיס. אינטראקציה חמורה עם allopurinol"
  },
  {
    "name": "penicillins - amoxicillin, ampicillin",
    "mechanism": "מעכבות סינתזת דופן תא חיידקי (beta-lactam)",
    "clinical": "זיהומים רבים - דרכי נשימה, שתן, אוזניים",
    "toxicity": "אלרגיה (פריחה עד אנפילקסיס), שלשול"
  },
  {
    "name": "amoxicillin-clavulanate",
    "mechanism": "clavulanate מעכב beta-lactamase",
    "clinical": "זיהומים עם חיידקים מייצרי beta-lactamase",
    "toxicity": "שלשול (יותר מamoxicillin לבד), הפטוטוקסי (נדיר)"
  },
  {
    "name": "cephalosporins - cephalexin, ceftriaxone, cefepime",
    "mechanism": "מעכבות סינתזת דופן תא (beta-lactam)",
    "clinical": "זיהומים שונים לפי דור",
    "toxicity": "אלרגיה (צולבת חלקית עם פניצילין), ceftriaxone - sludge בכיס מרה"
  },
  {
    "name": "carbapenems - meropenem, imipenem",
    "mechanism": "מעכבים סינתזת דופן תא, ספקטרום רחב מאוד",
    "clinical": "זיהומים חמורים, חיידקים עמידים",
    "toxicity": "פרכוסים (imipenem), אלרגיה"
  },
  {
    "name": "vancomycin",
    "mechanism": "מעכבת סינתזת דופן תא (לא beta-lactam)",
    "clinical": "MRSA, C. difficile (פומי)",
    "toxicity": "Red man syndrome (אינפוזיה מהירה), נפרוטוקסי, אוטוטוקסי"
  },
  {
    "name": "fluoroquinolones - ciprofloxacin, levofloxacin",
    "mechanism": "מעכבות DNA gyrase ו-topoisomerase IV",
    "clinical": "זיהומי שתן, נשימה, GI",
    "toxicity": "קרעי גידים, נוירופתיה, הארכת QT, C. diff, רגישות לשמש"
  },
  {
    "name": "macrolides - azithromycin, clarithromycin",
    "mechanism": "נקשרות לריבוזום 50S, מעכבות סינתזת חלבון",
    "clinical": "זיהומי נשימה, כלמידיה, H. pylori",
    "toxicity": "הארכת QT, שלשול, הפטוטוקסי (clarithromycin)"
  },
  {
    "name": "tetracyclines - doxycycline",
    "mechanism": "נקשרות לריבוזום 30S, מעכבות סינתזת חלבון",
    "clinical": "זיהומים שונים, אקנה, מלריה, Lyme",
    "toxicity": "רגישות לשמש, פגיעה בשיניים ועצמות (אסור לילדים והריון), וושט"
  },
  {
    "name": "aminoglycosides - gentamicin, tobramycin",
    "mechanism": "נקשרות לריבוזום 30S, מעכבות סינתזת חלבון באופן בלתי הפיך",
    "clinical": "זיהומים חמורים בגרם שליליים",
    "toxicity": "נפרוטוקסי, אוטוטוקסי (בלתי הפיך), חסם עצבי-שרירי"
  },
  {
    "name": "trimethoprim-sulfamethoxazole (TMP-SMX)",
    "mechanism": "מעכבים סינתזת חומצה פולית בשני שלבים",
    "clinical": "UTI, PCP, MRSA, toxoplasmosis",
    "toxicity": "פריחה, דיכוי מח עצם, היפרקלמיה, Stevens-Johnson (נדיר)"
  },
  {
    "name": "metronidazole",
    "mechanism": "יוצר רדיקלים חופשיים שפוגעים ב-DNA",
    "clinical": "אנאירובים, C. diff, H. pylori, פרזיטים (Giardia, Trichomonas)",
    "toxicity": "תגובת disulfiram עם אלכוהול, טעם מתכתי, נוירופתיה"
  },
  {
    "name": "clindamycin",
    "mechanism": "נקשרת לריבוזום 50S",
    "clinical": "אנאירובים, זיהומי עור ורקמות רכות, MRSA",
    "toxicity": "C. diff colitis (גבוה!), שלשול"
  },
  {
    "name": "nitrofurantoin",
    "mechanism": "פוגעת ב-DNA, RNA וחלבונים של חיידקים",
    "clinical": "UTI (ומניעה)",
    "toxicity": "פיברוזיס ריאתי (שימוש ממושך), נוירופתיה, GI"
  },
  {
    "name": "fluconazole",
    "mechanism": "מעכב סינתזת ergosterol (14-alpha demethylase)",
    "clinical": "קנדידה, קריפטוקוקוס, מניעה בחולים מדוכאי חיסון",
    "toxicity": "הפטוטוקסי, הארכת QT, אינטראקציות"
  },
  {
    "name": "amphotericin B",
    "mechanism": "נקשרת לergosterol, יוצרת נקבוביות בממברנה",
    "clinical": "זיהומים פטרייתיים חמורים",
    "toxicity": "נפרוטוקסי (מאוד!), חום וצמרמורות באינפוזיה, היפוקלמיה"
  },
  {
    "name": "acyclovir, valacyclovir",
    "mechanism": "אנלוג גואנוזין, מעכב DNA polymerase של הרפס",
    "clinical": "HSV, VZV",
    "toxicity": "נפרוטוקסי (קריסטלים), נוירוטוקסי במינון גבוה"
  },
  {
    "name": "oseltamivir",
    "mechanism": "מעכב neuraminidase של influenza",
    "clinical": "שפעת (טיפול ומניעה)",
    "toxicity": "בחילות, הקאות"
  }
];
