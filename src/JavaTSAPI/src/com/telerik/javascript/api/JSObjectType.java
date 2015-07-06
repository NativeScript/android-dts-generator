package com.telerik.javascript.api;

import java.util.ArrayList;
import java.util.List;

public class JSObjectType implements JSType {
	
	protected ArrayList<JSNew> news = new ArrayList<JSNew>();	
	// TODO: fields

	public List<JSNew> getNews() {
		return news;
	}
}
