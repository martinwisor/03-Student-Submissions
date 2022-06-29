const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "test",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "test",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "test",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "test",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: score >= 60,
  };
  array.push(newObject);
};

//3 Declare a function named deleteSubmissionByIndex
//Parameter(s): array, index
//Functionality: remove the object from the array at the specified index using the splice method.

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
deleteSubmissionByIndex(submissions, 3);
console.log(submissions);

//4 Declare a function named deleteSubmissionByName
//Parameter(s): array, name
//Functionality: remove the object from the array that has the provided name.  Incorporate the findIndex method and the splice method.

const deleteSubmissionByName = (array, name) => {
  const index = array.findname((element) => {
    element.name === name;
  });
  array.splice(index, 1);
  deleteSubmissionByName(objects, "Jill");
  console.log(objects);
};

//5 Declare a function named editSubmission
//Parameter(s): array, index, score
//Functionality: update an object’s score in the array at the specified index. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
editSubmission(submissions, 1, 73);
console.log(submissions);

//Declare a function named findSubmissionByName
//Parameter(s): array, name
//Functionality: return the object in the array that has the provided name. Use the find method.

const findSubmissionByName = (array, name) => {
  return array.find((student) => {
    return student.name === name;
  });
};
console.log(findSubmissionByName(submissions, "Jack"));

//Declare a function named findLowestScore
//Parameter(s): array
//Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.

const findLowestScore = (array) => {
  let sum = 0;
  array.forEach((score) => {sum += score;});
  return sum / length;
}; 
console.log(findLowestScore(score));

//Declare a function named findAverageScore
//Parameter(s): array
//Functionality: return the average quiz score.  Use a for...of loop.

const findAverageScore = (array) => {
  for (const sum of submissions.score);
};
console.log(score);


//Declare a function named filterPassing
//Parameter(s): array
//Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores. 

const filterPassing = (array) => {
    const newArray = array.filter((object))
}

//Declare a function named filter90AndAbove
//Parameter(s): array
//Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.

const filter90AndAbove = (array) => {
    const newArray = array.filter((score) =>)
}//this is where i get stuck. 