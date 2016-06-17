/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.xml.validation.Validator.d.ts" />
/// <reference path="./javax.xml.validation.ValidatorHandler.d.ts" />

declare module javax {
	export module xml {
		export module validation {
			export class Schema {
				public constructor();
				public newValidator(): javax.xml.validation.Validator;
				public newValidatorHandler(): javax.xml.validation.ValidatorHandler;
			}
		}
	}
}
