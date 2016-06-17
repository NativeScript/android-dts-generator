/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.ContentHandler.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlSerializer.d.ts" />

declare module android {
	export module util {
		export class Xml {
			public static parse(param0: string, param1: org.xml.sax.ContentHandler): void;
			public static parse(param0: java.io.Reader, param1: org.xml.sax.ContentHandler): void;
			public static parse(param0: java.io.InputStream, param1: android.util.Xml.Encoding, param2: org.xml.sax.ContentHandler): void;
			public static newPullParser(): org.xmlpull.v1.XmlPullParser;
			public static newSerializer(): org.xmlpull.v1.XmlSerializer;
			public static findEncodingByName(param0: string): android.util.Xml.Encoding;
			public static asAttributeSet(param0: org.xmlpull.v1.XmlPullParser): android.util.AttributeSet;
			public static FEATURE_RELAXED: string;
		}
		export module Xml {
			export class Encoding {
				public static values(): native.Array<android.util.Xml.Encoding>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.util.Xml.Encoding;
				public static ISO_8859_1: android.util.Xml.Encoding;
				public static US_ASCII: android.util.Xml.Encoding;
				public static UTF_16: android.util.Xml.Encoding;
				public static UTF_8: android.util.Xml.Encoding;
			}
		}
	}
}
