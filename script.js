const inputField = document.querySelector("input");
const form = document.querySelector("form");
const taskContainer = document.querySelector(".task-container");

const inputHandler = () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Condition for submitting an empty task
    if (inputField.value === "") {
      return;
    }

    // Created div where the task is stored
    const taskContainerDiv = document.createElement("div");
    taskContainerDiv.classList.add("active-task");

    // Created div wrapper for Check image and paragraph
    const divWrapper = document.createElement("div");
    divWrapper.classList.add("div-wrapper");
    taskContainerDiv.appendChild(divWrapper);

    const handleClick = () => {
      taskContainerDiv.classList.add("task-completed");
      paragraph.style.textDecoration = "line-through";
      paragraph.style.color = "hsl(236, 9%, 61%)";
      circleDiv.remove();
      const checkedDiv = document.createElement("div");
      checkedDiv.classList.add("checked-div");
      divWrapper.prepend(checkedDiv);
      const checkedImg = document.createElement("img");
      checkedImg.src = "images/icon-check.svg";
      checkedImg.alt = "Checked image icon";
      checkedImg.style.width = "10px";
      checkedImg.style.height = "auto";
      checkedDiv.appendChild(checkedImg);

      divWrapper.removeEventListener("click", handleClick);
    };
    divWrapper.addEventListener("click", handleClick);

    // Created circle inside div wrapper
    const circleDiv = document.createElement("div");
    circleDiv.classList.add("circle-div");
    divWrapper.appendChild(circleDiv);

    // Created paragraph inside div wrapper
    const paragraph = document.createElement("p");
    paragraph.textContent = inputField.value;
    divWrapper.appendChild(paragraph);

    // Created cross img inside div
    const crossImg = document.createElement("img");
    crossImg.src = "images/icon-cross.svg";
    crossImg.alt = "Cross image icon";
    crossImg.style.width = "15px";
    crossImg.style.height = "auto";
    crossImg.style.cursor = "pointer";
    taskContainerDiv.appendChild(crossImg);
    crossImg.addEventListener("click", () => {
      taskContainerDiv.remove();
      taskCount.textContent = taskContainer.children.length - 1 + " items left";
    });

    inputField.value = "";

    taskContainer.prepend(taskContainerDiv);

    // Task count
    let taskCount = document.querySelector(".task-count");

    taskCount.textContent = taskContainer.children.length - 1 + " items left";

    // Clear Completed tasks
    const clearTask = document.querySelector(".clear-task");
    clearTask.addEventListener("click", () => {
      const completedTasks = document.querySelectorAll(
        ".active-task.task-completed"
      );
      completedTasks.forEach((task) => task.remove());
      taskCount.textContent = taskContainer.children.length - 1 + " items left";
    });
  });
};

inputHandler();

// Option buttons
const searchButtons = document.querySelectorAll(".status-container h4");
searchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    searchButtons.forEach((btn) => btn.classList.remove("active-search"));
    button.classList.add("active-search");
  });
});

// Option button search - nefunguje

searchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Active") {
      const tasksToHideCompleted = document.querySelectorAll(
        ".active-task.task-completed"
      );
      tasksToHideCompleted.forEach((task) => {
        task.style.display = "none";
      });

      const tasksToHideActive = document.querySelectorAll(
        ".active-task:not(.task-completed)"
      );
      tasksToHideActive.forEach((task) => {
        task.style.display = "flex";
      });
    } else if (button.textContent === "Completed") {
      const tasksToHideActive = document.querySelectorAll(
        ".active-task:not(.task-completed)"
      );
      tasksToHideActive.forEach((task) => {
        task.style.display = "none";
      });

      const tasksToHideCompleted = document.querySelectorAll(
        ".active-task.task-completed"
      );
      tasksToHideCompleted.forEach((task) => {
        task.style.display = "flex";
      });
    } else {
      const allTasks = document.querySelectorAll("div");
      allTasks.forEach((task) => {
        task.style.display = "flex";
      });
    }
  });
});

