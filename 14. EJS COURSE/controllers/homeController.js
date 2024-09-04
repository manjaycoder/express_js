const homeController = (req, res) => {
  const data = {
    name: "HuXn",
    userId: 30,
  };
  res.render("index", data);
};

export { homeController };
