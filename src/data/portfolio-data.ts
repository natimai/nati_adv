
interface PortfolioItem {
  id: number;
  img: string;
  category?: string;
  date?: string;
  title: string;
  description?: string;
  dataAosDelay: number;
  cls: string;
  // Single page details
  project_type?: string;
  industry?: string;
  timeline?: string;
  details_overview?: string;
  details_challenge?: string;
  details_approach?: string;
  details_result?: string;
}

const portfolio_data: PortfolioItem[] = [
  {
    id: 1,
    img: "/assets/images/portfolio/thumb1.png",
    category: "סרטון ויראלי 🎵 TikTok",
    date: "2024",
    title: "מסעדת הדרומית",
    description: "סרטון שבוצע למסעדת הדרומית בבאר שבע בהמשך לסדרת סרטונים ששברו את הרשת ואף הגיעו לחיקוי בארץ נהדרת.",
    dataAosDelay: 200,
    cls: "",
    project_type: "יצירת תוכן ויראלי",
    industry: "מזון ומסעדנות",
    timeline: "שבועיים",
    details_overview: "מסעדת הדרומית בבאר שבע חיפשה דרך לפרוץ את תקרת הזכוכית של הפרסום המקומי ולהגיע לקהל ארצי. האתגר היה ליצור תוכן שיהיה גם אותנטי וגם ויראלי, מבלי לאבד את הזהות העממית והחמה של המקום.",
    details_challenge: "האתגר המרכזי היה ליצור סרטון שיתפוס את תשומת הלב בשניות הראשונות, בפלטפורמה רוויה בתוכן כמו טיקטוק. היינו צריכים למצוא זווית ייחודית שתגרום לאנשים לא רק לצפות, אלא גם לשתף ולהגיב.",
    details_approach: "בחרנו בגישה הומוריסטית אך מכבדת, שמתמקדת בסיפורים האנושיים והקטנים שקורים במסעדה. השתמשנו בשפה ויזואלית מהירה, עריכה קצבית וסאונד טרנדי, תוך שימת דגש על המנות המגרות של המסעדה.",
    details_result: "התוצאה הייתה מעל ומעבר למצופה. הסרטון צבר מיליוני צפיות, הפך לשיחת היום ברשתות החברתיות, ואף זכה לחיקוי בתוכנית הסאטירה המובילה 'ארץ נהדרת'. המסעדה דיווחה על עלייה משמעותית במבקרים שהגיעו מכל רחבי הארץ בעקבות הסרטון."
  },
  {
    id: 2,
    img: "/assets/images/portfolio/thumb2.png",
    category: "קמפיין לידים (PPC)",
    date: "2024",
    title: "משרד עורכי דין",
    description: "הגדלת כמות הלידים האיכותיים פי 4 תוך שימוש באסטרטגיה ממוקדת.",
    dataAosDelay: 400,
    cls: "",
    project_type: "קמפיין ממומן (PPC)",
    industry: "שירותים משפטיים",
    timeline: "3 חודשים",
    details_overview: "משרד עורכי דין מוביל בתחום הנזיקין פנה אלינו עם בעיה: הם קיבלו הרבה לידים, אבל רובם לא היו רלוונטיים. המטרה הייתה לשפר את איכות הלידים ולהגדיל את אחוזי הסגירה.",
    details_challenge: "בתחום עריכת הדין, התחרות על כל ליד היא עצומה ומחירי הקליקים גבוהים מאוד. האתגר היה לסנן את הפניות הלא רלוונטיות עוד לפני שהן מגיעות למשרד, מבלי לפגוע בנפח הפניות האיכותיות.",
    details_approach: "בנינו משפך שיווקי חכם שכלל דפי נחיתה ייעודיים עם שאלון סינון קצר אך אפקטיבי. מיקדנו את הקמפיינים במילות מפתח בעלות כוונת רכישה גבוהה ('long-tail keywords') וביצענו אופטימיזציה יומית למודעות ולקהלים.",
    details_result: "תוך פחות משלושה חודשים, כמות הלידים האיכותיים גדלה פי 4, בעוד שהעלות לליד (CPL) ירדה ב-20%. המשרד דיווח על שיפור דרמטי ביחס ההמרה מליד לתיק, והחזר ההשקעה (ROI) של הקמפיין היה פנומנלי."
  },
  {
    id: 3,
    img: "/assets/images/portfolio/thumb3.png",
    category: "מיתוג ואסטרטגיה",
    date: "2024",
    title: "חנות איקומרס אופנה",
    description: "בניית שפה ויזואלית וקמפיין השקה שהביא ל-450% ROI.",
    dataAosDelay: 600,
    cls: "wrap2 wrap3",
    project_type: "מיתוג ועיצוב",
    industry: "אופנה ולייף סטייל",
    timeline: "חודשיים",
    details_overview: "מותג אופנה חדש לנשים רצה לחדור לשוק הישראלי הרווי. הם היו צריכים זהות ויזואלית חזקה שתבלוט בפיד של אינסטגרם ותשדר יוקרה נגישה.",
    details_challenge: "ליצור מותג שנראה ומרגיש כמו מותג בינלאומי, אבל מדבר בשפה ובווייב המקומי. היה צורך לאזן בין אסתטיקה מינימליסטית לבין החום והישירות של הקהל הישראלי.",
    details_approach: "פיתחנו שפה גרפית המבוססת על טיפוגרפיה נועזת וצילומים באווירה טבעית ולא מתאמצת ('lifestyle'). בנינו אסטרטגיית השקה שכללה שיתופי פעולה עם משפיעניות רשת ('מיקרו-אינפלואנסריות') שיצרו תוכן אותנטי סביב המותג.",
    details_result: "קמפיין ההשקה היה הצלחה מסחררת, עם החזר השקעה (ROI) של 450% בחודש הראשון. המותג הפך במהירות לשם מוכר בקרב קהל היעד, והאתר נהנה מתנועה יציבה ומרשימה של לקוחות חוזרים."
  },
  {
    id: 4,
    img: "/assets/images/portfolio/thumb4.png",
    category: "קידום אורגני (SEO)",
    date: "2024",
    title: "רשת מרפאות שיניים",
    description: "עליה של 300% בתנועה האורגנית לאתר תוך 6 חודשים.",
    dataAosDelay: 300,
    cls: "",
    project_type: "קידום אתרים (SEO)",
    industry: "רפואה ובריאות",
    timeline: "6 חודשים",
    details_overview: "רשת מרפאות שיניים בפריסה ארצית רצתה להגדיל את כמות המטופלים שמגיעים דרך גוגל. האתר שלהם היה מיושן ולא הופיע בתוצאות הראשונות עבור ביטויים קריטיים כמו 'השתלת שיניים' או 'יישור שיניים'.",
    details_challenge: "תחום רפואת השיניים הוא תחרותי מאוד ב-SEO. האתגר היה לעקוף מתחרים וותיקים עם אתרים חזקים, ולבנות סמכות (Authority) בתחום הרפואי בעיני גוגל.",
    details_approach: "ביצענו אופטימיזציה טכנית מקיפה לאתר, שיפרנו את מהירות הטעינה ואת חווית המשתמש במובייל. במקביל, יצרנו אסטרטגיית תוכן עשירה שכללה מאמרים מקצועיים שנכתבו על ידי רופאים, כדי לבסס אמינות ומקצועיות. בנינו פרופיל קישורים איכותי מאתרים רלוונטיים בתחום הבריאות.",
    details_result: "לאחר חצי שנה של עבודה אינטנסיבית, התנועה האורגנית לאתר גדלה ב-300%. הרשת הגיעה למקומות הראשונים בגוגל עבור עשרות מילות מפתח תחרותיות, וכמות הפניות מהאתר גדלה בהתאמה."
  },
];

export default portfolio_data;
