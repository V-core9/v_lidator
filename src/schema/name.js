const v_rify = require('../core/v_rify');
const { notEmpty } = require('v_is_empty_value');

const name_schema ={
  min: 2,
  max: 32,
  format: /^[A-Za-z][A-Za-z0-9 ']{0,255}$/,
  msg: {
    success: "✅ Success\n🤪 Name Verified Successfully.",
    error: {
      min: "🤯 Name is too short.",
      max: "💥 Name exceeded allowed maximum.",
      format: "🙋‍♂️ Name can only have letters, numbers, underscore and dot.",
    }
  },
  verify: async (value) => {
    return (await notEmpty(value)) ? await v_rify(name_schema, value) : [{"msg": "Missing input.", "type": "error" }];
  }
};

module.exports = name_schema;
