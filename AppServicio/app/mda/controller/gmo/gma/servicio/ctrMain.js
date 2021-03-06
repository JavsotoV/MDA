/*
 * File: app/mda/controller/gmo/gma/servicio/ctrMain.js
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

Ext.define('mda.controller.gmo.gma.servicio.ctrMain', {
    extend: 'Ext.app.Controller',

    alternateClassName: [
        'gmo.gma.servicio.ctrMain'
    ],

    refs: [
        {
            ref: 'Main',
            selector: '#vpmaingmaServicio'
        }
    ],

    onBtnRecuperarClick: function(button, e, eOpts) {
        var me = this,

            vpn = me.getMain(),

            ls_criterio = vpn.down('#txtcriterio').getValue(),

            st_srv = vpn.down('#grdServicio').getStore();

        st_srv.load({
            params:{
                'operacion':2,
                'srv_codigo':0,
                'criterio':ls_criterio
            }
        });
    },

    onBtnNuevoClick: function(button, e, eOpts) {
               var win = Ext.create('mda.view.gmo.gma.servicio.winMtto');

                    win.down('#accion').setValue(1);

                    win.show();
    },

    onBtnModificarClick: function(button, e, eOpts) {
                var me = this,

                    vpn = me.getMain(),

                    grd = vpn.down('#grdServicio'),

                    sm = grd.getSelectionModel();

                    if (sm.hasSelection()===false){

                        Ext.MessageBox.alert('Mensaje','Debe seleccionar registro a modificar');

                        return;
                    }

                    var rec = sm.getSelection()[0],

                        win = Ext.create('mda.view.gmo.gma.servicio.winMtto');

                        win.down('#frmServicio').loadRecord(rec);

                        win.down('#accion').setValue(2);

                        win.show();

    },

    onBtnAnularClick: function(button, e, eOpts) {
        var me= this,

                    vp=me.getMain(),

                    grid=vp.down('#grdServicio'),

                    sm=grid.getSelectionModel();

                if (sm.hasSelection()===false){

                    Ext.MessageBox.alert('Debe seleccionar registro a anular');

                    return;
                }

                var rec=sm.getSelection()[0];

                var ln_srv_codigo=rec.data.srv_codigo;

                var ls_url='/library/process/lst_gma_servicio.php';

                var ls_params={
                    'operacion' 	: 1,
                    'accion'		: 3,
                    'srv_codigo'	: ln_srv_codigo
                };

                Ext.MessageBox.confirm('Mensaje','Desea anular registro seleccionado',function(rsp){

                    if(rsp==='yes'){

                         me.getController('gmo.global.utiles.ctrfuncion').fn_AjaxRequest(ls_params,ls_url,function(val){

                           if(val){

                               grid.getStore().remove(rec);

                               Ext.Msg.alert('Mensaje','Anulacion de registro realizado correctamente');
                           }

                         });
                    }

                });

    },

    onBtnCerrarClick: function(button, e, eOpts) {
                var me = this,
                    vpn = me.getMain();

                    vpn.close();

    },

    onTxtcriterioSpecialkey: function(field, e, eOpts) {
               var me = this,

                   vpn = me.getMain(),

                   btn_retrieve = vpn.down('#btnRecuperar');

                   if(e.getKey()==e.ENTER){

                       me.onBtnRecuperarClick(me,me.btn_retrieve);
                    }
    },

    onTxtcriteriorequerimientoSpecialkey: function(field, e, eOpts) {

    },

    onBtnRetrieverequerimientoClick: function(button, e, eOpts) {
            var me = this,

                vpn = me.getMain(),

                grd = vpn.down('#grdServicio'),

                st_rqe = vpn.down('#grdRequerimiento').getStore(),

                sm = grd.getSelectionModel();

                if (sm.hasSelection()===false) {return; }

                var rec = sm.getSelection()[0];

                st_rqe.load({
                    params:{
                        'operacion':2,
                        'rqe_codigo':0,
                        'srv_codigo':rec.data.srv_codigo
                    }
                });
    },

    onBtnNuevorequerimientoClick: function(button, e, eOpts) {
                var me = this,
                    vpn = me.getMain(),
                    grd = vpn.down('#grdServicio'),
                    sm = grd.getSelectionModel();

                    if (sm.hasSelection()===false){

                        Ext.MessageBox.alert('Mensaje','Debe seleccionar servicio de quien desee ingresar requerimiento');

                        return;
                    }

                    var rec = sm.getSelection()[0],

                    win=Ext.create('mda.view.gmo.gma.requerimiento.winMtto');

                    win.down('#srv_codigo').setValue(rec.data.srv_codigo);

                    win.down('#srv_denominacion').setValue(rec.data.srv_denominacion);

                    win.down('#accion').setValue(1);

                    win.show();
    },

    onBtnModificarrequerimientoClick: function(button, e, eOpts) {
                    var me = this,

                        vpn = me.getMain(),

                        grd = vpn.down('#grdRequerimiento'),

                        sm = grd.getSelectionModel();

                        if (sm.hasSelection()===false){

                            Ext.MessageBox.alert('Mensaje','Debe seleccionar registro a modificar');

                            return;
                        }

                        var rec = sm.getSelection()[0],

                            win = Ext.create('mda.view.gmo.gma.requerimiento.winMtto');

                            win.down('#frmRequerimiento').loadRecord(rec);

                            win.down('#accion').setValue(2);

                            win.show();

    },

    onBtnAnularrequerimientoClick: function(button, e, eOpts) {
             var me= this,

                    vp=me.getMain(),

                    grid=vp.down('#grdRequerimiento'),

                    sm=grid.getSelectionModel();

                if (sm.hasSelection()===false){

                    Ext.MessageBox.alert('Debe seleccionar registro a anular');

                    return;
                }

                var rec=sm.getSelection()[0];

                var ln_rqe_codigo=rec.data.rqe_codigo;

                var ls_url='/library/process/lst_gma_requerimiento.php';

                var ls_params={
                    operacion 	: 1,
                    accion		: 3,
                    rqe_codigo	: ln_rqe_codigo
                };

                Ext.MessageBox.confirm('Mensaje','Desea anular registro seleccionado',function(rsp){

                    if(rsp==='yes'){

                         me.getController('gmo.global.utiles.ctrfuncion').fn_AjaxRequest(ls_params,ls_url,function(val){

                           if(val){

                               grid.getStore().remove(rec);

                               Ext.Msg.alert('Mensaje','Anulacion de registro realizado correctamente');
                           }

                         });

                    }

                });

    },

    onGrdServicioSelectionChange: function(model, selected, eOpts) {
                var me = this,

                    vpn = me.getMain(),

                    btn_retrieverqe =vpn.down('#btnRetrieverequerimiento');

                    me.onBtnRetrieverequerimientoClick(me,me.btn_retrieverqe);

    },

    init: function(application) {
        this.control({
            "#vpmaingmaServicio #btnRecuperar": {
                click: this.onBtnRecuperarClick
            },
            "#vpmaingmaServicio #btnNuevo": {
                click: this.onBtnNuevoClick
            },
            "#vpmaingmaServicio #btnModificar": {
                click: this.onBtnModificarClick
            },
            "#vpmaingmaServicio #btnAnular": {
                click: this.onBtnAnularClick
            },
            "#vpmaingmaServicio #btnCerrar": {
                click: this.onBtnCerrarClick
            },
            "#vpmaingmaServicio #txtcriterio": {
                specialkey: this.onTxtcriterioSpecialkey
            },
            "#vpmaingmaServicio  #txtcriteriorequerimiento": {
                specialkey: this.onTxtcriteriorequerimientoSpecialkey
            },
            "#vpmaingmaServicio  #btnRetrieverequerimiento": {
                click: this.onBtnRetrieverequerimientoClick
            },
            "#vpmaingmaServicio  #btnNuevorequerimiento": {
                click: this.onBtnNuevorequerimientoClick
            },
            "#vpmaingmaServicio  #btnModificarrequerimiento": {
                click: this.onBtnModificarrequerimientoClick
            },
            "#vpmaingmaServicio  #btnAnularrequerimiento": {
                click: this.onBtnAnularrequerimientoClick
            },
            "#grdServicio": {
                selectionchange: this.onGrdServicioSelectionChange
            }
        });
    }

});
