import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';

export class TetriCloneServerStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // API GW
    const api = new apigateway.RestApi(this, 'Endpoint', {
      restApiName: "TetriClone API"
    });

    // Functions
    const pingLambda = new lambda.Function(this, 'pingHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('src'),
      handler: './ping.main'
    });

    // Function Integratrions
    const pingIntegration = new apigateway.LambdaIntegration(pingLambda);

    // API GW Resources/Methods
    const apiResource = api.root.addResource("api");

    const pingResource = apiResource.addResource("ping");
    pingResource.addMethod("GET", pingIntegration);
  }
}
