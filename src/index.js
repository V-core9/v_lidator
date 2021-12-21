
var base = require('./class/base');
var email = require('./class/email');
var name = require('./class/name');
var text = require('./class/text');
var title = require('./class/title');
var username = require('./class/username');

var v_base = new base() ;
var v_email = new email() ;
var v_name = new name() ;
var v_text = new text() ;
var v_title = new title() ;
var v_username = new username() ;

const v_rifier ={
  base: v_base.valid,
  email: v_email.valid,
  name: v_name.valid,
  text: v_text.valid,
  title: v_title.valid,
  username: v_username.valid
};

module.exports = v_rifier;
