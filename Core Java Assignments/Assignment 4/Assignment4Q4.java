package Assignment4;

import java.util.ArrayList;

public class Assignment4Q4 {
	
    public ArrayList<String> removeOddLength(ArrayList<String> PList){
    	PList.removeIf(a -> a.length()%2 !=0);
    	return PList;
    }
    public static void main(String[] args) {
    	Assignment4Q4 assign = new Assignment4Q4();
    	ArrayList<String> sList = new ArrayList<>();
    	
    	sList.add("Niall");
    	sList.add("Harry");
    	sList.add("Liam");
    	sList.add("Zayn");
    	sList.add("Louis");
		sList.add("Charliee");
    	System.out.println(assign.removeOddLength(sList));
    }
}