Ext.define('Mather.store.ProjectDetails',{
	extend:'Ext.data.Store',
	xtype:'projectDetailsStore',
	config:{		
	autoLoad: true,
		model:'Mather.model.ProjectDetails',
		proxy:{			
			url:'http://fullorbis.com/matherapp/projectdetails.php',
			type:'jsonp',
			reader:{
				rootProperty:'record',
				type:'json'				
				},
				callbackKey : 'callback'
			}		
		}
	});