import { Component, Prop, h } from '@stencil/core';
import { Scores } from '../../models/scores.model';

@Component({
  tag: 'pong-wrapper',
  styleUrl: './user-wrapper.scss',
  shadow: true
})
export class UserWrapper {
  @Prop() name: string;
  @Prop() scores: any;

  componentWillLoad() {
    this.userScores();
  }
  componentWillUpdate() {
    this.userScores();
  }

  private userScores(): Scores {
    return this.scores ? JSON.parse(this.scores) : null;
  }

  render() {
    return (
      <div class='pong-wrapper'>
        <h1>{this.name}</h1>
        <pong-scores scores={this.userScores()} />
      </div>
    );
  }
}
