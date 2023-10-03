import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {todos} = await request.json()

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: "system",
                content: "Cuando respondas, siempre dale la bienvenida al usuario, y -SIEMPRE- utilizá un fuerte acento rioplatense. Limitar la respuesta a 200 caracteres"
            },
            {
                role: "user",
                content: `Hola, dame un resumen de las siguientes tareas. Cuantas tareas hay en las categorias 'To Do' 'WIP(Work In Progress)' y 'Done', después deseale al usuario un día productivo. Acá está la data: ${JSON.stringify(todos)}`
            }
        ]
    });
    
    console.log("Response:", response)
    console.log(response.choices[0].message)

    return NextResponse.json(response.choices[0].message)
}