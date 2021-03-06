/*
 * File: app/mda/view/gmo/gma/responsable/winMtto.js
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

Ext.define('mda.view.gmo.gma.responsable.winMtto', {
    extend: 'Ext.window.Window',

    alternateClassName: [
        'gmo.gma.responsable.winMtto'
    ],
    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.Label',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Separator',
        'Ext.button.Button',
        'Ext.form.Panel',
        'Ext.form.field.Hidden',
        'Ext.form.FieldContainer',
        'Ext.form.field.ComboBox',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date'
    ],

    height: 550,
    itemId: 'winMttoResponsable',
    width: 863,
    layout: 'fit',
    title: 'Mantenimiento de Responsables de Requerimiento de Servicio',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'label',
                            text: 'Menu de opciones:'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnNuevo',
                            iconCls: 'btnNew',
                            text: 'Nuevo'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnGuardar',
                            iconCls: 'btnSave',
                            text: 'Guardar'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnCerrar',
                            iconCls: 'btnClose',
                            text: 'Cerrar'
                        },
                        {
                            xtype: 'tbseparator'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'form',
                    itemId: 'frmResponsable',
                    layout: 'fit',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'hiddenfield',
                            itemId: 'accion',
                            fieldLabel: 'Label',
                            name: 'accion'
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'fieldcontainer',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'fieldcontainer',
                                            flex: 1,
                                            layout: {
                                                type: 'hbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'combobox',
                                                    flex: 1,
                                                    itemId: 'srv_codigo',
                                                    fieldLabel: 'Servicio',
                                                    labelAlign: 'top',
                                                    name: 'srv_codigo',
                                                    displayField: 'srv_denominacion',
                                                    queryMode: 'local',
                                                    store: 'gmo.gma.servicio.stserviciocmb',
                                                    valueField: 'srv_codigo'
                                                },
                                                {
                                                    xtype: 'combobox',
                                                    itemId: 'pai_codigo',
                                                    margin: '0 0 0 10',
                                                    fieldLabel: 'Region',
                                                    labelAlign: 'top',
                                                    labelWidth: 50,
                                                    name: 'pai_codigo'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    flex: 1,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'gridpanel',
                                            store: 'gmo.gma.responsable.stresponsablenew',
                                            dockedItems: [
                                                {
                                                    xtype: 'toolbar',
                                                    dock: 'top',
                                                    items: [
                                                        {
                                                            xtype: 'label',
                                                            text: 'Listado de Responsables x Requerimiento'
                                                        },
                                                        {
                                                            xtype: 'tbfill'
                                                        },
                                                        {
                                                            xtype: 'tbseparator'
                                                        },
                                                        {
                                                            xtype: 'button',
                                                            iconCls: 'btnAdicionar',
                                                            text: 'Adicionar'
                                                        },
                                                        {
                                                            xtype: 'tbseparator'
                                                        },
                                                        {
                                                            xtype: 'button',
                                                            iconCls: 'btnEliminar',
                                                            text: 'Eliminar'
                                                        },
                                                        {
                                                            xtype: 'tbseparator'
                                                        }
                                                    ]
                                                }
                                            ],
                                            columns: [
                                                {
                                                    xtype: 'numbercolumn',
                                                    hidden: true,
                                                    dataIndex: 'rpe_codigo',
                                                    text: 'Rpe Codigo',
                                                    format: '00'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    hidden: true,
                                                    dataIndex: 'pai_codigo',
                                                    text: 'Pai Codigo',
                                                    format: '00'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    hidden: true,
                                                    dataIndex: 'pai_denominacion',
                                                    text: 'Pai Denominacion'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    width: 50,
                                                    dataIndex: 'per_codigo',
                                                    text: 'Codigo',
                                                    format: '00'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    width: 274,
                                                    dataIndex: 'per_nombrecompleto',
                                                    text: 'Apellidos y Nombres'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    width: 109,
                                                    align: 'center',
                                                    dataIndex: 'per_nrodocidentidad',
                                                    text: 'Nro. Documento'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    width: 169,
                                                    dataIndex: 'ema_denominacion',
                                                    text: 'Email'
                                                },
                                                {
                                                    xtype: 'datecolumn',
                                                    align: 'center',
                                                    dataIndex: 'rqe_codigo',
                                                    text: 'Fecha Inicio',
                                                    format: 'd/m/Y'
                                                },
                                                {
                                                    xtype: 'datecolumn',
                                                    align: 'center',
                                                    dataIndex: 'rpe_denominacion',
                                                    text: 'Fecha Termino',
                                                    format: 'd/m/Y'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});