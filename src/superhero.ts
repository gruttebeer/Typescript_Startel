interface superHero
{
    id: number;
    name: string;
    slug: string;

    images: {
        xs: string, sm: string, md: string, lg: string
    }

    appearance: {
        gender: string,
        race: string,
        height: string[],
        weight: string[],
        eyeColor: string,
        hairColor: string
    }
    powerstats: {
      "intelligence": number,
      "strength": number,
      "speed": number,
      "durability": number,
      "power": number,
      "combat": number
    }
    biography: {
        alignment: string
    }
}