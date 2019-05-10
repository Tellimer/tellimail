"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const driver_1 = require("./driver");
class SendgridDriver extends driver_1.MailDriver {
    get config() {
        return this._config;
    }
    constructor(config) {
        super(config);
    }
    transport(mailable, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const chunkSize = 1000;
            for (let i = 0; i < mailable.personalizations.length; i += chunkSize) {
                const personalizations = mailable.personalizations.slice(i, i + chunkSize);
                const success = yield this.sendTo(mailable, personalizations);
                if (!success) {
                    return false;
                }
                else if (callback) {
                    yield callback(personalizations);
                }
            }
            return true;
        });
    }
    sendTo(mailable, personalizations) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                personalizations,
                from: mailable.from,
                subject: mailable.subject,
                content: [{
                        type: 'text/html',
                        value: yield mailable.render(),
                    }],
                mail_settings: {
                    sandbox_mode: {
                        enable: this.config.sandbox === undefined ? false : this.config.sandbox,
                    },
                },
            };
            yield axios_1.default.post('https://api.sendgrid.com/v3/mail/send', data, {
                headers: {
                    authorization: `Bearer ${this.config.apiKey}`,
                    contentType: 'application/json',
                },
            });
            return true;
        });
    }
}
exports.SendgridDriver = SendgridDriver;
//# sourceMappingURL=sendgrid.js.map