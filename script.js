// LOOPS EXERCISE
// 1
for (i = 1; i <= 7; i++){
    console.log(i);
  }
  // OR
  // for (i = 1; i < 8; i++){
  //   console.log(i);
  // }
  
  console.log(`=============`);
  
  // 2
  for (i = 5; i <= 25; i += 4){
    console.log(i);
  }
  // OR
  // for (i = 5; i < 26; i += 4){
  //   console.log(i);
  // }
  
  console.log(`=============`);
  
  // 3a
  const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
  ];
  
  // 3b
  for (item of wizards){
    console.log(item);
  }
  
  console.log(`=============`);
  
  // 4a
  let harryPotterMovies = 0;
  
  // 4b
  // while (harryPotterMovies < 9){
  //   // console.log(harryPotterMovies);
  //   harryPotterMovies++;
  // }
  // OR
  while (true){
    if (harryPotterMovies < 8) {
      harryPotterMovies++;
    } else {
      break;
    }
  }
  
  // 4c
  console.log(harryPotterMovies);
  
  
  
  
  
  
  
  
  
  
  
  
  // CONSOLE LOGS?