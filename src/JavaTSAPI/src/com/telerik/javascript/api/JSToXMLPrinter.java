package com.telerik.javascript.api;

import java.io.StringWriter;
import java.util.HashSet;
import java.util.List;

public class JSToXMLPrinter {
	
	StringWriter writer;
	JSGlobal global;
	
	public JSToXMLPrinter() {
	}
	
	public void setStringWriter(StringWriter writer) {
		this.writer = writer;
	}
	
	public void setGlobal(JSGlobal global) {
		this.global = global;
	}
	
	public void print() {
		print(global);
	}
	
	private void printChildren(JSNode jsNodes) {
		print(jsNodes.getChildren());
	}

	private void print(JSNode jsNode) {
		if (jsNode instanceof JSGlobal)
			print((JSGlobal)jsNode);
		else if (jsNode instanceof JSModule)
			print((JSModule)jsNode);
		else if (jsNode instanceof JSClass)
			print((JSClass)jsNode);
		else if (jsNode instanceof JSInterface)
			print((JSInterface)jsNode);
		else if (jsNode instanceof JSEnum)
			print((JSEnum)jsNode);
	}
	
	private void print(Iterable<JSNode> children) {
		for (JSNode jsNode: children) {
			print(jsNode);
		}
	}
	
	private void print(JSGlobal global) {
		writer.write("<global xsi:schemaLocation=\"http://www.telerik.com/2014/js/api JavaScriptAPI.xsd\" xmlns=\"http://www.telerik.com/2014/js/api\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:tkxsl=\"urn:schemas-telerik-com-js:xslt\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\">");
		printFunctions(global.getFunctions());
		printChildren(global);
		writer.write("</global>");
	}
	
	private void print(JSModule module) {
		writer.write("<module qname=\"" + module.getQualifiedName() + "\">");
		printFunctions(module.getFunctions());
		printChildren(module);
		writer.write("</module>");
	}
	
	private void print(JSClass jsClass) {
		writer.write("<class qname=\"" + jsClass.getQualifiedName() + "\">");
		printDocumentation(jsClass.getDocumentation());
		printTypeParameters(jsClass.getTypeParameters());
		printSuperclass(jsClass);
		printImplementedInterfaces(jsClass.getInterfaces());
		printConstructors(jsClass.getConstructors());
		printFields(jsClass.getFields());
		printMethods(jsClass.getMethods());
		printIndexers(jsClass.getIndexers());
		printChildren(jsClass);
		writer.write("</class>");
	}

	private void printSuperclass(JSClass jsClass) {
		if (jsClass.getSuperclass() != null) {
			writer.write("<extends>");
			printTypeReference(jsClass.getSuperclass());
			writer.write("</extends>");
		}
	}

	private void print(JSInterface jsInterface) {
		writer.write("<interface qname=\"" + jsInterface.getQualifiedName() + "\">");
		printDocumentation(jsInterface.getDocumentation());
		printTypeVariables(jsInterface);
		printExtendedInterfaces(jsInterface.getInterfaces());
		printFields(jsInterface.getFields());
		printMethods(jsInterface.getMethods());
		printChildren(jsInterface);
		writer.write("</interface>");
	}
	
	private void printExtendedInterfaces(List<JSType> jsInterfaces) {
		if (jsInterfaces.size() > 0) {
			writer.write("<extends>");
			for (JSType jsInterface: jsInterfaces) {
				printTypeReference(jsInterface);
			}
			writer.write("</extends>");
		}
	}
	
	private void printImplementedInterfaces(List<JSType> jsInterfaces) {
		if (jsInterfaces.size() > 0) {
			writer.write("<implements>");
			for (JSType jsInterface: jsInterfaces) {
				printTypeReference(jsInterface);
			}
			writer.write("</implements>");
		}
	}
	
	private void printTypeVariables(JSInterface jsInterface) {
		for (JSTypeVariable jsTypeVariable: jsInterface.getTypeParameters())
			printTypeParameter(jsTypeVariable);
	}

	private void print(JSEnum jsEnum) {
		writer.write("<enum qname=\"" + jsEnum.getQualifiedName() + "\">");
		printDocumentation(jsEnum.getDocumentation());
		printEnumFields(jsEnum.getEnumFields());
		printFunctions(jsEnum.getFunctions());
		printChildren(jsEnum);
		writer.write("</enum>");
	}
	
	private void printEnumFields(Iterable<JSEnumField> jsEnumFields) {
		for (JSEnumField jsEnumField: jsEnumFields)
			print(jsEnumField);
	}

	private void print(JSEnumField jsEnumField) {
		writer.write("<member name=\"" + jsEnumField.getName() + "\">");
		printDocumentation(jsEnumField.getDocumentation());
		writer.write("</member>");
	}
	
