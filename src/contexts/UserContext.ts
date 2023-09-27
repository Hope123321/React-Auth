import { createContext } from "react";

export type user={
Name:string
Avater:string
}

export const UserContext =createContext<user>({} as user);