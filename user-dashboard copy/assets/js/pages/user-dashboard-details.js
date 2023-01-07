$(document).ready(function(){
    let total_orders = $('#total-orders'), total_streams = $('#total-streams'), total_balance = $('#total-balance'), user__id = window.localStorage.getItem('PayolieId'), logout_btn = $('#logout-btn');
    $.get({url: 'https://xho8-qlwr-xpnb.n7.xano.io/api:fWkKQBfS/total-orders-account-balance-streams', data: {user_id: user__id}, success: function(result){
        let t_orders = result.total_orders, t_balance = result.Account_Balance, t_streams = result.Total_Stream_Duration_;
        total_balance.html("$"+t_balance);
        total_streams.html(t_streams);
        total_orders.html(t_orders);
    }});
    logout_btn.click(function(){
        localStorage.removeItem('PayolieId');
        window.location.href = '../login.html';
    });
});