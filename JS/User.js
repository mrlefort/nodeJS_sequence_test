/**
 * Created by dino on 29-09-2016.
 */

var Sequelize = require('sequelize');





var UserName = "";
var FirstName = "";
var LastName = "";
var Email = "";
var Role = "";
var Date = "";
var Birthday = "";
var Sex = "";

function _newUser(UserName, FirstName, LastName, Email, Date, Role, Birthday, Sex)
{
    this.UserName = UserName
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Email = Email;
    this.Date = Date;
    this.Role = Role;
    this.Birthday = Birthday;
    this.Sex = Sex;

}
// var john = new User("john", "Lars", "Johnson", "john@gmail.com", "10/09/2016", "Admin", "09/09/2010", "male");
// console.log(john.Birthday);

module.exports = {newUser : _newUser};




