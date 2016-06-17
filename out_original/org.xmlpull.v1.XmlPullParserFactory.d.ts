/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlSerializer.d.ts" />

declare module org {
	export module xmlpull {
		export module v1 {
			export class XmlPullParserFactory {
				public constructor();
				public setFeature(param0: string, param1: boolean): void;
				public getFeature(param0: string): boolean;
				public setNamespaceAware(param0: boolean): void;
				public isNamespaceAware(): boolean;
				public setValidating(param0: boolean): void;
				public isValidating(): boolean;
				public newPullParser(): org.xmlpull.v1.XmlPullParser;
				public newSerializer(): org.xmlpull.v1.XmlSerializer;
				public static newInstance(): org.xmlpull.v1.XmlPullParserFactory;
				public static newInstance(param0: string, param1: java.lang.Class): org.xmlpull.v1.XmlPullParserFactory;
				public static PROPERTY_NAME: string;
				public classNamesLocation: string;
				public features: java.util.HashMap;
				public parserClasses: java.util.ArrayList;
				public serializerClasses: java.util.ArrayList;
			}
		}
	}
}
