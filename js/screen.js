
//  ミュートされていたら true
var nowMute = true;

//------------------------------------------------------------------------------
//  照度を色の256段階に変換
//------------------------------------------------------------------------------
lx2Rgb = function( lx ) {
    if(lx > 1000) {
        return 0;
    }
    else {
	    rgbValue = 255 - (lx/1000)*255;
	    return Math.round(rgbValue);
    }
};


//------------------------------------------------------------------------------
//  照度センサーの値が変わると呼ばれる関数
//
//  lx 明るさ (単位ルクス)
//------------------------------------------------------------------------------
changeScreen = function( lx ) {

    //  文字の色を変化させて、数字を変化させる
    txRGB = lx2Rgb(lx);
    document.getElementById("print_lx").style.color = 'rgb(' + txRGB + ',' + txRGB + ', '+ txRGB + ')';
    document.getElementById("print_lx").innerHTML = lx + '[lx]';

    //  背景を変化させる
    bgRGB = 255-txRGB;
    document.body.style.backgroundColor = 'rgb(' + bgRGB + ',' + bgRGB + ', '+ bgRGB + ')';
};


//------------------------------------------------------------------------------
//  ミュートボタンが押された
//------------------------------------------------------------------------------
onMuteButton = function() {

    // 　ミュートしてなかったらミュートする
    if( nowMute ) {
        setMute( false );
	    nowMute = false;;
        document.getElementById("imgButton").src = "resource/unmute.png";
    }

    //  ミュート状態だったらミュートにする
    else {
	    setMute( true );
	    nowMute = true;
        document.getElementById("imgButton").src = "resource/mute.png";
    }
};
