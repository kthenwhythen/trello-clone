import { useAppState } from "./AppStateContext";
import { Column } from './components/Column'
import { AddNewItem } from './components/AddNewItem'
import { AppContainer } from './styles'


export const App = () => {
	const { state } = useAppState()

	return (
		<AppContainer>
			{state.lists.map((list, i) => (
				<Column text={list.text} key={list.id} index={i} />
			))}
			<AddNewItem toggleButtonText="+ Add another list" onAdd={text => console.log(text)} />
		</AppContainer>
	)
}
