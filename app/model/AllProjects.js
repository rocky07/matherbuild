Ext.define('Mather.model.AllProjects',{
	extend:'Ext.data.Model',
	config:{
		fields:['name','loc','project_image']/*,
		proxy:{
			url:'data/listallprojects',
			type:
			reader:{
				rootProperty:'data',
				type:'json'				
				}
			}*/
		}
	});