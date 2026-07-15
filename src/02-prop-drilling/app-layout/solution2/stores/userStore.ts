import { create } from "zustand";

export type User = {
  JWT: string;
  username: string;
  name: string;
  admin: boolean;
  imgPath: string;
};

type UserStore = User;

export const useUserStore = create<UserStore>()(() => ({
  JWT: "1234567890",
  username: "tsevdos",
  name: "John Tsevdos",
  admin: true,
  imgPath: "https://avatars1.githubusercontent.com/u/175707",
}));
