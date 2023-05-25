import { TodoHomePage } from "../page_object/todo_home_page"


describe('This suite show cases the basic Cypress features', () => {
  it(
    'creates a new todo', function () {
      const homePage: TodoHomePage = new TodoHomePage()
      homePage.deleteAllTodos()

      const newTodoText: string = "new todo 1"

      homePage.createNewTodo(newTodoText)

      const existingTodoLiElements = homePage.elements.existingTodoLis()
      const existingTodoTexts: Array<string> = []

      existingTodoLiElements.each($existingTodoLiElement => {
        existingTodoTexts.push($existingTodoLiElement.text())
      })

      cy.wrap(existingTodoTexts).should('deep.equal', [newTodoText])
  })
})