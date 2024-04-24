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
  kind: 'app,linux,container'
  properties: {
    httpsOnly: true
    serverFarmId: aspResource.id
    siteConfig: {
      alwaysOn: false
      appSettings: [
        {
          name: 'DOTNET_ENVIRONMENT'
          value: 'Production'
        }
        {
          name: 'WEBSITE_ADD_SITENAME_BINDINGS_IN_APPHOST_CONFIG'
          value: '1'
        }
        {
          name: 'WEBSITE_RUN_FROM_PACKAGE'
          value: '1'
        }
      ]
    }
  }
}
