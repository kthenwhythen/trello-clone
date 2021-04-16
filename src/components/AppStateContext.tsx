import { createContext, Dispatch, useContext, useReducer } from 'react'
import { nanoid } from 'nanoid'
import { findItemIndexById } from '../utils/arrayUtils'

// Data
type Task = {
    id: string
    text: string
}

type List = {
    id: string
    text: string
    tasks: Task[]
}

export type AppState = {
    lists: List[]
}

const appData: AppState = {
    lists: [
        {
            id: '0',
            text: 'To Do',
            tasks: [{ id: 'c0', text: 'Generate app scaffold' }],
        },
        {
            id: '1',
            text: 'In Progress',
            tasks: [{ id: 'c2', text: 'Learn TypeScript' }],
        },
        {
            id: '2',
            text: 'Done',
            tasks: [{ id: 'c3', text: 'Begin to use static typing' }],
        },
    ],
}

// Actions
type Action =
    | {
          type: 'ADD_LIST'
          payload: string
      }
    | {
          type: 'ADD_TASK'
          payload: { text: string; listId: string }
      }

// Reducers
const appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case 'ADD_LIST': {
            return {
                ...state,
                lists: [
                    ...state.lists,
                    { id: nanoid(), text: action.payload, tasks: [] },
                ],
            }
        }
        case 'ADD_TASK': {
            const targetLaneIndex = findItemIndexById(
                state.lists,
                action.payload.listId
            )
            state.lists[targetLaneIndex].tasks.push({
                id: nanoid(),
                text: action.payload.text,
            })
            return {
                ...state,
            }
        }
        default: {
            return state
        }
    }
}

// Context
type AppStateContextProps = {
    state: AppState
    dispatch: Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
)

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(appStateReducer, appData)

    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}
