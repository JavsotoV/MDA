/*
 * File: app/mda/view/gmo/gma/resolutor/vpmain.js
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

Ext.define('gma.view.gmo.gma.resolutor.vpmain', {
    extend: 'Ext.panel.Panel',

    alternateClassName: [
        'gmo.gma.resolutor.vpmain'
    ],
    requires: [
        'Ext.grid.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.Label',
        'Ext.toolbar.Separator',
        'Ext.button.Button',
        'Ext.grid.View',
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.toolbar.Paging'
    ],

    height: 544,
    itemId: 'vpngmaResolutor',
    width: 1146,
    layout: 'border',
    title: 'Mantenimiento de Resolutores x Servicio',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    region: 'center',
                    itemId: 'grdgmaResolutor',
                    store: 'gmo.gma.resolutor.stresolutor',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'combobox',
                                    itemId: 'cmb_pais',
                                    fieldLabel: 'Region',
                                    labelWidth: 50,
                                    name: 'cmb_pais',
                                    displayField: 'pai_denominacion',
                                    queryMode: 'local',
                                    store: 'gmo.global.glbpais.stglbpais',
                                    valueField: 'pai_codigo'
                                },
                                {
                                    xtype: 'textfield',
                                    itemId: 'txtcriterio',
                                    margin: '0 0 0 10',
                                    width: 245,
                                    fieldLabel: 'Criterio',
                                    labelWidth: 50,
                                    name: 'txtcriterio',
                                    emptyText: 'Criterio de busqueda'
                                }
                            ]
                        },
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'Menu de opciones:'
                                },
                                {
                                    xtype: 'tbseparator'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnRecuperar',
                                    iconCls: 'btnRetrieve',
                                    text: 'Recuperar'
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
                                    itemId: 'btnAnular',
                                    iconCls: 'btnDelete',
                                    text: 'Anular'
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
                        },
                        {
                            xtype: 'pagingtoolbar',
                            dock: 'bottom',
                            width: 360,
                            displayInfo: true,
                            store: 'gmo.gma.resolutor.stresolutor'
                        }
                    ],
                    viewConfig: {
                        itemId: 'mygridview'
                    },
                    columns: [
                        {
                            xtype: 'rownumberer'
                        },
                        {
                            xtype: 'numbercolumn',
                            hidden: true,
                            dataIndex: 'rse_codigo',
                            text: 'Rse Codigo',
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
                            width: 341,
                            dataIndex: 'per_nombrecompleto',
                            text: 'Nombres'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 184,
                            dataIndex: 'per_nrodocidentidad',
                            text: 'Nro. Documento o Cuenta'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 275,
                            dataIndex: 'ema_denominacion',
                            text: 'Email'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 170,
                            dataIndex: 'rse_niveldescripcion',
                            text: 'Nivel'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 264,
                            dataIndex: 'srv_denominacion',
                            text: 'Servicio'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'pai_denominacion',
                            text: 'Region'
                        },
                        {
                            xtype: 'numbercolumn',
                            hidden: true,
                            dataIndex: 'srv_codigo',
                            text: 'Srv Codigo',
                            format: '00'
                        },
                        {
                            xtype: 'numbercolumn',
                            hidden: true,
                            dataIndex: 'per_codigo',
                            text: 'Per Codigo',
                            format: '00'
                        },
                        {
                            xtype: 'numbercolumn',
                            hidden: true,
                            dataIndex: 'rse_nivel',
                            text: 'Rse Nivel',
                            format: '00'
                        },
                        {
                            xtype: 'numbercolumn',
                            hidden: true,
                            dataIndex: 'rse_estado',
                            text: 'Rse Estado',
                            format: '00'
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    region: 'south',
                    height: 150,
                    itemId: 'grdgmaresponsable',
                    store: 'gmo.gma.responsable.stresponsable',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'textfield',
                                    itemId: 'txtcriteriodet',
                                    fieldLabel: 'Criterio',
                                    labelWidth: 50
                                },
                                {
                                    xtype: 'tbseparator'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnRecuperardetalle',
                                    iconCls: 'btnRetrieve',
                                    text: 'Recuperar'
                                },
                                {
                                    xtype: 'tbseparator'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnAdicionardetalle',
                                    iconCls: 'btnAdicionar',
                                    text: 'Adicionar'
                                },
                                {
                                    xtype: 'tbseparator'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnAnulardetalle',
                                    iconCls: 'btnDelete',
                                    text: 'Anular'
                                },
                                {
                                    xtype: 'tbseparator'
                                }
                            ]
                        }
                    ],
                    columns: [
                        {
                            xtype: 'rownumberer'
                        },
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
                            dataIndex: 'rse_codigo',
                            text: 'Rse Codigo',
                            format: '00'
                        },
                        {
                            xtype: 'numbercolumn',
                            hidden: true,
                            dataIndex: 'rqe_codigo',
                            text: 'Rqe Codigo',
                            format: '00'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 580,
                            dataIndex: 'rqe_denominacion',
                            text: 'Temas y/o Requerimiento'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});