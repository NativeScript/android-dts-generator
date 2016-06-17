/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.xml.transform.TransformerException.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export class ErrorListener {
				public warning(param0: javax.xml.transform.TransformerException): void;
				public error(param0: javax.xml.transform.TransformerException): void;
				public fatalError(param0: javax.xml.transform.TransformerException): void;
			}
		}
	}
}
