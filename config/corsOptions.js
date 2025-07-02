const corsOptions = {
  origin: "*",   // allow everything for development
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

module.exports = corsOptions;
