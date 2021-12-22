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
      format: "🙋‍♂️ Integer can only have numbers and dot.",
    }
  },
  verify: async (integer) => {
    return (integer - Math.trunc(integer) === 0) ? await v_rify(integer_schema, integer) : false;
  }
};

module.exports = integer_schema;
