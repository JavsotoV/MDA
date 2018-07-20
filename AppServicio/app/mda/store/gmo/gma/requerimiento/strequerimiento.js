/*
 * File: app/mda/store/gmo/gma/requerimiento/strequerimiento.js
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

Ext.define('mda.store.gmo.gma.requerimiento.strequerimiento', {
    extend: 'Ext.data.Store',

    alternateClassName: [
        'gmo.gma.requerimiento.strequerimiento'
    ],
    requires: [
        'mda.model.gmo.gma.requerimiento.mdrequerimiento',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'mda.model.gmo.gma.requerimiento.mdrequerimiento',
            storeId: 'gmo.gma.requerimiento.strequerimiento',
            proxy: {
                type: 'ajax',
                url: '/library/process/lst_gma_requerimiento.php',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            }
        }, cfg)]);
    }
});