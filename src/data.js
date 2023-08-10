import CONSTANTS from "./constants";
// {
//   dataContent: "",
//   textMenu: "",
// check: false,

//   classNames: {
//     borderBottom: false,
//     borderTop: false,
//     subMenu: false,
//     selectBox: false,
//   },
// },

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

    
      // {
      //   dataContent: "",
      //   textMenu: "",
      //   check: false,

      //   classNames: {
      //     borderBottom: false,
      //     borderTop: false,
      //     subMenu: false,
      //     selectBox: false,
      //   },
      // },
    ],
  },
];

export default data;