// Dark mode
const darkMode = document.querySelector(".heading-container img");
const taskContainerOptions = document.querySelector(".task-container-options");
const statusContainer = document.querySelector(".status-container");
const formDiv = document.querySelector("form div");
const circleDiv = document.querySelector(".circle-div");
const backgroundImg = document.querySelector(".background-img");

darkMode.addEventListener("click", () => {
  if (darkMode.src.includes("icon-moon.svg")) {
    darkMode.src = "images/icon-sun.svg";
    backgroundImg.style.backgroundImage = "url(images/bg-mobile-dark.jpg)";
    document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
    inputField.style.backgroundColor = "hsl(237, 14%, 26%)";
    inputField.style.color = "hsl(235, 11%, 43%)";
    inputField.style.boxShadow = "0px 3px 15px hsl(0, 0%, 0%)";
    taskContainer.style.backgroundColor = "hsl(237, 14%, 26%)";
    taskContainer.style.boxShadow = "0px 10px 10px hsl(0, 0%, 0%)";
    taskContainerOptions.style.backgroundColor = "hsl(237, 14%, 26%)";
    taskContainerOptions.style.borderTop = "1px solid  hsl(233, 14%, 35%)";
    taskContainerOptions.style.boxShadow = "0px 5px 10px hsl(0, 0%, 0%)";
    taskContainerOptions.style.color = "hsl(235, 11%, 43%)";
    statusContainer.style.backgroundColor = "hsl(237, 14%, 26%)";
    statusContainer.style.color = "hsl(235, 11%, 43%)";
    formDiv.style.border = "1px solid hsl(233, 14%, 35%)";

    if (window.matchMedia("(min-width: 768px)").matches) {
      backgroundImg.style.backgroundImage = "url(images/bg-desktop-dark.jpg)";
    }

    if (window.matchMedia("(max-width: 768px)").matches) {
      backgroundImg.style.backgroundImage = "url(images/bg-mobile-dark.jpg)";
    }

    if (window.matchMedia("(max-width: 1024px)").matches) {
      statusContainer.style.boxShadow = "0px 5px 10px hsl(0, 0%, 0%)";
    } else {
      statusContainer.style.boxShadow = "none";
    }
  } else {
    darkMode.src = "images/icon-moon.svg";
    backgroundImg.style.backgroundImage = "url(images/bg-mobile-light.jpg)";
    document.body.style.backgroundColor = "hsl(240, 10%, 96%)";
    inputField.style.backgroundColor = "hsl(0, 0%, 98%)";
    inputField.style.color = "hsl(236, 9%, 61%)";
    inputField.style.boxShadow = "0px 3px 15px hsl(233, 11%, 84%)";
    taskContainer.style.backgroundColor = "hsl(0, 0%, 98%)";
    taskContainer.style.boxShadow = "0px 10px 10px hsl(233, 11%, 84%)";
    taskContainerOptions.style.backgroundColor = "hsl(0, 0%, 98%)";
    taskContainerOptions.style.borderTop = "1px solid hsl(236, 33%, 92%)";
    taskContainerOptions.style.boxShadow = "0px 10px 10px hsl(233, 11%, 84%)";
    taskContainerOptions.style.color = "hsl(236, 9%, 61%)";
    statusContainer.style.backgroundColor = "hsl(0, 0%, 98%)";

    statusContainer.style.color = "hsl(236, 9%, 61%)";
    formDiv.style.border = "1px solid hsl(236, 33%, 92%)";

    if (window.matchMedia("(min-width: 768px)").matches) {
      backgroundImg.style.backgroundImage = "url(images/bg-desktop-light.jpg)";
    }

    if (window.matchMedia("(max-width: 768px)").matches) {
      backgroundImg.style.backgroundImage = "url(images/bg-mobile-light.jpg)";
    }

    if (window.matchMedia("(max-width: 1024px)").matches) {
      statusContainer.style.boxShadow = "0px 10px 10px hsl(233, 11%, 84%)";
    } else {
      statusContainer.style.boxShadow = "none";
    }
  }
});
