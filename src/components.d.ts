/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AvonHeader {
    }
}
declare global {
    interface HTMLAvonHeaderElement extends Components.AvonHeader, HTMLStencilElement {
    }
    var HTMLAvonHeaderElement: {
        prototype: HTMLAvonHeaderElement;
        new (): HTMLAvonHeaderElement;
    };
    interface HTMLElementTagNameMap {
        "avon-header": HTMLAvonHeaderElement;
    }
}
declare namespace LocalJSX {
    interface AvonHeader {
    }
    interface IntrinsicElements {
        "avon-header": AvonHeader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "avon-header": LocalJSX.AvonHeader & JSXBase.HTMLAttributes<HTMLAvonHeaderElement>;
        }
    }
}
