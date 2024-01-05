import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { md3 } from 'vuetify/blueprints';

const light = {
    dark: false,
    // colors: {
    //     primary: '',
    //     secondary: '',
    // },
};

const dark = {
    dark: true,
    // colors: {
    //     primary: '',
    //     secondary: '',
    // },
};

export default createVuetify({
    blueprint: md3,
    components,
    directives,
    theme: {
        defaultTheme: 'light',
        themes: {
            light,
            dark,
        },
    },
    defaults: {
        VSheet: {
            color: 'transparent',
        },
    },
});
