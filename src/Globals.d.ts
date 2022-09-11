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

export enum VariantEnum { left = 'LEFT', right = 'RIGHT', bottom = 'BOTTOM', undefined = 'UNDEFINED'}

export type DrawerState = {
  variant?: string | string[] | VariantEnum | VariantEnum[] | undefined
}

/**
 * This is going to be the whole apps state.*/
export interface AppState {
  dateTime: string;
  loggedIn: boolean;
  drawer: DrawerState | DrawerState[];
  user: UserType;
}
