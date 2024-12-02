
param (
    [string]$resourceGroupName,
    [string]$templateFilePath = "arm.json",
    [string]$location = "eastus",
    [string]$storageAccountName
)

# Login to Azure
az login

# Create resource group
az group create --name $resourceGroupName --location $location

# Deploy ARM template
az deployment group create `
  --resource-group $resourceGroupName `
  --template-file $templateFilePath `
  --parameters storageAccountName=$storageAccountName