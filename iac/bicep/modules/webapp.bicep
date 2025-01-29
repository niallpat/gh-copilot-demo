param location string = resourceGroup().location
param appServicePlanName string
param webAppName string
param skuName string = 'F1'
param skuTier string = 'Free'

resource appServicePlan 'Microsoft.Web/serverfarms@2021-02-01' = {
  name: appServicePlanName
  location: location
  sku: {
    name: skuName
    tier: skuTier
  }
  properties: {
    reserved: false
  }
}

resource webApp 'Microsoft.Web/sites@2021-02-01' = {
  name: webAppName
  location: location
  properties: {
    serverFarmId: appServicePlan.id
  }
}

output webAppEndpoint string = 'https://${webAppName}.azurewebsites.net'
