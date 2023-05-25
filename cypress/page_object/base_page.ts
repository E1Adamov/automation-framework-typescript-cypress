export abstract class BasePage{
    
    abstract elements: {[key: string]: GetElementFunction}
    public url: string
    // public context: Mocha.Context

    constructor () {
        // this.context = context;
        this.url = this.getUrl();
        cy.visit(this.url);
    }
    
    abstract getUrl(): string

}

export interface GetElementFunction {
    (...args: Array<any>): Cypress.Chainable<JQuery<HTMLElement>>
}