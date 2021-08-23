<template>
  <q-page padding class="manga-index">
    <div class="row q-mb-md">
      <div class="col-4">
        <q-img
          contain
          style="max-width: 400px"
          src="images/Berserk-v1.jpg"
        ></q-img>
      </div>
      <div class="col-8 q-pa-xl">
        <div class="text-h3 q-mb-md">Berserk</div>
        <table style="font-size: 24px">
          <tr>
            <td class="text-bold text-right q-pa-sm">Authors</td>
            <td class="q-pa-sm">Kentaro Miura</td>
          </tr>
          <tr>
            <td class="text-bold text-right q-pa-sm">Artists</td>
            <td class="q-pa-sm">Kentaro Miura</td>
          </tr>
          <tr>
            <td class="text-bold text-right q-pa-sm">Groups</td>
            <td class="q-pa-sm">tbh</td>
          </tr>
          <tr>
            <td class="text-bold text-right q-pa-sm">Volumes</td>
            <td class="q-pa-sm">1</td>
          </tr>
          <tr>
            <td class="text-bold text-right q-pa-sm">Chapters</td>
            <td class="q-pa-sm">10</td>
          </tr>
          <tr>
            <td class="text-bold text-right q-pa-sm">Published</td>
            <td class="q-pa-sm">1989</td>
          </tr>
          <tr>
            <td class="text-bold text-right q-pa-sm">Summary</td>
            <td class="q-pa-sm">Best manga ever</td>
          </tr>
        </table>
      </div>
    </div>

    <q-table flat class="sticky-top" :columns="columns"></q-table>

    <div class="text-h1">x</div>

    <div class="text-h1">x</div>
    <div class="text-h1">x</div>
    <div class="text-h1">x</div>
    <div class="text-h1">x</div>
    <div class="text-h1">x</div>

    <div class="text-h1">x</div>

    <div class="text-h1">x</div>
    <div class="text-h1">x</div>
  </q-page>
</template>

<script>
export default {
  name: 'MangaIndex',
  setup() {
    const columns = [
      { name: 'volume', label: 'Volume', field: 'volume' },
      { name: 'chapter', label: 'Chapter', field: 'chapter' },
      { name: 'title', label: 'Title', align: 'left', field: 'title' },
      { name: 'group', label: 'Groups', align: 'left', field: 'group' },
      {
        name: 'last_updated',
        label: 'Last Updated',
        field: 'last_updated',
      },
    ];

    return {
      columns,
    };
  },
};
</script>

<style lang="scss" scoped>
.manga-index {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 51px;
  z-index: 1020;
}
</style>
