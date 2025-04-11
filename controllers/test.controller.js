const Test = require("../models/test.model");

exports.get_test = async (req, res, next) => {
  try {
    const test = await Test.fetchAll();
    res.status(200).json({
      status: "success",
      data: test,
    });
    console.log("Conexión exitosa entre el frontend y el backend xd");
  } catch (error) {
    console.error("Error in test controller:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
