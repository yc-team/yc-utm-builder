'use strict';

var url = require('url');

function prepareOpts(opts) {
    opts = opts || {};
    opts.url = opts.url || 'http://www.wandoujia.com/';
    opts.source = opts.source || 'wx_baidu';
    opts.medium = opts.medium || 'cpc';
    opts.campaign = opts.campaign || 'qq';

    return opts;

}

module.exports = function (opts) {

    opts = prepareOpts(opts);

    var parsedUrl = url.parse(opts.url, true);

    parsedUrl.query = parsedUrl.query || {};
    parsedUrl.query['utm_source'] = opts.source;
    parsedUrl.query['utm_medium'] = opts.medium;
    parsedUrl.query['utm_campaign'] = opts.campaign;

    delete parsedUrl.search;

    return url.format(parsedUrl);

};