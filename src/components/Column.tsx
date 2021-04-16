import { useAppState } from './AppStateContext'
import { ColumnContainer, ColumnTitle } from '../styles'
import { AddNewItem } from './AddNewItem'
import { Card } from './Card'

type ColumnProps = {
    text: string
    index: number
    id: string
}

export const Column = ({ text, index, id }: ColumnProps) => {
    const { state } = useAppState()

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {state.lists[index].tasks.map((task, id) => (
                <Card text={task.text} key={task.id} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={(text) => console.log(text)}
                dark
            />
        </ColumnContainer>
    )
}
