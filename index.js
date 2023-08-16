const createLsData = (key, value) => {
  let taskObj;

  //get ls data
  let webTask = JSON.parse(localStorage.getItem(key));


  //let webTask = readLsData(key);


  //create array if !exist 
  if (!webTask) {
    taskObj = [];
  } else {
    taskObj = webTask;
  }

  taskObj.push(value);

  //save data in ls
  localStorage.setItem(key, JSON.stringify(taskObj));

  //setLsData(key, taskObj);
}