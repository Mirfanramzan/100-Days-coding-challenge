let invitations: string[] = ["Ali","Babar","Shayan"]



console.log("Unfortunately, I can only invite two people for dinner.");

while (invitations.length > 2) {
    let removedinvtation = invitations.pop();
    console.log(`Sorry, ${removedinvtation}, I can't invite you to dinner.`);
}

invitations.forEach(invitation => {
    console.log(`Dear ${invitation}, you're still invited to dinner.`);
});



