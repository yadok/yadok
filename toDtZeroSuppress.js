        var toDtZeroSuppress = function(num){
            num  += "";
            if(num.length === 1){
                num = "0" + num;
            }
            return num;
        }

        var date = new Date();
        var today = date.getFullYear() + "-" + toDtZeroSuppress(date.getMonth() + 1) + "-" + toDtZeroSuppress(date.getDate());
