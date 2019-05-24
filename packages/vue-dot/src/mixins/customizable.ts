import Vue from 'vue';

import * as merge from 'deepmerge';

/**
 * Mixin that merge default options with options passed as props
 *
 * @param {Object} defaultOptions The options to apply by default
 *
 * @example
 * // Usage in your component:
 * mixins: [ customizable({ btn: { color: 'primary' } }) ]
 *
 * <VBtn v-bind="options.btn" />
 *
 * // Final API
 * <MyComponent :vuetify-options="{ btn: { color: 'white' } }" />
*/
export default function customizable(defaultOptions: object) {
	return Vue.mixin({
		props: {
			/** User options */
			vuetifyOptions: {
				type: Object,
				default: undefined
			}
		},
		computed: {
			options(): object {
				// If we have custom options
				if (this.vuetifyOptions) {
					// Merge default options with props
					// Default first to allow override
					return merge.all([
						defaultOptions,
						this.vuetifyOptions
					]);
				}

				// Else return default options
				return defaultOptions;
			}
		}
	});
}
