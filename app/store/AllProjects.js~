Ext.define('Mather.store.AllProjects',{
	extend:'Ext.data.Store',
	config:{		
	autoLoad: true,
		model:'Mather.model.AllProjects',
		proxy:{			
			url:'http://fullorbis.com/matherapp/allProjects.php',
			type:'jsonp',
			reader:{
				rootProperty:'record',
				type:'json'				
				},
				 callbackKey : 'callback'
			}				
		}
	});