import { Component, h } from '@stencil/core';

@Component({
  tag: 'avon-topbar',
  styleUrl: 'avon-topbar.scss',
  shadow: true,
})
export class AvonTopbar {

  render() {
    return (
      <div class="topbar">
        <div class="rep">
          <avon-link link="/rep" label="FIND A REPRESENTATIVE" color="rgb(29, 31, 34)" fontsize=".7em"></avon-link>
          &nbsp;|&nbsp;
          <avon-link link="#" label="BECOME A REPRESENTATIVE" color="rgb(29, 31, 34)" fontsize=".7em"></avon-link>
        </div>
        <div>
          <avon-link link="#" label="CUSTOMER LOGIN / REGISTRATION" color="rgb(29, 31, 34)" fontsize=".7em"></avon-link>
        </div>
      </div>
    );
  }

}
