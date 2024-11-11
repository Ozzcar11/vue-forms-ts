import { type Component, type Plugin } from "vue";

interface GlobModule {
  default: Component;
}

const layouts: Plugin = {
  install(app) {
    const layouts = import.meta.glob<GlobModule>("@/layouts/*.vue", { eager: true });

    for (const layout of Object.values(layouts)) {

      if (layout?.default?.name) app.component(layout.default.name, layout.default);
    }
  },
};

export { layouts };
