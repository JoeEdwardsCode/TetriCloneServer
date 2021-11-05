export const main = async (event: any = {}): Promise<any> => {
    return {
        body: JSON.stringify({
            message: "Pong!"
        }),
        headers: {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : true
        },
        statusCode: 200,
    };
}