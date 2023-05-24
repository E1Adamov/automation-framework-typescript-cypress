export abstract class BasePage{
    
    abstract elements: {[key: string]: GetElementFunction}
    public url: string

    constructor () {
        this.url = this.getUrl();
        cy.visit(this.url);
    }
    
    abstract getUrl(): string

}

export interface GetElementFunction {
    (): Cypress.Chainable<JQuery<HTMLElement>>
}