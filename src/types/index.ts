import { ThemeState } from "styles/theme/slice/types";

export interface RootState {
  theme?: ThemeState;
  store?: {
    data: Record<string, number>,
    loading: boolean;
    error: null;
  };
}
