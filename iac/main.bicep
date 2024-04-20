
param location string = resourceGroup().location

resource aspResource 'Microsoft.Web/serverfarms@2022-03-01' = {
  name: 'kt-craft-asp'
  location: location
  sku: {
    name: 'F1'
  }
  kind: 'linux'
}
