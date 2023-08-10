import constants from "./constants";

const data = [
  {
    colorMenu: constants.BRONZE,
    boxTitle: "Bronze",
    textTitle: "Branding on a budget",
    price: { color: constants.BRONZE, text: "US$299" },
    hrefSelectBox: "/start-contest?type=1&amp;step=2",
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
    ],
  }
];

export default data;
