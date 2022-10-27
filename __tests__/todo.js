/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, add, markAsCompleted, overdue, dueLater, dueToday } = todoList();

describe("TodoList Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });
  test("Should mark todo as completed", () => {
    expect(all[0].completed).toBe(false);
    markAsCompleted(0);
    expect(all[0].completed).toBe(true);
  });
  test("Should ckeck retrieval of overdue items", () => {
    expect(overdue().length).toBe(0);
  });
  test("Should ckeck retrieval of dueToday items", () => {
    expect(dueToday().length).toBe(2);
  });
  test("Should ckeck retrieval of dueLater items", () => {
    expect(dueLater().length).toBe(0);
  });
});
