exports.get_test = async (req, res, next) => {
  try {
    res.json({
      message: "Hola desde el backend xd",
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
