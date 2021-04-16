import { useDrag, DragSourceMonitor } from 'react-dnd'
import { useAppState } from './components/AppStateContext'
import { DragItem } from './DragItem'

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState()
  const [, drag] = useDrag({
    type: 'TASK',
    item: () =>
      dispatch({
        type: 'SET_DRAGGED_ITEM',
        payload: item,
      }),
    end: () =>
      dispatch({
        type: 'SET_DRAGGED_ITEM',
        payload: undefined,
      }),
  })
  return { drag }
}
