const v_rify = require('../v_rify');

const email_schema = {
  format: /^[A-Za-z0-9][A-Za-z0-9.]+@[^\s@]+\.[^\s@]+$/,
  msg: {
    success: "✅ Success\n📫 Email Verified Successfully.",
    error: {
      format: "📑 Email verification failed."
    }
  },
  validate: async (email) => {
    if (email.split('..').length === 1 && email.split('@').length === 2 && isNaN(email.split('@')[0])) {
      return await v_rify(email_schema, email);
    } return [{ "confirm": undefined, "input_value": email, "msg": email_schema.msg.error.format, "suggest": "Try removing special characters.", "type": "error" }];
  }
};

module.exports = email_schema;
