/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module net {
		export module sip {
			export class SipRegistrationListener {
				public onRegistering(param0: string): void;
				public onRegistrationDone(param0: string, param1: number): void;
				public onRegistrationFailed(param0: string, param1: number, param2: string): void;
			}
		}
	}
}
