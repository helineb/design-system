import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FileList from '../';

let wrapper: Wrapper<Vue>;

const files = [{
	id: '0',
	title: 'test',
	state: 'success'
}];

describe('FileList', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FileList, {
			propsData: {
				files
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
