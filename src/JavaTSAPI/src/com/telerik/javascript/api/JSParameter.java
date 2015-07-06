package com.telerik.javascript.api;

import java.util.HashMap;
import com.telerik.java.api.*;

public class JSParameter {
	
	private static HashMap<String, String> reservedKeywords;
	
	static {
		reservedKeywords = new HashMap<String, String>();
		reservedKeywords.put("break", "breakArg");
		reservedKeywords.put("case", "caseArg");
		reservedKeywords.put("catch", "catchArg");
		reservedKeywords.put("continue", "continueArg");
		reservedKeywords.put("debugger", "debuggerArg");
		reservedKeywords.put("default", "defaultArg");
		reservedKeywords.put("delete", "deleteArg");
		reservedKeywords.put("do", "doArg");
		reservedKeywords.put("else", "elseArg");
		reservedKeywords.put("finally", "finallyArg");
		reservedKeywords.put("for", "forArg");
		reservedKeywords.put("function", "funcArg");
		reservedKeywords.put("if", "ifarg");
		reservedKeywords.put("in", "input");
		reservedKeywords.put("instanceof", "instanceOfArg");
		reservedKeywords.put("new", "newArg");
		reservedKeywords.put("return", "returnArg");
		reservedKeywords.put("switch", "switchArg");
		reservedKeywords.put("this", "thisArg");
		reservedKeywords.put("throw", "throwArg");
		reservedKeywords.put("try", "tryArg");
		reservedKeywords.put("typeof", "typeofArg");
		reservedKeywords.put("var", "arg");
		reservedKeywords.put("void", "voidArg");
		reservedKeywords.put("while", "whileArg");
		reservedKeywords.put("with", "withArg");
	}
	
	protected JParameter jPeer;
	protected JSType type;
	protected String name;
	
	public JParameter getPeer() {
		return jPeer;
	}
	
	public JSType getType() {
		return type;
	}
	
	public String getName() {
		return this.getSafeName();
	}
	
	private String getSafeName() {
		String name = this.getCoercedName();
		if (name != null && JSParameter.reservedKeywords.containsKey(name)) {
			return JSParameter.reservedKeywords.get(name);
		} else {
			return name;
		}
	}
	
	private String getCoercedName() {
		if (name != null) {
			return name;
		} else if (jPeer != null) {
			return jPeer.getName();
		} else {
			return null;
		}
	}

	public String getDocumentation() {
		return this.getPeer() == null ? null : JSDocConverter.getParameterHelp(this.getPeer().getDocumentation(), this.getName());
	}
}
