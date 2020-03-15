import {
    TypedUseSelectorHook,
    useSelector as useReduxSelector
} from "react-redux";
import { AppState } from "../reducers";

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
