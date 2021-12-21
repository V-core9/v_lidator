const register = require('../user/register');
const vDB = require('v_database');
const v_fs = require('v_file_system');

const test_tables ={
  users: 'test_users',
  emails: 'test_emails',
};

test('User register test 001 OK', async () => {
  const username = 'yeaJ11';
  await vDB.type.new(test_tables.users);
  await vDB.type.new(test_tables.emails);
  expect(await register({ username: username, email: 'yeamiki11@gmail.com', password: '1234567890', password_confirm: '1234567890' })).toBe(true);
});

test('User register test 002 OK', async () => {
  expect(await register({ username: 'yea_mki11', email: 'yeamiki2211@gmail.com', password: '1234567890', password_confirm: '1234567890' })).toBe(true);
});

test('User register test 003 BAD [duplicate username]', async () => {
  expect(await register({ username: 'yea_mki11', email: 'yeamiki2211AA@gmail.com', password: '1234567890', password_confirm: '1234567890' })).toEqual([{ "message": "💎 USERNAME is not unique. [ yea_mki11 ]", "type": "ERROR" }]);
});


test('User register test 004 BAD [duplicate email]', async () => {
  expect(await register({ username: 'yea_mki11223', email: 'yeamiki2211@gmail.com', password: '1234567890', password_confirm: '1234567890' })).toEqual([{ "message": "💎 EMAIL is not unique. [ yeamiki2211@gmail.com ]", "type": "ERROR" }]);
});


const test_name005 = 'User register test 005 BAD [no confirm password]';
test(test_name005, async () => {
  var stats = await register({ username: 'yea_ZZZZ', email: 'yeamiki2211zz@gmail.com', password: '1234567890' });
  expect(stats).toEqual([[{ "type": "error", "confirm": undefined, "input_value": "1234567890", "msg": "🚨 Confirmation Password Entry Does Not Match Password Provided.", "suggest": "Make them same." }]]);
});


const test_name006 = 'User register test 006';
test(test_name006, async () => {
  var stats = await register({ username: 'yea_mki11ZZZZZ', email: 'ZZyeamiki2211@gmail.com', password: 'Z1234567890', password_confirm: 'Z1234567890' });
  expect(stats).toBe(true);
});

test('User view 007', async () => {
  expect(await vDB.item.view('users')).toEqual(["yeaJ11", "yea_mki11", "yea_mki11ZZZZZ"]);
});

test('User view with id 008', async () => {
  var compar = JSON.parse(v_fs.readSy(vDB.config.data_dir + '/users/yeaJ11.json'));
  expect(await vDB.item.view('users', "yeaJ11")).toEqual(compar);
});


test('User view with id 009', async () => {
  var compar = JSON.parse(v_fs.readSy(vDB.config.data_dir + '/users/yeaJ11.json'));
  expect(await vDB.item.view('users', { id: "yeaJ11" })).toEqual(compar);
});

test('User register test 010', async () => {
  expect(await register({ username: 'ye11', email: '@gmail.com', password: '1234567890', password_confirm: '1234567890' })).toEqual([[{ "confirm": undefined, "input_value": "@gmail.com", "msg": "📑 Email verification failed.", "suggest": "Try removing special characters.", "type": "error" }]]);
});


test('User register test 011', async () => {
  vDB.config.log_to_console = true;
  expect(await register({ username: 'ye11', email: '@gmail.com', password: '1234567890', password_confirm: '1234567890' })).toEqual([[{ "confirm": undefined, "input_value": "@gmail.com", "msg": "📑 Email verification failed.", "suggest": "Try removing special characters.", "type": "error" }]]);
});

test('User register test 012', async () => {
  vDB.config.log_to_console = 'OPTIMIZED';
  expect(await register({ username: '11', email: 'yeA11@gmail.com', password: '1234567890', password_confirm: '1234567890' })).toEqual([[{ "confirm": undefined, "input_value": "11", "msg": "🤯 Username is too short.", "suggest": "Minimum Length is [4]", "type": "error" }, { "confirm": undefined, "input_value": "11", "msg": "🙋‍♂️ Username can only have letters, numbers, underscore and dot.", "suggest": "Try removing special characters.", "type": "error" }]]);
});


test('User REMOVE test 014.mail', async () => {
  expect(await vDB.item.del('user_emails', (await vDB.item.view('users', 'yeaJ11')).email)).toEqual(true);
});

test('User REMOVE test 014.user', async () => {
  expect(await vDB.item.del('users', 'yeaJ11')).toEqual(true);
});


test('User REMOVE test 015.mail', async () => {
  expect(await vDB.item.del('user_emails', (await vDB.item.view('users', 'yea_mki11')).email)).toEqual(true);
});

test('User REMOVE test 015.user', async () => {
  expect(await vDB.item.del('users', 'yea_mki11')).toEqual(true);
});


test('User REMOVE test 016.mail', async () => {
  expect(await vDB.item.del('user_emails', (await vDB.item.view('users', 'yea_mki11ZZZZZ')).email)).toEqual(true);
});

test('User REMOVE test 016.user', async () => {
  expect(await vDB.item.del('users', 'yea_mki11ZZZZZ')).toEqual(true);
});


/*
test('User REMOVE test 1', async () => {
  expect(await vDB.type.del('users')).toEqual(true);
});
test('User REMOVE test 2', async () => {
    expect(await vDB.type.del('user_emails')).toEqual(true);
});
*/
