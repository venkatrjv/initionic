import { Component, ViewChild } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
    slider = false;
    @ViewChild("menuContent") menuContent;
    constructor(private menu: MenuController) {

    }

    showSlider() {
        debugger;
        this.slider = !this.slider;
        // this.menu.open()
        // return this.slider;
    }

    showSliderTrigger(){
        return this.slider;
    }
}
