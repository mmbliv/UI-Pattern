export type DogCardType = {
  name: string;
  url: string;
};

export interface DogDetailType extends DogCardType {
  bred_for: string;
  breed_group: string;
  height: { imperial: string; metric: string };
  weight: { imperial: string; metric: string };
  temperament: string[];
  life_span: string;
}
