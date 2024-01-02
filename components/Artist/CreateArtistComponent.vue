<script lang="ts" setup>

import type {Artist} from "~/types";

const isOpen = ref(false)

const artist = ref<Artist>({
  address: {
    address_line_1: "",
    address_line_2: "",
    city: "",
    country: "",
    coordinates: [0, 0],
    post_code: "",
  },
  company_name: "",
  email: "",
  first_name: "",
  last_name: "",
  phone: "",
  name: ""
})
const artistsStore = useArtistsStore()
</script>

<template>
  <div>
    <UIDialog :is-open="isOpen">
      <UIDialogTrigger as-child>
        <UIButton variant="outline" @click.prevent="isOpen = true">
          Create Artist
        </UIButton>
      </UIDialogTrigger>
      <UIDialogContent class="sm:max-w-[425px]">
        <UIDialogHeader>
          <UIDialogTitle>Create Artist</UIDialogTitle>
          <UIDialogDescription>
            Create a new Artist
          </UIDialogDescription>
        </UIDialogHeader>
        <div class="grid grid-cols-2 gap-4 py-4">
          <div>
            <UILabel>Address Line 1</UILabel>
            <UIInput v-model="artist.address.address_line_1"/>
          </div>
          <div>
            <UILabel>Address Line 2</UILabel>
            <UIInput v-model="artist.address.address_line_2"/>
          </div>
          <div>
            <UILabel>City</UILabel>
            <UIInput v-model="artist.address.city"/>
          </div>
          <div>
            <UILabel>Country</UILabel>
            <UIInput v-model="artist.address.country"/>
          </div>
          <div>
            <UILabel>Coordinates</UILabel>
            <UIInput v-model="artist.address.coordinates"/>
          </div>
          <div>
            <UILabel>Postal Code</UILabel>
            <UIInput v-model="artist.address.post_code"/>
          </div>
          <div>
            <UILabel>Company Name</UILabel>
            <UIInput v-model="artist.company_name"/>
          </div>
          <div>
            <UILabel>Email</UILabel>
            <UIInput v-model="artist.email"/>
          </div>
          <div>
            <UILabel>First Name</UILabel>
            <UIInput v-model="artist.first_name"/>
          </div>
          <div>
            <UILabel>Last Name</UILabel>
            <UIInput v-model="artist.last_name"/>
          </div>
          <div>
            <UILabel>Phone Number</UILabel>
            <UIInput v-model="artist.phone"/>
          </div>

        </div>
        <UIDialogFooter>
          <UIButton @click.prevent="artistsStore.createArtist(artist)">
            Save changes
          </UIButton>
        </UIDialogFooter>
      </UIDialogContent>
    </UIDialog>
  </div>
</template>

<style scoped></style>
