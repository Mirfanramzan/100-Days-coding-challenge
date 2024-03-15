let invitations: string[] = ["Ali", "Babar", "Shayan"];

invitations.forEach(invitation => {
    console.log(`Dear ${invitation}, I would like to invitate you for dinner at my house.`);
});


 let unableToAttend = "Babar";
console.log(`${unableToAttend} can't make it to dinner.`);

let newinvitation = "Faizan";
invitations[invitations.indexOf(unableToAttend)] = newinvitation;


invitations.forEach(invitation => {
    console.log(`Dear ${invitation}, would you like to join me for dinner?`);
});