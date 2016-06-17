/// <reference path="./_helpers.d.ts" />
/// <reference path="./org.xml.sax.Attributes.d.ts" />

declare module android {
	export module sax {
		export class StartElementListener {
			public start(param0: org.xml.sax.Attributes): void;
		}
	}
}
