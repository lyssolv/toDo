function filterTasks(str, tasks) {
    let filter = str.toLowerCase();
    tasks.forEach((task) => {
        if (task.innerText.toLowerCase().indexOf(filter == -1)) {
            task.classList.add('filtered');
        } else if (task.classList.contains('filtered')) {
            task.classList.remove('filtered')
        }
    })
}

export default filterTasks;