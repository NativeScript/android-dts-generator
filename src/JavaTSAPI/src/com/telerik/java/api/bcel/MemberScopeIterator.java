package com.telerik.java.api.bcel;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.function.Consumer;

import org.apache.bcel.classfile.Field;
import org.apache.bcel.classfile.FieldOrMethod;
import org.apache.bcel.classfile.JavaClass;
import org.apache.bcel.classfile.Method;

public class MemberScopeIterator implements Iterator<MemberScope> {
	private ClassScope parent;
	private final JavaClass javaClass;
	private final FieldOrMethod[] members;
	private int idx;
	
	public MemberScopeIterator(ClassScope parent, JavaClass javaClass) {
		this.parent = parent;
		this.javaClass = javaClass;
		this.members = getMembers();
		this.idx = 0;
	}

	@Override
	public boolean hasNext() {
		return this.idx < this.members.length;
	}

	@Override
	public MemberScope next() {
		FieldOrMethod fm = this.members[this.idx++];
		return (fm instanceof Field) ? new FieldScope(parent, (Field)fm) : new MethodScope(parent, (Method)fm);
	}

	@Override
	public void remove() {
		throw new UnsupportedOperationException();
	}

	@Override
	public void forEachRemaining(Consumer<? super MemberScope> action) {
		throw new UnsupportedOperationException();
	}

	private FieldOrMethod[] getMembers() {
		ArrayList<FieldOrMethod> members = new ArrayList<FieldOrMethod>();
		for (Method m: this.javaClass.getMethods()) {
			if ((m.isPublic() || m.isProtected()) && !m.isSynthetic()) {
				members.add(m);
			}
		}
		for (Field f: this.javaClass.getFields()) {
			if ((f.isPublic() || f.isProtected()) && !f.isSynthetic()) {
				members.add(f);
			}
		}
		return members.toArray(new FieldOrMethod[members.size()]);
	}
}
