// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import PLATFORM_CONFIGS from './config/platform-configs'
import APP_CONFIGS from './config/app-configs'
import attachFastClick from 'fastclick'
import vimo from 'vimo'
//import vmStorage from 'vm-storage'

import axios from 'axios'
import { Column, Grid, Row } from 'vimo/components/grid'
import {Navbar} from 'vimo/components/Navbar'
import {Toolbar,ToolbarTitle} from 'vimo/components/toolbar'
import {Segment,SegmentButton} from 'vimo/components/segment'
import {ActionSheet} from 'vimo/components/action-sheet'
import {Button} from 'vimo/components/button'
import {List} from 'vimo/components/list'
import { Select, Option } from 'vimo/components/select'
import { ListHeader, ItemGroup, Item, ItemSliding, ItemOptions, ItemDivider } from 'vimo/components/item'
import {Modal} from 'vimo/components/modal'
import { Label } from 'vimo/components/label'
import { Icon } from 'vimo/components/icon'
import {Input } from  'vimo/components/Input'
import {Spinner } from  'vimo/components/spinner'
import { Loading } from 'vimo/components/loading'

new attachFastClick(document.body)
// 平台基础安装
Vue.use(vimo, {
  custConf: APP_CONFIGS,
  pltConf: PLATFORM_CONFIGS,
  router: router,
})



Vue.component(Grid.name, Grid)
Vue.component(Row.name, Row)
Vue.component(Column.name, Column)
Vue.component(Segment.name,Segment);
Vue.component(SegmentButton.name,SegmentButton);

Vue.component(Navbar.name,Navbar);
Vue.component(Toolbar.name,Toolbar);
Vue.component(ToolbarTitle.name,ToolbarTitle);

Vue.component(Button.name,Button);
Vue.component(List.name,List);
Vue.component(Select.name,Select);
Vue.component(Option.name,Option);
Vue.component(ListHeader.name,ListHeader);
Vue.component(Item.name,Item);
Vue.component(ItemSliding.name,ItemSliding);
Vue.component(Label.name,Label);
Vue.component(ItemGroup.name,ItemGroup);
Vue.component(Icon.name, Icon);
Vue.component(Input.name,Input);
Vue.component(Spinner.name,Spinner);

Vue.prototype.$actionSheet = ActionSheet;
Vue.prototype.$axios = axios;
Vue.prototype.$modal  = Modal;
Vue.prototype.$loading = Loading

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
