
interface MenuItem {
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    title: string;
    link: string;
    has_sub_dropdown?: boolean;
    sub_menus?: {
      title: string;
      link: string;
    }[];
  }[];
}

const menu_data: MenuItem[] = [
  {
    title: "ראשי",
    link: "/",
    has_dropdown: false,
  },
  {
    title: "אודות",
    link: "/about",
    has_dropdown: false,
  },
  {
    title: "שירותים",
    link: "/service",
    has_dropdown: true,
    sub_menus: [
      { title: "קידום אורגני (SEO)", link: "/service/seo" },
      { title: "קמפיינים ממומנים (PPC)", link: "/service/ppc" },
      { title: "אנליטיקה ומדידה", link: "/service/analytics" },
      { title: "תוכן שעובד", link: "/service/content" },
      { title: "מיתוג ועיצוב גרפי", link: "/service/branding" },
    ],
  },
  {
    title: "תיק עבודות",
    link: "/portfolio",
    has_dropdown: false,
  },
  {
    title: "בלוג",
    link: "/blog",
    has_dropdown: false,
  },
  {
    title: "צור קשר",
    link: "/contact",
    has_dropdown: false,
  },
];

export default menu_data;
