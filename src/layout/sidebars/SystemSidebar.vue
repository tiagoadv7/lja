<template>
  <v-navigation-drawer
    v-model="$root.sidebar.geral"
    absolute
    left
    temporary
    :width="width"
    :dark="$root.data.layout.dark"
  >
    <v-tabs
      vertical
      v-model="active_menu"
      :color="$root.data.layout.color"
      :dark="$root.data.layout.dark"
    >
      <v-tab
        v-for="(m, index) in menu_list"
        :key="m.tab"
        style="justify-content: start"
        :data-id="index"
        @click="action(m)"
      >
        <v-icon left> {{ m.icon }} </v-icon>
        {{ m.tab }}
      </v-tab>

      <v-tabs-items v-model="active_menu" :dark="$root.data.layout.dark">
        <v-tab-item v-for="m in menu" :key="m.tab">
          <!--<div v-if="m.component">-->
          <div class="text-h6 mt-3">
            {{ m.tab }}
          </div>
          <v-divider class="my-3"></v-divider>
          <component v-bind="menu" :is="m.component"></component>
          <!--  </div>-->
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      active_menu: 0,
      width_menu_min: "192px",
      width_menu_open: "490px",
      menu: [
        {
          tab: "Configurações",
          icon: "mdi-account",
          component: "config",
          //width: "95%",
        },
        {
          tab: "Aparência",
          icon: "mdi-palette",
          component: "themes",
        },
        {
          tab: "Transmissão",
          icon: "mdi-access-point",
          //content: "server",
          component: "themes",
        },
        {
          tab: "Loja",
          icon: "mdi-store",
          click: "this.store()",
          desktop: true,
        },
        {
          tab: "Banco de Dados",
          icon: "mdi-database",
          component: "database",
          desktop: true,
        },
      ],
    };
  },
  computed: {
    width: function () {
      return this.menu[this.active_menu].component
        ? this.menu[this.active_menu].width || this.width_menu_open
        : this.width_menu_min;
    },
    desktop: function(){
      return this.$root.desktop;
    },
    menu_list: function (id_categoria) {
      return this.desktop
        ? this.menu
        : this.menu.filter((menu) => !menu.desktop);
    },
  },
  components: {
    config: () => import(`./partials/Config`),
    themes: () => import(`./partials/Themes`),
    database: () => import(`./partials/DataBase`),
  },
  methods: {
    action: function (item) {
      if (item.click) {
        var self = this;
        setTimeout(() => {
          self.active_menu = 0;
        }, 100);
        this.$root.sidebar.geral = false;
        eval(item.click);
      }
    },
    store: function () {
      this.$root.$data.store.show = true
    },
  },
};
</script>