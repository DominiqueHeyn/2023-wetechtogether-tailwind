import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css']
})
export class SkillsCardComponent {
  @Input() progList: string[] = [];
  @Input() otherSkills: string[] = [];

}
