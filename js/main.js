//------------------------------------------------------------------------------
//  照度センサーの値が変わると呼ばれる関数
//
//  MEMO: e.value の中に現在の明るさが入っている
//------------------------------------------------------------------------------
onChangeBrightness = function( e ) {
    changeScreen( e.value );  //  画面を変化させる処理を呼ぶ
    changeSound( e.value );   //  音を変化させる処理を呼ぶ
};

//  イベントハンドラを設定
window.addEventListener( 'devicelight', onChangeBrightness );
