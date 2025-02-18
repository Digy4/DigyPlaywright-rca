module.exports = {
    default: {
      require: ["src/test/steps/*.js", "src/hooks/hooks.js"],
      paths: ["src/test/features/*.feature"],
      format: ["progress"]
    }
  };