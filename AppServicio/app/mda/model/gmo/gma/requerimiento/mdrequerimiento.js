/*
 * File: app/mda/model/gmo/gma/requerimiento/mdrequerimiento.js
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

Ext.define('mda.model.gmo.gma.requerimiento.mdrequerimiento', {
    extend: 'Ext.data.Model',

    alternateClassName: [
        'gmo.gma.requerimiento.mdrequerimiento'
    ],
    requires: [
        'Ext.data.Field'
    ],

    idProperty: 'rqe_codigo',

    fields: [
        {
            name: 'rqe_codigo',
            type: 'int'
        },
        {
            name: 'srv_codigo',
            type: 'int'
        },
        {
            name: 'srv_denominacion',
            type: 'string'
        },
        {
            name: 'rqe_denominacion',
            type: 'string'
        },
        {
            name: 'rqe_prioridad',
            type: 'int'
        },
        {
            name: 'des_prioridad',
            type: 'string'
        },
        {
            name: 'rqe_tiemporpta',
            type: 'float'
        }
    ]
});