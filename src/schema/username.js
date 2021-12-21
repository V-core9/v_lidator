const v_rify = require('../helpers/v_rify');

const username_schema ={
  min: 4,
  max: 32,
  format: /^[A-Za-z][A-Za-z0-9_.]{0,255}$/,
  msg: {
    success: "✅ Success\n🤪 Username Verified Successfully.",
    error: {
      min: "🤯 Username is too short.",
      max: "💥 Username exceeded allowed maximum.",
      format: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.",
    }
  },
  validate: async (username) => {
    return await v_rify(username_schema, username);
  }
};

module.exports = username_schema;
