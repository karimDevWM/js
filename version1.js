let todoList = ["javascript", "algo"];

todoList.push('php');
console.log("ma liste des todos : ", todoList);

todoList[1] = "algebra";
console.log("ma liste des todos : ", todoList);

todoList.splice(2,3);
console.log("ma liste des todos : ", todoList);

todoList.append('dfef', 3);
console.log("ma liste des todos : ", todoList);