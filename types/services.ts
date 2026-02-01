export interface Service {
  _id: string;
  title: string;
  subtitle: string;
  features: string[];
  price: number;
  image: {
    url: string;
    crop?: object;
    hotspot?: { x: number; y: number };
  };
  slug: string;
  order: number;
}
