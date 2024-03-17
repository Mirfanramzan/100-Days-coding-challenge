let invitations: string[] = ["Ali", "Faizan", "Shayan"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
invitations.unshift("Salman");
invitations.splice(invitations.length / 2, 0, "Rehan");
invitations.push("Umer");

invitations.forEach(invitateion => {
    console.log(`Dear ${invitateion}, would you like to join me for dinner?`);
});