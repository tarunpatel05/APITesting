

interface Ability {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
}

interface Sprite {
  back_default: string;
  front_default: string;
}

interface PokemonResponse {
  abilities: Ability[];
  base_experience: number;
  height: number;
  id: number;
  name: string;
  sprites: Sprite;
  types: { slot: number; type: { name: string; url: string } }[];
  weight: number;
}

export function validatePokemonResponse(body: PokemonResponse) {
  if (typeof body.name !== "string") return false;
  if (typeof body.base_experience !== "number") return false;
  if (!Array.isArray(body.abilities)) return false;
  // We can add more validations as needed

  return true;
}
