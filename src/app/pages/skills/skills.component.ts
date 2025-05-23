import { Component } from '@angular/core';
import { Skill, SKILLS } from '../../data/skills';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: Skill[] = SKILLS;
}
