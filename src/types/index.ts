import { ThemeState } from "slices/theme/types";

export interface RootState {
  theme?: ThemeState;
  store?: {
    data: Record<string, number>,
    loading: boolean;
    error: null;
  };
}
