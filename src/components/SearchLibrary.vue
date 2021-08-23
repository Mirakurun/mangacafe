<template>
  <q-page-sticky expand position="top">
    <q-toolbar class="bg-white">
      <div class="col q-mr-sm">
        <q-input
          v-model="searchValue"
          clearable
          dense
          borderless
          clear-icon="fas fa-times"
          color="dark"
          input-class="ww"
          placeholder="Search..."
          @clear="searchValue = ''"
        >
          <template #prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>

      <q-btn-toggle
        v-model="viewValue"
        flat
        text-color="grey"
        toggle-color="primary"
        :options="viewOptions"
      >
        <template #grid>
          <q-tooltip class="bg-dark text-white shadow-4" :offset="[10, 10]">
            Grid view
          </q-tooltip>
        </template>

        <template #list>
          <q-tooltip class="bg-dark text-white shadow-4" :offset="[10, 10]">
            List view
          </q-tooltip>
        </template>
      </q-btn-toggle>

      <q-separator class="q-mx-sm" vertical inset />

      <q-btn flat round icon="fas fa-file-import" text-color="grey">
        <q-tooltip class="bg-dark text-white shadow-4" :offset="[10, 10]">
          Import manga
        </q-tooltip>
      </q-btn>
    </q-toolbar>
  </q-page-sticky>
</template>

<script>
import { computed, toRefs } from 'vue';

export default {
  name: 'SearchLibrary',
  props: {
    search: {
      type: String,
      required: true,
    },
    view: {
      type: String,
      required: true,
    },
  },
  emits: ['update:search', 'update:view'],
  setup(props, { emit }) {
    const { search, view } = toRefs(props);

    const viewOptions = [
      { icon: 'fas fa-th', value: 'grid', slot: 'grid' },
      { icon: 'fas fa-list', value: 'list', slot: 'list' },
    ];

    const searchValue = computed({
      get() {
        return search.value;
      },
      set(value) {
        emit('update:search', value);
      },
    });

    const viewValue = computed({
      get() {
        return view.value;
      },
      set(value) {
        emit('update:view', value);
      },
    });

    return {
      searchValue,
      viewOptions,
      viewValue,
    };
  },
};
</script>
