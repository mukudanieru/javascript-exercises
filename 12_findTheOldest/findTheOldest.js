function getAge(birth, death) {
    const currentYearDate = new Date().getFullYear();
    if (!death) {
        death = currentYearDate;
    }

    return death - birth;
}

const findTheOldest = function (people) {
    const theOldest = people.reduce((oldest, person) => {
        // First person is automatically selected
        if (oldest === null) {
            return person;
        }

        let currentOldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentPersonAge = getAge(person.yearOfBirth, person.yearOfDeath);

        if (currentPersonAge > currentOldestAge) {
            return person;
        }

        return oldest;
    }, null);

    return theOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
