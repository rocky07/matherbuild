Ext.define('Mather.view.ProjectDetails',{
extend:'Ext.TabPanel',
xtype:'projectdetailscard',
requires:['Mather.store.ProjectDetails','Mather.view.Gallery','Mather.view.FloorTypes','Mather.view.Carousel'],
config:{
		//html:'Mather details panel',
		fullscreen:true,
		tabBarPosition: 'bottom',
/*		 tpl: [
            'Hello {name}!'
        ],*/
        listeners:{        	
				initialize:function(record){
					//console.log(this);	
					obj=this;					
					//Ext.Ajax.request({
						Ext.util.JSONP.request({
  					  url:'http://fullorbis.com/matherapp/projectdetails.php',
    				  params: {
      	  						id: record.id
    								},
    				  callbackKey : 'callback',
    				 success: function(response){
     					   //var text = response.responseText;
     					   	//console.log(response[0].location);
     					   	//textObj=eval('('+text+')');
     					   	
     					   	obj.getActiveItem().setData(response[0]);
     					   	obj.getAt(2).setData(response[0]);
     					   	obj.getAt(3).setData(response[0]);
     					   	obj.getAt(4).setData(response["gallery"]);
     					   	obj.getAt(5).setData(response["floortypes"]);
     					   	obj.getAt(6).setData(response[0]);
     					   	
     					   	//obj.getActiveItem().setHtml(textObj.description);
        							// process server response here
    							}
							});
					}        	
        	},
        

//		tpl:
		items:[
			   {
			   iconCls:'note3',
			   title:'Details',
			   scrollable: {
    				direction: 'vertical',
    				directionLock: true
					},
			   //itemTpl:'ammeninitr--- {name}'
			   //html:'asa'
			   tpl:['<img src="http://fullorbis.com/matherapp/uploads/project_images/{project_image}" width="100" height="100"/><br>ProjectName:{name}<br>Location:{location}<br/>Status:{project_status}<br/>Category:{category}<p>{summary}</p>']
			   },{
			   iconCls:'favorites',
			   title:'aminites',
			   scrollable: {
    				direction: 'vertical',
    				directionLock: true
					},
				layout:'fit',
			   tpl:['{amenities}']
			   },
			   {
			   iconCls:'info',
			   title:'specification',
			   scrollable: {
    				direction: 'vertical',
    				directionLock: true
					},
			   layout:'fit',
			   tpl:['No of Floors:{no_of_floors}<br/>Unit Types:{unit_type}<br/>Land Area: {land_area}<br/><p>{specification}</p>']
			   },			   
			   {
			   iconCls:'photos2',
			   xtype:'gallerycard'
			   },
			   {
			   iconCls:'photos4',
			   xtype:'floortypescard'
			   },
			   {
			   	iconCls:'locate2',
			   	title:'Location Map',
			   	xtype: 'map',
    				useCurrentLocation: true,
    				listeners: {
					maprender : function(comp, map){
						//console.log(this.getData());
                marker=new google.maps.Marker({
                    position: new google.maps.LatLng(this.getData().latitude, this.getData().longitude),
                    map: map
                });
            //   map.setCenter(marker.getPosition());
            }
				}
				
			   }
			   ]
		}
	});