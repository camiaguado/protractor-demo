
exports.config = {
    directConnect: true,
    capabilities:{
        'browserName': 'chrome'
    },
    framework:'jasmine2',
    specs: ['login.js']
};
