"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let usernames = ["admin", "user1", "user2", "user3", "user4", "apple", "samsung", "shayan"];
usernames.forEach(username => {
    if (username == "apple") {
        console.log("Hello , would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
