export interface Sale {
  id: number;
  brand: string;
  totalSales: number;
  purchaseDate: string;
  rewardPoints: number;
  startDate?: string;
  endDate?: string;
}

export enum SortBy {
  DATE = "date",
  REWARDS = "rewards",
  SALES = "sales",
  BRAND = "brand",
}

export enum SortOrder {
  ASCENDING = "asc",
  DESCENDING = "desc",
}

export interface Session {
  email: string;
  password: string;
  user_data: {
    name: string;
    image: string;
    designation: string;
  };
}

export interface User {
  name: string;
  image: string;
  totalSales: number;
  totalRewards: number;
}

export interface SelectOption {
  value: string;
  label: string;
}
