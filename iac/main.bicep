param dockerHubUsername string

param dockerHubToken string

param dockerHubRegistryUrl string

param location string = resourceGroup().location

resource aspResource 'Microsoft.Web/serverfarms@2022-03-01' = {
  name: 'kt-craft-asp'
  location: location
  properties: {
    reserved: true
  }
  sku: {
    name: 'F1'
  }
  kind: 'linux'
}

resource webApp 'Microsoft.Web/sites@2022-09-01' = {
  name: 'kt-craft-app'
  location: location
  kind: 'linux'
  properties: {
    httpsOnly: true
    serverFarmId: aspResource.id
    siteConfig: {
      linuxFxVersion: 'Docker|jamessampica/ktcraft:latest'
      alwaysOn: false
      appSettings: [
        {
          name: 'DOTNET_ENVIRONMENT'
          value: 'Production'
        }
        {
          name: 'DOCKER_ENABLE_CI'
          value: 'true'
        }
        {
          name: 'DOCKER_REGISTRY_SERVER_URL'
          value: dockerHubRegistryUrl
        }
        {
          name: 'DOCKER_REGISTRY_SERVER_USERNAME'
          value: dockerHubUsername
        }
        {
          name: 'DOCKER_REGISTRY_SERVER_PASSWORD'
          value: dockerHubToken
        }
      ]
    }
  }
}
