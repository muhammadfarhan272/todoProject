describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://antondedyaev.github.io/todo_list/');
    // Add new todo items
    cy.get('[data-testid="main-input"]').type('first item{enter}');
    cy.get('[data-testid="main-input"]').type('second item{enter}');
    // Filter for all items
    cy.get('[data-testid="list-item"]').first().should('have.text', 'first item');
    cy.get('[data-testid="list-item"]').last().should('have.text', 'second item');
    cy.get('[data-testid="list-item"]').should('have.length', 2)
  })
  it(' Check for active tasks', () => {
    // Check off an item as completed
    cy.get('[data-testid="list-item"]').find('input[type=checkbox]').first()
      .check({ force: true })
    // Filter for active tasks
    cy.get('.container__filterButton').eq(1).click();
    cy.get('[data-testid="list-item"]').first().should('have.text', 'second item');
    cy.get('[data-testid="list-item"]').should('have.length', 1);
    // Total items left uncompleted
    cy.get('span').should('have.text', '1 item left');
    // Filter for all tasks
    cy.get('.container__filterButton').first().click();
    // Uncheck a checkbox element
    cy.get('[data-testid="list-item"]').find('input[type=checkbox]').first()
      .uncheck({ force: true });
    cy.get('.container__filterButton').eq(1).click();
    cy.get('[data-testid="list-item"]').first().should('have.text', 'first item');
    cy.get('[data-testid="list-item"]').last().should('have.text', 'second item');
    cy.get('[data-testid="list-item"]').should('have.length', 2);
    // Total items left uncompleted
    cy.get('span').should('have.text', '2 items left');
    // Check off second item as completed
    cy.get('[data-testid="list-item"]').find('input[type=checkbox]').last()
      .check({ force: true })
    // Filter for active tasks
    cy.get('.container__filterButton').eq(1).click();
    cy.get('[data-testid="list-item"]').should('have.text', 'first item');
    cy.get('[data-testid="list-item"]').should('have.length', 1);
    // Total items left uncompleted
    cy.get('span').should('have.text', '1 item left');
    // Filter for all tasks
    cy.get('.container__filterButton').first().click();
    cy.get('[data-testid="list-item"]').first().should('have.text', 'first item');
    cy.get('[data-testid="list-item"]').last().should('have.text', 'second item');
    cy.get('[data-testid="list-item"]').should('have.length', 2);
    // Uncheck a checkbox element
    cy.get('[data-testid="list-item"]').find('input[type=checkbox]').last()
      .uncheck({ force: true });
    // Filter for active tasks
    cy.get('.container__filterButton').eq(1).click();
    cy.get('[data-testid="list-item"]').first().should('have.text', 'first item');
    cy.get('[data-testid="list-item"]').last().should('have.text', 'second item');
    cy.get('[data-testid="list-item"]').should('have.length', 2);
    // Total items left uncompleted
    cy.get('span').should('have.text', '2 items left');
  });

  it(' Check for completed tasks', () => {
    // Check off first item as completed
    cy.get('[data-testid="list-item"]').find('input[type=checkbox]').first()
      .check({ force: true })
    // Filter for completed tasks
    cy.get('.container__filterButton').last().click();
    cy.get('[data-testid="list-item"]').first().should('have.text', 'first item');
    cy.get('[data-testid="list-item"]').should('have.length', 1);
    // Total items left uncompleted
    cy.get('span').should('have.text', '1 item left');
    // Filter for all tasks
    cy.get('.container__filterButton').first().click();
    cy.get('[data-testid="list-item"]').first().should('have.text', 'first item');
    cy.get('[data-testid="list-item"]').last().should('have.text', 'second item');
    cy.get('[data-testid="list-item"]').should('have.length', 2);
    // Check off second item as completed
    cy.get('[data-testid="list-item"]').find('input[type=checkbox]').last()
      .check({ force: true });
    // Filter for completed tasks
    cy.get('.container__filterButton').last().click();
    cy.get('[data-testid="list-item"]').first().should('have.text', 'first item');
    cy.get('[data-testid="list-item"]').last().should('have.text', 'second item');
    cy.get('[data-testid="list-item"]').should('have.length', 2);
    // Total items left uncompleted
    cy.get('span').should('have.text', '0 items left');
    cy.get('[data-testid="list-item"]').find('input[type=checkbox]').first()
      .uncheck({ force: true });
    // Filter for completed tasks
    cy.get('.container__filterButton').last().click();
    cy.get('[data-testid="list-item"]').last().should('have.text', 'second item');
    cy.get('[data-testid="list-item"]').should('have.length', 1);
    // Filter for active tasks
    cy.get('.container__filterButton').eq(1).click();
    cy.get('[data-testid="list-item"]').first().should('have.text', 'first item');
    cy.get('[data-testid="list-item"]').should('have.length', 1);
    // Total items left uncompleted
    cy.get('span').should('have.text', '1 item left');
    // Filter for completed tasks
    cy.get('.container__filterButton').last().click();
    // Uncheck a checkbox element
    cy.get('[data-testid="list-item"]').find('input[type=checkbox]').last()
      .uncheck({ force: true });
    // Filter for active tasks
    cy.get('.container__filterButton').eq(1).click();
    cy.get('[data-testid="list-item"]').first().should('have.text', 'first item');
    cy.get('[data-testid="list-item"]').last().should('have.text', 'second item');
    cy.get('[data-testid="list-item"]').should('have.length', 2);
    // Total items left uncompleted
    cy.get('span').should('have.text', '2 items left');
    // Filter for all items
    cy.get('.container__filterButton').first().click();
    cy.get('[data-testid="list-item"]').first().should('have.text', 'first item');
    cy.get('[data-testid="list-item"]').last().should('have.text', 'second item');
    cy.get('[data-testid="list-item"]').should('have.length', 2);
    // Total items left uncompleted
    cy.get('span').should('have.text', '2 items left');
  });
  it(' Check for clear completed tasks', () => {
    // Check off first item as completed
    cy.get('[data-testid="list-item"]').find('input[type=checkbox]').first()
      .check({ force: true });
    // Total items left uncompleted
    cy.get('span').should('have.text', '1 item left');
    // Filter for active tasks
    cy.get('.container__filterButton').eq(1).click();
    cy.get('[data-testid="list-item"]').should('have.text', 'second item');
    cy.get('[data-testid="list-item"]').should('have.length', 1);
    // Filter for completed tasks
    cy.get('.container__filterButton').last().click();
    cy.get('[data-testid="list-item"]').should('have.text', 'first item');
    cy.get('[data-testid="list-item"]').should('have.length', 1);
    // Delete all completed tasks
    cy.get('[data-testid="clear-all"]').click();
    cy.get('[data-testid="list-item"]').should('have.length', 1);
    // Total items left uncompleted
    cy.get('span').should('have.text', '1 item left');
    // Filter for all items
    cy.get('.container__filterButton').first().click();
    cy.get('[data-testid="list-item"]').last().should('have.text', 'second item');
    cy.get('[data-testid="list-item"]').should('have.length', 1);
    // Total items left uncompleted
    cy.get('span').should('have.text', '1 item left');
    // Check off first item as completed
    cy.get('[data-testid="list-item"]').find('input[type=checkbox]')
      .check({ force: true });
    // Filter for active tasks
    cy.get('.container__filterButton').eq(1).click();
    // Total items left uncompleted
    cy.get('span').should('have.text', '0 items left');
    // Filter for completed tasks
    cy.get('.container__filterButton').last().click();
    cy.get('[data-testid="list-item"]').should('have.text', 'second item');
    cy.get('[data-testid="list-item"]').should('have.length', 1);
    // Total items left uncompleted
    cy.get('span').should('have.text', '0 items left');
    // Delete all completed tasks
    cy.get('[data-testid="clear-all"]').click();

  });
})