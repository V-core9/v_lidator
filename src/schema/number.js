const v_rify = require('../core/v_rify');
const { notEmpty } = require('v_is_empty_value');

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
  verify: async (value) => {
    return (await notEmpty(value)) ? await v_rify(number_schema, value) : [{"msg": "Missing input.", "type": "error" }];
  }
};

module.exports = number_schema;
