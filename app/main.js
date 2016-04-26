'use strict'

// load any handlebars helpers
require('../helpers/logic');
require('../helpers/objects');
require('../helpers/helpers');

require('./apps/header/header_app');
require('./apps/sidebar/sidebar_app');
require('./apps/dashboard/dashboard_app');
require('./apps/company/company_app');
require('./apps/watchlist/watchlist_app');

// load and start the application
var App = require('./app');
App.start();
