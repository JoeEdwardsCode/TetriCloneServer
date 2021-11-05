import { APIGatewayProxyHandler } from 'aws-lambda';

export const main: APIGatewayProxyHandler = async (event): Promise<any> => {
    return {
        body: JSON.stringify({
            message: "Pong!",
        }),
        headers: {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : true
        },
        statusCode: 200,
    };
}