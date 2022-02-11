var map={'fullHD':'1080p','720p':'720p','360p':'360p'};


function changeQ(quality){
     $('source','video#player').attr('src','images/1504PARTYPART1.mp4'+map[quality]);
      $('span#pp').html(map[quality]);
     console.log($('source','video#player').attr('src'))
}