/**
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright (c) 2011-2012 ForgeRock AS. All rights reserved.
 *
 * The contents of this file are subject to the terms
 * of the Common Development and Distribution License
 * (the License). You may not use this file except in
 * compliance with the License.
 *
 * You can obtain a copy of the License at
 * http://forgerock.org/license/CDDLv1.0.html
 * See the License for the specific language governing
 * permission and limitations under the License.
 *
 * When distributing Covered Code, include this CDDL
 * Header Notice in each file and include the License file
 * at http://forgerock.org/license/CDDLv1.0.html
 * If applicable, add the following below the CDDL Header,
 * with the fields enclosed by brackets [] replaced by
 * your own identifying information:
 * "Portions Copyrighted [year] [name of copyright owner]"
 */

/*global require, define*/


/**
 * @author yaromin
 */

require.config({
    paths: {
        i18next: "libs/i18next-1.5.8-min",
        backbone: "libs/backbone-0.9.2-min",
        underscore: "libs/underscore-1.4.4-min",
        js2form: "libs/js2form-1.0",
        form2js: "libs/form2js-1.0",
        spin: "libs/spin-1.2.5-min",
        //dataTable: "libs/datatables-1.9.3-min",
        //jqueryui: "libs/jquery-ui-1.8.23.custom-min",
        xdate: "libs/xdate-0.7-min",
        doTimeout: "libs/jquery.ba-dotimeout-1.0-min",
        handlebars: "libs/handlebars-1.0.rc.1",
        moment: "libs/moment-1.7.2-min",
        ThemeManager: "org/forgerock/openam/ui/common/util/ThemeManager",
        UserDelegate: "org/forgerock/openam/ui/user/delegates/UserDelegate"
    },

    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["underscore"],
            exports: "Backbone"
        },
        js2form: {
            exports: "js2form"
        },
        form2js: {
            exports: "form2js"
        },
        spin: {
            exports: "spin"
        },
        /*dataTable: {
            exports: "dataTable"
        },
        jqueryui: {
            exports: "jqueryui"
        }, */
        xdate: {
            exports: "xdate"
        },
        doTimeout: {
            exports: "doTimeout"
        },
        handlebars: {
            exports: "handlebars"
        },
        i18next: {
            deps: ["handlebars"],
            exports: "i18next"
        },
        moment: {
            exports: "moment"
        }
    }
});

/**
 * Loads all application on start, so each module will be available to
 * required synchronously
 */
require([
    "org/forgerock/commons/ui/common/util/Constants", 
    "org/forgerock/commons/ui/common/main/EventManager",
    "underscore",
    "backbone",
    "form2js",
    "js2form",
    "spin",
    //"dataTable",
    //"jqueryui",
    "xdate",
    "moment",
    "doTimeout",
    "handlebars",
    "i18next",
    "org/forgerock/commons/ui/common/main/i18nManager",
    "config/main",
    "org/forgerock/openam/ui/common/util/Constants", 
    "org/forgerock/openam/ui/user/main",
    "org/forgerock/openam/ui/dashboard/main",
    "UserDelegate",
    "ThemeManager",
    "org/forgerock/commons/ui/user/main",
    "org/forgerock/commons/ui/common/main"
], function(constants, eventManager) {
    eventManager.sendEvent(constants.EVENT_DEPENDECIES_LOADED);
});



