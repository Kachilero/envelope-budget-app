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

export type DrawerState = {
  bottomDrawerOpen: boolean;
  leftDrawerOpen: boolean;
  rightDrawerOpen: boolean;
  variant?: 'left' | 'right' | 'bottom' | undefined;
}

/**
 * This is going to be the whole apps state.*/
export interface AppState {
  dateTime: string;
  loggedIn: boolean;
  drawer: DrawerState;
  user: UserType;
}
