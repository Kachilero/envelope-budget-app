declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}

/**
 * This is going to be the whole apps state.*/
export interface AppState {
  user: object;
  loggedIn: boolean;
}