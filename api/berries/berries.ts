import { expect, request } from "@playwright/test";

export async function getBerries(berriesIdName: number|string) {
  const apiRequest = await request.newContext();

  const response = await apiRequest.get(`berry/${berriesIdName}`);

  // assert that api is working as expected
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");

  return await response.json();
}

