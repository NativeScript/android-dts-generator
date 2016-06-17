/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class RemoteInputCompatBase {
				}
				export module RemoteInputCompatBase {
					export class RemoteInput {
						public constructor();
						public getResultKey(): string;
						public getLabel(): string;
						public getChoices(): native.Array<java.lang.CharSequence>;
						public getAllowFreeFormInput(): boolean;
						public getExtras(): android.os.Bundle;
					}
					export module RemoteInput {
						export class Factory {
							public build(param0: string, param1: string, param2: native.Array<java.lang.CharSequence>, param3: boolean, param4: android.os.Bundle): android.support.v4.app.RemoteInputCompatBase.RemoteInput;
							public newArray(param0: number): native.Array<android.support.v4.app.RemoteInputCompatBase.RemoteInput>;
						}
					}
				}
			}
		}
	}
}
