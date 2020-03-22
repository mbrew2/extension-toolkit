import {{ withKnobs, {4} }} from '@storybook/addon-knobs';
import {{ action }} from '@storybook/addon-actions';
import Vue from 'vue';
import Interface{2} from './{0}.vue';
import markdown from './readme.md';
import withPadding from '../../../.storybook/decorators/with-padding';
import {{ defineComponent }} from '@vue/composition-api';

Vue.component('interface-{0}', Interface{2});

export default {{
	title: 'Interfaces / {1}',
	decorators: [withKnobs, withPadding],
	parameters: {{
		notes: markdown
	}}
}};

export const basic = () =>
	defineComponent({{
		props: {3},
		setup() {{
			const onInput = action('input');
			return {{ onInput }};
		}},
		template: `
            <interface-checkbox
{5}
				@input="onInput"
			/>
		`
	}});