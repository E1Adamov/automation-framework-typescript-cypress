import { BasePage, GetElementFunction } from "./base_page";

export class TodoHomePage extends BasePage {

    elements: { [key: string]: GetElementFunction } = {
        newTodoInput: () => cy.get('[data-test="new-todo"]'),
        existingTodoLis: () => cy.get('ul.todo-list li'),
    }

    getUrl(): string {
        return "https://example.cypress.io/todo";
    }

    createNewTodo(text: string): TodoHomePage {
        let todoInput = this.elements.newTodoInput()
        todoInput.type(text=text)
        todoInput.type("{enter}")
        return this
    }

    deleteAllTodos() {
        const existingTodoLis = this.elements.existingTodoLis()
        existingTodoLis.each(existingTodoLi => {
            cy.wrap(existingTodoLi).realHover().find("button.destroy").click()
        })

    }
}


