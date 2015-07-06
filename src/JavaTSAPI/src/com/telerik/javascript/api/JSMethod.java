package com.telerik.javascript.api;

import java.util.List;

import com.telerik.java.api.JMethod;
import com.telerik.java.api.compiler.model.JavaClassInfo;
import com.telerik.java.api.compiler.model.MethodInfo;

public class JSMethod extends JSFunction {
	
	private Boolean isPublic;
	
	public boolean isStatic() {
		if (jPeer == null) return false;
		else return jPeer.isStatic();
	}
	
	public boolean isProtected() {
		if (jPeer == null) return false;
		else {
			boolean isProtected = jPeer.isProtected();
			if (isProtected) {
				MethodInfo m = (MethodInfo)jPeer;
				JavaClassInfo c = m.parent;
				List<JMethod> ms = c.getMethods();
				boolean overloadedAndPublic = false;
				for (JMethod x: ms)
				{
					overloadedAndPublic = x.getName().equals(jPeer.getName()) && x.isPublic();
					if (overloadedAndPublic) {
						 break;
					}
				}
				if (overloadedAndPublic) {
					this.isPublic = new Boolean(true);
					isProtected = false;
				}
			}
			return isProtected;
		}
	}
	
	public boolean isPublic() {
		if (jPeer == null) return false;
		else {
			if (this.isPublic != null) {
				return this.isPublic.booleanValue();
			}
			return jPeer.isPublic();
		}
	}
}
