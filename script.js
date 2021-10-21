// to collect data, display it in array


const btn = document.querySelector(".btn"),
    result = document.querySelector("#result"),
    todo= document.querySelector(".todo"),
    showTime = document.querySelector(".showTime"),
    reset = document.querySelector(".reset"),
    arryForTodo=[],
    arrayForTime=[];

btn.addEventListener("click", whatToDo);

function whatToDo(e) {
    e.preventDefault();
    let text = document.querySelector(".txt").value;
    let time = document.querySelector(".time").value;
    // Validate Input
    if (text === ""|| time === "") {
        return (result.innerHTML = "Provide a valid information! and refresh");
    }  else {
        showResult(`<span>${text}</span>`, `By : <span>${time}</span>`, "green");
    };
    
    reset.style.display = "block";

    const todoObj = {
        "text": text,
        "time": time
    }
    arryForTodo.push(todoObj);
   
    console.log('Array for To-do: ',arryForTodo);
}

function showResult(text,time, color) {
    result.style.color = color;
    todo.innerHTML = text;
    showTime.innerHTML = time;
}

reset.addEventListener("click", () => {
    document.querySelector("form").reset();
    reset.style.display = "none";
    result.style.color = "";
    todo.innerHTML = "";
    showTime.innerHTML = "";
    result.innerHTML ="";
});

