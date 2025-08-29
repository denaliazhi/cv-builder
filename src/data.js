export const formFields = {
  General: {
    Name: {
      type: "text",
      required: true,
      placeholder: "Ivan Tor",
      value: "",
    },
    Email: {
      type: "email",
      required: true,
      placeholder: "ivantor@gmail.com",
      value: "",
    },
    Phone: {
      type: "tel",
      required: false,
      placeholder: "135-792-4680",
      value: "",
    },
  },
  Education: {
    School: {
      type: "text",
      required: true,
      placeholder: "Edison University",
      value: "",
    },
    Degree: {
      type: "text",
      required: true,
      placeholder: "Bachelor of Science, Business",
      value: "",
    },
    Start: {
      type: "date",
      required: true,
      value: "",
    },
    End: {
      type: "date",
      required: false,
      value: "",
    },
  },
  Work: {
    Company: {
      type: "text",
      required: true,
      placeholder: "Notion",
      value: "",
    },
    Title: {
      type: "text",
      required: true,
      placeholder: "Software Engineer",
      value: "",
    },
    Details: {
      type: "textarea",
      required: false,
      placeholder: "Boosted revenue 30% using rocket fuel",
      value: "",
    },
    Start: {
      type: "date",
      required: true,
      value: "",
    },
    End: {
      type: "date",
      required: false,
      value: "",
    },
  },
};
