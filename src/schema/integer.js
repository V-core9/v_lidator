const v_rify = require('../core/v_rify');

const integer_schema ={
  min: 0,
  max: 32,
  format: /^[0-9-]{0,255}$/,
  msg: {
    success: "✅ Success\n🤪 Integer Verified Successfully.",
    error: {
      min: "🤯 Integer is too short.",
      max: "💥 Integer exceeded allowed maximum.",
      format: "🙋‍♂️ Integer can only have numbers.",
    }
  },
  verify: async (integer) => {
    return await v_rify(integer_schema, integer);
  }
};

module.exports = integer_schema;
