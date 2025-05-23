import { test, expect } from "@playwright/test";
import { getBerries } from "../../api/berries/berries";
import { Berry } from "../../models/berries/berries";

test.describe("GET pokemon details", () => {
  let berriesName: string;

  test.beforeAll(async () => {
    berriesName = "cheri";
  });

  test.afterAll(async () => {
    console.log("Do nothing in after all");
  });

  //getting berries
  test("Getting Berris", async () => {
    const berriesReponse: Berry = await getBerries(berriesName);
    console.log(berriesReponse);

    // Validate the structure of the Berry object
    expect(berriesReponse).toHaveProperty("id");
    expect(berriesReponse).toHaveProperty("name");
    expect(typeof berriesReponse.id).toBe("number");
    expect(typeof berriesReponse.name).toBe("string");

    // Perform detailed validations for nested properties as needed
    expect(berriesReponse.firmness).toHaveProperty("name");
    expect(typeof berriesReponse.firmness.name).toBe("string");
    expect(berriesReponse.flavors.length).toBeGreaterThan(0);
    berriesReponse.flavors.forEach((flavor) => {
      expect(flavor).toHaveProperty("potency");
      expect(typeof flavor.potency).toBe("number");
    });
  });
});
