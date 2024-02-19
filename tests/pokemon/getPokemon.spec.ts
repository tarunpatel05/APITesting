import { test, expect } from "@playwright/test";
import { getPokemon, getWrongPokemon } from "../../api/pokemon/pokemon";

test.describe("GET pokemon details", () => {
  let pokemonName;
  let wrongPokemon;

  test.beforeAll(async () => {
    pokemonName = "pikachu";
    wrongPokemon ="WrongPikachu"
  });

  test.afterAll(async () => {
    console.log("Do nothing in after all" )
  });
  //getting pokemon
  test("Getting Pikachu", async () => {
    const pikachuReponse = await getPokemon(pokemonName);

    expect(pikachuReponse).toHaveProperty("abilities");
    expect(pikachuReponse).toHaveProperty("base_experience");
    expect(pikachuReponse).toHaveProperty("height");
    expect(pikachuReponse).toHaveProperty("id");
    expect(pikachuReponse).toHaveProperty("name");
    expect(pikachuReponse).toHaveProperty("sprites");
    expect(pikachuReponse).toHaveProperty("types");
    expect(pikachuReponse).toHaveProperty("weight");

    // Data type validations
    expect(typeof pikachuReponse.name).toBe("string");
    expect(typeof pikachuReponse.base_experience).toBe("number");
    expect(Array.isArray(pikachuReponse.abilities)).toBeTruthy();
    expect(typeof pikachuReponse.height).toBe("number");

    // Specific value checks
    expect(pikachuReponse.name).toBe("pikachu");
    expect(pikachuReponse.id).toEqual(25);
    

  });

  //Negative Testing
  test("Getting Invalid Pikachu", async () => {
    const pikachuReponse = await getWrongPokemon(wrongPokemon); 
    expect(pikachuReponse.status()).toBe(404);

  });
});
