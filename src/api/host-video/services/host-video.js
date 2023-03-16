'use strict';

/**
 * host-video service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::host-video.host-video');
