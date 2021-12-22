const v_rify = require('../core/v_rify');

const pass_schema = {
  confirm : null,
  min: 6,
  max: 32,
  format: /^[A-Za-z0-9!@#$%^&*()_.]{0,255}$/,
  msg: {
    success: "✅ Success\n🔓 Password Verified Successfully.",
    error: {
      min: "❓ Password is too short.",
      max: "📛 Password length exceeded allowed maximum.",
      format: "🔓 Password contains characters that are not allowed. ",
      confirm: "🚨 Confirmation Password Entry Does Not Match Password Provided."
    }
  },
  verify: async (password, password_confirm) => {
    pass_schema.confirm = password_confirm;
    return await v_rify(pass_schema, password);
  },
};

module.exports = pass_schema;
