# petstore-playwright
Testautomation for pokemon with playwright with typescript

## How to use
To execute all the test cases run the command `npm test`
for single file run the command `npx playwright test tests/pokemon/getPokemon.spec.ts`

Or To run a single test, navigate to the test case and click on `Run` link on the test case in the editor or in the playwright test extension.

## Folder Structure
The tests are located in the directory `tests` with each of api having it's own folder - `pet`, `store`, `user`.

The implementation for the methods of the api is coded in `.\api` directory.

The default objects for each of the api is located in `models` directory.