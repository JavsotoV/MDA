/*
 * File: app/mda/store/gmo/gma/servicio/stservicio.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('mda.store.gmo.gma.servicio.stservicio', {
    extend: 'Ext.data.Store',

    alternateClassName: [
        'gmo.gma.servicio.stservicio'
    ],
    requires: [
        'mda.model.gmo.gma.servicio.mdservicio',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'mda.model.gmo.gma.servicio.mdservicio',
            storeId: 'gmo.gma.servicio.stservicio',
            proxy: {
                type: 'ajax',
                url: '/library/process/lst_gma_servicio.php',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            }
        }, cfg)]);
    }
});