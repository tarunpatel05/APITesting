import { test, expect } from "@playwright/test"
import { pet } from "../../models/pet/pet";

test("Create a new pet", async ({ request }) => {
  const response = await request.post(`pet`, {
    data: pet
  });

  // assert that api is working as expected
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});