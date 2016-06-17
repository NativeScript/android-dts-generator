/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module java {
	export module nio {
		export module charset {
			export module spi {
				export class CharsetProvider {
					public constructor();
					public charsets(): java.util.Iterator;
					public charsetForName(param0: string): java.nio.charset.Charset;
				}
			}
		}
	}
}
