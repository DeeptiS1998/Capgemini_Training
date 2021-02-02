package Assignment3;

import java.util.HashSet;
import java.util.LinkedHashSet;

public class Assignment3Q2 {
    public static void main(String[] args) {
    	LinkedHashSet<Integer> lHSet = new LinkedHashSet<>();
    	lHSet.add(20);
    	lHSet.add(16);
    	lHSet.add(18);
    	lHSet.add(27);
    	lHSet.add(21);
    	if(lHSet == ordered(lHSet)) {
    		System.out.println("ordered");
    	}
    	else {
    	System.out.println("unordered");}
    	System.out.println(ordered(lHSet));
    	
    	HashSet<Integer> hSet = new HashSet<>();
    	hSet.add(20);
    	hSet.add(16);
    	hSet.add(18);
    	hSet.add(27);
    	hSet.add(21);
    	if(lHSet == unordered(hSet)) {
    		System.out.println("ordered");
    	}
    	else {
        	System.out.println("unordered");}
    	System.out.println(unordered(hSet));
    	
    	
    	
    }
    public static LinkedHashSet<?> ordered(LinkedHashSet<?> linkedHashSet){ 
    	return linkedHashSet;
    }
    public static HashSet<?> unordered(HashSet<?> hashSet){
    	return hashSet;
    }
}