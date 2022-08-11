export interface IMenu {
  id: string;
  slug: string;
  name: string;
  image: string;
  description: string;
  restaurant: {
    id: string;
    slug: string;
    name: string;
  };
}
