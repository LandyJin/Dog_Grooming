var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('myDB');
db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS Login (id TEXT, username TEXT, password TEXT)");
    db.run("DELETE FROM Login");
    db.run('INSERT INTO Login VALUES ("1", "john", "john2017")');
    db.run('INSERT INTO Login VALUES ("2", "nick", "nic774")');
    db.run('INSERT INTO Login VALUES ("3", "james", "jam93")');
    db.run('INSERT INTO Login VALUES ("4", "samantha", "sam103")');
});
