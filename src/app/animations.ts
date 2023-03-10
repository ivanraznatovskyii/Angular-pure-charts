import { animate, state, style, transition, trigger } from '@angular/animations';

export let riseUp = (newStrokeDashoffset: number) => {
  return trigger('riseUp', [
            transition('void => *', [
              style({ opacity: 0, strokeDashoffset: 100 }),
              animate(1000, style({ opacity: 1, strokeDashoffset: newStrokeDashoffset }))
            ])
          ])
}

export let turnUp = (newStrokeDashoffset: number) => {
  return trigger('turnUp', [
            transition('void => *', [
              style({ strokeDashoffset: 100 }),
              animate(1000, style({ strokeDashoffset: newStrokeDashoffset }))
            ])
          ])
}

export let fadeIn = trigger('fadeIn', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate(1000, style({ opacity: 1 }))
  ])
])
