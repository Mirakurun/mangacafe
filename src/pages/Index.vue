<template>
  <q-page :padding="view === 'grid'" style="padding-top: 50px">
    <q-table
      class="sticky-table-header"
      card-container-class="q-col-gutter-sm"
      :columns="columns"
      :grid="view === 'grid'"
      :rows="rows"
      :rows-per-page-options="[0]"
      flat
      hide-bottom
      row-key="title"
    >
      <template v-if="view === 'grid'" #item="props">
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <router-link :to="`/manga/${props.row.title}`">
            <q-card class="panel" flat square>
              <q-img contain src="images/Berserk-v1.jpg">
                <div class="absolute-bottom text-subtitle1 text-center">
                  {{ props.row.title }}
                </div>
              </q-img>
            </q-card>
          </router-link>
        </div>
      </template>
    </q-table>

    <search-library v-model:search="search" v-model:view="view" />
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import SearchLibrary from 'components/SearchLibrary.vue';

export default defineComponent({
  name: 'Home',
  components: {
    SearchLibrary,
  },
  setup() {
    const search = ref('');
    const view = ref('grid');

    const columns = [
      { name: 'index', label: '#', field: 'index' },
      { name: 'title', label: 'Title', align: 'left', field: 'title' },
      { name: 'author', label: 'Author(s)', align: 'left', field: 'author' },
      { name: 'artist', label: 'Artist(s)', align: 'left', field: 'artist' },
      { name: 'group', label: 'Group(s)', align: 'left', field: 'group' },
      { name: 'volume', label: 'Volume(s)', align: 'right', field: 'volume' },
      {
        name: 'chapter',
        label: 'Chapter(s)',
        align: 'right',
        field: 'chapter',
      },
      { name: 'date', label: 'Date', align: 'left', field: 'date' },
      { name: 'size', label: 'Size', align: 'right', field: 'size' },
    ];

    const rows = [
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        artist: 'Kentaro Miura',
        volume: '1',
        chapter: '10',
        group: 'tbh',
        date: 'date',
        size: '1 GB',
      },
    ];

    rows.forEach((row, index) => {
      row.index = index + 1;
    });

    return {
      search,
      columns,
      rows,
      view,
    };
  },
});
</script>

<style lang="scss" scoped>
.panel {
  border: 4px solid $dark;
  cursor: pointer;
}

.sticky-table-header:deep {
  height: calc(100vh - 101px);

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    background: white;
  }

  thead tr th {
    position: sticky;
    z-index: 1;
  }

  thead tr:first-child th {
    top: 0;
  }
}
</style>
