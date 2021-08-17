import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'avon-topbar',
  styleUrl: 'avon-topbar.scss',
  shadow: true,
})
export class AvonTopbar {
  @Prop() settings = null

  render() {
    return (
      <div class="topbar">
        <div class="rep">
          <avon-link link="/rep" color="rgb(29, 31, 34)" fontsize=".7em"><span slot="link_slot">{this.settings.findRep}</span></avon-link>
          <span>&nbsp;|&nbsp;</span>
          <avon-link link="#" color="rgb(29, 31, 34)" fontsize=".7em"><span slot="link_slot">{this.settings.becomeRep}</span></avon-link>
        </div>
        <div>
          <avon-link link="#" color="rgb(29, 31, 34)" fontsize=".7em"><span slot="link_slot">{this.settings.loginText}</span></avon-link>
        </div>
      </div>
    );
  }

}
