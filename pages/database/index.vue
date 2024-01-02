<script lang="ts" setup>
import Loader from "~/components/Loader.vue";
import {useDatabaseStore} from "~/stores/useDatabaseStore";

const databaseStore = useDatabaseStore()
databaseStore.getCredentials()
</script>

<template>
  <div class="grid grid-cols-3">
    <div>
      <UICard>
        <UICardHeader>
          <UICardTitle>Connect To Database</UICardTitle>
        </UICardHeader>
        <UICardContent>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <UILabel>User Name</UILabel>
              <UIInput v-model="databaseStore.form.username"/>
            </div>
            <div>
              <UILabel>Password</UILabel>
              <UIInput type="password" v-model="databaseStore.form.password"/>
            </div>
            <div>
              <UILabel>Database</UILabel>
              <UIInput v-model="databaseStore.form.database"/>
            </div>
            <div>
              <UILabel>Namespace</UILabel>
              <UIInput v-model="databaseStore.form.namespace"/>
            </div>
            <div class="col-span-full">
              <UILabel>Host URL</UILabel>
              <UIInput v-model="databaseStore.form.host"/>
            </div>
            <div>
              <UIButton
                  @click.prevent="databaseStore.connectToDatabase"><span v-if="!databaseStore.isLoading">Connect
              </span><span
                  v-else><Loader/>
              </span></UIButton>
            </div>
          </div>
        </UICardContent>
      </UICard>
    </div>
  </div>

</template>

<style scoped></style>
