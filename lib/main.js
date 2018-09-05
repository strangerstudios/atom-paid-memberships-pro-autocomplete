'use babel';

import intermediateProvider from './function-provider';

export default {
    getProvider() {
        // return a single provider, or an array of providers to use together
        return [intermediateProvider];
    }
};
