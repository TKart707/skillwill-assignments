/* Assignment-1 */

const getArrayFromArguments = (first, second, ...args) => {
    const sum = first + second;
    let multiply = 1;
    for(let param of args) {
        multiply *= param; 
    }
    
    return [first + second, multiply];
}

/* Assignment-2 */

const user = {
    name: "kart",
    banks: ["geo", "tbc", {address: {city: "Tbilisi", street: "Barnovi"}}]
}


const getCityFromUser = (user) =>{
    const { banks } = user;
    if (banks && banks[2] && banks[2].address && banks[2].address.city) {
      const { city } = banks[2].address.city;
      return city;
    }
    return undefined;
}

/* Assignment-3 */

const getCopyObject = (object) => {
    let newObject = {};

    for(const prop in object) {
        if(typeof object[prop] === 'object') {
            // non-primitive
            if(Array.isArray(object[prop])) {
                newObject[prop] = object[prop].map((el) => getCopyObject(el))
            } else {
                newObject[prop] = getCopyObject(object[prop])
            }
        } else {
            // primitive
            newObject = {...object}
        }
    }
    return newObject;
}

