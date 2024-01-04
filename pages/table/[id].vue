<script lang="ts" setup>
import type {TableInfo} from "~/types";

const tableName = useRoute().params.id
const tableInfos = ref<TableInfo[]>([])

const getTableInfo = async () => {
  const {data} = await useFetch(`/api/info/table/${tableName}`)
  // @ts-ignore
  tableInfos.value = data.value?.data
}
getTableInfo()
</script>

<template>
  <div>
    <UICard>
      <UICardHeader>
        <UICardTitle>Table Name: {{ tableName.toString().toUpperCase() }}</UICardTitle>
      </UICardHeader>
    </UICard>
    <div class="grid grid-cols-3 gap-4" v-for="(tableInfo, index) in tableInfos" :key="index">
      <UICard>
        <UICardHeader>
          <UICardTitle>Fields</UICardTitle>
        </UICardHeader>
        <UICardContent>
          <div class="grid grid-cols-1 items-start" v-for="(fieldCode, fieldName) in tableInfo.fields" :key="fieldName">
            <div class="space-y-1">
              <p>
                <span class="font-semibold text-xl"> {{ fieldName.toString().toUpperCase() }}</span>
              </p>
              <p>
                <span class="text-sm text-muted-foreground">
                <code>{{ fieldCode }}</code>
              </span>
              </p>
            </div>
          </div>
        </UICardContent>
      </UICard>
      <UICard>
        <UICardHeader>
          <UICardTitle>Tables</UICardTitle>
        </UICardHeader>
        <UICardContent>
          <div class="grid grid-cols-1 items-start" v-for="(tableCode, tableName) in tableInfo.tables" :key="tableName">
            <div class="space-y-1">
              <p>
                <span class="font-semibold text-xl"> {{ tableName.toString().toUpperCase() }}</span>
              </p>
              <p>
                <span class="text-sm text-muted-foreground">
                <code>{{ tableCode }}</code>
              </span>
              </p>
            </div>
          </div>
        </UICardContent>
      </UICard>
      <UICard>
        <UICardHeader>
          <UICardTitle>LIVES</UICardTitle>
        </UICardHeader>
        <UICardContent>
          <div class="grid grid-cols-1 items-start" v-for="(livesCode, livesName) in tableInfo.lives" :key="livesName">
            <div class="space-y-1">
              <p>
                <span class="font-semibold text-xl"> {{ livesName.toString().toUpperCase() }}</span>
              </p>
              <p>
                <span class="text-sm text-muted-foreground">
                <code>{{ livesCode }}</code>
              </span>
              </p>
            </div>
          </div>
        </UICardContent>
      </UICard>
      <UICard>
        <UICardHeader>
          <UICardTitle>Indexes</UICardTitle>
        </UICardHeader>
        <UICardContent>
          <div class="grid grid-cols-1 items-start" v-for="(indexCode, indexName) in tableInfo.indexes" :key="indexName">
            <div class="space-y-1">
              <p>
                <span class="font-semibold text-xl"> {{ indexName.toString().toUpperCase() }}</span>
              </p>
              <p>
                <span class="text-sm text-muted-foreground">
                <code>{{ indexCode }}</code>
              </span>
              </p>
            </div>
          </div>
        </UICardContent>
      </UICard>
      <UICard>
        <UICardHeader>
          <UICardTitle>Events</UICardTitle>
        </UICardHeader>
        <UICardContent>
          <div class="grid grid-cols-1 items-start" v-for="(eventsCode, eventsName) in tableInfo.events" :key="eventsName">
            <div class="space-y-1">
              <p>
                <span class="font-semibold text-xl"> {{ eventsName.toString().toUpperCase() }}</span>
              </p>
              <p>
                <span class="text-sm text-muted-foreground">
                <code>{{ eventsCode }}</code>
              </span>
              </p>
            </div>
          </div>
        </UICardContent>
      </UICard>
    </div>
  </div>
</template>

<style scoped></style>
