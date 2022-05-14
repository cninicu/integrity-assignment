export type AppState = {
  bag: {
    items: { id: number; name: string }[];
  };
  user: {
    name: string;
  };
};
