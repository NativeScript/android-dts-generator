package com.telerik.javascript.api;

import java.util.regex.Pattern;

public class JSDocConverter {
	
	public static String getFieldHelp(String javaDoc) {
		if (javaDoc == null || javaDoc.equals(""))
			return null;
		
		String jsDoc = extractParagraph(javaDoc);
		
		if (jsDoc == null || jsDoc.equals(""))
			return null;
		
		jsDoc = removeJavadocs(jsDoc);
		jsDoc = normalizeWhitespace(jsDoc);
		
		if (javaDoc == null || javaDoc.equals(""))
			return null;
		
		return jsDoc;
	}
	
	public static String getNodeHelp(String javaDoc) {
		if (javaDoc == null || javaDoc.equals(""))
			return null;
		
		String jsDoc = extractParagraph(javaDoc);
		
		if (jsDoc == null || jsDoc.equals(""))
			return null;
		
		jsDoc = removeJavadocs(jsDoc);
		jsDoc = normalizeWhitespace(jsDoc);
		
		if (javaDoc == null || javaDoc.equals(""))
			return null;
		
		return jsDoc;
	}
	
	public static String getFunctionHelp(String javaDoc) {
		if (javaDoc == null || javaDoc.equals(""))
			return null;
		
		String jsDoc = extractParagraph(javaDoc);
		
		if (jsDoc == null || jsDoc.equals(""))
			return null;
		
		jsDoc = removeJavadocs(jsDoc);
		jsDoc = normalizeWhitespace(jsDoc);
		
		if (javaDoc == null || javaDoc.equals(""))
			return null;
		
		return jsDoc;
	}
	
	public static String getParameterHelp(String javaDoc, String paramName) {
		if (javaDoc == null || javaDoc.equals(""))
			return null;
		
		String jsDoc = extractParamdoc(javaDoc, paramName);

		if (javaDoc == null || javaDoc.equals(""))
			return null;
		
		return jsDoc;
	}
	
	private static String extractParamdoc(String doc, String param) {
		return doc.trim()
				.replaceFirst("^@param\\s*+", "")
				.replaceFirst("^" + Pattern.quote(param) + "\\s*+", "");
	}
	
	private static String removeJavadocs(String jsDoc) {
		String result = jsDoc;
		result = result.replaceAll("\\{\\s?+\\@[^\\s]*+\\s*+\\}", "");
		result = result.replaceAll("\\{\\@[^\\s\\}]*+\\s*+([^\\}]*+)\\}", "$1");
		result = result.replaceAll("\\@[^\\s]*+", "");
		return result;
	}
	
	private static String normalizeWhitespace(String jsDoc) {
		jsDoc = jsDoc.replaceAll("\\s++", " ");
		return jsDoc;
	}
	
	private static String extractParagraph(String str) {
		String lines[] = str.split("\\r?\\n");
		String paragraph = null;
		for(String line: lines) {
			String trimmedLine = line.trim();
			// TODO: Check if we can consume the @return anyway...
			if (line.isEmpty() || line.contains("<p>") || line.contains("@param") || line.contains("@return"))
				break;
			
			paragraph = paragraph == null ? trimmedLine : (paragraph + " " + trimmedLine);
		}
		return paragraph;
	}
}


