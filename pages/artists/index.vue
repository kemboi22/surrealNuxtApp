<script lang="ts" setup>
import CreateArtistComponent from "~/components/Artist/CreateArtistComponent.vue";

const artistsStore = useArtistsStore()
artistsStore.getArtists()
</script>

<template>
  <div>
   <div>
     <CreateArtistComponent/>
     <UITable>
       <UITableCaption>A list of your recent Artists.</UITableCaption>
       <UITableHeader>
         <UITableRow>
           <UITableHead class="w-[100px]">
             Id
           </UITableHead>
           <UITableHead>Name</UITableHead>
           <UITableHead>Phone</UITableHead>
           <UITableHead>Email</UITableHead>
           <UITableHead>Country</UITableHead>
           <UITableHead>City </UITableHead>
           <UITableHead>Address Line</UITableHead>
           <UITableHead>Postal Code</UITableHead>
           <UITableHead class="text-right">
             Coordinates
           </UITableHead>
         </UITableRow>
       </UITableHeader>
       <UITableBody>
         <UITableRow v-for="artist in artistsStore.artists" :key="artist.id">
           <UITableCell class="font-medium">
             {{ artist.id }}
           </UITableCell>
           <UITableCell>{{ artist.name }}</UITableCell>
           <UITableCell>{{ artist.phone }}</UITableCell>
           <UITableCell>{{ artist.email }}</UITableCell>
           <UITableCell>{{ artist.address.country }}</UITableCell>
           <UITableCell>{{ artist.address.city }}</UITableCell>
           <UITableCell>{{ artist.address.address_line_1 }}</UITableCell>
           <UITableCell>{{ artist.address.post_code }}</UITableCell>
           <UITableCell class="text-right">
             {{ artist.address.coordinates }}
           </UITableCell>
         </UITableRow>
       </UITableBody>
     </UITable>
   </div>
  </div>
</template>

<style scoped></style>
