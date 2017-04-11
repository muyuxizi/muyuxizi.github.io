<script language="JavaScript">
    <!--
    var no = 5;    //雪片数目
    var speed = 20;   //飘动速度。(值越大越慢)
    var ns4up = (document.layers) ? 1 : 0;  //当前浏览器类型，如果是NS则为1
    var ie4up = (document.all) ? 1 : 0;  //当前浏览器类型，如果是IE则为1
    var s, x, y, sn, cs;
    var a, r, cx, cy;
    var i, doc_width = 800, doc_height = 600;
    x = new Array();
    y = new Array();
    r = new Array();
    cx = new Array();
    cy = new Array();
    s = 8;      //每次下落的高度，越小越平滑，但是也越慢
    if (ns4up) {     //以NS兼容方式
    doc_width = self.innerWidth;   //取页面宽度
    doc_height = self.innerHeight;   //取页面高度
    }
    else
    if (ie4up) {     //以IE兼容方式
    doc_width = document.body.clientWidth;  //取页面宽度
    doc_height = document.body.clientHeight; //取页面高度
    }
    for (i = 0; i < no; ++ i) {  //根据前面定义的雪片数目写进相应数目的层
    initSnow();   //随机初始化层的坐标
    if (ns4up) {   //如果浏览器是NS
    //用layer作为雪片(星号)的容器
    document.write("<layer name=\"dot"+ i +"\" left=\"1\" ");
    document.write("top=\"1\" visibility=\"show\"><font color=\"red\">");
    document.write("*</font></layer>");
    }
    else
    if (ie4up) {   //如果浏览器是IE
    //用div作为雪片的容器
    document.write("<div id=\"dot"+ i +"\" style=\"POSITION: ");
    document.write("absolute; Z-INDEX: "+ i +"; VISIBILITY: ");
    document.write("visible; TOP: 15px; LEFT: 15px;\"><font color=\"red\">");
    document.write("*</font></div>");
    }
    }
    //初始化雪片，生成随机坐标
    function initSnow() {
    a = 6;
    r[i] = 1;
    sn = Math.sin(a);
    cs = Math.cos(a);
    cx[i] = Math.random() * doc_width + 1;
    cy[i] = Math.random() * doc_height + 1;
    x[i] = r[i] * sn + cx[i];
    y[i] = cy[i];
    }
    //计算雪花位置，从新位置上出现，看起来就像是新产生的一样。
    function makeSnow() {
    r[i] = 1;
    cx[i] = Math.random() * doc_width + 1;
    cy[i] = 1;
    x[i] = r[i] * sn + cx[i];
    y[i] = r[i] * cs + cy[i];
    }
    //雪花下落的计算
    function updateSnow() {
    r[i] += s;
    x[i] = r[i] * sn + cx[i];
    y[i] = r[i] * cs + cy[i];
    }
    //在NS浏览器上处理雪片下落的主程序
    function SnowdropNS() {
    for (i = 0; i < no; ++ i) { //依次处理每片雪花
    updateSnow();   //下落
    if ((x[i] <= 1) || (x[i] >= (doc_width - 20)) || (y[i] >= (doc_height - 20))) { //如果超出屏幕范围
    makeSnow();      //则调整雪片到新位置上
    doc_width = self.innerWidth;    //更新页面宽度数据
    doc_height = self.innerHeight;    //更新页面高度数据
    }
    document.layers["dot"+i].top = y[i];    //改变层的Y坐标，应用新的位置
    document.layers["dot"+i].left = x[i];    //改变层的X坐标，应用新的位置
    }
    setTimeout("SnowdropNS()", speed);
    }
    //在IE浏览器上处理雪片下落的主程序
    function SnowdropIE() {
    for (i = 0; i < no; ++ i) { //依次处理每片雪花
    updateSnow();   //下落
    if ((x[i] <= 1) || (x[i] >= (doc_width - 20)) || (y[i] >= (doc_height - 20))) { //如果超出屏幕范围
    makeSnow();      //则调整雪片到新位置上
    doc_width = document.body.clientWidth;   //更新页面宽度数据
    doc_height = document.body.clientHeight;   //更新页面高度数据
    }
    document.all["dot"+i].style.pixelTop = y[i];   //改变层的坐标，应用新的位置
    document.all["dot"+i].style.pixelLeft = x[i];
    }
    setTimeout("SnowdropIE()", speed);    //准备下一次下落过程。
    }
    if (ns4up) {  //如果是NS
    SnowdropNS(); //调用SnowdropNS使雪片下落
    }
    else
    if (ie4up) {  //如果是NS
    SnowdropIE(); //调用SnowdropIE使雪片下落
    }
    -->
    </script>