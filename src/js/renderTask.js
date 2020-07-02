import { render } from "node-sass";

function renderTask(id, title, parent) {
    const taskContainer = document.createElement("li");
    taskContainer.setAttribute("class", "collection-item");
    taskContainer.setAttribute("id", id);
    taskContainer.innerText = title;
    parent.append(taskContainer);
}

export default renderTask;