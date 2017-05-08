"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var WelcomeComponent = (function () {
    function WelcomeComponent(elRef) {
        this.elRef = elRef;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        jQuery(this.elRef.nativeElement).find('.channel-banner').bind('click', function () {
            jQuery('.channel-banner').removeClass(function (index, className) {
                return (className.match(/\S+-active/g) || []).join(' ');
            });
            var target = jQuery(this).data('target');
            jQuery('.channel-banner.' + target).addClass(target + '-active');
        });
        jQuery(".show-more-hide").hide();
        jQuery(this.elRef.nativeElement).find('.btn-more-info').click('click', function () {
            jQuery(".show-more-hide").slideToggle(500, function () {
                if (jQuery(this).is(':hidden')) {
                    jQuery('a.btn-more-info').attr('title', 'Show more info');
                }
                else {
                    jQuery('a.btn-more-info').attr('title', 'Show less info');
                }
            });
            jQuery('a.btn-more-info p').text(jQuery('a.btn-more-info p').text() == 'Show more info' ? 'Show less info' : 'Show more info');
        });
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'welcome.component.html',
        styleUrls: ['welcome.component.css']
    }),
    __metadata("design:paramtypes", [core_2.ElementRef])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map