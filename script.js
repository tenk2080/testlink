function sum(a,b){
return a+b;
}
function isTaskDone(status){
     if(status = true){
        return status === "выполнена";
     } return status === "не выполнена";
}
function taskSummary(total, done){
   let active = total - done;
   return "Всего: " + total + " | Выполнено: " + done + " | Активных: " + active;
    
}


let numbers = [10, 20, 30, 40, 50];
let city = ["Москва", "Париж", "Берлин", "Токио"];
Решение:
let task = {
  id: 1,
  title: "Купить молоко",
  status: "активна"
};
let tasks = [
   { id: 1, title: "Купить молоко", status: "активна" },
   { id: 2, title: "Позвонить врачу", status: "выполнена" },
   { id: 3, title: "Сделать уроки", status: "активна" }
 ];
 tasks[0].status = "выполнена";
 tasks.push({ id: 4, title: "Прогулка", status: "активна" });
 let user = {
   name: "Анна",
   tasks: tasks
 };
 function  findTaskByTitle(tasks, title){
  for (let task of tasks) {
    if (task.title === title) {
        return task;
    }
}
return "Задача не найдена";

 }
  

 
 console.log(user.name);        
 console.log(user.tasks.length);  
console.log(numbers[0]);
console.log(numbers[numbers.length-1])
city[2] = "Лондон";  
console.log(city); 
console.log(task.id);      
console.log(task.title);  
console.log(task.status); 
console.log(tasks[0].title);   
console.log(tasks[1].status);  
console.log(tasks[0]);
console.log(tasks);


console.log(sum(3, 4));
console.log(isTaskDone(true));
console.log(taskSummary(100,95));