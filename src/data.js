import CONSTANTS from "./constants";

const data = [
  {
    boxData: {
      boxTitle: "Bronze",
      textTitle: "Branding on a budget",
      price: { color: CONSTANTS.BRONZE, text: "US$299" },
    },
    hrefSelectBox: "/start-contest?type=1&amp;step=2",
    colorMenu: CONSTANTS.BRONZE,
    listMenuData: [
      {
        dataContent:
          "Paid to the winning creative at the end of contest. This amount is already included in your package price.",
        textMenu: "Prize to Winner - $135 (Included)",
        check: false,

        classNames: {
          borderBottom: true,
          borderTop: false,
          subMenu: false,
        },
      },

      {
        dataContent:
          "Our agency-style validation features and upgrades provide all the tools you need to complete a successful branding project, start to finish, and select a name with confidence.",
        textMenu: "Validation Services &amp; Upgrades ($39 value)",
        check: false,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: false,
        },
      },

      {
        dataContent:
          "All submitted names are automatically checked for matching domain name availability. If you are only interested in a name and not a matching .com URL, you can specify that preference during contest creation.",
        textMenu: "Matching .com URL",
        check: true,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: true,
        },
      },

      {
        dataContent:
          "Complimentary extension of timeline if you receive less than expected number of entries.",
        textMenu: "Expected 300+ Entries",
        check: false,

        classNames: {
          borderBottom: false,
          borderTop: true,
          subMenu: false,
        },
      },

      {
        dataContent: "",
        textMenu: "",
        check: false,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: false,
        },
      },
    ],
  },

  {
    boxData: {
      boxTitle: "Gold",
      textTitle: "Increase participation and basic brand validation",
      price: { color: CONSTANTS.GOLD, text: "US$449" },
    },
    hrefSelectBox: "<a href=/start-contest?type=1&amp;step=2",
    colorMenu: CONSTANTS.GOLD,
    listMenuData: [
      {
        dataContent:
          "Paid to the winning creative at the end of contest. This amount is already included in your package price",
        textMenu: "Prize to Winner - $200 (Included)",
        check: false,

        classNames: {
          borderBottom: true,
          borderTop: false,
          subMenu: false,
        },
      },

      {
        dataContent:
          "Naming is difficult. Our agency-style validation features and upgrades provide all the tools you need to complete a successful branding project, start to finish, and select a name with confidence.",
        textMenu: "Validation Services &amp; Upgrades ($305 value)",
        check: false,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: false,
        },
      },

      {
        dataContent:
          "All submitted names are automatically checked for matching domain name availability. If you are only interested in a name and not a matching .com URL, you can specify that preference during contest creation.",
        textMenu: "Matching .com URL",
        check: true,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: true,
        },
      },

      {
        dataContent:
          "Our agency-style validation features and upgrades provide all the tools you need to complete a successful branding project, start to finish, and select a name with confidence.",
        textMenu: "Instant Trademark Check (One Database)",
        check: true,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: true,
        },
      },

      {
        dataContent:
          "Require creatives to agree to a Non Disclosure Agreement before participating in your contest. Your contest details will also be hidden from search engines",
        textMenu: "NDA and More Privacy",
        check: true,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: true,
        },
      },

      {
        dataContent:
          "Receive priority project listing so your project stands out and gets more participation.",
        textMenu: "Project Promotion (Basic)",
        check: true,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: true,
          selectBox: false,
        },
      },

      {
        dataContent:
          "A comprehensive Trademark validation report for your favorite name.",
        textMenu: "Comprehensive Trademark Research",
        check: true,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: true,
          selectBox: false,
        },
      },

      {
        dataContent:
          "Complimentary extension of timeline if you receive less than expected number of entries.",
        textMenu: "Expected 600+ Entries",
        check: false,

        classNames: {
          borderBottom: true,
          borderTop: true,
          subMenu: false,
          selectBox: false,
        },
      },

      {
        dataContent:
          "If you are not happy with submissions, you can receive a partial refund for creative award ($200)",
        textMenu: "Partial Refund Option",
        check: false,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: false,
          selectBox: false,
        },
      },
    ],
  },

  {
    boxData: {
      boxTitle: "Platinum",
      textTitle:
        "Work with top-level creatives, plus agency-style brand validation",
      price: { color: CONSTANTS.BLACK, text: "US$749" },
    },
    hrefSelectBox: "<a href=/start-contest?type=1&amp;step=2",
    colorMenu: CONSTANTS.PLATINUM,
    listMenuData: [
      {
        dataContent:
          "Paid to the winning creative at the end of contest. This amount is already included in your package price.",
        textMenu: "Prize to Winner - $300 (Included)",
        check: false,

        classNames: {
          borderBottom: true,
          borderTop: false,
          subMenu: false,
          selectBox: false,
        },
      },

      {
        dataContent:
          "Naming is difficult. Our agency-style validation features and upgrades provide all the tools you need to complete a successful branding project, start to finish, and select a name with confidence.",
        textMenu: "Validation Services &amp; Upgrades ($979 value)",
        check: false,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: false,
          selectBox: false,
        },
      },

      {
        dataContent:
          "Test your top 6 names and receive detailed insights to pick the best option.",
        textMenu: "Audience Testing (Up to 6 Names)",
        check: true,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: true,
          selectBox: false,
        },
      },

      {
        dataContent: "",
        textMenu: "",
        elementLink: {
          textLink: "View Sample Report",
          hrefLink:
            "https://www.squadhelp.com/assets/nimages/AudienceTestingReport.pdf",
        },
        check: false,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: true,
          selectBox: false,
          paddingTopNone: true,
        },
      },

      {
        dataContent:
          "Comprehensive Trademark validation reports prepared for your top three names.",
        textMenu: "Comprehensive Trademark Research (3 Names)",
        check: true,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: true,
          selectBox: false,
        },
      },

      {
        dataContent:
          "Receive a Linguistics Analysis report for up to 3 names. Report includes comprehensive linguistics analysis across major languages for any potential red flags ($129 value).",
        textMenu: "Linguistics Analysis (3 Names)",
        check: true,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: true,
          selectBox: false,
        },
      },

      {
        dataContent:
          "Only work with top creatives who have achieved high quality ranking on Squadhelp",
        textMenu: "Tier A Creatives",
        check: true,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: true,
          selectBox: false,
        },
      },

      {
        dataContent:
          "All submitted names are automatically checked for matching domain name availability. If you are only interested in a name and not a matching .com URL, you can specify that preference during contest creation.",
        textMenu: "Matching .com URL",
        check: true,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: true,
          selectBox: false,
        },
      },

      {
        dataContent:
          "One-click Trademark availability check for entries received in your contest against USPTO and other Trademark databases (4 databases). You will have the ability to get instant information on any active Trademarks for all entries.",
        textMenu: "Instant Trademark Check (4 Databases)",
        check: true,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: true,
          selectBox: false,
        },
      },

      {
        dataContent:
          "You can require creatives to agree to a Non Disclosure Agreement before participating in your contest. Plus, your contest is hidden from search engines",
        textMenu: "NDA and More Privacy",
        check: true,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: true,
          selectBox: false,
        },
      },

      {
        dataContent:
          "Receive priority project listing so your project stands out and receive more participation. We will also announce the launch of your project to our entire community via email.",
        textMenu: "Enhanced Project Promotion",
        check: true,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: true,
          selectBox: false,
        },
      },

      {
        dataContent: "Invite your team members to co-manage your contest",
        textMenu: "Team Collaboration Tools",
        check: true,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: true,
          selectBox: false,
        },
      },

      {
        dataContent:
          "Complimentary extension of timeline if you receive less than guaranteed number of entries.",
        textMenu: "Expected 1000+ Entries",
        check: false,

        classNames: {
          borderBottom: true,
          borderTop: true,
          subMenu: false,
          selectBox: false,
        },
      },

      {
        dataContent:
          "If you are not happy with submissions, you can receive a partial refund for creative award ($300)",
        textMenu: "Partial Refund Option",
        check: false,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: false,
          selectBox: false,
        },
      },
    ],
  },

  {
    boxData: {
      boxTitle: "Managed",
      textTitle: "A full agency experience without the agency price tag",
      price: { color: CONSTANTS.BLACK, text: "US$1449" },
    },
    hrefSelectBox: "<a href=/start-contest?type=1&amp;step=2",
    colorMenu: CONSTANTS.MANAGED,
    listMenuData: [
      {
        dataContent: "",
        textMenu:
          "Receive optimum results from your Platinum Contest by launching a Managed Contest Package and working one-on-one with an experienced Squadhelp Branding Consultant.",
        check: false,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: false,
          selectBox: false,
        },
      },

      {
        dataContent: "",
        textMenu:
          "With significantly more validation services, professional brief creation, and daily management of your contest by your Branding Expert, you'll receive an enhanced branding experience to closeout your branding project.",
        check: false,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: false,
          selectBox: false,
        },
      },

      {
        dataContent: "",
        textMenu: "Learn More about ",
        elementLink: {
          textLink: "Managed Contest Service",
          hrefLink:
            "/managed-contests?title=managed_contest",
        },

        check: false,

        classNames: {
          borderBottom: false,
          borderTop: false,
          subMenu: false,
          selectBox: false,
        },
      },
    ],
  },
];

export default data;
