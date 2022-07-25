export default {
    data: {
        handler: function () {
            this.save_data = true;
        },
        deep: true
    },
    show_arrows: function () {
        if (this.show_arrows == false) {
            var self = this;
            setTimeout(function () { self.show_arrows = true; }, 10);
        }
    },
    progress: {
        handler: function () {
            if (!this.progress.active) {
                this.progress.value = -1;
                this.progress.text = '';
            }
        },
        deep: true
    },
    $route(to) {
        var self = this;
        this.page = to.name;
        this.show_arrows = false;
        var route = (this.$router.options.routes.find((element) => element.name === to.name));
        var tab = (route.tab == undefined ? false : route.tab);
        if (tab == true) {
            if (this.openpages.find((element) => element.name === to.name) == undefined) {
                this.openpages.push(route);
            }
        }
        setTimeout(function () {
            //console.log('lEN',document.querySelectorAll(".active_header_tab").length )
            if (document.querySelectorAll(".active_header_tab").length > 0) {
                var indx = document.querySelector(".active_header_tab").getAttribute("data-id");
                self.active_header_tab = parseInt(indx);
                //console.log("SELF",self.active_header_tab)
            }
        }, 10)
    }
}