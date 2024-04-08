import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MESSAGE_TITLE, MESSAGE_TRANS_COMMON, MESSAGE_TYPE } from 'src/app/shared';
import { TranslationService } from 'src/app/shared/i18n';
import { CommonHelper } from '../helpers';

@Injectable({
    providedIn: 'root',
})
export class HandleErrorService {
    constructor(private _messageService: MessageService, private _translationService: TranslationService) {}

    public notifyMsg(msgDetail: string, msgSummary: string, severityType: string): void {
        const DETAIL_MSG = CommonHelper.getErrorMsg(MESSAGE_TRANS_COMMON, msgDetail, this._translationService.getSelectedLanguage());
        const SUMMARY_MSG = CommonHelper.getErrorMsg(MESSAGE_TRANS_COMMON, msgSummary, this._translationService.getSelectedLanguage());
        this._messageService.add({
            severity: severityType,
            summary: SUMMARY_MSG,
            detail: DETAIL_MSG,
            life: 3000,
        });
    }
    public errorResponse(errorCode: string): void {
        switch (errorCode) {
            case MESSAGE_TITLE.SYS017E:
                this.notifyMsg(MESSAGE_TITLE.SYS017E, MESSAGE_TITLE.ERROR, MESSAGE_TYPE.ERR_TYPE);
            break;
            case MESSAGE_TITLE.SYS018E:
                this.notifyMsg(MESSAGE_TITLE.SYS018E, MESSAGE_TITLE.ERROR, MESSAGE_TYPE.ERR_TYPE);
                break;
          
        }
    }
}
