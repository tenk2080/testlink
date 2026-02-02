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









console.log(sum(3, 4));
console.log(isTaskDone(true));
taskSummary(100,95)