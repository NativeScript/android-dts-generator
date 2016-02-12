package com.telerik.java.api.bcel;

public class StringBuilder2 {
	private final StringBuilder sb;
	
	private final String ENDL = "\n";
	
	public StringBuilder2()
	{
		sb = new StringBuilder();
	}
	
	public StringBuilder2 append(String s)
	{
		sb.append(s);
		return this;
	}

	public StringBuilder2 appendln(String s)
	{
		append(s);
		sb.append(ENDL);
		return this;
	}
	
	public String toString()
	{
		return sb.toString();
	}
}
