const users = ["akhil", "sanyu paul", "pranav", "muzahid", "rajiummar"];
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}
let uppercasedUsers = users.map(user => user.toUpperCase());
console.log(uppercasedUsers);
users.push("charan sai");
console.log(users); 
users.pop();
console.log(users); 
users.unshift("charan sai");
console.log(users);
users.shift();
console.log(users); 
let x = users.join("");
console.log(x, typeof x); 
