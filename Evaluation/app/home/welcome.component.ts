import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
declare var jQuery: any;
@Component({

    moduleId: module.id,
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']

})

export class WelcomeComponent implements OnInit {

    constructor(private elRef: ElementRef) { }

    ngOnInit(): any {
        jQuery(this.elRef.nativeElement).find('.channel-banner').bind('click', function () {


            jQuery('.channel-banner').removeClass(function (index: any, className: any) {
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
    }

}