const tasks = {
    tasks: [{
            text: "clean the house",
            completed: true
        },
        {
            text: "clean the car",
            completed: false
        },
    ],
    getTasksToDo() {
        const tasksToDo = this.tasks.filter((task) => {
            return task.completed === false
        })
        return tasksToDo;
    }

}

console.log(tasks.getTasksToDo())