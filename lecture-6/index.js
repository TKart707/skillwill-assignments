/* Assignment-1 */

const modifyString = (string, valueToReplace, valueToReplaceWith) => {
    let result = '';
    let startIndex = 0;
    
    for (let i = 0; i < string.length; i++) {
      if (string.substr(i, valueToReplace.length) === valueToReplace) {
        result += string.substring(startIndex, i);
        result += valueToReplaceWith;
        startIndex = i + valueToReplace.length;
        i += valueToReplace.length - 1;
      }
    }
    
    result += string.substring(startIndex);
    
    return result;
}


/* Assignment-2 */

const upperCase = (text) => {
    if(typeof text === 'string') {
        return text.toUpperCase();
    } else {
        return null;
    }
}



/* Assignment-3 */

const users = [
    {
        name: 'Lasha',
        age: 30
    },
    {
        name: 'Saba',
        age: 20
    },
]

const sortByAscendingOrder = (users) => {
    const newUsers = users.sort((a, b) => a.age - b.age)
    return newUsers;
}

