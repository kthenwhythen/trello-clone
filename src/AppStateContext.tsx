import React, { createContext, useContext } from 'react';


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
            tasks: [{ id: 'c0', text: 'Generate app scaffold' }]
        },
        {
            id: '1',
            text: 'In Progress',
            tasks: [{ id: 'c2', text: 'Learn TypeScript' }]
        },
        {
            id: '2',
            text: 'Done',
            tasks: [{ id: 'c3', text: 'Begin to use static typing' }]
        },
    ]
}


type AppStateContextProps = {
    state: AppState
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)


export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <AppStateContext.Provider value={{ state: appData }}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}
