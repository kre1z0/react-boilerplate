type Reducer<TStore, TType> = (state: TStore, action: IAction<TType>) => TStore;

type ValueOf<T> = T[keyof T];
