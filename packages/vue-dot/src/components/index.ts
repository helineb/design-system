import { VueConstructor } from 'vue';

import CustomIcon from './CustomIcon.vue';
import DataList from './DataList.vue';
import NotificationBar from './NotificationBar.vue';
import PaginatedTable from './PaginatedTable.vue';

interface Components {
	[name: string]: VueConstructor;
}

const components: Components = {
	CustomIcon,
	DataList,
	NotificationBar,
	PaginatedTable
};

/**
 * Globally register all components
*/
export default (Vue: VueConstructor) => {
	Object.keys(components).forEach((name: string) => {
		Vue.component(name, components[name]);
	});
};
