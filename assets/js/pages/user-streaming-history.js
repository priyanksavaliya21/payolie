$(document).ready(function(){
    let user__id = window.localStorage.getItem('PayolieId');
    $.get({url: 'https://xho8-qlwr-xpnb.n7.xano.io/api:fWkKQBfS/get-streaming-history', data: {user_id: user__id}, success: function(result){
        let stream_history = result.streaming_history;
        if(stream_history.length> 0){
            for(let i=0;i<stream_history.length; i++){
                let stream_payout = stream_history[i].Payout;
                let stream_count = stream_history[i].Stream_Count;
                let stream_name = stream_history[i].streamed_song.artist;
                let stream_artist = stream_history[i].streamed_song.song_name;
                let stream_duration = stream_history[i].streamed_song.song_duration;
                $('.table-bottom').append(`                        
            <div class="row">
                <div class="checkbox" onclick="this.classList.toggle('active');">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 5L1.5 3L0 4.5L3.5 8L10 1.5L8.5 0L3.5 5Z" fill="white"/>
                    </svg>                            
                </div>

                <div class="product-info">
                    <img src="./assets/images/product-img-2.png" alt="">
                    <div class="product-info-right">
                        <h3>`+stream_name+`</h3>
                        <h4>`+stream_artist+`<span>`+stream_duration+`</span></h4>
                    </div>
                </div>

                <p style="text-align: left;">15th January, 2021</p>
                <p style="text-align: center;">$`+stream_payout+`BTC</p>
                <p style="text-align: center;">`+stream_count+`x</p>
            </div>`);
            }
        }else{
            $('.table-bottom').html("Yoou have no streaming history");
        }
    }});
});