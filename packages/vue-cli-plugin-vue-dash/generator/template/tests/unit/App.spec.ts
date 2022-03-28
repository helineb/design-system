import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { router, mountComponent } from '@/tests-unit';
import { html } from '@cnamts/vue-dot/tests/utils/html';

import App from '@/App.vue';

let wrapper: Wrapper<Vue>;

describe('App', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(App, {
			router
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
