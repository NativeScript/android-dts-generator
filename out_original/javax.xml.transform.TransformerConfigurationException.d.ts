/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./javax.xml.transform.SourceLocator.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export class TransformerConfigurationException {
				public constructor(param0: string);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string, param1: javax.xml.transform.SourceLocator);
				public constructor(param0: string, param1: javax.xml.transform.SourceLocator, param2: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor();
				public constructor(param0: string);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string, param1: javax.xml.transform.SourceLocator);
				public constructor(param0: string, param1: javax.xml.transform.SourceLocator, param2: java.lang.Throwable);
			}
		}
	}
}
