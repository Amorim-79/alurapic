import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDarkenOnHover]',
})
export class DarkenOnHoverDirective {

    constructor( private el: ElementRef, private render: Renderer2 ) {  }

    @Input() brightness: number;

    @HostListener('mouseover')
    darkenOn(): void {
        this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness}%)`);
    }

    @HostListener('mouseleave')
    darkenOff(): void {
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}
