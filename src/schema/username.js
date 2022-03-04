const v_rify = require('../core/v_rify');

const username_schema ={
  min: 3,
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
  verify: async (value) => {
    if (value === undefined) return [{ "confirm": undefined, "input_value": undefined, "msg": "Missing input.", "type": "error" }];
    return await v_rify(username_schema, value);
  }
};

module.exports = username_schema;
