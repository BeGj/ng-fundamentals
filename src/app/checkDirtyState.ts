import { CreateEventComponent } from './events/create-event/create-event.component';



export const checkDirtyState: any = (component: CreateEventComponent) => {
  if (component.isDirty) {
    return window.confirm('You may not have saved this event, do you really want to cancel?');
  }
  return true;
};
