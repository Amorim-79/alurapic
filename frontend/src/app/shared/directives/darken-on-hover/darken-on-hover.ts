import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDarkenOnHover]',
})
export class DarkenOnHoverDirective {

    constructor( private el: ElementRef, private render: Renderer2 ) {  }

    @HostListener('mouseover')
    darken(): void {
        console.log('oi');
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightiness(70%)');
    }

    @HostListener('mouseleave')
    lighten(): void {
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightiness(100%)');
    }
}
