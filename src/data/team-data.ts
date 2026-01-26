 

import team_img_1 from "../../public/assets/images/team/team1.webp";
import nati_img from "../../public/assets/Pictures/nati_pro.webp";
import team_img_2 from "../../public/assets/images/team/team2.webp";
import team_img_3 from "../../public/assets/images/team/team3.webp";
import team_img_4 from "../../public/assets/images/team/team4.webp";
// home 3 
import team_img_5 from "../../public/assets/images/team/team5.webp";
import team_img_6 from "../../public/assets/images/team/team6.webp";
import team_img_8 from "../../public/assets/images/team/team8.webp";





export interface TeamItem {
  id: number;
  img: string;
  name: string;
  role: string;
  dataAos?: string;
  dataAosDelay?: number;
}

const team_data: TeamItem[] = [
  {
    id: 1,
    img: nati_img,
    name: "נתנאל מימון",
    role: "מייסד ומנכ\"ל",
    dataAos: "fade-up",
    dataAosDelay: 300,
  },
  {
    id: 2,
    img: team_img_1,
    name: "שרה כהן",
    role: "מנהלת קריאייטיב",
    dataAos: "fade-up",
    dataAosDelay: 400,
  },
  {
    id: 3,
    img: team_img_2,
    name: "דוד לוי",
    role: "מעצב UI/UX ראשי",
    dataAos: "fade-up",
    dataAosDelay: 500,
  },
  {
    id: 4,
    img: team_img_3,
    name: "מיכל אברהם",
    role: "מנהלת פיתוח",
    dataAos: "fade-up",
    dataAosDelay: 600,
  },
  {
    id: 5,
    img: team_img_4,
    name: "יוסי ברק",
    role: "מומחה Webflow",
    dataAos: "fade-up",
    dataAosDelay: 700,
  },
  {
    id: 6,
    img: team_img_6,
    name: "רונית שפירא",
    role: "מנהלת תוכן וקופירייטינג",
    dataAos: "fade-up",
    dataAosDelay: 800,
  },
  {
    id: 7,
    img: team_img_8,
    name: "אורי גולן",
    role: "מעצב אינטראקציה",
    dataAos: "fade-up",
    dataAosDelay: 900,
  },
  {
    id: 8,
    img: team_img_5,
    name: "תמר כץ",
    role: "מנהלת שיווק דיגיטלי",
    dataAos: "fade-up",
    dataAosDelay: 1000,
  },
];

export default team_data;
