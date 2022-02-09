var URL="example.com";
var token="03S7N6P-VDGM7JT-Q6F7XQW-31K8Q32";
var download="";
$('#submit').click(function(){
URL=$('#basic-url').val();
console.log(URL);
GetScreenShot();
});

function GetScreenShot(){
var url="https://shot.screenshotapi.net/screenshot?token="+token+"&url="+URL+"&full_page=true";
    
//     var url="https://shot.screenshotapi.net/screenshot?token=" +token+ "&url="+URL;
console.log(url);
    $.get(url,function(data){
    console.log(data);
        download=data.screenshot;
    $("#image").attr('src',data.screenshot);
})
};



 $("#link").click(function (e) {
                e.preventDefault();
                  
                window.location.href 
                    = download;
            });



