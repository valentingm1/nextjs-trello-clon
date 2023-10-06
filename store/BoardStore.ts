import {create} from "zustand"
import { getTodosGroupedByColumn } from "@/lib/getTodosGroupedByColumn";
import { databases, storage } from "@/appwrite";

interface BoardState {
    board: Board;
    getBoard: () => void;
    setBoardState: (board: Board) => void;
    updateTodoInDb: (todo: Todo, columnId: TypedColumn) => void;
    newTaskInput: string;
    newTaskType: TypedColumn;

    searchString:string;
    setSearchString: (searchString: string) => void;

    deleteTask: (taskIndex: number, todo: Todo, id:TypedColumn) => void;

    setNewTaskInput: (input: string) => void;
    setNewTaskType: (columnId: TypedColumn) => void;
}

export const useBoardStore = create<BoardState>((set,get) => ({
    board: {
        columns: new Map<TypedColumn, Column>()   
    },
    
    getBoard: async() => {
        const board = await getTodosGroupedByColumn()
        set({board})
    },
    setBoardState: (board) => set({board}),

    updateTodoInDb: async (todo, columnId) => {
        await databases.updateDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
            todo.$id,
            {
                title: todo.title,
                status: columnId,
            }
        )
    },
    searchString: "",
    setSearchString: (searchString) => set({searchString}),

    deleteTask: async (taskIndex: number, todo: Todo, id:TypedColumn) => {
        const newCols = new Map(get().board.columns)

        newCols.get(id)?.todos.splice(taskIndex,1)

        set({board: {columns: newCols}})

        if(todo.image){
            await storage.deleteFile(todo.image.bucketId, todo.image.fileId)
        }

        await databases.deleteDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
            todo.$id
        )
    },
    newTaskInput:"",
    setNewTaskInput: (input: string) => set ({newTaskInput: input}),

    newTaskType: "ToDo",
    setNewTaskType: (columnId: TypedColumn) => set ({newTaskType: columnId}),

}))