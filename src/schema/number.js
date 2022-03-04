const v_rify = require('../core/v_rify');

const number_schema ={
  min: 0,
  max: 32,
  format: /^[0-9-][.0-9]{0,255}$/,
  msg: {
    success: "✅ Success\n🤪 Number Verified Successfully.",
    error: {
      min: "🤯 Number is too short.",
      max: "💥 Number exceeded allowed maximum.",
      format: "🙋‍♂️ Number can only have numbers and dot.",
    }
  },
  verify: async (number) => {
    if (number === undefined) return [{ "confirm": undefined, "input_value": undefined, "msg": "Missing input.", "type": "error" }];
    return await v_rify(number_schema, number);
  }
};

module.exports = number_schema;
