declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}

/**
 * User Object */
export type UserType = {
  firstName: string;
  lastName: string;
  UUID: string;
}

/**
 * This is going to be the whole apps state.*/
export interface AppState {
  user: UserType;
  loggedIn: boolean;
}