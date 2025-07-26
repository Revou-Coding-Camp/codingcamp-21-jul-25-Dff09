// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const dateInput = document.getElementById("todo-date");
  const todoList = document.getElementById("todo-list");
  const filterDate = document.getElementById("filter-date");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const task = input.value.trim();
    const date = dateInput.value;

    if (!task || !date) {
      alert("Isi semua form dengan benar!");
      return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = `<strong>${task}</strong><small>${date}</small>`;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete-btn");

    delBtn.addEventListener("click", function () {
      li.classList.add("fade-out");
      setTimeout(() => {
        li.remove();
      }, 500);
    });

    li.setAttribute("data-date", date);
    li.appendChild(span);
    li.appendChild(delBtn);

    li.classList.add("new-item");
    setTimeout(() => {
      li.classList.remove("new-item");
    }, 500);

    todoList.appendChild(li);
    form.reset();
  });

  filterDate.addEventListener("input", function () {
    const selectedDate = filterDate.value;
    const todos = document.querySelectorAll("#todo-list li");

    todos.forEach(todo => {
      const todoDate = todo.getAttribute("data-date");
      todo.style.display = (!selectedDate || todoDate === selectedDate) ? "flex" : "none";
    });
  });

  const linksButton = document.getElementById("links-button");
  const linksModal = document.getElementById("links-modal");
  const closeBtn = document.querySelector(".close-btn");

  linksButton.addEventListener("click", () => {
    linksModal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    linksModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === linksModal) {
      linksModal.style.display = "none";
    }
  });
});