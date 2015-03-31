exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['features/*.feature'],
    framework: 'cucumber',
    capabilities: {
        browserName: 'chrome'
    },
    cucumberOpts: {
        format: 'pretty'
    }
};

