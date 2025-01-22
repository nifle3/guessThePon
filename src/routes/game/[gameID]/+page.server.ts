import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params } : {params: {gameID: string}}) =>{
    return {
        title: "Hello world!",
        content: `Welcome to our game with id ${params.gameID}`,
    }
}
