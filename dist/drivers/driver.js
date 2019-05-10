"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class MailDriver {
    get config() {
        return this._config;
    }
    constructor(config) {
        this._config = config;
    }
    check(mailable) {
        if (!mailable.from) {
            mailable.from = this._config.defaultFrom;
        }
        if (!mailable.personalizations || mailable.personalizations.length === 0) {
            throw new Error('Mailable has no one to send to. Please set the personalizations property or use the .to() method');
        }
        if (!mailable.subject) {
            throw new Error('Mailable has no subject. Please set the subject property or use the .withSubject() method');
        }
        return true;
    }
    send(mailable, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            mailable.build();
            this.check(mailable);
            const success = yield this.transport(mailable, callback);
            return success;
        });
    }
}
exports.MailDriver = MailDriver;
//# sourceMappingURL=driver.js.map