/*
 * File: app/mda/model/gmo/gma/resolutor/mdresolutor.js
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

Ext.define('gma.model.gmo.gma.resolutor.mdresolutor', {
    extend: 'Ext.data.Model',

    alternateClassName: [
        'gmo.gma.resolutor.mdresolutor'
    ],
    requires: [
        'Ext.data.Field'
    ],

    idProperty: 'rse_codigo',

    fields: [
        {
            name: 'rse_codigo',
            type: 'int'
        },
        {
            name: 'pai_codigo',
            type: 'int'
        },
        {
            name: 'pai_denominacion',
            type: 'string'
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
            name: 'per_codigo',
            type: 'int'
        },
        {
            name: 'per_nombrecompleto',
            type: 'string'
        },
        {
            name: 'per_nrodocidentidad',
            type: 'string'
        },
        {
            name: 'ema_denominacion',
            type: 'string'
        },
        {
            name: 'rse_nivel',
            type: 'int'
        },
        {
            name: 'rse_niveldescripcion',
            type: 'string'
        },
        {
            name: 'rse_estado',
            type: 'int'
        }
    ]
});