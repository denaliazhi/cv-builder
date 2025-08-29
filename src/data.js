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
      required: false,
      value: "",
    },
    End: {
      type: "date",
      required: false,
      value: "",
    },
  },
};
