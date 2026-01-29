

 const constants = {
  title: {
    min: {
      val: 5,
      message: "Length must be greater than 4.",
    },
    max: {
      val: 20,
      message: "Length must be less than or equal to 20.",
    },
  },
  desc: {
    min: {
      val: 10,
      message: "Description must be at least 10 characters.",
    },
    max: {
      val: 100,
      message: "Description must be less than or equal to 100 characters.",
    },
  },
  dueAt: {
    required: "Due date is required.",
  },
  createdAt: {},
};

export default constants