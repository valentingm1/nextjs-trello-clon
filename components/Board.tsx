"use client";

import { useBoardStore } from "@/store/BoardStorage"
import { useEffect } from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd"


function Board() {
    const getBoard = useBoardStore((state) => state.getBoard)

    useEffect(() =>(
        getBoard()
    ),[getBoard])

  return (
    <h1>a</h1>
    /* <DragDropContext>
        <Droppable droppableId="board" direction="horizontal" type="column">
            {(provided) => <div>Hola</div>}
        </Droppable>
    </DragDropContext> */
  )
}

export default Board