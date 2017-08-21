(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function getQueryParams() {
  var params = [];
  var pairs = window.location.search.slice(1).split('&');
  var pair;
  for (var i = 0; i < pairs.length; i++) {
    pair = pairs[i].split('=');
    params[pair[0]] = pair[1];
  }

  return params;
}

function getPlatform() {
  var platform = getQueryParams()['platform'];
  if (platform === 'android' || platform === 'ios') {
    return platform;
  }
  return 'all';
}

var ComponentExample = {
  props: ['component'],
  template: '\n      <div class="page component-example" :class="{\'page--material__background\': isAndroid()}">\n        <div style="width: 100%;" v-html="component.markup"></div>\n      </div>\n    ',
  methods: {
    isAndroid: function isAndroid() {
      return this.component.name.match(/Material/);
    }
  }
};

var PreviewComponent = {
  props: ['component'],
  template: '\n      <div class="component-preview">\n        <a class="title-label" :href="\'/components/\' + component.id">{{component.name}}</a>\n\n        <component-example :component="component" />\n      </div>\n    ',
  components: {
    'component-example': ComponentExample
  }
};

var IndexPage = {
  props: ['components', 'platform'],
  template: '\n    <div class="content">\n      <div class="platform-filter">\n        <a class="platform-filter__link" :class="{\'platform-filter__link--active\': this.platform !== \'ios\' && this.platform !== \'android\'}" href="?">All</a>\n        <a class="platform-filter__link" :class="{\'platform-filter__link--active\': this.platform === \'ios\'}"  href="?platform=ios">iOS</a>\n        <a class="platform-filter__link" :class="{\'platform-filter__link--active\': this.platform === \'android\'}"  href="?platform=android">Android</a>\n      </div>\n\n      <h2 class="content__header">All Components</h2>\n\n      <div class="build-css">\n        <span class="build-css__file">onsen-css-components.css</span>\n        <a class="build-css__button" href="/onsen-css-components.css" @click="download()">Download</a>\n      </div>\n\n      <div class="components">\n        <css-component v-for="component in filterComponents()" :component="component" :key="component.id" />\n      </div>\n    </div>\n  ',
  components: {
    'css-component': PreviewComponent
  },
  methods: {
    download: function download() {
      window.open('/onsen-css-components.css');
    },
    filterComponents: function filterComponents() {
      var components = this.components;
      if (this.platform === 'android') {
        return components.filter(function (component) {
          return component.name.match(/Material/);
        });
      } else if (this.platform === 'ios') {
        return components.filter(function (component) {
          return !component.name.match(/Material/);
        });
      }
      return components;
    }
  }
};

var ComponentPage = {
  props: ['components', 'id'],
  components: {
    'component-example': ComponentExample
  },
  computed: {
    component: function component() {
      var _this = this;

      return this.components.filter(function (component) {
        return component.id === _this.id;
      })[0];
    }
  },
  template: '\n    <div class="content" v-if="component">\n      <div>\n        <h2 class="content__header">{{component.name}}</h2>\n\n        <h3 class="title-label">Example</h3>\n\n        <component-example :component="component" />\n\n        <h3 class="title-label">HTML</h3>\n\n        <pre class="component-markup">{{component.markup}}</pre>\n      </div>\n    </div>\n  '
};

var CategoryPage = {
  props: ['components', 'categories', 'id'],
  template: '\n    <div class="content">\n\n      <h2 class="content__header">{{category.name}} Components</h2>\n\n      <div class="components">\n        <css-component v-for="component in filterComponents()" :component="component" :key="component.id" />\n      </div>\n    </div>\n  ',
  components: {
    'css-component': PreviewComponent
  },
  computed: {
    category: function category() {
      var _this = this;

      return this.categories.filter(function (category) {
        return category.hash === _this.id;
      })[0];
    }
  },
  methods: {
    filterComponents: function filterComponents() {
      var category = this.category;
      var components = this.components.filter(function (component) {
        return component.category === category.name;
      });
      return components;
    }
  }
};

var createAppComponent = function createAppComponent(_ref) {
  var components = _ref.components,
      categories = _ref.categories;
  return {
    el: '#app',
    data: {
      components: components,
      categories: categories
    },
    template: '\n    <div>\n      <div class="side-navi">\n        <a class="side-navi__title" href="/">\n          Onsen<br />\n          CSS<br />\n          Components\n        </a>\n\n        <div class="category-list">\n          <div class="category-list__header">Categories</div>\n          <div v-for="category in categories" class="category-list__item">\n            <a :href="\'/categories/\' + category.hash" class="category-list__item-link">{{category.name}}</a>\n          </div>\n        </div>\n      </div>\n\n      <my-router :base-params="createParams()" />\n    </div>\n  ',
    components: {
      'my-router': createRouter()
    },
    methods: {
      createParams: function createParams() {
        var params = {};

        params.components = [].concat(this.components);
        params.categories = [].concat(this.categories);

        return params;
      }
    }
  };
};

var createRouter = function createRouter() {
  return {
    props: ['baseParams'],
    data: function data() {
      return {
        component: IndexPage,
        params: { platform: getPlatform() }
      };
    },
    created: function created() {
      var _this = this;

      page('*', function (context, next) {
        document.body.scrollTop = document.body.scrollLeft = 0;
        next();
      });

      page('/components/:id', function (context) {
        _this.component = ComponentPage;
        _this.params = context.params;
      });

      page('/categories/:id', function (context) {
        _this.component = CategoryPage;
        _this.params = context.params;
      });

      page('/', function () {
        setTimeout(function () {
          _this.component = IndexPage;
          _this.params = { platform: getPlatform() };
        }, 0);
      });

      page('*', function () {
        page.redirect('/');
      });

      page();
    },
    render: function render(h) {
      var props = {};

      if (this.baseParams) {
        for (var key in this.baseParams) {
          if (this.baseParams.hasOwnProperty(key)) {
            props[key] = this.baseParams[key];
          }
        }
      }

      for (var _key in this.params) {
        if (this.params.hasOwnProperty(_key)) {
          props[_key] = this.params[_key];
        }
      }

      return h(this.component, { props: props });
    }
  };
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function init() {
  var components = makeComponents();
  var categories = makeCategories(components);

  window.components = components;

  var app = new Vue(createAppComponent({
    components: components,
    categories: categories
  }));
}

function makeCategories(components) {
  var set = new Set();
  components.forEach(function (component) {
    set.add(component.category);
  });

  return [].concat(_toConsumableArray(set.values())).map(function (value) {
    return {
      name: value,
      hash: value.toLowerCase().replace(/ /g, '_')
    };
  });
}

function makeComponents() {
  return JSON.parse(document.querySelector('#components-data').textContent).map(function (component) {
    component = component.annotation;
    component.id = component.name.toLowerCase().replace(/ /g, '_');
    return component;
  });
}

window.onload = init;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmdlbi5qcyIsInNvdXJjZXMiOlsiLi4vcHJldmlld2VyLXNyYy91dGlsLmpzIiwiLi4vcHJldmlld2VyLXNyYy9wbGF0Zm9ybS5qcyIsIi4uL3ByZXZpZXdlci1zcmMvY29tcG9uZW50cy9wcmV2aWV3LWNvbXBvbmVudC5qcyIsIi4uL3ByZXZpZXdlci1zcmMvY29tcG9uZW50cy9pbmRleC1wYWdlLmpzIiwiLi4vcHJldmlld2VyLXNyYy9jb21wb25lbnRzL2NvbXBvbmVudC1wYWdlLmpzIiwiLi4vcHJldmlld2VyLXNyYy9jb21wb25lbnRzL2NhdGVnb3J5LXBhZ2UuanMiLCIuLi9wcmV2aWV3ZXItc3JjL2NvbXBvbmVudHMvYXBwLmpzIiwiLi4vcHJldmlld2VyLXNyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVlcnlQYXJhbXMoKSB7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIHBhaXJzID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKS5zcGxpdCgnJicpOyAgICBcbiAgdmFyIHBhaXI7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICBwYXJhbXNbcGFpclswXV0gPSBwYWlyWzFdO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcztcbn1cbiIsImltcG9ydCB7Z2V0UXVlcnlQYXJhbXN9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGF0Zm9ybSgpIHtcbiAgdmFyIHBsYXRmb3JtID0gZ2V0UXVlcnlQYXJhbXMoKVsncGxhdGZvcm0nXTtcbiAgaWYgKHBsYXRmb3JtID09PSAnYW5kcm9pZCcgfHwgcGxhdGZvcm0gPT09ICdpb3MnKSB7XG4gICAgcmV0dXJuIHBsYXRmb3JtO1xuICB9XG4gIHJldHVybiAnYWxsJztcbn1cblxuIiwiXG5leHBvcnQgY29uc3QgQ29tcG9uZW50RXhhbXBsZSA9IHtcbiAgcHJvcHM6IFsnY29tcG9uZW50J10sXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZSBjb21wb25lbnQtZXhhbXBsZVwiIDpjbGFzcz1cInsncGFnZS0tbWF0ZXJpYWxfX2JhY2tncm91bmQnOiBpc0FuZHJvaWQoKX1cIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiIHYtaHRtbD1cImNvbXBvbmVudC5tYXJrdXBcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gIG1ldGhvZHM6IHtcbiAgICBpc0FuZHJvaWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQubmFtZS5tYXRjaCgvTWF0ZXJpYWwvKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBQcmV2aWV3Q29tcG9uZW50ID0ge1xuICBwcm9wczogWydjb21wb25lbnQnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb21wb25lbnQtcHJldmlld1wiPlxuICAgICAgICA8YSBjbGFzcz1cInRpdGxlLWxhYmVsXCIgOmhyZWY9XCInL2NvbXBvbmVudHMvJyArIGNvbXBvbmVudC5pZFwiPnt7Y29tcG9uZW50Lm5hbWV9fTwvYT5cblxuICAgICAgICA8Y29tcG9uZW50LWV4YW1wbGUgOmNvbXBvbmVudD1cImNvbXBvbmVudFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICBjb21wb25lbnRzOiB7XG4gICAgJ2NvbXBvbmVudC1leGFtcGxlJzogQ29tcG9uZW50RXhhbXBsZVxuICB9XG59O1xuXG4iLCJpbXBvcnQge1ByZXZpZXdDb21wb25lbnR9IGZyb20gJy4vcHJldmlldy1jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgSW5kZXhQYWdlID0ge1xuICBwcm9wczogWydjb21wb25lbnRzJywgJ3BsYXRmb3JtJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwbGF0Zm9ybS1maWx0ZXJcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJwbGF0Zm9ybS1maWx0ZXJfX2xpbmtcIiA6Y2xhc3M9XCJ7J3BsYXRmb3JtLWZpbHRlcl9fbGluay0tYWN0aXZlJzogdGhpcy5wbGF0Zm9ybSAhPT0gJ2lvcycgJiYgdGhpcy5wbGF0Zm9ybSAhPT0gJ2FuZHJvaWQnfVwiIGhyZWY9XCI/XCI+QWxsPC9hPlxuICAgICAgICA8YSBjbGFzcz1cInBsYXRmb3JtLWZpbHRlcl9fbGlua1wiIDpjbGFzcz1cInsncGxhdGZvcm0tZmlsdGVyX19saW5rLS1hY3RpdmUnOiB0aGlzLnBsYXRmb3JtID09PSAnaW9zJ31cIiAgaHJlZj1cIj9wbGF0Zm9ybT1pb3NcIj5pT1M8L2E+XG4gICAgICAgIDxhIGNsYXNzPVwicGxhdGZvcm0tZmlsdGVyX19saW5rXCIgOmNsYXNzPVwieydwbGF0Zm9ybS1maWx0ZXJfX2xpbmstLWFjdGl2ZSc6IHRoaXMucGxhdGZvcm0gPT09ICdhbmRyb2lkJ31cIiAgaHJlZj1cIj9wbGF0Zm9ybT1hbmRyb2lkXCI+QW5kcm9pZDwvYT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aDIgY2xhc3M9XCJjb250ZW50X19oZWFkZXJcIj5BbGwgQ29tcG9uZW50czwvaDI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJidWlsZC1jc3NcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJidWlsZC1jc3NfX2ZpbGVcIj5vbnNlbi1jc3MtY29tcG9uZW50cy5jc3M8L3NwYW4+XG4gICAgICAgIDxhIGNsYXNzPVwiYnVpbGQtY3NzX19idXR0b25cIiBocmVmPVwiL29uc2VuLWNzcy1jb21wb25lbnRzLmNzc1wiIEBjbGljaz1cImRvd25sb2FkKClcIj5Eb3dubG9hZDwvYT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29tcG9uZW50c1wiPlxuICAgICAgICA8Y3NzLWNvbXBvbmVudCB2LWZvcj1cImNvbXBvbmVudCBpbiBmaWx0ZXJDb21wb25lbnRzKClcIiA6Y29tcG9uZW50PVwiY29tcG9uZW50XCIgOmtleT1cImNvbXBvbmVudC5pZFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY29tcG9uZW50czoge1xuICAgICdjc3MtY29tcG9uZW50JzogUHJldmlld0NvbXBvbmVudFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZG93bmxvYWQoKSB7XG4gICAgICB3aW5kb3cub3BlbignL29uc2VuLWNzcy1jb21wb25lbnRzLmNzcycpO1xuICAgIH0sXG4gICAgZmlsdGVyQ29tcG9uZW50cygpIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHM7XG4gICAgICBpZiAodGhpcy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmZpbHRlcihmdW5jdGlvbihjb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gY29tcG9uZW50Lm5hbWUubWF0Y2goL01hdGVyaWFsLyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXRmb3JtID09PSAnaW9zJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cy5maWx0ZXIoZnVuY3Rpb24oY29tcG9uZW50KSB7XG4gICAgICAgICAgcmV0dXJuICFjb21wb25lbnQubmFtZS5tYXRjaCgvTWF0ZXJpYWwvKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQge0NvbXBvbmVudEV4YW1wbGV9IGZyb20gJy4vcHJldmlldy1jb21wb25lbnQuanMnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50UGFnZSA9IHtcbiAgcHJvcHM6IFsnY29tcG9uZW50cycsICdpZCddLFxuICBjb21wb25lbnRzOiB7XG4gICAgJ2NvbXBvbmVudC1leGFtcGxlJzogQ29tcG9uZW50RXhhbXBsZVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvbXBvbmVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGNvbXBvbmVudCA9PiBjb21wb25lbnQuaWQgPT09IHRoaXMuaWQpWzBdO1xuICAgIH1cbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiIHYtaWY9XCJjb21wb25lbnRcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzcz1cImNvbnRlbnRfX2hlYWRlclwiPnt7Y29tcG9uZW50Lm5hbWV9fTwvaDI+XG5cbiAgICAgICAgPGgzIGNsYXNzPVwidGl0bGUtbGFiZWxcIj5FeGFtcGxlPC9oMz5cblxuICAgICAgICA8Y29tcG9uZW50LWV4YW1wbGUgOmNvbXBvbmVudD1cImNvbXBvbmVudFwiIC8+XG5cbiAgICAgICAgPGgzIGNsYXNzPVwidGl0bGUtbGFiZWxcIj5IVE1MPC9oMz5cblxuICAgICAgICA8cHJlIGNsYXNzPVwiY29tcG9uZW50LW1hcmt1cFwiPnt7Y29tcG9uZW50Lm1hcmt1cH19PC9wcmU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufTtcbiIsImltcG9ydCB7UHJldmlld0NvbXBvbmVudH0gZnJvbSAnLi9wcmV2aWV3LWNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDYXRlZ29yeVBhZ2UgPSB7XG4gIHByb3BzOiBbJ2NvbXBvbmVudHMnLCAnY2F0ZWdvcmllcycsICdpZCddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG5cbiAgICAgIDxoMiBjbGFzcz1cImNvbnRlbnRfX2hlYWRlclwiPnt7Y2F0ZWdvcnkubmFtZX19IENvbXBvbmVudHM8L2gyPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29tcG9uZW50c1wiPlxuICAgICAgICA8Y3NzLWNvbXBvbmVudCB2LWZvcj1cImNvbXBvbmVudCBpbiBmaWx0ZXJDb21wb25lbnRzKClcIiA6Y29tcG9uZW50PVwiY29tcG9uZW50XCIgOmtleT1cImNvbXBvbmVudC5pZFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY29tcG9uZW50czoge1xuICAgICdjc3MtY29tcG9uZW50JzogUHJldmlld0NvbXBvbmVudFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNhdGVnb3J5KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllcy5maWx0ZXIoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaGFzaCA9PT0gdGhpcy5pZClbMF07XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZmlsdGVyQ29tcG9uZW50cygpIHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gdGhpcy5jYXRlZ29yeTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY2F0ZWdvcnkgPT09IGNhdGVnb3J5Lm5hbWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH0sXG4gIH1cbn07XG4iLCJpbXBvcnQge2dldFBsYXRmb3JtfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQge0luZGV4UGFnZX0gZnJvbSAnLi9pbmRleC1wYWdlJztcbmltcG9ydCB7Q29tcG9uZW50UGFnZX0gZnJvbSAnLi9jb21wb25lbnQtcGFnZSc7XG5pbXBvcnQge0NhdGVnb3J5UGFnZX0gZnJvbSAnLi9jYXRlZ29yeS1wYWdlJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFwcENvbXBvbmVudCA9ICh7Y29tcG9uZW50cywgY2F0ZWdvcmllc30pID0+ICh7XG4gIGVsOiAnI2FwcCcsXG4gIGRhdGE6IHtcbiAgICBjb21wb25lbnRzLFxuICAgIGNhdGVnb3JpZXNcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNpZGUtbmF2aVwiPlxuICAgICAgICA8YSBjbGFzcz1cInNpZGUtbmF2aV9fdGl0bGVcIiBocmVmPVwiL1wiPlxuICAgICAgICAgIE9uc2VuPGJyIC8+XG4gICAgICAgICAgQ1NTPGJyIC8+XG4gICAgICAgICAgQ29tcG9uZW50c1xuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWxpc3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktbGlzdF9faGVhZGVyXCI+Q2F0ZWdvcmllczwvZGl2PlxuICAgICAgICAgIDxkaXYgdi1mb3I9XCJjYXRlZ29yeSBpbiBjYXRlZ29yaWVzXCIgY2xhc3M9XCJjYXRlZ29yeS1saXN0X19pdGVtXCI+XG4gICAgICAgICAgICA8YSA6aHJlZj1cIicvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkuaGFzaFwiIGNsYXNzPVwiY2F0ZWdvcnktbGlzdF9faXRlbS1saW5rXCI+e3tjYXRlZ29yeS5uYW1lfX08L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxteS1yb3V0ZXIgOmJhc2UtcGFyYW1zPVwiY3JlYXRlUGFyYW1zKClcIiAvPlxuICAgIDwvZGl2PlxuICBgLFxuICBjb21wb25lbnRzOiB7XG4gICAgJ215LXJvdXRlcic6IGNyZWF0ZVJvdXRlcigpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjcmVhdGVQYXJhbXMoKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgICAgcGFyYW1zLmNvbXBvbmVudHMgPSBbXS5jb25jYXQodGhpcy5jb21wb25lbnRzKTtcbiAgICAgIHBhcmFtcy5jYXRlZ29yaWVzID0gW10uY29uY2F0KHRoaXMuY2F0ZWdvcmllcyk7XG5cbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuICB9XG59KTtcblxuY29uc3QgY3JlYXRlUm91dGVyID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiBbJ2Jhc2VQYXJhbXMnXSxcbiAgICBkYXRhOiAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb21wb25lbnQ6IEluZGV4UGFnZSxcbiAgICAgICAgcGFyYW1zOiB7cGxhdGZvcm06IGdldFBsYXRmb3JtKCl9XG4gICAgICB9O1xuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgIHBhZ2UoJyonLCAoY29udGV4dCwgbmV4dCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgIG5leHQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYWdlKCcvY29tcG9uZW50cy86aWQnLCAoY29udGV4dCkgPT4ge1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IENvbXBvbmVudFBhZ2U7XG4gICAgICAgIHRoaXMucGFyYW1zID0gY29udGV4dC5wYXJhbXM7XG4gICAgICB9KTtcblxuICAgICAgcGFnZSgnL2NhdGVnb3JpZXMvOmlkJywgKGNvbnRleHQpID0+IHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBDYXRlZ29yeVBhZ2U7XG4gICAgICAgIHRoaXMucGFyYW1zID0gY29udGV4dC5wYXJhbXM7XG4gICAgICB9KTtcblxuICAgICAgcGFnZSgnLycsICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb21wb25lbnQgPSBJbmRleFBhZ2U7XG4gICAgICAgICAgdGhpcy5wYXJhbXMgPSB7cGxhdGZvcm06IGdldFBsYXRmb3JtKCl9O1xuICAgICAgICB9LCAwKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYWdlKCcqJywgKCkgPT4ge1xuICAgICAgICBwYWdlLnJlZGlyZWN0KCcvJyk7XG4gICAgICB9KTtcblxuICAgICAgcGFnZSgpO1xuICAgIH0sXG4gICAgcmVuZGVyKGgpIHtcbiAgICAgIGNvbnN0IHByb3BzID0ge307XG5cbiAgICAgIGlmICh0aGlzLmJhc2VQYXJhbXMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYmFzZVBhcmFtcykge1xuICAgICAgICAgIGlmICh0aGlzLmJhc2VQYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcHJvcHNba2V5XSA9IHRoaXMuYmFzZVBhcmFtc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5wYXJhbXMpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBwcm9wc1trZXldID0gdGhpcy5wYXJhbXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCh0aGlzLmNvbXBvbmVudCwge3Byb3BzfSk7XG4gICAgfVxuICB9O1xufTtcblxuIiwiaW1wb3J0IHtjcmVhdGVBcHBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBjb21wb25lbnRzID0gbWFrZUNvbXBvbmVudHMoKTtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IG1ha2VDYXRlZ29yaWVzKGNvbXBvbmVudHMpO1xuXG4gIHdpbmRvdy5jb21wb25lbnRzID0gY29tcG9uZW50cztcblxuICB2YXIgYXBwID0gbmV3IFZ1ZShjcmVhdGVBcHBDb21wb25lbnQoe1xuICAgIGNvbXBvbmVudHMsXG4gICAgY2F0ZWdvcmllc1xuICB9KSk7XG59O1xuXG5mdW5jdGlvbiBtYWtlQ2F0ZWdvcmllcyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgc2V0LmFkZChjb21wb25lbnQuY2F0ZWdvcnkpO1xuICB9KTtcblxuICByZXR1cm4gWy4uLnNldC52YWx1ZXMoKV0ubWFwKHZhbHVlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdmFsdWUsXG4gICAgICBoYXNoOiB2YWx1ZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJ18nKVxuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlQ29tcG9uZW50cygpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBvbmVudHMtZGF0YScpLnRleHRDb250ZW50KS5tYXAoY29tcG9uZW50ID0+IHtcbiAgICBjb21wb25lbnQgPSBjb21wb25lbnQuYW5ub3RhdGlvbjtcbiAgICBjb21wb25lbnQuaWQgPSBjb21wb25lbnQubmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJ18nKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9KTtcbn1cblxud2luZG93Lm9ubG9hZCA9IGluaXQ7XG5cbiJdLCJuYW1lcyI6WyJnZXRRdWVyeVBhcmFtcyIsInBhcmFtcyIsInBhaXJzIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzbGljZSIsInNwbGl0IiwicGFpciIsImkiLCJsZW5ndGgiLCJnZXRQbGF0Zm9ybSIsInBsYXRmb3JtIiwiQ29tcG9uZW50RXhhbXBsZSIsImNvbXBvbmVudCIsIm5hbWUiLCJtYXRjaCIsIlByZXZpZXdDb21wb25lbnQiLCJJbmRleFBhZ2UiLCJvcGVuIiwiY29tcG9uZW50cyIsImZpbHRlciIsIkNvbXBvbmVudFBhZ2UiLCJpZCIsIkNhdGVnb3J5UGFnZSIsImNhdGVnb3JpZXMiLCJjYXRlZ29yeSIsImhhc2giLCJjcmVhdGVBcHBDb21wb25lbnQiLCJjcmVhdGVSb3V0ZXIiLCJjb25jYXQiLCJjb250ZXh0IiwibmV4dCIsImJvZHkiLCJzY3JvbGxUb3AiLCJkb2N1bWVudCIsInNjcm9sbExlZnQiLCJyZWRpcmVjdCIsImgiLCJwcm9wcyIsImJhc2VQYXJhbXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImluaXQiLCJtYWtlQ29tcG9uZW50cyIsIm1ha2VDYXRlZ29yaWVzIiwiYXBwIiwiVnVlIiwic2V0IiwiU2V0IiwiZm9yRWFjaCIsImFkZCIsInZhbHVlcyIsIm1hcCIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiSlNPTiIsInBhcnNlIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiYW5ub3RhdGlvbiIsIm9ubG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ08sU0FBU0EsY0FBVCxHQUEwQjtNQUMzQkMsU0FBUyxFQUFiO01BQ0lDLFFBQVFDLE9BQU9DLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCQyxLQUF2QixDQUE2QixDQUE3QixFQUFnQ0MsS0FBaEMsQ0FBc0MsR0FBdEMsQ0FBWjtNQUNJQyxJQUFKO09BQ0ssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJUCxNQUFNUSxNQUExQixFQUFrQ0QsR0FBbEMsRUFBdUM7V0FDOUJQLE1BQU1PLENBQU4sRUFBU0YsS0FBVCxDQUFlLEdBQWYsQ0FBUDtXQUNPQyxLQUFLLENBQUwsQ0FBUCxJQUFrQkEsS0FBSyxDQUFMLENBQWxCOzs7U0FHS1AsTUFBUDs7O0FDUkssU0FBU1UsV0FBVCxHQUF1QjtNQUN4QkMsV0FBV1osaUJBQWlCLFVBQWpCLENBQWY7TUFDSVksYUFBYSxTQUFiLElBQTBCQSxhQUFhLEtBQTNDLEVBQWtEO1dBQ3pDQSxRQUFQOztTQUVLLEtBQVA7OztBQ05LLElBQU1DLG1CQUFtQjtTQUN2QixDQUFDLFdBQUQsQ0FEdUI7eU1BQUE7V0FPckI7YUFBQSx1QkFDSzthQUNILEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQkMsS0FBcEIsQ0FBMEIsVUFBMUIsQ0FBUDs7O0NBVEM7O0FBY1AsQUFBTyxJQUFNQyxtQkFBbUI7U0FDdkIsQ0FBQyxXQUFELENBRHVCO2dPQUFBO2NBU2xCO3lCQUNXSjs7Q0FWbEI7O0FDYkEsSUFBTUssWUFBWTtTQUNoQixDQUFDLFlBQUQsRUFBZSxVQUFmLENBRGdCO2kvQkFBQTtjQXNCWDtxQkFDT0Q7R0F2Qkk7V0F5QmQ7WUFBQSxzQkFDSTthQUNGRSxJQUFQLENBQVksMkJBQVo7S0FGSztvQkFBQSw4QkFJWTtVQUNYQyxhQUFhLEtBQUtBLFVBQXhCO1VBQ0ksS0FBS1IsUUFB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
