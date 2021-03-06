/*
 * File: app/mda/controller/gmo/gma/responsable/ctrMtto.js
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

Ext.define('gma.controller.gmo.gma.responsable.ctrMtto', {
    extend: 'Ext.app.Controller',

    alternateClassName: [
        'gmo.gma.responsable.ctrMtto'
    ],

    refs: [
        {
            ref: 'Mtto',
            selector: '#wingmaresponsable'
        },
        {
            ref: 'Main',
            selector: '#vpngmaResolutor'
        }
    ],

    onBtnrecuperarClick: function(button, e, eOpts) {
                var me = this,

                    win = me.getMtto(),

                    ln_rse_codigo = win.down('#rse_codigo').getValue(),

                    st_requerimiento = win.down('#grdgmarequerimiento').getStore();

                    st_requerimiento.load({
                        params:{
                            'operacion':3,
                            'rse_codigo':ln_rse_codigo
                        }
                    });
    },

    onBtnguardarClick: function(button, e, eOpts) {
                var me = this,

                    win = me.getMtto(),

                    vpn = me.getMain(),

                    frm = win.down('#frmgmaresponsable'),

                    ln_accion = win.down('#accion').getValue(),

                    ln_rse_codigo = win.down('#rse_codigo').getValue(),

                    st_requerimiento = win.down('#grdgmarequerimiento').getStore(),

                    st_responsable = vpn.down('#grdgmaresponsable').getStore(),

                    rpe_codigo=[],

                    rqe_codigo=[];

                    if (frm.isValid()===false){

                         Ext.MessageBox.show({
                            title  : 'Mensaje' ,
                            msg    : 'Datos de formulario incompleto',
                            buttons: Ext.MessageBox.OK,
                            icon   : Ext.MessageBox.WARNING
                        });

                        return;
                    }


                    var ln_fila=0;

                    Ext.each(st_requerimiento.getRange(), function(record){

                          if (record.get('rqe_seleccionado')) {

                                  ln_fila++;

                                  rpe_codigo.push(0);

                                  rqe_codigo.push(record.get('rqe_codigo'));
                          }

                    });

                    if (ln_fila===0){

                        Ext.MessageBox.alert('Mensaje','No se ha seleccionado ninguna registro');

                        return;
                    }


                    frm.submit({

                        success: function(form,action){

                                var objJson=Ext.JSON.decode(action.response.responseText);

                                if(objJson.success){

                                    Ext.MessageBox.alert('Mensaje',objJson.msg);

                                    win.close();
                                }
                        },
                        failure: function(form,action){

                            var objJson = Ext.JSON.decode(action.response.responseText);

                            Ext.MessageBox.alert('Mensaje',objJson.msgError);
                        },
                        params:{
                            'operacion':1,
                            'accion':ln_accion,
                            'rse_codigo':ln_rse_codigo,
                            'rpe_codigo[]':rpe_codigo,
                            'rqe_codigo[]':rqe_codigo
                        }
                    });



    },

    onBtncerrarClick: function(button, e, eOpts) {
                button.up('window').close();
    },

    onWingmaresponsableAfterRender: function(component, eOpts) {
                var me = this,

                    win = me.getMtto(),

                    btn_recuperar = win.down('#btnrecuperar');

                    me.onBtnrecuperarClick(me,me.btn_recuperar);
    },

    onBtnseleccionarClick: function(button, e, eOpts) {
            var me = this,

                win = me.getMtto(),

                st_requerimiento = win.down('#grdgmarequerimiento').getStore();

                Ext.each(st_requerimiento.getRange(), function(record){

                          record.set('rqe_seleccionado',true);

                    });
    },

    onBtnretirarClick: function(button, e, eOpts) {
         var me = this,

                win = me.getMtto(),

                st_requerimiento = win.down('#grdgmarequerimiento').getStore();

                Ext.each(st_requerimiento.getRange(), function(record){

                          record.set('rqe_seleccionado',false);

                    });
    },

    init: function(application) {
        this.control({
            "#wingmaresponsable #btnrecuperar": {
                click: this.onBtnrecuperarClick
            },
            "#wingmaresponsable #btnguardar": {
                click: this.onBtnguardarClick
            },
            "#wingmaresponsable #btncerrar": {
                click: this.onBtncerrarClick
            },
            "#wingmaresponsable": {
                afterrender: this.onWingmaresponsableAfterRender
            },
            "#wingmaresponsable #btnseleccionar": {
                click: this.onBtnseleccionarClick
            },
            "#btnretirar": {
                click: this.onBtnretirarClick
            }
        });
    }

});
