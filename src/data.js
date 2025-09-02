export const templates = {
  basic: {
    displayName: "Basic Information",
    form: {
      name: {
        displayName: "Name",
        type: "text",
        required: true,
        placeholder: "Ivan Tor",
        value: "",
      },
      email: {
        displayName: "Email",
        type: "email",
        required: true,
        placeholder: "ivantor@gmail.com",
        value: "",
      },
      phone: {
        displayName: "Phone",
        type: "tel",
        required: false,
        placeholder: "135-792-4680",
        value: "",
      },
    },
    allowMultiple: false,
  },
  education: {
    displayName: "Education",
    form: {
      school: {
        displayName: "School",
        type: "text",
        required: true,
        placeholder: "Edison University",
        value: "",
      },
      degree: {
        displayName: "Degree",
        type: "text",
        required: true,
        placeholder: "Bachelor of Science, Business",
        value: "",
      },
      start: {
        displayName: "Start Date",
        type: "date",
        required: true,
        value: "",
      },
      end: {
        displayName: "End Date",
        type: "date",
        required: false,
        value: "",
      },
    },
    allowMultiple: false,
  },
  work: {
    displayName: "Work Experience",
    form: {
      company: {
        displayName: "Company",
        type: "text",
        required: true,
        placeholder: "Notion",
        value: "",
      },
      title: {
        displayName: "Title",
        type: "text",
        required: true,
        placeholder: "Software Engineer",
        value: "",
      },
      details: {
        displayName: "Details",
        type: "textarea",
        required: false,
        placeholder: "Boosted revenue 30% using rocket fuel",
        value: "",
      },
      start: {
        displayName: "Start Date",
        type: "date",
        required: true,
        value: "",
      },
      end: {
        name: "End Date",
        type: "date",
        required: false,
        value: "",
      },
    },
    allowMultiple: true,
  },
};

// export const form = {
//   General: {
//     Name: {
//       type: "text",
//       required: true,
//       placeholder: "Ivan Tor",
//       value: "",
//     },
//     Email: {
//       type: "email",
//       required: true,
//       placeholder: "ivantor@gmail.com",
//       value: "",
//     },
//     Phone: {
//       type: "tel",
//       required: false,
//       placeholder: "135-792-4680",
//       value: "",
//     },
//   },
//   Education: {
//     School: {
//       type: "text",
//       required: true,
//       placeholder: "Edison University",
//       value: "",
//     },
//     Degree: {
//       type: "text",
//       required: true,
//       placeholder: "Bachelor of Science, Business",
//       value: "",
//     },
//     Start: {
//       type: "date",
//       required: true,
//       value: "",
//     },
//     End: {
//       type: "date",
//       required: false,
//       value: "",
//     },
//   },
//   Work: {
//     Company: {
//       type: "text",
//       required: true,
//       placeholder: "Notion",
//       value: "",
//     },
//     Title: {
//       type: "text",
//       required: true,
//       placeholder: "Software Engineer",
//       value: "",
//     },
//     Details: {
//       type: "textarea",
//       required: false,
//       placeholder: "Boosted revenue 30% using rocket fuel",
//       value: "",
//     },
//     Start: {
//       type: "date",
//       required: true,
//       value: "",
//     },
//     End: {
//       type: "date",
//       required: false,
//       value: "",
//     },
//   },
// };
