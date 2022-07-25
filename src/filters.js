module.exports = {
    timer: function (num, mask) {
        var m = ['h', 'm', 's', 'n'];
        var n = num;
        var t = "";
        var grava = false;
        m.reverse().forEach(function (el, indx) {
            var div = (indx <= 0 ? 1 : (indx <= 1 ? 1000 : 60));
            var di2 = (indx <= 0 ? 1000 : 60);
            var sep = (indx <= 1 ? "." : ":");
            if (mask[1] == el) {
                grava = true;
            }
            n = Math.floor(n / div);
            if (grava) {
                var vl = n;
                if (mask[0] != el) {
                    vl = n % di2;
                }
                if (el == "n") {
                    if (vl < 10) {
                        vl = "00" + vl;
                    } else if (vl < 100) {
                        vl = "0" + vl;
                    }
                } else {
                    if (vl < 10) {
                        vl = "0" + vl;
                    }
                }
                t = vl + (t !== "" ? sep : "") + t;
            }
            if (mask[0] == el) {
                grava = false;
            }
            //console.log(el,indx,n,div,grava);
        });
        return t;

    },

    formatSecond: function (num) {
        if (isNaN(num)){
            num = 0;
        }
        num = parseInt(num)
        var minutes = "0" + Math.floor(num / 60);
        var seconds = "0" + (num - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);
    }
};