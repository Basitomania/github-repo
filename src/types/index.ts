export interface ReactQueryResponse {
  data: [];
  error: unknown;
  isLoading: boolean;
}

export interface HeaderPillsProps {
  handleTabClick: (index: number) => void;
  toggleState: number;
}

export interface CustomDropDownProps {
  value: string;
}

export interface Builder {
  username: string;
  avatar: string;
  url: string;
}

export interface Repository {
  username: string;
  description: string;
  language: string;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: string;
  builtBy: Builder[];
  languageColor: string;
  rank: number;
  url: string;
  repositoryName: string;
}

export interface PopularRepo {
  repositoryName: string;
  description: string;
  url: string;
}

export interface Developer {
  avatar: string;
  name: string;
  popularRepository: PopularRepo;
  rank: number;
  since: number;
  url: string;
  username: string;
}

export interface ButtonProps {
  value: string;
}
