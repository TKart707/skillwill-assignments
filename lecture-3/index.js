/* Assignment-1 */

const users = [{name: 'Temo', age: 25}, {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]

const theSmallesUserName = (users) => {
    let userMinAge = users[0].age;
    let userMinAgeName = users[0].name;

    for (let user of users) {
        if(user.age < userMinAge) {
            userMinAge = user.age;
            userMinAgeName = user.name;
        }
    }

    return userMinAgeName;
}

theSmallesUserName(users);


/* Assignment-2 */

const newObj = (user) => {
    const newUser = {...user} 
    return newUser;
}


/* Assignment-3 */

const rollDice = (user1, user2) => {
    let playerA = 0;
    let playerB = 0;
    let winner = "";

    while (true) {
        playerA = Math.floor(Math.random() * 6) + 1;
        playerB = Math.floor(Math.random() * 6) + 1;

        if (playerA === 3 && playerB === 3) {
            continue;
        }

        if (playerA === 3) {
            winner = user1;
            break;
        } else if (playerB === 3) {
            winner = user2;
            break;
        } 
    }

    return `win  ${winner}`
}

rollDice("user1", "user2");