	private void printConstructors(Iterable<JSConstructor> jsConstructors) {
		for (JSConstructor jsConstructor: jsConstructors)
			print(jsConstructor);
	}
	
	private void printFields(Iterable<JSField> jsFields) {
		for (JSField jsField: jsFields)
			print(jsField);
	}
	
	private void print(JSConstructor jsConstructor) {
		writer.write("<constructor>");
		printDocumentation(jsConstructor.getDocumentation());
		printTypeParameters(jsConstructor.getTypeParameters());
		printParameters(jsConstructor.getParameters());
		writer.write("</constructor>");
	}

	private void print(JSField jsField) {
		writer.write("<field name=\"" + jsField.getName() + "\"");
		if (jsField.isPrivate())
			writer.write(" access=\"private\"");
		if (jsField.isStatic())
			writer.write(" modifier=\"static\"");
		if (jsField.isOptional())
			writer.write(" optional=\"true\"");
		writer.write(">");
		printDocumentation(jsField.getDocumentation());
		printTypeAnnotation(jsField.getGenericType());
		writer.write("</field>");
	}
	
	private void printMethods(Iterable<JSMethod> jsMethods) {
		for (JSMethod jsMethod: jsMethods)
			print(jsMethod);
	}
	
	private void printIndexers(Iterable<JSIndexer> jsIndexers) {
		for (JSIndexer jsIndexer: jsIndexers)
			print(jsIndexer);
	}

	private void printFunctions(Iterable<JSFunction> jsFunctions) {
		for (JSFunction jsFunction: jsFunctions)
			print(jsFunction);
	}
	
	private void print(JSFunction jsFunction) {
		writer.write("<function name=\"" + jsFunction.getName() + "\"");
		writer.write(">");
		printDocumentation(jsFunction.getDocumentation());
		printTypeParameters(jsFunction.getTypeParameters());
		printParameters(jsFunction.getParameters());
		printReturnType(jsFunction.getReturnType());
		writer.write("</function>");
	}

	private void print(JSMethod jsMethod) {
		writer.write("<method name=\"" + jsMethod.getName() + "\"");
		if (jsMethod.isStatic())
			writer.write(" modifier=\"static\"");
		if (jsMethod.isProtected())		
			writer.write(" access=\"protected\"");		
		if ((jsMethod.parent instanceof JSClass) && jsMethod.isPublic())		
			writer.write(" access=\"public\"");
		writer.write(">");
		printDocumentation(jsMethod.getDocumentation());
		printTypeParameters(jsMethod.getTypeParameters());
		printParameters(jsMethod.getParameters());
		printReturnType(jsMethod.getReturnType());
		writer.write("</method>");
	}
	
	private void print(JSIndexer jsIndexer) {
		writer.write("<indexer>");
		printParameter(jsIndexer.getIndexParameter());
		printReturnType(jsIndexer.getReturnType());
		writer.write("</indexer>");
	}

	private void printTypeParameters(List<JSTypeVariable> jsTypeVariables) {
		for (JSTypeVariable jsTypeVariable: jsTypeVariables)
			printTypeParameter(jsTypeVariable);
	}
	
	private void printTypeParameter(JSTypeVariable jsTypeVariable) {
		writer.write("<type-param name=\"" + jsTypeVariable.getName() + "\">");
		JSType bound = jsTypeVariable.getBound();
		if (bound != null)
			printTypeReference(bound);
		writer.write("</type-param>");
	}
	
	private void printParameters(Iterable<JSParameter> jsParameters) {
		for (JSParameter jsParameter: jsParameters)
			printParameter(jsParameter);
	}
	
	private void printParameter(JSParameter jsParameter) {
		writer.write("<param name=\"" + jsParameter.getName() + "\">"); 
		printDocumentation(jsParameter.getDocumentation());
		printTypeAnnotation(jsParameter.getType());
		writer.write("</param>");
	}
	
	public static HashSet<Character> codemap = new HashSet<Character>();
	
	private void printDocumentation(String doc) {
		if (doc != null) {
			writer.write("<doc>");
			String escaped = doc
					.replaceAll("\\s+", " ")
					.replace("&", "&amp;")
					.replace(">", "&gt;")
					.replace("<", "&lt;")
					.replace("\0", "")
					.replace(String.valueOf((char)0xd800), "0xd800")
					.replace(String.valueOf((char)0xdbff), "0xdbff")
					.replace(String.valueOf((char)0xdc00), "0xdc00")
					.replace(String.valueOf((char)0xdfff), "0xdfff");
			
			StringBuilder sb = new StringBuilder();		
			char[] arr = new char[1];		
			for (int i=0; i<escaped.length(); i++)		
			{		
				char c = escaped.charAt(i);		
				arr[0] = c;		
				int code = Character.codePointAt(arr, 0);		
				if (code > 127)		
				{		
					sb.append("0x");		
					sb.append(Integer.valueOf(String.valueOf(code), 16));		
				}		
				else		
				{		
					sb.append(arr[0]);		
				}		
				codemap.add(c);		
			}		
					
			//writer.write(escaped);		
			writer.write(sb.toString());
			
			//			writer.write("<![CDATA[");
//			writer.write(doc.replace("]]>", "]]]]><![CDATA[>"));
//			writer.write("]]>");
			writer.write("</doc>");
		}
	}

