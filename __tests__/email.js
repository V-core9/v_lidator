const emails = require('../_tests_data/emails');
const v_rifier = require('../');

emails.forEach(async (test_mail) => {
  test(`Verify EMAIL [${test_mail.expect}] :  ${test_mail.mail}`, () => {
    expect(v_rifier.email(test_mail.mail)).toBe(test_mail.expect);
  });
});
