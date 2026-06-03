import { test, expect } from "@playwright/test";

test("Перевірка заголовка української Вікіпедії", async ({ page }) => {
  // Заходимо на сайт
  await page.goto("https://uk.wikipedia.org/");

  // Перевіряємо коректність відображення елементів
  await expect(page).toHaveTitle(/Вікіпедія/);
});
