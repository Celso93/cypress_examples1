{
    // Podemos adicionar alguns facilitadores  https://docs.cypress.io/guides/references/configuration.html#Options
    // Este exemplo abaixo é um auto complete do cypress ( CTRL + espaço)
    "$schema": "https://raw.githubusercontent.com/cypress-io/cypress/develop/cli/schema/cypress.schema.json",
    "baseUrl": "http://automationpractice.com/index.php",
    "watchForFileChanges": true, // cypress por default roda os testes a cada atualização de arquivos
    "experimentalSourceRewriting": true // https://github.com/cypress-io/cypress/issues/5569, evita que cypress adicione _ as urls
    "viewportHeight": 960,
    "viewportWidth": 1536
}