interface Board {
    columns: Map<TypedColumn, Column>
}

type TypedColumn = "ToDo" | "WIP" | "Done"

interface Column {
    id: TypedColumn,
    todos: Todo[]
}

interface Todo{
    $id: string,
    $createdAt: string,
    title: string,
    status: string,
    image?: Image,
}

interface Image {
    bucketId: string;
    fileId: string;
}