Ext.define('Mather.model.ProjectDetails',{
	extend:'Ext.data.Model',
	config:{
		fields:['name','loc','imgIcon','status','description','amenities','specification']/*,
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