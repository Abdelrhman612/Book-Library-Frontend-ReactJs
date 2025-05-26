export type Book = {
  id: string | number;
  title: string;
  author: string;
  category: string;
  description: string;
  image: string;
};
export type BookCardProps = {
  title: string;
  author: string;
  category: string;
  description: string;
  image: string;
};
export type NavBarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};
