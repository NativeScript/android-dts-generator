/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.webkit.WebMessagePort.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module webkit {
		export class WebMessage {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: native.Array<android.webkit.WebMessagePort>);
			public getData(): string;
			public getPorts(): native.Array<android.webkit.WebMessagePort>;
		}
	}
}
