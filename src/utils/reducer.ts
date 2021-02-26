import { fakeAction } from './actions';
import { IState, IAction } from './redux-create-reducer';

type Reducer = (state: IState | undefined, action: IAction) => IState;

type ReduxTestSeqStep = (reducer: Reducer, initialState: IState) => void;

export const cs = (
  testName: string,
  action: IAction,
  expected: IState,
  preparedState: IState = {},
): ReduxTestSeqStep => (reducer, initialState) => {
  test(testName, () => {
    const state = reducer(preparedState, action);
    expect(state).toEqual({ ...initialState, ...expected });
  });
};

export const testReducer = (reducer: Reducer, initialState: IState, testSeq: ReduxTestSeqStep[]) => () => {
  test('should set initial state', () => {
    const state = reducer(undefined, fakeAction());
    expect(state).toBe(initialState);
  });
  testSeq.forEach(f => f(reducer, initialState));
};
