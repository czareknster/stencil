import { Component, Prop, h } from '@stencil/core';
import { Scores } from '../../models/scores.model';

@Component({
  tag: 'pong-scores',
  styleUrl: './user-scores.scss',
  shadow: true
})
export class UserScores {
  @Prop() scores: Scores;

  componentWillLoad() {
    Object.keys(this.scores).map(key => {
      console.log(key);
      console.log(this.scores[key]);
    });
  }

  render() {
    return (
      <ul>
        {Object.keys(this.scores).map(key => (
          <li>
            <div>{this.scores[key]}</div>
            <div>{key}</div>
          </li>
        ))}
      </ul>
    );
  }
}
