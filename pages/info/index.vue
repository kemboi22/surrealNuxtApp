<script lang="ts" setup>
import type {DatabaseConnection, DatabaseInfo, NamespaceInfo, RootInfo} from "~/types";

const root = ref<RootInfo[]>([])
const namespaces = ref<NamespaceInfo[]>([])
const databases = ref<DatabaseInfo[]>([])
const credentials = ref<DatabaseConnection>(<DatabaseConnection>{})
const getInfo = async () => {
  const {data} = await useFetch('/api/info')
  // @ts-ignore
  root.value = data.value?.data.root
  // @ts-ignore
  namespaces.value = data.value?.data.namespace
  // @ts-ignore
  databases.value = data.value?.data.database
  // @ts-ignore
  credentials.value = data.value?.data.credentials
}
getInfo()
</script>

<template>
  <div>
    <div class="grid grid-cols-3 gap-4">
      <UICard v-for="(namespace, index) in namespaces" :key="index">
        <UICardHeader>
          <UICardTitle>Namespace Name: {{credentials.namespace}}</UICardTitle>
        </UICardHeader>
        <UICardContent>
          <div>
            <p v-for="(databaseName, databaseValue) in namespace.databases" :key="databaseName">
              {{ databaseName }}: {{ databaseValue }}
            </p>
          </div>
        </UICardContent>
      </UICard>
      <UICard v-for="(database, index) in databases" :key="index">
        <UICardHeader>
          <UICardTitle>Database Name: {{credentials.database}}</UICardTitle>
        </UICardHeader>
        <UICardContent>
          <div>
            <p v-for="(tableName, tableValue) in database.tables" :key="tableName">
              {{ tableName }}: {{ tableValue }}
            </p>
          </div>
        </UICardContent>
      </UICard>
      <UICard v-for="(rootInfo, index) in root" :key="index">
        <UICardHeader>
          <UICardTitle>Root Info</UICardTitle>
        </UICardHeader>
        <UICardContent>
          <div>
            <p v-for="(namespace, namespaceKey) in rootInfo.namespaces" :key="namespace">
              {{ namespace }}: {{ namespaceKey }}
            </p>
          </div>
        </UICardContent>
      </UICard>
    </div>
  </div>
</template>

<style scoped></style>
