//create a an app insights module
module appInsights 'app-insights.bicep' = {
  name: '${deployment().name}--app-insights'
  params: {
    location: location
    containerAppsEnvName: containerAppsEnvName
  }
}

//create a sql server module
module sqlServer 'sql-server.bicep' = {
  name: '${deployment().name}--sql-server'
  params: {
    location: location
    containerAppsEnvName: containerAppsEnvName
  }
}



