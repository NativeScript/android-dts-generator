/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.xml.namespace.QName.d.ts" />

declare module javax {
	export module xml {
		export module datatype {
			export class DatatypeConstants {
				public static APRIL: number;
				public static AUGUST: number;
				public static DATE: javax.xml.namespace.QName;
				public static DATETIME: javax.xml.namespace.QName;
				public static DAYS: javax.xml.datatype.DatatypeConstants.Field;
				public static DECEMBER: number;
				public static DURATION: javax.xml.namespace.QName;
				public static DURATION_DAYTIME: javax.xml.namespace.QName;
				public static DURATION_YEARMONTH: javax.xml.namespace.QName;
				public static EQUAL: number;
				public static FEBRUARY: number;
				public static FIELD_UNDEFINED: number;
				public static GDAY: javax.xml.namespace.QName;
				public static GMONTH: javax.xml.namespace.QName;
				public static GMONTHDAY: javax.xml.namespace.QName;
				public static GREATER: number;
				public static GYEAR: javax.xml.namespace.QName;
				public static GYEARMONTH: javax.xml.namespace.QName;
				public static HOURS: javax.xml.datatype.DatatypeConstants.Field;
				public static INDETERMINATE: number;
				public static JANUARY: number;
				public static JULY: number;
				public static JUNE: number;
				public static LESSER: number;
				public static MARCH: number;
				public static MAX_TIMEZONE_OFFSET: number;
				public static MAY: number;
				public static MINUTES: javax.xml.datatype.DatatypeConstants.Field;
				public static MIN_TIMEZONE_OFFSET: number;
				public static MONTHS: javax.xml.datatype.DatatypeConstants.Field;
				public static NOVEMBER: number;
				public static OCTOBER: number;
				public static SECONDS: javax.xml.datatype.DatatypeConstants.Field;
				public static SEPTEMBER: number;
				public static TIME: javax.xml.namespace.QName;
				public static YEARS: javax.xml.datatype.DatatypeConstants.Field;
			}
			export module DatatypeConstants {
				export class Field {
					public toString(): string;
					public getId(): number;
				}
			}
		}
	}
}
