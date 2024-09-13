export interface Response {
  token: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export interface ResponseT {
  id:         number;
  firstName:  string;
  lastName:   string;
  maidenName: string;
  age:        number;
  gender:     string;
  email:      string;
  phone:      string;
  username:   string;
  password:   string;
  birthDate:  string;
  image:      string;
  bloodGroup: string;
  height:     null;
  weight:     null;
  eyeColor:   string;
  hair:       Hair;
  domain:     string;
  ip:         string;
  address:    Address;
  macAddress: string;
  university: string;
  bank:       Bank;
  company:    Company;
  ein:        string;
  ssn:        string;
  userAgent:  string;
}

export interface Address {
  address:     string;
  city:        string;
  coordinates: Coordinates;
  postalCode:  string;
  state:       string;
}

export interface Coordinates {
  lat: null;
  lng: null;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType:   string;
  currency:   string;
  iban:       string;
}

export interface Company {
  address:    Address;
  department: string;
  name:       string;
  title:      string;
}

export interface Hair {
  color: string;
  type:  string;
}

export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};