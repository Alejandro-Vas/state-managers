export type CharacterType = {
  name: string;
};

export type CharactersResponseType = {
  count: number;
  next: string;
  previous?: string | null;
  results?: CharacterType[] | null;
};
