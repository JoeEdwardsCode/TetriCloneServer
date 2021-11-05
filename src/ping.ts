export const main = async (event: any = {}): Promise<any> => {
    return {
        body: JSON.stringify({
            message: "Pong!"
        }),
        statusCode: 200,
    };
}