	private void printTypeAnnotation(JSType jsType) {
		if (jsType != null) {
			writer.write("<type-annotation>");
			printTypeReference(jsType);
			writer.write("</type-annotation>");
		}
	}

	private void printReturnType(JSType jsReturnType) {
		if (jsReturnType == global.getTheVoidType())
			return;
		
		writer.write("<returns>");
		printTypeReference(jsReturnType);
		writer.write("</returns>");
	}
	
	private void printTypeReference(JSType jsType) {
		try {
			if (jsType instanceof JSArray) printTypeReference((JSArray)jsType);
			else if (jsType instanceof JSClass) printTypeReference((JSClass)jsType);
			else if (jsType instanceof JSInterface) printTypeReference((JSInterface)jsType);
			else if (jsType instanceof JSEnum) printTypeReference((JSEnum)jsType);
			else if (jsType instanceof JSPrimitive) printTypeReference((JSPrimitive)jsType);
			else if (jsType instanceof JSParameterizedType) printTypeReference((JSParameterizedType)jsType);
			else if (jsType instanceof JSTypeVariable) printTypeReference((JSTypeVariable)jsType);
			else if (jsType instanceof JSObjectType) printTypeReference((JSObjectType)jsType);
			else throw new UnsupportedOperationException("Writing unsupported JSType reference.");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private void printTypeReference(JSArray jsArray) {
		writer.write("<array>");
		printTypeReference(jsArray.getComponentType());
		writer.write("</array>");
	}
	
	private void printTypeReference(JSClass jsClass) {
		writer.write("<type name=\"" + jsClass.getQualifiedName() + "\">");
		// TODO: This should move in the JToJSConverter and for such types a JSParameterizedType should be generated.
		// JSClass with type args should not come here.
		for(JSType type: jsClass.getTypeParameters())
			writer.write("<object/>");
		writer.write("</type>");
	}
	
	private void printTypeReference(JSInterface jsInterface) {
		writer.write("<type name=\"" + jsInterface.getQualifiedName() + "\">");
		// TODO: This should move in the JToJSConverter and for such types a JSParameterizedType should be generated.
		// JSClass with type args should not come here.
		for(JSType type: jsInterface.getTypeParameters())
			writer.write("<object/>");
		writer.write("</type>");
	}
	
	private void printTypeReference(JSEnum jsEnum) {
		writer.write("<type name=\"" + jsEnum.getQualifiedName() + "\" />");
	}
	
	private void printTypeReference(JSPrimitive jsPrimitive) {
		writer.write("<" + jsPrimitive.getName()  + "/>");
	}
	
	private void printTypeReference(JSParameterizedType jsParameterizedType) {
		// TODO: Class, Interface and Enum seem to deserve a common base class:
		JSType jsType = jsParameterizedType.getRawType();
		String qualifiedName = null;
		if (jsType instanceof JSClass) qualifiedName = ((JSClass)jsType).getQualifiedName();
		else if (jsType instanceof JSInterface) qualifiedName = ((JSInterface)jsType).getQualifiedName();
		else if (jsType instanceof JSEnum) qualifiedName = ((JSEnum)jsType).getQualifiedName();
		
		writer.write("<type name=\"" + qualifiedName + "\">");
		for(JSType actualType: jsParameterizedType.getActualTypeArguments()) {
			printTypeReference(actualType);
		}
		writer.write("</type>");
	}
	
	private void printTypeReference(JSTypeVariable jsTypeVariable) {
		writer.write("<type-ref name=\"" + jsTypeVariable.getName() + "\" />");
	}
	
	private void printTypeReference(JSObjectType jsObjectType) {
		writer.write("<object-type>");
		print(jsObjectType.getNews());
		writer.write("</object-type>");
	}

	private void print(List<JSNew> news) {
		for (JSNew jsNew: news)
			printNew(jsNew);
	}

	private void printNew(JSNew jsNew) {
		writer.write("<new>");
		// TODO: jsNew.getTypeParameters();
		printParameters(jsNew.getParameters());
		printReturnType(jsNew.getReturnType());
		writer.write("</new>");
	}
}





