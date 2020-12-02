import { AbstractControl, ValidatorFn } from '@angular/forms';

export const restrictedWordsValidator = (words: string[]): ValidatorFn =>
    (control: AbstractControl): {[key: string]: any}|null => {
      if (!words) {return null;}
      const invalidWords = words.map(w => control.value.includes(w) ? w: null)
      .filter(w => w != null);

      return invalidWords && invalidWords.length > 0
      ? {restrictedWords: invalidWords.join(', ') }
      : null;
    };

