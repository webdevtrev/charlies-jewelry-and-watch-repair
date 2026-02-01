export interface Service {
  _id: string;
  title: string;
  subtitle?: string | null;
  features?: string[] | null;
  price?: number | null;
  image: {
    url: string;
    crop?: object;
    hotspot?: { x: number; y: number };
  };
  slug: string;
  order?: number | null;
}
