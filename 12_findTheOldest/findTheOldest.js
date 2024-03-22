const findTheOldest = function(people) {
    let oldest = people[0];
    const date = new Date();
    for (let i = 0; i < people.length; i++){
        if (people[i].yearOfDeath == null){
            people[i].age = date.getFullYear() - people[i].yearOfBirth;
        } else {
            people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;

        }
        if (oldest.age < people[i].age){
            oldest = people[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
