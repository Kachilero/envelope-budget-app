import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";

/**
 * Hooks to be used instead of plain `useDispatch` and `useSelector`
 * These have been modified to avoid circular inputs
 * @link https://redux.js.org/usage/usage-with-typescript#define-typed-hooks
 * */
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
