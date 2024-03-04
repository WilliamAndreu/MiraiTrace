import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterCharactersByNamePipe } from './filter-characters-by-name.pipe';

@NgModule({
  declarations: [FilterCharactersByNamePipe],
  imports: [CommonModule],
  exports: [FilterCharactersByNamePipe],
})
export class PipesModule {}
