// Отримуємо змінну оточення
const appStatus = import.meta.env.VITE_APP_STATUS || "Local Environment";

// Витягуємо збережені завдання з пам'яті браузера
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderApp() {
  const tasksHtml = tasks
    .map(
      (t) =>
        `<li style="padding: 10px; border-bottom: 1px solid #ccc;">${t}</li>`,
    )
    .join("");

  // Малюємо інтерфейс
  document.querySelector("#app").innerHTML = `
    <div style="padding: 20px; font-family: sans-serif; max-width: 500px; margin: 0 auto;">
      <h1>Student Deadline Manager</h1>
      <div style="padding: 10px; background: #eef2ff; color: #4f46e5; border-radius: 5px; margin-bottom: 20px;">
        <strong>Поточний режим:</strong> ${appStatus}
      </div>
      <div style="display: flex; gap: 10px; margin-bottom: 20px;">
        <input id="taskInput" placeholder="Наприклад: Математика" style="flex: 1; padding: 8px;">
        <button id="addBtn" style="padding: 8px 16px; cursor: pointer;">Додати</button>
      </div>
      <ul style="list-style: none; padding: 0;">${tasksHtml}</ul>
    </div>
  `;

  // Додаємо логіку кнопки
  document.querySelector("#addBtn").addEventListener("click", () => {
    const input = document.querySelector("#taskInput");
    if (input.value.trim()) {
      tasks.push(input.value);
      localStorage.setItem("tasks", JSON.stringify(tasks)); // Зберігаємо в пам'ять
      renderApp(); // Оновлюємо екран
    }
  });
}

renderApp();
