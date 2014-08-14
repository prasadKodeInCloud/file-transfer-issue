

if (Meteor.isClient) {
  Template.fileUpload.connecting = function(){
    return !Meteor.connection.status().connected ;
  }
  Template.fileUpload.events({
    'click button': function () {
       var files = $('input').prop("files");
       
       if(files.length === 0){
        return;
       }

      var file = files[0];

      var fileReader = new FileReader(),
          method, encoding = 'binary', type = type || 'binary';
          switch (file.type) {
            case 'text':
              method = 'readAsText';
              encoding = 'utf8';
              break;
            case 'binary': 
              method = 'readAsBinaryString';
              encoding = 'binary';
              break;
            default:
                method = 'readAsBinaryString';
                encoding = 'binary';
                break;
            }
      
      
      fileReader.readAsDataURL( file );
      
      var fileObj ;
      
      fileReader.onloadend  = function() {
          fileObj = {
            name : file.name,
            fileType: file.type,
            file: fileReader.result ,
            encoding: encoding
          }

          //alert('hiii: ' +  fileObj.file);
          Meteor.call( 'uploadFile', fileObj, function(err, data){
              if(!err)
                alert('uploaded');
          });
      }

      
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });

  Meteor.methods({
      uploadFile: function( fileObj ){
        console.log('uploading file: ', fileObj.file.length );

        return true;
      }
  });
}
