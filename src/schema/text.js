const v_rify = require('../core/v_rify');
const { notEmpty } = require('v_is_empty_value');

const text_schema ={
  min: 0,
  max: 1048576,
  format: /[^]*/,
  msg: {
    success: "✅ Success\n🤪 Text Verified Successfully.",
    error: {
      min: "🤯 Text is too short.",
      max: "💥 Text exceeded allowed maximum.",
      format: "🙋‍♂️ Text can only have letters, numbers, underscore and dot.",
    }
  },
  verify: async (value) => {
    return (await notEmpty(value)) ? await v_rify(text_schema, value) : [{"msg": "Missing input.", "type": "error" }];
  }
};

module.exports = text_schema;
