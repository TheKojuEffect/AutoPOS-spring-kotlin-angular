import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';

import {
    accountState,
    Activate,
    ActivateComponent,
    Password,
    PasswordComponent,
    PasswordResetFinish,
    PasswordResetFinishComponent,
    PasswordResetInit,
    PasswordResetInitComponent,
    PasswordStrengthBarComponent,
    Register,
    RegisterComponent,
    SettingsComponent
} from './';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(accountState, {useHash: true})
    ],
    declarations: [
        ActivateComponent,
        RegisterComponent,
        PasswordComponent,
        PasswordStrengthBarComponent,
        PasswordResetInitComponent,
        PasswordResetFinishComponent,
        SettingsComponent
    ],
    providers: [
        Register,
        Activate,
        Password,
        PasswordResetInit,
        PasswordResetFinish
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AutoPosAccountModule {
}
