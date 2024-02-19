import { expect, request } from "@playwright/test";
import { validatePokemonResponse } from "../../models/pokemon/pokemon";

export async function getPokemon(pokemonName: string) {
  const apiRequest = await request.newContext();

  const response = await apiRequest.get(`pokemon/${pokemonName}`);

  // assert that api is working as expected
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");
  // assert the structure of response
  expect(validatePokemonResponse(await response.json())).toBeTruthy();

  return await response.json();
}

export async function getWrongPokemon(pokemonName: string) {
  const apiRequest = await request.newContext();

  const response = await apiRequest.get(`pokemon/${pokemonName}`);

  expect(response.status()).toBe(404);
  expect(response.headers()["content-type"]).toContain("text/plain");

  return response;
}
